import WButton from './wButton.vue';
import WButtonForm from './wButtonForm.vue';
import WButtonSubForm from './wButtonSubForm.vue';
import WButtonThirdForm from './wButtonThirdForm.vue';
import WButtonFourthForm from './WButtonFourthForm.vue';

WButton.install = function(Vue){
	Vue.component(WButton.name,WButton);
}

WButtonForm.install = function(Vue){
	Vue.component(WButtonForm.name,WButtonForm);
}

WButtonSubForm.install = function(Vue){
	Vue.component(WButtonSubForm.name,WButtonSubForm);
}

WButtonThirdForm.install = function(Vue){
	Vue.component(WButtonThirdForm.name,WButtonThirdForm);
}

WButtonFourthForm.install = function(Vue){
	Vue.component(WButtonFourthForm.name,WButtonFourthForm);
}

export default {
	WButton,
	WButtonForm,
	WButtonSubForm,
	WButtonThirdForm,
	WButtonFourthForm
};