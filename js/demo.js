$(function() {　
	//	图片淡入淡出　　
	var i = 0;
	var img = $(".sdimg");
	img.eq(0).show().siblings().hide(); //先显示第一张
	setInterval(function() {
		i++;
		if (i > img.length) {
			i = 0;
		}
		$(".sdimg").eq(i).fadeIn().siblings().fadeOut();
	}, 3000);
	
	//雪花制作
	var minsize = 20; //雪花最小数值
	var maxsize = 50; //雪花最大数值
	var flack = $("<div></div>").css({"position": "absolute","top": "-50px"}).html("❉"); //一个雪花

	var sdwidth = $(document).width(); //浏览器宽度
	var sdheight = $(document).height(); //浏览器高度
	setInterval(function() {
		var startwidth = Math.random() * sdwidth; //雪花开始距离屏幕左边随机数
		var sdimg = minsize + Math.random() * (maxsize - minsize); //雪花随机大小
		var endwidth = Math.random() * sdwidth; //雪花结束距离屏幕左边的随机数
		var time = sdheight * Math.random() + 5000; //雪花降落的时间
		var startoption = 0.7 + 0.3 * Math.random(); //雪花开始降落的透明度
		var endoption = 0.2 + 0.3 * Math.random(); //雪花结束降落的透明度
		flack.clone().appendTo($("body")).css({ //克隆雪花冰设置初始位置
			"left": startwidth,
			"font-size": sdimg,
			"opacity": startoption,
			"color": "#fff"
		}).animate({ //animate,是执行动画的方法，这里用来雪花从上到下飘落
			"top": sdheight - 30,
			"left": endwidth,
			"opacity": endoption
		}, time, function() {
			$(this).remove(); //雪花落在地上消失，移除制造出的雪花
		})
	}, 100)

});




















