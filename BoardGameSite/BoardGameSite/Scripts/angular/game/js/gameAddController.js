gameApp.controller('gameAddController', ['gameService', '$location', function (gameService, $location) {
  var vm = this;
  vm.gameDescription = '';

  vm.addGame = function() {
    gameService.addGame(vm.gameDescription, vm.addGameSuccess, vm.addGameFailure);
  }

  vm.addGameSuccess = function () {
    $location.path('/allGames');
  }

  vm.addGameFailure = function () {

  }
}]);