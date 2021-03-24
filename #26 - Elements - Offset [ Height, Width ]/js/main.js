/*jslint browser:true */
/*global console*/

/*
/////////////////////// #01 - clientHeight & clientWidth ///////////////////////

Viewable Area
Include Padding
No Border
No Scroll
No Margin

///////////////////// #02 - offsetHeight & offsetWidth /////////////////////////

Viewable Area
Include Padding
Include Border
Include Scroll
No Margin

//////////////////// #03 - scrollHeight & scrollWidth //////////////////////////

All Area Include Invisible Area
Include Padding
No Border
No Scroll
No Margin
*/

var myMainDiv = document.getElementById('main');

console.log(myMainDiv.clientHeight + 'px'); // (300px Viewable element height - 17px scroll width) = 283px new element height + 40px padding = 323px clientHeight.

console.log(myMainDiv.clientWidth + 'px'); // (300px Viewable element width - 17px scroll width) = 283px new element width + 40px padding = 323px clientWidth.

console.log(myMainDiv.scrollHeight + 'px'); // 800px All element height + 40px top & bottom padding = 840px scrollHeight.

console.log(myMainDiv.scrollWidth + 'px'); // 800px All element height + 20px only left padding(no right padding) = 820px scrollHeight.

console.log(myMainDiv.offsetHeight + 'px'); // 300px Viewable element height(283px new element height + 17px scroll width) + 40px padding + 40px border = 380px offsetHeight.

console.log(myMainDiv.offsetWidth + 'px'); // 300px Viewable element width(283px new element width + 17px scroll width) + 40px padding + 40px border = 380px offsetHeight.


















/////////////////////////////////////////////////////////////////Height
