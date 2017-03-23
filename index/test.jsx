var React = require("react");
var ReactDOM = require("react-dom");
require("./css/common.css");
require("./css/index.css");

var HelloWorld = React.createClass({
	getDefaultProps:function(){
		console.log("getDefaultProps")
	},
	getInitialState:function(){
		console.log("getInitialState");
		return {
			bannderList:["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg"],
			flag:true
		};
	},
	componentWillMount:function(){
		var that = this;
		//ajax请求
		console.log("compontentWillMount")
		
	},
	mountOrUnMount:function(){
//		this.setState({
//			flag:!this.state.flag
//		})
		
		if(this.state.flag){
			ReactDOM.unmountComponentAtNode(document.getElementById("app"))
		}
	},
	render:function(){
		console.log("render",this.state.bannderList)
		return (
			<div>
				<input type="button" value="装载/销毁" onClick={this.mountOrUnMount}/>
				<h1>我们正在学习React生命周期-初始化</h1>
				{str}
			<div>
			<div class="topheader">
				<div class="view">
					<img src="img/qian1.jpg"  />
				</div>
				<div class="zimu">
					<div class="zimu-move">
						<span class="ming">薛之谦——初学者</span>
						<span class="ming">薛之谦——初学者</span>
						<span class="ming">薛之谦——初学者</span>
					</div>
					
				</div>
				<div className="container" id="container">
					<audio src="薛之谦 - 初学者.mp3" id="vdo" loop></audio>
					<div className="controls" id="controls">
						<div className="playOrPause">
							<img src="img/pause.png" id="play"/>
						</div>
						<div className="playRange">
							<input type="range" name="playRange" id="playRange" min="0" value="0"  step="1"/>
						</div>
						<div className="playTime">
							<span id="currentTime">00:00</span>/<span id="allTime">00:00</span>
						</div>
						<div className="silence">
							<img src="img/vol.png" id="silence"/>
						</div>
						<div className="volumRange">
							<input type="range" name="volumRange" id="volumRange" min="0" max="10" step="1" value="" />
						</div>
					</div>
				</div>
				<i className="iconfont touc">&#xe63d;</i>
			</div>
			<div className="index-header">
				<ul className="index-nav">
					<li><img src="img/qian1.jpg" /> <span></span></li>
					<li><img src="img/qian1.jpg" /><span></span> </li>
					<li><img src="img/qian1.jpg" /><span></span> </li>
					<li><img src="img/qian1.jpg" /> <span></span></li>
					<li><img src="img/qian1.jpg" /> <span></span></li>
					<li><img src="img/qian1.jpg" /> <span></span></li>
					<li><img src="img/qian1.jpg" /><span></span> </li>
					<li><img src="img/qian1.jpg" /> <span></span></li>
					<li><img src="img/qian1.jpg" /> <span></span></li>
				</ul>
			</div>
		</div>
		)
	},
	componentDidMount:function(){
		console.log("compontentDidMount")
		
	},
	componentWillUnmount:function(){
		console.log("componentWillUnmount")
	}
});

ReactDOM.render(<HelloWorld />,document.getElementById("app"))
