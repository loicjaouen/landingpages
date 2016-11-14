$(document).ready(function(){
    var mymap = L.map('mapid');
    
    // create the tile layer
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 19, attribution: osmAttrib});

    // start the map in South-East England
    mymap.setView(new L.LatLng(46.487400, 6.723743),15);
    mymap.addLayer(osm);

    // add a marker
    var marker = L.marker([46.488100, 6.723743]).addTo(mymap);
    
    // and the pop-up
    marker.bindPopup("<b>here we are</b><br>see it on <a href='https://www.google.ch/maps/@46.4881064,6.7240367,150m/data=!3m1!1e3?hl=fr'>google</a>.").openPopup();
});
