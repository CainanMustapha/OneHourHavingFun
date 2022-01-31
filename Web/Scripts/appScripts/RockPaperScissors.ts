"use strict";

import { Hand, Game, GameType } from "./index";
import mainCtrlsModule = require("./mainControllers");
import httpService = require("./services/HttpService");

export class rockPaperScissors {
    constructor() {
        angular.module('rockPaperScissors', ["ngRoute", "ngSanitize", "ui.bootstrap", "mainControllers"])
            .controller('rockPaperScissors', ($scope, $interval, httpService) => {
                var rpsController = $scope;
                rpsController.title = 'Welcome to Rock Paper and Scissors';
                rpsController.newgame = (gametype) => newGame(gametype);;
                rpsController.game = Game.RockPaperScissors;
                rpsController.playerHand = -1;
                rpsController.computerHand = -1;
                rpsController.scoreCard = {};
                InitialiseScoreCard();
                rpsController.stopAutoPlay = false;
                rpsController.gameOn = false;
                rpsController.stopPlay = () => { rpsController.stopAutoPlay = true; };

                rpsController.computerPlay = () => {
                    rpsController.stopAutoPlay = false;
                    rpsController.gameOn = true;
                    let autoplay = $interval(function () {
                                    rpsController.gametype = GameType.Computer;
                        if (rpsController.stopAutoPlay == false) {
                            rpsController.play();
                        }
                        else {
                            $interval.cancel(autoplay);
                            rpsController.gameOn = false;
                        }
                    }, 1500);
                };

                rpsController.play = () => {
                    let computerHand = play();
                    let playerHand = play();
                    scoreHand(playerHand, computerHand);

                    rpsController.computerHand = computerHand;
                    rpsController.playerHand = playerHand;
                };

                rpsController.gamenumber = 0;
                rpsController.scorecards = [];
                rpsController.gametype = GameType.None;

                function play(): Hand {
                    return Math.floor(Math.random() * (Object.keys(Hand).length / 2));
                }

                function InitialiseScoreCard() {
                    rpsController.scoreCard = { Id: rpsController.gamenumber, ComputerScore: 0, PlayerScore: 0 };
                }

                function newGame(gameType: GameType) {
                    rpsController.gamenumber++;
                    rpsController.scoreCard = { Id: rpsController.gamenumber, ComputerScore: 0, PlayerScore: 0 };
                    rpsController.scorecards.push(rpsController.scoreCard);
                    rpsController.gametype = gameType;
                }

                function scoreHand(playerHand: Number, computerHand: Number) {
                    let pHand = getHand(playerHand);
                    let cHand = getHand(computerHand);
                    if (
                        pHand == Hand.Rock && cHand == Hand.Scissors ||
                        pHand == Hand.Scissors && cHand == Hand.Paper ||
                        pHand == Hand.Paper && cHand == Hand.Rock
                    ) {
                        rpsController.scoreCard.PlayerScore++;
                    }
                    else if (
                        pHand == Hand.Scissors && cHand == Hand.Rock ||
                        pHand == Hand.Rock && cHand == Hand.Paper ||
                        pHand == Hand.Paper && cHand == Hand.Scissors
                    ) {
                        rpsController.scoreCard.ComputerScore++;
                    }
                }

                function getHand(hand: Number) {
                    switch (hand) {
                        case 0: return Hand.Rock;
                        case 1: return Hand.Scissors;
                        case 2: return Hand.Paper;
                        default: throw new Error("Unable to see hand gesture");
                    }
                }
            })
            .directive('rockPaperScissors', function () {
                return { templateUrl: '../scripts/appscripts/rockpaperscissors.html' }
            })
            .component('handGesture', {
                templateUrl:'../scripts/appscripts/components/handGestureComponent.html',
                controller: function () { },
                bindings: {
                    hand: '<'
                }
            })
            .factory('httpService', function () {
                return new httpService.httpService();
            })
            .config(['$provide', function ($provide) {
                $provide.factory('httpService', function () {
                    return new httpService.httpService();
                });
            }]);

        var mainCtrls = new mainCtrlsModule.mainControllers();
        var httpSvc = new httpService.httpService();
    }
}