<template>
	<div>
		<div class="removePlugin removePlugin_icon" :data-pluginUuid="pluginData.pluginUuid"></div>
	    <h2 class="plugin_name">对话框</h2> 
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
			<p class="input_lable">是否打开：</p>
			<div class="input_wrap">						
				<div class="form_one">
					<input type="radio" name="isOpen" value="YES" :checked="checkTheSame(pluginData.isOpen,'YES')" /> 是 
					<input type="radio" name="isOpen" value="NO" :checked="checkTheSame(pluginData.isOpen,'NO')" /> 否
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

		<div class="yui_form_wrap">
			<p class="input_lable">绑定接口：</p>
			<div class="input_wrap">						
				<div class="form_one">
					<input type="radio" name="isUseApi" value="YES" :checked="checkTheSame(pluginData.isUseApi,'YES')" /> 是 
					<input type="radio" name="isUseApi" value="NO" :checked="checkTheSame(pluginData.isUseApi,'NO')" /> 否
				</div>
			</div>
		</div>
		<div v-if="pluginData.isUseApi == 'YES'" class="yui_form_wrap">
			<p class="input_lable">接口：</p>
			<div class="input_wrap">													
				<div class="form_one">
					<select class="float_left" name="httpUrl" :value="pluginData.httpUrl" data-custom-event="parseHttpDialogForm">
						<option v-for="item in httpRequestList" :value="item.url">{{item.name}}</option>  
					</select>
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable">对话框列表：</p>
			<div class="input_wrap">
				<span v-for="item in pluginData.subPluginList" class="childPlugin_wrap childPlugin_lable subPlugin_wrap drop_wrap drop_copy_wrap" :class="{current:item.pluginSelect}" :data-plugInUuid="item.pluginUuid">{{item.identity}}</span>
				<div class="addPlugin addPlugin_icon"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';
	import httpRequestConfig from '../../config/httpRequestConfig.js';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}
	
	export default {
		name:"wDialogForm",
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
		      httpRequestList:httpRequestConfig
		    }
		},
		methods:methods		
	}
</script>

<style scoped>

</style>