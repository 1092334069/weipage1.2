<template>
	<div>
		<div class="removePlugin removePlugin_icon" :data-pluginUuid="pluginData.pluginUuid"></div>
	    <h2 class="plugin_name">计时器</h2> 
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
			<p class="input_lable">是否显示：</p>
			<div class="input_wrap">						
				<div class="form_one">
					<input type="radio" name="isShow" value="YES" :checked="checkTheSame(pluginData.isShow,'YES')" /> 是 
					<input type="radio" name="isShow" value="NO" :checked="checkTheSame(pluginData.isShow,'NO')" /> 否
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable">高度：</p>
			<div class="input_wrap">	
				<div class="form_one">
					<input type="range" name="height" max="100" min="20" :value="pluginData.height" />
					<span class="range_text">{{pluginData.height}}PX</span>
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable">计时器列表：</p>
			<div class="input_wrap">
				<span v-for="item in pluginData.subPluginList" class="childPlugin_wrap childPlugin_lable subPlugin_wrap drop_wrap drop_copy_wrap" :class="{current:item.pluginSelect}" :data-plugInUuid="item.pluginUuid">{{item.time}}</span>
				<div class="addPlugin addPlugin_icon"></div>
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
		name:"wTimerForm",
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