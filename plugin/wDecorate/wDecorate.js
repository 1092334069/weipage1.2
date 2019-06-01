import WDecorate from './wDecorate.vue';
import WDecorateForm from './wDecorateForm.vue';

WDecorate.install = function(Vue){
	Vue.component(WDecorate.name,WDecorate);
}

WDecorateForm.install = function(Vue){
	Vue.component(WDecorateForm.name,WDecorateForm);
}

export default {
	WDecorate,
	WDecorateForm
};