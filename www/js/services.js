/*globals angular*/
angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  };
})

.factory('Paths', function($translate) {
  var paths = {
    it: [
      {
        id: 1,
        name: "Area Pizzo Cane, Pizzo Trigna e Grotte Mazzamuto",
        css: "background-image: url(img/paths/1/cover.jpg)",
        /*center: {
          lat: 37.901666,
          long: 13.428795
        },
        zoomLevel: 12,*/
        time: "20 km in bici",
        difficulty: "Difficoltà facile",
        suggestionsFull: "Si consiglia ai partecipanti di munirsi di cappellino, indossare indumenti comodi, calzare scarpe sportive chiuse, portarsi borraccia o bottiglia d'acqua.",
        difficultyFull: "Il tour si presenta molto facile con poche salite dolci. Il ritmo sarà volutamente lento per far sì che il viaggio sia riposante. Il percorso dei Tour si alternerà tra l'uso delle bici e piccoli percorsi a piedi.",
        timeFull: "Circa 20 Km in bici distribuiti in tutta la giornata con annesse le varie soste per le visite ai siti previsti.",
        pointsOfInterest: [
          {
            id: 1,
            name: "Grotte Mazzamuto",
            description: "L'erosione delle rocce, dovute agli agenti atmosferici ha favorito lo sviluppo di corsi d'acqua stagionali e di tre cavità importanti come la grotta Brigli (Brigghi o dei Berilli), grotta Mazzamuto e grotta Leone. La prima ha un'interesse fondamentalmente speleologico e si presenta ricca di concrezioni e panneggi calcarei lungo i cunicoli e le sale. Importanza ecologica ha invece, la grotta del Leone perchè ospita una comunità di Iberidella minore, pianta che cresce nelle grotte abitate dal bestiame. La grotta Mazzamuto ha invece, un interesse archeologico poichè qui sono stati rinvenuti importanti reperti che testimoniano la presenza umana in queste zone, già nella preistoria",
            images: [
              "img/paths/1/1/0.jpg"
            ],
            /*lat: 37.917032,
            long: 13.473782*/
          },
          {
            id: 2,
            name: "Casina di caccia Artale",
            description: "Antica casa di caccia appartenente al Marchese Artale detta 'a Casina, dove si può giungere seguendo un percorso nella Riserva naturale pizzo Trigna e grotte Mazzamuto e dalla quale poter godere della vista di un vasto paesaggio costiero,lacustre e collinare attraverso una interessantissima zona collinare composta da numerose contrade che sovrasta il paese che da possibilità di fare escursioni di ogni tipo per gli appassionati e per chi vuole più semplicemente trascorrere una giornata immerso nella natura.",
            images: [
              "img/paths/1/2/0.jpg"
            ],
            /*lat: 37.918434,
            long: 13.468162*/
          },
          {
            id: 3,
            name: "Punto panoramico",
            images: [],
            /*lat: 37.901666,
            long: 13.428795*/
          },
          {
            id: 4,
            name: "Eremo San Felice",
            description: "L'Eremo di San Felice è un delizioso rifugio completamente immerso nella natura che offre servizi di accoglienza ed ospitalità a gruppi, comitive, famiglie e semplici escursionisti.Il rifugio è posto in una splendido pianoro a quota 540 metri sul livello del mare, all'interno della Riserva Naturale di Pizzo Cane, Pizzo Trigna e Grotta Mazzamuto e nei pressi di quella di Monte San Calogero.La struttura, interamente restaurata, ancora oggi è adibita ad Eremo.",
            images: [
              "img/paths/1/5/0.jpg"
            ],
            /*lat: 37.881844,
            long: 13.377663*/
          },
          {
            id: 5,
            name: "Grotta vicino Eremo San Felice",
            description: "",
            images: [
              "img/paths/1/6/0.jpg"
            ],
            /*lat: 37.881915,
            long: 13.377066*/
          },
          {
            id: 6,
            name: "Agriturismo Casi Ja'vuti",
            description: "La struttura si trova immersa nella Riserva Naturale Orietata di \"Pizzo Cane, Pizzo Trigna e Grotta Mazzamuto\", istituita nell'aprile del 2000 e considerata tra le più importanti aree protette della provincia di Palermo. Un territorio incantevole con la sua aspra orografia, la flora e la fauna tipica del Mediterraneo.",
            images: [],
            /*lat: 37.881915,
            long: 13.377066*/
          }
        ],
        available: true

      }
    ]
  };

  return {
    all: function() {
      var lang = $translate.use();
      return paths[lang];
    },
    get: function(pathId) {
      var lang = $translate.use();
      return paths[lang][pathId-1];
    },
    getPoI: function(pathId, index) {
      var lang = $translate.use();
      return paths[lang][pathId-1].pointsOfInterest[index];
    }
  };
});
