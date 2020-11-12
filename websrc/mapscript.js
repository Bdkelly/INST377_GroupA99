const mymap = L.map('mapid').setView([38.9869,-76.9426],15);
const umdcoords = [38.9869,-76.9426]
const mapkey = "pk.eyJ1IjoiYmRrZWxseSIsImEiOiJja2hmMmp6c2UwbWF4MnhseWZ5NXltZGdkIn0.BvYCNuw0fm5KL8ZTlbtTLw"
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom:12
}).addTo(mymap);

L.marker([38.9869,-76.9426]).addTo(mymap)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();