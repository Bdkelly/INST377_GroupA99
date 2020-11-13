function getlocation(){
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            L.circleMarker([position.coords.latitude,position.coords.longitude]).setRadius(50).addTo(mymap)
            .bindPopup('Lets Get You Some Where')
            .openPopup();
        });
    } else { 
        /*No get*/
    }
}