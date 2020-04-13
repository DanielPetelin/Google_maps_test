function initMap() {
    let opt = {
        center: {lat:47.210663, lng: 38.922561},
        zoom: 4
    };
    let map = new google.maps.Map(document.querySelector('#map'), opt);
};