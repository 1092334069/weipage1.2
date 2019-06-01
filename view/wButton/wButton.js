import WButton from './wButton.vue';

WButton.install = function(Vue){
	Vue.component(WButton.name,WButton);
}

export default {
	WButton
};