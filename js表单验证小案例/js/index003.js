// 获取dom节点
var userAccount = document.getElementById('userAccount');
var userPass = document.getElementById('userPass');
var userPass_ = document.getElementById('userPass_'); // 确认密码
var userName = document.getElementById('userName');
// alert(userAccount); // 测试 js文件是否引入成功

var test1 = false; // 用户名称格式正确 true 默认为false
var test2 = false;
var test3 = false;
var test4 = false;

// 获取所有提示元素的下标
var items = document.querySelectorAll('.item_'); // 定义一个数组 放提示信息
// alert(items.length);

var reg = /正则/; // 定义一个全局对象 接收正则
// 当鼠标 离开用户名输入框，产生验证 
userAccount.onblur = function () { // 失去焦点事件 鼠标离开 执行函数 产生验证
    // alert(123); //验证 鼠标离开、失去焦点 弹出框
    //  \w 匹配数字、字母、下划线_
    // {6,18} 匹配 6 到 18位
    // ^ 和 $ 表示 只能以数字、字母、下划线 开头、结尾
    var reg = /^\w{6,18}$/; // 正则表达式里面最好不要加空格
    if (this.value == '') { // 如果它的值为空 判断
        items[0].innerHTML = '用户名称不能为空003'; // 第一个提示信息
        items[0].style.color = 'orange'; // 提示字体颜色改变
    } else { // 不为空
        if (!reg.exec(userAccount.value)) { // 如果用户输入的 不符合我们定义的正则 
            items[0].innerHTML = '请输入6--18位数字、字母、下划线_'; //输入不符合 弹出提示
            items[0].style.color = 'darkred';
        } else { // 输入正确情况
            items[0].innerHTML = '输入格式正确'; // 输入正确提示
            items[0].style.color = 'green';
            test1 = true; // 用户名称正确 更新为true
        }
    }
}

// 密码部分
userPass.onfocus = function () { // 光标落进去 提示
    items[1].innerHTML = '请输入6--18位数字、字母、下划线_';
    items[1].style.color = 'green';
}

userPass.onblur = function () { // 密码失去焦点
    var reg = /^\w{6,18}$/; // 正则表达式里面最好不要加空格
    if (this.value == '') { // 如果它的值为空 判断
        items[1].innerHTML = '密码不能为空003'; // 第一个提示信息
        items[1].style.color = 'darkblue'; // 提示字体颜色改变
    } else { // 不为空
        if (!reg.exec(userPass.value)) { // 如果用户输入的 不符合我们定义的正则 
            items[1].innerHTML = '请输入6--18位数字、字母、下划线_'; //输入不符合 弹出提示
            items[1].style.color = 'darkred';
        } else { // 输入正确情况
            items[1].innerHTML = '密码格式正确'; // 输入正确提示
            items[1].style.color = 'green';
            test2 = true; // 用户名称正确 更新为true
        }
    }
}

// 确认密码部分
userPass_.onfocus = function () { // 光标落进去 提示
    items[2].innerHTML = '请确认两次密码一致';
    items[2].style.color = 'darkgoldenrod';
}

userPass_.onblur = function () {
    if (this.value == '') {
        items[2].innerHTML = '确认密码不能为空003';
        items[2].style.color = 'darkgrey';
    } else { // 确认密码不为空 判断
        if (this.value != userPass.value) { // 如果当前认密码 不等于 第一次输入密码
            items[2].innerHTML = '两次密码不相等';
            items[2].style.color = 'red';
        } else { // 两次密码相同
            items[2].innerHTML = '两次密码相等';
            items[2].style.color = 'green';
            test3 = true; 
        }
    }
}

// 用户名部分
userName.onfocus = function () { // 光标落进去 提示
    items[3].innerHTML = '请输入中文名字';
    items[3].style.color = 'darkgoldenrod';
}

userName.onblur = function() {
    // 汉字在Ascli码中的编码 
    // \u4e00-\u9fa5 匹配汉字（中文）
    var reg = /[\u4e00-\u9fa5]{2,5}/; // 局部变量 汉字正则 2到5位汉字
    if(this.value == '') {
        items[3].innerHTML = '姓名不能为空';
        items[3].style.color = 'red';
    }else{ // 判断
        if(!reg.exec(userName.value)) { // 如果不匹配 
            items[3].innerHTML = '请输入正确的中文名字';
            items[3].style.color = 'red';
        }else{ // 姓名正确
            items[3].innerHTML = '用户名正确';
            items[3].style.color = 'green';
            test4 = true;
        }
    }
}