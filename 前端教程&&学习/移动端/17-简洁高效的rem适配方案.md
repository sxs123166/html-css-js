### 简洁高效的rem适配方案



手机淘宝团队出的简洁高效 移动端适配库

我们再也不需要写不同屏幕的媒体查询，因为里面js做了处理

它的原理十八当前设备划分为10等份，但是不同设备下，比例还是一致的。

我们要做的，讲就是确定好我们当前设备的html文字大小就可以了

比如当前设计稿是750px，那末我们只需要把html文字大小设置为75px(750px/10)就可以

里面页面元素rem值：页面元素的px值/75

剩余的，让flexible.js来搞



##### 1.技术选型



方案：我们采取单独制作移动页面方案

技术：布局采用rem适配布局2（flexIble.js + rem）

设计图：本设计图采用750px设计尺寸



2.搭建相关文件夹结构