import WSpace from './wSpace.vue';
import WSpaceForm from './wSpaceForm.vue';

WSpace.install = function(Vue){
	Vue.component(WSpace.name,WSpace);
}

WSpaceForm.install = function(Vue){
	Vue.component(WSpaceForm.name,WSpaceForm);
}

export default {
	WSpace,
	WSpaceForm
};