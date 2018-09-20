//封装一个代替getElementById()的方法
function byId003(id003){
    return typeof(id003) === "string"?document.getElementById(id003):id003;
}

// console.log(byId003(66));
// console.log(document.getElementById(55));

//全局变量
var index003 = 0,
    timer003 = null,//定时器]
    pics003 = byId003("banner003").getElementsByTagName("div"),
    dots003 = byId003("dots003").getElementsByTagName("span"),
    prev003 = byId003("prev003"),
    next003 = byId003("next003"),
    len003 = pics003.length,
    menu003 = byId003("menuContent003"),
    subMenu003 = byId003("subMenu003"),
    innerBox003 = subMenu003.getElementsByClassName("inner-box-003"),
    menuItems003 = menu003.getElementsByClassName("menu-item-003");

    // console.log(len003);

function slideImg003() {
    var main003 = byId003("main003");
    //滑过清除定时器，离开继续
    main003.onmouseover =function(){
        //滑过清除定时器
        if(timer003) clearInterval(timer003);
    }
    main003.onmouseout = function () {  //事件
        timer003 = setInterval(function(){
            index003++; // len = 3 0 1 2
            // console.log(index003);
            if(index003 >= len003){
                index003 = 0;
            }
            // console.log(index003);
            //切换图片
            changeImg003();
        },3000);
    }
    //方法，自动在main上触发鼠标离开的事件
    main003.onmouseout();

    //遍历所有点击，且绑定点击事件，点击圆点切换图片
    for(var d=0;d<len003;d++){     //0 1 2 3 
        //给所有span添加一个id的属性，值为d，作为当前span的索引
        dots003[d].id = d;
        // console.log(d);
        dots003[d].onclick = function(){
            // alert("hello world");
            //改变index为当前span的id值
            // alert(this.id);
            index003 = this.id;
            // alert(index003);
            // this.className = "active-003";
            //调用changeImg,实现切换图片
            changeImg003();
        }
    }

    //下一张
    next003.onclick = function(){
        index003++;
        if(index003 >= len003) index003 = 0;
        // console.log(index003);
        changeImg003();
    }

    //上一张
    prev003.onclick = function(){
        index003--;
        if(index003 < 0) index003 = len003 -1;
        // alert(index003);
        changeImg003();
    }

    //导航菜单
    //遍历主菜单，且绑定事件
    for(var m=0;m<menuItems003.length;m++){
        //给每一个menu-item定义data-index属性，作为索引
        menuItems003[m].setAttribute("data-index",m);
        // innerBox003[m].style.display = "none";
        menuItems003[m].onmouseover = function(){
            // alert(m);
            var idx003 =this.getAttribute("data-index");
            // console.log(idx003);
            //遍历所有子菜单，将每一个都隐藏
            for(var j=0;j<innerBox003.length;j++){
                innerBox003[j].style.display = "none";
                menuItems003[j].style.background = "none";
            }
            subMenu003.className = "sub-menu-003";
            innerBox003[idx003].style.display = "block";
            menuItems003[idx003].style.background = "rgba(0,0,0,0.2)";
        }

        menu003.onmouseout = function() {
            subMenu003.className = "sub-menu-003 hide";
        }
        
        subMenu003.onmouseover = function() {
            this.className = "sub-menu-003";
        }

        subMenu003.onmouseout = function() {
            this.className ="sub-menu-003 hide";
        }
    }
}

//切换图片
function changeImg003() {
    // console.log(index003);
    // pics003[index003].className = "slide-active-003";
    //遍历banner下所有的div和dots下所有的span，将div隐藏，将span清除类
    for(var i=0;i<len003;i++){
        pics003[i].style.display = "none";
        dots003[i].className = "";
    }
    //根据index索引找到当前div和当前span，将其显示出来和设为当前
    pics003[index003].style.display = "block";
    dots003[index003].className = "active-003";
}

slideImg003();