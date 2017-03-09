playerApp.controller('playerController', ['playerService', '$location', function (playerService, $location) {
  var vm = this;
  vm.players = [];

  vm.initialize = function () {
    playerService.getAllPlayers(vm.getAllPlayersSuccess, vm.getAllPlayersFailure);
  }

  vm.getAllPlayersSuccess = function (resp) {
    vm.players = resp.data.data;
  }

  vm.getAllPlayersFailure = function (err) {
    vm.players = [];
  }

  vm.deletePlayer = function (player) {
    playerService.deletePlayer(player.playerId, vm.deletePlayerSuccess, vm.deletePlayerError);
  }

  vm.deletePlayerSuccess = function (resp) {
    playerService.getAllPlayers(vm.getAllPlayersSuccess, vm.getAllPlayersFailure);
  }

  vm.deletePlayerError = function (err) {

  }

  vm.updatePlayer = function (player) {
    $location.path('/updatePlayer/' + player.playerId);
  }

  vm.addPlayer = function () {
    $location.path('/addPlayer');
  }
}]);