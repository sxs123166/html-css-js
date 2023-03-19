## css的背景

通过CSS背景属性，可以给页面元素添加背景样式。

背景属性可以设置背景颜色、背景图片、背景平铺、背景图片位置、背景图像固定。

##### 1、背景颜色

background-color属性定义了元素的背景颜色

```
background-color:颜色值；
```

​	一般情况下元素背景颜色默认值是transparent（透明），我们也可以手动指定背景颜色为透明色

##### 2、背景图片

background-image属性描述了元素的背景图像。实际开发常见于logo或者一些装饰性的小图片或者是超大的背景图片，优点是非常便于控制位置。（精灵图也是一种运用场景）

```
background-image: none | url(url)
```

比如：

```
background-image: none | url(/image/logo.jpg)
```

| 参数值 | 作用                           |
| ------ | ------------------------------ |
| none   | 无背景图（默认的）             |
| url    | 使用绝对或相对地址指定背景图像 |

##### 3.背景平铺

如果需要在HTML页面上对背景图像进行平铺，可以使用background-repeat属性

```
background-repeat:repeat|no-repeat|repeat-x|repeat-y
```



```
默认情况下，背景图片是平铺的(可以理解为在指定的高度和长度，图片重复使用)
background-repeat:repeat
背景图片不平铺
background-repeat:no-repeat
沿x轴平铺
background-repeat:repeat-x
沿y轴平铺
background-repeat:repeat-y

```



##### 4.图片背景位置

利用background-position属性可以改变图片在背景中的位置

```
background-position:x y;
```

参数代表的意思是：x坐标和y坐标。可以使用方位名词或者精确单位

| 参数值   | 说明                                              |
| -------- | ------------------------------------------------- |
| length   | 百分数\|由浮点数和单位标识符组成的长度值          |
| position | top\|center\|bottom\|left\|center\|right 方位名词 |



- 如果指定的两个值都是方位名词，则两个值前后顺序无关，比如left top 和top left效果一致。
- 如果只指定了一个方位名词，另一个省略，则第二个值默认居中对齐。

##### 5.图片精确位置

1.参数是方位名词

- 如果指定的两个值都是方位名词，则两个值前后顺序无关，比如left top 和top left效果一致
- 如果只指定了一个方位名词，另一个值省略，则第二个值默认居中对齐

2.参数是精确单位

- 如果参数值是精确坐标，南无第一个肯定是x坐标，第二个一定是y坐标
- 如果只指定一个数值，那该数值一定是x坐标，另一个默认垂直居中。

3.参数是混合单位

- 如果指定的两个值是精确单位和方位名词混合使用，则第一个值是x坐标，第二个值是y坐标

##### 6.背景图像固定（背景附着）

background-attachment属性设置背景图像是否固定或者随着页面的其余部分滚动。

background-attachment属性设置背景图像是否固定或者随着页面的其余部分滚动。

background-attachment后期可以制作视差滚动的效果

```
background-attachment: scroll|fixed
```

| 参数   | 作用                     |
| ------ | ------------------------ |
| scroll | 背景图像是随对象内容滚动 |
| fixed  | 背景图像固定             |



##### 7.背景复合写法

为了简化背景属性的代码，我们可以将这些属性合并简写在同一个属性background中。从而节约代码量。

当使用简写属性时，没有特定的书写顺序，一般习惯约定顺序为：

background：背景颜色 背景图片地址  背景平铺  背景图像滚动 背景图片位置

```
background: transparent url(image.jpg) repeat-y fixed top;
```

实际开发中使用的写法。



##### 8.背景半透明

CSS3为我们提供了背景颜色半透明的效果。

```
background: rgba(0,0,0,0.3);
```

- 最后一个参数是alpha透明度，取值范围在0~1之间

- 我们习惯把0.3的0省略掉，写为background：rgba(0,0,0,.3);



总结：

| 属性                  | 作用           | 值                                               |
| --------------------- | -------------- | ------------------------------------------------ |
| background-color      | 背景颜色       | 预定义的颜色值/十六进制/RGB代码                  |
| background-image      | 背景图片       | url(图片路径)                                    |
| background-repeat     | 是否平铺       | repeat/no-repeat/repeat-x/repeat-y               |
| background-position   | 背景位置       | length/position 分别是x和y坐标                   |
| background-attachment | 背景附着       | scroll（背景滚动）/fixed（背景固定）             |
| 背景简写              | 书写更简单     | 背景颜色 背景图片地址 背景平铺 背景滚动 背景位置 |
| 背景色半透明          | 背景颜色半透明 | background： rgba（0,0,0,0.3）;后面必须是4个值   |

背景图片：实际上开发常见于logo或者一些装饰性的小图片或者是超大的背景图片，优点是非常便于控制位置。（精灵图也是一种运用场景）

