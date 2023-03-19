// var that;
class Tab {
    constructor(id) {
        // 获取元素
        // that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        // li的父亲
        this.ul = this.main.querySelector('.firstnav ul:first-child');//CSS3选择器
        // section的父亲
        this.lia = document.querySelector('.liactive');
        // console.log(this.lia);
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {
        this.updateNode();
        // init 初始化操作让相关的元素绑定事件
        this.add.onclick = this.addTab.bind(this.add, this);
        for(var i = 0; i < this.lis.length; i++) {

            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
            this.remove[i].onclick = this.removeTab.bind(this.remove[i], this);
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    // 获取所有的li和section
    // 因为我们动态添加元素，需要重新获取对应的元素
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
    }
    // 1. 切换功能
    toggleTab(that) {
        // console.log(this.index);
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }

    clearClass() {
        for(var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 2. 添加功能
    addTab(that) {
        that.clearClass();
        // alert(11);
        // (1) 创建li和section元素
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试n</section>';
        // （2）把这两个元素追加到对应的父元素里面
        // console.log(that.ul);
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    // 3. 删除功能
    removeTab(that, e) {
        // 点击x号，不需要触发切换，阻止事件冒泡
        e.stopPropagation();
        var index = this.parentNode.index;
        // console.log(index);
        // 根据索引号删除对应的li 和 section   remove()方法可以直接删除指定的元素
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当删除不是选中状态的li的时候，原来的选中状态li保持不变
        if(document.querySelector('.liactive')) return;
        // 当我们删除了这个状态的li的时候， 让他的前一个li  处于选定状态
        index--;
        // 手动调用我们的点击事件  不需要鼠标触发
        that.lis[index] && that.lis[index].click();
    }
    // 4. 修改功能
    editTab() {
        var str = this.innerHTML;
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text"/>';
        var input = this.children[0];
        input.value = str;
        input.select(); //文本框里面的文字处于选定状态
        // alert(11);
        console.log(this);
        // 当我们离开文本框就把文本框里面的值给span
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        }
        // 按下回车也可以把文本框里面的值给span
        input.onkeyup = function(e) {
            if(e.keyCode === 13) {
                // 手动调用表单失去焦点事件   不需要鼠标离开操作
                this.blur();
            }
        }
    }


}
new Tab('#tab');