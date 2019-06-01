<template>
	<div :id="pluginData.identity" class="plugin_wrap" :style="parsePluginStyle(pluginData.backgroundColor,pluginData.backgroundImage)">
		<div v-for="subPlugin in pluginData.subPluginList" class="dialog_wrap" v-if="parseStatus(pluginData,subPlugin)">
			<p v-for="item in subPlugin.thirdPluginList">
				<img v-if="item.type == 'IMAGE'" :src="parseFormData(item,pluginData.requestData)" />
				<span v-else-if="item.type == 'TEXT'">{{parseFormData(item,pluginData.requestData)}}</span>
			</p>				
		</div>
	</div>
</template>

<script>
	import viewMethodConfig from '../../config/viewMethodConfig.js';

	let methods = {};
	for(let key in viewMethodConfig){
		methods[key] = viewMethodConfig[key];
	}

	function conditionParseKeyValue(keyValueStr){	
		let symbol = "";
		let key = "";
		let keyList = "";
		let valueStr = "";
		let value;
		if(keyValueStr.indexOf(">=") >= 0){
			symbol = ">=";
		}else if(keyValueStr.indexOf("<=") >= 0){
			symbol = "<=";
		}else if(keyValueStr.indexOf("!=") >= 0){
			symbol = "!=";
		}else if(keyValueStr.indexOf(">") >= 0){
			symbol = ">";
		}else if(keyValueStr.indexOf("<") >= 0){
			symbol = "<";
		}else{
			symbol = "==";
		}
		let symbolIndex = keyValueStr.indexOf(symbol);
		if(symbolIndex > 0){
			key = keyValueStr.substring(0,symbolIndex);
			valueStr = keyValueStr.substring(symbolIndex + symbol.length);
		}else if(symbolIndex == 0){
			valueStr = keyValueStr.substring(symbolIndex + symbol.length);
		}else{
			valueStr = keyValueStr;
		}
		if(isNaN(Number(valueStr))){
			value = valueStr.replace(/'/g,"").replace(/"/g,"");
		}else{
			value = Number(valueStr);
		}
		keyList = key.split(".");
		return {
			symbol:symbol,
			keyList:keyList,
			value:value
		}
	}

	function conditionParseResult(condition){
		let operationList = [];
		let symbolList = [];
		let tempList = condition.split("&&");
		for(let i = 0;i < tempList.length;i++){
			if(i > 0){
				symbolList.push("&&");
			}
			let temp2List = tempList[i].split("||");
			for(let j = 0;j < temp2List.length;j++){
				operationList.push(conditionParseKeyValue(temp2List[j]));
				if(j > 0){
					symbolList.push("||");
				}			
			}	
		}
		return {
			operationList:operationList,
			symbolList:symbolList
		}
	}

	function getRequestKeyData(keyList,requestData){
		let result = JSON.parse(JSON.stringify(requestData));
		for(let i = 0;i < keyList.length;i++){
			if(keyList[i]){
				result = result[keyList[i]];
			}
		}
		return result;
	}

	function checkJudgeList(operationList,requestData){
		let resultList = [];
		for(let i = 0;i < operationList.length;i++){
			let keyValue = getRequestKeyData(operationList[i].keyList,requestData);
			switch(operationList[i].symbol){
				case '>=':keyValue >= operationList[i].value?resultList.push(true):resultList.push(false);break;
				case '<=':keyValue <= operationList[i].value?resultList.push(true):resultList.push(false);break;
				case '!=':keyValue != operationList[i].value?resultList.push(true):resultList.push(false);break;
				case '>':keyValue > operationList[i].value?resultList.push(true):resultList.push(false);break;
				case '<':keyValue < operationList[i].value?resultList.push(true):resultList.push(false);break;
				default:keyValue == operationList[i].value?resultList.push(true):resultList.push(false);break;
			}
		}
		return resultList;
	}

	function conditionOperation(condition,requestData){
		if(!condition || !requestData){
			return false;
		}
		let result = true;
		let conditionRes = conditionParseResult(condition);
		let judgeList = checkJudgeList(conditionRes.operationList,requestData);
		for(let i = 0;i < judgeList.length;i++){
			if(i == 0){
				result = judgeList[i];
			}else if(conditionRes.symbolList[i]){
				switch(conditionRes.symbolList[i]){
					case "&&": result = result && judgeList[i];break;
					case "||": result = result || judgeList[i];break;
				}
			}
		}
		return result;
	}

	methods["parseStatus"] = function(pluginData,subPlugin){
		if(pluginData.unForeach || pluginData.isOpen == 'NO'){
			return false;
		}

		if(subPlugin.checkStatus == 'YES'){
			if(conditionOperation(subPlugin.condition,pluginData.requestData)){
				pluginData["unForeach"] = true;
				return true;
			}else{
				return false;
			}
		}else{
			pluginData["unForeach"] = true; 
			return true;
		}		
	}

	methods["parseFormData"] = function(thirdPlugin,requestData){
		if(thirdPlugin.key){
			let keyList = thirdPlugin.key.split(".");
			let temp = JSON.parse(JSON.stringify(requestData));
			for(let i = 0;i < keyList.length;i++){
				temp = temp[keyList[i]];
			}
			return temp;
		}else{
			return thirdPlugin.value;
		}
	}

	export default {
		name:"wDialog",
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
	.plugin_wrap{
		position:absolute;
		left:50%;
		top:50%;
		width:240px;
		transform:translate(-50%,-50%);
	}
	.dialog_wrap{
		text-align:center;
		padding:10px;
	}
	.dialog_wrap p{
		padding:8px;
	}
	.dialog_wrap img{
		width:160px;
	}
</style>