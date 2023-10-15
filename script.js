
const map = L.map('map').setView([51.505, -0.06], 15);

let imageOverlay;
let markersLayer1 = L.layerGroup(); // Layer group to hold markers for layer 1
let markersLayer2 = L.layerGroup(); // Layer group to hold markers for layer 2
let markersLayer3 = L.layerGroup(); // Layer group to hold markers for layer 3

// Add the layer groups to the map
markersLayer1.addTo(map);
markersLayer2.addTo(map);
markersLayer3.addTo(map);

var popup = L.popup();

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


    if (layer === 'layer1') {

        //LEVEL 1

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


    } else if (layer === 'layer2') {

        //LEVEL 2

        // Turf
        L.marker([51.508393, -0.060854]).addTo(markersLayer2)
            .bindPopup('<b>Turf</b> ')

        // Red square
        L.marker([51.506149, -0.071068]).addTo(markersLayer2)
            .bindPopup('<b>Red Square</b> ')

        // 231 - Library
        L.marker([51.503583, -0.064073]).addTo(markersLayer2)
            .bindPopup('<b>231</b> <br> School Library')

        // 224 - Art
        L.marker([51.509924, -0.052872]).addTo(markersLayer2)
            .bindPopup('<b>224</b> <br> Art Classroom, Mrs Schon')

        // 225 - Art Design
        L.marker([51.508403, -0.05343]).addTo(markersLayer2)
            .bindPopup('<b>225</b> <br> Art Design Room')

        // 226 - Art
        L.marker([51.507014, -0.053945]).addTo(markersLayer2)
            .bindPopup('<b>226</b> <br> Art Classroom, Mrs Jacobsen')

        // Atrium
        L.marker([51.507735, -0.049009]).addTo(markersLayer2)
            .bindPopup('<b>Atrium</b>')

        // 222 - PA office
        L.marker([51.511294, -0.048527]).addTo(markersLayer2)
            .bindPopup('<b>222</b> <br> Performing Arts Office')

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

        //LEVEL 3

        // 316 - Food tech
        L.marker([51.509631, -0.052958]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 317 - Digital tech
        L.marker([51.507522, -0.053773]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 318 - Fabric Tech
        L.marker([51.505386, -0.054159]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 314 - History
        L.marker([51.510218, -0.049438]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 313 - Geography
        L.marker([51.510138, -0.046692]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 312 - Classics
        L.marker([51.508616, -0.045104]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 311 - Chinese
        L.marker([51.506988, -0.044203]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 310 - French
        L.marker([51.505199, -0.043559]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 309 - Maori
        L.marker([51.504531, -0.045877]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')
        
        // 308 - Meeting room
        L.marker([51.505459, -0.047915]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 307 - Counselling Office
        L.marker([51.505059, -0.049235]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 305 - Careers & International studies
        L.marker([51.504872, -0.05064]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 306 - Languages Office
        L.marker([51.505619, -0.050393]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 304 - RE office
        L.marker([51.503003, -0.053247]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 302 - Science Office
        L.marker([51.500259, -0.054213]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 303 
        L.marker([51.501728, -0.053558]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 315 - Social Sciences Office
        L.marker([51.50883, -0.050576]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 320 - RE 
        L.marker([51.50349, -0.058236]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 321 - RE
        L.marker([51.50381, -0.060897]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 322 - RE
        L.marker([51.503997, -0.063386]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 323 - RE
        L.marker([51.504157, -0.065532]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 324 - English
        L.marker([51.503757, -0.068321]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 327 - English
        L.marker([51.50381, -0.072098]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 329 - Special aid
        L.marker([51.503677, -0.076218]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 330 - Math, Mrs Al-Habaash 
        L.marker([51.505866, -0.075145]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 331 - Math, Mr Wong
        L.marker([51.507495, -0.074587]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 332 - Math, Mrs Ding-Smith
        L.marker([51.508776, -0.074244]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 333 - English Office
        L.marker([51.509658, -0.0736]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 334 - 
        L.marker([51.511099, -0.073299]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 335
        L.marker([51.511206, -0.069952]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 336
        L.marker([51.510165, -0.067377]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 301
        L.marker([51.499324, -0.053215]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

        // 328
        L.marker([51.503463, -0.074458]).addTo(markersLayer3)
            .bindPopup('Marker for Layer 3')

    }

}


// Initial image overlay 
changeLayer('layer1');



// Coordinate function
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);