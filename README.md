#简单的模块化
*************
##代码片段  

	var yanhua = (function(){			
		var Boom = function() {

		}
		var mDrop = Boom.prototype.mDrop = function() {}
		var faShe = function(evt) {}
		return {
			Boom: Boom,
			faShe: faShe
		}
	})();  
##总结  

    1.这是立即执行函数写法,不会暴露私有成员,返回函数接口  

    2.另一种不是返回函数接口，而是把接口定义到全局变量中的一个值中，如jquery就是这种风格的，如下:  
    (function(window){
        // ..
        // exports
        window.jQuery = window.$ = jQuery;
    })(window); 

    3.如果在模块内部调用全局变量，必须显式地将其他变量输入模块.
