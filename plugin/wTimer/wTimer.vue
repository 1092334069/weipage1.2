<template>
	<div :data-pluginUuid="pluginData.pluginUuid" class="plugin_wrap drop_wrap drop_copy_wrap" :class="parsePluginSelect(pluginData.pluginSelect)" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">		
		<div :style="parseTimerStyle(pluginData.isShow,pluginData.height)">
			<div v-for="item in pluginData.subPluginList" class="timer_wrap" :class="parsePluginSelect(item.pluginSelect)">{{parseTimeStr(item.time)}}</div>
		</div>
	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}

	methods["parseTimerStyle"] = function(isShow,height){
		if(isShow == 'YES'){
			return 'height:' + height + 'px;lineHeight:' + height + 'px';
		}else{
			return 'height:' + height + 'px;lineHeight:' + height + 'px;opacity:0.5';
		}
	}

	methods["parseTimeStr"] = function(time){
		if(time){
			return time;
		}else{
			return 'yyyy-mm-dd hh:mm:ss';
		}
	}
	
	export default {
		name:"wTimer",
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
	.timer_wrap{
		text-align:center;
		diaplay:none;
	}
	.timer_wrap.current{
		diaplay:block;
	}
</style>