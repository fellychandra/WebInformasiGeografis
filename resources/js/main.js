var mapView = new ol.View({
    center: ol.proj.fromLonLat([110.82331244560362, -7.556152465080592]),
    zoom: 13
});

var map = new ol.Map({
    target: 'map',
    view: mapView
});

var osmTile = new ol.layer.Tile({
    title: 'Open Street Map',
    visible: true,
    source: new ol.source.OSM()
});

map.addLayer(osmTile);

var SurakartaVector = new ol.layer.Vector({
    title: "Kota Surakarta",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/surakarta.json',
        visible: true
    })
});
map.addLayer(SurakartaVector);


var Rumahsakit = new ol.layer.Vector({
    title: "Rumah Sakit",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/RUMAHSAKIT.json',
        visible: true
    }),
    style: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraticon',
            anchorYUnits: 'pixels',
            src: 'resources/icon/hospital.png'
        })
    })
});
map.addLayer(Rumahsakit);



var Wisata = new ol.layer.Vector({
    title: "Wisata",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/tempatwisata.json',
        visible: true
    }),
    style: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraticon',
            anchorYUnits: 'pixels',
            src: 'resources/icon/marker.png'
        })
    })
});
map.addLayer(Wisata);

var Jalan = new ol.layer.Vector({
    title: "Jalan",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/Jalan.json',
        visible: true
    }),
});
map.addLayer(Jalan);


var Danau = new ol.layer.Vector({
    title: "Danau",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/Danau.json',
        visible: true
    }),
});
map.addLayer(Danau);



//awal terbaru

var BangunanSungai = new ol.layer.Vector({
    title: "Bangunan Sungai",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/Bangunan_Sungai.json',
        visible: true
    }),
});
map.addLayer(BangunanSungai);


var haltebuffer200m = new ol.layer.Vector({
    title: "Halte Buffer 200m",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/halte_buffer_200m.json',
        visible: true
    }),
});
map.addLayer(haltebuffer200m);


var stasiunbuffer200m = new ol.layer.Vector({
    title: "Stasiun Buffer 200m",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/stasiun_buffer_200m.json',
        visible: true
    }),
});
map.addLayer(stasiunbuffer200m);


var tempatwisatarumahsakithalte = new ol.layer.Vector({
    title: "Tempat Wisata Rumah Sakit",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/TempatWisata_RumahSakit_Halte_Stasiun.json',
        visible: true
    }),
});
map.addLayer(tempatwisatarumahsakithalte);


var daerah2 = new ol.layer.Vector({
    title: "daerah2",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/Daerah_2.json',
        visible: true
    }),
});
map.addLayer(daerah2);


//akhir terbaru

var Jalan20m = new ol.layer.Vector({
    title: "Jalan Buffer 20m",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/Jalan_Buffer_20m_Clear.json',
        visible: true
    }),
});
map.addLayer(Jalan20m);

var Sungai3m = new ol.layer.Vector({
    title: "Sungai Buffer 3m",
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'resources/data/Sungai_Buffer_3m.json',
        visible: true
    }),
});
map.addLayer(Sungai3m);

// =================================================
function toggleLayer(eve) {
    var lyrname = eve.target.value;
    var checkedStatus = eve.target.checked;
    var lyrList = map.getLayers();

    lyrList.forEach(function (element) {
        if (lyrname == element.get('title')) {
            element.setVisible(checkedStatus);
        }
    });
}




