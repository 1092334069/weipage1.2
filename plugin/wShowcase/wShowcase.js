import WShowcase from './wShowcase.vue';
import WShowcaseForm from './wShowcaseForm.vue';
import WShowcaseSubForm from './wShowcaseSubForm.vue';

WShowcase.install = function(Vue){
	Vue.component(WShowcase.name,WShowcase);
}

WShowcaseForm.install = function(Vue){
	Vue.component(WShowcaseForm.name,WShowcaseForm);
}

WShowcaseSubForm.install = function(Vue){
	Vue.component(WShowcaseSubForm.name,WShowcaseSubForm);
}

export default {
	WShowcase,
	WShowcaseForm,
	WShowcaseSubForm
};