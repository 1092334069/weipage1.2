<template>
	<div>
		<div class="removePlugin removePlugin_icon" :data-pluginUuid="pluginData.pluginUuid"></div>
	    <h2 class="plugin_name">动画</h2> 
	    <div class="yui_form_wrap">
			<p class="input_lable">模块编号：</p>
			<div class="input_wrap">	
				<div class="form_one">{{pluginData.identity}}</div>
			</div>
		</div>           
		<div class="yui_form_wrap">
			<p class="input_lable">背景颜色：</p>
			<div class="input_wrap">	
				<div class="form_one">
					<input type="color"  name="backgroundColor" :value="pluginData.backgroundColor" />	
					<input type="button" class="label_btn resetBtn" data-value="" value="重置" />
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable">背景图片：</p>
			<div class="input_wrap">							
				<div class="image_wrap float_left">
					<div class="upload_image image_item">
						<img class="image_view" :src="parseUploadImage(pluginData.backgroundImage)" />
						<input type="file" name="backgroundImage" class="input_image" />
					</div>
				</div>	
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable">高度：</p>
			<div class="input_wrap">	
				<div class="form_one">
					<input type="range" name="height" max="400" min="20" :value="pluginData.height" />
					<span class="range_text">{{pluginData.height}}PX</span>
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable">动画图片：</p>
			<div class="input_wrap">							
				<div class="image_wrap float_left">
					<div class="upload_image image_item">
						<img class="image_view" :src="parseUploadImage(pluginData.animateImage)" />
						<input type="file" name="animateImage" class="input_image" />
					</div>
				</div>	
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable big">动画类型：</p>
			<div class="input_wrap">							
				<div class="form_one">
					<input type="radio" name="subPluginType" value="SHAKE" :checked="checkTheSame(pluginData.subPluginType,'SHAKE')" /> 摇晃 
					<input type="radio" name="subPluginType" value="ROTATE" :checked="checkTheSame(pluginData.subPluginType,'ROTATE')" /> 旋转
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable big">动画状态：</p>
			<div class="input_wrap">							
				<div class="form_one">
					<input type="radio" name="animateStatus" value="START" :checked="checkTheSame(pluginData.animateStatus,'START')" /> 启动 
					<input type="radio" name="animateStatus" value="STOP" :checked="checkTheSame(pluginData.animateStatus,'STOP')" /> 关闭
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
		name:"wAnimatedForm",
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

</style>