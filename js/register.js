/*
标杆

* */
let flag={
	user:false,
	pwd:false,
	rePwd:false,
	tels:false
}

$(".user-name").blur(function (){
	let value =($(this).val());
	console.log(value)
	/*正则表达*/
	let reg=/^[a-z0-9_-]{4,16}$/
	let result = reg.test(value);//判断是否合法
	if(result){
		//正确border
		$('.name-hint').text('')
		$(this).css('border','1px solid #ccc')
		flag.user=true
	}else{
		$('.name-hint').text('6-12位字母开头')
		$(this).css('border','1px solid red')
		flag.user=false
	}
})
$(".user-pwd").blur(function (){
	let value =($(this).val());
	console.log(value)
	/*正则表达*/
	let reg=/^[a-z0-9_-]{4,16}$/
	let result = reg.test(value);//判断是否合法
	if(result){
		//正确border
		$('.pwd-hint').text('')
		$(this).css('border','1px solid #ccc')
		flag.pwd=true
	}else{
		$('.pwd-hint').text('6-12位字母开头')
		$(this).css('border','1px solid red')
		flag.pwd=false
	}
})
$(".user-pwd1").blur(function (){
	let value =($(this).val());
	console.log(value)
	/*正则表达*/
	let reg=/^[a-z0-9_-]{4,16}$/
	let result = reg.test(value);//判断是否合法
	if(result){
		//正确border
		$('.pwd-hint1').text('')
		$(this).css('border','1px solid #ccc')
		flag.rePwd=true
	}else{
		$('.pwd-hint1').text('与上一次密码不符')
		$(this).css('border','1px solid red')
		flag.rePwd=false
	}
})
$(".tels").blur(function (){
	let value =($(this).val());
	console.log(value)
	/*正则表达*/
	let reg=/^[1][0-9_-]{6,11}$/
	let result = reg.test(value);//判断是否合法
	if(result){
		//正确border
		$('.tels-hint').text('')
		$(this).css('border','1px solid #ccc')
		flag.tels=true
	}else{
		$('.tels-hint').text('手机密码格式不对')
		$(this).css('border','1px solid red')
		flag.tels=false
	}
})
$(".btn2").click(function () {
	if(flag.user === false){ //验证用户名 - 通常判断错误的情况
		$('.name-hint').text('')
		$(this).closest('.user-name').css('border','1px solid red')
	}else if(flag.pwd === false){//验证密码 - 通常判断错误的情况
		$('.pwd-hint').text('6-12位字母开头')
		$(this).closest('.user-pwd').css('border','1px solid red')
	}else if(flag.rePwd === false){
		$('.pwd-hint1').text('与上一次密码不符')
		$(this).closest('.user-pwd1').css('border','1px solid red')
	}else if(flag.tels=== false){
		$('.tels-hint').text('手机密码格式不对')
		$(this).closest('.tels').css('border','1px solid red')
	}else {
		location.href="./login.html"
	}
})