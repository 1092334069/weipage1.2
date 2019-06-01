import WDecorate from './wDecorate.vue';

WDecorate.install = function(Vue){
	Vue.component(WDecorate.name,WDecorate);
}

export default {
	WDecorate
};