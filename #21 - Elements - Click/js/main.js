/*jslint browser:true */
/*global console*/

var myMainDiv = document.getElementById('main'),

    myButton = myMainDiv.firstElementChild;

myButton.onclick = function () {

    'use strict';

    this.parentElement.style.display = 'none';
};


window.onload = function () {

    'use strict';

    setTimeout(function () {

        myButton.click();

    }, 2000);
};
























/////////////////////////////////////////////////////////////////Height
