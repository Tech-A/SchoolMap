
const map = L.map('map').setView([51.505, -0.09], 15);

let imageOverlay;

function changeLayer(layer) {
    const imageUrl = layer === 'layer1' ? 'Artboard 5.png' : 'Artboard 3.png';
    const mapBounds = map.getBounds();
    const imageBounds = [[mapBounds._southWest.lat, mapBounds._southWest.lng], [mapBounds._northEast.lat, mapBounds._northEast.lng]];

    // Remove the current image overlay
    if (imageOverlay) {
        map.removeLayer(imageOverlay);
    }

    // Add the new image overlay to the map
    imageOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(map);
}

// Initial image overlay (you can change this to whatever you want)
changeLayer('layer1');

// Replace 'image-url' with the path to your exported PNG map image
//const imageUrl = 'Artboard 5.png';
//const mapBounds = map.getBounds();
//const imageBounds = [[mapBounds._southWest.lat, mapBounds._southWest.lng], [mapBounds._northEast.lat, mapBounds._northEast.lng]];

//L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Gym
L.marker([51.50169, -0.075188]).addTo(map)
    .bindPopup('<b>Gym</b> <br> PE, General Assembly')
    .openPopup();

// Gym foyer
L.marker([51.507033, -0.077046]).addTo(map)
    .bindPopup('Gym Foyer')
    .openPopup();

// 123 - Gym Storage
L.marker([51.50714, -0.071754]).addTo(map)
    .bindPopup('<b>123</b> <br> Gym Storage <br> Sports equipment access')
    .openPopup();

// 125/127 - Changing rooms
L.marker([51.509918, -0.069966]).addTo(map)
    .bindPopup('125/127 <br> Changing rooms')
    .openPopup();

// 128 - Dance
L.marker([51.512321, -0.071039]).addTo(map)
    .bindPopup('128 <br> Dance')
    .openPopup();

// Main office
L.marker([51.497977, -0.089273]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

//109 Lab
L.marker([51.501637, -0.089144]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

// Hauora Centre
L.marker([51.503186, -0.090517]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

// Caretaker
L.marker([51.510158, -0.100684]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

// 134
L.marker([51.50706, -0.086269]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

// Tuckshop
L.marker([51.511867, -0.109694]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


// Sports/PE Office
L.marker([51.508929, -0.079791]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


// Physio
L.marker([51.502545, -0.094249]).addTo(map)
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