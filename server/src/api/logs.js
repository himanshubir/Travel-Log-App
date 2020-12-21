const { Router } = require('express');
const { ObjectId } = require('mongodb');
const router = Router();
const LogEntry = require("../models/LogEntry");
router.get('/', async(req, res, next) => {
    try {
        const entries = await LogEntry.find();

        res.json(entries);
    } catch (error) {
        next(error);
    }

});

router.post('/', async(req, res, next) => {
    try {
        const logEntry = new LogEntry(req.body);
        const createdEntry = await logEntry.save();
        res.json(createdEntry);

    } catch (error) {
        //console.log(error.constructor.name) //Good way of seeing what the error actually is
        if (error.name === 'ValidationError')
            res.status(422);
        next(error);
    }
});
router.delete('/', async(req, res, next )=>{
    try{
        const log = await LogEntry.findById(req.body._id);
        const response = await log.delete();
        res.json(response);
    }catch(error){
        next(error);
    }

})
module.exports = router;