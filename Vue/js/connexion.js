 $(function() {
// run the currently selected effect
function runEffect() {
// get effect type from
var selectedEffect = "scale";
// most effect types need no options passed by default
var options = {};
// some effects have required parameters
if ( selectedEffect === "scale" ) {
options = { percent: 100 };
} else if ( selectedEffect === "size" ) {
options = { to: { width: 280, height: 185 } };
}
// run the effect
$( "#effect" ).show( selectedEffect, options, 800, callback );
};
//callback function to bring a hidden box back
function callback() {
setTimeout(function() {
$( "#effect:visible" ).removeAttr( "style" ).fadeOut();
}, 100000000 );
};
// set effect from select menu value
$( "#button" ).click(function() {
runEffect();
return false;
});
$( "#effect" ).hide();
});