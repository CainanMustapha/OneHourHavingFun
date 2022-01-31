/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />

requirejs.config({
    baseUrl: "Scripts/appScripts",
    paths: {
        "jquery": "../jquery-3.6.0.min",
        "bootstrap": "../bootstrap",
        "app": "./rockPaperScissors",
        "angular": "../angular",
        "ngRoute": "../angular-route",
        "ngSanitize": "../angular-sanitize",
        "mainCtrls": "mainControllers",
        "ui.bootstrap": "../angular-ui/ui-bootstrap-tpls",
        "httpService": "..services/httpService",
        "handGesture": "..components/handGestureComponent"
    },
    shim: {
        'ngRoute': { deps: ['angular'] },
        'ngSanitize': { deps: ['angular'] },
        'ui.bootstrap': { deps: ['angular'] },
        'bootstrap': { deps: ['jquery'] },
        'httpService': { deps: ['angular'] },
        '$interval': { deps: ['angular'] },
        'handGesture': { deps: ['angular'] },
    }
});

requirejs(["app", "bootstrap", "angular", "ngRoute", "ngSanitize", "ui.bootstrap"], (app) => {

    var rockPaperScissors = new app.rockPaperScissors();

    /** Using requirejs to do manual bootstrap because of routing **/
    angular.element(document).ready(() => {
        angular.bootstrap(document, ['rockPaperScissors']);
    });
});
