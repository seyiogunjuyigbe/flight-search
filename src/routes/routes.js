const express = require("express");
const router = express.Router();
const getFlightDetails = require ("../middlewares/flights");
router.get("/", (req,res)=>{res.render("index")})
router.get("/flights", getFlightDetails)
router.get("/results", (req,res)=>{res.render("results", {data:null})})
router.all("*", (req,res)=>{res.render("error", {errMessage:"Error... resource not found"})})
module.exports = router;