// Coordinates of OpenRobotics.
const lat = 37.387696141399914;
const lng = -122.0650693371935;

const zoom = 14.5;
const maxZoom = 19;

// Create a Leaflet Map.
const map = L.map('map').setView([lat, lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Center view and add a marker.
map.panTo(new L.LatLng(lat, lng));
L.marker([lat, lng]).addTo(map);
