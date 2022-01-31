"use strict";

import { Game } from "./index";

export class mainControllers {
    constructor() {
        angular.module("mainControllers", ["ngRoute"])
            .controller('MainController', ($scope) => {
                var mainController = $scope;
                mainController.title = "Welcome to a good hour of games!";
                mainController.welcomeMessage = "BBC News is an operational business division of the British ..";
                mainController.game = Game.None;
                mainController.select = (game: Number) => selectGame(game);

                function selectGame(game: Number) {
                    mainController.game = game;
                }
            })
            .directive('rootApp', function () {
                return { templateUrl: '../scripts/appscripts/mainControllers.html' }
            });
    }
}