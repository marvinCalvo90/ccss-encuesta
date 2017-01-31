/**
 * Created by alego on 30/1/2017.
 */
angular.module('CCSSapp', []).controller('mainCtrl', function($scope) {

    $scope.topics = [
        {
            name: 'GERIATRIA',
            questions: ['QUE ES GERIATRIA', 'QUE ES OTRA VARA'],
            answers: [1, 3]
        },
        {
            name: 'TERAPIA RESPIRATORIA',
            questions: ['QUE ES TERAPIA', 'QUE ES OTRA VARA'],
            answers: [1, 2]
        },
        {
            name: 'OASHDAS',
            questions: ['QUE ESAKLJASLKDAKLS', 'QUE ES OTRA VARA'],
            answers: [1, 2]
        },
        {
            name: 'GERIATRIA',
            questions: ['QUE ES GERIATRIA', 'QUE ES OTRA VARA'],
            answers: [1, 3]
        },
        {
            name: 'TERAPIA RESPIRATORIA',
            questions: ['QUE ES TERAPIA', 'QUE ES OTRA VARA'],
            answers: [1, 2]
        },
        {
            name: 'OASHDAS',
            questions: ['QUE ESAKLJASLKDAKLS', 'QUE ES OTRA VARA'],
            answers: [1, 2]
        }
    ];
});
