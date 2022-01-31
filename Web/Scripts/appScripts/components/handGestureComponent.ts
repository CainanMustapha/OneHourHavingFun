"use strict";

export class handGestureComponent {
    constructor() {
        angular
            .module('rockPaperScissors')
            .component('handGesture', {
                templateUrl: '../scripts/appscripts/components/handGestureComponent.html',
                controller: function () { },
                bindings: {
                    hand: '<'
                }
            });
    }
}