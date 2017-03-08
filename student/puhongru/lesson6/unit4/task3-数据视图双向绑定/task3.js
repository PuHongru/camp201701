

const view = {
    nameEl: document.getElementById('name'),
    ageEl: document.getElementById('age'),
    submitBtn: document.getElementById('confirm')
};
const result = document.getElementById('result');

view.submitBtn.addEventListener('click', function(evt){
    //console.log('你要提交的数据是' + [user.name, user.age]);
    result.innerHTML = '你要提交的数据是：' + user.name +  '，' + user.age;
    evt.preventDefault();
});

function User (name, age){
    this.name = name;
    this.age = age;
}

// 监听器， 监听那些输入值发生了改变
//function listener (view){
User.prototype.bind = function (view){
    for (var i in view){
        var elem = view[i];
        for (var j = 0, len = elem.attributes.length; j < len; j++){
            var attr = elem.attributes[j];
            if (attr.nodeName.indexOf('q-') >= 0){
                var name = attr.nodeName.slice(2);
                view[i].addEventListener('change', evt => {
                    this.name = evt.target.value;
                })
            }
        }
    }
}

// 使用defineProperty进行数据绑定
function defineGetAndSet (obj, attr, setFn, getFn){
    Object.defineProperty(obj, attr, {
        set: function (val){
            setFn(val);
        },
        get: function (){
            return getFn();
        }
    })
}

//User.prototype.bind = listener(view);

// 绑定name
defineGetAndSet(User.prototype, 'name', function (name){
    view.nameEl.value = name;
}, function (){
    return view.nameEl.value;
});

// 绑定age
defineGetAndSet(User.prototype, 'age', function (name){
    var ageOptions = Array.from(view.ageEl.options)
        .map(item => item.innerHTML);
    if (ageOptions.indexOf(name) === '-1'){
        throw  new Error('无效的年龄格式');
    }
    view.ageEl.value = name;
}, function (){
    return view.ageEl.value;
});

var user = new User('akira','80后');
user.bind(view);

setTimeout(function (){
    var user1 = new User('akiradfasd', '90后');
    user1.bind(view);
},2000);