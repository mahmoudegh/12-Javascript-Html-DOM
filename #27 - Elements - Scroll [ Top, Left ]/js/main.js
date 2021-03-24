/*jslint browser:true */
/*global console*/

var myMainDiv = document.getElementById('main');

myMainDiv.onclick = function () {

    'use strict';

    document.scrollingElement.scrollTop += 100;

    console.log(document.scrollingElement.scrollTop);

    if (document.scrollingElement.scrollTop >= 1000) {

        myMainDiv.classList.add('active');
    }
};


// scrollingElement || documentElement (body removed)















/////////////////////////////////////////////////////////////////Height
