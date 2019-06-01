<template>
	<div :data-pluginUuid="pluginData.pluginUuid" class="plugin_wrap drop_wrap" :class="parsePluginSelect(pluginData.pluginSelect)" :style="parseDecorateStyle(pluginData.backgroundColor,pluginData.backgroundImage,pluginData.width,pluginData.height,pluginData.top,pluginData.left,pluginData.borderRadius)">
		<div class="decorate_wrap"></div>
	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}

	methods["parseDecorateStyle"] = function(backgroundColor,backgroundImage,width,height,top,left,borderRadius){
		return 'position:absolute;overflow:hidden;backgroundColor:' + backgroundColor + ';backgroundImage:url("'+ backgroundImage + '")' + ';width:' + width + 'px;height:' + height + 'px;top:' + top + 'px;left:' + left + 'px;borderRadius:' + borderRadius + 'px';
	};

	export default {
		name:"wDecorate",
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