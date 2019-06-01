import WProduct from './wProduct.vue';
import WProductForm from './wProductForm.vue'

WProduct.install = function(Vue){
	Vue.component(WProduct.name,WProduct);
}

WProductForm.install = function(Vue){
	Vue.component(WProductForm.name,WProductForm);
}

export default {
	WProduct,
	WProductForm
};