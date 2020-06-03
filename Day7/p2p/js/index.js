function main() {
  var options = {
    zoomControl: false,
    scrollWheelZoom: true,
    center: [39.95, -75.16],
    zoomControl: true,
    zoom: 14,
    buffer: 16,
  };

  var dataMinor = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [
            [-75.16211092472075, 39.94907691371613],
            [-75.15975058078766, 39.94878081698793],
          ],
        },
      },
    ],
  };

  var dataMajor = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [
            [-75.24737834930419, 39.95968825655743],
            [-75.16211897134781, 39.94907896993895],
            [-75.15975058078766, 39.948782873219635],
            [-75.14131844043732, 39.94644284155984],
          ],
        },
      },
    ],
  };

  var dataZoink = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [
            [-75.2064049243927, 39.954597649214406],
            [-75.19866943359375, 39.953635407829886],
          ],
        },
      },
    ],
  };
  var map = L.map("map", options);
  // map.createPane('labels');

  map.createPane("labels");

  var positron = L.tileLayer(
    "http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
    {
      attribution: "©OpenStreetMap, ©CartoDB",
    }
  ).addTo(map);

  var positronLabels = L.tileLayer(
    "http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png",
    {
      attribution: "©OpenStreetMap, ©CartoDB",
      pane: "labels",
    }
  ).addTo(map);

  // L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  //    attribution: 'Positron'
  // }).addTo(map_positron);

  L.geoJson(dataMajor, {
    style: {
      color: "#666",
      weight: 6,
      opacity: 1,
    },
  }).addTo(map);

  L.geoJson(dataMinor, {
    style: {
      color: "#F16636",
      weight: 6,
      opacity: 1,
    },
  }).addTo(map);

  L.geoJson(dataZoink, {
    style: {
      color: "#C2588E",
      weight: 6,
      opacity: 1,
    },
  }).addTo(map);
}

//window.onload = main;

/* const END_POINT = `https://jsonplaceholder.typicode.com/users `;
const fetchUsers = () => {
  fetch(END_POINT)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.lof(error));
};
const onLoad = () => {
  fetchUsers();
};
window.onload = onLoad;
 */

 

window.onload = function () {
  this.main()
  fetchUsers()
  
}
  
const fetchUsers = async () => {
  let table = document.querySelector('table')
  let tbody = document.createElement('tbody')
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")

    if (response.ok) {
      let usersList = await response.json();

      
      for (let i = 0; i < usersList.length; i++) {
        const element = usersList[i];
        console.log(element.name)

        let tr = document.createElement('tr')

        for (let j = 0; j < 3; j++) {
          let td = document.createElement('td')

          if (j === 0){
          td.innerText = element.name
          }
          else if (j === 1){
            td.innerText = element.username
          }
          else
          td.innerText = element.email

          tr.appendChild(td)
        }
        tbody.appendChild(tr)
      }
      table.appendChild(tbody)

    } else {
      console.log('not ok!')
    }
  }
    catch (exception) {
      console.log(exception)
    }
};



