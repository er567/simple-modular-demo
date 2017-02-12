var yanhua = (function(){			
	var Boom = function(x, y) {
		var mDiv = document.createElement("div");
		mDiv.style.width = "5px";
		mDiv.style.height = "5px";
		mDiv.style.background = "#" + Math.ceil(Math.random() * 0xEFFFFF + 0x0FFFFF).toString(16);//16进制
		mDiv.style.position = "absolute";
		mDiv.style.left = x + "px";
		mDiv.style.top = y + "px";
		document.body.appendChild(mDiv);
		this.ele = mDiv;
		this.xSpeed = Math.random() * 40 - 20;
		this.ySpeed = Math.random() * 40 - 20;
	}
	var mDrop = Boom.prototype.mDrop = function() {
		var self = this;
		var timer = setInterval(function() {
			// 保证抛物线效果  y方向必须++
			self.ySpeed++;
			self.ele.style.left = parseInt(self.ele.offsetLeft) + self.xSpeed + "px";
			self.ele.style.top = parseInt(self.ele.offsetTop) + self.ySpeed + "px";
			if (parseInt(self.ele.offsetLeft) < 0 || self.ele.offsetLeft > document.documentElement.clientWidth || self.ele.offsetTop < 0 || self.ele.offsetTop > document.documentElement.clientHeight - 5) {
				clearInterval(timer);
				document.body.removeChild(self.ele)
			}
		}, 30)
	}
	var faShe = function(evt) {
		var oDiv = document.createElement('div');
		var mEvt = evt || event;
		var x = mEvt.clientX;
		var y = mEvt.clientY;
		oDiv.style.position = 'absolute';
		oDiv.style.background = 'red';
		oDiv.style.width = '3px';
		oDiv.style.height = '30px';
		oDiv.style.left = mEvt.clientX + 'px';
		oDiv.style.top = document.documentElement.clientHeight - 30 + 'px';
		//console.log(document.documentElement.clientHeight)屏幕高度
		document.body.appendChild(oDiv);
		var t = setInterval(function() {
			if (oDiv.offsetTop <= y) {//飞到鼠标点击的位置
				clearInterval(t);
				for (var i = 0; i < 100; i++) {//new100个爆炸对象
					var b = new Boom(mEvt.clientX, mEvt.clientY);
					b.mDrop();
				}
				document.body.removeChild(oDiv);//移除烟火div
			}
			oDiv.style.top = oDiv.offsetTop - 30 + 'px';
		}, 30);
	}
	return {
		Boom: Boom,
		faShe: faShe
	}
})();