
// Initialise map
const map = L.map('map').setView([51.505, -0.06], 15);

// Initialise popup
var popup = L.popup();

let imageOverlay;
let markersLayer1 = L.layerGroup(); // Layer 1 markers
let markersLayer2 = L.layerGroup(); // Layer 2 markers
let markersLayer3 = L.layerGroup(); // Layer 3 markers

// Add the layer groups to the map
markersLayer1.addTo(map);
markersLayer2.addTo(map);
markersLayer3.addTo(map);



function changeLayer(layer) {

    // Clear existing markers
    markersLayer1.clearLayers();
    markersLayer2.clearLayers();
    markersLayer3.clearLayers();



    // Map images
    const imageUrl = layer === 'layer1'
        ? 'MapLevel1.png'
        : (layer === 'layer2'
            ? 'MapLevel2.png'
            : 'MapLevel3.png');

    // Map bounds
    const mapBounds = map.getBounds();
    const imageBounds = [[mapBounds._southWest.lat, mapBounds._southWest.lng], [mapBounds._northEast.lat, mapBounds._northEast.lng]];




    // Remove the current image overlay (layer)
    if (imageOverlay) {
        map.removeLayer(imageOverlay);
    }

    // Add the new image overlay to the map
    imageOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(map);




    // Minimum zoom level // Prevent zooming out beyond the image bounds
    const minZoom = map.getBoundsZoom(imageBounds, false);
    map.setMinZoom(minZoom);
    map.setMaxBounds(imageBounds);




    if (layer === 'layer1') {

        // LEVEL 1

        // Gym
        L.marker([51.502412, -0.047078]).addTo(markersLayer1)
            .bindPopup('<b>Gym</b> <br> PE, General Assembly', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });

        // Gym foyer
        L.marker([51.506525, -0.049353]).addTo(markersLayer1)
            .bindPopup('<b>Gym Foyer</b>', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 123 - Gym Storage
        L.marker([51.506819, -0.044117]).addTo(markersLayer1)
            .bindPopup('<b>123</b> <br> Gym Storage <br> Sports equipment access', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 125/127 - Changing rooms
        L.marker([51.508901, -0.043645]).addTo(markersLayer1)
            .bindPopup('<b>125/127</b> <br> Changing rooms', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 128 - Dance
        L.marker([51.511118, -0.044761]).addTo(markersLayer1)
            .bindPopup('<b>128</b> <br> Dance', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // Main office
        L.marker([51.499174, -0.059223]).addTo(markersLayer1)
            .bindPopup('<b>Main Office</b> <br> School Administration, Principals Office', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        //109 Lab
        L.marker([51.502247, -0.059352]).addTo(markersLayer1)
            .bindPopup('<b>109</b> <br> Science Lab', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // Hauora Centre
        L.marker([51.504572, -0.058837]).addTo(markersLayer1)
            .bindPopup('<b>Hauora Centre</b> <br> Counselling, Wellness Centre, Nurse', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // Caretaker
        L.marker([51.509248, -0.068879]).addTo(markersLayer1)
            .bindPopup('<b>141</b> <br> Caretaker', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 134
        L.marker([51.506923, -0.057249]).addTo(markersLayer1)
            .bindPopup('<b>134</b>', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // Tuckshop
        L.marker([51.510851, -0.075874]).addTo(markersLayer1)
            .bindPopup('<b>Tuckshop</b> <br> Menu Online <br> Open at B1 and B2', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // Sports/PE Office
        L.marker([51.508153, -0.051584]).addTo(markersLayer1)
            .bindPopup('<b>Sports/PE Office </b> <br> Sport sign-ups/inquiries', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // Physio
        L.marker([51.502995, -0.063343]).addTo(markersLayer1)
            .bindPopup('<b>Physio</b> <br> Sport injuries treatment', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });



    } else if (layer === 'layer2') {

        //LEVEL 2

        // 231 - Library
        L.marker([51.503583, -0.064073]).addTo(markersLayer2)
            .bindPopup('<b>231</b> <br> School Library', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 224 - Art
        L.marker([51.509924, -0.052872]).addTo(markersLayer2)
            .bindPopup('<b>224</b> <br> Art Classroom, Mrs Schon', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 225 - Art Design
        L.marker([51.508403, -0.05343]).addTo(markersLayer2)
            .bindPopup('<b>225</b> <br> Art Design Room', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 226 - Art
        L.marker([51.507014, -0.053945]).addTo(markersLayer2)
            .bindPopup('<b>226</b> <br> Art Classroom, Mrs Jacobsen', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 222 - PA office
        L.marker([51.511294, -0.048527]).addTo(markersLayer2)
            .bindPopup('<b>222</b> <br> Performing Arts Office', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 218 - Music
        L.marker([51.507685, -0.044761]).addTo(markersLayer2)
            .bindPopup('<b>218</b> <br> Music', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 243 - Year 7 Classroom
        L.marker([51.510299, -0.069823]).addTo(markersLayer2)
            .bindPopup('<b>243</b> <br> Year 7 Classroom', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 244 - Year 7 Classroom - Mrs Barwig
        L.marker([51.509711, -0.067763]).addTo(markersLayer2)
            .bindPopup('<b>244</b> <br> Year 7 Classroom <br> Mrs Barwig-Uini', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 242 - Year 7 Classroom - Mrs Mehrotra
        L.marker([51.509978, -0.07257]).addTo(markersLayer2)
            .bindPopup('<b>242</b> <br> Year 7 Classroom <br> Mrs Mehrotra', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 206
        L.marker([51.503463, -0.054116]).addTo(markersLayer2)
            .bindPopup('<b>206</b>', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 205 - Lab
        L.marker([51.502021, -0.054631]).addTo(markersLayer2)
            .bindPopup('<b>205</b> <br> Science Lab', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 201 - Staffroom
        L.marker([51.497856, -0.053902]).addTo(markersLayer2)
            .bindPopup('<b>201</b> <br> Staffroom', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 229 - Social Studies, Mrs Dakanay
        L.marker([51.503463, -0.059309]).addTo(markersLayer2)
            .bindPopup('<b>229</b> <br> Social Studies <br> Mrs Dakanay', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 202 - Deputy Principal
        L.marker([51.497856, -0.057507]).addTo(markersLayer2)
            .bindPopup('<b>202</b> <br> Deputy principal', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 233 - Lab
        L.marker([51.50389, -0.071969]).addTo(markersLayer2)
            .bindPopup('<b>233</b> <br> Science Lab', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 232 - Lab
        L.marker([51.503517, -0.069094]).addTo(markersLayer2)
            .bindPopup('<b>232</b> <br> Science Lab', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 239 - English
        L.marker([51.507869, -0.073771]).addTo(markersLayer2)
            .bindPopup('<b>239</b> <br> English', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 240 - English
        L.marker([51.50389, -0.071969]).addTo(markersLayer2)
            .bindPopup('<b>240</b> <br> English', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 212, 211, 210 - Music Lessons
        L.marker([51.505573, -0.047808]).addTo(markersLayer2)
            .bindPopup('<b>212, 211, 210 </b> <br> Music Lessons', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 207 - Dean's Office
        L.marker([51.504611, -0.054288]).addTo(markersLayer2)
            .bindPopup('<b>207</b> <br> Deans Office', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 203 
        L.marker([51.499992, -0.054374]).addTo(markersLayer2)
            .bindPopup('<b>203</b>', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 235 - Math Office
        L.marker([51.503543, -0.075445]).addTo(markersLayer2)
            .bindPopup('<b>235</b> <br> Math Office', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 238 - Lab tech
        L.marker([51.505653, -0.075231]).addTo(markersLayer2)
            .bindPopup('<b>238</b> <br> Lab tech', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 227 - Art Office
        L.marker([51.506667, -0.050812]).addTo(markersLayer2)
            .bindPopup('<b>227</b> <br> Art Office', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 220 - Drama
        L.marker([51.510058, -0.049267]).addTo(markersLayer2)
            .bindPopup('<b>220</b> <br> Drama', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 219 - Drama
        L.marker([51.509711, -0.046134]).addTo(markersLayer2)
            .bindPopup('<b>229</b> <br> Drama', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 215, 216, 217 - Music
        L.marker([51.505973, -0.044374]).addTo(markersLayer2)
            .bindPopup('<b>215, 216, 217</b> <br> Music', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });






    } else if (layer === 'layer3') {

        //LEVEL 3

        // 316 - Food tech
        L.marker([51.509631, -0.052958]).addTo(markersLayer3)
            .bindPopup('<b>316</b> <br> Food Technology', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 317 - Digital tech
        L.marker([51.507522, -0.053773]).addTo(markersLayer3)
            .bindPopup('<b>317</b> <br> Digital Technology', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 318 - Fabric Tech
        L.marker([51.505386, -0.054159]).addTo(markersLayer3)
            .bindPopup('<b>318</b> <br> Fabric Technology', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 314 - History
        L.marker([51.510218, -0.049438]).addTo(markersLayer3)
            .bindPopup('<b>314</b> <br> History', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 313 - Geography
        L.marker([51.510138, -0.046692]).addTo(markersLayer3)
            .bindPopup('<b>313</b> <br> Geography', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 312 - Classics
        L.marker([51.508616, -0.045104]).addTo(markersLayer3)
            .bindPopup('<b>312</b> <br> Classics', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 311 - Chinese
        L.marker([51.506988, -0.044203]).addTo(markersLayer3)
            .bindPopup('<b>311</b> <br> Chinese', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 310 - French
        L.marker([51.505199, -0.043559]).addTo(markersLayer3)
            .bindPopup('<b>310</b> <br> French', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 309 - Maori
        L.marker([51.504531, -0.045877]).addTo(markersLayer3)
            .bindPopup('<b>309</b> <br> Maori', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 308 - Meeting room
        L.marker([51.505459, -0.047915]).addTo(markersLayer3)
            .bindPopup('<b>308</b> <br> Meeting room', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 307 - Counselling Office
        L.marker([51.505059, -0.049235]).addTo(markersLayer3)
            .bindPopup('<b>307</b> <br> Counselling Office', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 305 - Careers & International studies
        L.marker([51.504872, -0.05064]).addTo(markersLayer3)
            .bindPopup('<b>305</b> <br> Careers & International studies', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 306 - Languages Office
        L.marker([51.505619, -0.050393]).addTo(markersLayer3)
            .bindPopup('<b>306</b> <br> Languages Office', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 304 - RE office
        L.marker([51.503003, -0.053247]).addTo(markersLayer3)
            .bindPopup('<b>304</b> <br> RE Office', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 302 - Science Office
        L.marker([51.500259, -0.054213]).addTo(markersLayer3)
            .bindPopup('<b>302</b> <br> Science Office', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 303 
        L.marker([51.501728, -0.053558]).addTo(markersLayer3)
            .bindPopup('<b>303</b>', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 315 - Social Sciences Office
        L.marker([51.50883, -0.050576]).addTo(markersLayer3)
            .bindPopup('<b>315</b> <br> Social Sciences Office', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 320 - RE 
        L.marker([51.50349, -0.058236]).addTo(markersLayer3)
            .bindPopup('<b>320</b> <br> RE Classroom', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 321 - RE
        L.marker([51.50381, -0.060897]).addTo(markersLayer3)
            .bindPopup('<b>321</b> <br> RE Classroom', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 322 - RE
        L.marker([51.503997, -0.063386]).addTo(markersLayer3)
            .bindPopup('<b>322</b> <br> RE Classroom', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 323 - RE
        L.marker([51.504157, -0.065532]).addTo(markersLayer3)
            .bindPopup('<b>323</b> <br> RE Classroom', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 324 - English
        L.marker([51.503757, -0.068321]).addTo(markersLayer3)
            .bindPopup('<b>324</b> <br> English Classroom', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 327 - English
        L.marker([51.50381, -0.072098]).addTo(markersLayer3)
            .bindPopup('<b>327</b> <br> English Classroom', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 329 - Special aid
        L.marker([51.503677, -0.076218]).addTo(markersLayer3)
            .bindPopup('<b>329</b> <br> Special Aid', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 330 - Math, Mrs Al-Habaash 
        L.marker([51.505866, -0.075145]).addTo(markersLayer3)
            .bindPopup('<b>330</b> <br> Math Classroom <br> Mrs Al-Habaash', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 331 - Math, Mr Wong
        L.marker([51.507495, -0.074587]).addTo(markersLayer3)
            .bindPopup('<b>331</b> <br> Math Classroom <br> Mr Wong', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 332 - Math, Mrs Ding-Smith
        L.marker([51.508776, -0.074244]).addTo(markersLayer3)
            .bindPopup('<b>332</b> <br> Math Classroom <br> Mrs Ding-Smith', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 333 - English Office
        L.marker([51.509658, -0.0736]).addTo(markersLayer3)
            .bindPopup('<b>333</b> <br> English Office', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 334 - 
        L.marker([51.511099, -0.073299]).addTo(markersLayer3)
            .bindPopup('<b>334</b>', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 335
        L.marker([51.511206, -0.069952]).addTo(markersLayer3)
            .bindPopup('<b>335</b>', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 336
        L.marker([51.510165, -0.067377]).addTo(markersLayer3)
            .bindPopup('<b>336</b>', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 301
        L.marker([51.499324, -0.053215]).addTo(markersLayer3)
            .bindPopup('<b>301</b>', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


        // 328
        L.marker([51.503463, -0.074458]).addTo(markersLayer3)
            .bindPopup('<b>328</b>', { closeButton: false })
            .on('mouseover', function () {
                this.openPopup();
            })
            .on('mouseout', function () {
                this.closePopup();
            });


    }

}

changeLayer('layer1');


//Coordinate function
//function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//   .setContent("You clicked the map at " + e.latlng.toString())
// .openOn(map);
//}
//map.on('click', onMapClick);