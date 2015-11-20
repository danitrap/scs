/*globals angular,google,document,window*/
angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&',
      path: '=',
      pinClicked: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng($scope.path.center.lat, $scope.path.center.long),
          zoom: $scope.path.zoomLevel,
          mapTypeId: google.maps.MapTypeId.HYBRID,
          disableDefaultUI: true

        };
        var map = new google.maps.Map($element[0], mapOptions);

        for (var i = 0; i < $scope.path.pointsOfInterest.length; i++) {
          var currentPoI = $scope.path.pointsOfInterest[i];

          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(currentPoI.lat, currentPoI.long),
            map: map,
            title: currentPoI.name,
            icon: "img/pins/"+(i+1)+".png"
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              $scope.pinClicked({index: i});
            }
          })(marker, i));
        }

        /*var path = new google.maps.Polyline({
          path: $scope.path.pointsOfInterest.map(function(PoI) {
            return new google.maps.LatLng(PoI.lat, PoI.long);
          }),
          geodesic: true,
          strokeColor: '#ffa500',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });*/

        path.setMap(map);

        $scope.onCreate({map: map});

        $scope.$on('$destroy', function() {
          console.log("destroy");
          map.remove();
      });

        // Stop the side bar from dragging when mousedown/tapdown on the map
//        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
//          e.preventDefault();
//          return false;
//        });
      }

      if (document.readyState === "complete" && $scope.path.available) {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  };
})

.directive('available', function() {
  return function(scope, element, attr) {
    if (!scope.path.available) {
      element.text('Questo itinerario non è al momento disponibile, riprovate più tardi.');
    }
  }
});
