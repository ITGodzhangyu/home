
function Style(_stage){
	this.stage=document.getElementById(_stage);
    this.height=document.documentElement.clientHeight||document.body.clientHeight;
    this.width=document.documentElement.clientWidth||document.body.clientWidth;
    this.timer=0;
    var _self=this;
    this.top=0;
	this.moveStage=function(){
        window.clearTimeout(_self.timer);
        _self.stage.style.backgroundPosition="0px "+(_self.top+=20)+"px";
        _self.timer=window.setTimeout(_self.moveStage,60);
    }
    this.main=function(){
		//初始化舞台的宽高
        this.stage.style.height=this.height+"px";
        this.stage.style.width=this.height/853*480+"px";
        this.moveStage();//调用让背景动起来
	}
}


