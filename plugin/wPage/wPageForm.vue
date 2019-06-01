
<template>
	<div>
	    <h2 class="plugin_name">微页面</h2>
	    <div class="yui_form_wrap">
			<p class="input_lable">封面图片：</p>
			<div class="input_wrap">							
				<div class="image_wrap float_left">
					<div class="upload_image image_item">
						<img class="image_view" :src="parseUploadImage(pluginData.picUrl)" />
						<input type="file" name="picUrl" class="input_image" />
					</div>
				</div>	
			</div>
		</div>          
		<div class="yui_form_wrap">
			<p class="input_lable">页面名称：</p>
			<div class="input_wrap">						
				<div class="form_one">
					<p><input type="text" data-check="notEmpty" class="input_text float_left size_l_m" name="title" :value="pluginData.title" placeholder="请输入微页面标题" /></p>
					<p><span class="input_tips float_left" data-check="notEmpty">微页面标题不能为空</span></p>
				</div>
			</div>
		</div>	
		<div class="yui_form_wrap">
			<p class="input_lable">页面描述：</p>
			<div class="input_wrap">	
				<div class="form_one">
					<input type="text" class="input_text float_left size_l_m" name="descr" :value="pluginData.descr" placeholder="微信分享页面描述" />	
				</div>
			</div>
		</div>	
		<div class="yui_form_wrap">
			<p class="input_lable">备注：</p>
			<div class="input_wrap">	
				<div class="form_one">
					<input type="text" class="input_text float_left size_l_m" name="remark" :value="pluginData.remark" placeholder="备注内容不会在前端显示" />	
				</div>
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
	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}
	
	export default {
		name:"wPageForm",
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