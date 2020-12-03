let latitude = 38.9869
let long = -76.9426
const mymap = L.map('mapid').setView([latitude,long],15);
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
        let latitude = position.coords.latitude
        let long = position.coords.longitude
    });
} else { 
    /*No get*/
}
const mapkey = "pk.eyJ1IjoiYmRrZWxseSIsImEiOiJja2hmMmp6c2UwbWF4MnhseWZ5NXltZGdkIn0.BvYCNuw0fm5KL8ZTlbtTLw"
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom:12
    }).addTo(mymap);

L.marker([latitude,long]).addTo(mymap)
    .bindPopup('Lets Get You Some Where')
    .openPopup();