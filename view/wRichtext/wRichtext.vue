<template>
	<div :id="pluginData.identity" class="plugin_wrap" :style="{backgroundColor:pluginData.backgroundColor,backgroundImage:'url(' + pluginData.backgroundImage + ')',padding:pluginData.margin + 'px'}">
		<div class="richtext_wrap" v-html="pluginData.txtHtml" :style="{backgroundColor:pluginData.contentColor,borderRadius:pluginData.borderRadius + 'px'}">
	        {{pluginData.txtHtml}}
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
		name:"wRichtext",
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
.richtext_wrap {
    padding: 8px;
    word-wrap: break-word
}
.richtext_wrap img {
    max-width: 100%
}
.richtext_wrap table {
    width: 100%
}
</style>