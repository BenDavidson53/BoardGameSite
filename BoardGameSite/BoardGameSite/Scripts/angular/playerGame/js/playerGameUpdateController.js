playerGameApp.controller('playerGameUpdateController', ['playerGameService', '$location', '$routeParams', function (playerGameService, $location, $routeParams) {
  var vm = this;
  vm.playerGameToUpdate = {};

  vm.players = [];
  vm.games = [];

  vm.initialize = function () {
    var playerGameId = $routeParams.playerGameId;
    playerGameService.getPlayersAndGames(vm.getPlayersAndGamesSuccess, vm.getPlayersAndGamesFailure);
    playerGameService.getPlayerGameById(playerGameId, vm.getPlayerGameByIdSuccess, vm.getPlayerGameByIdFailure);
  }

  vm.getPlayersAndGamesSuccess = function (resp) {
    vm.players = resp.data.players;
    vm.games = resp.data.games;
  }

  vm.getPlayersAndGamesFailure = function (err) {

  }

  vm.updatePlayerGame = function () {
    playerGameService.updatePlayerGame(vm.playerGameToUpdate, vm.updatePlayerGameSuccess, vm.updatePlayerGameFailure);
  }

  vm.updatePlayerGameSuccess = function () {
    $location.path('/allPlayerGames');
  }

  vm.updatePlayerGameFailure = function () {

  }

  vm.getPlayerGameByIdSuccess = function (resp) {
    vm.playerGameToUpdate = resp.data.data;
  }

  vm.getPlayerGameByIdFailure = function (err) {

  }
}]);