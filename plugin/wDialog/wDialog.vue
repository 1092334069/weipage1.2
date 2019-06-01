<template>
	<div :data-pluginUuid="pluginData.pluginUuid" class="plugin_wrap" :class="parsePluginSelect(pluginData.pluginSelect)" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">
		<div v-for="subPlugin in pluginData.subPluginList" v-if="subPlugin.pluginSelect" class="dialog_wrap" :class="parseIsOpen(pluginData.isOpen)">
			<p v-for="item in subPlugin.thirdPluginList">
				<img v-if="item.type == 'IMAGE'" :src="item.value" />
				<span v-else-if="item.type == 'TEXT'">{{item.value}}</span>
			</p>				
		</div>
	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}

	methods["parseIsOpen"] = function(isOpen){
		if(isOpen && isOpen == 'YES'){
			return "isopen";
		}
	}

	export default {
		name:"wDialog",
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
	.plugin_wrap{
		position:absolute;
		left:50%;
		top:50%;
		width:240px;
		transform:translate(-50%,-50%);
	}
	.dialog_wrap{
		text-align:center;
		padding:10px;
		opacity:0.5;
	}
	.dialog_wrap p{
		padding:8px;
	}
	.dialog_wrap img{
		width:160px;
	}
	.dialog_wrap.isopen{
		opacity:1;
	}
</style>