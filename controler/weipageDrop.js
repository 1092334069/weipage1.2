let dropData = {};

let weipageDrop = function(option){
	this.option = option;
};

weipageDrop.prototype.init = function(){
	this.initDropData();
	this.bindEvent();
};

//初始化拖拽数据
weipageDrop.prototype.initDropData = function(){
	dropData = {	
		mobilePageWidth: $(this.option.selector).width(),
		mouseDown: false,
		parentOffsetTop: 0,
		parentOffsetLeft: 0,
		clientY: 0,
		clientX: 0,
		offsetY: 0,
		offsetX: 0,
		hasTempDom:false,
		isCreateTempDom: false,
		thisDom: undefined,
		sourceDom: undefined,
		tempDom: undefined,
		pluginWidth: 0,
		pluginHeight: 0,
		prevPluginList : [],
		nextPluginList : [],
		prevPlugin: undefined,
		nextPlugin: undefined,
		downY: 0,
		downX: 0,
		moveY: 0,
		moveX: 0
	};
};

//绑定事件
weipageDrop.prototype.bindEvent = function(){
	let _this = this;

	$(document).on("mousedown",".drop_wrap",function(e){
		if($(this).hasClass("current")){
			if($(this).hasClass("drop_copy_wrap")){
				dropData.hasTempDom = true;
			}
			_this.mouseDownEvent(this,e);
			e.stopPropagation();
		}
	});

	$(document).on("mousemove",".drop_wrap",function(e){
		if(dropData.mouseDown){
			_this.dropEvent(this,e);						
		}	
		e.stopPropagation();
	});

	$(document).on("mouseup",function(e){
		if(dropData.mouseDown){			
			$(dropData.thisDom).removeClass("droping");
			if(dropData.hasTempDom){			
				_this.pluginDropSort();
				_this.removeTempPlugin();
			}else{
				_this.pluginUnDropSort();
			}
			_this.initDropData();
		}
	});
};

//按下鼠标事件处理
weipageDrop.prototype.mouseDownEvent = function(_this,e){
	dropData.mouseDown = true;
	dropData.thisDom = $(_this);
		
	dropData.downY = e.clientY;
	dropData.downX = e.clientX;
	dropData.offsetY = e.offsetY;
	dropData.offsetX = e.offsetX;

	let offset = $(_this).offset();
	let position = $(_this).position();
	dropData.parentOffsetTop = offset.top - position.top;
	dropData.parentOffsetLeft = offset.left - position.left;

	if(dropData.hasTempDom){
		dropData.sourceDom = $(_this).clone(true);
		this.initBrotherPlugin();
	}
};

//拖拽事件处理
weipageDrop.prototype.dropEvent = function(_this,e){
	dropData.clientY = e.clientY;
	dropData.clientX = e.clientX;
	if(!dropData.isCreateTempDom){		
		this.createTempPlugin();
	}
	$(dropData.thisDom).addClass("droping").css({"top":dropData.clientY-dropData.offsetY-dropData.parentOffsetTop,"left":dropData.clientX-dropData.offsetX-dropData.parentOffsetLeft,"height":dropData.pluginHeight,"width":dropData.pluginWidth});
	if(dropData.hasTempDom){
		this.countPlace();
	}
};

//计算拖拽相应位置
weipageDrop.prototype.countPlace = function(){
	let moveX = dropData.clientX - dropData.downX - dropData.moveX;
	let moveY = dropData.clientY - dropData.downY - dropData.moveY;
	let moveDistance = moveX + moveY;
	let prevDistance = 0;
	let nextDistance = 0;
	if(dropData.prevPlugin){
		prevDistance = dropData.prevPlugin.height + dropData.prevPlugin.width;
	}
	if(dropData.nextPlugin){
		nextDistance = dropData.nextPlugin.height + dropData.nextPlugin.width;
	}
	if(nextDistance && (moveDistance > nextDistance/3 || moveX > dropData.nextPlugin.width + dropData.pluginWidth || moveY > dropData.nextPlugin.height + dropData.pluginHeight)){
			
		//向后替换
		if(dropData.nextPlugin){
			dropData.moveY += dropData.nextPlugin.height;				
			if(dropData.nextPlugin.width <= dropData.mobilePageWidth/2){
				dropData.moveX += dropData.nextPlugin.width;
			}
		}			
			
		let copyTemp = $(dropData.tempDom).clone(true);
		$(dropData.nextPlugin.dom).after(copyTemp);
		$(dropData.tempDom).remove();
		dropData.tempDom = copyTemp;

		this.popNextPlugin();

	}else if(prevDistance && (-moveDistance > prevDistance/3 || -moveX > dropData.prevPlugin.width || -moveY > dropData.prevPlugin.height)){
			
		//向前替换
		if(dropData.prevPlugin){
			dropData.moveY -= dropData.prevPlugin.height;
			if(dropData.prevPlugin.width <= dropData.mobilePageWidth/2){
				dropData.moveX += dropData.prevPlugin.width;
			}
		}			
			
		let copyTemp = $(dropData.tempDom).clone(true);
		$(dropData.prevPlugin.dom).before(copyTemp);
		$(dropData.tempDom).remove();
		dropData.tempDom = copyTemp;

		this.popPrevPlugin();
	}
};

//初始化兄弟节点数据
weipageDrop.prototype.initBrotherPlugin = function(){
	let prevDomList = $(dropData.thisDom).prevAll();
	if(prevDomList && prevDomList.length){
		for(let i = prevDomList.length-1 ; i >= 0;i--){
			let prevDom = $(prevDomList).eq(i);
			dropData.prevPluginList.push({
				dom : prevDom,
				height : $(prevDom).height(),
				width : $(prevDom).width()
			})
		}
		dropData.prevPlugin = dropData.prevPluginList.pop();
	}else{
		dropData.prevPluginList = [];
	}
	let nextDomList = $(dropData.thisDom).nextAll();
	if(nextDomList && nextDomList.length){
		for(let i = nextDomList.length -1; i >= 0;i--){
			let prevDom = $(nextDomList).eq(i);
			dropData.nextPluginList.push({
				dom : prevDom,
				height : $(prevDom).height(),
				width : $(prevDom).width()
			})
		}
		dropData.nextPlugin = dropData.nextPluginList.pop();
	}else{
		dropData.nextPluginList = [];
	}
};

//向前替换插件数据更新
weipageDrop.prototype.popPrevPlugin = function(){
	if(dropData.prevPluginList.length){
		if(dropData.nextPlugin){
			dropData.nextPluginList.push(dropData.nextPlugin);
		}			
		dropData.nextPlugin =dropData.prevPlugin;
		dropData.prevPlugin = dropData.prevPluginList.pop();			
	}else if(dropData.prevPlugin){
		if(dropData.nextPlugin){
			dropData.nextPluginList.push(dropData.nextPlugin);
		}		
		dropData.nextPlugin = dropData.prevPlugin;
		dropData.prevPlugin = undefined;
	}
};

//向后替换插件数据更新
weipageDrop.prototype.popNextPlugin = function(){
	if(dropData.nextPluginList.length){
		if(dropData.prevPlugin){
			dropData.prevPluginList.push(dropData.prevPlugin);
		}			
		dropData.prevPlugin = dropData.nextPlugin;
		dropData.nextPlugin = dropData.nextPluginList.pop();
	}else if(dropData.nextPlugin){
		if(dropData.prevPlugin){
			dropData.prevPluginList.push(dropData.prevPlugin);
		}			
		dropData.prevPlugin =dropData.nextPlugin;
		dropData.nextPlugin = undefined;
	}
};

//创建临时节点
weipageDrop.prototype.createTempPlugin = function(){
	dropData.isCreateTempDom = true;
	dropData.pluginHeight = $(dropData.thisDom).height();
	dropData.pluginWidth = $(dropData.thisDom).width();
	dropData.tempDom = $(dropData.sourceDom).clone(true);
	$(dropData.tempDom).addClass("tempPlugin").removeAttr("id");
	$(dropData.thisDom).before(dropData.tempDom);
};

//移除临时插件
weipageDrop.prototype.removeTempPlugin = function(){
	dropData.isCreateTempDom = false;
	$(dropData.tempDom).remove();
};

//插件拖拽排序
weipageDrop.prototype.pluginDropSort = function(){
	if(dropData.tempDom){
		let thisDomSelect = {
			pluginUuid : $(dropData.thisDom).attr("data-pluginuuid")
		};
		let nextDomSelect = undefined;
		let nextDom = $(dropData.tempDom).next();
		if(nextDom && nextDom.length){
			let nextUuid = $(nextDom).attr("data-pluginuuid");
			if(nextUuid == thisDomSelect.pluginUuid){
				return;
			}
			nextDomSelect = {
				pluginUuid : nextUuid
			};
		}
			
		if($(dropData.tempDom).hasClass("plugin_wrap")){
			this.option.pluginDropCallback(thisDomSelect,nextDomSelect);
		}else if($(dropData.tempDom).hasClass("subPlugin_wrap")){
			this.option.subPluginDropCallback(thisDomSelect,nextDomSelect);
		}else if($(dropData.tempDom).hasClass("thirdPlugin_wrap")){
			this.option.thirdPluginDropCallback(thisDomSelect,nextDomSelect);
		}else if($(dropData.tempDom).hasClass("fourthPlugin_wrap")){
			this.option.fourthPluginDropCallback(thisDomSelect,nextDomSelect);
		}						
	}
};

weipageDrop.prototype.pluginUnDropSort = function(){
	$(dropData.thisDom).removeClass("droping");
	let thisDomSelect = {
		pluginUuid : $(dropData.thisDom).attr("data-pluginuuid")
	};
	let param = $(dropData.thisDom).position();
	this.option.unDropSortCallback(thisDomSelect,param);
};

export default function weipageDrop(option){
	let temp = new weipageDrop(option);
	temp.init();
	return temp;
}