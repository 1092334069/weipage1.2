import weiPageConfig from '../config/weiPageConfig.js';
import weipageAction from './weipageAction.js';
import map from '../map';

//通过特殊配置获取插件id的名称
let pluginIdKey = weiPageConfig.specialConfig.pluginIdKey;

let weipageMap = {
	parsePluginType:function(identity){
		let param = {};
		param[pluginIdKey] = identity;
		let plugin = weipageAction.getPluginList().find(param);
		let pluginType = plugin.attr("pluginType");
		return pluginType;
	},
	parseMap:function(modelStr){
		if(!modelStr){
			return null;
		}
		let modelList = modelStr.split(",");
		let selectResult = weipageAction.selectByIdentity(modelStr);
		if(modelList.length && selectResult){
			let pluginType = weipageMap.parsePluginType(modelList[0]);
			if(pluginType){
				let result = {modelType:pluginType};
				switch(modelList.length){
					case 1:result["modelSubType"] = "pluginList";break;
					case 2:result["modelSubType"] = "subPluginList";break;
				}
				return result;			
			}else{
				return null;
			}
		}else{
			return null;
		}
	}
};

export default weipageMap;