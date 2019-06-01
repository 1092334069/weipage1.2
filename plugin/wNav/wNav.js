import WNav from './wNav.vue';
import WNavForm from './wNavForm.vue';
import WNavSubForm from './wNavSubForm.vue';

WNav.install = function(Vue){
	Vue.component(WNav.name,WNav);
}

WNavForm.install = function(Vue){
	Vue.component(WNavForm.name,WNavForm);
}

WNavSubForm.install = function(Vue){
	Vue.component(WNavSubForm.name,WNavSubForm);
}

export default {
	WNav,
	WNavForm,
	WNavSubForm
};