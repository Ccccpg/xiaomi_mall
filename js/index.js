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
            this.classList.add('shadow');
        })
        fl[i].addEventListener('mouseleave', function () {
            this.classList.remove('shadow');
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
            con.classList.add('shadow');
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
    //app下载
    var download_content = document.querySelector('.download_content');
    var download = document.querySelector('.dl_app');
    download.addEventListener('mouseenter',function(){
        download_content.classList.add('download_change');
    });
    download.addEventListener('mouseleave', function () {
        download_content.classList.remove('download_change');
    })
    //轮播图区 手机 类别域导航栏交互
    var phone=document.querySelector('.phone');
    var bannerhide_area = null;
    phone.addEventListener('mouseenter',function(){
        bannerhide_area=document.querySelector('.phone>a>.bannerhide_area');
        bannerhide_area.classList.add('area_change');
        bannerhide_area.style.backgroudColor ='#fff!important';
    })
    phone.addEventListener('mouseleave', function () {
        bannerhide_area = document.querySelector('.phone>a>.bannerhide_area');
        bannerhide_area.classList.remove('area_change');
    })

    //轮播图区 电视 类别域导航栏交互
    var tvs = document.querySelector('.tvs');
    tvs.addEventListener('mouseenter', function () {
        bannerhide_area = document.querySelector('.tvs>a>.bannerhide_area');
        bannerhide_area.classList.add('area_change');
        bannerhide_area.style.backgroudColor = '#fff!important';
    })
    tvs.addEventListener('mouseleave', function () {
        bannerhide_area = document.querySelector('.tvs>a>.bannerhide_area');
        bannerhide_area.classList.remove('area_change');
    })
    //轮播图区 电脑 类别域导航栏交互
    var computer = document.querySelector('.computer');
    computer.addEventListener('mouseenter', function () {
        bannerhide_area = document.querySelector('.computer>a>.bannerhide_area');
        bannerhide_area.classList.add('area_change');
        bannerhide_area.style.backgroudColor = '#fff!important';
    })
    computer.addEventListener('mouseleave', function () {
        bannerhide_area = document.querySelector('.computer>a>.bannerhide_area');
        bannerhide_area.classList.remove('area_change');
    })

    //轮播图区 穿戴 类别域导航栏交互
    var watch = document.querySelector('.watch');
    watch.addEventListener('mouseenter', function () {
        bannerhide_area = document.querySelector('.watch>a>.bannerhide_area');
        bannerhide_area.classList.add('area_change');
        bannerhide_area.style.backgroudColor = '#fff!important';
    })
    watch.addEventListener('mouseleave', function () {
        bannerhide_area = document.querySelector('.watch>a>.bannerhide_area');
        bannerhide_area.classList.remove('area_change');
    })
    //轮播图区 耳机 类别域导航栏交互
    var earphone = document.querySelector('.earphone');
    earphone.addEventListener('mouseenter', function () {
        bannerhide_area = document.querySelector('.earphone>a>.bannerhide_area');
        bannerhide_area.classList.add('area_change');
        bannerhide_area.style.backgroudColor = '#fff!important';
    })
    earphone.addEventListener('mouseleave', function () {
        bannerhide_area = document.querySelector('.earphone>a>.bannerhide_area');
        bannerhide_area.classList.remove('area_change');
    })
    //轮播图区 家电 类别域导航栏交互
    var jiadian = document.querySelector('.jiadian');
    jiadian.addEventListener('mouseenter', function () {
        bannerhide_area = document.querySelector('.jiadian>a>.bannerhide_area');
        bannerhide_area.classList.add('area_change');
        bannerhide_area.style.backgroudColor = '#fff!important';
    })
    jiadian.addEventListener('mouseleave', function () {
        bannerhide_area = document.querySelector('.jiadian>a>.bannerhide_area');
        bannerhide_area.classList.remove('area_change');
    })
    //轮播图区 路由 类别域导航栏交互
    var luyou = document.querySelector('.luyou');
    luyou.addEventListener('mouseenter', function () {
        bannerhide_area = document.querySelector('.luyou>a>.bannerhide_area');
        bannerhide_area.classList.add('area_change');
        bannerhide_area.style.backgroudColor = '#fff!important';
    })
    luyou.addEventListener('mouseleave', function () {
        bannerhide_area = document.querySelector('.luyou>a>.bannerhide_area');
        bannerhide_area.classList.remove('area_change');
    })
    //轮播图区 配件 类别域导航栏交互
    var parts = document.querySelector('.parts');
    parts.addEventListener('mouseenter', function () {
        bannerhide_area = document.querySelector('.parts>a>.bannerhide_area');
        bannerhide_area.classList.add('area_change');
        bannerhide_area.style.backgroudColor = '#fff!important';
    })
    parts.addEventListener('mouseleave', function () {
        bannerhide_area = document.querySelector('.parts>a>.bannerhide_area');
        bannerhide_area.classList.remove('area_change');
    })
    //轮播图区 儿童健康 类别域导航栏交互
    var bags = document.querySelector('.bags');
    bags.addEventListener('mouseenter', function () {
        bannerhide_area = document.querySelector('.bags>a>.bannerhide_area');
        bannerhide_area.classList.add('area_change');
        bannerhide_area.style.backgroudColor = '#fff!important';
    })
    bags.addEventListener('mouseleave', function () {
        bannerhide_area = document.querySelector('.bags>a>.bannerhide_area');
        bannerhide_area.classList.remove('area_change');
    })
})