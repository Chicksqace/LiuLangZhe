// 陈攀宇做
$(function() {
	$("#list input").focus("click",function(){
		$(this).val("")
	})
	load();
	// load()开始前调用，是把数据显示在页面上
	$("#title").on("keydown",function(e){
		
		if(e.keyCode===13){
			if($(this).val()===""){
				alert("内容为空")
			}else{
				// 先读取本地存储原来的数据
					var local=getDate();
					console.log(local);
					// 把local数组进行更新数据 把最新的数据追加给local数组
					local.push({title:$(this).val(),done:false});
					// 把这个数组local存储到本地存储
					saveDate(local);
					load();
				}
				$(this).val("");
			}
		
	})
	$("ol,ul").on("click","a",function(){
		// 先获取本地元素
		var data = getDate();
		console.log(data);
		// 修改数据
		var index = $(this).attr("id");
		console.log(index);
		data.splice(index, 1);
		// 存储数据
		saveDate(data)
		// 重新渲染
		load()
	})
	$("ol,ul").on("click","input",function(){
		// alert(1)
		var data=getDate();
		// 修改数据
		var index = $(this).siblings("a").attr("id");
		data[index].done=$(this).prop("checked")
		console.log(data);
		// 存储数据
		saveDate(data)
		// 重新渲染
		load()
	})
	// 读取本地存储的数据
	function getDate(){
		var data = localStorage.getItem("todolist");
		    if (data !== null) {
		        return JSON.parse(data);
		    } else {
		        return [];
		    }
		}
	function saveDate(data){
		localStorage.setItem("todolist",JSON.stringify(data))
	}
	function checkTime(i) {
		if (i<10) {
		 i="0"+i;
		}
		return i;
	  }
	// 渲染加载数据
	function load(){
// 褚立邦做
	var nowdate=new Date();//创建Date对象nowdate,以获取当前时间
   var year=nowdate.getFullYear(),//获取年份
     month=nowdate.getMonth()+1,//获取月份，getMonth()得到的是0-11，需要加1
     date=nowdate.getDate(),//获取日份
     day=nowdate.getDay(),//获取一周中的某一天，getDay()得到的是0-6
     week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
     h=nowdate.getHours(),
     m=nowdate.getMinutes(),
     s=nowdate.getSeconds(),
     h=checkTime(h),//函数checkTime用于格式化时，分，秒
     m=checkTime(m),
     s=checkTime(s);

		var data=getDate();
		console.log(data);
		$("ol,ul").empty();
		var todoCount=0;
		var doneCount=0;
		$.each(data,function(i,n){
			if(n.done){
				// year+"年"+month+"月"+date+"日"+week[day]+h+"："+m+"："+s
				$("ul").prepend(`<li><input type='checkbox' checked='checked'> <p>${n.title}----------最新修改时间为:${year}年${month}月${date}日</p> <a href='javascript:;' id=${i}></a></li>`);
				doneCount++;
			}else{
				$("ol").prepend(`<li><input type='checkbox' > <p> ${n.title}----------最新修改时间为:${year}年${month}月${date}日</p> <a href='javascript:;' id= ${ i }></a></li>`);
				todoCount++;
			}
		})
		$("#todocount").text(todoCount);
		$("#donecount").text(doneCount);
	}
})