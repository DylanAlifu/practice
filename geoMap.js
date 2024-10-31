// ---------------------------------------- MAP ----------------------------------------------

const map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

const curSuccess = (position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  marker.setLatLng([lat, lng]).update();
  map.setView([lat, lng], 16);

  marker.bindPopup(`<strong>Hello</strong> Welcome home`);
};

const curError = (error) => {
  console.log(error.code + ": Failed ...");
};

navigator.geolocation.getCurrentPosition(curSuccess, curError);
