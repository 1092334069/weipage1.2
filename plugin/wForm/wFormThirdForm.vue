<template>
	<div>
		<hr/>
		<div class="removePlugin removePlugin_icon" :data-pluginUuid="thirdPluginData.pluginUuid"></div>
		<div class="childPlugin_option_page">
			<div class="yui_form_wrap">
				<p class="input_lable">模块编号：</p>
				<div class="input_wrap">	
					<div class="form_one">{{thirdPluginData.identity}}</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">名称：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<input type="text" class="input_text size_l_m" name="name" :value="thirdPluginData.name" />
					</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">值：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<input type="text" class="input_text size_l_m" name="value" :value="thirdPluginData.value" />
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
		name:"wFormThirdForm",
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
			},
			thirdPluginData:{
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