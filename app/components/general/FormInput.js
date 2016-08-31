import React from 'react';
import ReactDOM from 'react-dom';

class FormInput extends React.Component {

    static get NAME() {
        return 'FormInput';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }
    constructor(props, context) {
        super(props, context);
        this.state = context.data[FormInput.NAME] || {};
    }

    shouldComponentUpdate() {
        return true;
    }
    render() {
        const {type, label, name, value, onKeyUp, onBlur, placeholder,onChange } = this.props;
        let inputType;

        var className = "form-group";
        if (this.props.hasError) {
            className += " has-error";
        }

        switch (type) {
            case "textarea":
                inputType = (
                  <textarea type={ type } className="form-control" name={ name.toLowerCase() } placeholder={ placeholder } defaultValue={ value } onKeyUp={ onKeyUp } onBlur={ onBlur }></textarea>
                );
                break;
            default:
                inputType = (
                  <input type={ type } className="form-control"
                    name={ name.toLowerCase() } placeholder={ placeholder }
                    defaultValue={ value } onKeyUp={ onKeyUp }
                    onBlur={ onBlur } onChange={ onChange }/>
                );
                break;
        }


        return (
          <div className={ className }>
              { label === "none" ? "" : <label htmlFor={ name.toLowerCase() } className="control-label">{ name }</label> }
              { inputType }
          </div>
        )

    }
}

FormInput.propTypes = {
    hasError: React.PropTypes.bool,
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    onKeyUp: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func
}

export default FormInput;
