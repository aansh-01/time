
var sheet = (function() {
	var style = document.createElement("style");
	document.head.appendChild(style);
	return style.sheet;
})();

// get the starting postion based on the current time
var date = new Date();
var sDeg = date.getSeconds() / 60 * 360 + 90;
var mDeg = date.getMinutes() / 60 * 360 + 90 + sDeg / 60;
var hDeg = date.getHours() / 12 * 360 + 90 + mDeg / 12;

// offset second and minute hands based on the staring time of the hour since the hour hand rotates the other two hands as well
sDeg -= hDeg;
mDeg -= hDeg;

// create css rules for staring position and animation
sheet.addRule('.clock::after', 'transform: rotate('+ sDeg + 'deg)');
sheet.addRule('.clock::before', 'transform: rotate('+ mDeg + 'deg)');
sheet.addRule('.clock', 'transform: rotate('+ hDeg + 'deg)');

sheet.insertRule("@keyframes sSpin { 0 { transform: rotate(" + sDeg + "deg); } 100% { transform: rotate(" + (sDeg + 360) + "deg); } }", 0);
sheet.insertRule("@keyframes mSpin { 0 { transform: rotate(" + mDeg + "deg); } 100% { transform: rotate(" + (mDeg + 360) + "deg); } }", 0);
sheet.insertRule("@keyframes hSpin { 0 { transform: rotate(" + hDeg + "deg); } 100% { transform: rotate(" + (hDeg + 360) + "deg); } }", 0);