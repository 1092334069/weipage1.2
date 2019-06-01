//微页面配置文件
export default {
		
		//引擎配置
		engineConfig:{
			plugin:"pluginList",			//插件
			subPlugin:"subPluginList",		//次级插件
			thirdPlugin:"thirdPluginList", 	//第三级插件
			fourthPlugin:"fourthPluginList"	//第四级插件
		},
		
		//请求地址配置
		urlConfig:{
			uploadImage:"/pic/upload",
			productList : "./libs/json/productList.json",
			weiPageList : "./libs/json/weiPageList.json",
			categoryList : "./libs/json/classifyList.json",
			groupList : "./libs/json/groupList.json",
			functionList:"./libs/json/functionList.json"
		},
		
		//特殊配置
		specialConfig:{
			pluginIdKey:"identity",
			pluginIdTab:"M"
		}
};
		
		