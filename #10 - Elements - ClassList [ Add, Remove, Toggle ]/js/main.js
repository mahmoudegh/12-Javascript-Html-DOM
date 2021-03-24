/*jslint browser:true */
/*global console*/

var myDiv = document.getElementById('main'),

    myButton = document.getElementsByClassName('button');

myButton[0].onclick = function () {

    'use strict';

    myDiv.classList.add('blue');

};

myButton[1].onclick = function () {

    'use strict';

    myDiv.classList.remove('blue');

};

myButton[2].onclick = function () {

    'use strict';

    myDiv.classList.toggle('green');

};































/////////////////////////////////////////////////////////////////Height
