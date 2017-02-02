/**
 * Created by alego on 30/1/2017.
 */
angular.module('CCSSapp', []).controller('mainCtrl', function($scope) {

    $scope.topics = 
    [
        {
            name: 'GERIATRIA',
            questions: 
            [
                {
                    title:'DONDE VIVES',
                    answers:['GUNACASTE','LIMON','HEREDIA','GRECIA'],
                    options:['A','B','C','D'],
                    correctAnswer:3
                },
                {
                    title:'COMO ES EL MUNDO',
                    answers:['LINDO','LOCO','VERDE','TRISTE'],
                    correctAnswer:3
                },
                {
                    title:'COMO ERES TU',
                    answers:['Es esto','Es quello','Es Amor','Es Ciencia'],
                    options:['A','B','C','D'],
                    correctAnswer:3
                }
            ]
            
        },
        {
            name: 'GERONTOLOGIA',
            questions: 
            [
                {
                    title:'QUE ES GEREATRIA',
                    answers:['Cuando','DONDE','PORQUE','Es Ciencia'],
                    options:['A','B','C','D'],
                    correctAnswer:3
                },
                {
                    title:'QUE ES NATURALEZA',
                    answers:['Es esto','Es quello','Es Amor','Es Ciencia'],
                    correctAnswer:3
                },
                {
                    title:'QUE ES  AGUA',
                    answers:['LIQUIDO','H2O','Es Amor','REFRESCANTE'],
                    options:['A','B','C','D'],
                    correctAnswer:3
                }
            ]
            
        },
        {
            name: 'GERIATRIA',
            questions: 
            [
                {
                    title:'DONDE VIVES',
                    answers:['GUNACASTE','LIMON','HEREDIA','GRECIA'],
                    options:['A','B','C','D'],
                    correctAnswer:3
                },
                {
                    title:'COMO ES EL MUNDO',
                    answers:['LINDO','LOCO','VERDE','TRISTE'],
                    correctAnswer:3
                },
                {
                    title:'COMO ERES TU',
                    answers:['Es esto','Es quello','Es Amor','Es Ciencia'],
                    options:['A','B','C','D'],
                    correctAnswer:3
                }
            ]
            
        },
       
    ];

});
