<template>
	<div>
		<hr/>
		<div class="removePlugin removePlugin_icon" :data-pluginUuid="thirdPluginData.pluginUuid"></div>
		<div class="childPlugin_option_page">
			<div class="yui_form_wrap">
				<p class="input_lable">事件名称：</p>
				<div class="input_wrap">													
					<div class="form_one">
						<input type="text" class="input_text float_left size_l_m" name="name" placeholder="" :value="thirdPluginData.name" />	
					</div>
				</div>
			</div>		
			<div class="yui_form_wrap">
				<p class="input_lable">事件类型：</p>
				<div class="input_wrap">						
					<div class="form_one">
						<input type="radio" name="eventType" value="LOCAL" :checked="checkTheSame(thirdPluginData.eventType,'LOCAL')" /> 本地事件  
						<input type="radio" name="eventType" value="HTTP" :checked="checkTheSame(thirdPluginData.eventType,'HTTP')" /> 请求事件
					</div>
				</div>
			</div>
			<div v-if="thirdPluginData.eventType == 'LOCAL'">
				<div class="yui_form_wrap">
					<p class="input_lable">模块Id：</p>
					<div class="input_wrap">													
						<div class="form_one">
							<input type="text" class="input_text float_left size_l_m" name="modelId" placeholder="模块编号,模块编号" :value="thirdPluginData.modelId" data-custom-event="parseMap" />	
						</div>
					</div>
				</div>
				<div v-if="thirdPluginData.modelType && thirdPluginData.modelSubType" class="yui_form_wrap">
					<p class="input_lable">Key：</p>
					<div class="input_wrap">													
						<div v-if="map[thirdPluginData.modelType][thirdPluginData.modelSubType]" class="form_one">
							<select class="float_left" name="modelKey" :value="thirdPluginData.modelKey">
								<option v-for="item in map[thirdPluginData.modelType][thirdPluginData.modelSubType]" :value="item.key">{{item.mean}}</option>  
							</select>						
						</div>
					</div>
				</div>
				<div v-if="thirdPluginData.modelType && thirdPluginData.modelSubType && thirdPluginData.modelKey" class="yui_form_wrap">
					<p class="input_lable">Value：</p>
					<div v-for="mapItem in map[thirdPluginData.modelType][thirdPluginData.modelSubType]" v-if="mapItem && mapItem.key == thirdPluginData.modelKey" class="input_wrap">	
						<div v-if="mapItem.type=='file'" class="image_wrap float_left">
							<div class="upload_image image_item">
								<img class="image_view" :src="parseUploadImage(thirdPluginData.modelValue)" />
								<input type="file" name="modelValue" class="input_image" />
							</div>
						</div>
						<div v-else-if="mapItem.type=='radio' || mapItem.type=='select'" class="form_one">
							<select class="float_left" name="modelValue" :value="thirdPluginData.modelValue">
								<option v-for="item in mapItem.valueList" :value="item.key">{{item.mean}}</option>  
							</select>	
						</div>
						<div v-else-if="mapItem.type=='color'" class="form_one">
							<input type="color"  name="modelValue" :value="thirdPluginData.modelValue" />	
							<input type="button" class="label_btn resetBtn" data-value="" value="重置" />		
						</div>
						<div v-else class="form_one">
							<input type="text" class="input_text float_left size_l_m" name="modelValue" placeholder="" :value="thirdPluginData.modelValue" />	
						</div>
					</div>
				</div>
			</div>
			<div v-else>
				<div class="yui_form_wrap">
					<p class="input_lable">接口：</p>
					<div class="input_wrap">													
						<div class="form_one">
							<select class="float_left" name="httpUrl" :value="thirdPluginData.httpUrl" data-custom-event="parseHttpData">
								<option v-for="item in httpRequestList" :value="item.url">{{item.name}}</option>  
							</select>
						</div>
					</div>
				</div>
				<div class="yui_form_wrap">
					<p class="input_lable">参数：</p>
					<div class="input_wrap">													
						<div class="form_one">
							<input type="text" class="input_text float_left size_l_m" name="httpData" placeholder="key=value&key=value" :value="thirdPluginData.httpData" />	
						</div>
					</div>
				</div>
				<div class="yui_form_wrap">
					<p class="input_lable">回调列表：</p>
					<div class="input_wrap">
						<span v-for="item in thirdPluginData.fourthPluginList" class="childPlugin_wrap childPlugin_lable fourthPlugin_wrap drop_wrap drop_copy_wrap" :class="{current:item.pluginSelect}" :data-plugInUuid="item.pluginUuid">{{item.name}}</span>
						<div class="addPlugin addPlugin_icon"></div>
					</div>
				</div>
			</div>			
		</div>
	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';
	import httpRequestConfig from '../../config/httpRequestConfig.js';
	import map from '../../map';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}
	
	export default {
		name:"wButtonThirdForm",
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
			},
			thirdPluginData:{
				type: Object,
      			default: function(){
      				return {};
      			}
			}
		},
		data () {
		    return {
		      map:map,
		      httpRequestList:httpRequestConfig
		    }
		},
		methods:methods		
	}
</script>

<style scoped>

</style>