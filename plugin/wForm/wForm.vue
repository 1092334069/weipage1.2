<template>
	<div :data-pluginUuid="pluginData.pluginUuid" class="plugin_wrap drop_wrap drop_copy_wrap" :class="parsePluginSelect(pluginData.pluginSelect)" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">
		<ul class="form_wrap">
			<li v-for="item in pluginData.subPluginList" :data-pluginUuid="item.pluginUuid" class="form_item subPlugin_wrap drop_wrap drop_copy_wrap" :class="{current:item.pluginSelect}">
				<span class="form_title">{{item.title}}</span>
				<div class="form_content">
					<input v-if="item.type=='TEXT'" type="text" :value="item.value" readonly="readonly" />
					<input v-else-if="item.type=='NUMBER'" type="number" :value="item.value" readonly="readonly" />
					
				</div>			
			</li>
		</ul>
	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}

	export default {
		name:"wForm",
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
	.form_item{
		padding-left:84px;
		position:relative;
		height:46px;
	}
	.form_title{
		display:inline-block;
		min-width:40px;
		line-height:30px;
		position:absolute;
		left:8px;
		top:8px;
		font-size: 14px;
	}
	.form_content{
		height:30px;
		padding:8px;
		border-bottom:1px solid #e5e5e5;
	}
	.form_item input{
		border:none;
		float:right;
	}
	.form_item input[type='text']{
		height:28px;
		width:100%;
		text-align:right;
	}
</style>