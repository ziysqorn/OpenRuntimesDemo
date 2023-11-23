module.exports=async(context)=>{
    return context.res.json({n: Math.random()});
}