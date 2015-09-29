
/*************************************************************
 *
 *	Created By: Nguyen Minh Tri - UR81HC
 *  Created Date: 29-09-2015
 *	Description: add comment header
 *	
 *	Modified By: Nguyen Minh Tri - UR81HC
 *	Modified Date: 29-09-2015
 *	Description:
 *
 *************************************************************/
angular.module("GlobalModule").controller("quoteController", quoteController);
quoteController.$inject = ['$scope'];

function quoteController($scope) {

    "use strict";

    //show popover for navigation to Header, Summary,  BOMs
    $scope.showActionsToSelectedQuote = function ($event) {
        console.log($event.originalTarget);
        ons.createPopover('quoteNavigationOptions.html').then(function (popover) {
            $scope.popover = popover;
            $scope.popover.show($event.originalTarget);
        });

    };

    $scope.options = ['BOMs', 'Summary', 'Header'];
}
