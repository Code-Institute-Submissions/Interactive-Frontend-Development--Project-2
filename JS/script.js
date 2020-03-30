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
    // Getting data sets
    let chasData = '../data/chas-clinics-geojson.geojson'
    let hosData = '../data/hospital.geojson'

    // creating the CHAS marker clusters layer
    let chasMarkerCluster = L.markerClusterGroup()
   
    // Upon clicking CHAS button
    $('#chas').click(function(){
        axios.get(chasData).then(function(response){
            let chasCordinates = response.data.features 
            let x = 0
            for (let c of chasCordinates){              
                // console.log(chasCordinates[x].geometry.coordinates)          
                let t = chasCordinates[x].geometry.coordinates
                let chasMarker = L.marker([t[1],t[0]]);
                let m = chasMarker.bindPopup(response.data.features[x].properties.Description)
                chasMarkerCluster.addLayer(m);
                // map.addLayer(chasMarkerCluster)   
                // chasMarker.bindPopup(response.data.features[x].properties.Description).addTo(map);
                x = x + 1;
            }
            if (map.hasLayer(chasMarkerCluster)){
                map.removeLayer(chasMarkerCluster)
                $('#chas').text("Show CHAS")

            }
            else{
                map.addLayer(chasMarkerCluster)
                $('#chas').text("Hide CHAS")
            }
            
    })
}) //End of axios chasData

    // creating the Hospital markers layers
    let hospitalLayerGroup = L.layerGroup();

    // Upon clicking Hospital function
    $('#hospital').click(function(){
        axios.get(hosData).then(function(response){

            let hosCordinates = response.data.features
            let x = 0
            for (let h of hosCordinates){              
                let t = hosCordinates[x].geometry.coordinates
                let hosMarker = L.marker([t[0],t[1]]);
                let m = hosMarker.bindPopup(response.data.features[x].geometry.Name)
                hospitalLayerGroup.addLayer(m)
                // m.addTo(map);
                // map.addLayer(m)
                x = x + 1;
            }
            if (map.hasLayer(hospitalLayerGroup)){
                map.removeLayer(hospitalLayerGroup)
                $('#hospital').text("Show Hospital")
            }
            else{
                map.addLayer(hospitalLayerGroup)
                $('#hospital').text("Hide Hospital")
            }
    })
    })// end of Axios hosData 




})