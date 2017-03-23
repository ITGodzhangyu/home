
function audio(){
	var timer=0,timer2=0;
			var _left=0,rol=0;
			function zimumove(){
				window.clearTimeout(timer);
				_left--;
				$(".zimu-move")[0].style.left=_left+"px";
				if(_left<=-200){_left=0}
				timer=window.setTimeout(zimumove,50);
			}
			function mingmove(){
				rol++;
				window.clearTimeout(timer2);
				$(".view img").css({transform:"rotate("+rol+"deg)"});
				if(rol>=360){rol=0;}
				timer2=window.setTimeout(mingmove,10);
			}
			var flag=0;
			$(".touc").click(function(){
				if(flag==0){
					flag=1;
					$(".topheader").css({"transform":"translatey(100px)"});
					$(this).css({"bottom":"-9px"});
					$(this).html("&#xe65d;");
				}
				else{
					flag=0;
					$(".topheader").css({"transform":"translatey(0px)"});
					$(this).html("&#xe63d;")
					$(this).css({"bottom":"-23px"});
					
				}
			});
			//判断视频是否播放
			var isPlay = true;
			//是否静音
			var isSilence = true;
			//收否全屏
			var isFullScreen = true;
			
			var container = document.getElementById("container");
			var $vdoW = $("#vdo").width();
			var $vdoH = $("#vdo").height();
			
			var $windowW = $(window).width();
			var $windowH = $(window).height();
			
			
			$("#container").css({"width":$vdoW,"height":$vdoH});
			var vdo = document.getElementById("vdo");
			var allTime = Math.ceil(vdo.duration);
			var volum = 0.5;
			
			$("#volumRange").val(volum*10);
			
			/*alert(allTime)*/
			$("#playRange").attr("max",allTime);
			if(allTime>=60&&allTime<600){
					$("#allTime").html("0"+Math.floor(allTime/60)+":"+allTime%60);
				}else if(currentTime>=600){
					$("#allTime").html(Math.floor(allTime/60)+":"+allTime%60);
				}else{
					$("#allTime").html("00:"+allTime);
				}
			$("#play").on("click",function(){
				if(isPlay){
					vdo.play();
					isPlay = false;
					$(this).attr("src","img/play.png")
					zimumove();
					mingmove();
				}else{
					vdo.pause();
					isPlay = true;
					$(this).attr("src","img/pause.png");
					window.clearTimeout(timer);
					window.clearTimeout(timer2);
				}
			});
			$("#silence").on("click",function(){
				if(isSilence){
					vdo.volume = 0;
					isSilence = false;
					$(this).attr("src","img/novol.png")
				}else{
					vdo.volume = volum;
					isSilence = true;
					$(this).attr("src","img/vol.png");
				}
			});
			
			
			$("#volumRange").on("change",function(){
				var val = $(this).val();
				volum = val/10;
				if(val == 0){
					$("#silence").attr("src","img/novol.png")
				}else{
						$("#silence").attr("src","img/vol.png")
				}
				vdo.volume = volum;
			})
			
			function playTime(){
				var currentTime = parseInt(Math.ceil(vdo.currentTime));
				console.log(currentTime);
				$("#playRange").val(parseInt(currentTime));
				if(currentTime>=60&&currentTime<600){
					if(currentTime%60<10){
						$("#currentTime").html("0"+Math.floor(currentTime/60)+":0"+currentTime%60);
					}else{
						$("#currentTime").html("0"+Math.floor(currentTime/60)+":"+currentTime%60);
					}
				}else if(currentTime>=600){
					if(currentTime%60<10){
						$("#currentTime").html(Math.floor(currentTime/60)+":0"+currentTime%60);
					}else{
						$("#currentTime").html(Math.floor(currentTime/60)+":"+currentTime%60);
					}
				}else{
					if(currentTime%60<10){
						$("#currentTime").html("00:0"+currentTime);
					}else{
						$("#currentTime").html("00:"+currentTime);
					}
				}	
			}
			var timer = "";
			vdo.addEventListener("timeupdate",playTime,true);
			
			/*$("#playRange").on("change",function(){
				var val = $(this).val();
				vdo.currentTime = val;
				vdo.addEventListener("timeupdate",playTime,true);
			})*/
			
			$("#playRange").on("mousedown",function(){
				vdo.removeEventListener("timeupdate",playTime,true);
				$(this).on("mouseup",function(){
					var val = $(this).val();
					vdo.currentTime=currentTime;
					vdo.addEventListener("timeupdate",playTime,true);
				})
			})
			
}
function main(){
	var len=$(".index-nav").find("li").length;
	var lencenter=(len-1)/2;
	for(var i=0;i<len;i++){
		$(".index-nav").find("li").eq(i).attr({"classid":i})
		if(i<=lencenter){
			$(".index-nav").find("li").eq(i).css({"transform":"scale("+(i+4)/8+")"});
		}else{
			$(".index-nav").find("li").eq(i).css({"transform":"scale("+(12-i)/8+")"});
		}
	}
	var classid="";
	var cha=0;
	var m=0;
	$(".index-nav img").click(function(){
		classid=$(this).parent().attr("classid");
		cha=lencenter-parseInt(classid);
		console.log(cha);
		for(var i=0;i<len;i++){
			m=i-cha;
			if(m>8){m=m-9;}
			else if(m<0){m=m+9;}
			$(".index-nav").find("li").eq(i).attr({"classid":m})
		}
		myajax();
	})
}
function myajax(){
	$.ajax({
			type:"GET",
			url:"json/index-img.json",
			dataType:"JSONP",
			success:function(data){
				var result=JSON.parse(data);
				
				var cid=0;
				var len=result.length;
				for(var i=0;i<len;i++){
					cid=$(".index-nav").find("li").eq(i).attr("classid");
					for(var n=0;n<len;n++){
						if(result[n].classid==cid){
							$(".index-nav").find("li").eq(i).find("img")[0].src=result[n].src;
							$(".index-nav").find("li").eq(i).find("span").html(result[n].classname)
						}
					}
				}
			}
		});
}
window.onload = function(){
	audio();
	main();
}