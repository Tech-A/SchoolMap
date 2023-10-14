
const map = L.map('map').setView([51.505, -0.06], 15);

let imageOverlay;
let markersLayer1 = L.layerGroup(); // Layer group to hold markers for layer 1
let markersLayer2 = L.layerGroup(); // Layer group to hold markers for layer 2
let markersLayer3 = L.layerGroup(); // Layer group to hold markers for layer 3


// Add the layer groups to the map
markersLayer1.addTo(map);
markersLayer2.addTo(map);
markersLayer3.addTo(map);

function changeLayer(layer) {

    // Clear existing markers
    markersLayer1.clearLayers();
    markersLayer2.clearLayers();
    markersLayer3.clearLayers();

    const imageUrl = layer === 'layer1' ? 'MapLevel 1.png' : (layer === 'layer2' ? 'MapLevel2 copy 2.png' : 'MapLevel3.png');
    const mapBounds = map.getBounds();
    const imageBounds = [[mapBounds._southWest.lat, mapBounds._southWest.lng], [mapBounds._northEast.lat, mapBounds._northEast.lng]];

    // Remove the current image overlay
    if (imageOverlay) {
        map.removeLayer(imageOverlay);
    }

    // Add the new image overlay to the map
    imageOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(map);


    // Add new markers for the selected layer
    if (layer === 'layer1') {

        // Gym
        L.marker([51.502412, -0.047078]).addTo(markersLayer1)
            .bindPopup('<b>Gym</b> <br> PE, General Assembly')
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });

        // Gym foyer
        L.marker([51.506525, -0.049353]).addTo(markersLayer1)
            .bindPopup('<b>Gym Foyer</b> ')

        // 123 - Gym Storage
        L.marker([51.506819, -0.044117]).addTo(markersLayer1)
            .bindPopup('<b>123</b> <br> Gym Storage <br> Sports equipment access')

        // 125/127 - Changing rooms
        L.marker([51.508901, -0.043645]).addTo(markersLayer1)
            .bindPopup('<b>125/127</b> <br> Changing rooms')

        // 128 - Dance
        L.marker([51.511118, -0.044761]).addTo(markersLayer1)
            .bindPopup('<b>128</b> <br> Dance')

        // Main office
        L.marker([51.499174, -0.059223]).addTo(markersLayer1)
            .bindPopup('<b>Main Office</b> <br> School Administration, Principals Office')

        //109 Lab
        L.marker([51.502247, -0.059352]).addTo(markersLayer1)
            .bindPopup('<b>109</b> <br> Science Lab')

        // Hauora Centre
        L.marker([51.504572, -0.058837]).addTo(markersLayer1)
            .bindPopup('<b>Hauora Centre</b> <br> Counselling, Wellness Centre, Nurse')

        // Caretaker
        L.marker([51.509248, -0.068879]).addTo(markersLayer1)
            .bindPopup('<b>141</b> <br> Caretaker')

        // 134
        L.marker([51.506923, -0.057249]).addTo(markersLayer1)
            .bindPopup('<b>134</b>')

        // Tuckshop
        L.marker([51.510851, -0.075874]).addTo(markersLayer1)
            .bindPopup('<b>Tuckshop</b> <br> Menu Online <br> Open at B1 and B2')

        // Sports/PE Office
        L.marker([51.508153, -0.051584]).addTo(markersLayer1)
            .bindPopup('<b>Sports/PE Office </b> <br> Sport sign-ups/inquiries')


        // Physio
        L.marker([51.502995, -0.063343]).addTo(markersLayer1)
            .bindPopup('<b>Physio</b> <br> Sport injuries treatment')



        // More markers for layer 1 as needed
    } else if (layer === 'layer2') {
        // Turf
        L.marker([51.508393, -0.060854]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // Red square
        L.marker([51.506149, -0.071068]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 231 - Library
        L.marker([51.503583, -0.064073]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 242, 243, 244 - Year 7 Classrooms
        L.marker([51.510325, -0.07021]).addTo(markersLayer2)
        .bindPopup('Marker for Layer 2')

        // 224 - Art
        L.marker([51.509924, -0.052872]).addTo(markersLayer2)
        .bindPopup('Marker for Layer 2')

        // 225 - Art Design
        L.marker([51.508403, -0.05343]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 226 - Art
        L.marker([51.507014, -0.053945]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // Atrium
        L.marker([51.507735, -0.049009]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 222 - PA office
        L.marker([51.511294, -0.048527]).addTo(markersLayer2)
        .bindPopup('Marker for Layer 2')

        // 218 - Music
        L.marker([51.507685, -0.044761]).addTo(markersLayer2)
        .bindPopup('Marker for Layer 2')

        // 242, 243, 244 - Year 7 Classrooms
        L.marker([51.510325, -0.07021]).addTo(markersLayer2)
        .bindPopup('Marker for Layer 2')

        // 224 - Art
        L.marker([51.509924, -0.052872]).addTo(markersLayer2)
        .bindPopup('Marker for Layer 2')

        // 225 - Art Design
        L.marker([51.508403, -0.05343]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 226 - Art
        L.marker([51.507014, -0.053945]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 220 - Drama
        L.marker([51.510058, -0.04931]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 219 - Drama
        L.marker([51.509738, -0.046048]).addTo(markersLayer2)
        .bindPopup('Marker for Layer 2')

        // 222 - PA office
        L.marker([51.511294, -0.048527]).addTo(markersLayer2)
        .bindPopup('Marker for Layer 2')

        // 218 - Music
        L.marker([51.507685, -0.044761]).addTo(markersLayer2)
        .bindPopup('Marker for Layer 2')





        // More markers for layer 2 as needed
    } else if (layer === 'layer3') {
        // Different markers for layer 2
        L.marker([51.506844, -0.061626]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')
            .openPopup();

        // More markers for layer 2 as needed
    }

}


// Initial image overlay (you can change this to whatever you want)
changeLayer('layer1');


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}


map.on('click', onMapClick);