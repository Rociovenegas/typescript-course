(()=>{
                                                              // getName?: Function          
    let flash: { name: string, age: number, powers: string[], getName?: ()=> string } = {
        name: 'Barry',
        age: 24,
        powers: ['super speed', 'time travel'],
    }

    if (flash.getName) console.log(flash.getName());  

    flash = {
        name: 'Clark',
        age: 60,
        powers: ['super strength'],
        getName():string{
            return this.name;
        }
        
    }

    console.log(flash.getName?.()); 

    let flash2: { name: string, age: number, powers: string[], getName?: ()=> string } = {
        name: 'Barry',
        age: 24,
        powers: ['super speed', 'time travel'],
    }


})();