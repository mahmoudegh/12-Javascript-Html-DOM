/*jslint browser:true */
/*global console*/

var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[1].nodeName);

console.log(myMainDiv.childNodes[3].tagName);

console.log(myMainDiv.childNodes[0].tagName);

console.log(myMainDiv.childNodes[0].nodeValue);

console.log(myMainDiv.childNodes[1].nodeValue);

console.log(myMainDiv.childNodes[1].childNodes[0].nodeValue);

console.log(myMainDiv.childNodes[3].childNodes[0].nodeType);  // [3 => Text]  ||  [1 => Element]  ||  [2 => Attribute]  ||  [8 => Comment]






























/////////////////////////////////////////////////////////////////Height
