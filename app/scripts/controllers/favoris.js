'use strict';

/**
 * @ngdoc function
 * @name recettesFamilleApp.controller:FavorisCtrl
 * @description
 * Controller for the favorite items
 */
angular.module('recettesFamilleApp')
  .controller('FavorisCtrl', function () {
    // Affiche les recettes mises en favoris si l'utilisateur est bien co
    // besoin de 3 functions : isCo() et isEmpty() getFavoris()
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

