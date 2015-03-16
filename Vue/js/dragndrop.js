// JavaScript Document
var lat, long, latL, longL, country, desc, test;
desc = document.getElementById("desc");


function showPos(position){
 latL = position.coords.latitude;
 longL = position.coords.longitude;
} 

function getLoc(){
     navigator.geolocation.getCurrentPosition(showPos);
}

getLoc();

$(function() {	
$( "#Fr, #Ca, #It, #Be, #Jap, #Loc, #Plan").draggable({ revert: true});
$( "#map").droppable({
drop: function( event, ui ) {

if(ui.draggable.attr('id') == 'Fr'){
	
	$.ajax({
		type: 'GET',
		url: "http://nominatim.openstreetmap.org/search",
		dataType: 'jsonp',
		jsonpCallback: 'data',
		data: {polygon: 1, format: "json", limit: 1,country: "France",json_callback: 'data' },
		error: function(xhr, status, error) {
		alert("ERROR "+error);
		},
		success: function(data){
			map.setView([data[0].lat, data[0].lon],5);
			marker.setLatLng([data[0].lat, data[0].lon]);
			marker.bindPopup('France');
			marker.openPopup();
			country = data[0].display_name;
			lat = data[0].lat;
			long = data[0].lon;
			if(lat != null && long != null){
				desc.innerHTML = "Pays: " + country;
				desc.innerHTML += "<br/> Latitude: " + lat;
				desc.innerHTML += "<br/> Longitude: " + long;
			}
		}
	});
	
	
}

if(ui.draggable.attr('id') == 'Ca'){

$.ajax({
		type: 'GET',
		url: "http://nominatim.openstreetmap.org/search",
		dataType: 'jsonp',
		jsonpCallback: 'data',
		data: {format: "json", limit: 1,country: "Canada",json_callback: 'data' },
		error: function(xhr, status, error) {
		alert("ERROR "+error);
		},
		success: function(data){
			map.setView([data[0].lat, data[0].lon],5);
			marker.setLatLng([data[0].lat, data[0].lon]);
			marker.bindPopup('Canada');
			marker.openPopup();
			country = data[0].display_name;
			lat = data[0].lat;
			long = data[0].lon;
			if(lat != null && long != null){
				desc.innerHTML = "Pays: " + country;
				desc.innerHTML += "<br/> Latitude: " + lat;
				desc.innerHTML += "<br/> Longitude: " + long;
			}
		}
	});
}

if(ui.draggable.attr('id') == 'It'){
$.ajax({
		type: 'GET',
		url: "http://nominatim.openstreetmap.org/search",
		dataType: 'jsonp',
		jsonpCallback: 'data',
		data: {format: "json", limit: 1,country: "Italie",json_callback: 'data' },
		error: function(xhr, status, error) {
		alert("ERROR "+error);
		},
		success: function(data){
			map.setView([data[0].lat, data[0].lon],5);
			marker.setLatLng([data[0].lat, data[0].lon]);
			marker.bindPopup('Italie');
			marker.openPopup();
			country = data[0].display_name;
			lat = data[0].lat;
			long = data[0].lon;
			if(lat != null && long != null){
				desc.innerHTML = "Pays: " + country;
				desc.innerHTML += "<br/> Latitude: " + lat;
				desc.innerHTML += "<br/> Longitude: " + long;
			}
		}
	});
}

if(ui.draggable.attr('id') == 'Be'){
$.ajax({
		type: 'GET',
		url: "http://nominatim.openstreetmap.org/search",
		dataType: 'jsonp',
		jsonpCallback: 'data',
		data: {format: "json", limit: 1,country: "Belgique",json_callback: 'data' },
		error: function(xhr, status, error) {
		alert("ERROR "+error);
		},
		success: function(data){
			map.setView([data[0].lat, data[0].lon],5);
			marker.setLatLng([data[0].lat, data[0].lon]);
			marker.bindPopup('Belgique');
			marker.openPopup();
			country = data[0].display_name;
			lat = data[0].lat;
			long = data[0].lon;
			if(lat != null && long != null){
				desc.innerHTML = "Pays: " + country;
				desc.innerHTML += "<br/> Latitude: " + lat;
				desc.innerHTML += "<br/> Longitude: " + long;
			}
		}
	});
}

if(ui.draggable.attr('id') == 'Jap'){
$.ajax({
		type: 'GET',
		url: "http://nominatim.openstreetmap.org/search",
		dataType: 'jsonp',
		jsonpCallback: 'data',
		data: {format: "json", limit: 1,country: "Japon",json_callback: 'data' },
		error: function(xhr, status, error) {
		alert("ERROR "+error);
		},
		success: function(data){
			map.setView([data[0].lat, data[0].lon],5);
			marker.setLatLng([data[0].lat, data[0].lon]);
			marker.bindPopup('Japon');
			marker.openPopup();
			country = data[0].display_name;
			lat = data[0].lat;
			long = data[0].lon;
			if(lat != null && long != null){
				desc.innerHTML = "Pays: " + country;
				desc.innerHTML += "<br/> Latitude: " + lat;
				desc.innerHTML += "<br/> Longitude: " + long;
			}
		}
	});}

if(ui.draggable.attr('id') == 'Loc'){
/*$( this )
//alert(tab + tab1);
//var coord = [tab];
//alert(coord);
map.setView([latL , longL],5);
marker.setLatLng([latL , longL]);
	marker.bindPopup('Votre position GPS');
	marker.openPopup();
*/	//alert(latL + " " + longL);
/**/	

$.ajax({
		type: 'GET',
		url: "http://nominatim.openstreetmap.org/reverse",
		dataType: 'jsonp',
		jsonpCallback: 'data',
		data: {format: "json", limit: 1, lat: latL,
		lon:longL, json_callback: 'data' },
		error: function(xhr, status, error) {
		alert("ERROR "+error);
		},
		success: function(data){
			country = data.address.country;
			lat = data.lat;
			long = data.lon;
			map.setView([lat, long],5);
			marker.setLatLng([latL, longL]);
			if(lat != null && long != null){
				if(country != undefined){
					marker.bindPopup(country);
					marker.openPopup();
					desc.innerHTML = "Pays: " + country;
					desc.innerHTML += "<br/> Latitude: " + lat;
					desc.innerHTML += "<br/> Longitude: " + long;
				}
				else{
					marker.bindPopup(data.display_name);
					marker.openPopup();
					desc.innerHTML = "Latitude: " + lat;
					desc.innerHTML += "<br/> Longitude: " + long;
				}
			}
			
		}
	});	/**/
	
}

if(ui.draggable.attr('id') == 'Plan'){
$( this )
map.setView([51.4779, -0.0118], 3);
	//marker.unbindPopup();
	marker.closePopup();
	/*marker.setLatLng([51.4779, -0.0118]);
	marker.bindPopup('Paris');
	marker.openPopup();*/
}

}
});
});


