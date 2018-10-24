     
     var map, features;
     var curr_pos;

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
          var new_pos = new google.maps.LatLng(pos.lat, pos.lng);
          nearest_marker = findNearestMarker(new_pos,features);
    		  curr_pos = new google.maps.Marker({
            	position: pos,
            	map: map,
            	title: 'Current Position'
          	}); 

          	curr_pos.addListener('click', function() {
          		infowindow = new google.maps.InfoWindow({
            	content: 'Closest Station: '+nearest_marker.name});
    			   infowindow.open(map, curr_pos);
  			});

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
            type: 'station', json_id: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place_davis', name: 'Davis Square'
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

    features.forEach(function(feature) {
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: map
      });
      infoWindow2 = new google.maps.InfoWindow();
      marker.addListener('click', function() {
        //content = getSchedule(feature);
        //infoWindow.setContent(content.direction[0]);
    		infoWindow.open(map, marker);
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

    function getSchedule(feature){
        var data, departuretimes, direction;
        request = new XMLHttpRequest();
        console.log(1);
        request.open("GET", feature.json_id, true);
        console.log(2);
        request.onreadystatechange = function(){
          if (request.readyState == 4 && request.status == 200) {
            theData = request.responseText;
            station_info = JSON.parse(theData);
            console.log(3);
            for (var i =  0; i <= station_info.length; i++) {
              data.departuretimes[i] = station_info[i].departure_time;
              data.direction[i] = station_info[i].direction_id;
            }
            return data;
          }
        }
        request.send();
        console.log(4);
    }

  function findNearestMarker(coords, features) {
  var minDist = 10000,
    nearest_marker,
    markerDist,
    len = features.length,
    i;
  for (i = 0; i < len; i += 1) {
    markerDist = google.maps.geometry.spherical.computeDistanceBetween(coords, features[i].position);
    if (markerDist < minDist) {
      minDist = markerDist;
      nearest_marker = features[i];
    }

    var closest_marker_path = [
      coords,
      nearest_marker.position
    ]
    var closest_marker_line = new google.maps.Polyline({
      path: closest_marker_path,
      geodesic:true,
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 4
    });

  }
  closest_marker_line.setMap(map);
  return nearest_marker;
}
