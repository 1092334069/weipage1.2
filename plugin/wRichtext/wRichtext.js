import WRichtext from './wRichtext.vue';
import WRichtextForm from './wRichtextForm.vue';

WRichtext.install = function(Vue){
	Vue.component(WRichtext.name,WRichtext);
}

WRichtextForm.install = function(Vue){
	Vue.component(WRichtextForm.name,WRichtextForm);
}

export default {
	WRichtext,
	WRichtextForm
};