/*jslint browser:true */
/*global console*/

var myForm = document.getElementById('main'),

    myNote = document.getElementById('notice'),

    myInput = document.getElementById('input');


/////////////////////////////// onfocus ////////////////////////////////////////

myInput.onfocus = function () {

    'use strict';

    myNote.textContent = 'Please Dont Forget To Write A Strong Password';
};


//////////////////////////////// onblur ////////////////////////////////////////

myInput.onblur = function () {

    'use strict';

    myNote.textContent = '';

    if (myInput.value.length < 10) {

        myNote.textContent = 'Sorry Your Password Must Be At Least 10 characters';
    }
};


/////////////////////////////// onsubmit ///////////////////////////////////////

myForm.onsubmit = function (e) {

    'use strict';

    e.preventDefault();
};













/////////////////////////////////////////////////////////////////Height
