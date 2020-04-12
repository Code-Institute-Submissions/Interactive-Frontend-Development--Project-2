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
    let chasData = 'data/chas-clinics-geojson.geojson'
    let hosData = 'data/hospital.geojson'

    // creating the CHAS marker clusters layer
    let chasMarkerCluster = L.markerClusterGroup()
    // creating the Hospital markers layers
    let hospitalLayerGroup = L.layerGroup();

   
    // Upon clicking CHAS button
    $('#chas').click(function(){
        axios.get(chasData).then(function(response){
            let chasCordinates = response.data.features 
            let x = 0
            for (let c of chasCordinates){              
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


    // Upon clicking Hospital button
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

    // leaflet omnivore
    let clusterCases = omnivore.kml('data/dengue-clusters-kml.kml').addTo(map)
    .on('ready', function() {
     this.setStyle({color: "#FF0000"});
 });
 // workaround for cluster to reflect the added color, to remove the layer on default
    if (map.hasLayer(clusterCases)){
        map.removeLayer(clusterCases);
    }

        //Upon clicking on Show Cluster button
    $('#cluster').click(function(){  
        if (map.hasLayer(clusterCases)){
            map.removeLayer(clusterCases)
            $('#cluster').text("Show Cluster")
        }
        else{
            map.addLayer(clusterCases)
            $('#cluster').text("Hide Cluster")
        }
    })

    // creating layers for breeding habitat  
    let centralHabitat = omnivore.kml('data/aedes-mosquito-breeding-habitats-central-kml.kml')
    let northEastHabitat = omnivore.kml('data/aedes-mosquito-breeding-habitats-north-east-kml.kml')
    let northWestHabitat = omnivore.kml('data/aedes-mosquito-breeding-habitats-north-west-kml.kml')
    let southEastHabitat = omnivore.kml('data/aedes-mosquito-breeding-habitats-south-east-kml.kml')
    let southWestHabitat = omnivore.kml('data/aedes-mosquito-breeding-habitats-south-west-kml.kml')

    // seting individual layer
    let habitatLayers = {
        'Central': centralHabitat,
        'North East': northEastHabitat,
        'North West' : northWestHabitat,
        'South East' : southEastHabitat,
        'South West' : southWestHabitat
    }

    // creating layer control on map
    let layerControl = L.control.layers(null,habitatLayers).addTo(map);
    map.addControl(layerControl);

    // Layer control header
    $('<h6 id ="control-header">Breeding Habitat</h6>').insertBefore('div.leaflet-control-layers-base');

})

// Home button
var home = {
    lat:  1.3521,
    lng: 103.8198,
    zoom: 11
  }; 
  
  L.easyButton('fa-home fa-lg',function(btn,map){
    map.setView([home.lat, home.lng], home.zoom);
  },'Zoom To Home').addTo(map);


