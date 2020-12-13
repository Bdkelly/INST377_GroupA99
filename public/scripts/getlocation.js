function getlocation(){
    let lat = 0.0;
    let long = 0.0;
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
            lat = position.coords.latitude
            long = position.coords.longitude
            L.circleMarker([position.coords.latitude,position.coords.longitude]).setRadius(50).addTo(mymap)
            .bindPopup('You are here')
            .openPopup();      
            return lat,long      
        });
    } else { 
        
    }
}