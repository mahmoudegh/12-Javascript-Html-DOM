/*jslint browser:true */
/*global console*/

/*
    clientHeight & clientWidth ==>

        Viewable Area
        Include Padding
        No Border
        No Margin
        No Scroll

////////////////////////////////////////////////////////////////////////////////

    scrollHeight & scrollWidth ==>

        All Area Include Invisible Area
        Include Padding
        No Border
        No Margin
        No Scroll
*/

var myMainDiv = document.getElementById('main'),

    myChildDiv = document.getElementById('child');

console.log(myMainDiv.clientHeight + 'px'); // (300px Viewable element height - 17px scroll width) = 283px new element height + 40px padding = 323px clientHeight.

console.log(myMainDiv.clientWidth + 'px'); // (300px Viewable element width - 17px scroll width) = 283px new element width + 40px padding = 323px clientWidth.

console.log(myMainDiv.scrollHeight + 'px'); // 800px All element height + 40px top & bottom padding = 840px scrollHeight.

console.log(myMainDiv.scrollWidth + 'px'); // 800px All element height + 20px only left padding(no right padding) = 820px scrollHeight.



console.log(myChildDiv.clientHeight + 'px'); // 800px

console.log(myChildDiv.clientWidth + 'px');  // 800px

console.log(myChildDiv.scrollHeight + 'px'); // 800px

console.log(myChildDiv.scrollWidth + 'px');  // 800px




















/////////////////////////////////////////////////////////////////Height
