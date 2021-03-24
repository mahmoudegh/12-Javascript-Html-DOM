/*jslint browser:true */
/*global console*/

var myMainDiv = document.getElementById('main'),

    myButton = myMainDiv.firstElementChild;

myButton.onclick = function () {

    'use strict';

    this.parentNode.style.display = 'none';
};

////////////////////////////////////////////////////////////////////////////////


if (myMainDiv.parentElement.tagName === 'BODY') {

    console.log('This Element Has No Parent Only Body');
}






























/////////////////////////////////////////////////////////////////Height
