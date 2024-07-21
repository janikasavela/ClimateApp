# Climate App – ilmastonmuutokseen liittyvän tiedon visualisointityökalu

## _Tekijä: Janika Savela_

## Esittely

Climate App on Oulun ammattikorkeakoulun 2. vuoden projektikurssilla tekemäni suurehko web-sovellus. Tehtävänä oli suunnitella ja toteuttaa ilmastonmuutokseen liittyvän tiedon visualisointityökalu käyttäen React-teknologiaa selaimessa ja JavaScript/NodeJS-teknologiaa palvelimessa. Projekti olisi kuulunut tehdä 4 hengen projektiryhmissä, mutta ryhmässäni muut opiskelijat eivät asianmukaisesti osallistuneet projektin tekemiseen, mistä syystä päädyin tekemään projektin yksin. Projektissa oli yhdelle ihmiselle todella paljon tekemistä. Onnekseni aihe oli mielestäni mielenkiintoinen ja projektia oli mukava työstää, minkä vuoksi suuri työmäärä ei haitannut. Toki hieman kiire meinasi tulla, jotta sai kaiken tehtyä valmiiksi aikataulujen puitteissa. Web-kehitys erityisesti kiinnostaa itseäni ja koen että oppimista tapahtui paljon projektin aikana, mistä olen iloinen. Projektissa luodut näkymät esittävät eri tutkimustuloksien dataa kaavioiden muodossa, teemana maailmanlaajuiset lämpötilatiedot, co2 pitoisuudet ja päästölähteet.

![image](https://user-images.githubusercontent.com/115933418/234164279-8d0c78f3-4a5d-4f1b-982d-a2a94ccf0770.png)
##### Kuva 1: Käyttöliittymän etusivu


## Toiminnallisuudet ja teknologiat niiden takana

### Käyttöliittymä

Käyttöliittymän etusivulla (kuva 1) on pieni esittelyteksti sovelluksen tarkoituksesta sekä kuvat ja linkit saatavilla oleviin näkymiin. Näkymä 1 esittelee kolme visualisointia liittyen lämpötilatietoihin ja CO2-pitoisuuksiin. Näkymässä 2 taas pääsee tarkastelemaan kahta eri visualisointia päästölähteisiin liittyen. UI on responsiivinen eli käyttöliittymä skaalautuu, mikäli selaimen ikkunan kokoa muutetaan. Pienin tuettava ikkunan koko on 600 pikseliä leveyden osalta. Käyttöliittymän toteutuksessa ei ole käytetty valmiita CSS-kehyksiä kuten Bootstrap, vaan toteutus on ihan itse koodattu ja suunniteltu. Elementtien asettelussa on käytetty Flexbox-menetelmää.

Yläpalkista löytyvät linkit näkymiin, käyttäjän rekisteröitymiseen ja sovellukseen sisälle kirjautumiseen. Käyttäjä luodaan antamalla käyttäjätunnus ja salasana, jotka mahdollistavat kirjautumisen sovellukseen. Käyttäjän luomisen yhteydessä tarkistetaan muun muassa, että käyttäjänimi tai salasana eivät sisällä erikoismerkkejä, sekä pyydetään antamaan haluttu salasana kahdesti, jotta varmistutaan että tiedot kirjautuvat oikein tietokantaan. Jos virheitä syötteessä tai vaikkapa yhteydessä tietokantaan ilmaantuu, tulee siitä ilmoitusviesti näkyviin käyttäjälle. Kirjautunut käyttäjä voi luoda omia visualisointinäkymiä yksilöllisellä url-tunnisteella, jonka avulla käyttäjä voi jakaa luomansa visualisointinäkymän muille. Näkymään käyttäjä voi valita haluamansa visualisoinnit ja kirjoittaa kuvaustekstin jokaiselle visualisoinnille. Yhdellä käyttäjällä voi olla monta luotua visualisointinäkymää. Käyttäjä voi myös poistaa luomansa näkymän. Myös käyttäjän voi poistaa, käyttäjän poistaminen poistaa myös kaikki käyttäjän visualisointinäkymät. Käyttäjää poistaessa kysytään käyttäjältä varmistus käyttäjätilin poistoon.

### Visualisoinnit

Visualisointi 1 on viivagraafi Hadcrut-lämpötilatiedoista tammikuusta 1850 lähtien. Visualisointi 2 on viivagraafi Havaijin Mauna Loalla tehdyistä ilmakehän hiilidioksidipitoisuuksista noin 65 vuoden aikajaksolta. Halutessaan siihen saa näkyviin myös ilmakehän hiilidioksidipitoisuudet perustuen Etelämantereen jääkairauksiin noin 1000 vuoden aikajaksolta. Visualisointi 3 on moniakselinen viivagraafi lämpötilan ja hiilidioksidipitoisuuksien muutoksista 2 miljoonan vuoden aikana. Lisäksi käyttäjällä on mahdollisuus kytkeä näkyville ihmisten kehityksen ja toiminnan 8 merkkipaalua. Visualisointi 4 on pinottu viivagraafi ajan suhteen maakohtaisista co2 päästöistä. Graafista käyttäjä voi valita maat, joiden data näytetään (kuva 2). Visualisointi 5 on piirakkakaavio co2-päästöistä toimialoittain, jota klikkailemalla on mahdollisuus nähdä toimialan tarkemmat päästötiedot.

Lähteet alkuperäisiin datalähteisiin on linkitetty jokaisen visualisoinnin alapuolelle. Kaaviot on luotu kaaviokirjasto Chart.js:llä. Visualisointien vaatimat tiedot on tallennettu palvelimella tietokantaan ja ladattu sieltä React-sovelluksessa palvelimen tarjoaman rajapinnan kautta http-pyynnöillä.

![image](https://user-images.githubusercontent.com/115933418/234164324-73e7b273-55dc-45a3-8532-d469418f1e69.png)
##### Kuva 2: Visualisointi 5


### Endpointit

Osa päätepisteistä kuten /profile on salattu token-pohjaisella todennuksella. Tunnusteen käyttöiäksi on määritetty 30 minuuttia. Tämän jälkeen kirjautumistiedot tulee syöttää uudelleen, jos haluaa päästä käsiksi suojattuihin päätepisteisiin.

### Muu teknologia ja kehitysympäristö

Kehitysympäristönä toimi Visual Studio Code (kuva 3). Frontend luotiin React-kirjastolla, ohjelmointikielinä toimi Javascript, HTML ja CSS. Tietokanta luotiin MYSQL:llä. Backend toteutettiin Node.js- ja Express.js- teknologioilla, joissa myös ohjelmointikielenä toimi Javascript. Versionhallintaan käytettiin GitHub-työympäristöä.

![image](https://user-images.githubusercontent.com/115933418/234164359-4ae06bd7-2922-43f9-9546-0388e0c18a84.png)
##### Kuva 3: Visual Studio Code kehitysympäristö ja sieltä App.js tiedosto


### Projekti pilvipalvelussa

https://fancy-travesseiro-20e585.netlify.app/

(Saattaa välillä kestää, että sovellus yhdistää tietokantaan, kun sivu latautuu ensimmäisen kerran. Odota pieni hetki, jos data ei näy heti kaavioissa.)

22.5.2024 EDIT: Tietokannan laittoin alkujaan ilmaispalveluna PlanetScaleen (https://planetscale.com/), mutta sen palveluehdot ovat muuttuneet ja ilmaispalvelu loppunut, jonka takia tietokanta "nukkuu", eikä ole enää aktiivisena. En viitsi siitä turhaa maksaa että se siellä pyörii, tästä syystä datat eivät enää lataudu sivustolle. Ohessa kuitenkin linkki missä lyhyt projektin esittely, ja kuvaajat toimivat videolla: 

https://www.youtube.com/watch?v=V6wQgqGQsBo

---

## Projektin testaus

Kurssilla oli tarkoitus tutustua myös ohjelmistotestaukseen. Tavoitteena oli kirjoittaa projektin testit ohjelmistokoodiksi, mutta sen osalta minulla loppui aika kesken. Tein kuitenkin systeemitestausta, eli testasin projektia käsityönä. Yritin ottaa mahdolliset virhetilanteet huomioon koodissa. Esimerkiksi tiettyjä syötteitä ei käyttäjä voi jättää tyhjäksi rekisteröityessään, kirjautuessaan tai luodessaan omaa näkymää. Näkymän url-tunniste ei saa olla jo käytössä toisella näkymällä. Jos näin on, tulee siitä ilmoitus käyttäjälle, jossa käyttäjää pyydetään vaihtamaan url-tunniste toiseen ennen kuin näkymä voidaan luoda. Myös käyttäjän luonnissa tarkistetaan, ettei käyttäjänimi ole jo käytössä, että käyttäjänimi sekä salasana ovat sopivan pituisia, eivät sisällä erikoismerkkejä tai välilyöntejä ja salasanan tulee sisältää vähintään yksi numero. Jos tietokantaan tai palvelimeen ei jostain syystä saada yhteyttä, tulee käyttäjälle virheilmoitus myös tästä. 

---

## Käyttöönotto

Kloonaa repositorio valitsemaasi kansioon komennolla git clone https://github.com/janikasavela/ClimateApp.git. Muista ajaa npm install komento sekä frontendin että backendin juuressa, jotta saat tarvittavat riippuvaisuudet. Käynnistä ajamalla projektin juuressa komento npm start. Lataa tietokannan data MySQL Workbenchiin ja aja komennot:

CREATE USER 'dataUser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'netpass'; 

GRANT ALL on data.* to 'dataUser'@'localhost';

Laita tietokantayhteys päälle.
