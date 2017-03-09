var playerGameApp = angular.module('playerGameApp', ['ngRoute']);
playerGameApp.config(function ($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "/Scripts/angular/playerGame/html/allPlayerGames.html",
    controller: "playerGameController"
  }).when("/allPlayerGames", {
    templateUrl: "/Scripts/angular/playerGame/html/allPlayerGames.html",
    controller: "playerGameController"
  }).when("/addPlayerGame", {
    templateUrl: "/Scripts/angular/playerGame/html/addPlayerGame.html",
    controller: "playerGameAddController"
  }).when("/updatePlayerGame/:playerGameId", {
    templateUrl: "/Scripts/angular/playerGame/html/updatePlayerGame.html",
    controller: "playerGameUpdateController"
  });
});