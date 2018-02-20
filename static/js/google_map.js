
var google;

function init() {
    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    var address = $(mapElement).data('address');



    // Create the Google Map using out element and options defined above
    
    if (address) {
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address='+address, null, function (data) {

            if (! data.results[0]) {
                return;
            }
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 7,

                // The latitude and longitude to center the map (always required)
                center: latlng,

                // How you would like to style the map.
                scrollwheel: false,
                styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
            };
            var map = new google.maps.Map(mapElement, mapOptions);

            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: '/theme/images/loc.png'
            });

        });
    } else {
        alert('no address');
    }
}

$(function(){
    init();
});
