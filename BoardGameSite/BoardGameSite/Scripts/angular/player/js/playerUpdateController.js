playerApp.controller('playerUpdateController', ['$routeParams', 'playerService', '$location', function ($routeParams, playerService, $location) {
  var vm = this;
  vm.playerToUpdate = null;

  vm.initialize = function () {
    var playerId = $routeParams.playerId;
    playerService.getPlayerById(playerId, vm.getPlayerByIdSuccess, vm.getPlayerByIdFailure);
  }

  vm.getPlayerByIdSuccess = function (resp) {
    vm.playerToUpdate = resp.data.data;
  }

  vm.getPlayerByIdFailure = function (err) {

  }

  vm.updatePlayer = function () {
    playerService.updatePlayer(vm.playerToUpdate, vm.updatePlayerSuccess, vm.updatePlayerFailure);
  }

  vm.updatePlayerSuccess = function (resp) {
    $location.path('/allPlayers');
  }

  vm.updatePlayerFailure = function (err) {

  }
}]);