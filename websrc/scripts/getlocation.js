function getlocation(){
    let lat = 0;
    let long = 0;
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            lat = position.coords.latitude
            long = position.coords.longitude
            L.circleMarker([position.coords.latitude,position.coords.longitude]).setRadius(50).addTo(mymap)
            .bindPopup('Lets Get You Some Where')
            .openPopup();
            
        });
    } else { 
        /*No get*/
    }
    return lat,long
    
}