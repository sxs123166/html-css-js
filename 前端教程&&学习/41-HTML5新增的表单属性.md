### HTML5新增的表单属性



| 属性         | 值        | 说明                                                         |
| ------------ | --------- | ------------------------------------------------------------ |
| required     | required  | 表单拥有该属性表示其内容不能为空，必填                       |
| placeholder  | 提示文本  | 表单的提示信息，存在默认值将不显示                           |
| autofocus    | autofocus | 自动聚焦属性，页面加载完成自动聚焦到指定表单                 |
| autocomplete | off/on    | 当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。 默认已经打开，如autocomplete=“on”，关闭autocomplete=“off”需要放在表单内，同时加上name属性，同时成功提交 |
| multiple     | multiple  | 可以选择多文件提交                                           |



可以通过以下设置方式修改placeholder里面的字体颜色：

```
input::placeholder {
   color: pink;
}
```





