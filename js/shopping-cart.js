$(function () {
	/*
	  1 计算数量
	  2 计算小计金额
	  3 计算选中商品的总数量
	*/
	
	//增加数量
	// 点击加 增加数量
	$(".plus").click(function () {
		//转为数字类型
		let number = Number($(this).closest('.amount_box').find('.sum').val());
		number++;
		$(this).closest('.amount_box').find('.sum').val(number)
		
		//获取价格
		let price = $(this).closest("li").siblings(".list_price").find("span").text();
		//相加获取总价格
		let subtotal = number * price;
		$(this).closest("li").siblings(".list_sum").find("span").text(subtotal.toFixed(2));
		
		calcCountPrice()
	})
	//点击- 数量减少
	$(".reduce").click(function () {
		//转为数字类型
		let number = Number($(this).closest('.amount_box').find('.sum').val());
		number--;
		//判断是否为负数
		if(number>0){
			$(this).closest('.amount_box').find('.sum').val(number)
		}
		//获取价格
		let price = $(this).closest("li").siblings(".list_price").find("span").text();
		//相加获取总价格
		let subtotal = number * price;
		$(this).closest("li").siblings(".list_sum").find("span").text(subtotal.toFixed(2));
		
		calcCountPrice()
	})
	
	$(".son_check").click(function () {
		// $(this).prop("checked")
		isAllSelect();
		//    计算选中商品的数量和金额
		calcCountPrice();
	})
	/* 是否全选 */
	function isAllSelect() {
		// 1获取选中子项目的个数
		let selNum = $(".son_check:checked").length;
		//2 子项目的总个数
		let count = $(".son_check").length;
		console.log("选中的个数", selNum, "总数", count);
		if (selNum === count) {
			$(".all_check").prop("checked", true);
		} else {
			$(".all_check").prop("checked", false);
		}
	}
	/*
	  顶部的全选框:
	  用自己的状态决定子项目的状态
	 */
	$(".all_check").click(function () {
		//获取自己的状态
		let bool = $(this).prop("checked");
		// console.log(bool);
		//把自己的状态赋给子项目
		$(".son_check").prop("checked", bool);
		// 计算选中商品的数量和金额
		calcCountPrice();
		
	})
	
	
	
	/* 删除所有选中商品
      思路：
       1 找到所有的选中商品，调用 remove()方法
       2  取消全选
    */
	$(".delallsel").click(function () {
		// alert(666)
		if (window.confirm("确定要删除吗？")) {
			$(".son_check:checked").closest("ul").remove();
			// 计算选中商品的数量和金额
			calcCountPrice();
			//取消全选
			//获取内容区域的子元素，
			let len = $(".order_content").children().length;
			// 如果没有子元素，就取消全选。
			if (len === 0) {
				$(".all_check").prop("checked", false);
			}
			
		}
		
		console.log($(".order_content").children().length);
	})
	
	/* 删除当前行
	   思路：
		1  向上查找，找到ul ，直接删除。
		2  计算选中商品的数量和金额
		3  是否全选
	*/
	$(".delbtn").click(function () {
		if (window.confirm("确定要删除吗？")) {
			
			$(this).closest("ul").remove();
			//计算选中商品的数量和金额
			calcCountPrice();
			//是否全选
			isAllSelect();
			//获取内容区域的子元素，
			let len = $(".order_content").children().length;
			// 如果没有子元素，就取消全选。
			if (len === 0) {
				$(".all_check").prop("checked", false);
			}
			
			
		}
	})
	
	/* 计算选中商品的数量和金额 */
	function calcCountPrice() {
		let count = 0; //总的选中的商品数量
		let total = 0.00; //总金额
		// 1 获取选中的商品
		$(".son_check:checked").each(function (i, v) {
			// console.log(i, v, this);
			//1 计算数量
			//取出对应的数量
			let num = $(v).closest('li').siblings(".list_amount").find(".sum").val();
			count += window.parseInt(num);
			// console.log("取出对应的数量", num,"总数",count);、
			//2 计算总金额
			let subTotal = $(this).closest('li').siblings(".list_sum").find("span").text();
			// console.log("小计金额:",subTotal);
			total += window.parseFloat(subTotal);
		})
		//把数量显示在页面上
		$(".amount").text(count)
		//把总金额显示在页面上
		$(".totalprice").text(total)
	}
	
})