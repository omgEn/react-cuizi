function resetRootFZ(){
    var oHTML = document.querySelector('html');
    var w = oHTML.getBoundingClientRect().width;
    //设置根字体大小等于html节点宽度的十分之一
    oHTML.style.fontSize = w/3.2 + 'px';
    // 设置html的font-size=100px
};

resetRootFZ();

window.addEventListener('resize',function(){
    resetRootFZ();
})