define(function (){
　　　　var addTop = function (){
　　　　　　var top = $("<ul><li>菜单一</li><li>菜单一</li><li>菜单一</li><li>菜单一</li><li>菜单一</li></ul>");
		    $(".top").append(top);
　　　　};
		var doTop = function(){
			$(".top ul li").click(function(){
				alert($(this).index());
			})
		}
		
　　　　return {
　　　　　　addTop: addTop,
			doTop: doTop
　　　　};
});

　　　
