<template>
	<div :id="pluginData.identity" class="plugin_wrap" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">
		
		<div :style="parseTimerStyle(pluginData.isShow,pluginData.height)">
			<div class="timer_wrap">{{pluginData.showTime}}</div>
		</div>

	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';
	import clockJs from '../../controler/clock.js';	

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}

	methods["parseTimerStyle"] = function(isShow,height){
		if(isShow == 'YES'){
			return 'height:' + height + 'px;lineHeight:' + height + 'px';
		}else{
			return 'diaplay:none';
		}
	}

	methods["parseTimePlugin"] = function(pluginData,startIndex){
		let _this = this;
		for(let i = startIndex;i < pluginData.subPluginList.length;i++){
			let timeObj = pluginData.subPluginList[i];
			if(timeObj.time){
				let time = new Date(timeObj.time).getTime();
				let nowTime = new Date().getTime();
				if(time - nowTime >= 1000){
					clockJs.clock({
						initTime:timeObj.time,
						callback:function(day,hour,minute,second){
							let showTime = day + "天" + hour + "时" + minute + "分" + second + "秒";
							_this.changeWeipageData({id:pluginData.identity,key:"showTime",value:showTime});
						},
						timeOutCallback:function(){
							_this.parseTimePlugin(pluginData,i+1);
							_this.timeEvent(timeObj);														
						}
					});
					break;
				}else{
					_this.timeEvent(timeObj);
				}
			}
		}
	};

	methods["timeEvent"] = function(timeObj){
		for(let i = 0;i < timeObj.thirdPluginList.length;i++){
			this.changeWeipageData({
				id:timeObj.thirdPluginList[i].modelId,
				key:timeObj.thirdPluginList[i].modelKey,
				value:timeObj.thirdPluginList[i].modelValue
			});
		}
	}

	methods["changeWeipageData"] = function(option){
		this.$emit("changeweipagedata",option);
	}
	
	export default {
		name:"wTimer",
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
			this.parseTimePlugin(this.pluginData,0);
		},
		methods:methods		
	}
</script>

<style scoped>
	.timer_wrap{
		text-align:center;
	}
</style>