"use strict";

export class httpService {
   constructor() {
        angular.module("rockPaperScissors")
            .service("httpService", ['$http', '$q', function (http, q) {
                return {
                    getScores: function (id) {
                        let scores = q.defer();
                        http.get("/scores/" + id)
                            .then(function (response) {
                                scores.resolve(response);
                            }, function (err) {
                                scores.reject(err);
                            });

                        return scores.promise;
                    },

                    postScores: function (url, data) {
                        let scores = q.defer();
                        http({
                            method: 'POST',
                            url: url,
                            data: data
                        }).then(function (data) {
                            scores.resolve(data);
                        }, function (err) {
                            scores.reject(err);
                        });

                        return scores.promise;
                    },

                    postScore: function (url, data) {
                        let score = q.defer();
                        http({
                            method: 'POST',
                            url: url,
                            data: data
                        }).then(function successCallback(response) {
                            score.resolve(response);
                        }, function errorCallback(err) {
                            score.reject(err);
                        });

                        return score.promise;
                    }
                }
            }]);
            /*
            .service('httpService', function ($http) {
                var http = $http;
               
                this.Get = function (url: string) {
                    http({
                        method: 'GET',
                        url: url
                    }).then(function successCallback(response) {
                        return response;
                    }, function errorCallback(response) {
                        return response;
                    });
                };

                this.Post = function (url, data) {
                    http({
                        method: 'POST',
                        url: url,
                        data: data
                    }).then(function successCallback(response) {
                        return response;
                    }, function errorCallback(response) {
                        return response;
                    });
                };
            });
            */
    }

    //public Get<T>(url: string): ng.IHttpPromise<T> {
    //    return this.http({
    //        method: 'GET',
    //        url: url
    //    });
    //};
}