	$(function(){
	    var $div_li =$("div.tab_menu ul li");//选中所有“标签”
	    $div_li.click(function(){//为“标签”注册单击事件
			$(this).addClass("selected")            //当前<li>元素高亮
				   .siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素在全部li元素中的索引。
			$("div.tab_box > div")   	//选取直接子节点。不选取子节点的话，会引起错误。如果里面还有div 
					.eq(index).show()   //显示 <li>元素对应的<div>元素
					.siblings().hide(); //隐藏其它几个同辈的<div>元素
		}).hover(function(){
			$(this).addClass("hover");//鼠标滑过标签高亮
		},function(){
			$(this).removeClass("hover");//鼠标滑出标签，取消高亮
		})
	});

    // $(function () {
		// var $div_li = $('div.tab_menu ul li');
		// $div_li.on('click',function () {
		// 	$(this),addClass("selected").siblings(),removeClass("selected");
		// 	var index = $div_li.index(this);
		// 	$("div.tab_box > div").eq(index),show().siblings().hide();
    //     }).hover(function () {
		// 	$(this).addClass("hover");
    //     },function () {
		// 	$(this).removeClass("hover");
    //     });
    // });