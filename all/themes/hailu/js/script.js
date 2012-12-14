/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
$(document).ready(function() {
  var testdiv = $('div.test');
  
  // start map
  mapbox.load(['hailu.map-8wfvcuee', 'hailu.map-8wfvcuee'], function(data) {
    $('h1#page-title').text(data[1].description);
    
    var map = mapbox.map('map');
    
    // After specifying multiple ids to mapbox.load, you'll get an array
    // of data objects back, with pre-initialized layer and markers members
    map.addLayer(data[1].layer);
    map.addLayer(data[0].markers);

    // Zoom and center the map
    map.zoom(16).center(data[0].center);
    
    // start buttons //
    // initialize buttons
    button1 = $('button#one').text('start').addClass('test').width(250).height(150).css({ 'font-size': 100, 'background-color': 'green', 'float':'left' });  
    button2 = $('button#two').text('stop').addClass('test').width(250).height(150).css({ 'font-size': 100 , 'background-color': 'red'});

    // start tracking
    button1.click(function () { 
      // testdiv.append('1234').append('5678 <br>');
      alert('tracking start');

      var watchId = navigator.geolocation.watchPosition(doGeo);  

      // call back fires every time position changes
      function doGeo(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        
        map.zoom(16).center({ lat: lat, lon: lon });

      }

      // stop tracking
      button2.click(function () {  
        navigator.geolocation.clearWatch(watchId);

        alert('tracking stopped');
      }) // end button2.click();
    }) // end button1.click();
    // end buttons //
  
//    map.ui.zoomer.add();

    // Attribute map
    map.ui.attribution.add().content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');
  });
  // end map

});
})(jQuery, Drupal, this, this.document);
