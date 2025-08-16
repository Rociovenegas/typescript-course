(()=>{
    const batman: string = 'Batman';
    const greenLantern: string = "Green Lantern";
    const spederman: string = `Héroe: Sperderman`;

    console.log(`I'm ${ batman } `);
    console.log( batman.toUpperCase() );

    console.log( batman[10]?.toUpperCase() || 'Not present' );


})();