### HTML5新特性



HTML5在不使用插件的情况下，也可以原生的支持音频格式文件的播放，当然，支持的格式是有限的。

#### 1.视频《video》

语法

```
<video src="文件地址" controls="controls"></video>
```

```
<video controls="controls" width="300">
   <source src="move.ogg" type="video/ogg">
   <source src="move.mp4" type="video/mp4">
   您的浏览器暂不支持<video>标签播放视频
</video>
```



常见属性

| 属性     | 值                                           | 描述                                                |
| -------- | -------------------------------------------- | --------------------------------------------------- |
| autoplay | autoplay                                     | 视频就绪自动播放                                    |
| controls | controls                                     | 向用户显示播放控件                                  |
| width    | pixels(像素)                                 | 设置播放器宽度                                      |
| height   | pixels（像素）                               | 设置播放器高度                                      |
| loop     | loop                                         | 播放完是否继续播放该视频，循环播放                  |
| preload  | auto(预先加载该视频)none（不应预先加载视频） | 规定是否预加载视频（如果有了autoplay 就忽略该属性） |
| src      | url                                          | 视频url地址                                         |
| poster   | Imgurl                                       | 加载等待的画面图片                                  |
| muted    | muted                                        | 静音播放                                            |



2.音频<audio>

当前<audio>元素支持三种音频格式：

| 浏览器  | MP3  | Wav  | Ogg  |
| ------- | ---- | ---- | ---- |
| IE      | Yes  | No   | No   |
| Chrome  | Yes  | Yes  | Yes  |
| Firefox | Yes  | Yes  | Yes  |
| Safari  | Yes  | Yes  | No   |
| Opera   | Yes  | Yes  | Yes  |



```
<audio src="文件地址" controls="controls"></audio>
```



常见属性

| 属性     | 值       | 描述                                           |
| -------- | -------- | ---------------------------------------------- |
| autoplay | autoplay | 如果出现该属性，则音频在就绪后马上播放         |
| controls | controls | 如果出现该属性，则向用户显示控件，比如播放按钮 |
| loop     | loop     | 如果出现该属性，则每当音频结束时重新开始播放   |
| src      | url      | 要播放音频的URL                                |



- 谷歌浏览器把音频和视频自动播放禁止了，



#### 3.多媒体标签总结

- 音频标签和视频标签使用方式基本一致
- 浏览器支持情况不同
- 谷歌浏览器把音频和视频自动播放禁止了
- 我们可以给视频标签添加muted属性来静音播放视频，音频不可以（可以通过JavaScript解决）
- 视频标签市重点，我们经常设置自动播放，不使用controls控件，循环和设置大小属性

