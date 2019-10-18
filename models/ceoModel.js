const db = require("./conn");

class Executive {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    static async getAll() {
        db.any('SELECT * FROM ceo').then(response => {
            
        });
        try {
            const response = await(db.any(`SELECT * FROM ceo`));
            return response;

        } catch(error) {
            return error.message
        }
    }
    async addNewCeo() {
        try {
            const response = await db.result(`INSERT INTO ceo (name,year) VALUES ($1,$2);`, [this.name, this.year]);
            return response;

        } catch(error) {
            return error.message
        }
    }
}

module.exports = Executive;