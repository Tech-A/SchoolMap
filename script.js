
//const map = L.map('map').setView([latitude, longitude], zoomLevel);
const map = L.map('map').setView([51.505, -0.09], 15);


// Replace 'image-url' with the path to your exported PNG map image
const imageUrl = 'Artboard 5.png';
const mapBounds = map.getBounds();
const imageBounds = [[mapBounds._southWest.lat, mapBounds._southWest.lng], [mapBounds._northEast.lat, mapBounds._northEast.lng]];

L.imageOverlay(imageUrl, imageBounds).addTo(map);
//const imageBounds = [[latitude1, longitude1], [latitude2, longitude2]]; // Replace with the bounds of your image
//const imageBounds = [[51.5, -0.1], [51.49, -0.08]];

// Add the PNG image overlay tosc the map
//L.imageOverlay(imageUrl, imageBounds).addTo(map);
//const pixelX = 100; // Replace with your pixel X-coordinate
//const pixelY = 150; // Replace with your pixel Y-coordinate

// Add a marker at the provided pixel coordinates
//const marker = L.marker(map.unproject([pixelX, pixelY], map.getMaxZoom())).addTo(map);

L.marker([51.501958, -0.073497]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

L.marker([51.508101, -0.075574]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);