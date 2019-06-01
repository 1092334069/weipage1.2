import WTimer from './wTimer.vue';
import WTimerForm from './wTimerForm.vue';
import WTimerSubForm from './wTimerSubForm.vue';
import WTimerThirdForm from './wTimerThirdForm.vue';

WTimer.install = function(Vue){
	Vue.component(WTimer.name,WTimer);
}

WTimerForm.install = function(Vue){
	Vue.component(WTimerForm.name,WTimerForm);
}

WTimerSubForm.install = function(Vue){
	Vue.component(WTimerSubForm.name,WTimerSubForm);
}

WTimerThirdForm.install = function(Vue){
	Vue.component(WTimerThirdForm.name,WTimerThirdForm);
}

export default {
	WTimer,
	WTimerForm,
	WTimerSubForm,
	WTimerThirdForm
};