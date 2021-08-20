$(function () {
	$('.han-clothing h2 .prefecture .tab-a').mouseenter(function () {
		$(this).addClass('active').siblings().removeClass('active').closest('.han-clothing').find('.girl-clothing .tab-ul').eq($(this).index()).addClass('on').siblings().removeClass('on')
		//添加内容样式
		
	})
	$('.shuffling-options .choiceness').mouseenter(function () {
		
		$(this).addClass('active1').siblings().removeClass('active1')
			.closest('.shuffling-options').find('.sw-lun').
		eq($(this).index()).addClass('oon').siblings().removeClass('oon')
		//添加内容样式
		
	})
	/*给图片添加影音效果*/
	$('.girl-clothing-li').mouseenter(function () {
		$(this).find('img').addClass("shadows").siblings().removeClass('shadows');
		$(this).find('img').css('cursor','pointer')
	})
})

/*
* 轮播选项
* */
//文档加载事件
$(function (){
	lunbo('.slider');
		function lunbo(selector,boxh,imgw,imgh,controlsW,controlsH,radius) {
			$(selector ).slidebox(
				{
					boxh: boxh||400,//盒子的高度
					w: imgw||1200,//图片的宽度
					h: imgh||400,//图片的高度
					isShow: false,//是否显示控制器
					isShowBtn: true,//是否显示左右按钮
					controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
					controlsW: controlsW||20,//控制按钮宽度
					controlsH: controlsH||10,//控制按钮高度
					radius: 0//控制按钮圆角度数
				}
			);
	}
	
})