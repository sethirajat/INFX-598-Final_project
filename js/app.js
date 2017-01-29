var map;
function initMap() {
    var myLatLng = {lat: 47.656645, lng: -122.3147015};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}