// JavaScript Document

(function($) {
	$.fn.mChange = function(options) {
		var opts = $.extend({},$.fn.mChange.defaults,options); 
		//初始化
		var c=$(this);
		var n=$(opts.navs);
		var i=0;
		var sw=1;
		opts.speed=opts.speed*1000;
		opts.time=opts.time*1000;
		
		function run(){
			if(sw){
				i++;
				i=change(i);
			}
		}
		
		function change(idx){
			c.fadeOut(opts.speed);
			n.removeClass("now");
			//c.find(".font").fadeOut(opts.speed-300);//add
			
			if(idx==c.size()){idx=0;}
			
			c.eq(idx).stop().fadeIn(opts.speed);
			n.eq(idx).addClass("now");
			//c.eq(idx).find(".font").delay(500).fadeIn(opts.speed);//add
			
			opts.fn();
			return idx;
			
		}
		change(0);
		
		if(opts.auto==1){
			v=setInterval(run,opts.time);
		}
		
		c.hover(function(){sw=0;},function(){sw=1;});
		
		n.each(function(index, element) {
            $(this).click(function(){
				change(index);
				i=index;
				clearInterval(v);
				v=setInterval(run,opts.time);
			});
        });
		
		$(opts.aleft).click(function(){
			i--;
			i=change(i);
			clearInterval(v);
			v=setInterval(run,opts.time);
		});
		$(opts.aright).click(function(){
			i++;
			i=change(i);
			clearInterval(v);
			v=setInterval(run,opts.time);
		});
	};
	$.fn.mChange.defaults = {
		auto  : 1,  //是否自动播放,1为自动,0为手动
		arrow : 1,  //是否反转箭头,1为点击左侧向右滚动,0则相反
		speed : 1,  //滚动效果速度,大于0.3
		time  : 5,  //滚动周期时间，大于1
		navs  : '',
		aleft : '',
		aright: '',
		fn    : function(){}
	}
})(jQuery);