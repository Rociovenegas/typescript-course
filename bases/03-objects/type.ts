(()=>{

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }
                                                               
    let flash: Hero = {
        name: 'Barry',
        age: 24,
        powers: ['super speed', 'time travel'],
    }



    let flash2: Hero = {
        name: 'Barry',
        age: 24,
        powers: ['super speed', 'time travel'],
    }


})();