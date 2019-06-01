import WSearch from './wSearch.vue';
import WSearchForm from './wSearchForm.vue';
import WSearchSubForm from './wSearchSubForm.vue';

WSearch.install = function(Vue){
	Vue.component(WSearch.name,WSearch);
}

WSearchForm.install = function(Vue){
	Vue.component(WSearchForm.name,WSearchForm);
}

WSearchSubForm.install = function(Vue){
	Vue.component(WSearchSubForm.name,WSearchSubForm);
}

export default {
	WSearch,
	WSearchForm,
	WSearchSubForm
};