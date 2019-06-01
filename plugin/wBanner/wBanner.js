import WBanner from './wBanner.vue';
import WBannerForm from './wBannerForm.vue';
import WBannerSubForm from './WBannerSubForm.vue';

WBanner.install = function(Vue){
	Vue.component(WBanner.name,WBanner);
}

WBannerForm.install = function(Vue){
	Vue.component(WBannerForm.name,WBannerForm);
}

WBannerSubForm.install = function(Vue){
	Vue.component(WBannerSubForm.name,WBannerSubForm);
}

export default {
	WBanner,
	WBannerForm,
	WBannerSubForm
};