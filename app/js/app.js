var app = angular.module('editableApp', []);

app.directive('makeEditable', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/make-editable.html',
        transclude: true,
        scope: true,
        link: function ($scope, element, attrs) {
            $scope.editingStatus = false;
            $scope.buttonText = 'edit now';
            $scope.toggleEdit = function () {
                if ($scope.editingStatus == false) {
                    $scope.editingStatus = true;
                    $scope.buttonText = 'save now';
                } else {
                    $scope.editingStatus = false;
                    $scope.buttonText = 'edit now';
                }
            };
        }
    };
});
