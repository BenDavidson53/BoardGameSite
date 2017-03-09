var playerApp = angular.module('playerApp', ['ngRoute']);
playerApp.config(function ($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "/Scripts/angular/player/html/allPlayers.html",
    controller: "playerController"
  }).when("/allPlayers", {
    templateUrl: "/Scripts/angular/player/html/allPlayers.html",
    controller: "playerController"
  }).when("/addPlayer", {
    templateUrl: "/Scripts/angular/player/html/addPlayer.html",
    controller: "playerAddController"
  }).when("/updatePlayer/:playerId", {
    templateUrl: "/Scripts/angular/player/html/updatePlayer.html",
    controller: "playerUpdateController"
  });
});