/*jslint browser:true */
/*global console*/

var myElement = document.getElementById('main'),

    myInput = document.getElementById('input'),

    myNote = document.getElementById('notice');


myInput.onkeyup = function () {

    'use strict';

    myNote.textContent = myInput.value;
};

















/////////////////////////////////////////////////////////////////Height
