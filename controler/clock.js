/*
 * 倒计时插件
 * initTime 初始化时间（计时结束时间）
 * differ ** 再初始时间基础上叠加时间
 * */
	
	let clock=function(tempOption){
		this.initTime = undefined;
		this.callback = undefined;
		this.resultCallback = undefined;
		this.timeOutCallback = undefined;
		
		this.option = tempOption;
	};
	
	clock.prototype.init=function(){
		if(this.option){			
			if(this.option.initTime){
				//ios时间转换必须把所有-转成/
				while(this.option.initTime.indexOf("-") > -1){
					this.option.initTime = this.option.initTime.replace("-","/");
				}
				this.initTime = new Date(this.option.initTime);
			}
			if(this.option.differDay){
				let dayNum = this.option.differDay*24*60*60*1000;
				this.initTime = new Date(this.initTime.setTime(this.initTime.getTime()+dayNum));
			}
			if(this.option.differHour){
				let hourNum = this.option.differHour*60*60*1000;
				this.initTime = new Date(this.initTime.setTime(this.initTime.getTime()+hourNum));
			}
			if(this.option.differMinute){
				let minuteNum = this.option.differMinute*60*1000;
				this.initTime = new Date(this.initTime.setTime(this.initTime.getTime()+minuteNum));
			}
			if(this.option.differSecond){
				let secondNum = this.option.differSecond*1000;
				this.initTime = new Date(this.initTime.setTime(this.initTime.getTime()+secondNum));
			}
			if(this.option.callback){
				this.callback = this.option.callback;
			}	
			if(this.option.resultCallback){
				this.resultCallback = this.option.resultCallback;
			}
			if(this.option.timeOutCallback){
				this.timeOutCallback = this.option.timeOutCallback;
			}
		}
		
		this.timeCount();
	};	
	
	clock.prototype.dealTime=function(){
		let nowTime = new Date();
		let differTime = this.initTime.getTime() - nowTime.getTime();
		if(differTime < 0 && this.timeOutCallback){
			this.timeOutCallback();
			return true;
		}
		if(differTime < 1000 && this.resultCallback){
			this.resultCallback();
			return false;
		}
		let days = Math.floor(differTime/(24*3600*1000));
		
		let hoursTemp = differTime%(24*3600*1000);
		let hours = Math.floor(hoursTemp/(3600*1000));
		
		let minutesTemp = hoursTemp%(3600*1000);
		let minutes = Math.floor(minutesTemp/(60*1000));
		
		let secondsTemp = minutesTemp%(60*1000);
		let seconds = Math.round(secondsTemp/1000);
		
		//避免时间结束出现负数
		if(days < 0){
			days = hours = minutes = seconds = 0;
		}
		
		this.callback(days,hours,minutes,seconds);
		
		return false;
	}
	
	clock.prototype.timeCount=function(){	
		let _this = this;
		let t;
		
		let timeCount = function(){
			let isTimeOut = _this.dealTime();
			if(isTimeOut){												
				stopCount();
				return;
			}
			t = setTimeout(function(){
				timeCount();
			},1000);
		}				
		let stopCount = function(){
			clearTimeout(t);
		}
		
		timeCount();	
	}
	
	export default {
		clock:function(option){
			let tempclock = new clock(option);
			tempclock.init();		
			return tempclock;
		}
	}