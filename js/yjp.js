// 褚立邦做
$(function(){
	$("#yjp ul li div .yjp_p").on("mouseenter",function(){
		// this.children[0].style.display="block";
		$(this).find("#updiv").stop().slideDown(100)
	})
	$("#yjp ul li div .yjp_p").on("mouseleave",function(){
		// this.children[0].style.display="none";
		// jq
		$(this).find("#updiv").stop().slideUp(1000)
		
	})

})