
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

    console.log('app starting', navigator.userAgent);
  
    // config settings flag, to indicate which kind of service 
    // will be used: localservice, webapi service,...
    angular.module("GlobalModule").configuration = {
        useLocalData: true
    };

    //angular.module("GlobalModule").config(['$routeProvider', '$compileProvider',
    //       function ($routeProvider, $compileProvider) {
    //           $routeProvider
    //               .when("/albums", {
    //                   templateUrl: "app/views/albums.html"
    //               })
    //               .when("/album/edit/:albumId", {
    //                   templateUrl: "app/views/editalbum.html"
    //               })
    //               .when("/album/:albumId", {
    //                   templateUrl: "app/views/album.html"
    //               })
    //               .when("/artists", {
    //                   templateUrl: "app/views/artists.html"
    //               })
    //               .when("/artist/:artistId", {
    //                   templateUrl: "app/views/artist.html"
    //               })
    //               .when("/about", {
    //                   templateUrl: "app/views/about.html"
    //               })
    //               .when("/options", {
    //                   templateUrl: "app/views/options.html"
    //               })
    //               .otherwise({
    //                   redirectTo: '/options'
    //               });

    //           // Fix issue for Windows Phone wanting to download files on urls with routed parameters
    //           $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);
    //       }
    //])
    //   .filter('linebreakFilter', function () {
    //       return function (text) {
    //           if (text !== undefined && text)
    //               return text.replace(/\n/g, '<br />');
    //           return text;
    //       };
    //   });

    angular.module("GlobalModule").factory("shareService", shareService);

})();

//Service to call Modal
modalService.$inject = ['$modal'];
function modalService($modal) {

    var serviceObject = {};
    serviceObject.ShowModal = function (funcOk, funcCancel, passData) {

        var modalInstance = $modal.open({
            templateUrl: passData.Template || 'gridModal.html',
            backdrop: 'static',
            keyboard: false,
            controller: passData.Controller || 'gridModalController',
            size: passData.Size || 'lg',
            resolve: {
                data: function () { return passData; }
            }
        });

        modalInstance.result.then(funcOk, funcCancel);
    };

    return serviceObject;
}


//Service to show notification message
notifyService.$inject = ['$rootScope'];
function notifyService($rootScope) {

    'use strict';

    $rootScope.queue = [];

    var serviceObject = {};

    serviceObject.add = function (item) {
        $rootScope.queue.push(item);
        setTimeout(function () {
            // remove the alert after 2000 ms
            $('.alerts .alert').eq(0).remove();
            $rootScope.queue.shift();
        }, 4000);
    },

    serviceObject.pop = function () {
        $rootScope.queue.pop();
    };

    return serviceObject;

}


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