const db = require("./conn");

class ExecutiveList {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    static async getAll() {
        db.any('SELECT * FROM ceo').then(response => {
            console.log("Response: ", response);
            console.log('hello world');
        });
        try {
            const response = await(db.any(`SELECT * FROM ceo`));
            return response;

        } catch(error) {
            return error.message
        }
    }
}

module.exports = ExecutiveList;