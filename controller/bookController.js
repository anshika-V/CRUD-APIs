const express = require('express');
var mongoose = require("mongoose");
var Book = require("../models/book");
const router = express.Router();

//Create
router.post('/addBook', (req, res) => {
    var book = new Book({
        name: req.body.name,
        author: req.body.author,
        rowNumber: req.body.rowNumber,
        colNumber: req.body.colNumber,
        shelfNumber: req.body.shelfNumber,
        available: req.body.available,
        updatedTime: req.body.updatedTime,
    });
    book.save()
    .then(item => {
        res.status(200).json({
            message : "item saved to database",
            book : item,
        });
    })
    .catch(err => {
        res.status(400).json({
            message : "unable to save to database",
            error : err,
        });
    });
})

//Read
router.get('/', (req,res) => {
    Book.find().sort({ "updatedTime": -1 })
    .then( data => {
        if(data){
            res.status(200).json({
                message : "Fetched all data",
                data : data,
            })
        }
        else {
            res.json({
                message : "No books available",
            })
        }
    })
    .catch(err => {
        res.status(400).json({
            message : "Unable to fetch data",
            error : err,
        })
    })
})

//Get book information by id
router.get('/:bookid', (req,res) => {
    Book.findById(req.params.bookid)
    .then(data => {
        if(data){
            res.status(200).json({
                message : "Fetched the data",
                data : data,
            })
        }
        else {
            res.json({
                message : "Data does not exist",
            })
        }
    })
    .catch(err => {
        res.status(400).json({
            message : "Unable to fetch data",
            error : err,
        })
    })
})

//Update
router.put('/:bookId', (req, res) => {
    Book.findByIdAndUpdate(req.params.bookId, {
        name: req.body.name,
        author: req.body.author,
        rowNumber: req.body.rowNumber,
        colNumber: req.body.colNumber,
        shelfNumber: req.body.shelfNumber,
        available: req.body.available,
        updatedTime: Date.now(),
    }, {new: true})
    .then( item => {
        if(item){
            res.status(200).json({
                message : "Updated the data",
                updatedData : item,
            })
        }
        else{
            res.json({
                message : "Data does not exist",
            })
        }
    })
    .catch(err => {
        res.status(400).json({
            message : "Unable to update the data",
            error : err,
        })
    })
})

//Delete
router.delete('/:bookId', (req, res) => {
    Book.findByIdAndRemove(req.params.bookId)
    .then( item => {
        if(item) {
            res.status(200).json({
                message : "item delete from database",
                book : item,
            });
        }
        else {
            res.json({
                message : "item does not exist in database",
            });
        }
    })
    .catch(err => {
        res.status(400).json({
            message : "Unable to delete data",
            error : err,
        })
    })
})

module.exports = router;