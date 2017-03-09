playerGameApp.controller('playerGameAddController', ['playerGameService', '$location', function (playerGameService, $location) {
  var vm = this;
  vm.selectedPlayer = {};
  vm.selectedGame = {};

  vm.players = [];
  vm.games = [];

  vm.initialize = function() {
    playerGameService.getPlayersAndGames(vm.getPlayersAndGamesSuccess, vm.getPlayersAndGamesFailure);
  }

  vm.getPlayersAndGamesSuccess = function(resp) {
    vm.players = resp.data.players;
    vm.games = resp.data.games;
  }

  vm.getPlayersAndGamesFailure = function(err) {
    
  }

  vm.addPlayerGame = function () {
    playerGameService.addPlayerGame(vm.selectedPlayer.playerId, vm.selectedGame.gameId, vm.addPlayerGameSuccess, vm.addPlayerGameFailure);
  }

  vm.addPlayerGameSuccess = function () {
    $location.path('/allPlayerGames');
  }

  vm.addPlayerGameFailure = function () {

  }
}]);