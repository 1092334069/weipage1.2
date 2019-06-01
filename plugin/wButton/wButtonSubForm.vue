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
				<p class="input_lable">按钮文字：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<input type="text" class="input_text size_l_m" name="text" :value="subPluginData.text" placeholder="" />
					</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">按钮状态：</p>
				<div class="input_wrap">						
					<div class="form_one">
						<input type="radio" name="checkStatus" value="YES" :checked="checkTheSame(subPluginData.checkStatus,'YES')" /> 启用  
						<input type="radio" name="checkStatus" value="NO" :checked="checkTheSame(subPluginData.checkStatus,'NO')" /> 关闭
					</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">按钮颜色：</p>
				<div class="input_wrap">	
					<div class="form_one">
						<input type="color"  name="backgroundColor" :value="subPluginData.backgroundColor" />	
						<input type="button" class="label_btn resetBtn" data-value="" value="重置" />
					</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">按钮图片：</p>
				<div class="input_wrap">							
					<div class="image_wrap float_left">
						<div class="upload_image image_item">
							<img class="image_view" :src="parseUploadImage(subPluginData.picUrl)" />
							<input type="file" name="picUrl" class="input_image" />
						</div>
					</div>	
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">文字颜色：</p>
				<div class="input_wrap">	
					<div class="form_one">
						<input type="color"  name="color" :value="subPluginData.color" />	
						<input type="button" class="label_btn resetBtn" data-value="" value="重置" />
					</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">按钮宽度：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<input type="number" class="input_text size_m" name="width" :value="subPluginData.width" placeholder="" />
					</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">按钮高度：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<input type="number" class="input_text size_m" name="height" :value="subPluginData.height" placeholder="" />
					</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">按钮圆角：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<input type="number" class="input_text size_m" name="borderRadius" :value="subPluginData.borderRadius" placeholder="" />
					</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">事件列表：</p>
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
		name:"wButtonSubForm",
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