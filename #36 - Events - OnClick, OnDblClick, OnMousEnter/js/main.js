/*jslint browser:true */
/*global console*/

var myButton = document.getElementById('myButton'),

    myNote = document.getElementById('notice');


////////////////////////////////// onclick /////////////////////////////////////

myButton.onclick = function () {

    'use strict';

    myNote.textContent = 'You Clicked On The Button.';
};


//////////////////////////////// ondblclick ////////////////////////////////////

myButton.ondblclick = function () {

    'use strict';

    myNote.textContent = 'You Clicked On The Button Double.';
};


////////////////////////////// oncontextmenu ///////////////////////////////////

myButton.oncontextmenu = function (e) {

    'use strict';

    e.preventDefault();

    myNote.textContent = 'You Cant Right Click Here.';
};


////////////////////////////// onmouseenter ////////////////////////////////////

myButton.onmouseenter = function () {

    'use strict';

    myNote.textContent = 'You Hoverd On The Button.';
};


////////////////////////////// onmouseleave ////////////////////////////////////

myButton.onmouseleave = function () {

    'use strict';

    myNote.textContent = 'You Left The Button.';
};













/////////////////////////////////////////////////////////////////Height
