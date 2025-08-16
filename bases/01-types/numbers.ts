(()=>{
    
    let avengers: number = 10;
    console.log( avengers )
    const villians: number = 20;


    if( avengers < villians ) {
        console.log(`We're in trouble`);
    } else {
        console.log(`We're ok!`)
    }

    avengers = Number('5A');

    console.log({ avengers });

})();