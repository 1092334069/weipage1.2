<template>
	<div>
		<hr/>	
		<div class="removePlugin removePlugin_icon" :data-pluginUuid="subPluginData.pluginUuid"></div>
		<div class="childPlugin_option_page">		
			<div class="yui_form_wrap">
				<p class="input_lable">选择图片：</p>
				<div class="input_wrap">						
					<div class="image_wrap float_left">
						<div class="upload_image image_item" data-action="true" >
							<img class="image_view" :src="parseBannerImage(subPluginData.picUrl)" />
							<input type="file" name="picUrl" class="input_image" />
						</div>
					</div>	
				</div>
			</div>	
			<div class="yui_form_wrap">
				<p class="input_lable">链接到：</p>
				<div class="input_wrap">													
					<div class="form_one">
						<select class="float_left" name="functionCode" data-redraw-form="true">
							<option v-for="item in linkTypeList" :value="item.linkType">{{item.inkTypeName}}</option>  
						</select>	
					</div>
				</div>
			</div>	
			<div v-if="subPluginData.linkType == 'CUSTOM'" class="yui_form_wrap">
				<p class="input_lable">自定义链接：</p>
				<div class="input_wrap">	
					<div class="form_one">
						<input type="text" class="input_text float_left size_l_m" name="buizKey" placeholder="" :value="subPluginData.buizKey" />	
					</div>
				</div>
			</div>
			<div v-else-if="subPluginData.linkType == 'MODULE'" class="yui_form_wrap">
				<p class="input_lable">模块编号：</p>
				<div class="input_wrap">	
					<div class="form_one">
						<input type="text" class="input_text float_left size_l_m" name="buizKey" placeholder="请输入模块编号" :value="subPluginData.buizKey" />	
					</div>
				</div>
			</div>
			<div v-else-if="subPluginData.functionCode == 'product_detail'" class="yui_form_wrap">
				<p class="input_lable">选择商品：</p>
				<div class="input_wrap">	
					<div v-if="buizId" class="form_one">
						<span class="title_btn">{{subPluginData.buizName}}</span>								
						<span class="option_blue_btn" data-type="product_detail">修改</span>
					</div>
					<div v-else class="form_one">
						<span class="option_blue_btn" data-type="product_detail">+选择商品</span>
					</div>
				</div>
			</div>
			<div v-else-if="subPluginData.functionCode == 'weipage'" class="yui_form_wrap">
				<p class="input_lable">选择微页面：</p>
				<div class="input_wrap">
					<div v-if="buizId" class="form_one">
						<span class="title_btn">{{subPluginData.buizName}}</span>								
						<span class="option_blue_btn" data-type="weipage">修改</span>
					</div>
					<div v-else class="form_one">
						<span class="option_blue_btn" data-type="weipage">+选择微页面</span>
					</div>
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

	import linkTypeList from '../../config/linkTypeListConfig.js';
	
	export default {
		name:"wBannerSubForm",
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
		      linkTypeList:linkTypeList
		    }
		},
		methods:methods		
	}
</script>

<style scoped>

</style>