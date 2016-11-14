/*jshint esversion: 6 */

(function () {
"use strict";

window.onload = function() {
	// use babel for const !
	const body = document.getElementByClassNames( "body" )[0];
	body.innerHTML = body.innerHTML + " from javascript ";
};
})();
