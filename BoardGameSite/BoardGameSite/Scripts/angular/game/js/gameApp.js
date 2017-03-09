var gameApp = angular.module('gameApp', ['ngRoute']);
gameApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "/Scripts/angular/game/html/allGames.html",
    controller: "gameController"
  }).when("/allGames", {
    templateUrl: "/Scripts/angular/game/html/allGames.html",
    controller: "gameController"
  }).when("/addGame", {
    templateUrl: "/Scripts/angular/game/html/addGame.html",
    controller: "gameAddController"
  }).when("/updateGame/:gameId", {
    templateUrl: "/Scripts/angular/game/html/updateGame.html",
    controller: "gameUpdateController"
  });
});