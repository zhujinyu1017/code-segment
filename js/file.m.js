/**
 * Created by zhujinyu on 2017/10/1.
 */
require.config({
    paths : {
        text : './lib/text',
        image : './lib/image',
    },
})
define([
        'text!review.txt',
        'image!../img/address-plus.png!bust',
    ],
    function(review,cat){
    console.log(cat);
        var wrapper = document.getElementById('wrapper');
        wrapper.appendChild(cat);
        console.log(review);
    }
);