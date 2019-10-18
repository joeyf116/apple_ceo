const express = require("express"),
    router = express.Router(),
    ExecutiveModel = require("../models/ceoModel");

    router.get("/", async function(req,res,next){
        const executiveData = await ExecutiveModel.getAll();
        console.log(executiveData);

        res.status(200).render('template', {
        locals: {
            title: 'Apple Ceo\'s',
            data: executiveData
        },
        partials: {
            partial: 'partial-ceos'
        }
    });
});

router.post("/add", async (req,res) => {
    const { ceo_name, ceo_year } = req.body;
    const executiveInstance = new ExecutiveModel(ceo_name, ceo_year);
    const executive = await executiveInstance.addNewCeo();
    

    if(executive.rowCount !== 1) {
        res.sendStatus(500)
    } else {
        res.redirect('/ceos')
    }
})

module.exports = router;