/**
 * Created by zhujinyu on 2017/10/1.
 */
require.config({
    paths: {
        "zepto": "lib/zepto",
        "gaodeMap": "gaodeMap.m",
        'amap':'http://webapi.amap.com/maps?v=1.3&key=c8d499635271ab4f9d449d35911e2cf1'
    },
    shim:{
        'gaodeMap':{
            exports:'gaodeMap',
            deps:['amap']
        }
    }
});
require(['lib/zepto', 'gaodeMap'], function ($, map){
    // some code here
    var markers = [{
        icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png',
        position: [116.205467, 39.907761]
    }, {
        icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b2.png',
        position: [116.368904, 39.913423]
    }, {
        icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
        position: [116.305467, 39.807761]
    }];
    console.log(1);
    map.markersMap("map_1",markers);
});
