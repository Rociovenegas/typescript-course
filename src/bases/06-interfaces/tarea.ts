(() => {

// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
    encender: boolean;
    velocidadMaxima: number;
    acelerar(): void;
}

const conducirBatimovil = ( auto: Auto ): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelerar(){
        console.log("tutututu.... max verstappen");
    }
}

conducirBatimovil(batimovil);

interface Guason {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
    
}
// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}


const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}

reir(guason);

// Cree una interfaz para la siguiente funcion
interface CiudadGotica {
    (ciudadanos: string[]): number;
}

const ciudadGotica: CiudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

let ciudadanos: string[] = ['random1', 'random2', 'Guason', 'Batman', 'Bruce Wayne']

console.log(ciudadGotica(ciudadanos));


// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Humano {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
    imprimirBio(): void;
}
class Persona implements Humano{
    constructor(   
        public nombre: string,
        public edad: number,
        public sexo: string,
        public estadoCivil: string,) {}

    imprimirBio(): void {
        console.log(`Esta persona se llama ${this.nombre}, tienen ${this.edad} años, estado civil ${this.estadoCivil}....`);
    }
}

let pepito = new Persona('Pepito', 23, 'Macho', 'Soltero');
pepito.imprimirBio();


})();