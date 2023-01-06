class ninja{
    constructor (nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.fuerza = 3;
        this.velocidad = 5;        
        
    }
    drinkSake(){
        return "Este es un mensaje";
    }
}
class sensei extends ninja{
    constructor(sabiduria)
    {       

        super( );  
        this.sabiduria = sabiduria;
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;

    }

    speakWisdom(){
        const mensajSabiduria = super.drinkSake();
        console.log(mensajSabiduria);
    }

    mostrar(){
        console.log(`la salud ${this.salud} la fuerza ${this.fuerza} la velocidad ${this.velocidad} ${this.sabiduria} `);
    }
    
    }

    const senseiResul = new sensei ("Mesaje de sabiduria");
    senseiResul.speakWisdom();
    senseiResul.mostrar();


    
    

    
