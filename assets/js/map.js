  //----------------------
  mapboxgl.accessToken = 'pk.eyJ1IjoiZXhybGFuZGluZ3MiLCJhIjoiY2x2Ym1paXF4MDRqNzJrbGhldDdzbzY2ZiJ9._NRv4-LW-AwL86_e3jKrLg';
  const center = [-73.9883779, 40.7021518]
  const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/exrlandings/clvbmuyxp00wm01pkdszg5y5g',
      center: center,
      zoom: 15,
      scrollZoom: false,
      doubleClickZoom: false
  });
  const geojson = {
      'type': 'FeatureCollection',
      'features': [
          {
              'type': 'Feature',
              'geometry': {
                  'type': 'Point',
                  'coordinates': center
              },
              'properties': {
                  'title': 'Mapbox',
                  'description': 'Washington, D.C.'
              }
          }
      ]
  };


  map.addControl(new mapboxgl.NavigationControl())
  // add markers to map
  for (const feature of geojson.features) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);

  }


  /*
  Add an event listener that runs
  when a user clicks on the map element.
  */
  map.on('click', (event) => {
      // If the user clicked on one of your markers, get its information.
      const features = map.queryRenderedFeatures(event.point, {
          layers: ['pois'] // replace with your layer name
      });
      if (!features.length) {
          return;
      }
      const feature = features[0];

      /*
          Create a popup, specify its options
          and properties, and add it to the map.
      */
      const popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
              `<h3>${feature.properties.title}</h3>`
          )
          .addTo(map);
  });