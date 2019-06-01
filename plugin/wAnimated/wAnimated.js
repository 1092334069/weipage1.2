import WAnimated from './wAnimated.vue';
import WAnimatedForm from './wAnimatedForm.vue';

WAnimated.install = function(Vue){
	Vue.component(WAnimated.name,WAnimated);
}

WAnimatedForm.install = function(Vue){
	Vue.component(WAnimatedForm.name,WAnimatedForm);
}

export default {
	WAnimated,
	WAnimatedForm
};