require.config({
　　　　paths: {
　　　　　　"jquery": "jquery2.0",
			"vue"  : "vue"
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
//添加数据
require(['data'], function (data){
	data.datalist();	
});



