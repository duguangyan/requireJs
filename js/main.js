require.config({
　　　　paths: {
　　　　　　"jquery": "jquery2.0"	
　　　　}
});
//头部
require(['jquery','top'], function ($,top){
	top.addTop();
	top.doTop();
});
//尾部
require(['jquery','footer'], function ($,footer){
	footer.addFooter();	
});

