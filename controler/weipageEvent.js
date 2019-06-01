import weipageCustomEvent from './weipageCustomEvent.js';

let weipageEvent = function(option){
	this.option = option;
};

weipageEvent.prototype.bindEvent = function(){
	let _this = this;

	//选中插件
	$("#weipage").on("click",".plugin_wrap",function(e){
		_this.option.selectPluginCallback.call(this,e);
		e.stopPropagation();
	});

	//选中子插件
	$("#weipage").on("click",".subPlugin_wrap",function(e){
		
		//只有在选中插件的情况下才能选中子插件
		let plugIn = $(this).closest(".plugin_wrap");
		if(plugIn && plugIn.hasClass("current")){
			_this.option.selectSubPluginCallback.call(this,e);
			e.stopPropagation();
		}		
	});

	//选中子插件
	$("#weipageForm").on("click",".childPlugin_wrap",function(e){
		let form = $(this).closest("form").attr("id");
		_this.selectPlugin(this,form,e);
	});

	//修改插件表单
	$("#weipageForm").on("change","input,select,textarea",function(e){
		let value = $(this).val().trim();
		let name = $(this).attr("name");
		let form = $(this).closest("form").attr("id");
		if($(this).attr("type") == "file"){
			value = './temp/' + value.substr(12);
			_this.formChange(this,form,name,value);
		}else{
			_this.formChange(this,form,name,value);
		}

		//特殊事件处理
		let customEvent = $(this).attr("data-custom-event");
		if(customEvent){
			if(weipageCustomEvent[customEvent]){
				weipageCustomEvent[customEvent].call(this,_this,form,name,value);
			}
		}
	});

	//移除插件
	$("#weipageForm").on("click",".removePlugin",function(e){
		let form = $(this).closest("form").attr("id");
		_this.removePlugin(this,form,e);
	});

	//新建子插件
	$("#weipageForm").on("click",".addPlugin",function(e){
		let form = $(this).closest("form").attr("id");
		_this.addPlugin(this,form,e);
	});

	//上传图片
	$("#weipageForm").on("click",".upload_image",function(e){
		$(this).find("[type='file']")[0].click();
	});

	//重置颜色
	$("#weipageForm").on("click",".resetBtn",function(e){
		let name = $(this).closest(".form_one").find("[type='color']").attr("name");
		let form = $(this).closest("form").attr("id");
		_this.formChange(this,form,name,"");
	});
};

weipageEvent.prototype.formChange = function(_this,form,name,value){
	switch(form){
		case 'weipage_option_form':this.option.editWeipageCallback.call(_this,name,value);break;
		case 'plugin_option_form':this.option.editPluginCallback.call(_this,name,value);break;
		case 'subPlugin_option_form':this.option.editSubpluginCallback.call(_this,name,value);break;
		case 'thirdPlugin_option_form':this.option.editThirdpluginCallback.call(_this,name,value);break;
		case 'fourthPlugin_option_form':this.option.editFourthPluginCallback.call(_this,name,value);break;
	}
};

weipageEvent.prototype.addPlugin = function(_this,form,e){
	switch(form){
		case 'plugin_option_form':this.option.addSubPluginCallback.call(_this,e);break;
		case 'subPlugin_option_form':this.option.addThirdpluginCallback.call(_this,e);break;
		case 'thirdPlugin_option_form':this.option.addFourthPluginCallback.call(_this,e);break;
	}
};

weipageEvent.prototype.removePlugin = function(_this,form,e){
	switch(form){
		case 'plugin_option_form':this.option.removePluginCallback.call(_this,e);break;
		case 'subPlugin_option_form':this.option.removeSubPluginCallback.call(_this,e);break;
		case 'thirdPlugin_option_form':this.option.removeThirdpluginCallback.call(_this,e);break;
		case 'fourthPlugin_option_form':this.option.removeFourthPluginCallback.call(_this,e);break;
	}
};

weipageEvent.prototype.selectPlugin = function(_this,form,e){
	switch(form){
		case 'plugin_option_form':this.option.selectSubPluginCallback.call(_this,e);break;
		case 'subPlugin_option_form':this.option.selectThirdPluginCallback.call(_this,e);break;
		case 'thirdPlugin_option_form':this.option.selectFourthPluginCallback.call(_this,e);break;
	};
};

export default function weipageEvent(option){
	let temp = new weipageEvent(option);
	temp.bindEvent();
	return temp;
}