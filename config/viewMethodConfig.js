import weiPageConfig from './weiPageConfig.js';

export default {
	parsePluginSelect:function(pluginSelect){
		if(pluginSelect){
			return "current";
		}else{
			return "";
		}
	},
	parsePluginStyle:function(backgroundColor,backgroundImage){
		if(backgroundColor && backgroundImage){
			return 'backgroundColor:' + backgroundColor + ';backgroundImage:url("' + backgroundImage + '")';
		}else if(backgroundColor){
			return 'backgroundColor:' + backgroundColor;
		}else if(backgroundImage){
			return 'backgroundImage:url("' + backgroundImage + '")';
		}else{
			return '';
		}
	},
	parseProductImage:function(picUrl){
		if(picUrl){
			return picUrl;
		}else{
			return './libs/img/product.png';
		}
	},
	parseBannerImage:function(picUrl){
		if(picUrl){
			return picUrl;
		}else{
			return './libs/img/banner.png';
		}
	},
	parseUploadImage:function(picUrl){
		if(picUrl){
			return picUrl;
		}else{
			return './libs/img/add_picture.png';
		}
	},
	checkTheSame:function(a,b){
		if(a && b){
			if(a == b){
				return true;
			}else{
				return false;
			}
		}else if(!a && !b){
			return true;
		}else{
			return false;
		}
	}
}