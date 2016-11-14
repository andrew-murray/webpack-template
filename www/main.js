/*jshint esversion: 6 */

(function () {
"use strict";

window.onload = function() {
	// use babel for const !
	const body = window.document.getElementsByTagName( "body" )[0];
	body.innerHTML = body.innerHTML + " <i>from javascript</i>";
};
})();
