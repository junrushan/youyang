//文档加载事件
$(function (){
	$("#slider").slidebox({
		boxh: 470,//盒子的高度
		w: 400,//图片的宽度
		h: 460,//图片的高度
		isShow: false,//是否显示控制器
		isShowBtn: true,//是否显示左右按钮
		controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 12,//控制按钮宽度
		controlsH: 12,//控制按钮高度
		radius: 0//控制按钮圆角度数
	});
})
$(function (){
	$("#slider1").slidebox({
		boxh: 470,//盒子的高度
		w: 400,//图片的宽度
		h: 460,//图片的高度
		isShow: false,//是否显示控制器
		isShowBtn: true,//是否显示左右按钮
		controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 12,//控制按钮宽度
		controlsH: 12,//控制按钮高度
		radius: 0//控制按钮圆角度数
	});
})
$(function (){
	$("#slider2").slidebox({
		boxh: 470,//盒子的高度
		w: 400,//图片的宽度
		h: 460,//图片的高度
		isShow: false,//是否显示控制器
		isShowBtn: true,//是否显示左右按钮
		controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 12,//控制按钮宽度
		controlsH: 12,//控制按钮高度
		radius: 0//控制按钮圆角度数
	});
})
$(function (){
	$("#slider3").slidebox({
		boxh: 470,//盒子的高度
		w: 400,//图片的宽度
		h: 460,//图片的高度
		isShow: false,//是否显示控制器
		isShowBtn: true,//是否显示左右按钮
		controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 12,//控制按钮宽度
		controlsH: 12,//控制按钮高度
		radius: 0//控制按钮圆角度数
	});
})

$(function() {
	var bannerSlider = new Slider($('#banner_tabs'), {
		time: 5000,
		delay: 400,
		event: 'hover',
		auto: true,
		mode: 'fade',
		controller: $('#bannerCtrl'),
		activeControllerCls: 'active'
	});
	$('#banner_tabs .flex-prev').click(function() {
		bannerSlider.prev()
	});
	$('#banner_tabs .flex-next').click(function() {
		bannerSlider.next()
	});
})
/*商品列表气焊*/
$('#proList').mouseover(function () {
	 $('#navMenu').stop().slideToggle()
})

/*轮播图 函数封装*/
//文档加载事件

$(function () {
	/*
	   selector:选择器
	   boxh:盒子的高度
	   imgw:图片的宽度
	   imgh:图片的高度
	   controlsW:控制按钮宽度
	   controlsH: 控制按钮高度
	   radius:控制按钮圆角度数
	*/
	lunbo('.slider99',470,400,460)
	lunbo('#slider12',470,400,460)
	lunbo('#slider11',470,400,460)
	lunbo('#slider10',470,400,460)
	lunbo('#slider9',470,400,460)
	lunbo('#slider8',470,400,460)
	lunbo('#slider7',470,400,460)
	lunbo('#slider6',470,400,460)
	lunbo('#slide5',470,400,460)
	lunbo('#slider4',470,400,460)
	lunbo('#slider3',470,400,460)
	lunbo('#slider2',470,400,460)
	lunbo('.slider',428,300,300)
	function lunbo(selector,boxh,imgw,imgh,controlsW,controlsH,radius) {
		$(selector ).slidebox(
			{
				boxh: boxh||420,//盒子的高度
				w: imgw||1000,//图片的宽度
				h: imgh||420,//图片的高度
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

/*选项卡*/
/* 服务区域选项卡效果 */
$(".common-title .tab-title").mouseenter(function () {
	//获取自己的索引
	/*  let index = $(this).index() ;
	 console.log("index:",index);
	 //头部
	 $(this).addClass("active").siblings().removeClass("active")

	 //内容区域
	 // $(".content .con-item").eq(index).addClass("current").siblings().removeClass("current")
	 //多个的处理，从事件源自己出发，去找目标元素。
	$(this).closest(".common-title")
	.siblings(".content").find(".con-item").eq(index)
	.addClass("current").siblings().removeClass("current")
	 */
	$(this).addClass("active").siblings().removeClass("active")
		.closest(".common-title")
		.siblings(".content").find(".con-item").eq($(this).index())
		.addClass("current").siblings().removeClass("current")
})

// $(".sport .common-title .tab-title").mouseenter(function(){
//     //获取自己的索引
//     let index = $(this).index() ;
//     //头部
//     $(this).addClass("active").siblings().removeClass("active")
//     //内容区域
//     $(".sport .content .con-item").eq(index).addClass("current").siblings().removeClass("current")
// })
/*给图片添加影音效果*/
$('.con-item-list').mouseenter(function () {
	$(this).find('img').addClass("shadows").siblings().removeClass('shadows');
	$(this).find('img').css('cursor','pointer')
})


/*
	需求: 点击楼层span, 让滚动滚动到对应楼层

	原理:
		1. 获取当前点击楼层span对应的楼层盒子div距离文档顶部的偏移sTop
		2. 设置滚动条滚动的距离为sTop
*/

$('.floor-rolling li').click(function (){
	//获取当前span的索引
	let index = $(this).index();
	
	//对应楼层
	let sTop = $('section').eq(index).offset().top ;
	
	//设置滚动条滚动的距离为sTop
	$('html').animate({scrollTop: sTop}, 1000)
})
/*
* 点击顶部按钮 返回最前面
* */
$(".tothetop").click(function () {
	$(this).scrollTop(300)
})
$(function(){
	         $('.floor-rolling').hide();        //隐藏go to top按钮
	         $(window).scroll(function(){
		
	         	//当window的scrolltop距离大于1时，go to
		         if($(this).scrollTop() > 900){
		         	$('.floor-rolling').fadeIn();
			            }else{
		         	$('.floor-rolling').fadeOut();
		            }
		        });
	
	        $('.tothetop').click(function(){
	        	$('html ,body').animate({scrollTop: 0}, 300);
		           return false;
		         });
	   });

$(window).scroll(function (){
	let scrollTop = $(this).scrollTop();
	console.log(scrollTop);
	if (scrollTop > 1000){
		$('.search-top').slideDown()
	}else{
		$('.search-top').slideUp()
	}
})