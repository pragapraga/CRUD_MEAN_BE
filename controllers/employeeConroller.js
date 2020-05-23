const express = require('express');
var router = express.Router();

var { Employee } = require('../models/employee');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/list',(req,res) => {
    Employee.find((err, document)=>{
        if(err){
            console.log('Error is Retriving Employees ' + err)
        }
        else{
            res.send(document);
        }
    });
});

router.get('/:id',(req,res) => {

    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Records found with ID + ${req.params.id}`)
    
    Employee.findById(req.params.id,(err, document)=>{
        if(err){
            console.log('Error is Retriving Employee ' + err)
        }
        else{
            res.send(document);
        }
    });
});


router.put('/:id',(req,res) => {

    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Records found with ID + ${req.params.id}`)
    
        var emp = {
            name : req.body.name,
            position : req.body.position,
            office : req.body.office,
            salary : req.body.salary
         };
    Employee.findByIdAndUpdate(req.params.id, {$set : emp}, { new :true },(err, document)=>{
        if(err){
            console.log('Error is Retriving Employee ' + err)
        }
        else{
            res.send(document);
        }
    });
});

router.post('/',(req,res) =>{
 var emp = new Employee({
    name : req.body.name,
    position : req.body.position,
    office : req.body.office,
    salary : req.body.salary
 });

 emp.save((err,document) => {
     if(err){
         console.log('Unable to Save the Employee' + err);
     }
     else{
         res.send(document);
         console.log('Successfully Inserted a record ' + req.body.name);
     }
 });
});


router.delete('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Records found with ID + ${req.params.id}`)
    
    Employee.findByIdAndRemove(req.params.id,(err, document)=>{
        if(err){
            console.log('Error is Deleting Employee ' + err)
        }
        else{
            res.send(document);
        }
    });
});


module.exports = router;