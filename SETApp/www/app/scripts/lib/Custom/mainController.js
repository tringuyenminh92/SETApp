/*************************************************************
 *
 *	Created By: Nguyen Minh Tri - UR81HC
 *  Created Date: 21-10-2015
 *	Description: add comment header
 *	
 *	Modified By: Nguyen Minh Tri - UR81HC
 *	Modified Date: 21-10-2015
 *	Description: controller for sign in, navigation
 *
 *************************************************************/

angular.module("GlobalModule").controller("mainController", mainController);
mainController.$inject = ['$scope'];

function mainController($scope) {

    "use strict";

    $scope.isLogged = false;

    $scope.initBackground = function () {
        //$(".page__background").backstretch("app/images/backgroundLogin.jpg");
        $(".page__background").backstretch(["app/images/w02.jpg", "app/images/w01.jpg", "app/images/w03.jpg", "app/images/w04.jpg"], { speed: 350 });
    };

    $scope.login = function () {
        $scope.isLogged = !$scope.isLogged;
    };

}
