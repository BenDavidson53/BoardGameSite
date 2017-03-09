gameApp.controller('gameController', ['gameService', '$location', function (gameService, $location) {
  var vm = this;
  vm.games = [];

  vm.initialize = function() {
    gameService.getAllGames(vm.getAllGamesSuccess, vm.getAllGamesFailure);
  }

  vm.getAllGamesSuccess = function(resp) {
    vm.games = resp.data.data;
  }

  vm.getAllGamesFailure = function(err) {
    vm.games = [];
  }

  vm.deleteGame = function(game) {
    gameService.deleteGame(game.gameId, vm.deleteGameSuccess, vm.deleteGameError);
  }

  vm.deleteGameSuccess = function(resp) {
    gameService.getAllGames(vm.getAllGamesSuccess, vm.getAllGamesFailure);
  }

  vm.deleteGameError = function(err) {
    
  }

  vm.updateGame = function(game) {
    $location.path('/updateGame/' + game.gameId);
  }

  vm.addGame = function() {
    $location.path('/addGame');
  }
}]);