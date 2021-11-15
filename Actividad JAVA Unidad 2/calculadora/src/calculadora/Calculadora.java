
package calculadora;

import java.util.Scanner;
import operaciones.Operaciones;


public class Calculadora {

   
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese el primer numero");
        float num = entrada.nextFloat();
        System.out.println("Ingrese el segundo numero");
        float num2 = entrada.nextFloat();
         System.out.println("Ingrese la operacion a realizar\n pulsa \"+\" , \n \"-\", \n \"*\", \n \"/\", ");
        String op = entrada.next();
        Operaciones operacion = new Operaciones(num,num2,op);
        System.out.println("El resultado de la operación es: \n " + operacion.operación());
        
    }
    
}
