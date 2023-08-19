// Store the URL of the GeoJSON data
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl).then(data => {
    //console log it
    console.log(data)
    // Once we have a response, send the data.features object to the createFeatures function
    createFeatures(data.features);
});

// Create the map object
var myMap = L.map("map", {
    // Set the initial center of the map
    center: [38.5, -96.00],
    // Set the initial zoom level 
    zoom: 5,
});

// Add a tile layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

// Create a function to make the features for the map
function createFeatures(quakeData) {

    //Create a map style function
    function mapStyle(feature) {
        return {
            opacity: 1,
            fillOpacity: 0.8,
            fillColor: markerColor(feature.geometry.coordinates[2]),
            color: 'black',
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 1,
        };
    }
    //Create a function to determine marker radius based on earthquake magnitude
    function getRadius(magnitude) {
        if (magnitude == 0) {
            return 1;
        }
        return magnitude * 5;
    }
    // Create a function to determine the color based on depth
    // I used the following link to come up with my HEX color scheme
    // https://colorbrewer2.org/#type=diverging&scheme=RdYlGn&n=6
    function markerColor(depth) {
        switch (true) {
            case depth > 90:
                return "#d53e4f";
            case depth > 70:
                return "#fc8d59" ;
            case depth > 50:
                return "#fee08b";
            case depth > 30:
                return "#e6f598";
            case depth > 10:
                return "#99d594";
            default:
                return "#3288bd";
        }
    }
    // Add earthquake data to the map
    L.geoJson(quakeData, {

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        //Apply map styling (colors and circle radius) based on quake depth and magnitude
        style: mapStyle,

        // Activate pop-up data and bind to markers when circles are clicked
        onEachFeature: function (feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + 
            "<br>Location: " + feature.properties.place + 
            "<br>Depth: " + feature.geometry.coordinates[2] +
            "<br>Number of 'quake felt' reports: " +feature.properties.felt);
        }
    }).addTo(myMap);

    // Create a legend.
    //I used the following two links for help with legends
    // https://www.igismap.com/legend-in-leafletjs-map-with-topojson/
    // https://leafletjs.com/examples/choropleth/
    var legend = L.control({position: "bottomright"});
    legend.onAdd = function () {
        var div = L.DomUtil.create("div", "info legend"),
        depths = [-10, 10, 30, 50, 70, 90];

        // Iterate through depth ranges and add legend color indicators
        for (var i = 0; i < depths.length; i++) {
            div.innerHTML +=
                '<i style="background:' + markerColor(depths[i] + 1) + '"></i> ' + depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
            }
        return div;
    };
    // Add the legend to the map
    legend.addTo(myMap);
}

