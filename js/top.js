define(function(){
　　　　var addTop = function (){
　　　　　　var top = $("<ul><li>菜单一</li><li>菜单一</li><li>菜单一</li><li>菜单一</li><li>菜单一</li></ul>");
		    $(".top").append(top);
　　　　};
		var doTop = function(){
			$(".top ul li").click(function(){
				//alert($(this).index());
				$(this).css({'background-color':'red'}).siblings().css({'background-color':'#999999'});
				$(this).attr({'data':'1'}).siblings().attr({'data':'0'});
			})
			$(".top ul li").hover(function(){
				//alert($(this).index());
				if($(this).attr('data')!=1){
					$(this).css({'background-color':'red'});
				}
				
			},function(){
				if($(this).attr('data')!=1){
					$(this).css({'background-color':'#999999'});
				}
				
			})
		}
　　　　return {
　　　　　　addTop: addTop,
			doTop: doTop,
　　　　};
});

　　　
