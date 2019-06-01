<template>
	<div :id="pluginData.identity" class="plugin_wrap" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">

		<div v-for="item in pluginData.subPluginList" class="button_wrap" @click="buttionEvent(item)" :style="praseButtonStyle(item.checkStatus,item.backgroundColor,item.picUrl,item.color,item.width,item.height,item.borderRadius)">{{item.text}}</div>

	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}

	methods["praseButtonStyle"] = function(checkStatus,backgroundColor,picUrl,color,width,height,borderRadius){
		if(checkStatus == "NO"){
			return "display:none";
		}
		return 'backgroundColor:' + backgroundColor + ';backgroundImage:url("' + picUrl + '");color:' + color + ';width:' + width + 'px;height:' + height + 'px;lineHeight:'  + height + 'px;borderRadius:' + borderRadius + 'px'; 				
	};

	methods["changeWeipageData"] = function(option){
		this.$emit("changeweipagedata",{id:option.modelId,key:option.modelKey,value:option.modelValue});
	}

	methods["buttionEvent"] = function(subPlugin){
		let _this = this;
		for(let i = 0;i < subPlugin.thirdPluginList.length;i++){
			let thirdPlugin = subPlugin.thirdPluginList[i];			
			if(thirdPlugin.eventType == 'LOCAL' && thirdPlugin.modelId && thirdPlugin.modelKey){
				_this.changeWeipageData(thirdPlugin);
			}else if(thirdPlugin.eventType == 'HTTP' && thirdPlugin.httpUrl){
				$.ajax({
					type:"post",
					url:thirdPlugin.httpUrl,
					data:thirdPlugin.httpData,
					success:function(res){
						for(let j = 0;j < thirdPlugin.fourthPluginList.length;j++){
							let fourthPlugin = thirdPlugin.fourthPluginList[j];
							if(fourthPlugin.modelId && fourthPlugin.useRequestData == 'YES'){
								fourthPlugin["modelValue"] = res;
								fourthPlugin["modelKey"] = "requestData";
								_this.changeWeipageData({modelId:fourthPlugin.modelId,modelKey:"unForeach",modelValue:false});
								_this.changeWeipageData(fourthPlugin);								
							}else if(fourthPlugin.modelId && fourthPlugin.modelKey && fourthPlugin.modelValue){
								_this.changeWeipageData(fourthPlugin);
							}
						}
					}
				})
			}
		}		
	};

	export default {
		name:"wButton",
		props:{
			pluginData:{
				type: Object,
      			default: function(){
      				return {};
      			}
			}
		},
		data () {
		    return {
		      
		    }
		},
		created:function(){
			
		},
		methods:methods		
	}
</script>

<style scoped>
	.button_wrap{
		margin:auto;
		text-align:center;
		font-size:16px;
		background-size:100% 100%;
    	box-shadow: 0 0 5px #666;
	}
</style>