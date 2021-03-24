/*jslint browser:true */
/*global console*/

var myElement = document.createElement('div');

document.body.appendChild(myElement);

var myText = document.createTextNode('This Div Created By JavaScript');

var myStartComment = document.createComment('Start Comment Created By JavaScript');

var myEndComment = document.createComment('End Comment Created By JavaScript');

myElement.appendChild(myStartComment);

myElement.appendChild(myText);

myElement.appendChild(myEndComment);



///////////////////////////////////////////////////////////////////////////////

var myUl = document.getElementById('myUl'),

    myLi,

    i;

for (i = 1; i <= 50; i++) {

    myLi = document.createElement('li');

    myText = document.createTextNode('This Li Created By JavaScript ' + i);

    myUl.appendChild(myLi);

    myLi.appendChild(myText);
}












/////////////////////////////////////////////////////////////////Height
