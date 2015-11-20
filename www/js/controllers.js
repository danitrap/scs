/*globals angular,google,navigator*/
angular.module('starter.controllers', [])

.controller('AssocCtrl', function($scope) {
})

.controller('InfoCtrl', function($scope) {
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('PathsCtrl', function($scope, Paths) {
  $scope.paths = Paths.all();
})

.controller('PathDetailCtrl', function($scope, $stateParams, $ionicLoading, $state, Paths) {
  $scope.path = Paths.get($stateParams.pathId);

  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.pinClicked = function(index) {
    console.log("cliccato " + index);
    $state.go('tab.poi', {pathId: $scope.path.id, PoI: index});
  };


  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Geolocalizzando...',
      showBackdrop: false
    });



    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.map.setZoom(16);
      $ionicLoading.hide();
    }, function (error) {
      alert('Errore durante la geolocalizzazione: ' + error.message);
      $ionicLoading.hide();
    },
    {enableHighAccuracy: true, timeout: 15000}
    );
  };
})

.controller('PathDetailPoICtrl', function($scope, $stateParams, Paths) {
  $scope.PoI = Paths.getPoI($stateParams.pathId, $stateParams.PoI);
})

.controller('PathInfoCtrl', function($scope, $stateParams, Paths){
  $scope.path = Paths.get($stateParams.pathId);
});
