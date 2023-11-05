const { db } = require("./pgAdaptor");

db.one('select * from truisms')
    .then(res => {
        console.log(res);
    });
    