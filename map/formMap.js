export default {
	pluginList:[{
		key:"backgroundColor",
		mean:"背景色",
		type:"color"
	},{
		key:"backgroundImage",
		mean:"背景图片",
		type:"file"
	}],
	subPluginList:[{
		key:"type",
		mean:"类型",
		type:"radio",
		valueList:[{
			key:"TEXT",
			mean:"文本框"
		}]
	},{
		key:"title",
		mean:"标题",
		type:"text"
	},{
		key:"value",
		mean:"值",
		type:"text"
	}]
}