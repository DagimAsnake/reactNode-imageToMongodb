const Item = require("../model/item.js");

module.exports.getItems = async(req,res)=>{
    try {
        const item =await Item.find()
       
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}


module.exports.createItem = async(req,res)=>{
    const item = new Item(req.body);
    try {
        await item.save();
        res.status(201).json({message: "Post created successfully!"});
    } catch (error) {
        
    }
}