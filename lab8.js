var mymap = L.map('mapid').setView([25.312355, 55.489484], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGFzc2FuMjU3IiwiYSI6ImNrZ3MxOWx2bDA3YnAydHA5OTN0eGFvaTQifQ.4BP-ydaHVatL8G-Q33bhvg'
}).addTo(mymap);

map.on('click', function(e){
    var marker = new L.marker(e.latlng).addTo(map);
})

mymap.on('click', mark_coordinates);

//var marker = L.marker([25.312502, 55.492711]).addTo(mymap);

function mark_coordinates() {
    var x2 = $('#lat')[0].value;
    var y2 = $('#long')[0].value;
    var marker = L.marker([x2 , y2]).addTo(mymap);
    
    //var x = document.getElementById("lat").value;
    //var y = document.getElementById("long").value;
    
    //var marker = L.marker([x , y]).addTo(mymap);
    
    //map.setView([x, y], 13);
}