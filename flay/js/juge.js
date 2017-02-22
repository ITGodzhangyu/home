function Juge(){
	//刚上来初始化该类型的对象时，下面两个属性被初始化后，数量不会随着
	//敌机数量增加而增加，子弹也同理。
	this.bullets=null;
	this.enemies=null;
	this.stage=document.getElementById("space");
	this.timer=0;
	this.hurt={
		"small":1,
		"middle":5,
		"huge":50
	}
	var _self=this;
	this.h2=0;
	this.h3=0;
	this.juge=function(){
		window.clearTimeout(_self.timer);
		_self.bullets=document.getElementsByTagName("span");
		_self.enemies=_self.stage.getElementsByTagName("div");
		for(var i=_self.bullets.length-1;i>=0;i--){
			for(var n=_self.enemies.length-1;n>0;n--){
				if(_self.bullets[i].offsetTop<=_self.enemies[n].offsetTop+_self.enemies[n].offsetHeight && 
				_self.bullets[i].offsetTop>_self.enemies[n].offsetTop &&
				_self.bullets[i].offsetLeft>_self.enemies[n].offsetLeft && 
				_self.bullets[i].offsetLeft<=_self.enemies[n].offsetLeft+_self.enemies[n].clientWidth){
					_self.v=_self.enemies[n];
					if(_self.enemies[n].className=="small"){
						_self.move();
						break;
					}else if(_self.enemies[n].className=="middle"){
						_self.h2++;
						//_self.enemies[n].backgroundImage="url(img/plain2_die"+_self.h2/5+".png)";
						if(_self.h2>=_self.hurt["middle"]){
							_self.move();
							_self.h2=0;
							_self.stage.removeChild(_self.enemies[n]);
							break;
						}
					}else{
						_self.h3++;
						
						if(_self.h3>=_self.hurt["huge"]){
							//_self.anemies[n].backgroundImage="url(img/plain3_die"+_self.h3/10+".png";
							_self.h3=0;
							_self.stage.removeChild(_self.enemies[n]);
							break;							
						}
					}
					_self.stage.removeChild(_self.bullets[i]);
					//_self.stage.removeChild(_self.enemies[n]);
					//_self.bullets=document.getElementsByTagName("span");
					//_self.enemies=document.getElementsByTagName("div");
					break;
				}
				if(_self.enemies[n].offsetTop>=_self.stage.offsetHeight){
				_self.stage.removeChild(_self.enemies[n]);
				}
			}
			
		}
		_self.timer=window.setTimeout(_self.juge,60);
	}
	this.timer2=0;
	this.l=0;
	this.w=0;
	this.k=0;
	this.v=null;
	this.move=function(){
		if(_self.v.className=="small"){_self.k=1;_self.w=3}
		if(_self.v.className=="midlle"){_self.k=2;_self.w=5}
		if(_self.v.className=="huge"){_self.k=3;_self.w=5}
		window.clearTimeout(_self.timer2);
		_self.l++;
		_self.v.style.backgroundImage="url(img/plain"+_self.k+"_die"+_self.l+".png)";
		if(_self.l>=_self.w){
			_self.stage.removeChild(_self.v);
			_self.l=0;
			
			_self.timer2=window.setTimeout(_self.move,6);
		}
		
	}
}
