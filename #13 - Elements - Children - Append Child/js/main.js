/*jslint browser:true */
/*global console*/

var myMainDiv = document.getElementById('main'),

    myNewElement = document.createElement('div'),

    myText = document.createTextNode('Hello From JavaScript'),

    myNewP = document.createElement('p'),

    myNewText = document.createTextNode('Hello From JavaScript Again');


myNewElement.appendChild(myText);

myMainDiv.appendChild(myNewElement);

myNewP.appendChild(myNewText);

myMainDiv.appendChild(myNewP);


































/////////////////////////////////////////////////////////////////Height
