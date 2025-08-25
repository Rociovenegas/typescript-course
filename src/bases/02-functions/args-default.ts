(()=>{

    const fullName = ( firstName:string, upper: boolean = false, lastName?:string  ):string =>{
        
        if ( upper ) return  ` ${ firstName } ${ lastName || '' }`.toUpperCase();
        return ` ${ firstName } ${ lastName || '' } `; 

    }

    const name = fullName( 'Tony' );
    console.log({ name });

})();