//jshint esversion:6

module.exports = getDate;

function getDate() {
let today = new Date();	
	let options = {
		weekday : "long",
	};


let day = today.toLocaleDateString("en-US", options);
return day;
}