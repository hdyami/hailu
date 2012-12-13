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

  button = $('button').text('push me').addClass('test').width(800).height(550).css({ 'font-size': 160 });
  console.log(button);
  
  button.click(function () {  alert('test');

    navigator.geolocation.getCurrentPosition(doGeo);  
    function doGeo(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      alert('latitude: '+lat + 'longitude: '+lon);

      $('div.test').append(lat).append(lon);
    }
  })
  
});
})(jQuery, Drupal, this, this.document);
