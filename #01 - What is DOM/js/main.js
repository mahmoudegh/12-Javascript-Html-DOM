/*jslint browser:true */
/*global console*/

var myP = document.createElement("p"),

    myPText = document.createTextNode("This Paragraph Created By JavaScript !");

myP.appendChild(myPText);

document.body.appendChild(myP);
