<template>
	<div :data-pluginUuid="pluginData.pluginUuid" class="plugin_wrap drop_wrap drop_copy_wrap" :class="parsePluginSelect(pluginData.pluginSelect)" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">
		<div class="space_wrap" :style="{height:pluginData.height + 'px'}"></div>
	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}
	
	export default {
		name:"wSpace",
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
	
</style>