define(['jquery'],function ($){
　　　　var addFooter = function (){
　　　　　　var footer = $("<h1>这里是addFooter</h1>");
		    $(".footer").append(footer);
　　　　};
　　　　return {
　　　　　　addFooter: addFooter
　　　　};
});