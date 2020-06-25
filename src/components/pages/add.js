import React, { useState } from "react";
import { connect } from "react-redux";
import { saveValues } from "../../store/actions";

const Add = props => {
    const [inputValues, setInputValues] = useState("");
    const handleInput = e => {
        setInputValues(e.target.value);
    };
    const handleSubmit = e => {
        const { saveInputValues } = props;
        e.preventDefault();
        saveInputValues(inputValues.split(','));
        setInputValues("");
    };
    return (
        <div className="page calculate">
            <h1>Add</h1>
            <form>
                <textarea onChange={handleInput} rows={6} value={inputValues} />
                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={!inputValues}
                >
                    ADD
                </button>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    saveInputValues: values => dispatch(saveValues(values))
});

export default connect(null, mapDispatchToProps)(Add);
