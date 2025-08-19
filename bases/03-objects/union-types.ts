(()=>{
    
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }
        
    let myCustumVariable: (string | number | Hero) = 'Fernando';
    console.log( typeof myCustumVariable );

    myCustumVariable = 20;
    console.log( typeof myCustumVariable );

    myCustumVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Money']
    }
    console.log( typeof myCustumVariable );


})();