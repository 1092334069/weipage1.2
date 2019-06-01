<template>
	<div>
		<div class="removePlugin removePlugin_icon" :data-pluginUuid="pluginData.pluginUuid"></div>
	    <h2 class="plugin_name">橱窗</h2> 
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
			<p class="input_lable">显示样式：</p>
			<div class="input_wrap">							
				<div class="form_one">
					<input type="radio" name="subPluginType" value="SHOWCASE_1" /> 样式一
					<input type="radio" name="subPluginType" value="SHOWCASE_2" /> 样式二
					<input type="radio" name="subPluginType" value="SHOWCASE_3" /> 样式三
					<input type="radio" name="subPluginType" value="SHOWCASE_4" /> 样式四
					<input type="radio" name="subPluginType" value="SHOWCASE_5" /> 样式五
					<input type="radio" name="subPluginType" value="SHOWCASE_6" /> 样式六
					<input type="radio" name="subPluginType" value="SHOWCASE_7" /> 样式七
					<input type="radio" name="subPluginType" value="SHOWCASE_8" /> 样式八						
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable">保留间隙：</p>
			<div class="input_wrap">							
				<div class="form_one">
					<input type="radio" name="picGap" value="YES" /> 是
					<input type="radio" name="picGap" value="NO" /> 否
				</div>
			</div>
		</div>				
		<div class="yui_form_wrap">
			<p class="input_lable">橱窗说明：</p>
			<div class="input_wrap">							
				<div class="form_one">															
					<textarea class="float_left size_s" name="remark" placeholder="请输入说明">{{pluginData.remark}}</textarea>
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
		name:"wShowcaseForm",
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