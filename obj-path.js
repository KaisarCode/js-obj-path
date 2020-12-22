// Get property by path
function objPath(obj, pth) {
    pth = pth.replace(/\[(\w+)\]/g,'.$1');
    pth = pth.replace(/^\./,'');
    pth = pth.split('.');
    pth.forEach(function(p){
        obj = obj[p];
    }); return obj;
}
