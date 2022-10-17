import { inquirerMenu, leerInput, listarLugares, pausa } from './helpers/inquirer.js';
import { Busquedas } from './models/busqueda.js';

const main = async() =>{
    const busquedas = new Busquedas();
    let opt;
    do{
        opt = await inquirerMenu();
        switch(opt){
            case 1:
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ');

                
                
                //Buscar lugar
                const lugares = await busquedas.ciudad(termino);
                //Seleccionar lugar
                const id = await listarLugares(lugares);
                if(id==='0') continue;

                const lugarSel = lugares.find(l => l.id=id)
                //Guardar en DB
                busquedas.agregarHistorial(lugarSel.nombre);
                busquedas.guardarDB();
                //Clima
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng)
                //console.log(clima)
                //Mostrar resultados
                console.clear();
                console.log('\n Informacion de la ciudad \n'.green);
                console.log('Ciudad:',lugarSel.nombre);
                console.log('Lat:',lugarSel.lat);
                console.log('Lng:',lugarSel.lng);
                console.log('Temperatura:',clima.temp);
                console.log('Minima:',clima.min);
                console.log('Maxima:',clima.max); 
                console.log('Como esta el clima?',clima.desc.green)
                await pausa();
            break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar,i) =>{
                    const idx = `${i+1}.`.green;
                    console.log(`${idx} ${lugar}`)
                });
                await pausa()
            break;
        }

    }while(opt!=0);
}

main();