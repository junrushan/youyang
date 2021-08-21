/* 点击切换*/
$('.re-top .log1').click(function () {
	$(this).css('color','#DD4A68').siblings().css('color','')
	$('.login-item').css('display','none').find('.login-code').css('display','block')
	$('.login-code').css('display','block').closest().css('display','none')
})
$('.re-top .log2').click(function () {
	$(this).css('color','#DD4A68').siblings().css('color','')
	$('.login-item').css('display','block').find('.login-code').css('display','none')
	$('.login-code').css('display','none').closest().css('display','block')
})


/**
 *  定义表单标杆
 */
let formFlag = {
	user: false, //用户名标杆
	pwd: false   //密码标杆
}

/*判断登录验证*/
/*用户名失去焦点 触发验证*/
$('.user .kuan .us-val').blur(function (){
	let value =($(this).val());
	console.log(value)
	/*正则表达*/
	let reg=/^[a-z0-9_-]{4,16}$/
	let result = reg.test(value);//判断是否合法
	if(result){
		//正确border
		$('.us-cont').text('')
		formFlag.user = true;
	}else{
		$('.us-cont').text('6-12位字母开头')
		$(this).css('border','1px solid red')
		formFlag.user = false;
	}
})
$('.pwd-val').blur(function (){
	let value =($(this).val());
	console.log(value)
	/*正则表达*/
	let reg=/^[a-z0-9_-]{4,16}$/
	let result = reg.test(value);//判断是否合法
	if(result){
		//正确border
		$('.us-pwd').text('')
		formFlag.pwd = true;
	}else{
		$('.us-pwd').text('密码不合法')
		$(this).css('border','1px solid red')
		formFlag.pwd = false;
	}
})
$('.re-btn').click(function () {
	if(formFlag.user === false){ //验证用户名 - 通常判断错误的情况
		$(this).closest('.us-val').css('border','1px solid red')
		$('.us-cont').text('6-12位字母开头')
	}else if(formFlag.pwd === false){//验证密码 - 通常判断错误的情况
		$('.us-pwd').text('密码不合法')
		$(this).closest('.pwd-val').css('border','1px solid red')
	}else {
		//用户名和密码都正确, 然后跳转页面
		location.href = '../index.html'
		
		
	}
})