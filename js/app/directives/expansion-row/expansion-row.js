(function (ng){
    ng.module('expansionRow', [])
        .controller('ExpansionRowController', ExpansionRowController)
        .directive('expansionRow', expansionRow);
    
    var currentElement = null;
    
    ExpansionRowController.$inject = [];
    function ExpansionRowController (){
        this.toggle = function (ev){
            if (currentElement){
                currentElement.toggleClass ("expanded");
            }
            
            currentElement = angular.element(ev.srcElement);
            currentElement.toggleClass ("expanded");
        };
    }
    
    function expansionRow (){
        var template = '<div class="grow" ng-click="expansionRowCtrl.toggle($event)" ng-transclude></div>';
        
        return {
            restrict: 'E',
            template: template,
            transclude: true,
            controller: 'ExpansionRowController',
            controllerAs: "expansionRowCtrl",
        };       
    }    
})(angular);