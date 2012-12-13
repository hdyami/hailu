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
  
  $('div.test').text('lorem ipsum');

  button1 = $('button#one').text('start').addClass('test').width(450).height(350).css({ 'font-size': 120, 'background-color': 'green' });  
  button2 = $('button#two').text('stop').addClass('test').width(450).height(350).css({ 'font-size': 120 , 'background-color': 'red'});
//  console.log(button2);
  
  button1.click(function () { 

    alert('tracking start');
    
    var watchId = navigator.geolocation.watchPosition(doGeo);  
        alert(watchId);

    function doGeo(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      alert('latitude: '+lat + 'longitude: '+lon);

      $('div.test').append(lat).append(lon);
    }
    
    button2.click(function () {  
      navigator.geolocation.clearWatch(watchId);
      
      alert('tracking stopped');
    })
  })
  
});
})(jQuery, Drupal, this, this.document);
