###### Emmet语法

Emmet语法的前身是Zen coding,它使用缩写，来提高html/css的编写速度，VScode内部已经集成该语法。

1.快速生成HTML结构语法

2.快速生成CSS样式语法



##### 1.快速生成HTML结构语法

1）.生成标签 直接输入标签名按tab键即可  比如div  然后tab键，就可以生成《div》</div>

2).如果想要生成多个相同标签 加上*就可以了 比如 div * 3 就可以速快生成3个div(注意没有空格)

3）如果有父子级关系的标签，可以用》比如ul》li就可以了

4）.如果有父子级关系的标签，用+就可以了 比如div+p

5).如果生成带有类名或者id名字的，直接写.demo或者#two  tab键就可以了

6）.如果生成的div类名是有顺序的，可以用自增符号$



##### 2.快速生成CSS样式语法

CSS基本采取简写形势即可

1.比如 w200 按tab 可以生成width：200px；

2.比如 lh 26 按tab可以生成line-height：26px；

##### 3.快速格式化代码

VScode 快速格式化代码：shift+alt+f

也可以设置 当我们 保存页面的时候自动格式化代码

1）文件----->[首选项]---->[设置]

2）搜索emmet.include;

3)在settings.json下的【用户】中添加以下语句：

  “editor.formatOnType”:true;

  "editor.formatOnSave":true;

只需要设置一次即可，以后都可以自动保存格式化代码