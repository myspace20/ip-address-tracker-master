const form = document.querySelector('form');
const input = document.querySelector('form input');
const body = document.querySelector('body');
const ip = document.querySelector('.ip')
const locat = document.querySelector('.location')
const timezone = document.querySelector('.timezone')
const isp = document.querySelector('.isp')



form.addEventListener('submit', e => {
    
    e.preventDefault();
    const inputValue = input.value.trim();
    console.log(inputValue);
    form.reset();

});

const selfInfo =  async  ()=>{
    const response = await fetch('https://api.ipdata.co/?api-key=13f3930663d9d8ee6056709b4a53c80327eae6a11696900923c941f2');
    const data = await response.json();
    console.log(data);
    return data;
    
    

}

selfInfo().then(data =>{
    console.log(data)
    ip.innerText = data.ip;
    locat.innerText = data.city;
    timezone.innerText = data.time_zone.abbr;
    isp.innerText = data.asn.name;

     

     var map = L.map('map').setView([data.longitude, data.latitude], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXlzcGFjZTIwIiwiYSI6ImNrd3I5Y2RrNzBlbzAyb285OWc3ZmNwaWsifQ.u4AVhhvOFCyxTKBL9PAiZQ', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'your.mapbox.access.token'
}).addTo(map);
     
});









// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXlzcGFjZTIwIiwiYSI6ImNrd3I5Y2RrNzBlbzAyb285OWc3ZmNwaWsifQ.u4AVhhvOFCyxTKBL9PAiZQ', {
// attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// maxZoom: 18,
// id: 'mapbox/streets-v11',
// tileSize: 512,
// zoomOffset: -1,
// accessToken: 'your.mapbox.access.token'
// }).addTo(map);