<template>
	<div :data-pluginUuid="pluginData.pluginUuid" class="plugin_wrap drop_wrap drop_copy_wrap" :class="parsePluginSelect(pluginData.pluginSelect)" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">
		<div class="showcase_wrap" :class="pluginData.picGap">
			<div v-if="pluginData.name" class="wrap_head">{{pluginData.name}}</div>
			<ul class="child_list showcase_list clearfix" :class="pluginData.subPluginType">
				<li v-for="item in pluginData.subPluginList" :data-pluginUuid="item.pluginUuid" class="showcase_item subPlugin_wrap drop_wrap drop_copy_wrap" :class="parsePluginSelect(item.pluginSelect)" >
					<div class="item_text_page">
						<div class="item_text_wrap">
							<p class="item_text_title font_16">{{praseShowcaseName(item.name)}}</p>
							<p class="item_text_subTitle font_14 color_warn">{{praseShowcaseSubName(item.subName)}}</p>
						</div>
					</div>
					<div class="item_image_page">
						<div class="item_image_wrap">
							<img class="item_image" :src="parseBannerImage(item.showPicUrl)" draggable="false" />
						</div>
					</div>
				</li>
	        </ul>
			<div v-if="pluginData.remark" class="wrap_foot">{{pluginData.remark}}</div>	
	    </div>
	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}

	methods["praseShowcaseName"] = function(name){
		if(name){
			return name;
		}else{
			return '惊！秒杀';
		}
	};

	methods["praseShowcaseSubName"] = function(name){
		if(name){
			return name;
		}else{
			return '1元起';
		}
	};

	export default {
		name:"wShowcase",
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
.showcase_wrap .wrap_head,.showcase_wrap .wrap_foot{
	padding:10px;
}
.showcase_wrap .child_list{
	position:relative;
}
.showcase_wrap .child_list .showcase_item{
	float:left;
}
.showcase_wrap .child_list .showcase_item .item_image_page{
	position:relative;
	padding-bottom:100%;
	height:0;
}
.showcase_wrap .child_list .showcase_item .item_image_page .item_image_wrap{
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
}
.showcase_wrap .child_list .showcase_item .item_image_page .item_image_wrap .item_image{
	width:100%;
	height:100%;
}
.showcase_wrap.RETAIN .child_list .showcase_item .item_image_page .item_image_wrap{
	top:1px;
	bottom:1px;
	left:1px;
	right:1px;
}
.showcase_wrap .child_list .showcase_item .item_text_page{
	display:none;
	position:relative;
	padding-bottom:50%;
	height:0;
}
.showcase_wrap .child_list .showcase_item .item_text_page .item_text_wrap{
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
}
.showcase_wrap .child_list .showcase_item .item_text_page .item_text_wrap .item_text_title{
	position:absolute;
	top:50%;
	left:4px;
	right:4px;
	margin-top: -18px;
	font-weight: bolder;  
    overflow: hidden;
    height:16px;
    line-height: 16px;
}
.showcase_wrap .child_list .showcase_item .item_text_page .item_text_wrap .item_text_subTitle{
	position:absolute;
	top:50%;
	left:4px;
	right:4px;
	margin-top:4px;
	font-weight: bold;
    overflow: hidden;
    height:14px;
    line-height: 14px;
}

.showcase_wrap .child_list.SHOWCASE_1 .showcase_item{
	width:50%;
}
.showcase_wrap .child_list.SHOWCASE_2 .showcase_item{
	width:33.33%;
}
.showcase_wrap .child_list.SHOWCASE_3 .showcase_item{
	width:25%;
}
.showcase_wrap .child_list.SHOWCASE_4 .showcase_item{
	width:33.33%;
}
.showcase_wrap .child_list.SHOWCASE_4 .showcase_item:first-child{
	width: 66.65%;
}
.showcase_wrap .child_list.SHOWCASE_5 .showcase_item{
	width:33.33%;
}
.showcase_wrap .child_list.SHOWCASE_5 .showcase_item:first-child{
	width: 66.65%;
}
.showcase_wrap .child_list.SHOWCASE_6 .showcase_item{
	width:50%;
}
.showcase_wrap .child_list.SHOWCASE_6 .showcase_item:first-child{
	width:185px;
	height:185px;
	position:absolute;
	top:50%;
	left:50%;
	margin-top:-92.5px;
	margin-left:-92.5px;
	z-index: 2;
	border-radius: 50%;
    overflow: hidden;
}
.showcase_wrap .child_list.SHOWCASE_7 .showcase_item{
	width:22.22%;
}
.showcase_wrap .child_list.SHOWCASE_7 .showcase_item:first-child{
	width:33.33%;
}
.showcase_wrap .child_list.SHOWCASE_7 .showcase_item .item_text_page{
	display:block;
}
.showcase_wrap .child_list.SHOWCASE_7 .showcase_item:first-child .item_text_page{
	display:none;
}
.showcase_wrap .child_list.SHOWCASE_8 .showcase_item{
	width:21.4%;
}
.showcase_wrap .child_list.SHOWCASE_8 .showcase_item:first-child,.showcase_wrap .child_list.SHOWCASE_8 .showcase_item:nth-child(2){
	width:28.6%;
}
.showcase_wrap .child_list.SHOWCASE_8 .showcase_item:first-child .item_text_page,.showcase_wrap .child_list.SHOWCASE_8 .showcase_item:nth-child(2) .item_text_page{
	display:block;
}
</style>