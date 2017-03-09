playerApp.factory('playerService', ['$http', function ($http) {
  return {
    getAllPlayers: function (success, failure) {
      $http.post('/Home/GetAllPlayers', success, failure).then(function (response) {
        if (angular.isFunction(success)) {
          success(response);
        }
      }, function (error) {
        if (angular.isFunction(failure)) {
          failure(error);
        }
      });
    },
    addPlayer: function (playerName, success, failure) {
      $http.post('/Home/AddPlayer', { name: playerName }, success, failure).then(function (response) {
        if (angular.isFunction(success)) {
          success(response);
        }
      }, function (error) {
        if (angular.isFunction(failure)) {
          failure(error);
        }
      });
    },
    deletePlayer: function (playerId, success, failure) {
      $http.post('/Home/DeletePlayerById', { id: playerId }, success, failure).then(function (response) {
        if (angular.isFunction(success)) {
          success(response);
        }
      }, function (error) {
        if (angular.isFunction(failure)) {
          failure(error);
        }
      });
    },
    getPlayerById: function (playerId, success, failure) {
      $http.post('/Home/GetPlayerById', { id: playerId }, success, failure).then(function (response) {
        if (angular.isFunction(success)) {
          success(response);
        }
      }, function (error) {
        if (angular.isFunction(failure)) {
          failure(error);
        }
      });
    },
    updatePlayer: function (player, success, failure) {
      $http.post('/Home/UpdatePlayer', { player: player }, success, failure).then(function (response) {
        if (angular.isFunction(success)) {
          success(response);
        }
      }, function (error) {
        if (angular.isFunction(failure)) {
          failure(error);
        }
      });
    },
  }
}
]);