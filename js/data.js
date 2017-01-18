define(['vue'],function(Vue){
	
		var datalist = function(){
			var data = 
				{
				    items: 
				    [
				      {name:'杜光焱1', title: '28',content:'内容1' },
				      {name:'杜光焱2', title: '28',content:'内容2' },
				      {name:'杜光焱2', title: '28',content:'内容2' },
				      {name:'杜光焱2', title: '28',content:'内容2' }
					]
				};
				var vuedata = new Vue({
				    el: '.content',
				    data:data 
				})
			
			
		}
		
　　　　return {
　　　　　　datalist: datalist
　　　　};
});
