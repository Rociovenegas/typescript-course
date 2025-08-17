"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let fuerzaSuperHeroes;
    (function (fuerzaSuperHeroes) {
        fuerzaSuperHeroes[fuerzaSuperHeroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        fuerzaSuperHeroes[fuerzaSuperHeroes["fuerzaBatman"] = 1] = "fuerzaBatman";
        fuerzaSuperHeroes[fuerzaSuperHeroes["fuerzaFlash"] = 5] = "fuerzaFlash";
        fuerzaSuperHeroes[fuerzaSuperHeroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(fuerzaSuperHeroes || (fuerzaSuperHeroes = {}));
    const fuerzaAcuaman = fuerzaSuperHeroes.fuerzaAcuaman;
    const fuerzaBatman = fuerzaSuperHeroes.fuerzaBatman;
    const fuerzaFlash = fuerzaSuperHeroes.fuerzaFlash;
    const fuerzaSuperman = fuerzaSuperHeroes.fuerzaSuperman;
    //console.log({ fuerzaSuperHeroes });
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    //const largoDelPoder:number = (poder.length);
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
