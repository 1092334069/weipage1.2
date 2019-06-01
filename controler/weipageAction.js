import pluginModel from '../model';
import weipageServer from './weipageServer.js';
import weiPageConfig from '../config/weiPageConfig.js';

let wServer = weipageServer.weipageServer();

//通过特殊配置获取插件id的名称
let pluginIdKey = weiPageConfig.specialConfig.pluginIdKey;

let weiPageAction = {
	
	//初始化微页面
	initWeipage:function(){
		wServer.initWeipage(pluginModel.WEIPAGE);
	},

	//选中微页面
	selectWeipage:function(callBack){
		if(wServer.getPluginList().getLength()){
			wServer.unSelectSubPlugin();
			wServer.unSelectPlugin();
		}
		if(callBack){
			callBack();
		}	
	},

	//编辑微页面
	editWeipage:function(name,value,callBack){
		let param = {};
		param[name] = value;
		wServer.editWeipage(param);
		if(callBack){
			callBack();
		}
	},

	//获取微页面数据
	getWeipageData:function(){
		return wServer.exportData();
	},

	//导出微页面数据
	exportWeipageData:function(){
		return wServer.exportWeipage();
	},

	//获取插件列表
	getPluginList:function(){
		return wServer.getPluginList();
	},

	//创建插件
	createPlugin:function(pluginType,callBack){
		let pluginData = wServer.createPlugin(pluginType);
		let uuid = pluginData.attr("pluginUuid");
		weiPageAction.selectPlugin(uuid);

		let subPluginLength = pluginModel[pluginType].subPluginLength;
		if(subPluginLength){
			let childUuid = "";
			for(let i = 0;i < subPluginLength;i++){
				if(i == 0){
					let temp = weiPageAction.createSubPlugin();
					if(temp){
						childUuid = temp.attr("pluginUuid");
					}				
				}else{
					weiPageAction.createSubPlugin();
				}			
			}
			if(childUuid){
				weiPageAction.selectSubPlugin(childUuid);
			}							
		}
		if(callBack){
			callBack();
		}
	},

	//选中插件
	selectPlugin:function(uuid,callBack){
		wServer.unSelectPlugin();
		wServer.selectPlugin({pluginUuid:uuid});
		if(callBack){
			callBack();
		}
	},

	//编辑选中插件
	editSelectPlugin:function(name,value,callBack){
		let param = {};
		param[name] = value;
		wServer.editSelectPlugin(param);
		if(callBack){
			callBack();
		}
	},

	//移除插件
	removePlugin:function(uuid,callBack){
		wServer.removePlugin({pluginUuid:uuid});
		let pluginList = weiPageAction.getPluginList().val();
		let pluginLength = pluginList.length;
		if(pluginLength > 0){
			let lastPluginUuid = pluginList[pluginLength - 1]["pluginUuid"];		
			weiPageAction.selectPlugin(lastPluginUuid);
		}else{
			weiPageAction.selectWeipage(callBack);	
		}
		if(callBack){
			callBack();
		}
	},

	//获取选中插件数据
	getSelectPluginData:function(){
		return wServer.getSelectPlugin().val();
	},

	//拖拽插件实现排序
	pluginDrop:function(thisDomSelect,nextDomSelect,callBack){
		wServer.pluginDrop(thisDomSelect,nextDomSelect);
		if(callBack){
			callBack();
		}
	},

	//获取次级插件列表
	getSubPluginList:function(){
		return wServer.getSubPluginList();
	},

	//创建次级插件
	createSubPlugin:function(callBack){
		let pluginData = wServer.createSubPlugin();
		weiPageAction.selectSubPlugin(pluginData.attr("pluginUuid"));

		let pluginType = weiPageAction.getSelectPluginData()["pluginType"];
		let thirdPluginLength = pluginModel[pluginType].thirdPluginLength;
		if(thirdPluginLength){
			let childUuid = "";
			for(let i = 0;i < thirdPluginLength;i++){
				if(i == 0){
					let temp = weiPageAction.createThirdPlugin();
					if(temp){
						childUuid = temp.attr("pluginUuid");
					}					
				}else{
					weiPageAction.createThirdPlugin();
				}			
			}
			if(childUuid){
				weiPageAction.selectThirdPlugin(childUuid);
			}							
		}
		if(callBack){
			callBack();
		}

		return pluginData;
	},

	//选中次级插件
	selectSubPlugin:function(uuid,callBack){
		wServer.unSelectSubPlugin();
		wServer.selectSubPlugin({pluginUuid:uuid});
		if(callBack){
			callBack();
		}
	},

	//编辑选中次级插件
	editSelectSubPlugin:function(name,value,callBack){
		let param = {};
		param[name] = value;
		wServer.editSelectSubPlugin(param);			
		if(callBack){
			callBack();
		}	
	},

	//移除次级插件
	removeSubPlugin:function(uuid,callBack){
		wServer.removeSubPlugin({pluginUuid:uuid});
		let subPluginList = weiPageAction.getSubPluginList().val();
		let subPluginLength = subPluginList.length;
		if(subPluginLength > 0){
			let lastPluginUuid = subPluginList[subPluginLength - 1]["pluginUuid"];
			weiPageAction.selectSubPlugin(lastPluginUuid);				
		}
		if(callBack){
			callBack();
		}
	},

	//获取选中次级插件
	getSelectSubPlugin:function(){
		return wServer.getSelectSubPlugin().val();
	},

	//判断选中插件是否有次级插件
	hasSubPlugin:function(){
		if(weiPageAction.getSubPluginList() && weiPageAction.getSubPluginList().getLength()){
			return true;
		}else{
			return false;
		}
	},

	//拖拽子插件实现排序
	subPluginDrop:function(thisDomSelect,nextDomSelect,callBack){
		wServer.subPluginDrop(thisDomSelect,nextDomSelect);
		if(callBack){
			callBack();
		}
	},

	//获取第三级插件列表
	getThirdPluginList:function(){
		return wServer.getThirdPluginList();
	},

	//创建第三级插件
	createThirdPlugin:function(callBack){
		let pluginData = wServer.createThirdPlugin();
		weiPageAction.selectThirdPlugin(pluginData.attr("pluginUuid"));

		let pluginType = weiPageAction.getSelectPluginData()["pluginType"];
		let fourthPluginLength = pluginModel[pluginType].fourthPluginLength;
		if(fourthPluginLength){
			let childUuid = "";
			for(let i = 0;i < fourthPluginLength;i++){
				if(i == 0){
					let temp = weiPageAction.createFourthPlugin();
					if(temp){
						childUuid = temp.attr("pluginUuid");
					}					
				}else{
					weiPageAction.createFourthPlugin();
				}			
			}
			if(childUuid){
				weiPageAction.selectFourthPlugin(childUuid);
			}							
		}

		if(callBack){
			callBack();
		}
		return pluginData;
	},

	//选中第三级插件
	selectThirdPlugin:function(uuid,callBack){
		wServer.unSelectThirdPlugin();
		wServer.selectThirdPlugin({pluginUuid:uuid});
		if(callBack){
			callBack();
		}
	},

	//编辑选中第三级插件
	editSelectThirdPlugin:function(name,value,callBack){
		let param = {};
		param[name] = value;
		wServer.editSelectThirdPlugin(param);			
		if(callBack){
			callBack();
		}	
	},

	//移除第三级插件
	removeThirdPlugin:function(uuid,callBack){
		wServer.removeThirdPlugin({pluginUuid:uuid});
		let thirdPluginList = weiPageAction.getThirdPluginList().val();
		let thirdPluginLength = thirdPluginList.length;
		if(thirdPluginLength > 0){
			let lastPluginUuid = thirdPluginList[thirdPluginLength - 1]["pluginUuid"];
			weiPageAction.selectThirdPlugin(lastPluginUuid);				
		}
		if(callBack){
			callBack();
		}
	},

	//获取选中第三级插件
	getSelectThirdPlugin:function(){
		return wServer.getSelectThirdPlugin().val();
	},

	//判断选中次级插件是否有第三级插件
	hasThirdPlugin:function(){
		if(weiPageAction.getThirdPluginList() && weiPageAction.getThirdPluginList().getLength()){
			return true;
		}else{
			return false;
		}
	},

	//拖拽实现第三级插件排序
	thirdPluginDrop:function(thisDomSelect,nextDomSelect,callBack){
		wServer.thirdPluginDrop(thisDomSelect,nextDomSelect);
		if(callBack){
			callBack();
		}
	},

	//获取第四级插件列表
	getFourthPluginList:function(){
		return wServer.getFourthPluginList();
	},

	//创建第四级插件
	createFourthPlugin:function(callBack){
		let pluginData = wServer.createFourthPlugin();
		weiPageAction.selectFourthPlugin(pluginData.attr("pluginUuid"));
		if(callBack){
			callBack();
		}
		return pluginData;
	},

	//选中第四级插件
	selectFourthPlugin:function(uuid,callBack){
		wServer.unSelectFourthPlugin();
		wServer.selectFourthPlugin({pluginUuid:uuid});
		if(callBack){
			callBack();
		}
	},

	//编辑选中第四级插件
	editSelectFourthPlugin:function(name,value,callBack){
		let param = {};
		param[name] = value;
		wServer.editSelectFourthPlugin(param);			
		if(callBack){
			callBack();
		}	
	},

	//移除第四级插件
	removeFourthPlugin:function(uuid,callBack){
		wServer.removeFourthPlugin({pluginUuid:uuid});
		let fourthPluginList = weiPageAction.getFourthPluginList().val();
		let fourthPluginLength = fourthPluginList.length;
		if(fourthPluginLength > 0){
			let lastPluginUuid = fourthPluginList[fourthPluginLength - 1]["pluginUuid"];
			weiPageAction.selectFourthPlugin(lastPluginUuid);				
		}
		if(callBack){
			callBack();
		}
	},

	//获取选中第四级插件
	getSelectFourthPlugin:function(){
		return wServer.getSelectFourthPlugin().val();
	},

	//判断选中第三级插件是否有第四级插件
	hasFourthPlugin:function(){
		if(weiPageAction.getFourthPluginList() && weiPageAction.getFourthPluginList().getLength()){
			return true;
		}else{
			return false;
		}
	},

	//拖拽实现第四级插件排序
	fourthPluginDrop:function(thisDomSelect,nextDomSelect,callBack){
		wServer.fourthPluginDrop(thisDomSelect,nextDomSelect);
		if(callBack){
			callBack();
		}
	},

	//根据identity查找
	selectByIdentity:function(identityStr){
		if(!identityStr){
			return null;
		}
		let identityList = identityStr.split(",");
		let paramList = [];
		for(let i = 0;i < identityList.length;i++){
			let param = {};
			param[pluginIdKey] = identityList[i];
			paramList.push(param);
		}
		return wServer.selectByParam(paramList);
	}
};

export default weiPageAction;