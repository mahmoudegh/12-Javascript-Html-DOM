/*jslint browser:true */
/*global console*/

var myMainDiv = document.getElementById('main'),

    myNewElement = document.createElement('div'),

    myText = document.createTextNode('Hello From JavaScript');

myNewElement.appendChild(myText);

//myMainDiv.insertBefore(myNewElement, myMainDiv.firstElementChild);

myMainDiv.insertBefore(myNewElement, myMainDiv.childNodes[3]);


































/////////////////////////////////////////////////////////////////Height
