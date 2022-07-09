window.addEventListener('load', function () {

    //动画函数
    function animate(obj, num, callback) {
        clearTimeout(obj.timer);
        obj.timer = setInterval(function () {
            var step = (num - obj.offsetTop) / 2;
            console.log('offset:' + obj.offsetTop);
            console.log(step);
            if (step > 0) {
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
    for (var i = 0; i < fl.length; i++) {
        fl[i].addEventListener('mouseenter', function () {
            this.classList.add('shadow');
        })
        fl[i].addEventListener('mouseleave', function () {
            this.classList.remove('shadow');
        })
    }
    //购物车
    var cart = document.querySelector('.cart');
    var con = document.querySelector('.content');
    var flag = true
    cart.addEventListener('mouseenter', function () {

        flag = false;
        cart.classList.add('cart_change');
        con.classList.add('cart_det_change');
        con.classList.add('shadow');
        flag = true;
        setTimeout(function () {
            con.innerHTML = '购物车中还没有商品，赶紧选购吧！';
        }, 300)



    })
    cart.addEventListener('mouseleave', function () {
        con.innerHTML = '';
        cart.classList.remove('cart_change');
        con.classList.remove('cart_det_change');


    })
    //app下载
    var download_content = document.querySelector('.download_content');
    var download = document.querySelector('.dl_app');
    download.addEventListener('mouseenter', function () {
        download_content.classList.add('download_out');
        download_content.classList.remove('download_in');
    });
    download.addEventListener('mouseleave', function () {
        download_content.classList.remove('download_out');
        download_content.classList.add('download_in');
    })
    //轮播图区 手机 类别域导航栏交互
    var phone = document.querySelector('.phone');
    var bannerhide_area = null;
    phone.addEventListener('mouseenter', function () {
        bannerhide_area = document.querySelector('.phone>a>.bannerhide_area');
        bannerhide_area.classList.add('area_change');
        bannerhide_area.style.backgroudColor = '#fff!important';
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

    //logo区域的导航 xiaomi手机 类别交互
    var nav_ph_content = null;
    var mi_phone = document.querySelector('.mi_phone');
    mi_phone.addEventListener('mouseenter', function () {
        nav_ph_content = document.querySelector('.mi_phone>a>.nav_ph_content');
        nav_ph_content.classList.remove('nav_content_in');
        nav_ph_content.classList.add('nav_content_out');

    })
    mi_phone.addEventListener('mouseleave', function () {
        nav_ph_content = document.querySelector('.mi_phone>a>.nav_ph_content');
        nav_ph_content.classList.add('nav_content_in');
        nav_ph_content.classList.remove('nav_content_out');

    })
    //logo区域的导航 redmi手机 类别交互
    var redmi_phone = document.querySelector('.redmi_phone');

    redmi_phone.addEventListener('mouseenter', function () {
        nav_ph_content = document.querySelector('.redmi_phone>a>.nav_ph_content');
        nav_ph_content.classList.remove('nav_content_in');
        nav_ph_content.classList.add('nav_content_out');

    })
    redmi_phone.addEventListener('mouseleave', function () {
        nav_ph_content = document.querySelector('.redmi_phone>a>.nav_ph_content');
        nav_ph_content.classList.add('nav_content_in');
        nav_ph_content.classList.remove('nav_content_out');

    })
    //logo区域的导航 电视 类别交互
    var mi_tv = document.querySelector('.mi_tv');

    mi_tv.addEventListener('mouseenter', function () {
        nav_ph_content = document.querySelector('.mi_tv>a>.nav_ph_content');
        nav_ph_content.classList.remove('nav_content_in');
        nav_ph_content.classList.add('nav_content_out');

    })
    mi_tv.addEventListener('mouseleave', function () {
        nav_ph_content = document.querySelector('.mi_tv>a>.nav_ph_content');
        nav_ph_content.classList.add('nav_content_in');
        nav_ph_content.classList.remove('nav_content_out');

    })
    //logo区域的导航 电脑 类别交互
    var mi_com = document.querySelector('.mi_com');

    mi_com.addEventListener('mouseenter', function () {
        nav_ph_content = document.querySelector('.mi_com>a>.nav_ph_content');
        nav_ph_content.classList.remove('nav_content_in');
        nav_ph_content.classList.add('nav_content_out');

    })
    mi_com.addEventListener('mouseleave', function () {
        nav_ph_content = document.querySelector('.mi_com>a>.nav_ph_content');
        nav_ph_content.classList.add('nav_content_in');
        nav_ph_content.classList.remove('nav_content_out');

    })
    //logo区域的导航 平板 类别交互
    var mi_pad = document.querySelector('.mi_pad');

    mi_pad.addEventListener('mouseenter', function () {
        nav_ph_content = document.querySelector('.mi_pad>a>.nav_ph_content');
        nav_ph_content.classList.remove('nav_content_in');
        nav_ph_content.classList.add('nav_content_out');

    })
    mi_pad.addEventListener('mouseleave', function () {
        nav_ph_content = document.querySelector('.mi_pad>a>.nav_ph_content');
        nav_ph_content.classList.add('nav_content_in');
        nav_ph_content.classList.remove('nav_content_out');

    })
    //logo区域的导航 家电 类别交互
    var mi_jiadian = document.querySelector('.mi_jiadian');

    mi_jiadian.addEventListener('mouseenter', function () {
        nav_ph_content = document.querySelector('.mi_jiadian>a>.nav_ph_content');
        nav_ph_content.classList.remove('nav_content_in');
        nav_ph_content.classList.add('nav_content_out');

    })
    mi_jiadian.addEventListener('mouseleave', function () {
        nav_ph_content = document.querySelector('.mi_jiadian>a>.nav_ph_content');
        nav_ph_content.classList.add('nav_content_in');
        nav_ph_content.classList.remove('nav_content_out');

    })
    //logo区域的导航 路由器 类别交互
    var mi_luyou = document.querySelector('.mi_luyou');

    mi_luyou.addEventListener('mouseenter', function () {
        nav_ph_content = document.querySelector('.mi_luyou>a>.nav_ph_content');
        nav_ph_content.classList.remove('nav_content_in');
        nav_ph_content.classList.add('nav_content_out');

    })
    mi_luyou.addEventListener('mouseleave', function () {
        nav_ph_content = document.querySelector('.mi_luyou>a>.nav_ph_content');
        nav_ph_content.classList.add('nav_content_in');
        nav_ph_content.classList.remove('nav_content_out');

    })
    //
    var search_inpt = document.querySelector('.search_inpt');
    var search_div = document.querySelector('.search_div');
    var sub = document.querySelector('.sub');
    var suggest = document.querySelector('.suggest')
    var str = '';
    if (search_div.innerHTML == '') {
        search_div.innerHTML = '小米手机';
    }

    search_inpt.addEventListener('focus', function () {
        sub.classList.add('sub_focus');
        sub.classList.remove('sub_leave');
        suggest.classList.add('suggest_out');
        suggest.classList.remove('suggest_in');
        search_inpt.classList.add('search_inpt_focus');
        search_inpt.classList.remove('search_inpt_leave');
    })
    search_inpt.addEventListener('keyup', function () {
        str = search_inpt.value;
        if (str != '') {
            search_div.innerHTML = '';
        } else {
            search_div.innerHTML = '小米手机';
        }
    })
    search_inpt.addEventListener('blur', function () {
        if (search_div.innerHTML ==''){
            search_div.innerHTML = '小米手机';
        }
        search_inpt.value='';
        sub.classList.remove('sub_focus');
        suggest.classList.remove('suggest_out');
        suggest.classList.add('suggest_in');
        sub.classList.add('sub_leave');
        search_inpt.classList.remove('search_inpt_focus');
        search_inpt.classList.add('search_inpt_leave');
    })

})