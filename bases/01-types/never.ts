(()=>{
    
    const abc = ( msg: string ):never => {
        throw new Error(msg);
        
    }
    
    console.log(abc('test'));
})();