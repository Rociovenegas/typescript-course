(()=>{
    const hero: string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activateBatsignal = ():string => {
        return 'bat signal activated';
    }

    console.log(typeof activateBatsignal);

    
})();