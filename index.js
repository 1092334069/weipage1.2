import './plugin';

import './libs/css/reset.css';
import './libs/css/yui.css';
import './index.css';

import pluginModel from './model';
import menuList from './config/menuListConfig.js';
import weipageAction from './controler/weipageAction.js';
import weipageEvent from './controler/weipageEvent.js';
import weipageDrop from './controler/weipageDrop.js';

weipageAction.initWeipage();

let weipage = new Vue({
	el:"#weipage",
	data:{
		weipageData:pluginModel.WEIPAGE
	},
	methods:{
		redrawView:function(){
			this.weipageData = weipageAction.getWeipageData();
		},
		selectWeipage:function(){
			weipageAction.selectWeipage();
			weipageForm.redrawWeipage();
		}
	}
})

let weipageForm = new Vue({
	el:"#weipageForm",
	data:{		
		weipageData:pluginModel.WEIPAGE,
		pluginData:{},
		subPluginData:{},
		thirdPluginData:{},
		fourthPluginData:{}
	},
	methods:{
		redrawWeipage:function(){
			this.weipageData = weipageAction.getWeipageData();
			this.pluginData = null;
			this.subPluginData = null;
		},
		redrawPlugin:function(){
			this.pluginData = weipageAction.getSelectPluginData();
			this.weipageData = null;
		},
		redrawSubPlugin:function(){
			if(weipageAction.hasSubPlugin()){
				this.subPluginData = weipageAction.getSelectSubPlugin();
			}else{
				this.subPluginData = null;
			}	
		},
		redrawThirdPlugin:function(){
			if(weipageAction.hasThirdPlugin()){
				this.thirdPluginData = weipageAction.getSelectThirdPlugin();
			}else{
				this.thirdPluginData = null;
			}
		},
		redrawFourthPlugin:function(){
			if(weipageAction.hasFourthPlugin()){
				this.fourthPluginData = weipageAction.getSelectFourthPlugin();
			}else{
				this.fourthPluginData = null;
			}
		},
		redrawForm:function(){
			this.redrawPlugin();
			this.redrawSubPlugin();
			this.redrawThirdPlugin();
			this.redrawFourthPlugin();
			if(!this.pluginData){
				this.redrawWeipage();
			}
		}
	}
});

let weipageCreate = new Vue({
	el:"#weipageCreate",
	data:{
		pluginList:menuList
	},
	methods:{
		createPlugin:function(e){
			if(e && e.target && e.target.dataset && e.target.dataset.plugintype){
				weipageAction.createPlugin(e.target.dataset.plugintype,function(){
					weipage.redrawView();
					weipageForm.redrawForm();
				});
			}
		},
		exportData:function(){
			console.log(JSON.stringify(weipageAction.exportWeipageData()));
		}
	}
})

//重新绘制回调
function redrawCallback(){
	weipage.redrawView();
	weipageForm.redrawForm();
}

weipageEvent({
	selectPluginCallback:function(e){
		let uuid = $(this).attr("data-pluginuuid");
		weipageAction.selectPlugin(uuid,redrawCallback);		
	},
	selectSubPluginCallback:function(){
		let uuid = $(this).attr("data-pluginuuid");
		weipageAction.selectSubPlugin(uuid,redrawCallback);
	},
	selectThirdPluginCallback:function(){
		let uuid = $(this).attr("data-pluginuuid");
		weipageAction.selectThirdPlugin(uuid,redrawCallback);
	},
	selectFourthPluginCallback:function(){
		let uuid = $(this).attr("data-pluginuuid");
		weipageAction.selectFourthPlugin(uuid,redrawCallback);
	},
	editWeipageCallback:function(name,value){
		weipageAction.editWeipage(name,value,redrawCallback);
	},
	editPluginCallback:function(name,value){
		weipageAction.editSelectPlugin(name,value,redrawCallback);
	},
	editSubpluginCallback:function(name,value){
		weipageAction.editSelectSubPlugin(name,value,redrawCallback);
	},
	editThirdpluginCallback:function(name,value){
		weipageAction.editSelectThirdPlugin(name,value,redrawCallback);
	},
	editFourthPluginCallback:function(name,value){
		weipageAction.editSelectFourthPlugin(name,value,redrawCallback);
	},
	removePluginCallback:function(){
		let uuid = $(this).attr("data-pluginuuid");
		weipageAction.removePlugin(uuid,redrawCallback);
	},
	removeSubPluginCallback:function(){
		let uuid = $(this).attr("data-pluginuuid");
		weipageAction.removeSubPlugin(uuid,redrawCallback);
	},
	removeThirdpluginCallback:function(){
		let uuid = $(this).attr("data-pluginuuid");
		weipageAction.removeThirdPlugin(uuid,redrawCallback);
	},
	removeFourthPluginCallback:function(){
		let uuid = $(this).attr("data-pluginuuid");
		weipageAction.removeFourthPlugin(uuid,redrawCallback);
	},
	addSubPluginCallback:function(){
		weipageAction.createSubPlugin(redrawCallback);
	},
	addThirdpluginCallback:function(){
		weipageAction.createThirdPlugin(redrawCallback);
	},
	addFourthPluginCallback:function(){
		weipageAction.createFourthPlugin(redrawCallback)
	},
	redrawCallback:redrawCallback
})

weipageDrop({
	selector:"#weipage",
	pluginDropCallback:function(thisDomSelect,nextDomSelect){
		weipageAction.pluginDrop(thisDomSelect,nextDomSelect,function(){
			weipage.redrawView();
		});	
	},
	subPluginDropCallback:function(thisDomSelect,nextDomSelect){
		weipageAction.subPluginDrop(thisDomSelect,nextDomSelect,function(){
			weipage.redrawView();
		});
	},
	thirdPluginDropCallback:function(thisDomSelect,nextDomSelect){
		weipageAction.thirdPluginDrop(thisDomSelect,nextDomSelect,function(){
			weipage.redrawView();
		});
	},
	fourthPluginDropCallback:function(thisDomSelect,nextDomSelect){
		weipageAction.fourthPluginDrop(thisDomSelect,nextDomSelect,function(){
			weipage.redrawView();
		});
	},
	unDropSortCallback:function(thisDomSelect,param){
		if(param){
			for(let key in param){
				weipageAction.editSelectPlugin(key,param[key]);
			}
			redrawCallback();
		}
	}
});
