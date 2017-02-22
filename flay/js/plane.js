function Plane(){
	this.stage=document.getElementById("space");
	this.plane=document.getElementById("me");
	this.width=document.documentElement.clientWidth||document.body.clientWidth;
	this.timer=0;
	var _self=this;
	this.initCSS=function(){
		this.plane.style.left=(this.stage.clientWidth-this.plane.clientWidth)/2+"px";
		this.plane.style.top=this.stage.clientHeight-this.plane.clientHeight+"px";
	}
	this.changeLeft=function(){
		this.stage.onmousemove=function(e){
			e=e||window.event;
			var _left=0;
			if(e.clientX-(_self.width-this.clientWidth)/2<=this.clientWidth-_self.plane.clientWidth){
				_self.plane.style.left=e.clientX-(_self.width-this.clientWidth)/2+"px";
			}
		}
	}
	this.fire=function(){
		window.clearTimeout(_self.timer);
		//先造子弹
		var _bullet=document.createElement("span");
		_bullet.className="bullet";
		_bullet.style.left=_self.plane.offsetLeft+_self.plane.clientWidth/2-3.5+"px";
		_bullet.style.top=_self.plane.offsetTop-18+"px";
		_self.stage.appendChild(_bullet);
		var _bullets=_self.stage.getElementsByTagName("span");
		for(var i=0;i<_bullets.length;i++){
			_bullets[i].style.top=_bullets[i].offsetTop-28+"px";
			if(_bullets[i].offsetTop<=-18){
				_self.stage.removeChild(_bullets[i]);
			}
		}
		_self.timer=window.setTimeout(_self.fire,60);
	}
}

