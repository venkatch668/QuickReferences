﻿(function () {
    "use strict";

    angular.module('QR.Web.Author')
    .service("AuthorsService", ["$http", "$q", AuthorsService]);


    /*  RELATED ENUMS */

    //this.category = _.sample(['html', 'css', 'js', 'scss', 'others']);

    var AUTHENTICATION;
    (function (b) {
        b[b["GITHUB"] = 0] = "GITHUB";
        b[b["LINKEDIN"] = 1] = "LINKEDIN";
        b[b["FACEBOOK"] = 2] = "FACEBOOK";
    })(AUTHENTICATION || (AUTHENTICATION = {}));

    function AuthorsService($http, $q) {

        var getData = function (StartDate, username, EndDate) {

            return $http({
                url: "/api/AuthorItem",
                method: "GET"
            }).then(handleSuccess, handleError);
        }

        var handleSuccess = function (response) {
            _.each(response.data, function (item) {
                item.authenticationType = AUTHENTICATION[item['authType']];
                item.authenticationUID = item['sourceId']
            });
            return response.data;
        }

        var handleError = function (error) {
            console.log(error);
        }        

        return {
            getAll: getData            
        }
    }

})();