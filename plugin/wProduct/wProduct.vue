<template>
	<div :data-pluginUuid="pluginData.pluginUuid" class="plugin_wrap drop_wrap drop_copy_wrap" :class="parsePluginSelect(pluginData.pluginSelect)" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">
		<div class="product_wrap" :class="parseProduct(pluginData.subPluginType,pluginData.productShowType,pluginData.productShowName,pluginData.productShowPrice,pluginData.productShowBuyBtn,pluginData.picGap)">
	        <ul class="child_list product_list clearfix">
	            <li v-for="item in pluginData.subPluginList" :data-pluginUuid="item.pluginUuid" class="product_item_box subPlugin_wrap drop_wrap drop_copy_wrap" :class="parsePluginSelect(item.pluginSelect)">
					<div class="product_item">
			            <a draggable="false" href="javascript:;" class="block_link">
			                <div class="item_image_out">	
								<div class="item_image_wrap">
			                    	<img :src="parseProductImage(item.picUrl)" alt="" class="item_image" draggable="false" />		                   			
			                	</div>
							</div>
			                <div class="item_text_wrap">
			                    <p class="product_name font_13">{{parseProductTitle(item.title)}}</p>
			                    <p class="product_price">
			                    	<span class="font_13 color_highlight">￥{{parseProductPrice(item.price)}}</span>&nbsp;
			                        <del v-if="item.originalPrice > 0" class="color_remark font_12">￥{{parseProductOriginalPrice(item.originalPrice)}}</del>
			                    </p>                   
			                </div>
			            </a>
					    <div class="product_button">购买</div>
					</div>
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

	methods["parseProduct"] = function(subPluginType,productShowType,productShowName,productShowPrice,productShowBuyBtn,picGap){
		return "subPluginType_" + subPluginType + " productShowType_" + productShowType + " productShowName_" + productShowName + " productShowPrice_" + productShowPrice + " productShowBuyBtn_" + productShowBuyBtn + " picGap_" + picGap;
	};

	methods["parseProductTitle"] = function(title){
		if(title){
			return title;
		}else{
			return '此处显示商品标题';
		}
	};

	methods["parseProductPrice"] = function(price){
		if(price){
			return price;
		}else{
			return 99;
		}
	};

	methods["parseProductOriginalPrice"] = function(price){
		if(price){
			return price;
		}else{
			return 999;
		}
	};


	export default {
		name:"wProduct",
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
	.product_wrap .product_button{
	    position:absolute;
	    right:4px;
	    bottom:8px;
	    color: #fff;
	    text-align: center;
	    padding:3px 6px;
	    border-radius: 2px;
	    border: 1px solid #249df3;
	    background-color: #249df3;
	}
	.product_wrap .commissionPrice{
	 	position:absolute;
		left:0;
		bottom:10px;
		background-color:#ff7466;
		font-size:12px;
		color:#fff;
		padding:3px 12px;
		border-radius:0 18px 18px 0;
	 } 
	 .product_item .item_image_wrap .item_image_mask{
	 	position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background-color: rgba(0,0,0,0.5);
	    text-align: center;
	    color: #fff;
	    font-size:24px;
	 }
	 .product_item .item_image_wrap .item_image_mask .item_image_mask_text{
	 	position: absolute;
	    top: 50%;
	    left: 0;
	    right: 0;
	    margin-top: -12px;
	 }
	 .product_wrap .item_text_wrap{
	 	min-height:15px;
	 }
	/* 商品列表样式 */
	.product_wrap.subPluginType_LIST .product_list .product_item_box .product_item{
	    position: relative;
	    margin: 10px 12px 0;
	    height: 130px;
	    background-color: #fff;
	}
	.product_wrap.subPluginType_LIST .product_list .product_item_box:nth-child(1) .product_item{
	    margin:0 12px;
	}
	.product_wrap.subPluginType_LIST .product_list .product_item .item_image_out{
	    position: absolute;
	    left: 5px;
	    top: 5px;
	    width: 120px;
	    height: 120px;
	    background-color: #FFFFFF;
	}
	.product_wrap.subPluginType_LIST .product_list .product_item .item_image_wrap{
	    position:relative;
	    width:100%;
	    height:100%;
	}
	.product_wrap.subPluginType_LIST .product_list .product_item .item_image{
	    width:100%;
	    height:100%;
	}
	.product_wrap.subPluginType_LIST .product_list .product_item .item_text_wrap{
	    position: relative;
	    height: 106px;
	    padding: 12px 10px 12px 135px;
	}
	.product_wrap.subPluginType_LIST .product_list .product_item .item_text_wrap .product_name{
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    word-break: break-all;
	    -webkit-line-clamp: 2;
	    overflow: hidden;
	    line-height:18px;
	}
	.product_wrap.subPluginType_LIST .product_list .product_item .item_text_wrap .product_price{
	    position: absolute;
	    bottom:16px;
	}
	/* 商品网格样式 */
	.product_wrap.subPluginType_GRID .product_list{
	    padding:6px 0;
	}
	.product_wrap.subPluginType_GRID .product_list .product_item_box{
		width:50%;
		float:left;
	}
	.product_wrap.subPluginType_GRID .product_list .product_item{
	    background-color:#fff;
	    position:relative;
	    margin:6px;
	}
	.product_wrap.subPluginType_GRID .product_list .product_item_box:nth-child(2n) .product_item{
		margin:6px 12px 6px 6px;
	}
	.product_wrap.subPluginType_GRID .product_list .product_item_box:nth-child(2n+1) .product_item{
		margin:6px 6px 6px 12px;
	}
	.product_wrap.subPluginType_GRID .product_list .product_item .item_image_out{
	    padding:5px;
	}
	.product_wrap.subPluginType_GRID .product_list .product_item .item_image_wrap{
	    position:relative;
	    width:100%;
	    padding-bottom:68.88%;
	}
	.product_wrap.subPluginType_GRID .product_list .product_item .item_image{
	    width:100%;
	    height:100%;
	    position: absolute;
	}
	.product_wrap.subPluginType_GRID .product_list .product_item .item_text_wrap{
	    position:relative;
	    padding:8px 4px 12px;
	}
	.product_wrap.subPluginType_GRID .product_list .product_item .item_text_wrap .product_name{
	    margin: 0 0 10px;
	    height: 27px;
	    line-height: 13px;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	    overflow: hidden;
	}
	/* 商品大图样式 */
	.product_wrap.subPluginType_BIG{
	    width: 100%;
	}
	.product_wrap.subPluginType_BIG .product_list{
	    width: 100%;
	}
	.product_wrap.subPluginType_BIG .product_list .product_item{
	    width:100%;
	    margin-bottom:3.225%;
	    background-color:#fff;
	    position:relative;
	}
	.product_wrap.subPluginType_BIG .product_list .product_item .item_image_out{
	    padding:5px;
	}
	.product_wrap.subPluginType_BIG .product_list .product_item .item_image_wrap{
	    position:relative;
	    width:100%;
	    overflow: hidden;
	}
	.product_wrap.subPluginType_BIG .product_list .product_item .item_image_wrap .item_image_content{
	  	position: absolute;
	  	left:0;
	  	right:0;
	  	bottom:0;
	  	top:0;
	}
	.product_wrap.subPluginType_BIG .product_list .product_item .item_image{
	    width:100%;
	    max-height:230px;
	}
	.product_wrap.subPluginType_BIG .product_list .product_item .item_text_wrap{
	    position:relative;
	    padding:8px 4px 13px;
	}
	.product_wrap.subPluginType_BIG .product_list .product_item .item_text_wrap .product_name{
	    margin: 0 0 10px;
	    height: 20px;
	    line-height: 22px;
	    width: 95%;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	/* 滑块样式 */
	 .product_wrap.subPluginType_SWAP{
	 	width:100%;
	 	overflow-x:auto;
	 	overflow-y:hidden;
		-webkit-overflow-scrolling: touch;
	 }
	 .product_wrap.subPluginType_SWAP .product_list{
	 	white-space: nowrap;
		display: inline-block;
	 }
	 .product_wrap.subPluginType_SWAP .product_list .product_item_box{
	 	width:138px;
	 	display:inline-block;
	 }
	 .product_wrap.subPluginType_SWAP .product_list .product_item_box .product_item{
	 	margin:6px;
	 	background-color:#fff;
	 	position:relative;
	 }
	 .product_wrap.subPluginType_SWAP .product_list .product_item .item_image_out{
	    padding:5px;
	}
	.product_wrap.subPluginType_SWAP .product_list .product_item .item_image_wrap{
	    position:relative;
	    width:100%;
	    padding-bottom:68.88%;
	}
	.product_wrap.subPluginType_SWAP .product_list .product_item .item_image{
	    width:100%;
	    height:100%;
	    position: absolute;
	}
	.product_wrap.subPluginType_SWAP .product_list .product_item .item_text_wrap{
	    position:relative;
	    padding:8px 4px 12px;
	}
	.product_wrap.subPluginType_SWAP .product_list .product_item .item_text_wrap .product_name{
	    margin: 0 0 10px;
	    height: 27px;
	    line-height: 13px;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	    white-space: normal;
	    overflow: hidden;
	}
	 /* 其它样式控制 */
	 .product_wrap.productShowBuyBtn_NO .product_button{
	 	display:none !important;
	 }
	 .product_wrap.productShowName_NO .product_name{
	 	display:none !important;
	 }
	 .product_wrap.productShowPrice_NO .product_price{
	 	display:none !important;
	 }
	 .product_wrap.productShowBuyBtn_NO.productShowName_NO.productShowPrice_NO .item_text_wrap{
	 	display:none !important;
	 }
	 .product_wrap.productShowType_SIMPLE.subPluginType_WATERFALL .item_text_wrap,.product_wrap.productShowType_SIMPLE.subPluginType_GRID .item_text_wrap,.product_wrap.productShowType_SIMPLE.subPluginType_BIG .item_text_wrap,.product_wrap.productShowType_SIMPLE.subPluginType_SWAP .item_text_wrap{
	 	position: absolute !important;
	    right: 10px;
	    bottom: 5px;
	    padding:0;
	 }
	 .product_wrap.productShowType.subPluginType_WATERFALL .item_text_wrap .product_price,.product_wrap.productShowType_SIMPLE.subPluginType_GRID .item_text_wrap .product_price,.product_wrap.productShowType_SIMPLE.subPluginType_BIG .item_text_wrap .product_price,.product_wrap.productShowType_SIMPLE.subPluginType_SWAP .item_text_wrap .product_price{
	 	text-align: right;	    
	    padding: 4px 6px 4px 10px;
	    border-radius: 2px;
	    background-color: rgba(0,0,0,0.5);
	 }
	 .product_wrap.productShowType_SIMPLE.subPluginType_WATERFALL .item_text_wrap .product_price span,.product_wrap.productShowType_SIMPLE.subPluginType_GRID .item_text_wrap .product_price span,.product_wrap.productShowType_SIMPLE.subPluginType_BIG .item_text_wrap .product_price span,.product_wrap.productShowType_SIMPLE.subPluginType_SWAP .item_text_wrap .product_price span{
	 	color: #fff !important;
	 }
	 .product_wrap.productShowType_SIMPLE .item_text_wrap .product_price del{
	 	display:none;
	 }
	 .product_wrap.productShowType_SIMPLE.subPluginType_WATERFALL .product_name,.product_wrap.productShowType_SIMPLE.subPluginType_GRID .product_name,.product_wrap.productShowType_SIMPLE.subPluginType_BIG .product_name,.product_wrap.productShowType_SIMPLE.subPluginType_SWAP .product_name{
	 	display:none !important;
	 }
	 .product_wrap.productShowType_SIMPLE.subPluginType_WATERFALL .product_button,.product_wrap.productShowType_SIMPLE.subPluginType_GRID .product_button,.product_wrap.productShowType_SIMPLE.subPluginType_BIG .product_button,.product_wrap.productShowType_SIMPLE.subPluginType_SWAP .product_button{
	 	display:none !important;
	 }
	 .product_wrap.picGap_NO .product_item{
	 	margin:0 !important;
	 }
</style>