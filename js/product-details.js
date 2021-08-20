$(function() {
	
	var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 500,//承载容器宽
		height : 500,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 3//缩放比例
	};
	
	var _magnifier = magnifier(magnifierConfig);
	
	/*magnifier的内置函数调用*/
	/*
		//设置magnifier函数的index属性
		_magnifier.setIndex(1);

		//重新载入主图,根据magnifier函数的index属性
		_magnifier.eqImg();
	*/
	
	/*点击颜色分类加入红色边框
	* */
	$('.classification span').click(function () {
		$(this).addClass('active').siblings().removeClass('active')
	})
	
	/*点击箭头则数量加减 */
	let count =1;
	/*加*/
	$('.arrows1').click(function () {
		 $('.good-num1').text(count++);
	})
	/*减*/
	$('.arrows').click(function () {
		$('.good-num1').text(count--);
		if (count-- <2){
			count=1
		}
	})
	
	/*选项卡*/
	$('.particulars h2 span').click(function () {
		$(this).addClass('active-2').siblings().removeClass('active-2')
		$('.particulars-cont').eq($(this).index()).addClass('particulars-cont2').siblings().removeClass('particulars-cont2')
	})
	/*图标切换*/
    //二级菜单
	$('.infor-title').click(function () {
		$(this).find('.infor').stop().slideToggle()
	})
	/*点击隐藏 商品详情页*/
	$('.pro-infor').click(function () {
		$(this).addClass('active-3').siblings().removeClass('active-3')
		
	})
	$('.pro-infor2').click(function () {
		$(".por-im").css('display','block')
	})
	$('.pro-infor3').click(function () {
		$(".por-im").css('display','none')
	})
	
	$('.arrowhead-top').click(function (){
		$(".see-li1").css('display','none')
		})
	$('.arrowhead-bottom').click(function (){
		$(".see-li1").css('display','block')
	})
	
	
	
	
	})

	
