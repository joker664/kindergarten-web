// JavaScript Document

$(function(){
	window.onresize=function(){autofoot();}
	window.onresize();
	
	$(".select").each(function(){
		s=$(this);
		s.find(".btn,input").click(function(){
			s.find("ul").show();
		});
		s.mouseleave(function(){
			s.find("ul").hide();
		});
		s.find("li").click(function(){
			s.find("input").val($(this).text());
			s.find("ul").hide();
		});
	});
	
	$("#header .info .weibo .a2").toggle(
		function(){$(".weibo .wx").show(500);},
		function(){$(".weibo .wx").hide(500);}
	);
	
	/*$("#weibos").mouseover(function(){
									$("#weibobg").slideDown("slow");
      });

	$("#weibobg").mouseover(function(){
									 $("#weibobg").show();
									 });
	$("#weibobg").mouseout(function(){
									 $("#weibobg").hide();
									 });*/
	$(".pages ul").css("margin-left",$(".pages ul").width()*0.5*-1);
	
	//主导航
	$(".nav_main li").hover(
		function(){
			if($(".nav_main_child .child").eq($(this).index()).html()!=""){
				if($(this).index()!=1){
						$(this).siblings().removeClass("now");
						$(this).addClass("now");
						$(".nav_main_child").show();
						$(".nav_main_child .child:visible").hide();
				}else{
						$(".nav_main_child png").hide();
					 }
				if($(this).index()!=1){
				    $(".nav_main_child .child").eq($(this).index()).show();
				}else{
					$(".nav_main_child png").html("");
					$(".nav_main_child png").hide();
					$(".nav_main_child .child").eq($(this).index()).hide();
					}
			}
			else{
				$(".nav_main_child").hide();
			}
		},
		function(){
			$(this).removeClass("now");
			$(".nav_main_child").hide();
		}
	);
	$(".nav_main_child").hover(
		function(){
			$(this).show();
		},
		function(){
			$(this).hide();
			$(".nav_main li").removeClass("now");
		}
	);
	$(".nav_main_child .child").hover(function(){
		$(".nav_main li").eq($(this).index()).addClass("now");
	});
	
	//--快捷菜单
	$('.fastA').find('li').find('a').hover(
	    function(){
			$(this).find('img').hide();
			$(this).find('.ico').show();
			},
		function(){
			$(this).find('img').show();
			$(this).find('.ico').hide();
			}
	)
	var fastADivNow=0;
	$('.fastA').find('.a1').click(function(){
		if(fastADivNow<$('.fastADiv').length-1){
			fastADivNow++;
			$('body,html').animate({scrollTop:$('.fastADiv').eq(fastADivNow).offset().top-124},1000);
			if(fastADivNow==$('.fastADiv').length-1){
				$('.fastA').find('.a1').hide();
				$('.fastA').find('.a2').show();
				}
			}
		})
		
	$('.fastA').find('.a2').hide();
	$('.fastA').find('.a2').click(function(){
		$('body,html').animate({scrollTop:0},1000);
		$('.fastA').find('.a1').show();
		$('.fastA').find('.a2').hide();
	})
	$(window).scroll(function(){
		/*$('.fastADiv').each(function(i){
			if($(window).scrollTop()>=$(this).offset().top-124){
				fastADivNow=i;
				if(fastADivNow<$('.fastADiv').length-1){
						$('.fastA').find('.a1').show();
						$('.fastA').find('.a2').hide();
					}else{
						$('.fastA').find('.a1').hide();
					    $('.fastA').find('.a2').show();
						}
				}
			})
		})*/
		if($(window).scrollTop()>=$(".fastADiv:eq("+($(".fastADiv").size()-2>0?$(".fastADiv").size()-2:0)+")").offset().top){
			$('.fastA').find('.a1').hide();
			$('.fastA').find('.a2').show();
		}
		else{
			$('.fastA').find('.a1').show();
			$('.fastA').find('.a2').hide();
		}
		
		if($(window).scrollTop()>$("#focus").height()+124){
			$("#focus").css("position","absolute");
		}
		else{
			$("#focus").css("position","fixed");
		}
	});
	
});

function autofoot(){
	var wh=$(window).height();
	var dh=$(document.body).height();
	if($("#footer").attr("class")=="footb"){
		dh=$(document.body).height()+$("#footer").height();;
	}
	if(wh>dh){
		$("#footer").addClass("footb");
	}
	else{
		$("#footer").removeClass("footb");
	}
}

function autoimg(w,h,e){
	var img = new Image();
	img.src=$(e).attr("src");
	
	w1=img.width;
	h1=img.height;
	
	if((w/h)<(w1/h1)){
		if(w1>w){$(e).width(w);}
		$(e).css("margin-top",(h-$(e).height())*0.5);

	}
	else{
		if(h1>h){$(e).height(h);}
	}
}

function hover(e,classname,child){
	if(classname==undefined){classname="hover";}
	if(child==undefined){
		$(e).hover(
			function(){$(this).addClass(classname);},
			function(){$(this).removeClass(classname);}
		);
	}
	else{
		$(e).hover(
			function(){$(this).find(child).addClass(classname);},
			function(){$(this).find(child).removeClass(classname);}
		);
	}
}



function showdiv(id,idx,fade){
	if(!fade)fade=0;
	for(var i=1;i<10;i++){
		if($("#div"+id+i)){
			$("#div"+id+i).hide();
		}
		if($("#tab"+id+i)){
			$("#tab"+id+i).removeClass("now");
		}
	}
	$("#tab"+id+idx).addClass("now");
	$("#div"+id+idx).fadeIn(fade);
}


function autoimg(w,h,e){
	var img = new Image();
	img.src=$(e).attr("src");
	
	w1=img.width;
	h1=img.height;
	
	if((w/h)<(w1/h1)){
		if(w1>w){$(e).width(w);}
		$(e).css("margin-top",(h-$(e).height())*0.5);
	}
	else{
		if(h1>h){$(e).height(h);}
	}
}


function showdiv1(id,idx){
	for(var i=1;i<30;i++){
		if(document.getElementById("div"+id+i)){
			document.getElementById("div"+id+i).style.display="none";
		}
		if(document.getElementById("tab"+id+i)){
			document.getElementById("tab"+id+i).className=document.getElementById("tab"+id+i).className.replace("now","");
		}
	}
	document.getElementById("tab"+id+idx).className=document.getElementById("tab"+id+idx).className+" now";
	if(document.getElementById("div"+id+idx)){
		document.getElementById("div"+id+idx).style.display="";
	}
}

function showslider(id,e,cname){
	if(!cname){cname="act";}
	if(!$(id).attr("h")){$(id).attr("h",$(id).height());}
	$(id).children().wrapAll("<div class='bd'></div>");
	
	if($(id).height()==$(id).attr("h") && $(id).height()<$(id).find(".bd").height()){
		$(id).animate({height:$(id).find(".bd").height()});
	}
	else{
		$(id).animate({height:$(id).attr("h")});
	}
	if($(e).attr("class").match(cname)){
		$(e).removeClass(cname);
	}
	else{
		$(e).addClass(cname);
	}
}

function divcenter(e,mintop){
	$(e).css({display:'block',top:-9999});
	var w=$(e).width();
	var h=$(e).height();
	var top,left;
	if($(window).height()>h){top=$(window).scrollTop()+($(window).height()-h)*0.5;}
	else{top=$(window).scrollTop()+mintop;}
	left=w*0.5*-1;
	return Array(top,left);
	
}
function divshow(e,mintop){
	var arr=divcenter(e,mintop);
	var top=arr[0];
	var left=arr[1];
	
	$(e).hide();
	$(e).css("top",top);
	$(e).css("margin-left",left);
	$(e).fadeIn();
}