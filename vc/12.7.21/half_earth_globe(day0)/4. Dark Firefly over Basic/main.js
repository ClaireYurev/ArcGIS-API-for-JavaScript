require([
    "esri/Map",
    "esri/Basemap",
    "esri/views/SceneView",
    "esri/layers/TileLayer",
    "dojo/domReady!" // will not be called until DOM is ready
    ], function (
    Map,
    Basemap,
    SceneView,
    TileLayer
    ) {

      const satelliteLayer = new TileLayer({
        url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
        title: "satellite"
      })
      
      const fireflyLayer = new TileLayer({
        url: "https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/HalfEarthFirefly/MapServer",
        title: "half-earth-firefly"
      })
      
      const basemap = new Basemap({
        baseLayers: [satelliteLayer, fireflyLayer],
        title: "half-earth-basemap",
        id: "half-earth-basemap"
      });
      
      const map = new Map({
        basemap: basemap
      });
    
      const view = new SceneView({
        map: map,
        container: "sceneContainer",
      });
    
    });