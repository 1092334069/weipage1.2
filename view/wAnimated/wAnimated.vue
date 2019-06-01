<template>
	<div :id="pluginData.identity" class="plugin_wrap" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">
		<div class="animated_wrap" :class="praseAnimated(pluginData.subPluginType,pluginData.animateStatus)" :style="{height:pluginData.height + 'px'}">
			<img :src="parseProductImage(pluginData.animateImage)" />
		</div>
	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}

	methods["praseAnimated"] = function(subPluginType,animateStatus){
		if(animateStatus == 'START'){
			return subPluginType + ' active';
		}else{
			return subPluginType;
		}
	};

	export default {
		name:"wAnimated",
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
	@keyframes shake{
	    12.5%{
	        transform: rotate(25deg);
	        transform-origin: center bottom;
	    }
	    37.5%{
	        transform: rotate(-25deg);
	        transform-origin: center bottom;
	    }
	    62.5%{
	        transform: rotate(25deg);
	        transform-origin: center bottom;
	    }
	    77.5%{
	        transform: rotate(-25deg);
	        transform-origin: center bottom;
	    }
	    100%{
	        transform: rotate(0);
	        transform-origin: center bottom;
	    }
	}
	@keyframes rotate{
		from{transform:rotate(0)}
		to{transform:rotate(360deg)}
	}
	.animated_wrap{
		text-align:center;
		overflow:hidden;
	}
	.animated_wrap.SHAKE.active{
		animation:shake 1.2s infinite linear;
	}
	.animated_wrap.ROTATE.active{
		animation:rotate 1.2s infinite linear;
	}
	.animated_wrap img{
		max-width:100%;
	}
</style>