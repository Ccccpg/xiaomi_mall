window.addEventListener('load', function () {

     //动画函数
    function animate(obj, num, callback) {
        clearTimeout(obj.timer);
        obj.timer = setInterval(function () {
            var step = (num - obj.offsetTop) / 2;
            console.log('offset:'+obj.offsetTop);
            console.log(step);
            if (step >0) {
                step = Math.ceil(step);
            } else {
                step = Math.floor(step);
            }
            obj.style.top = obj.offsetTop + step + 'px';
            if (obj.offsetTop == num) {
                if (callback) {
                    callback();
                }
                clearTimeout(obj.timer);
            }
        }, 1)
    }
    //元素阴影动效
    var fl = document.querySelectorAll('#float');
    for(var i=0;i<fl.length;i++){
        fl[i].addEventListener('mouseenter', function () {
            this.classList.add('float_top');
        })
        fl[i].addEventListener('mouseleave', function () {
            this.classList.remove('float_top');
        })
    }
    //购物车
    var cart = document.querySelector('.cart');
    var cart_detail=document.querySelector('.cart_detail');
    var con=document.querySelector('.content');
    var flag=true
    cart.addEventListener('mouseenter',function(){
        
            flag=false;
            cart.classList.add('cart_change');
            con.classList.add('cart_det_change');
            con.classList.add('float_top');
            flag=true;
            setTimeout(function(){
                con.innerHTML = '购物车中还没有商品，赶紧选购吧！';
            },300)
            
        
        
    })
    cart.addEventListener('mouseleave', function () {
        con.innerHTML = '';
        cart.classList.remove('cart_change');
        con.classList.remove('cart_det_change');
       
        
    })
    var download_content = document.querySelector('.download_content');
    var download = document.querySelector('.dl_app');
    download.addEventListener('mouseenter',function(){
        download_content.classList.add('download_change');
    });
    download.addEventListener('mouseleave', function () {
        download_content.classList.remove('download_change');
    })

})