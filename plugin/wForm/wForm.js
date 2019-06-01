import WForm from './wForm.vue';
import WFormForm from './wFormForm.vue';
import WFormSubForm from './wFormSubForm.vue';
import WFormThirdForm from './wFormThirdForm.vue';

WForm.install = function(Vue){
	Vue.component(WForm.name,WForm);
}

WFormForm.install = function(Vue){
	Vue.component(WFormForm.name,WFormForm);
}

WFormSubForm.install = function(Vue){
	Vue.component(WFormSubForm.name,WFormSubForm);
}

WFormThirdForm.install = function(Vue){
	Vue.component(WFormThirdForm.name,WFormThirdForm);
}

export default {
	WForm,
	WFormForm,
	WFormSubForm,
	WFormThirdForm
};