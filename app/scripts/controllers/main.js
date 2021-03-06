'use strict';

/**
 * @ngdoc function
 * @name recettesFamilleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recettesFamilleApp
 */
angular.module('recettesFamilleApp')
  .controller('AccueilCtrl', function () {
    // On affiche ici les 6 dernières recettes dans des jumbotrons
    // D'abord on prend les six dernières entrée dans la base mongoDB
    this.recettes = [
        {
            'id' : 6,
            'nom' : 'Poulet Basquaise'
        },
        {
            'id' : 7,
            'nom' : 'Couscous'
        }
    ];
  });
