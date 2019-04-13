var React = require('react');
var blocklyUtils = require('./../common/utils/blockly_utils');
var SensorConditionSwiftCode = require('./../common/condition/sensor_condition_swift_code');
var $ = require('jquery');
module.exports = React.createClass({
    getInitialState : function(){
        return {
            current: 2,//当前下标，和left定位有直接关系
            left: 0,
            direction: 0, //-1表示向左滑动，0表示不滑动，1表示向右滑动
            startX: 0,
            endX: 0,
            codeArray:''//swift code 代码数值
        }
    },
    componentDidMount: function() {
        var sensorConditionSwiftCode = new SensorConditionSwiftCode();
        sensorConditionSwiftCode.initConditionAndCode(['program_goto_phone_condition','program_goto_touch_condition']);
        var codeArray = sensorConditionSwiftCode.getDataCodeArray()
        for(var i= 0;i<codeArray.length;i++){
            var html = codeArray[i].htmlCode;
            var title = codeArray[i].htmlTitle||"branch title_"+i;
            var title_html = '<div class="title_name">'+title+'</div>';
            if(i==0){
                var slide_temp = '<li class="active" data-index='+i+'>'+title_html+html+'</li>';
                var bottom_li = '<li class="active" data-index='+i+'></li>';
            }else{
                var slide_temp = '<li data-index='+i+'>'+title_html+html+'</li>';
                var bottom_li = '<li data-index='+i+'></li>';
            }
            $(".slide_banner ul").append(slide_temp);
            if(codeArray.length>1){
                $(".slide_bottom ol").append(bottom_li);
            }
        }
        this.setState({
            codeArray: codeArray
        });
    },
    touchstart:function(e){
        // console.log("start");
        this.setState({
            startX: e.changedTouches[0].pageX
        });
        console.log("start======startX"+this.state.startX);
    },
    touchmove:function(e){
        // console.log("move======pageX"+e.changedTouches[0].pageX);
    },
    touchend:function(e){
        this.setState({
            endX: e.changedTouches[0].pageX
        });
        // console.log("end======endX"+this.state.endX);
        var endX = e.changedTouches[0].pageX;
        var startX = this.state.startX;
        var current = $(".slide_banner ul li.active").attr("data-index");
        var param = endX-startX ;
        if(Math.abs(param) < 60){//x 移动偏差60以内 
            console.log("no move");
        }else{
            if(endX-startX>60){
                console.log("right");
                current--;
                if(current<0){
                    current =this.state.codeArray.length-1;
                }
            }
            if(endX-startX<-60){
                console.log("left");
                current++;
                if(current>this.state.codeArray.length-1){
                    current =0;
                }
            }
            $(".slide_banner ul li, .slide_bottom ol li").removeClass('active');
            $('.slide_banner ul li[data-index='+ current +'], .slide_bottom ol li[data-index='+ current +']').addClass('active');
        }
    },
    render: function() {
        return <div className="code_content">
                    <div className="slide_banner" onTouchStart={this.touchstart} onTouchMove={this.touchmove} onTouchEnd={this.touchend} >
                        <ul>
                        </ul>
                    </div>
                    <div className="slide_bottom">
                        <ol>
                        </ol>
                    </div>
                </div>;
    }
});