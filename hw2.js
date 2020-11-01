var map;

window.onload = function() {
    var dir;

    map = L.map('map', {
      layers: MQ.mapLayer(),
      center: [ 38.895345, -77.030101 ],
      zoom: 15
    });

    dir = MQ.routing.directions();

    dir.route({
        locations: [
            '1600 pennsylvania ave, washington dc',
            '935 pennsylvania ave, washington dc'
        ]
    });

    map.addLayer(MQ.routing.routeLayer({
        directions: dir,
        fitBounds: true
    }));

    map.on('click', function(e) {
        console.log(e.latlng.lat + "," + e.latlng.lng)
    }); 
}

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("Marker added at " + e.latlng.toString())
//         .openOn(map);
//         //var marker = L.marker(e.latlng).addTo(map);
//         map.icons.marker.addWithPopup({ lng: e.lat, lat: e.lng }, 'marker-sm.png', 'Denver, CO')
// }

// map.on('click', onMapClick);

