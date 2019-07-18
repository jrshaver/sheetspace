var app = angular.module('SheetSpaceApp', []);

app.controller('sheetSpaceController', [
    '$rootScope', 
    '$scope', 
    'sheetSpaceService', 
    function($rootScope, $scope, sheetSpaceService) {

    $scope.proficiencies = [
        "Acrobatics (Dex)",
        "Animal Handling (Wis)",
        "Arcana (Int)",
        "Athletics (Str)",
        "Deception (Cha)",
        "History (Int)",
        "Insight (Wis)",
        "Intimidation (Char)",
        "Investigation (Int)",
        "Medicine (Wis)",
        "Nature (Int)",
        "Perception (Wis)",
        "Performance (Cha)",
        "Persuasion (Cha)",
        "Religion (Int)",
        "Sleight of Hand (Dex)",
        "Stealth (Dex)",
        "Survival (Wis)",
    ];

    var c = this;
    c.sections = [
        {"title": "Character", "selected": true},
        {"title": "Spells", "selected": false},
        {"title": "Inventory", "selected": false},
        {"title": "Leveling", "selected": false},
        {"title": "Notes", "selected": false},
    ];

    $scope.select = function(section) {
        numOfSections = c.sections.length;
        for (var i=0; i<numOfSections; i++) {
            c.sections[i].selected = false;
        }
        section.selected = true;
    };

    $scope.character = {};
    $scope.showSave = false;

    sheetSpaceService.getCharacter().then(function(response) {
        console.log(response);
        $scope.character = response;
        $rootScope.Character = true;

    });

    $scope.calculateModifier = function(stat) {
        if (stat < 31) {
            var newValue = stat.value;
            stat.modifier = Math.floor((newValue - 10) / 2);
        }
    };

    $scope.addItem = function(list) {
        list.push("");
    };

    $scope.editItem = function(list, item) {

    };

    $scope.deleteItem = function(list, item) {
        var deleteCheck = confirm("Are you sure you wish to delete " + item + "?");
    };

    $scope.deleteKnowledge = function(knowledge) {
        var indexToRemove = $scope.character.skills.indexOf(knowledge);
        $scope.character.skills.splice(indexToRemove, 1);
    };

    $scope.$watch('character', function(newObject, oldObject) {
        if (Object.keys(oldObject).length > 0) {
            $scope.showSave = true;
        }
    }, true)

    $scope.save = function() {
        sheetSpaceService.saveCharacter($scope.character).then(function(response) {
            console.log(response);
        })
    }

    window.onbeforeunload = function(e) {
        if ($scope.showSave) {
            return "Don't leave yet!  You still need to save.";
        }
    };

}]);