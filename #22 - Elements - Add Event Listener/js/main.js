/*jslint browser:true */
/*global console*/

var myMainButton = document.getElementById('main'),

    myPower = document.getElementById('power');

myMainButton.onclick = function () {

    'use strict';

    document.getElementById('monster1').style.display = 'none';
};

function makePower() {

    'use strict';

    document.getElementById('monster2').style.display = 'none';
}

myPower.onclick = function () {

    'use strict';

    myMainButton.addEventListener('click', makePower);
};
























/////////////////////////////////////////////////////////////////Height
