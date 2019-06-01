<template>
	<div :data-pluginUuid="pluginData.pluginUuid" class="plugin_wrap drop_wrap drop_copy_wrap" :class="parsePluginSelect(pluginData.pluginSelect)" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">
		<div class="search_wrap">
			<div class="search_box font_12">
				<span>搜索</span>
			</div>				
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
		name:"wSearch",
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
	.search_wrap{
		height: 24px;
	  	padding: 6px 12px;
	}
	.search_wrap .search_box{
		height: 24px;
	    border-radius: 6px;
	    border: 1px solid #e5e5e5;
	    text-align: center;
	    line-height: 24px;
	    background-color: #fff;
	    color: #999;
	    font-size: 12px;
	}
	.search_wrap .search_box span{
	    vertical-align:middle;
	    position:relative;
	    display: inline-block;
	}
	.search_wrap .search_box span:before{
		content:"";
		width: 12px;
	    height: 12px;
	    vertical-align:middle;
	    left:-15px;
	    top:5px;
	    background-image:url(../../libs/img/icon_search.png);
	    background-size:12px 12px;
	    position:absolute;
	}
</style>