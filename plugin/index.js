import WPage from './wPage/wPage.js';

import WAnimated from './wAnimated/wAnimated.js';
import WBanner from './wBanner/wBanner.js';
import WButton from './wButton/wButton.js';
import WDialog from './wDialog/wDialog.js';
import WDecorate from './wDecorate/wDecorate.js';
import WForm from './wForm/wForm.js';
import WNav from './wNav/wNav.js';
import WProduct from './wProduct/wProduct.js';
import WRichtext from './wRichtext/wRichtext.js';
import WSearch from './wSearch/wSearch.js';
import WShowcase from './wShowcase/wShowcase.js';
import WSpace from './wSpace/wSpace.js';
import WTimer from './wTimer/wTimer.js';

let result = {};
let pluginList = [WPage,WAnimated,WBanner,WButton,WDialog,WDecorate,WForm,WNav,WProduct,WRichtext,WSearch,WShowcase,WSpace,WTimer];

for(let i = 0;i < pluginList.length;i++){
	for(let key in pluginList[i]){
		result[key] = pluginList[i][key];
	}
}

for(let key in result){
	Vue.use(result[key]);
}

export default result;