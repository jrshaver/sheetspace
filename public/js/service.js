var app = angular.module('SheetSpaceApp');

app.service('sheetSpaceService', ['$http', function($http) {
    
    this.getCharacter = function() {
        return $http.get("/api").then(successGet, errorCallback);
    }

    this.saveCharacter = function(character) {
        return $http.post("/api", character).then(successPost, errorCallback);;
    }

    function successGet(response) {
        console.log("API Success");
        return response.data[0];
    }

    function successPost(response) {
        console.log("API Success");
        return response.data;
    }

    function errorCallback(error) {
        console.log("API Error:")
        console.log(error);
    }


}]);