const getResult = (values) => {
    return values.map((v) => Number(v)).reduce((a, b) => a + b, 0);
}

export const saveValues = values => {
    return(
        {
            type: "SAVE_RESULT",
            payload: {
                values: values,
                result: getResult(values),
            }
        }
    );
};
