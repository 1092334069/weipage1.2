	import dataEngine from '../libs/js/dataEngine.js';
	import weiPageConfig from '../config/weiPageConfig.js';
	import pluginModel from '../model';

	let weipageServer = function(){	
			
	};
	
	//插件序号，用户生成模块id
	let pluginIndex = 1000;	


	//插件通用唯一标识，方便快速查找使用，该字段最后导出的时候会被过滤掉				
	let pluginUuid = 0;

	//通过特殊配置获取插件id的名称
	let pluginIdKey = weiPageConfig.specialConfig.pluginIdKey;		

	//通过特俗配置获取插件id标识							
	let pluginIdTab = weiPageConfig.specialConfig.pluginIdTab;					
	
	//通过引擎配置读取插件配置选择器名称
	let pluginSelector = weiPageConfig.engineConfig.plugin;

	//通过引擎配置读取次级插件配置选择器名称										
	let subPluginSelector = weiPageConfig.engineConfig.subPlugin;

	//通过引擎配置读取第三级插件配置选择器名称
	let thirdPluginSelector = weiPageConfig.engineConfig.thirdPlugin;

	//通过引擎配置读取第四级插件配置选择器名称
	let fourthPluginSelector = weiPageConfig.engineConfig.fourthPlugin;							
	
	//创建微页面
	weipageServer.prototype.createWeipage = function(data){
		let initData;
		if(data){
			initData = data;
		}else{
			
			//从配置文件读取初始化数据
			initData = pluginModel.weipage;											
		}
		
		this.setInitData(initData);
	};	
	
	//编辑微页面
	weipageServer.prototype.editWeipage = function(obj){
		this.$().attr(obj);
	};
	
	//获取微页面
	weipageServer.prototype.getWeipage = function(){
		return this.$().val();
	};	
	
	//创建插件唯一标识id
	weipageServer.prototype.createUuid = function(pluginData){
		if(pluginData && typeof pluginData == "object"){
			pluginUuid++;		
			let resultData = {};
			for(let key in pluginData){
				resultData[key] = pluginData[key];
			}
			resultData["pluginUuid"] = pluginUuid;
			return resultData;
		}		
	};
	
	//创建插件id（该方法用于给返回的插件id给导航插件使用，插件id最终会导出，而pluginUuid最终导出会被当做临时使用字段滤除掉）
	weipageServer.prototype.createPluginId = function(pluginData){								
		pluginIndex ++;
		let resultData = {};
		
		for(let key in pluginData){
			resultData[key] = pluginData[key];		
		}

		resultData[pluginIdKey] = pluginIdTab + pluginIndex;
		
		return resultData;
	};
	
	//创建插件
	weipageServer.prototype.createPlugin = function(plugintype){
		if(!plugintype){
			return;
		}

		//通过插件配置读取插件数据
		let pluginInitData = JSON.parse(JSON.stringify(pluginModel[plugintype].plugin));				
		
		pluginInitData = this.createPluginId(pluginInitData);				
		let pluginData = this.createUuid(pluginInitData);

		pluginData["pluginSelect"] = false;
		
		let resultList = this.$(pluginSelector).add(pluginData);
		
		return resultList.find({pluginUuid:pluginData.pluginUuid});
	};
	
	//选中插件
	weipageServer.prototype.selectPlugin = function(selectParam){	
		this.$(pluginSelector).find(selectParam).attr({pluginSelect:true});
	};
	
	//让所有插件失去选中
	weipageServer.prototype.unSelectPlugin = function(){
		this.$(pluginSelector).attr({pluginSelect:false});
	};
	
	//删除插件
	weipageServer.prototype.removePlugin = function(selectParam){
		let deleteData = this.$(pluginSelector).find(selectParam).val();
		this.$(pluginSelector).remove(selectParam);
		return deleteData;
	};
	
	//编辑选中插件
	weipageServer.prototype.editSelectPlugin = function(parameter,isdeep){
		this.$(pluginSelector).find({pluginSelect:true}).attr(parameter,isdeep);
	};
	
	//获取插件列表
	weipageServer.prototype.getPluginList = function(){
		return this.$(pluginSelector);
	};
	
	//获取选中插件
	weipageServer.prototype.getSelectPlugin = function(){
		return this.$(pluginSelector).find({pluginSelect:true});
	};
	
	/* 拖拽插件实现排序
	 * selectParam	拖拽的插件
	 * resultNextSelectParam 拖拽目的地的下一个插件
	 * */
	weipageServer.prototype.pluginDrop = function(selectParam,resultNextSelectParam){
		let pluginList = this.$(pluginSelector);
		let startIndex = pluginList.find(selectParam).index();
		if(resultNextSelectParam){
			let endIndex = pluginList.find(resultNextSelectParam).index();
			this.changeSort(pluginList.attr(),startIndex,endIndex);
		}else{
			this.changeSort(pluginList.attr(),startIndex);
		}
		return this;
	};
	
	//创建次级插件
	weipageServer.prototype.createSubPlugin = function(param){
		let pluginData = this.$(pluginSelector).find({pluginSelect:true});		
		if(!pluginData){
			console.log("找不到选中的插件")
			return;
		}

		let subPluginInitData;		
		if(param){
			subPluginInitData = param;
		}else{
			let plugintype = pluginData.attr("pluginType");
			subPluginInitData = JSON.parse(JSON.stringify(pluginModel[plugintype].subPlugin));				
		}
		
		subPluginInitData = this.createPluginId(subPluginInitData);
		let subPluginData = this.createUuid(subPluginInitData);
		subPluginData["pluginSelect"] = false;

		let resultList = pluginData.find(subPluginSelector).add(subPluginData);
		
		return resultList.find({pluginUuid:subPluginData.pluginUuid});			
	};
	
	//选中次级插件
	weipageServer.prototype.selectSubPlugin = function(selectParam){
		let subPlugin = this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector);		
		subPlugin.find(selectParam).attr({pluginSelect:true});
		
	};
	
	//让选中的插件的所有次级插件失去选中
	weipageServer.prototype.unSelectSubPlugin = function(){
		let subPlugin = this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector);
		let len =  subPlugin.getLength();
		for(let i = 0; i < len; i++){
			subPlugin.find(i).attr({pluginSelect:false});
		}	
	};
	
	//移除次级插件
	weipageServer.prototype.removeSubPlugin = function(selectParam){
		let deleteData = this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find(selectParam).val();
		this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).remove(selectParam);
		return deleteData;
	};
	
	//编辑选中次级插件
	weipageServer.prototype.editSelectSubPlugin = function(parameter){
		this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).attr(parameter);
	};
	
	//获取次级插件列表
	weipageServer.prototype.getSubPluginList = function(){
		return this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector);
	};
	
	//获取选中次级插件
	weipageServer.prototype.getSelectSubPlugin = function(){
		return this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true});
	};
	
	/* 拖拽次级插件实现排序
	 * selectParam	拖拽的插件
	 * resultNextSelectParam 拖拽目的地的下一个插件
	 * */
	weipageServer.prototype.subPluginDrop = function(selectParam,resultNextSelectParam){
		let subPluginList = this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector);
		let startIndex = subPluginList.find(selectParam).index();
		if(resultNextSelectParam){
			let endIndex = subPluginList.find(resultNextSelectParam).index();
			this.changeSort(subPluginList.attr(),startIndex,endIndex);
		}else{
			this.changeSort(subPluginList.attr(),startIndex);
		}
		return this;
	};
	
	//编辑所有次级插件
	weipageServer.prototype.editAllSubPlugin = function(param){
		let pluginList = this.$(pluginSelector);
		for(let i = 0; i < pluginList.getLength();i++){
			if(pluginList.find(i).attr(subPluginSelector)){
				let subPluginList = pluginList.find(i).find(subPluginSelector);
				if(subPluginList.getLength() > 0){
					subPluginList.attr(param);
				}	
			}					
		}
		return this;
	};

	//创建第三级插件
	weipageServer.prototype.createThirdPlugin = function(param){
		let pluginData = this.$(pluginSelector).find({pluginSelect:true});
		if(!pluginData){
			console.log("找不到选中的插件")
			return;
		}
		let subPluginData = pluginData.find(subPluginSelector).find({pluginSelect:true});	
		if(!subPluginData){
			console.log("找不到选中的次级插件")
			return;
		}			
				
		let thirdPluginInitData;		
		if(param){
			thirdPluginInitData = param;
		}else{
			let plugintype = pluginData.attr("pluginType");
			thirdPluginInitData = JSON.parse(JSON.stringify(pluginModel[plugintype].thirdPlugin));
		}
		
		thirdPluginInitData = this.createPluginId(thirdPluginInitData);
		let thirdPluginData = this.createUuid(thirdPluginInitData);
		thirdPluginData["pluginSelect"] = false;

		let resultList = subPluginData.find(thirdPluginSelector).add(thirdPluginData);
		
		return resultList.find({pluginUuid:thirdPluginData.pluginUuid});			
	};

	//选中第三级插件
	weipageServer.prototype.selectThirdPlugin = function(selectParam){
		let thirdPlugin = this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector);		
		thirdPlugin.find(selectParam).attr({pluginSelect:true});	
	};

	//让选中的次级插件的所有第三级插件失去选中
	weipageServer.prototype.unSelectThirdPlugin = function(){
		let thirdPlugin = this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector);
		let len =  thirdPlugin.getLength();
		for(let i = 0; i < len; i++){
			thirdPlugin.find(i).attr({pluginSelect:false});			
		}	
	};

	//移除第三级插件
	weipageServer.prototype.removeThirdPlugin = function(selectParam){
		let deleteData = this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector).find(selectParam).val();
		this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector).remove(selectParam);
		return deleteData;
	};

	//编辑选中第三级插件
	weipageServer.prototype.editSelectThirdPlugin = function(parameter){
		this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector).find({pluginSelect:true}).attr(parameter);
	};

	//获取第三级插件列表
	weipageServer.prototype.getThirdPluginList = function(){
		return this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector);
	};

	//获取选中第三级插件
	weipageServer.prototype.getSelectThirdPlugin = function(){
		return this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector).find({pluginSelect:true});
	};

	/* 拖拽第三级插件实现排序
	 * selectParam	拖拽的插件
	 * resultNextSelectParam 拖拽目的地的下一个插件
	 * */
	weipageServer.prototype.thirdPluginDrop = function(selectParam,resultNextSelectParam){
		let thirdPluginList = this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector);
		let startIndex = thirdPluginList.find(selectParam).index();
		if(resultNextSelectParam){
			let endIndex = thirdPluginList.find(resultNextSelectParam).index();
			this.changeSort(thirdPluginList.attr(),startIndex,endIndex);
		}else{
			this.changeSort(thirdPluginList.attr(),startIndex);
		}
		return this;
	};

	//编辑所有第三级插件
	weipageServer.prototype.editAllThirdPlugin = function(param){
		let subPluginList = this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector);
		for(let i = 0; i < subPluginList.getLength();i++){
			if(subPluginList.find(i).attr(thirdPluginSelector)){
				let thirdPluginList = subPluginList.find(i).find(thirdPluginSelector);
				if(thirdPluginList.getLength() > 0){
					thirdPluginList.attr(param);
				}	
			}					
		}
		return this;
	};

	//创建第四级插件
	weipageServer.prototype.createFourthPlugin = function(param){
		let pluginData = this.$(pluginSelector).find({pluginSelect:true});
		if(!pluginData){
			console.log("找不到选中的插件")
			return;
		}
		let subPluginData = pluginData.find(subPluginSelector).find({pluginSelect:true});	
		if(!subPluginData){
			console.log("找不到选中的次级插件")
			return;
		}
		let thirdPluginData = subPluginData.find(thirdPluginSelector).find({pluginSelect:true});
		if(!thirdPluginData){
			console.log("找不到选中的第三级插件")
			return;
		}			
				
		let fourthPluginInitData;		
		if(param){
			fourthPluginInitData = param;
		}else{
			let plugintype = pluginData.attr("pluginType");
			fourthPluginInitData = JSON.parse(JSON.stringify(pluginModel[plugintype].fourthPlugin));
		}
		
		fourthPluginInitData = this.createPluginId(fourthPluginInitData);
		let fourthPluginData = this.createUuid(fourthPluginInitData);
		fourthPluginData["pluginSelect"] = false;

		let resultList = thirdPluginData.find(fourthPluginSelector).add(fourthPluginData);
		
		return resultList.find({pluginUuid:fourthPluginData.pluginUuid});			
	};

	//选中第四级插件
	weipageServer.prototype.selectFourthPlugin = function(selectParam){
		let fourthPlugin = this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector).find({pluginSelect:true}).find(fourthPluginSelector);		
		fourthPlugin.find(selectParam).attr({pluginSelect:true});	
	};

	//让选中的第三级插件的所有第四级插件失去选中
	weipageServer.prototype.unSelectFourthPlugin = function(){
		let fourthPlugin = this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector).find({pluginSelect:true}).find(fourthPluginSelector);
		let len =  fourthPlugin.getLength();
		for(let i = 0; i < len; i++){
			fourthPlugin.find(i).attr({pluginSelect:false});			
		}	
	};

	//移除第四级插件
	weipageServer.prototype.removeFourthPlugin = function(selectParam){
		let deleteData = this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector).find({pluginSelect:true}).find(fourthPluginSelector).find(selectParam).val();
		this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector).find({pluginSelect:true}).find(fourthPluginSelector).remove(selectParam);
		return deleteData;
	};

	//编辑选中第四级插件
	weipageServer.prototype.editSelectFourthPlugin = function(parameter){
		this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector).find({pluginSelect:true}).find(fourthPluginSelector).find({pluginSelect:true}).attr(parameter);
	};

	//获取第四级插件列表
	weipageServer.prototype.getFourthPluginList = function(){
		return this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector).find({pluginSelect:true}).find(fourthPluginSelector);
	};

	//获取选中第四级插件
	weipageServer.prototype.getSelectFourthPlugin = function(){
		return this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector).find({pluginSelect:true}).find(fourthPluginSelector).find({pluginSelect:true});
	};

	/* 拖拽第四级插件实现排序
	 * selectParam	拖拽的插件
	 * resultNextSelectParam 拖拽目的地的下一个插件
	 * */
	weipageServer.prototype.fourthPluginDrop = function(selectParam,resultNextSelectParam){
		let fourthPluginList = this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector).find({pluginSelect:true}).find(fourthPluginSelector);
		let startIndex = fourthPluginList.find(selectParam).index();
		if(resultNextSelectParam){
			let endIndex = fourthPluginList.find(resultNextSelectParam).index();
			this.changeSort(fourthPluginList.attr(),startIndex,endIndex);
		}else{
			this.changeSort(fourthPluginList.attr(),startIndex);
		}
		return this;
	};

	//编辑所有第四级插件
	weipageServer.prototype.editAllFourthPlugin = function(param){
		let thirdPluginList = this.$(pluginSelector).find({pluginSelect:true}).find(subPluginSelector).find({pluginSelect:true}).find(thirdPluginSelector);
		for(let i = 0; i < thirdPluginList.getLength();i++){
			if(thirdPluginList.find(i).attr(fourthPluginSelector)){
				let fourthPluginList = thirdPluginList.find(i).find(fourthPluginSelector);
				if(fourthPluginList.getLength() > 0){
					fourthPluginList.attr(param);
				}	
			}					
		}
		return this;
	};

	//通过条件查询结果
	weipageServer.prototype.selectByParam = function(param){
		if(!param){
			return null;
		}
		let selectList = [pluginSelector,subPluginSelector,thirdPluginSelector,fourthPluginSelector];
		if(Array.isArray(param)){
			let result = this.$();
			for(let i = 0;i < param.length;i++){
				if(typeof param[i] != "object"){
					return null;
				}
				if(result.find(selectList[i])){
					result = result.find(selectList[i]).find(param[i]);
				}else{
					return null;
				}			
			}
			return result;
		}else if(typeof param == "object"){
			return this.$(pluginSelector).find(param);
		}else{
			return null
		}
	};

	//初始化微页面
	weipageServer.prototype.initWeipage = function(initData){
		
		//初始化插件序号
		pluginIndex = initData.pluginIndex;

		//先创建uuid再进行初始化
		if(initData){
			if(initData[pluginSelector] && Array.isArray(initData[pluginSelector])){
				for(let i = 0; i < initData[pluginSelector].length; i++){
					initData[pluginSelector][i] = this.createUuid(initData[pluginSelector][i]);
					if(initData[pluginSelector][i][subPluginSelector] && Array.isArray(initData[pluginSelector][i][subPluginSelector])){
						for(let j = 0; j < initData[pluginSelector][i][subPluginSelector].length;j++){
							initData[pluginSelector][i][subPluginSelector][j] = this.createUuid(initData[pluginSelector][i][subPluginSelector][j]);
							if(initData[pluginSelector][i][subPluginSelector][j][thirdPluginSelector] && Array.isArray(initData[pluginSelector][i][subPluginSelector][j][thirdPluginSelector])){
								for(let k = 0; k < initData[pluginSelector][i][subPluginSelector][j][thirdPluginSelector].length;k++){
									initData[pluginSelector][i][subPluginSelector][j][thirdPluginSelector][k] = this.createUuid(initData[pluginSelector][i][subPluginSelector][j][thirdPluginSelector][k]);
									if(initData[pluginSelector][i][subPluginSelector][j][thirdPluginSelector][k][fourthPluginSelector] && Array.isArray(initData[pluginSelector][i][subPluginSelector][j][thirdPluginSelector][k][fourthPluginSelector])){
										for(let l = 0;l < initData[pluginSelector][i][subPluginSelector][j][thirdPluginSelector][k][fourthPluginSelector].length;l++){
											initData[pluginSelector][i][subPluginSelector][j][thirdPluginSelector][k][fourthPluginSelector][l] = this.createUuid(initData[pluginSelector][i][subPluginSelector][j][thirdPluginSelector][k][fourthPluginSelector][l]);
										}
									}
								}
							}	
						}
					}
				}				
			}
		}
		this.createWeipage(initData);
		
		return this.$();
	};
	
	//导出微页面
	weipageServer.prototype.exportWeipage = function(){
		//保存插件序号
		this.editWeipage({pluginIndex:pluginIndex});

		//滤除掉微页面使用的临时字段
		this.setDisableProperty(["pluginUuid","pluginSelect"]);										
		return this.exportData();
	};
	
	//继承工厂(前继承后)
	function inheritFactory(weipagePlugin,dataEnginePlugin){
		weipageServer.prototype = dataEnginePlugin;
		for(let key in weipagePlugin){
			weipageServer.prototype[key] = weipagePlugin[key];
		}	
		return new weipageServer();
	}

	export default {
		weipageServer:function(){
			let weipagePlugin = new weipageServer();		
			let dataEnginePlugin = dataEngine.dataEngine();
			
			let resultPlugin = inheritFactory(weipagePlugin,dataEnginePlugin);
			
			return resultPlugin;
		}
	}