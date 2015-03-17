// JavaScript Document
var lat, long, latL, longL, country, desc, test, layer, geojson;
desc = document.getElementById("desc");


function showPos(position){
 latL = position.coords.latitude;
 longL = position.coords.longitude;
} 

function getLoc(){
     navigator.geolocation.getCurrentPosition(showPos);
}

getLoc();

function highlightFeature(e) {
    layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}


function resetHighlight(e) {
    geojson.resetStyle(e.target);
}


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
		data: {format: "json", limit: 1,country: "France",json_callback: 'data', polygon_geojson:1}, //nouvelle ligne détourage
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
			longi = data[0].lon;
			
			if (layer != null){
				map.removeLayer(layer);
			}
			
			geojson = L.geoJson(data[0].geojson);
			layer = geojson.addTo(map); //nouvelle ligne détourage
			
			
			if(lat != null && longi != null){
				desc.innerHTML = "Pays: " + country;
				desc.innerHTML += "<br/> Latitude: " + lat;
				desc.innerHTML += "<br/> Longitude: " + longi;
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
		data: {format: "json", limit: 1,country: "Canada",json_callback: 'data', polygon_geojson:1 },
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
			longi = data[0].lon;
			
			if (layer != null){
				map.removeLayer(layer);
			}

			geojson = L.geoJson(data[0].geojson);
			layer =geojson.addTo(map); //nouvelle ligne détourage
			
			if(lat != null && longi != null){
				desc.innerHTML = "Pays: " + country;
				desc.innerHTML += "<br/> Latitude: " + lat;
				desc.innerHTML += "<br/> Longitude: " + longi;
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
		data: {format: "json", limit: 1,country: "Italie",json_callback: 'data', polygon_geojson:1 },
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
			longi = data[0].lon;
			
			if (layer != null){
				map.removeLayer(layer);
			}
			
			geojson = L.geoJson(data[0].geojson);
			layer =geojson.addTo(map); //nouvelle ligne détourage
			
			if(lat != null && longi != null){
				desc.innerHTML = "Pays: " + country;
				desc.innerHTML += "<br/> Latitude: " + lat;
				desc.innerHTML += "<br/> Longitude: " + longi;
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
		data: {format: "json", limit: 1,country: "Belgique",json_callback: 'data', polygon_geojson:1 },
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
			
			if (layer != null){
				map.removeLayer(layer);
			}

			geojson = L.geoJson(data[0].geojson);
			layer =geojson.addTo(map); //nouvelle ligne détourage
			
			if(lat != null && longi != null){
				desc.innerHTML = "Pays: " + country;
				desc.innerHTML += "<br/> Latitude: " + lat;
				desc.innerHTML += "<br/> Longitude: " + longi;
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
		data: {format: "json", limit: 1,country: "Japon",json_callback: 'data', polygon_geojson:1 },
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
			longi = data[0].lon;
			
			if (layer != null){
				map.removeLayer(layer);
			}

			geojson = L.geoJson(data[0].geojson);
			layer =geojson.addTo(map); //nouvelle ligne détourage
			
			if(lat != null && longi != null){
				desc.innerHTML = "Pays: " + country;
				desc.innerHTML += "<br/> Latitude: " + lat;
				desc.innerHTML += "<br/> Longitude: " + longi;
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
		lon:longL, json_callback: 'data'},
		error: function(xhr, status, error) {
		alert("ERROR "+error);
		},
		success: function(data){
			country = data.display_name;
			lat = data.lat;
			lon = data.lon;
			map.setView([lat, lon],5);
			marker.setLatLng([latL, longL]);
			marker.bindPopup(country);
			marker.openPopup();
			
			
			
			if(lat != null && longi != null){
				desc.innerHTML = "Pays: " + country;
				desc.innerHTML += "<br/> Latitude: " + lat;
				desc.innerHTML += "<br/> Longitude: " + longi;
				
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


