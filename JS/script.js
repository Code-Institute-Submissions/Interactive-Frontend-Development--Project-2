// Creating Map
let map = L.map('map').setView([1.3521, 103.8198], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYm9vbmh1aTkxIiwiYSI6ImNrOGJkanRtazAyczMzbWp4eXpqMnF2aXMifQ.dPr5Glf2pRlpNMY9w-E-CQ'
}).addTo(map);

$(function(){
    // Getting chas clinic data
    let chasData = '../data/chas-clinics-geojson.geojson'
    // Upon clicking CHAS button
    $('#chas').click(function(){
        axios.get(chasData).then(function(response){
            let chasCordinates = response.data.features
            let chasMarkerCluster = L.markerClusterGroup()
            let x = 0
            for (let c of chasCordinates){              
                console.log(chasCordinates[x].geometry.coordinates)          
                let t = chasCordinates[x].geometry.coordinates
                let chasMarker = L.marker([t[1],t[0]]);
                let m = chasMarker.bindPopup(response.data.features[x].properties.Description)
                chasMarkerCluster.addLayer(m);
                map.addLayer(chasMarkerCluster)   
                // chasMarker.bindPopup(response.data.features[x].properties.Description).addTo(map);
                x = x + 1;
            }
    })
}) //End of axios chasData



})