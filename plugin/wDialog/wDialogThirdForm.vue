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
				<p class="input_lable">表单类型：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<select class="float_left" name="type" :value="thirdPluginData.type">
							<option value="TEXT">文本</option>
							<option value="IMAGE">图片</option>   
						</select>
					</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">Key：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<input type="text" class="input_text size_l_m" name="key" :value="thirdPluginData.key" placeholder="key.key.key" />
					</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">默认值：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<input type="text" class="input_text size_l_m" name="value" :value="thirdPluginData.value" placeholder="" />
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
		name:"wDialogThirdForm",
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