<template>
	<div>
		<hr/>
		<div class="removePlugin removePlugin_icon" :data-pluginUuid="subPluginData.pluginUuid"></div>
		<div class="childPlugin_option_page">
			<div class="yui_form_wrap">
				<p class="input_lable">模块编号：</p>
				<div class="input_wrap">	
					<div class="form_one">{{subPluginData.identity}}</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">校验条件：</p>
				<div class="input_wrap">						
					<div class="form_one">
						<input type="radio" name="checkStatus" value="YES" :checked="checkTheSame(subPluginData.checkStatus,'YES')" /> 是  
						<input type="radio" name="checkStatus" value="NO" :checked="checkTheSame(subPluginData.checkStatus,'NO')" /> 否
					</div>
				</div>
			</div>
			<div v-if="subPluginData.checkStatus == 'YES'" class="yui_form_wrap">
				<p class="input_lable">条件：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<input type="text" class="input_text size_l_m" name="condition" :value="subPluginData.condition" placeholder="" />
					</div>
				</div>
			</div>		
			<div class="yui_form_wrap">
				<p class="input_lable">表单列表：</p>
				<div class="input_wrap">
					<span v-for="item in subPluginData.thirdPluginList" class="childPlugin_wrap childPlugin_lable thirdPlugin_wrap drop_wrap drop_copy_wrap" :class="{current:item.pluginSelect}" :data-plugInUuid="item.pluginUuid">{{item.identity}}</span>
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
		name:"wDialogSubForm",
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