import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import Stamen from 'ol/source/Stamen';
import { fromLonLat, get as getProjection} from 'ol/proj';
import proj4 from 'proj4';
import { register } from 'ol/proj/proj4'; 

let center = [-71.091, 42.376]
let newProjCode = "EPSG:2249"
let newProj4Def = "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000.0001016002 +y_0=750000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs"

proj4.defs(newProjCode, newProj4Def);
register(proj4)

let newProj = getProjection(newProjCode);
let mapCenter = fromLonLat(center, newProj);

const map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new Stamen({
                layer: 'toner-lite'
            })
        })
    ],
    view: new View({
        center: mapCenter,
        projection: newProj,
        zoom: 7
    })
});