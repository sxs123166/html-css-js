### JS初体验



JS有三种熟悉位置，分别是行内、内嵌和为外部。

1.行内式JS

```
<input type="button" value="点我试试" onclick="alert('Hello World')"/>
```

- 可以将单行或少量JS代码写在HTML标签的事件属性中（以on开头的属性），如：onclick
- 注意单双引号的使用：在HTML中我们推荐使用双引号，JS中推荐使用单引号
- 可读性差，在html中编写大量JS代码时，不方便阅读；
- 引号易错，引号多层嵌套匹配时，非常容易弄混。
- 特殊情况下使用



2.内嵌JS

```
<script>
   alert('Hello World~!');
</script>
```

- 可以将多行JS代码写到<script>标签中
- 内嵌JS是学习是常用的方式



3.外部JS文件

```
<script src="my.js"></script>
```

- 利用HTML页面代码结构化，把大段JS代码独立到HTML页面之外，既美观，也方便文件级别的复用
- 引用外部JS文件的script标签中间不可以写代码
- 适合于JS代码量比较大的情况