ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pendidikan_1 = new ol.format.GeoJSON();
var features_Pendidikan_1 = format_Pendidikan_1.readFeatures(json_Pendidikan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pendidikan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_1.addFeatures(features_Pendidikan_1);
var lyr_Pendidikan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_1, 
                style: style_Pendidikan_1,
                popuplayertitle: 'Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_1.png" /> Pendidikan'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Pendidikan_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Pendidikan_1];
lyr_Pendidikan_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'X-cord': 'X-cord', 'Y-cord': 'Y-cord', 'Deskripsi': 'Deskripsi', 'Gambar_URL': 'Gambar_URL', });
lyr_Pendidikan_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'X-cord': 'TextEdit', 'Y-cord': 'TextEdit', 'Deskripsi': 'TextEdit', 'Gambar_URL': 'TextEdit', });
lyr_Pendidikan_1.set('fieldLabels', {'id': 'inline label - visible with data', 'Nama': 'header label - always visible', 'X-cord': 'inline label - visible with data', 'Y-cord': 'inline label - visible with data', 'Deskripsi': 'header label - always visible', 'Gambar_URL': 'inline label - visible with data', });
lyr_Pendidikan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});