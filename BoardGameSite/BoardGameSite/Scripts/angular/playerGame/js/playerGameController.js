playerGameApp.controller('playerGameController', ['playerGameService', '$location', function (playerGameService, $location) {
  var vm = this;
  vm.playerGames = [];

  vm.initialize = function () {
    playerGameService.getAllPlayerGames(vm.getAllPlayerGamesSuccess, vm.getAllPlayerGamesFailure);
  }

  vm.getAllPlayerGamesSuccess = function (resp) {
    vm.playerGames = resp.data.data;
  }

  vm.getAllPlayerGamesFailure = function (err) {
    vm.playerGames = [];
  }

  vm.deletePlayerGame = function (playerGame) {
    playerGameService.deletePlayerGame(playerGame.playerGameId, vm.deletePlayerGameSuccess, vm.deletePlayerGameError);
  }

  vm.deletePlayerGameSuccess = function (resp) {
    playerGameService.getAllPlayerGames(vm.getAllPlayerGamesSuccess, vm.getAllPlayerGamesFailure);
  }

  vm.deletePlayerGameError = function (err) {

  }

  vm.updatePlayerGame = function (playerGame) {
    $location.path('/updatePlayerGame/' + playerGame.playerGameId);
  }

  vm.addPlayerGame = function () {
    $location.path('/addPlayerGame');
  }
}]);