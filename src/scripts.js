const mymap = L.map('mapid').setView([51.4,-0.9],13);
const mapkey = "pk.eyJ1IjoiYmRrZWxseSIsImEiOiJja2hmMmp6c2UwbWF4MnhseWZ5NXltZGdkIn0.BvYCNuw0fm5KL8ZTlbtTLw"
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mapkey
}).addTo(mymap);