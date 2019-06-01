<template>
	<div>
		<hr/>
		<div class="removePlugin removePlugin_icon" :data-pluginUuid="subPluginData.pluginUuid"></div>
		<div class="childPlugin_option_page">		
			<div class="yui_form_wrap">
				<p class="input_lable">热搜关键词：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<p><input type="text" data-check="notEmpty" class="input_text float_left size_l_m" name="name" :value="subPluginData.name" placeholder="请输入热搜关键词" /></p>	
						<p><span class="input_tips float_left" data-check="notEmpty">关键词不能为空</span></p>
					</div>
				</div>
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
		name:"wSearchSubForm",
		props:{
			pluginData:{
				type: Object,
      			default: function(){
      				return {};
      			}
			},
			subPluginData:{
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