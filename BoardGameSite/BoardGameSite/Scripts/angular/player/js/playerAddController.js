playerApp.controller('playerAddController', ['playerService', '$location', function (playerService, $location) {
  var vm = this;
  vm.playerDescription = '';

  vm.addPlayer = function () {
    playerService.addPlayer(vm.playerDescription, vm.addPlayerSuccess, vm.addPlayerFailure);
  }

  vm.addPlayerSuccess = function () {
    $location.path('/allPlayers');
  }

  vm.addPlayerFailure = function () {

  }
}]);