<template>
	<div :id="pluginData.identity" class="plugin_wrap" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">
		<div v-if="pluginData.subPluginType == 'TEXT'" class="nav_wrap">
	        <ul class="nav_list child_list font_14">
	            <li v-for="item in pluginData.subPluginList" :data-pluginUuid="item.pluginUuid" class="nav_item subPlugin_wrap" :class="parsePluginSelect(item.pluginSelect)" >
	            	<a draggable="false" :href="item.linkUrl" class="block_link">{{parseNavName(item.name)}}</a>
	        	</li>
	        </ul>
	    </div>
	    <div v-else-if="pluginData.subPluginType == 'IMAGE'" class="nav_picture_wrap">
	        <ul class="nav_list child_list font_14">
	            <li v-for="item in pluginData.subPluginList" :data-pluginUuid="item.pluginUuid" class="nav_item subPlugin_wrap" :class="parsePluginSelect(item.pluginSelect)" >
		            <a draggable="false" :href="item.linkUrl" class="block_link">
						<div class="nav_picture_page">
							<img :src="parseNavPic(item.picUrl)" alt="" class="item_image" draggable="false" />
						</div>
						<p class="nav_picture_text">{{parseNavName(item.name)}}</p>
					</a>
		        </li>
	        </ul>
	    </div>
	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}

	methods["parseNavName"] = function(name){
		if(name){
		   return name;
	   	}else{
		   return '导航';
	   	}
	};

	methods["parseNavPic"] = function(picUrl){
		if(picUrl){
			return picUrl;
		}else{
			return './libs/img/icon_nav_addpic.png';
		}
	};

	export default {
		name:"wNav",
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
		created:function(){
			
		},
		methods:methods		
	}
</script>

<style scoped>
	.nav_wrap .nav_list{
	   display: flex;
	   padding: 7px 0;
	   justify-content: space-around;
	}
	.nav_wrap .nav_list .nav_item{
	    text-align: center;
	    line-height: 27px;
	    border-radius: 27px;
	    background-color:#fff;
	    padding: 0 20px;
	}
	.nav_picture_wrap .nav_list{
	    display: flex;
	    justify-content: space-around;
	}
	.nav_picture_wrap .nav_list .nav_item{
	    text-align: center;
	    padding: 7.5px 0;
	}
	.nav_picture_wrap .nav_list .nav_item .nav_picture_page{
	    width: 52px;
	    height: 52px;
	    border-radius: 26px;
	    background-color: #f8f8f8;
	    margin: auto;
	    overflow: hidden;
	}
	.nav_picture_wrap .nav_list .nav_item .nav_picture_page .item_image{
	    width:100%;
	    height:100%;
	}
	.nav_picture_wrap .nav_list .nav_item .nav_picture_text{
	    padding-top: 7px;
	    color: #333;
	    font-size: 14px;
	}
	.nav_picture_wrap .nav_list .nav_item.current .nav_picture_page .item_image{
		background-color: rgba(35,156,243,0.2);
	}
</style>