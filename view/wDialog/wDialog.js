import WDialog from './wDialog.vue';

WDialog.install = function(Vue){
	Vue.component(WDialog.name,WDialog);
}

export default {
	WDialog
};