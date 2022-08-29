import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import LayerGroup from "ol/layer/Group";
import SourceStamen from "ol/source/Stamen";
import SourceXYZ from "ol/source/XYZ";
import LayerSwitcher from "ol-layerswitcher";
import { defaults as defaultControls, ScaleLine, ZoomToExtent } from 'ol/control.js';
import MousePosition from 'ol/control/MousePosition';
import { createStringXY } from 'ol/coordinate';
import XYZ from 'ol/source/XYZ'
import ImageWMS from 'ol/source/ImageWMS';
import { Image as ImageLayer } from 'ol/layer';

// Setup Map CSS
import './MapWrapper.css'

export default function setupMap(target) {
  //Mouse Position

  const mousePositionControl = new MousePosition({
    coordinateFormat: createStringXY(4),
    projection: 'EPSG:4326',
    // comment the following two lines to have the mouse position
    // be placed within the map.
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),

  });

  // Create Vector Layers with ImageWMS

  const congressionalDistricts = new ImageLayer({
    title: '54_dimensions_utm_42',
    source: new ImageWMS({
      title: '54_dimensions_utm_42',
      url: 'http://localhost:8080/geoserver/wms',
      params: { 'LAYERS': 'india:54_dimensions_utm_42' },
      ratio: 1,
      serverType: 'geoserver'
    }),
  });

  const senateDistricts = new ImageLayer({
    title: 'ind_roads',
    source: new ImageWMS({
      title: 'ind_roads',
      url: 'http://localhost:8080/geoserver/wms',
      params: { 'LAYERS': 'india:ind_roads' },
      ratio: 1,
      serverType: 'geoserver'
    }),
  });

  const indiaDistricts = new ImageLayer({
    title: 'state',
    source: new ImageWMS({
      title: 'state',
      url: 'http://localhost:8080/geoserver/wms',
      params: { 'LAYERS': 'india:state' },
      ratio: 1,
      serverType: 'geoserver'
    }),
  });

  // Create a Layer Group for the 2 Vector Layers with data
  const initialFeaturesLayer = new LayerGroup({
    title: "Layers",
    layers: [congressionalDistricts, senateDistricts, indiaDistricts]
  });

  // Create 4 tile layers: OpenStreetMap, Statem Watercolor, and NationalMap
  const osm = new TileLayer({
    title: "Satellite Map",
    type: "base",
    visible: true,
    source: new XYZ({
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    })
  });

  const watercolor = new TileLayer({
    title: "Water color",
    type: "base",
    visible: false,
    source: new SourceStamen({
      layer: "watercolor"
    })
  });

  const xyzMap = new TileLayer({
    title: "National Map",
    type: "base",
    visible: false,
    source: new SourceXYZ({
      url:
        "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
    })
  });

  const EsriMap = new TileLayer({
    title: "ESRI Dark Canvas Map",
    type: "base",
    visible: false,
    source: new SourceXYZ({
      url:
        "https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
    })
  });

  // Create Layer Group from above layers
  const baseMaps = new LayerGroup({
    title: "Base Maps",
    layers: [osm, watercolor, xyzMap, EsriMap]
  });

  // Create Layer Swither Control
  const layerSwitcher = new LayerSwitcher({
    reverse: true,
    groupSelectStyle: "children"
  });

  // create map
  const initialMap = new Map({
    target,
    layers: [baseMaps, initialFeaturesLayer],
    view: new View({
      projection: 'EPSG:4326',
      center: [78.0, 23.0],
      zoom: 4,
      minZoom: 4,
    }),
    controls: defaultControls().extend([
      new ZoomToExtent({
        extent: [
          813079.7791264898, 5929220.284081122, 848966.9639063801,
          5936863.986909639,
        ],
      }),
      new ScaleLine(),
      mousePositionControl,
      layerSwitcher,
    ]),
    // controls: []
  });

  return [initialMap, initialFeaturesLayer];
}
