# Climate App – ilmastonmuutokseen liittyvän tiedon visualisointityökalu

## _Tekijä: Janika Savela_

## Esittely

Climate App on Oulun ammattikorkeakoulun 2. vuoden projektikurssilla tekemäni suurehko web-sovellus. Tehtävänä oli suunnitella ja toteuttaa ilmastonmuutokseen liittyvän tiedon visualisointityökalu käyttäen React -teknologiaa selaimessa ja JavaScript/NodeJS -teknologiaa palvelimessa. Projekti olisi kuulunut tehdä 4 hengen projektiryhmissä, mutta ryhmässäni muut opiskelijat eivät asianmukaisesti osallistuneet projektin tekemiseen, mistä syystä päädyin tekemään projektin yksin. Projektissa oli yhdelle ihmiselle todella paljon tekemistä. Onnekseni aihe oli mielestäni mielenkiintoinen ja projektia oli mukava työstää, minkä vuoksi suuri työmäärä ei haitannut. Toki hieman kiire meinasi tulla, jotta sai kaiken tehtyä valmiiksi aikataulujen puitteissa. Web-kehitys erityisesti kiinnostaa itseäni ja koen että oppimista tapahtui paljon projektin aikana, mistä olen iloinen. Projektissa luodut näkymät esittävät eri tutkimustuloksien dataa kaavioiden muodossa, teemana maailmanlaajuiset lämpötilatiedot, co2 pitoisuudet ja päästölähteet.

## Toiminnallisuudet ja teknologiat niiden takana

### Käyttöliittymä

Käyttöliittymän etusivulla (kuva 1) on pieni esittelyteksti sovelluksen tarkoituksesta sekä kuvat ja linkit saatavilla oleviin näkymiin. Näkymä esittelee kolme visualisointia liittyen lämpötilatietoihin ja CO2-pitoisuuksiin. Näkymässä View 2 taas pääsee tarkastelemaan kahta eri visualisointia päästölähteisiin liittyen. UI on responsiivinen eli käyttöliittymä skaalautuu, mikäli selaimen ikkunan kokoa muutetaan. Pienin tuettava ikkunan koko on 600 pikseliä leveyden osalta. Käyttöliittymän toteutuksessa ei ole käytetty valmiita CSS-kehyksiä kuten Bootstrap, vaan toteutus on ihan itse koodattu ja suunniteltu. Elementtien asettelussa on käytetty Flexbox -menetelmää.

Yläpalkista löytyvät linkit näkymiin, käyttäjän rekisteröitymiseen ja sovellukseen sisälle kirjautumiseen. Käyttäjä luodaan antamalla käyttäjätunnus ja salasana, jotka mahdollistavat kirjautumisen sovellukseen. Käyttäjän luomisen yhteydessä tarkistetaan muun muassa, että käyttäjänimi tai salasana eivät sisällä erikoismerkkejä, sekä pyydetään antamaan haluttu salasana kahdesti, jotta varmistutaan että tiedot kirjautuvat oikein tietokantaan. Jos virheitä syötteessä tai vaikkapa yhteydessä tietokantaan ilmaantuu, tulee siitä ilmoitusviesti näkyviin käyttäjälle. Kirjautunut käyttäjä voi luoda omia visualisointinäkymiä yksilöllisellä url-tunnisteella, jonka avulla käyttäjä voi jakaa luomansa visualisointinäkymän muille. Näkymään käyttäjä voi valita haluamansa visualisoinnit ja kirjoittaa kuvaustekstin jokaiselle visualisoinnille. Yhdellä käyttäjällä voi olla monta luotua visualisointinäkymää. Käyttäjä voi myös poistaa luomansa näkymän. Myös käyttäjän voi poistaa, käyttäjän poistaminen poistaa myös kaikki käyttäjän visualisointinäkymät. Käyttäjää poistaessa kysytään käyttäjältä varmistus käyttäjätilin poistoon.

### Visualisoinnit

Visualisointi 1 on viivagraafi Hadcrut-lämpötilatiedoista tammikuusta 1850 lähtien. Visualisointi 2 on viivagraafi Havaijin Mauna Loalla tehdyistä ilmakehän hiilidioksidipitoisuuksista noin 65 vuoden aikajaksolta. Halutessaan siihen saa näkyviin myös ilmakehän hiilidioksidipitoisuudet perustuen Etelämantereen jääkairauksiin ~1000 vuoden aikajaksolta. Visualisointi 3 on moniakselinen viivagraafi lämpötilan ja hiilidioksidipitoisuuksien muutoksista 2 miljoonan vuoden aikana. Lisäksi käyttäjällä on mahdollisuus kytkeä näkyville ihmisten kehityksen ja toiminnan 8 merkkipaalua. Visualisointi 4 on pinottu viivagraafi ajan suhteen maakohtaisista co2 päästöistä. Graafista käyttäjä voi valita maat, joiden data näytetään (kuva 2). Visualisointi 5 on piirakkakaavio co2-päästöistä toimialoittain, jota klikkailemalla on mahdollisuus nähdä toimialan tarkemmat päästötiedot.

Lähteet alkuperäisiin datalähteisiin on linkitetty jokaisen visualisoinnin alapuolelle. Kaaviot on luotu kaaviokirjasto Chart.js:llä. Visualisointien vaatimat tiedot on tallennettu palvelimella tietokantaan ja ladattu sieltä React-sovelluksessa palvelimen tarjoaman rajapinnan kautta http-pyynnöillä.

### Endpointit

Osa päätepisteistä kuten /profile on salattu token-pohjaisella todennuksella. Tunnusteen käyttöiäksi on määritetty 30 minuuttia. Tämän jälkeen kirjautumistiedot tulee syöttää uudelleen, jos haluaa päästä käsiksi suojattuihin päätepisteisiin.

### Muu teknologia ja kehitysympäristö

Kehitysympäristönä toimi Visual Studio Code (kuva 3). Frontend luotiin React-kirjastolla, ohjelmointikielinä toimi Javascript, HTML ja CSS. Tietokanta luotiin MYSQL:llä. Backend toteutettiin Node.js- ja Express.js- teknologioilla, joissa myös ohjelmointikielenä toimi Javascript. Versionhallintaan käytettiin GitHub-työympäristöä.

### Projekti pilvipalvelussa

linkki

---

## Käyttöönotto

Kloonaa repositorio valitsemaasi kansioon komennolla git clone https://github.com/janikasavela/ClimateApp.git. Muista ajaa npm install komento sekä frontendin että backendin juuressa, jotta saat tarvittavat riippuvaisuudet. Käynnistä ajamalla projektin juuressa komento npm start. Lataa tietokannan data MySQL Workbenchiin ja laita tietokantayhteys päälle.

