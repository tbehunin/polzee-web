const config = ({
    get: key => process.env[`REACT_APP_${key}`],
});

export default config;
