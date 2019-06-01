<template>
	<div>
		<hr/>
		<div class="removePlugin removePlugin_icon" :data-pluginUuid="subPluginData.pluginUuid"></div>
		<div class="childPlugin_option_page">		
			<div class="yui_form_wrap">
				<p class="input_lable">标题：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<input type="text" class="input_text size_l_m" name="title" :value="subPluginData.title" />	
					</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">默认值：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<input type="text" class="input_text size_l_m" name="value" :value="subPluginData.value" />	
					</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">表单类型：</p>
				<div class="input_wrap">						
					<div class="form_one">
						<input type="radio" name="type" value="TEXT" :checked="checkTheSame(subPluginData.type,'TEXT')" /> 文本  
						<input type="radio" name="type" value="NUMBER" :checked="checkTheSame(subPluginData.type,'NUMBER')" /> 数字
						<input type="radio" name="type" value="SELECT" :checked="checkTheSame(subPluginData.type,'SELECT')" /> 列表
					</div>
				</div>
			</div>
			<div class="yui_form_wrap" v-if="subPluginData.type == 'SELECT'">
				<p class="input_lable">列表项：</p>
				<div class="input_wrap">
					<span v-for="item in subPluginData.thirdPluginList" class="childPlugin_wrap childPlugin_lable thirdPlugin_wrap drop_wrap drop_copy_wrap" :class="{current:item.pluginSelect}" :data-plugInUuid="item.pluginUuid">{{item.name}}</span>
					<div class="addPlugin addPlugin_icon"></div>
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
		name:"wFormSubForm",
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