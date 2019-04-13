/* @preserve
 *
 *
 * Copyright (c) 2016 UBT Company
 *
 *
 */

/**
 * toolbox_config.js version 1.0
 *
 *  toolbox_config feature
 *  菜单配置类
 *
 * feature toolbox_config feature
 *
 */
'use strict'
;(function() {
    function ToolboxConfig() {
        this.toolboxString = '';
        this.init();
    }

    ToolboxConfig.prototype.init = function() {
       this.toolboxString += '<xml id="toolbox" style="display: none">';
       this.toolboxString +='<category id="id_start" default="true">';
       this.toolboxString +='<block type="program_goto_start"></block>';
       this.toolboxString +='<block type="program_goto_phone_condition"></block>';
       this.toolboxString +='<block type="program_goto_touch_condition"></block>';
       this.toolboxString +='</category>';
       this.toolboxString +='<category id="id_actions">';
       this.toolboxString +='<block type="movement_servo_change_angle_multi"></block>';
       this.toolboxString +='<block type="movement_servo_rotate_circle"></block>';
       this.toolboxString +='<block type="movement_servo_status_read"></block>';
       this.toolboxString +='</category>';
       this.toolboxString +='</xml>';
    };

    ToolboxConfig.prototype.getToolboxString = function() {
        return this.toolboxString;
    };

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = ToolboxConfig;
    } else if (typeof define === 'function' && define.amd) {
        define(function () { return ToolboxConfig; });
    } else {
        this.ToolboxConfig = ToolboxConfig;
    }

}).call(this);