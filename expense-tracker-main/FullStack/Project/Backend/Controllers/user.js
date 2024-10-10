const user = require('../Model/user');

let count=1
async function addEntry(req,res){
    try{
        const {id,date,name,expense,earning} = req.body;
        
        await user.create({
                id:count,
                date:date,
                name:name,
                expense:expense,
                earning:earning
        });
        count++;
        res.json({
            msg:"Successful",
            success:true
        })
    }catch(err){
        console.log(err);        
        res.json({
            msg:"addEntry failed",
            success:false
        })
    }
}

async function showEntry(req,res){
    
    const result = await user.find();

    if(!result){
        console.log("Entry is not Found");
        res.json({
            msg:"Entry is not Found",
            success:false
        })    
    }
    res.json({
        entries:result,
        msg:"Successful",
        success:true
    })
}

async function editEntry(req,res){
    
    try{
        const id=req.params.id;
        const {date,name,expense,earning} = req.body;
        const result = await user.findOneAndUpdate({id},
            {
                name,
                date,
                expense,
                earning
            }
        )
        if(!result){
            res.json({
                msg:"not update",
                success:false
            })    
        }
        
        res.json({
            msg:"Successful",
            success:true
        })
    }catch(err){
        console.log(err);        
        res.json({
            msg:"editEntry failed",
            success:false
        })
    }
}

async function deleteEntry(req,res){
    
    try{
        const id=req.params.id;
        const result = await user.deleteOne({id});
        if(!result){
            res.json({
                msg:"not delete",
                success:false
            })    
        }
        
        res.json({
            msg:"deleted",
            success:true
        })
    }catch(err){
        console.log(err);        
        res.json({
            msg:"deleteEntry failed",
            success:false
        })
    }
}

module.exports = {
    addEntry,
    showEntry,
    editEntry,
    deleteEntry
}