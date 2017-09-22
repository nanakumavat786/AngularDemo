(function () {
    'use strict';
    angular.module('app')
        .controller('workController', workController);
    /** @injector */
    function workController(toastr, workService) {
        var vm = this;
        vm.recentWork = {};
        vm.addRecentWork = addRecentWork;
        vm.getAllRecentWork = getAllRecentWork;
        vm.deleteRecentWork = deleteRecentWork;
        vm.updateRecentWork = updateRecentWork;
        vm.getRecentWorkById = getRecentWorkById;

        function getAllRecentWork() {

            workService.getAllRecentWork().then(function (response) {
                vm.recentWork = angular.copy(response.data);
            }, function (error) {
                toastr.error(error.data.message);
            })
        }

        function addRecentWork(data) {
            if (data._id) {

            } else {
                workService.addRecentWork(data)
                    .then(function (response) {
                        if (response.status === 200) {
                            toastr.success(response.data.message);
                            $state.go('');
                        }
                    }, function (error) {
                        toastr.success(response.data.message);
                    })
            }
        }

        function deleteRecentWork(id) {
            workService.deleteRecentWork(id)
                .then(function (response) {
                    toastr.success(response.data.message);
                }, function (error) {
                    toastr.success(response.data.message);
                })
        }

        function updateRecentWorkForm(id) {
            $state.go('app.recentWorkManage', {id: id});
        }
    }
})()