<template>
	<div>
		<hr/>
		<div class="removePlugin removePlugin_icon" :data-pluginUuid="fourthPluginData.pluginUuid"></div>
		<div class="childPlugin_option_page">
			<div class="yui_form_wrap">
				<p class="input_lable">回调名称：</p>
				<div class="input_wrap">													
					<div class="form_one">
						<input type="text" class="input_text float_left size_l_m" name="name" placeholder="" :value="fourthPluginData.name" />	
					</div>
				</div>
			</div>		
			<div class="yui_form_wrap">
				<p class="input_lable">模块Id：</p>
				<div class="input_wrap">													
					<div class="form_one">
						<input type="text" class="input_text float_left size_l_m" name="modelId" placeholder="模块编号,模块编号" :value="fourthPluginData.modelId" data-custom-event="parseMap" />	
					</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable">回调数据：</p>
				<div class="input_wrap">						
					<div class="form_one">
						<input type="radio" name="useRequestData" value="YES" :checked="checkTheSame(fourthPluginData.useRequestData,'YES')" /> 是  
						<input type="radio" name="useRequestData" value="NO" :checked="checkTheSame(fourthPluginData.useRequestData,'NO')" /> 否
					</div>
				</div>
			</div>
			<div v-if="fourthPluginData.useRequestData == 'NO'">
				<div v-if="fourthPluginData.modelType && fourthPluginData.modelSubType" class="yui_form_wrap">
					<p class="input_lable">Key：</p>
					<div class="input_wrap">													
						<div v-if="map[fourthPluginData.modelType][fourthPluginData.modelSubType]" class="form_one">
							<select class="float_left" name="modelKey" :value="fourthPluginData.modelKey">
								<option v-for="item in map[fourthPluginData.modelType][fourthPluginData.modelSubType]" :value="item.key">{{item.mean}}</option>  
							</select>						
						</div>
					</div>
				</div>
				<div v-if="fourthPluginData.modelType && fourthPluginData.modelSubType && fourthPluginData.modelKey" class="yui_form_wrap">
					<p class="input_lable">Value：</p>
					<div v-for="mapItem in map[fourthPluginData.modelType][fourthPluginData.modelSubType]" v-if="mapItem && mapItem.key == fourthPluginData.modelKey" class="input_wrap">	
						<div v-if="mapItem.type=='file'" class="image_wrap float_left">
							<div class="upload_image image_item">
								<img class="image_view" :src="parseUploadImage(fourthPluginData.modelValue)" />
								<input type="file" name="modelValue" class="input_image" />
							</div>
						</div>
						<div v-else-if="mapItem.type=='radio' || mapItem.type=='select'" class="form_one">
							<select class="float_left" name="modelValue" :value="fourthPluginData.modelValue">
								<option v-for="item in mapItem.valueList" :value="item.key">{{item.mean}}</option>  
							</select>	
						</div>
						<div v-else-if="mapItem.type=='color'" class="form_one">
							<input type="color"  name="modelValue" :value="fourthPluginData.modelValue" />	
							<input type="button" class="label_btn resetBtn" data-value="" value="重置" />		
						</div>
						<div v-else class="form_one">
							<input type="text" class="input_text float_left size_l_m" name="modelValue" placeholder="" :value="fourthPluginData.modelValue" />	
						</div>
					</div>
				</div>
			</div>				
		</div>
	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';
	import map from '../../map';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}
	
	export default {
		name:"wButtonFourthForm",
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
			},
			fourthPluginData:{
				type: Object,
      			default: function(){
      				return {};
      			}
			}
		},
		data () {
		    return {
		      map:map
		    }
		},
		methods:methods		
	}
</script>

<style scoped>

</style>