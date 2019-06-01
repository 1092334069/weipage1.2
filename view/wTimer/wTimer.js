import WTimer from './wTimer.vue';

WTimer.install = function(Vue){
	Vue.component(WTimer.name,WTimer);
}

export default {
	WTimer
};