import WDialog from './wDialog.vue';
import WDialogForm from './wDialogForm.vue';
import WDialogSubForm from './wDialogSubForm.vue';
import WDialogThirdForm from './wDialogThirdForm.vue';

WDialog.install = function(Vue){
	Vue.component(WDialog.name,WDialog);
}

WDialogForm.install = function(Vue){
	Vue.component(WDialogForm.name,WDialogForm);
}

WDialogSubForm.install = function(Vue){
	Vue.component(WDialogSubForm.name,WDialogSubForm);
}

WDialogThirdForm.install = function(Vue){
	Vue.component(WDialogThirdForm.name,WDialogThirdForm);
}

export default {
	WDialog,
	WDialogForm,
	WDialogSubForm,
	WDialogThirdForm
};