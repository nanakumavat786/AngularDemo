(function () {
     'use strict';
    angular.module('app')
        .service('workService',workService);

    /** @injector */
    function workService($http, Upload, webservice ) {

        var service={
            addRecentWork:addRecentWork,
            deleteRecentWork:deleteRecentWork,
            updateRecentWork:updateRecentWork,
            getAllRecentWork:getAllRecentWork,
            getRecentWorkById:getRecentWorkById
        }
        return service;

        function getRecentWorkById(id) {
            return $http.get(webservice.api+'/work/'+id);
        }

        function getAllRecentWork() {
             return $http.get(webservice.api+'/work');
        }

        function deleteRecentWork(id) {
            return $http.delete(webservice.api+'/work/'+id);
        }

        function addRecentWork(work) {
            return Upload.upload({
                method: 'POST',
                url: webservice.api + '/work',
                data: work
            });
        }

        function updateRecentWork(work) {
            return Upload.upload({
                method: 'PUT',
                url: webservice.api + '/work/'+ work._id,
                data: work
            });
        }

    }
})();