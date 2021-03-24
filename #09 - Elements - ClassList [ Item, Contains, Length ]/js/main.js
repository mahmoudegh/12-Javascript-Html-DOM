/*jslint browser:true */
/*global console*/


var myDiv = document.getElementById('main');

//console.log(myDiv.classList);

//console.log(myDiv.classList.length);


/*if (myDiv.classList.contains('zero')) {

    console.log('Yes This Div Contain Class zero');

} else {

    console.log('No This Div Do Not Contain Class zero');
}*/


//console.log(myDiv.classList.item(0));


var myText = document.getElementById('text'),

    myButton = document.querySelectorAll('.button'),

    myResult = document.getElementById('result'),

    i;

for (i = 0; i < myButton.length; i = i + 1) {

    myButton[i].onclick = function () {

        'use strict';

        if (myText.classList.contains(this.textContent)) {

            myResult.textContent = 'Yes class ' + this.textContent + ' is found.';

        } else {

            myResult.textContent = 'No class ' + this.textContent + ' is not found.';
        }
    };
}

/*
myButtonB.onclick = function () {

    'use strict';

    if (myText.classList.contains(myButtonB.textContent)) {

        myResult.textContent = 'Yes class ' + myButtonB.textContent + ' is found.';

    } else {

        myResult.textContent = 'No class ' + myButtonB.textContent + ' is not found.';
    }
};
*/































/////////////////////////////////////////////////////////////////Height
