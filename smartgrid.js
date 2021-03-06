const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '0px',
    container: {
        maxWidth: '1940px',
        fields: '20px'
    },
    breakPoints: {
        lg: {
            width: "1400px",
            fields: "20px"
        },
        md: {
            width: "1158px",
            fields: "15px"
        },
        sm: {
            width: "782px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "5px"
        }
    },
    oldSizeStyle: false
};

smartgrid('./src/less', settings);