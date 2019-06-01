<template>
	<div>
		<div class="removePlugin removePlugin_icon" :data-pluginUuid="pluginData.pluginUuid"></div>
	    <h2 class="plugin_name">商品</h2> 
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
			<p class="input_lable big">显示类型：</p>
			<div class="input_wrap">							
				<div class="form_one">
					<input type="radio" name="subPluginType" value="GRID" :checked="checkTheSame(pluginData.subPluginType,'GRID')" /> 网格 
					<input type="radio" name="subPluginType" value="LIST" :checked="checkTheSame(pluginData.subPluginType,'LIST')" /> 列表			 
					<input type="radio" name="subPluginType" value="BIG" :checked="checkTheSame(pluginData.subPluginType,'BIG')" /> 大图
					<input type="radio" name="subPluginType" value="SWAP" :checked="checkTheSame(pluginData.subPluginType,'SWAP')" /> 滑块
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable big">显示样式：</p>
			<div class="input_wrap">							
				<div class="form_one">
					<input type="radio" name="productShowType" value="CARD" :checked="checkTheSame(pluginData.productShowType,'CARD')" /> 卡片样式  
					<input type="radio" name="productShowType" value="SIMPLE" :checked="checkTheSame(pluginData.productShowType,'SIMPLE')" /> 极简样式
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable big">保留显示间隙：</p>
			<div class="input_wrap">							
				<div class="form_one">
					<input type="radio" name="picGap" value="YES" :checked="checkTheSame(pluginData.picGap,'YES')" /> 是  
					<input type="radio" name="picGap" value="NO" :checked="checkTheSame(pluginData.picGap,'NO')" /> 否
				</div>
			</div>
		</div>
		<div class="yui_form_wrap">
			<p class="input_lable big">显示商品价格：</p>
			<div class="input_wrap">							
				<div class="form_one">
					<input type="radio" name="productShowPrice" value="YES" :checked="checkTheSame(pluginData.productShowPrice,'YES')" /> 是  
					<input type="radio" name="productShowPrice" value="NO" :checked="checkTheSame(pluginData.productShowPrice,'NO')" /> 否
				</div>
			</div>
		</div>

		<div v-if="pluginData.productShowType == 'CARD'">
			<div class="yui_form_wrap">
				<p class="input_lable big">显示商品名称：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<input type="radio" name="productShowName" value="YES" :checked="checkTheSame(pluginData.productShowName,'YES')" /> 是  
						<input type="radio" name="productShowName" value="NO" :checked="checkTheSame(pluginData.productShowName,'NO')" /> 否
					</div>
				</div>
			</div>
			<div class="yui_form_wrap">
				<p class="input_lable big">显示购买按钮：</p>
				<div class="input_wrap">							
					<div class="form_one">
						<input type="radio" name="productShowBuyBtn" value="YES" :checked="checkTheSame(pluginData.productShowBuyBtn,'YES')" /> 是  
						<input type="radio" name="productShowBuyBtn" value="NO" :checked="checkTheSame(pluginData.productShowBuyBtn,'NO')" /> 否
					</div>
				</div>
			</div>
		</div>

		<hr/>
		<div class="yui_form_wrap">
			<p class="input_lable big">添加商品：</p>
			<div class="input_wrap">
				<div v-for="item in pluginData.subPluginList" class="image_wrap float_left subPlugin_wrap drop_wrap drop_copy_wrap" :class="{current:item.pluginSelect}" :data-pluginUuid="item.plugInUuid">
					<i class="delete_image subPlugin_remove" :data-pluginUuid="item.plugInUuid" :data-subPluginId="item.plugInProductIdStr"></i>
					<div class="image_item complete" data-action="true" >
						<img class="image_view" :src="parseProductImage(item.picUrl)" />
					</div>
				</div>
				<div class="image_wrap add_product float_left"></div>
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
		name:"wProductForm",
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
	.add_product{
		background-image:url(../../libs/img/add_item.png);
		background-size:100% 100%;
		cursor: pointer;
	}
</style>