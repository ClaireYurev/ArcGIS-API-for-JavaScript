require([
    "esri/Map",
    "esri/Basemap",
    "esri/views/SceneView",
    "esri/layers/TileLayer",
    "esri/layers/FeatureLayer",
    "esri/widgets/LayerList",
    "dojo/domReady!" // will not be called until DOM is ready
    ], function (
    Map,
    Basemap,
    SceneView,
    TileLayer,
    FeatureLayer,
    LayerList
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
      
      const rangelands = new TileLayer({
        url: 'https://tiles.arcgis.com/tiles/IkktFdUAcY3WrH25/arcgis/rest/services/gHM_Rangeland_inverted/MapServer'
      })

      const protected = new FeatureLayer({
        url: 'https://services5.arcgis.com/Mj0hjvkNtV7NRhA7/arcgis/rest/services/WDPA_v0/FeatureServer/1'
      })

      const map = new Map({
        basemap: basemap,
        layers: [protected, rangelands]
      });
    
      const view = new SceneView({
        map: map,
        container: "sceneContainer",
        ui: {
          /* No components added or removed - DEFAULT mode */
         }
      });
    
      const layerList = new LayerList({
        view: view
      });
      
      view.ui.add(layerList, {
        position: "top-right"
      });
      
    });