import Route from '@ember/routing/route';
import fetch from "fetch";
export default Route.extend({
   model() {
       
       // setup api url and query
       const url =    'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-27/sparql';
       const query = `
       PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
       PREFIX dc: <http://purl.org/dc/elements/1.1/>
       PREFIX dct: <http://purl.org/dc/terms/>
       PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
       PREFIX edm: <http://www.europeana.eu/schemas/edm/>
       PREFIX foaf: <http://xmlns.com/foaf/0.1/>
       
       SELECT ?cho ?title ?placeName ?type ?imageLink WHERE {
              <https://hdl.handle.net/20.500.11840/termmaster22046> skos:narrower* ?place .
         VALUES ?type {"Brief"}
              ?place skos:prefLabel ?placeName .
              ?cho dct:spatial ?place .
           ?cho dc:type ?type .
           ?cho dc:title ?title .
           ?cho foaf:depiction ?imageLink .
        
         
           #    FILTER langMatches(lang(?title), "ned")
       
       }
         
       `;
       // handle data
       const handleData = (json) =>{
           let bindings =  json.results.bindings;
           for (let i=0; i < bindings.length; i++){
               let objectItem = bindings[i];
               objectItem.cho = objectItem.cho.value;
               objectItem.placeName = objectItem.placeName.value;
               objectItem.title = objectItem.title.value;
               objectItem.type = objectItem.type.value;
               objectItem.image = objectItem.imageLink.value;
           }
           console.log(bindings);
           return bindings
       };
       // fetch data

       
       return fetch(url+'?query='+encodeURIComponent(query)+'&format=json')
           .then(res => res.json())
           .then(handleData)
           .catch(err => console.error(err));

           
          
   }
});