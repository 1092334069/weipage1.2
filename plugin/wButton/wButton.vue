<template>
	<div :data-pluginUuid="pluginData.pluginUuid" class="plugin_wrap drop_wrap drop_copy_wrap" :class="parsePluginSelect(pluginData.pluginSelect)" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">

		<div v-for="item in pluginData.subPluginList" class="button_wrap" :style="praseButtonStyle(item.backgroundColor,item.picUrl,item.color,item.width,item.height,item.borderRadius,item.pluginSelect)">{{item.text}}</div>

	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}

	methods["praseButtonStyle"] = function(backgroundColor,picUrl,color,width,height,borderRadius,pluginSelect){
		if(pluginSelect){
			return 'backgroundColor:' + backgroundColor + ';backgroundImage:url("' + picUrl + '");color:' + color + ';width:' + width + 'px;height:' + height + 'px;lineHeight:'  + height + 'px;borderRadius:' + borderRadius + 'px'; 
		}else{
			return 'display:none';
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