(()=>{

    //const numbers0: (number | String | Boolean)[] = [1,2,3,4,5,6,7,8,9,10];
    const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

    numbers.push(11);
    //numbers.push(true);

    console.log(numbers);

    const cats = ['Jhonny','Gaby', 'Monga'];

    cats.forEach( v => console.log( v.toUpperCase() ) )


})();