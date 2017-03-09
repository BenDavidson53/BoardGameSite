gameApp.controller('gameUpdateController', ['$routeParams', 'gameService', '$location', function ($routeParams, gameService, $location) {
  var vm = this;
  vm.gameToUpdate = null;

  vm.initialize = function () {
    var gameId = $routeParams.gameId;
    gameService.getGameById(gameId, vm.getGameByIdSuccess, vm.getGameByIdFailure);
  }

  vm.getGameByIdSuccess = function (resp) {
    vm.gameToUpdate = resp.data.data;
  }

  vm.getGameByIdFailure = function (err) {

  }

  vm.updateGame = function () {
    gameService.updateGame(vm.gameToUpdate, vm.updateGameSuccess, vm.updateGameFailure);
  }

  vm.updateGameSuccess = function (resp) {
    $location.path('/allGames');
  }

  vm.updateGameFailure = function (err) {

  }
}]);