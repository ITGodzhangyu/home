function Enemy(){
	this.stage=document.getElementById("space");
	this.timer=0;
	this.total=0;
	var _self=this;
	this.createSmall=function(){
		var _small=document.createElement("div");
		_small.className="small";
		this.stage.appendChild(_small);
		_small.style.left=(this.stage.clientWidth-_small.offsetWidth)*(Math.random())+"px";
		_small.style.top="0px";
	}
	this.createMiddle=function(){
		var _middle=document.createElement("div");
		_middle.className="middle";
		this.stage.appendChild(_middle);
		_middle.style.left=(this.stage.clientWidth-_middle.offsetWidth)*(Math.random())+"px";
		_middle.style.top="0px";
	}
	this.createHuge=function(){
		var _huge=document.createElement("div");
		_huge.className="huge";
		this.stage.appendChild(_huge);
		_huge.style.left=(this.stage.clientWidth-_huge.offsetWidth)*(Math.random())+"px";
		_huge.style.top="0px";
	}
	this.createEnemy=function(){
		window.clearTimeout(_self.timer);
		_self.total+=200;
		_self.createSmall();
		if(_self.total%3000==0){
			_self.createMiddle();
		}
		if(_self.total%20000==0){
			_self.createHuge();
		}
		var _planes=_self.stage.getElementsByTagName("div");
		for(var i=1;i<_planes.length;i++){
			switch(_planes[i].className){
				case "small":
					_planes[i].style.top=_planes[i].offsetTop+_planes[i].offsetHeight+"px";
					break;
				case "middle":
					_planes[i].style.top=_planes[i].offsetTop+_planes[i].offsetHeight/10+"px";
					break;
				case "huge":
					_planes[i].style.top=_planes[i].offsetTop+_planes[i].offsetHeight/50+"px";
					break;
			}
		}
		if(_self.total>=60000){
			_self.total=0;
		}
	_self.timer=window.setTimeout(_self.createEnemy,200);
	}
}
