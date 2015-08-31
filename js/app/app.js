(function (ng){
    ng.module('app', ["ngMaterial", "expansionRow"])
        .controller('MainController', MainController);
    
    MainController.$inject = ["$scope", "$mdDialog"];
    function MainController ($scope, $mdDialog){
        this.testList = window.testListData;
        this.test = function (ev){
            $mdDialog.show(
                $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('This is an alert title')
                .content('You can specify some description text in here.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent(ev)
            );
        };
    }
})(angular);
