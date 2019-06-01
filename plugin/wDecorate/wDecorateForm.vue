<template>
	<div>
		<div class="removePlugin removePlugin_icon" :data-pluginUuid="pluginData.pluginUuid"></div>
	    <h2 class="plugin_name">装饰</h2> 
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
			<p class="input_lable">宽度：</p>
			<div class="input_wrap">	
				<div class="form_one">
					<input type="range" name="width" max="320" min="0" :value="pluginData.width" />
					<span class="range_text">{{pluginData.width}}PX</span>
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable">高度：</p>
			<div class="input_wrap">	
				<div class="form_one">
					<input type="range" name="height" max="320" min="0" :value="pluginData.height" />
					<span class="range_text">{{pluginData.height}}PX</span>
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable">top：</p>
			<div class="input_wrap">													
				<div class="form_one">
					<input type="number" class="input_text float_left size_m" name="top" placeholder="" :value="pluginData.top" />	
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable">left：</p>
			<div class="input_wrap">													
				<div class="form_one">
					<input type="number" class="input_text float_left size_m" name="left" placeholder="" :value="pluginData.left" />	
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable">圆角：</p>
			<div class="input_wrap">													
				<div class="form_one">
					<input type="number" class="input_text float_left size_m" name="borderRadius" placeholder="" :value="pluginData.borderRadius" />	
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
		name:"wDecorateForm",
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