
package mi.primera.app;

import accesorios.Auto;


public class MiPrimeraApp {

   
    public static void main(String[] args) {
         int numero;
         String nombre;
       float promedio;
        boolean llueve = false;
        numero = 13;
        float resultado;
        resultado = numero + 19 ;
       promedio = (numero + 19) / 2;
        System.out.println("Hola soy el mensaje de la consola de mi app");
        System.out.println(resultado);
        System.out.println("El Primedio es :" + promedio);
        System.out.println(45 > 19 && 19 < 32);
        
        if(llueve == true){
            System.out.println("Usamos paraguas");
            
            
        }else{
            System.out.println("No necesitamos paraguas");
    }
        Juego jugador = new Juego(0,3,"Mario","Hongos","Martillo");
          Juego jugador2 = new Juego(0,3,"Juan","Hongos","Martillo");
          
        System.out.println("Mi nombre es " + jugador.personaje);
        System.out.println("Tengo: "+ jugador.vidas+ " vidas");
        System.out.println(jugador.mostrarSaludo());
        System.out.println(jugador2.mostrarSaludo());
        Auto miAuto= new Auto(250,5,"Azul","Deportivo","2021","god134");
        miAuto.setEncendido(false);
        System.out.println(miAuto.encender_auto());
        
    }
    
    
}
