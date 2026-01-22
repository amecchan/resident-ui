let map;
let marker;

function getLocation() {
  const status = document.getElementById("locationStatus");

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser.";
    return;
  }

  status.textContent = "Getting location...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      document.getElementById("latitude").value = lat;
      document.getElementById("longitude").value = lng;

      status.textContent = "Location confirmed.";

      showMap(lat, lng);
    },
    () => {
      status.textContent =
        "Location permission denied. Please describe the landmark manually.";
    }
  );
}

function showMap(lat, lng) {
  const mapDiv = document.getElementById("map");
  mapDiv.style.display = "block";

  if (!map) {
    map = L.map("map").setView([lat, lng], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    marker = L.marker([lat, lng]).addTo(map);
  } else {
    map.setView([lat, lng], 16);
    marker.setLatLng([lat, lng]);
  }
}


