<template>
	<div :data-pluginUuid="pluginData.pluginUuid" class="plugin_wrap drop_wrap drop_copy_wrap" :class="parsePluginSelect(pluginData.pluginSelect)" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">
		<div class="banner_wrap">
	        <ul class="banner_list">
	        	<li v-for="item in pluginData.subPluginList" v-if="item.pluginSelect || item.fakePluginSelect" :data-pluginUuid="item.pluginUuid" class="banner_item subPlugin_wrap drop_wrap drop_copy_wrap" :class="parsePluginSelect(item.pluginSelect)">
	            	<a draggable="false" href="javascript:;" class="block_link">
	                	<img :src="parseBannerImage(item.picUrl)" alt="" class="item_image" draggable="false">
	            	</a>
	        	</li>
	        </ul>
	    </div>
	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}
	
	export default {
		name:"wBanner",
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
	.banner_wrap .banner_list{
	  width:100%;
	}
	.banner_wrap .banner_list .item_image{
	  width:100%;
	  height:auto;
	}
</style>