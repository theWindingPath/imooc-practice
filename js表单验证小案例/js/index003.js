// 获取dom节点
var userAccount = document.getElementById('userAccount');
var userPass = document.getElementById('userPass');
var userPass_ = document.getElementById('userPass_'); // 确认密码
var userName = document.getElementById('userName');
var information = document.getElementById('information');
var email = document.getElementById('email');
var telephone = document.getElementById('telephone');
var handup = document.getElementById('handup'); // 提交按钮

// alert(userAccount); // 测试 js文件是否引入成功

var test1 = false; // 用户名称格式正确 true 默认为false
var test2 = false;
var test3 = false;
var test4 = false;
var test5 = false;
var test6 = false;
var test7 = false;

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

// 身份证验证
information.onfocus = function () { // 光标落进去 提示
    items[4].innerHTML = '请输入身份证号码';
    items[4].style.color = 'darkgoldenrod';
}

information.onblur = function() {
    // 二代身份证一般 18位 前17位位数字 后一位为数字或 x
    // \d 匹配数字
    var reg = /^\d{17}[0-9x]$/; // 局部变量
    if(this.value == '') {
        items[4].innerHTML = '身份证号不能为空';
        items[4].style.color = 'red';
    }else{ // 判断
        if(!reg.exec(information.value)) { // 如果不匹配 
            items[4].innerHTML = '请输入正确的身份证号';
            items[4].style.color = 'red';
        }else{ // 姓名正确
            items[4].innerHTML = '身份证号正确';
            items[4].style.color = 'green';
            test5 = true;
        }
    }
}

// 邮箱验证
email.onfocus = function () { // 光标落进去 提示
    items[5].innerHTML = '请输入邮箱';
    items[5].style.color = 'darkgoldenrod';
}

email.onblur = function() {
    // 邮箱正则 @ . aa@aa.com 
    // 前面aa 没有次数限制 至少有一次 用 +
    // 加 .需要有 \反斜杠 转义 \. 代表.
    // 后缀 字母、下划线 [a-zA-Z_] .com .cn .org 一般 2到4位 {2,4}
    var reg = /^\w+@\w+\.[a-zA-Z_]{2,4}$/; // 局部变量 
    if(this.value == '') {
        items[5].innerHTML = '邮箱号不能为空';
        items[5].style.color = 'red';
    }else{ // 判断
        if(!reg.exec(email.value)) { // 如果不匹配 
            items[5].innerHTML = '请输入正确的邮箱号';
            items[5].style.color = 'red';
        }else{ // 姓名正确
            items[5].innerHTML = '邮箱号正确';
            items[5].style.color = 'green';
            test6 = true;
        }
    }
}

// 手机验证
telephone.onfocus = function () { // 光标落进去 提示
    items[6].innerHTML = '请输入手机号';
    items[6].style.color = 'darkgoldenrod';
}

telephone.onblur = function() {
    // 手机正则 11位
    var reg = /^\d{11}$/; // 局部变量 
    if(this.value == '') {
        items[6].innerHTML = '手机号不能为空';
        items[6].style.color = 'red';
    }else{ // 判断
        if(!reg.exec(telephone.value)) { // 如果不匹配 
            items[6].innerHTML = '请输入正确的手机号';
            items[6].style.color = 'red';
        }else{ // 姓名正确
            items[6].innerHTML = '手机号正确';
            items[6].style.color = 'green';
            test7 = true;
        }
    }
}

// 提交按钮 注册的时候，必须前面所有数据都是正确的 才能提交
handup.onclick = function() {
    // alert(test1); 
    if(test1 == false || test2 == false || test3 == false || test4 == false || test5 == false || test6 == false || test7 == false) {
        alert('您填写的信息有误');
    }else {
        alert('提交成功');
    }
}