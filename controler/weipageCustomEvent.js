import weipageMap from './weipageMap.js';
import httpRequestConfig from '../config/httpRequestConfig.js';
import weipageAction from './weipageAction.js';

export default {
	
	//解析model映射
	parseMap:function(_this,form,name,value){
		let map = weipageMap.parseMap(value);
		if(map){
			for(let key in map){
				_this.formChange(this,form,key,map[key]);
			}
		}
	},

	//修改httpUrl切换默认httpData
	parseHttpData:function(_this,form,name,value){
		let httpData = "";
		for(let i = 0;i < httpRequestConfig.length;i++){
			if(value == httpRequestConfig[i].url){
				httpData = httpRequestConfig[i].data;
				break;
			}
		}
		_this.formChange(this,form,'httpData',httpData);
	},

	//修改httpUrl同步修改对话框的表单
	parseHttpDialogForm:function(_this,form,name,value){
		let callBackList = [];
		for(let i = 0;i < httpRequestConfig.length;i++){
			if(value == httpRequestConfig[i].url){
				callBackList = httpRequestConfig[i].callBackList;
				break;
			}
		}
		if(callBackList.length){
			weipageAction.editSelectPlugin("subPluginList",[]);
			for(let i = 0;i < callBackList.length;i++){
				let sub = callBackList[i];
				weipageAction.createSubPlugin();
				if(sub.condition){
					weipageAction.editSelectSubPlugin("checkStatus","YES");
					weipageAction.editSelectSubPlugin("condition",sub.condition);
				}
				for(let j = 0;j < sub.formList.length;j++){
					let third = sub.formList[j];
					weipageAction.createThirdPlugin();
					weipageAction.editSelectThirdPlugin("type",third.type);
					weipageAction.editSelectThirdPlugin("key",third.key);
					weipageAction.editSelectThirdPlugin("value",third.value);
				}		
			}			
			_this.option.redrawCallback();
		}		
	}
}