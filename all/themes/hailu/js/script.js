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

  button1 = $('button#one').text('start').addClass('test').width(450).height(350).css({ 'font-size': 100, 'background-color': 'green' });  
  button2 = $('button#two').text('stop').addClass('test').width(450).height(350).css({ 'font-size': 100 , 'background-color': 'red'});
//  console.log(button2);
  
  button1.click(function () { 
//    testdiv.append('1234').append('5678 <br>');
    alert('tracking start');
    
    var watchId = navigator.geolocation.watchPosition(doGeo);  

    function doGeo(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

//      alert('latitude: '+lat + 'longitude: '+lon);

      testdiv.append('<p><strong>lat:</strong> '+lat+'<br>'+'<strong>lon:</strong> '+lon+'</p>');
    }
    
    button2.click(function () {  
      navigator.geolocation.clearWatch(watchId);
      
      alert('tracking stopped');
    })
  })
  
});
})(jQuery, Drupal, this, this.document);
