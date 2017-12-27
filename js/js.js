/**
 * Created by admin on 2017/8/23.
 */
window.onload = function () {
    var oSty = document.getElementById('sty');
    var  str = '';
    for(var i=1;i<=4;i++){
        str += ".product li:nth-child("+i+"){border-bottom-color: transparent;}"
    }
    oSty.innerHTML += str;
}