const pgp = require("pg-promise") ({
    query: e => {
        console.log('QUERY:', e.query);
    }
});

const options = {
    host: 'localhost',
    database: 'apple_ceo',
    user: 'joeyfitzpatrick'
};

const db = pgp(options);

module.exports = db;