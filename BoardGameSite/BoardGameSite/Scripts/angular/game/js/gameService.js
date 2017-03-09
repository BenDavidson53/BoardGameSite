gameApp.factory('gameService', ['$http', function($http) {
    return {
      getAllGames : function(success, failure) {
        $http.post('/Home/GetAllGames', success, failure).then(function (response) {
          if (angular.isFunction(success)) {
            success(response);
          }
        }, function (error) {
          if (angular.isFunction(failure)) {
            failure(error);
          }
        });
      },
      addGame : function(gameName, success, failure) {
        $http.post('/Home/AddGame', {name : gameName}, success, failure).then(function (response) {
          if (angular.isFunction(success)) {
            success(response);
          }
        }, function (error) {
          if (angular.isFunction(failure)) {
            failure(error);
          }
        });
      },
      deleteGame: function (gameId, success, failure) {
        $http.post('/Home/DeleteGameById', { id: gameId }, success, failure).then(function (response) {
          if (angular.isFunction(success)) {
            success(response);
          }
        }, function (error) {
          if (angular.isFunction(failure)) {
            failure(error);
          }
        });
      },
      getGameById: function (gameId, success, failure) {
        $http.post('/Home/GetGameById', { id: gameId }, success, failure).then(function (response) {
          if (angular.isFunction(success)) {
            success(response);
          }
        }, function (error) {
          if (angular.isFunction(failure)) {
            failure(error);
          }
        });
      },
      updateGame: function (game, success, failure) {
        $http.post('/Home/UpdateGame', { game: game }, success, failure).then(function (response) {
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