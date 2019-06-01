import animatedModel from './animatedModel.js';
import bannerModel from './bannerModel.js';
import buttonModel from './buttonModel.js';
import decorateModel from './decorateModel.js';
import dialogModel from './dialogModel.js';
import formModel from './formModel.js';
import navModel from './navModel.js';
import productModel from './productModel.js';
import richtextModel from './richTextModel.js';
import searchModel from './searchModel.js';
import showcaseModel from './showcaseModel.js';
import spaceModel from './spaceModel.js';
import timerModel from './timerModel.js';

let weipage = {
	title: "",
	descr: "",
	backgroundColor: "",
	picUrl: "",
	remark: "",
	weiPageId: "",
	pluginIndex:1000,
	pluginList: []
};

export default{
	WEIPAGE:weipage,
	ANIMATED:animatedModel,
	BANNER:bannerModel,
	BUTTON:buttonModel,
	DIALOG:dialogModel,
	DECORATE:decorateModel,
	FORM:formModel,
	NAV:navModel,
	PRODUCT:productModel,
	RICHTEXT:richtextModel,
	SEARCH:searchModel,
	SHOWCASE:showcaseModel,
	SPACE:spaceModel,
	TIMER:timerModel	
}