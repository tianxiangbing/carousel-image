!function(t,i){"function"==typeof define&&define.amd?define("carousel-image",["$"],i):"object"==typeof exports?module.exports=i():t.CarouselImage=i(window.Zepto||window.jQuery||$)}(this,function(t){function i(){}return t.fn.CarouselImage=function(e){var n=[];return t(this).each(function(){var s=new i,h=t.extend({target:t(this)},e);s.init(h),n.push(s)}),n},i.prototype={init:function(t){if(this.settings=t,this.index=0,this.container=t.target,this.content=this.container.children().first(),this.timer=t.timer||3e3,this.animate=t.animate||500,this.num=t.num||null,this.list=this.content.children(),this.size=this.list.length,this.repeat=t.repeat||!1,this.step=this.container.width(),this.repeat){var i=this.list.first().clone(),e=this.list.last().clone();this.content.append(i),this.content.prepend(e),this.content.css({left:-this.container.width(),position:"absolute"}),this.content.width((this.list.length+2)*this.step)}else this.content.css({left:0,position:"absolute"}),this.content.width(this.list.length*this.step);this.setHeightWidth(),this.bindEvent(),this.auto(),this.formatNum()},setHeightWidth:function(){function i(i){var e=this.height,n=this.width,s=o.container;if(!o.settings.height){var h=o.container.width()/n*e;o.container.height(o.container.width()/n*e),o.container.find("a").height(h),o.content.css({position:"absolute"})}var a=o.container.width(),c=a/n*e;t(".carousel-"+i,s).height()>o.container.height()&&(t(".carousel-"+i,s).height(o.container.height()),t(".carousel-"+i,s).width(o.container.height()/e*n)),t(".carousel-"+i,s).width()>o.container.width()&&(t(".carousel-"+i,s).width(a),t(".carousel-"+i,s).height(c));var r=t(".carousel-"+i,s).width(),l=t(".carousel-"+i,s).height(),u=(o.container.height()-l)/2,d=(o.container.width()-r)/2;t(".carousel-"+i,s).css({left:d,top:u,position:"absolute"})}var e=this.settings;e.width&&this.container.width(e.width),e.height&&this.container.height(e.height),this.step=this.container.width(),this.content.width(e.repeat?(this.list.length+2)*this.step:this.list.length*this.step);for(var n=0,s=this.content.children().length;s>n;n++){var h=t(this.content.children()[n]);h.find("img").addClass("carousel-"+n).attr("data-index",n)}var o=this;this.container.find("a").css({width:this.step,height:this.container.height(),position:"relative"}),this.container.find("img").each(function(){var e=new Image;e.src=t(this).attr("src");var n=t(this).data("index");!function(t,e){t.complete?i.call(t,e):(t.onreadystatechange=function(){("complete"==this.readystate||"loaded"==this.readyState)&&i.call(this,e)},t.onload=function(){i.call(this,e)})}(e,n)})},touch:function(i,e,n){function s(t){return n.call(this,t)}var h;"function"==typeof e&&(n=e),t(i).on("touchmove",e,function(t){h=!0}).on("touchend",e,function(t){if(t.preventDefault(),!h){var i=n.call(this,t,"touch");i===!1&&(t.preventDefault(),t.stopPropagation())}h=!1}),t(i).on("click",e,s)},bindEvent:function(){var i=this,e={},n=0,s={},h=!1,o={};this.content.on("touchstart",function(s){return e={x:s.changedTouches[0].pageX},2==s.targetTouches.length?(h=!1,!1):(o=t(this).position(),n=e.x,void i.stop())}).on("touchmove",function(n){return 2==n.targetTouches.length?!1:(h=!0,s={x:n.changedTouches[0].pageX},i.bloom?(o={left:o.left+(s.x-e.x)},t(this).css(o)):(o.left=o.left+(s.x-e.x),t(this).css({left:o.left})),e=s,!1)}).on("touchend",function(o){s={x:o.changedTouches[0].pageX};var a=t(this).position(),c={left:a.left+(s.x-e.x)};t(this).css(c),s.x>n?i.index--:i.index++,i.go(),h=!1,i.auto()}),i.touch(i.num,"i",function(){clearInterval(i.interval),i.index=t(this).index(),i.go(),i.auto()}),t(window).resize(function(){i.content.find("img").css({width:"auto",height:"auto"}),i.go(),i.setHeightWidth()})},formatNum:function(){if(this.num){for(var t="",i=0,e=this.list.length;e>i;i++){var n=(this.list[i],"");this.index==i&&(n="current"),t+='<i class="'+n+'">'+(i+1)+"</i>"}this.num.html(t)}},go:function(){var t=this,i=t.step;if(this.repeat){var e=-(t.index+1)*i;t.index<0&&(e=0),0==t.index&&(e=-i),t.content.animate({left:e},t.animate,function(){t.index<0&&(t.index=t.list.size()-1,t.content.css("left",-(t.index+1)*i)),t.index>=t.list.size()&&(t.index=0,t.content.css("left",-1*i)),t.formatNum()})}else{t.index<0&&(t.index=0),t.index>=t.size&&(t.index=t.size-1);var e=-t.index*i;t.content.animate({left:e},t.animate,function(){t.formatNum()})}},auto:function(){var t=this;this.interval&&t.stop(),this.interval=setInterval(function(){t.index++,t.repeat||t.index>=t.size&&(t.index=0),t.go()},this.timer)},stop:function(){clearInterval(this.interval),this.interval=null}},i});