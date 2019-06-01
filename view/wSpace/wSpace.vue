<template>
	<div :id="pluginData.identity" class="plugin_wrap" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">
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
		created:function(){
			
		},
		methods:methods		
	}
</script>

<style scoped>
	
</style>