
/*************************************************************
 *
 *	Created By: Nguyen Minh Tri - UR81HC
 *  Created Date: 03-04-2015
 *	Description: Global script to define basic functions and root angularjs module
 *	
 *	Modified By: Nguyen Minh Tri - UR81HC
 *	Modified Date: 08-04-2015
 *	Description: add modal in rootScope
 *
 *	Modified By: Nguyen Minh Tri - UR81HC
 *	Modified Date: 23-04-2015
 *	Description: Add  Directive Accept Number Only
 *
 *************************************************************/

(function () {

    "use strict";

    angular.module('GlobalModule', ['onsen', 'ngAnimate', 'ngRoute', 'ngSanitize', 'ngTouch']);

    angular.module("GlobalModule").factory("shareService", shareService);

   
})();


//Share data service
shareService.$inject = ['$rootScope'];
function shareService($rootScope) {

    var serviceObject = {};

    //Publish event
    serviceObject.RaiseEvent = function (sender, data) {
        $rootScope.$broadcast(sender, { item: data });
    };

    //subscribe event for current controller
    serviceObject.OnEvent = function ($scope, sender, handler) {
        $scope.$on(sender, function (event, args) {
            handler(args.item);
        });
    };

    return serviceObject;
}