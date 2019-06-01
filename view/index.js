import WAnimated from './wAnimated/wAnimated.js';
import WButton from './wButton/wButton.js';
import WDialog from './wDialog/wDialog.js';
import WDecorate from './wDecorate/wDecorate.js';
import WNav from './wNav/wNav.js';
import WRichtext from './wRichtext/wRichtext.js';
import WSpace from './wSpace/wSpace.js';
import WTimer from './wTimer/wTimer.js';

let result = {};
let pluginList = [WAnimated,WButton,WDialog,WDecorate,WNav,WRichtext,WSpace,WTimer];

for(let i = 0;i < pluginList.length;i++){
	for(let key in pluginList[i]){
		result[key] = pluginList[i][key];
	}
}

for(let key in result){
	Vue.use(result[key]);
}

export default result;