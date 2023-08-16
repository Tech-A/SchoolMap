
//const map = L.map('map').setView([latitude, longitude], zoomLevel);
const map = L.map('map').setView([51.505, -0.09], 15);


// Replace 'image-url' with the path to your exported PNG map image
const imageUrl = 'MapLevel1.png';
const mapBounds = map.getBounds();
const imageBounds = [[mapBounds._southWest.lat, mapBounds._southWest.lng], [mapBounds._northEast.lat, mapBounds._northEast.lng]];

L.imageOverlay(imageUrl, imageBounds).addTo(map);
//const imageBounds = [[latitude1, longitude1], [latitude2, longitude2]]; // Replace with the bounds of your image
//const imageBounds = [[51.5, -0.1], [51.49, -0.08]];

// Add the PNG image overlay tosc the map
//L.imageOverlay(imageUrl, imageBounds).addTo(map);

