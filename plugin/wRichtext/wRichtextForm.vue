<template>
	<div>
		<div class="removePlugin removePlugin_icon" :data-pluginUuid="pluginData.pluginUuid"></div>
	    <h2 class="plugin_name">富文本</h2> 
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
			<p class="input_lable">边距：</p>
			<div class="input_wrap">	
				<div class="form_one">
					<input class="input_text float_left size_m" name="margin" :value="pluginData.margin" placeholder="" />
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable">内容颜色：</p>
			<div class="input_wrap">	
				<div class="form_one">
					<input type="color"  name="contentColor" :value="pluginData.contentColor" />	
					<input type="button" class="label_btn resetBtn" data-value="" value="重置" />
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable">圆角：</p>
			<div class="input_wrap">	
				<div class="form_one">
					<input class="input_text float_left size_m" name="borderRadius" :value="pluginData.borderRadius" placeholder="" />
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable">内容：</p>
			<div class="input_wrap">	
				<div class="form_one">
					<textarea class="size_m" name="txtHtml" :value="pluginData.txtHtml" placeholder="暂时用textarea表示"></textarea>
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
		name:"wRichtextForm",
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