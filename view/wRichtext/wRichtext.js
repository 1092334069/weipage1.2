import WRichtext from './wRichtext.vue';

WRichtext.install = function(Vue){
	Vue.component(WRichtext.name,WRichtext);
}

export default {
	WRichtext
};