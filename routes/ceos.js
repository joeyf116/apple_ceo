const express = require("express"),
    router = express.Router(),
    ceoModel = require("../models/ceoModel");

    router.get("/", async function(req,res,next){
        const executiveData = await ceoModel.getAll();
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

module.exports = router;