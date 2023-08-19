### Leaflet Challenge (Module 15)

### Link to Map

https://jmpealy.github.io/leaflet-challenge/

### Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

### Assignment
In this challenge, we utilitzed the earthquake data provided by the USGS -in conjunction with Leaflet, a JavaScript library for creating interactive maps - in order to create a visualization of a dataset of earthquakes recorded by the USGS.  We used the logic.js file in order to write the code which created our map object, retrieved the earthquake data, and created identifying markers for each earthquake.  We used the index.html file to help us visualize the map, as well as to apply the legend (and its formatting) to our web visualization.  We followed the below steps:

Data retrieval:  We accessed the USGS GeoJSON page to choose our specific earthquake dataset for visualization.  I chose to use the dataset containing all earthquakes recorded by the USGS over the last 7 days.  This page contained a JSON representation of all the relevant data for use in our challenge.

Data Importing and visualization:  We used the URL of the JSON data to fetch it using the d3.json() function. Once retrieved, we parsed through the data to extract the features representing individual earthquakes. For each earthquake feature, we plotted it on a Leaflet map by specifying its longitude and latitude as coordinates.

![image](https://github.com/jmpealy/leaflet-challenge/assets/128240129/f0f64dd4-1de4-4a3a-9601-aa4069ce74bf)


Marker Customization: We customized the appearance of the markers on the map. The size of each marker was determined by the magnitude of the earthquake. Higher-magnitude earthquakes were represented with larger markers. The color of each marker was based on the depth of the earthquake. Earthquakes with greater depth were depicted with darker colors.

Popup Information: To enhance user interaction, we added popups to each marker. When a user clicks on a marker, a popup window appears containing additional information about the earthquake, such as its location, magnitude, depth, and timestamp information.  It also includes the number of times a particular quake was reported as having been felt by someone in the quake's impact area.

![Marker popup](https://github.com/jmpealy/leaflet-challenge/assets/128240129/1831e059-8923-4175-890b-a616e7f04ff4)


Legend Creation: We created a legend to provide context for the map data. The legend visually represented the depth ranges and their corresponding colors. This helped users understand the meaning behind the marker colors.

![Legend](https://github.com/jmpealy/leaflet-challenge/assets/128240129/11a562f2-7364-4bdb-8c34-87aba5a4e1c6)


### References/links used in assignment

I used this as a reference in writing getColor function (used switch/case instead of if/then)

https://www.w3schools.com/js/js_switch.asp

I used these two links as references for creating the legend.

https://www.igismap.com/legend-in-leafletjs-map-with-topojson/

https://leafletjs.com/examples/choropleth/

I used this color generating website to help me come up with the HEX color scheme for my getColor function (also used in the legend)

https://colorbrewer2.org/#type=diverging&scheme=Spectral&n=6


