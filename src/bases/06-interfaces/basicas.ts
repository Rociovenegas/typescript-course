(() => {

    // One major difference between type aliases vs interfaces
    // are that interfaces are open and type aliases are closed.
    // This means you can extend an interface by declaring it
    // a second time.

    interface Hero {
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



    let superman: Hero = {
        name: 'Clark',
        age: 60,
        powers: ['super'],
    }


})()