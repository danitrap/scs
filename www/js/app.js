/*globals angular, window, cordova, StatusBar*/
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives', 'pascalprecht.translate'])

.run(function($ionicPlatform, $translate) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if (typeof navigator.globalization !== "undefined") {
      navigator.globalization.getPreferredLanguage(function(language) {
        $translate.use((language.value).split("-")[0]).then(function(data){
          console.log("SUCCESS -> " + data);
        }, function(error) {
          console.log("ERROR -> " + error);
        });
      }, null)
    } else {
      // Development: usa IT
      $translate.use("it").then(function(data) {
              console.log("SUCCESS -> " + data);
          }, function(error) {
              console.log("ERROR -> " + error);
          });
    }

  });
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {

  $translateProvider.translations('it', {
      indietro: "Indietro",
      associazione: "Associazione",
      info_e_servizi: "Info e Servizi",
      itinerari: "Itinerari",
      associazione_copy: "<p class=\"lead\"><strong>S.C.S. (Sport, Cultura e Spettacolo)</strong> è un'associazione il cui scopo è lo sviluppo del turismo rurale e culturale nella Sicilia occidentale con particolare attenzione ai territori ricadenti nel Gal Metropoli Est, curando maggiormente i percorsi alternativi al turismo di massa.</p><p>Qui grazie al clima mite dell'inverno è possibile praticare attività per tutto l'anno. La nostra \"mission\" è il turismo ecologico e sostenibile con l’ausilio di bici MTB e bici elettrica a pedalata assistita. I nostri itinerari sono adatti a tutti, senza limiti di età, e nascono da un’accurata ricerca di percorsi sicuri incorniciati da splendidi paesaggi naturali e nobilitati da piccoli e grandi tesori storico-artistici della durata di una giornata. Il percorso, vista dalla sella della bici, vi apparirà del tutto nuova.</p><p>Con S.C.S. scoprirete la fresca sensazione di libertà che solo un tour in bicicletta sa trasmettervi. L’associazione per tale progetto ha ottenuto un cofinanziamento da parte del Programma di Sviluppo Rurale PSR Sicilia 2007-2013, misura 312 “Sostegno alla creazione e allo sviluppo di micro-imprese. Azione C “Incentivazione di microimprese nel settore dei servizi strettamente collegati alle finalità delle misure 312 e 313”. Azione 1 del PSL Metropoli Est.</p><p>L’idea progettuale nasce dalla consapevolezza che i lasciti artistici-ambientali del passato, sebbene fondamentali, debbano essere non solo conservati, ma valorizzati, potenziati ed estesi. Con il progetto si intende stimolare, connettere e avviare processi di identificazione con il territorio locale denominato “Metropoli Est” e riappropriazione del valore storico culturale.</p>",
      visita_il_sito: "Visita il sito",
      chiama: "Chiama",
      info_copy: "<h2>Il Tour</h2><p>Il tour avrà la durata di una giornata. Si prevedono diverse fermate per la visita dei luoghi prefissati nei tour. E’ prevista una sosta pranzo per  la degustazioni di prodotti tipici enogastronomici del luogo.</p><p>I tour prevedono la presenza di due accompagnatori in bicicletta. Il numero di persone varia da un minimo di 10 ad un massimo di 20.</p><h2>L'Accompagnatore</h2><p>Gli accompagnatori sono due italiani ma parlano inglese e viaggiano in bicicletta con i partecipanti, svolgono la mansione di guide, ma risolvono anche problemi che si dovessero creare (tecnici o di comunicazione), spiegando all’occorrenza la tecnica di pedalata.</p><h2>La Bicicletta</h2><p>Le bici sono realizzate appositamente per il turismo, sono adatte per l’asfalto e strade sterrate in buone condizioni (le cosiddette strade bianche).</p><p>E’ possibile la scelta tra la classica bici MTB o bici elettrica con pedalata assistita, hanno il cambio Shimano, sella al gel molto confortevole, posizione anatomica. A tutti i partecipanti sarà fornito il caschetto. Le bici elettriche con pedalata assistita sono fornite di porta pacchi anteriore e posteriore.  L’assistenza di piccole riparazioni, come la foratura delle gomme durante il percorso è garantita, le bici sono corredate di kit riparazione e pompa. Tutti i partecipanti sono coperti da assicurazione RC, non sono compresi i danni da imperizia nella conduzione della bicicletta. <strong>Si precisa che pur essendo i percorsi dei tour di facile e media difficoltà, si consiglia la scelta della bici MTB a coloro che abbiano una certa dimestichezza con tale bici.</strong></p><h2>Consigli</h2><p>Si consiglia ai partecipanti di munirsi di cappellino, indossare indumenti comodi, calzare scarpe sportive chiuse, portarsi borraccia o bottiglia d’acqua.</p><h2>La Difficolt&agrave;</h2><p>I tour sono alla portata di tutti con nessuna o pochissime salite dolci. Il ritmo sarà volutamente lento per far sì che il viaggio sia riposante. Il percorso dei Tour si alternerà tra l’uso delle bici e piccoli percorsi a piedi.</p><h2>Servizio Navetta</h2><p class=\"p-margin\">I partecipanti su richiesta, possono usufruire del servizio navetta per gruppi di turisti con lo stesso luogo di partenza.  I turisti saranno presi e riportati nel luogo concordato.</p><br><br><br>",
      fermate: "Fermate",
      consigli: "Consigli",
      difficolta: "Difficoltà",
      tempo_di_percorrenza: "Tempo di percorrenza"
  });
  $translateProvider.preferredLanguage("it");
  $translateProvider.fallbackLanguage("it");


  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.assoc', {
      url: '/assoc',
      views: {
        'tab-assoc': {
          templateUrl: 'templates/tab-assoc.html',
          controller: 'AssocCtrl'
        }
      }
    })

    .state('tab.info', {
      url: '/info',
      views: {
        'tab-info': {
          templateUrl: 'templates/tab-info.html',
          controller: 'InfoCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('tab.paths', {
      url: '/paths',
      views: {
        'tab-paths': {
          templateUrl: 'templates/tab-paths.html',
          controller: 'PathsCtrl'
        }
      }
    })

    .state('tab.path-detail', {
      url: '/path/:pathId',
      views: {
        'tab-paths': {
          templateUrl: 'templates/path-detail.html',
          controller: 'PathDetailCtrl'
        }
      }
    })

    .state('tab.path-info', {
      url: '/path/:pathId/info',
      views: {
        'tab-paths': {
          'templateUrl': 'templates/path-info.html',
          controller: 'PathInfoCtrl'
        }
      }
    })

    .state('tab.poi', {
    url: '/path/:pathId/PoI/:PoI',
    views: {
      'tab-paths': {
        templateUrl: 'templates/path-detail-poi.html',
        controller: 'PathDetailPoICtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/assoc');

});

