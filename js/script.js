function initMap() {
    let pos = {lat:47.210663, lng: 38.922561};
    let opt = {
        center: pos,
        zoom: 17,
    };
    let myMap = new google.maps.Map(document.querySelector('#map'), opt);

    let marker = new google.maps.Marker ({
        position: pos,
        map: myMap,

    });
};