# Nihon aishiteruyo!
Wij houden van Japan!

![Imgur](https://i.imgur.com/ILfI2Y4.jpg)

## Inhoudsopgave
- [Nihon aishiteruyo!](#nihon-aishiteruyo-)
  * [Inhoudsopgave](#inhoudsopgave)
  * [Het Concept](#het-concept)
  * [Johan uit Deshima](#johan-uit-deshima)
  * [Analyseren, Schrijven, Versturen!](#analyseren-schrijven-versturen-)
  * [Voor wie is de applicatie?](#voor-wie-is-de-applicatie-)
  * [Welke data wordt er gebruikt?](#welke-data-wordt-er-gebruikt-)
    + [Hoe wordt de data verkregen?](#hoe-wordt-de-data-verkregen-)
  * [Op welke devices gaat het werken?](#op-welke-devices-gaat-het-werken-)
  * [Hoe start ik de applicatie (online)?](#hoe-start-ik-de-applicatie--online--)
  * [Hoe start ik de applicatie (offline)?](#hoe-start-ik-de-applicatie--offline--)
  * [Geen NPM of Node?](#geen-npm-of-node-)
- [How to get Ember running](#how-to-get-ember-running)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Running / Development](#running---development)
    + [Code Generators](#code-generators)
    + [Running Tests](#running-tests)
    + [Linting](#linting)
    + [Building](#building)
    + [Deploying](#deploying)
  * [Further Reading / Useful Links](#further-reading---useful-links)


## Het Concept
Het concept van Nihon aishiteruyo is bedacht om het koloniale verleden van Nederland te verbinden met mensen.
Het verleden van Nederland in Japan speelt zich af in Deshima. Door middel van deze online applicatie wil ik bezoekers van het NMVW de handelspost Deshima laten leren kennen. Deshima is een klein stukje Nederland in Japan nabij de havenstad Nagasaki. Voor de Nederlanders was er een kunstmatig eiland opgebouwd waar zij konden  wonen en hun beroep uitoefenen.

## Johan uit Deshima
Een persoon is prominent aanwezig in de collectie omtrent Deshima. Deze persoon heeft een hoop brieven geschreven tijdens zijn verblijf in Deshima. Deze brieven zijn goed bewaard gebleven en gedigitaliseerd. Maar de vertaling is nog behoorlijk lastig. Johan schreef namelijk zoals heel gebruikelijk in die tijd met hele mooie lusletters en oud Nederlandse woorden.

## Analyseren, Schrijven, Versturen!
Samen met de community willen wij de brieven van Johan zo goed mogelijk begrijpen. En daarom hebben wij iedereen zijn hulp nodig! Kies een brief naar keuze en analyseer deze. Vervolgens kun jij je eigen interpetatie van de brief opschrijven en versturen naar de database! Zo creëren wij een collectie van ingezonden verhalen en kunnen we beter het verhaal van Johan leren kennen.

![Deshima](https://inter-antiquariaat.nl/wp-content/uploads/Nagasaki-Deshima-naar-Engelbert-Kaempfer-ca.-1750.jpg)

## Voor wie is de applicatie?
De applicatie is voor iedereen beschikbaar. Maar de doielgroep bestaat voornamelijk uit Japanners levend in Nederland,  Nederlandse Japanners en mensen die gewoon fanatiek van Japan houden. In Amstelveen bevindt zich een van de grootste Japanse communities van west-europa. Uitgerekend een mooie kans om een concept te ontwikkelen dat naadloos aansluit bij deze doelgroep.

## Welke data wordt er gebruikt?
De data die gebruikt wordt is hoofdzakelijk afkomstig uit de collectie van het NMVW. Deze data zal bestaan uit beeldmateriaal, objecten, jaartallen en geschreven teksten die een relatie hebben tot Deshima. De collectie is op dit adres te vinden : [Culturen Collectie](http://collectie.wereldculturen.nl/)

### Hoe wordt de data verkregen?
De data wordt opgevraagd door middel van SparQL queries. Deze data wordt ingeladen en wordt omgevormd tot een format dat door de meeste browsers gelezen kan worden.

## Op welke devices gaat het werken?
Alle devices met Google Chrome als webbrowser. Andere browsers zullen ongetwijfeld de applicatie kunnen starten en lezen. Maar de applicatie is niet geoptimaliseerd voor deze browsers. Voor de beste ervaring raad ik aan om Chrome te gebruiken.

## Hoe start ik de applicatie (online)?
De applicatie is hier te vinden:[Nihon Aishiteruyo](https://emberrob.herokuapp.com/)

## Hoe start ik de applicatie (offline)?
Maak een lokale kopie van deze repo door hem te pullen naar een directory naar keuze.
Gebruik een Git GUI of CLI om de repo te clonen.

Als de repo gecloned is. Navigeer dan met de terminal naar de root van de applicatie. Wanneer je daar bent dan kun je de applicatie starten door middel van het commando: 'npm install' gevolgd door 'npm start'

## Geen NPM of Node?
Voor het gebruik van de applicatie in een lokale omgeving heb je Node en NPM nodig.
Hoe je dat installeert kun je hier vinden>
- [Node](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm)

# How to get Ember running

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-quickstart`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

### Live link
[Heroku](https://dashboard.heroku.com/apps/emberrob)

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
