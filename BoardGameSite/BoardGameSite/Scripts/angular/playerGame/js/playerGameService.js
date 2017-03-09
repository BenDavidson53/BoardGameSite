playerGameApp.factory('playerGameService', ['$http', function ($http) {
  return {
    getAllPlayerGames: function (success, failure) {
      $http.post('/Home/GetAllPlayerGames', success, failure).then(function (response) {
        if (angular.isFunction(success)) {
          success(response);
        }
      }, function (error) {
        if (angular.isFunction(failure)) {
          failure(error);
        }
      });
    },
    addPlayerGame: function (playerId, gameId, success, failure) {
      $http.post('/Home/AddPlayerGame', { playerId: playerId, gameId: gameId }, success, failure).then(function (response) {
        if (angular.isFunction(success)) {
          success(response);
        }
      }, function (error) {
        if (angular.isFunction(failure)) {
          failure(error);
        }
      });
    },
    deletePlayerGame: function (playerGameId, success, failure) {
      $http.post('/Home/DeletePlayerGameById', { id: playerGameId }, success, failure).then(function (response) {
        if (angular.isFunction(success)) {
          success(response);
        }
      }, function (error) {
        if (angular.isFunction(failure)) {
          failure(error);
        }
      });
    },
    getPlayerGameById: function (playerGameId, success, failure) {
      $http.post('/Home/GetPlayerGameById', { id: playerGameId }, success, failure).then(function (response) {
        if (angular.isFunction(success)) {
          success(response);
        }
      }, function (error) {
        if (angular.isFunction(failure)) {
          failure(error);
        }
      });
    },
    updatePlayerGame: function (playerGame, success, failure) {
      $http.post('/Home/UpdatePlayerGame', { playerGame: playerGame }, success, failure).then(function (response) {
        if (angular.isFunction(success)) {
          success(response);
        }
      }, function (error) {
        if (angular.isFunction(failure)) {
          failure(error);
        }
      });
    },
    getPlayersAndGames: function(success, failure) {
      $http.post('/Home/GetPlayersAndGames', success, failure).then(function (response) {
        if (angular.isFunction(success)) {
          success(response);
        }
      }, function (error) {
        if (angular.isFunction(failure)) {
          failure(error);
        }
      });
    }
  }
}
]);