const lookupBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const geoDisplay = document.querySelector(".geo-display");
const loader = document.querySelector(".loader-container");
const details = document.querySelector(".details");


lookupBtn.addEventListener("click", () => {
    loader.style.Display="flex";
    details.style.Display="none";

axios.get("https://ipapi.co/json/").then(response =>{
    loader.style.Display="none";
    details.style.Display="block";

    ipDisplay.textContent = `My Ip Address : - ${response.data.ip}`;
    locationDisplay.textContent = `My Ip Location : - ${response.data.city}, ${response.data.region}, ${response.data.country_name}`
    geoDisplay.textContent = `My Geo Location : - ${response.data.latitude}, Geo Location: ${response.data.longitude}`
});

});