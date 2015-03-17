// JavaScript Document

var p = document.getElementById("info");

function getLocation()
  {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  	else{p.innerHTML="Geolocation non supportée par ce navigateur.";}
  	}

function showPosition(position)
  { var t;
  	p.innerHTML = "Latitude: " + position.coords.latitude;
  	p.innerHTML += "<br/>Longitude: " + position.coords.longitude;
  }
  
/*function showPos(position){
 var tab = [];
 tab[0] = position.coords.latitude;
 tab[1] = position.coords.longitude;
 return tab;
} 

function getLoc(){
      navigator.geolocation.getCurrentPosition(showPos);
}

//getLoc();
*/
