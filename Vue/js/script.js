// JavaScript Document
var map;
var marker;
var circle;
//Doit montrer la position actuelle
function Map(){
//Créer une map dans la div #map centrée sur la position actuelle
map = L.map('map').setView([51.4779, -0.0118], 3);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'/*, {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}*/).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
marker = L.marker([51.4779, -0.0118]).addTo(map)
    .bindPopup('Bienvenue sur notre map')
    .openPopup();

circle = circle = L.circle([51.4779, -0.0118], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
});

/*
function highlightFeature(e) {
    var layer = e.target;

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

highlightFeature(e);
*/

map.on('click', function(e) {
    $.ajax({
		type: 'GET',
		url: "http://nominatim.openstreetmap.org/reverse",
		dataType: 'jsonp',
		jsonpCallback: 'data',
		data: {format: "json", limit: 1, lat: e.latlng.lat,
		lon: e.latlng.lng , json_callback: 'data' },
		error: function(xhr, status, error) {
		alert("ERROR "+error);
		},
		success: function(data){
			adresse = data.display_name;
			country = data.address.country;
			lat = e.latlng.lat;
			long = e.latlng.lng;
			map.setView([lat, long],5);
			marker.setLatLng([lat, long]);
			if(lat != null && long != null){
				if(country == undefined){
					marker.bindPopup(adresse);
					marker.openPopup();
					//desc.innerHTML = "Pays: " + adresse;
					desc.innerHTML = "Latitude: " + lat;
					desc.innerHTML += "<br/> Longitude: " + long;
				}
				else {
					marker.bindPopup(country);
					marker.openPopup();
					desc.innerHTML = "Pays: " + country;
					desc.innerHTML += "<br/> Latitude: " + lat;
					desc.innerHTML += "<br/> Longitude: " + long;
				}
			}
			
		}
	});
});
}