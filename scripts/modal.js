// https://angular-ui.github.io/bootstrap/#!#modal

angular.module('ui.bootstrap').controller('ModalCtrl', function ($uibModal, $log, $document) {
    var vm = this;

    vm.animationsEnabled = true;

    vm.open = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: vm.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: 'mc',
            size: size,
            appendTo: parentElem
        });

        modalInstance.result.then(function (selectedItem) {
            vm.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    vm.toggleAnimation = function () {
        vm.animationsEnabled = !vm.animationsEnabled;
    };
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
angular.module('ui.bootstrap').controller('ModalInstanceCtrl', function ($uibModalInstance) {
    var vm = this;

    vm.ok = function () {
        $uibModalInstance.close();
    };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.
angular.module('ui.bootstrap').component('modalComponent', {
    templateUrl: 'myModalContent.html',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function () {
        var vm = this;
        vm.ok = function () {
            vm.close();
        };
    }
});