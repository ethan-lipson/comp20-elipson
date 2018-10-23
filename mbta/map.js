     
     var map, infoWindow, features;
     var curr_pos;
     var isMiles = true;
     function initMap() {
     	var place_sstat = {lat: 42.352271, lng: -71.05524200000001};
        map = new google.maps.Map(
        	document.getElementById('map'), {center: place_sstat, zoom: 14});

     infoWindow = new google.maps.InfoWindow;
	var image = {
		url:'https://png.icons8.com/ios/50/000000/city-railway-station-filled.png',
		scaledSize: new google.maps.Size(25, 25), 
    };
     
     if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

    		  curr_pos = new google.maps.Marker({
            	position: pos,
            	map: map,
            	title: 'Current Position'
          	}); 

          	curr_pos.addListener('click', function() {
          		infowindow = new google.maps.InfoWindow({
            	content:'Current Position'});
    			   infowindow.open(map, curr_pos);
  			});
            findNearestMarker(pos,features);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });

    } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }


 	  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
      station: {
      icon: image,
      },
    };
    features = [
          {
            position: new google.maps.LatLng(42.352271, -71.05524200000001),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_sstat', name: 'South Station'
          },{
            position: new google.maps.LatLng(42.330154, -71.057655),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_andrw', name: 'Andrew'
          },{
          	position: new google.maps.LatLng(42.3884, -71.11914899999999),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_portr', name: 'Porter Square'
          },{
          	position: new google.maps.LatLng(42.373362, -71.118956),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_harsq', name: 'Harvard Square'
          },{
          	position: new google.maps.LatLng(42.320685, -71.052391),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_jfk', name: 'JFK/UMass'
          },{
          	position: new google.maps.LatLng(42.31129, -71.053331),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_shmnl', name: 'Savin Hill'
          },{
          	position: new google.maps.LatLng(42.35639457, -71.0624242 ),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_pktrm', name: 'Park Street'
          },{
          	position: new google.maps.LatLng(42.342622, -71.056967),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_brdwy', name: 'Broadway'
          },{
          	position: new google.maps.LatLng(42.275275, -71.029583),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_nqncy', name: 'North Quincy'
          },{
          	position: new google.maps.LatLng(42.29312583, -71.06573796000001),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_smmnl', name: 'Shawmut'
          },{
          	position: new google.maps.LatLng(42.39674, -71.121815),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_davis', name: 'Davis'
          },{
          	position: new google.maps.LatLng(42.395428, -71.142483),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_alfcl', name: 'Alewife'
          },{
          	position: new google.maps.LatLng(42.36249079, -71.08617653),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_knncl', name: 'Kendall/MIT'
          },{
          	position: new google.maps.LatLng(42.361166, -71.070628),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_chmnl', name: 'Charles/MGH'
          },{
          	position: new google.maps.LatLng(42.355518, -71.060225),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_dwnxl', name: 'Downtown Crossing'
          },{
          	position: new google.maps.LatLng(42.251809, -71.005409),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_qnctr', name: 'Quincy Center'
          },{
          	position: new google.maps.LatLng(42.233391, -71.007153),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_qamnl', name: 'Quincy Adams'
          },{
          	position: new google.maps.LatLng(42.284652, -71.06448899999999),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_asmnl', name: 'Ashmont'
          },{
          	position: new google.maps.LatLng(42.2665139, -71.0203369),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_wlsta', name: 'Wollaston'
          },{
          	position: new google.maps.LatLng(42.300093, -71.061667),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_fldcr', name: 'Fields Corner'
          },{
          	position: new google.maps.LatLng(42.365486, -71.103802),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_cntsq', name: 'Central Square'
          },{
          	position: new google.maps.LatLng(42.2078543, -71.0011385),
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_brntn', name: 'Braintree'
          },
    ];

        // Create markers.
    features.forEach(function(feature) {
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: map
      });
      infowindow = new google.maps.InfoWindow({
        content: feature.name});
      marker.addListener('click', function() {
    		infowindow.open(map, marker);
  		});
    });

  	var redlinePlanCoordinates_1 = [
    	features[11].position,
    	features[10].position,
    	features[2].position,
    	features[3].position,
    	features[20].position,
    	features[12].position,
    	features[13].position,
    	features[6].position,
    	features[14].position,
    	features[0].position,
    	features[7].position,
    	features[1].position,
    	features[4].position,
    	features[5].position,
    	features[19].position,
    	features[9].position,
    	features[17].position
	  ];

  	var redlinePlanCoordinates_2 = [
  		features[11].position,
    	features[10].position,
    	features[2].position,
    	features[3].position,
    	features[20].position,
    	features[12].position,
    	features[13].position,
    	features[6].position,
    	features[14].position,
    	features[0].position,
    	features[7].position,
    	features[1].position,
    	features[4].position,
    	features[8].position,
    	features[18].position,
    	features[15].position,
    	features[16].position,
    	features[21].position
  	];

  	var red_line_1 = new google.maps.Polyline({
    	path: redlinePlanCoordinates_1,
    	geodesic: true,
    	strokeColor: '#FF0000',
    	strokeOpacity: 0.8,
    	strokeWeight: 4
  	});

  	var red_line_2 = new google.maps.Polyline({
    	path: redlinePlanCoordinates_2,
    	geodesic: true,
    	strokeColor: '#FF0000',
    	strokeOpacity: 0.8,
    	strokeWeight: 4
  	});

  	red_line_1.setMap(map);
  	red_line_2.setMap(map);
    
    }

    

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }

    function getSchedule(infoWindow, feature){
        request = new XMLHttpRequest();
        request.open("GET", feature.id)

    }

  function findNearestMarker(coords, features) {
  var minDist = 1000,
    nearest_marker = '*None*',
    markerDist,
    // get all objects added to the map
    len = features.length,
    i;

  // iterate over objects and calculate distance between them
  for (i = 0; i < len; i += 1) {
    var coord2 = features[i].position;
    markerDist = haversineDistance(coords, coord2, isMiles);
    if (markerDist < minDist) {
      minDist = markerDist;
      nearest_marker = features[i].position;
    }
  }

  var closest_marker_path = [
    coords,
    nearest_marker
  ]

  var closest_marker_line = new google.maps.Polyline({
    path: closest_marker_path,
    geodesic:true,
    strokeColor: '#0000FF',
    strokeOpacity: 0.8,
    strokeWeight: 4
  });
}

function haversineDistance(coords1, coords2, isMiles) {
  function toRad(x) {
    return x * Math.PI / 180;
  }

  var lon1 = coords1[0];
  var lat1 = coords1[1];

  var lon2 = coords2[0];
  var lat2 = coords2[1];

  var R = 6371; // km

  var x1 = lat2 - lat1;
  var dLat = toRad(x1);
  var x2 = lon2 - lon1;
  var dLon = toRad(x2)
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  if(isMiles) d /= 1.60934;

  return d;
}
