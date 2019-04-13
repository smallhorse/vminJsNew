/* @preserve
 * 
 * 
 * Copyright (c) 2016 UBT Company
 *
 * 
 */

/**
 * UbtBlocklyCourse.js version 1.0
 * 
 * course main js
 * 
 * feature init document
 * 
 */
'use strict'
;(function(){
    var interactiveRobot = require('./common/program/interactive_robot');
    var blocklyDatas = require('./service/blockly_datas');
    var ubtUtils = require('./common/utils/utils');
    var codeLanguage = require('./common/program/program_init');
    require('./../project/css/style.css');
    require('./../project/swift/swift');

    function UbtBlocklyCourse(params) {     
	   Blockly.Blocks.version = '1.0.0.0';
  }

  UbtBlocklyCourse.prototype.init = function() {
      interactiveRobot.init();
      var languageCode = blocklyDatas.getDataByKey('languageCode');
      if (!languageCode || languageCode =='')  {
          languageCode = 'zh-hans';
          blocklyDatas.setKeyData('languageCode',languageCode);
      }
      if(languageCode == "zh-hans" || languageCode == "zh-hant"){
          languageCode = 'zh-hans';
      }else{
          //languageCode = 'en';
      }
      // languageCode = 'en';
      blocklyDatas.setKeyData('languageCode',languageCode);
      this.loadLanguageResource(languageCode); 
      window.addEventListener('load', codeLanguage.initCourse);
      //infraredSensor.init();
  };

  /**
   * 载入国际化资源
   */
  UbtBlocklyCourse.prototype.loadLanguageResource = function(languageCode) {
      ubtUtils.loadScript('../project/msg/'+languageCode+'.js', function () {
          console.log('../project/msg/'+languageCode+'.js');
          ubtUtils.loadScript('../msg/js/'+languageCode+'.js',function() {
              console.log('../msg/js/'+languageCode+'.js');
              //等到载入国际化的语言后，才开始载入自定义的块
              // 引入自定义block块
              require('../project/blocks/blockSpace');
              //require('./index/index_react.js');
              //require('../project/ionicPopup/soundEffects/sound');
          });
      });
  };


  var ubtBlocklyCourse = new UbtBlocklyCourse();
  ubtBlocklyCourse.init();
}).call(this);