


// Initialize the map
function initMap() {
    const valence = { lat: 44.9333939, lng: 4.8923876 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: valence,
      zoom: 12,
    });

   /* var markers = [];
    function hideMarkers() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null); //Remove the marker from the map
        }*/
        // Loop through all markers and remove them from the map
for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  
    // Add a search box to the map
    const searchBox = new google.maps.places.SearchBox(
      document.getElementById("search-box")
    );
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchBox);
  
    // Load the JSON file
    fetch("markers.json")
      .then((response) => response.json())
      .then((data) => {
        // Parse the JSON data
        const markers = data.markers;
  
        // Clear all existing markers from the map
        marker.setMap(null);
        mapMarkers = mapMarkers || [];
        mapMarkers.forEach((marker) => {
          marker.setMap(null);
        });
  
        // Loop through the markers in the JSON data and create new markers
        markers.forEach((marker) => {
          if (marker.type === "restaurant") {
            const position = { lat: marker.lat, lng: marker.lng };
            const newMarker = new google.maps.Marker({
              position: position,
              map: map,
              title: marker.title,
            });
  
            // Add the new marker to the mapMarkers array
            mapMarkers.push(newMarker);
          }
        });
      });
  
    // Add an event listener to the search box
    searchBox.addListener("places_changed", () => {
      // Clear all existing markers from the map
      mapMarkers.forEach((marker) => {
        marker.setMap(null);
      });
  
      // Get the places returned by the search box
      const places = searchBox.getPlaces();
  
      // Loop through the places and create new markers
      const newMarkers = places.map((place) => {
        if (place.geometry && place.geometry.location) {
          const position = place.geometry.location;
          return new google.maps.Marker({
            position: position,
            map: map,
            title: place.name,
          });
        }
      });
  
      // Add the new markers to the mapMarkers array
      mapMarkers = newMarkers;
    });
  }
  