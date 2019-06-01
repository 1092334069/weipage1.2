import './view';

import './libs/css/reset.css';
import './libs/css/yui.css';
import './mobile.css';

import resuestData from './data.js';
import clockJs from './controler/clock.js';

let weipageData = JSON.parse(resuestData.data);

let weipage = new Vue({
	el:"#weipage",
	data:{
		weipageData:weipageData
	},
	methods:{
		changeWeipageData:function(option){
			if(option){
				option["idList"] = option.id.split(",");
				if(option["idList"].length > 0){
					for(let i = 0;i < weipageData.pluginList.length;i++){
						let plugin = weipageData.pluginList[i];
						if(plugin.identity == option["idList"][0]){
							if(option["idList"].length == 1){
								plugin[option.key] = option.value;
							}else{
								for(let j = 0;j < plugin.subPluginList.length;j++){
									let subPlugin = plugin.subPluginList[j];
									if(subPlugin.identity == option["idList"][1]){
										subPlugin[option.key] = option.value;
									}
								}
							}						
						}
					}
				}				
			}
		}
	}
})