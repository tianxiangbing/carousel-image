# carousel-image
移动端和pc端轮播切换图片

1. 支持移动端触摸滑动。
2. 支持自定中间放大图片，两侧图片缩小显示。
3. 支持各种图片的不同尺寸自适应

例子见[DEMO](http://www.lovewebgames.com/jsmodule/carousel-image.html)  
![预览效果:](docs/demo1.jpg "点击预览效果")
![预览效果:](docs/demo2.jpg "点击预览效果")
# 使用方法案例:

	<script type="text/javascript" src="../src/zepto.js"></script>
	<script type="text/javascript" src="../src/carousel-image.js"></script>
	<script>
	$('.carousel-image').CarouselImage({
		num :$('.carousel-num')
	});
	</script>
## 或者requirejs：
	<div class="carousel-image">
		<div>
			<a>
				<img src="4.jpg"/>
			</a>
			<a>
				<img src="5.png"/>
			</a>
			<a>
				<img src="6.jpg"/>
			</a>
		</div>
		<div class="carousel-num">
		</div>
	</div>
	<script type="text/javascript" src="../src/zepto.js"></script>
	<script type="text/javascript" src="../src/require.js"></script>
	<script>
	requirejs.config({
		//By default load any module IDs from js/lib
		baseUrl: '../src',
		paths: {
			$: 'zepto'
		}
	});
	require(['carousel-image','$'], function(CarouselImage,$) {
		var cs = new CarouselImage();
		cs.init({
			target:$('.carousel-image'),
			num:$('.carousel-num')
		});
	});
	</script>
# API 属性、方法及回调：
## target:
	表示是在这个容器内的元素会触发事件,它应该有个子级的容器，方便动画的优化
## num:
	本意是以显示当前索引的数字表示，但现在用样式把数字隐藏了，如果要显示数字样式，可自行更改样式文件
## width:
	宽度  (如果不设置将按第一张加载完成的图片的大小来等比压缩显示)
## height:
	高度 (如果不设置将按第一张加载完成的图片的大小来等比压缩显示)
## timer:
	动画延时
## animate :
	动画时间
## auto:[bool]
	是否自动轮播,默认为true
## repeat:[bool]
	是否无限循环，默认为false
## resizeImg:[bool]
	是否自适应.默认为true
## changeCallback:function(this)
	改变时的回调
## callback:function(this)
	准备好了的回调
## formatNumCallback:function(this)
	格式化后的回调