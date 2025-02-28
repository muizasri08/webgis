var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_mergePA_1 = new ol.format.GeoJSON();
var features_mergePA_1 = format_mergePA_1.readFeatures(json_mergePA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mergePA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergePA_1.addFeatures(features_mergePA_1);
var lyr_mergePA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mergePA_1, 
                style: style_mergePA_1,
                popuplayertitle: 'merge PA',
                interactive: true,
                title: '<img src="styles/legend/mergePA_1.png" /> merge PA'
            });
var format_mergetandasempadan_2 = new ol.format.GeoJSON();
var features_mergetandasempadan_2 = format_mergetandasempadan_2.readFeatures(json_mergetandasempadan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mergetandasempadan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergetandasempadan_2.addFeatures(features_mergetandasempadan_2);
var lyr_mergetandasempadan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mergetandasempadan_2, 
                style: style_mergetandasempadan_2,
                popuplayertitle: 'merge tanda sempadan',
                interactive: true,
                title: '<img src="styles/legend/mergetandasempadan_2.png" /> merge tanda sempadan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_mergePA_1.setVisible(true);lyr_mergetandasempadan_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_mergePA_1,lyr_mergetandasempadan_2];
lyr_mergePA_1.set('fieldAliases', {'FID': 'FID', 'no lot': 'no lot', 'area': 'area', 'tsp — pemi': 'tsp — pemi', 'tsp — hak': 'tsp — hak', 'tsp — ha_1': 'tsp — ha_1', ' no lot': ' no lot', 'no  lot': 'no  lot', 'layer': 'layer', 'path': 'path', });
lyr_mergetandasempadan_2.set('fieldAliases', {'FID': 'FID', 'vertex_ind': 'vertex_ind', 'vertex_par': 'vertex_par', 'vertex_p_1': 'vertex_p_1', 'vertex_p_2': 'vertex_p_2', 'distance': 'distance', 'angle': 'angle', 'layer': 'layer', 'path': 'path', });
lyr_mergePA_1.set('fieldImages', {'FID': '', 'no lot': '', 'area': '', 'tsp — pemi': '', 'tsp — hak': '', 'tsp — ha_1': '', ' no lot': '', 'no  lot': '', 'layer': '', 'path': '', });
lyr_mergetandasempadan_2.set('fieldImages', {'FID': '', 'vertex_ind': '', 'vertex_par': '', 'vertex_p_1': '', 'vertex_p_2': '', 'distance': '', 'angle': '', 'layer': '', 'path': '', });
lyr_mergePA_1.set('fieldLabels', {'FID': 'hidden field', 'no lot': 'header label - visible with data', 'area': 'header label - visible with data', 'tsp — pemi': 'no label', 'tsp — hak': 'no label', 'tsp — ha_1': 'no label', ' no lot': 'header label - visible with data', 'no  lot': 'header label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_mergetandasempadan_2.set('fieldLabels', {'FID': 'no label', 'vertex_ind': 'no label', 'vertex_par': 'no label', 'vertex_p_1': 'no label', 'vertex_p_2': 'no label', 'distance': 'no label', 'angle': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_mergetandasempadan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});