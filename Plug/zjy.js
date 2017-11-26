/**
 * Created by zhujinyu on 2017/11/26.
 */
/**
 * Created by zhujinyu on 2017/11/12.
 * 一个原生的js插件
 */
var jqM = (function () {
    var jqM = {
        /*
         * 在当前节点上触发指定事件
         * @param dom 当前节点
         * @param type 事件类型
         */
        dispatch: function (dom, type) {
            var event = new Event(type);
            dom.dispatchEvent(event);
        },
        /*
         * 事件代理
         * @param parentTarget 父节点
         * @param subTarget 子节点
         * @param callback 回掉函数
         */
        act: function (type, parentTarget, subTarget, callback) {
            parentTarget.addEventListener(type, function (event) {
                if (event.target === subTarget) {
                    callback && callback();
                }
            })
        },
        /*
         * 冒泡阶段到达某个节点以后，就不再向上（父节点的方向）传播
         * @param parentTarget 父节点
         * @param subTarget 子节点
         * @param callback 回掉函数
         */
        stopPropagation:function (type,Target) {
            Target.addEventListener(type, function(event) {
                event.stopPropagation();
            });
        },
        /*
         * 阻止事件不触发
         * @param parentTarget 父节点
         * @param subTarget 子节点
         * @param callback 回掉函数
         */
        stopEvent:function (type,Target) {
            Target.addEventListener(type, function(event) {
                event.stopImmediatePropagation();
            });
        },
        /*
         * 自定义立即執行事件
         * @param type 事件类型
         * @param subTarget 子节点
         * @param callback 回掉函数
         */
        CustomEventImmediate:function (type,param,Target,callback) {
            var myEvent = new CustomEvent(type, {
                detail: param.detail,
                bubbles: param.bubbles?param.bubbles: true,
                cancelable: param.cancelable?param.cancelable: false
            });
            Target.addEventListener(type, function(e) {
                callback && callback(e);
            });
            Target.dispatchEvent(myEvent);
        },
        /*
         * 自定义事件
         * @param type 事件类型
         * @param subTarget 子节点
         * @param callback 回掉函数
         */
        CustomEvent:function (type,param,Target,callback) {
            var myEvent = new CustomEvent(type, {
                detail: param.detail,
                bubbles: param.bubbles?param.bubbles: true,
                cancelable: param.cancelable?param.cancelable: false
            });
            Target.addEventListener(type, function(e) {
                callback && callback(e);
            });
            return myEvent;
        },
        /*
         *浏览器是否支持该css属性
         * @param property css属性名
         * */
        isPropertySupported: function (property) {
            if (property in document.body.style) return true;
            var prefixes = ['Moz', 'Webkit', 'O', 'ms', 'Khtml'];
            var prefProperty = property.charAt(0).toUpperCase() + property.substr(1);

            for (var i = 0; i < prefixes.length; i++) {
                if ((prefixes[i] + prefProperty) in document.body.style) return true;
            }

            return false;
        },
        ajax:function () {
            var xhr = new XMLHttpRequest();

            xhr.addEventListener("progress", updateProgress, false);
            xhr.addEventListener("load", transferComplete, false);
            xhr.addEventListener("error", transferFailed, false);
            xhr.addEventListener("abort", transferCanceled, false);

            xhr.open();

            function updateProgress (e) {
                if (e.lengthComputable) {
                    var percentComplete = e.loaded / e.total;
                } else {
                    console.log('不能计算进度');
                }
            }

            function transferComplete(e) {
                console.log('传输结束');
            }

            function transferFailed(evt) {
                console.log('传输过程中发生错误');
            }

            function transferCanceled(evt) {
                console.log('用户取消了传输');
            }
        }
    }
    return jqM;
})()

