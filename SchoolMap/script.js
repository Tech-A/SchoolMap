
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

        // 243 - Year 7 Classroom
        L.marker([51.510299, -0.069823]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 244 - Year 7 Classroom - Mrs Barwig
        L.marker([51.509711, -0.067763]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 242 - Year 7 Classroom - Mrs Mehrotra
        L.marker([51.509978, -0.07257]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 206
        L.marker([51.503463, -0.054116]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 205 - Lab
        L.marker([51.502021, -0.054631]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 201 - Staffroom
        L.marker([51.497856, -0.053902]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 229 - Social Studies, Mrs Dakanay
        L.marker([51.503463, -0.059309]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 202 - Deputy Principal
        L.marker([51.497856, -0.057507]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 233 - Lab
        L.marker([51.50389, -0.071969]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 232 - Lab
        L.marker([51.503517, -0.069094]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 239 - English
        L.marker([51.507869, -0.073771]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 240 - English
        L.marker([51.50389, -0.071969]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 212, 211, 210 - Music Lessons
        L.marker([51.505573, -0.047808]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 207 - Dean's Office
        L.marker([51.504611, -0.054288]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 203 
        L.marker([51.499992, -0.054374]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 235 - Math Office
        L.marker([51.503543, -0.075445]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 238 - Lab tech
        L.marker([51.505653, -0.075231]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 227 - Art Office
        L.marker([51.506667, -0.050812]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 220 - Drama
        L.marker([51.510058, -0.049267]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 219 - Drama
        L.marker([51.509711, -0.046134]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // 215, 216, 217 - Music
        L.marker([51.505973, -0.044374]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')

        // Playground
        L.marker([51.512648, -0.070596]).addTo(markersLayer2)
            .bindPopup('Marker for Layer 2')


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