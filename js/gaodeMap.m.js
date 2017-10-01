/**
 * Created by zhujinyu on 2017/9/29.
 */
define(function () {
    _this=this;
    /*
     *多点标记
     * @parame mapId 地图容器的id markers 自定义标记点的位置和图片
     * **/
    _this.markersMap = function (mapId, markers) {
        var map = new AMap.Map(mapId, {
            resizeEnable: true,
            // center: location,
            // zoom: 13
        });
        map.clearMap();  // 清除地图覆盖物
        markers.forEach(function (marker) {
            new AMap.Marker({
                map: map,
                icon: marker.icon,
                position: [marker.position[0], marker.position[1]],
                offset: new AMap.Pixel(-12, -36)
            });
        });
        return true;
    };
    /*@多标注
     * markers=markersStyle1:location1;location2..|markersStyle2:location3;location4..|markersStyleN:locationN;locationM..
     * location为经纬度信息，经纬度之间使用","分隔，不同的点使用";"分隔。
     * markersStyle1=label，font ,bold, fontSize，fontColor，background
     * label [0-9]、[A-Z]、[单个中文字] 当size为small时，图片不展现标注名。
     * 自定义markersStyle： -1，url，0。
     * -1表示为自定义图片，URL为图片的网址。自定义图片只支持PNG格式。
     * @标签
     * labelsStyle：content, font, bold, fontSize, fontColor, background。 各参数使用","分隔，如有默认值则可为空。
     * @路径
     * pathsStyle：weight, color, transparency, fillcolor, fillTransparency。
     * */
    _this.staticmap_markers = function (params) {
        var center = params.center ? '&location=' + params.center : '';//中心点位置默认为空
        var zoom = params.zoom ? '&zoom=' + params.zoom : '';//缩放级别默认不设置
        var size = params.size ? '&size=' + params.size : '';//图片宽度*图片高度
        var scale = params.scale ? '&scale=' + params.scale : 1;//普通/高清 1 2
        var traffic = params.traffic ? '&traffic=' + params.traffic : 0;//是否展示实时路况 默认不展示 1展示
        var markers = params.markers ? '&markers=' + params.markers : '';//是否展示实时路况 默认不展示 1展示
        var labels = params.labels ? '&labels=' + params.labels : '';//是否展示实时路况 默认不展示 1展示
        var paths = params.paths ? '&paths=' + params.paths : '';//是否展示实时路况 默认不展示 1展示
        var base_url = 'http://restapi.amap.com/v3/staticmap?';
        var key = 'a04bafcc79a99fd5f43ca0731832b04c';
        var src = base_url + center + zoom + size + scale + markers + labels + paths + traffic + '&key=' + key;
        return src;
    }
    return _this;
})
