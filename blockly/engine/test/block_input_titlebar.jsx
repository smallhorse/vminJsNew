var React = require('react');

module.exports = React.createClass({

    render: function(){
        
        return <div className="blockly_popuphead">
                    <h3 className="popup-title model_title">
                        {this.props.showInfo}
                    </h3>
                </div>;
    }
});