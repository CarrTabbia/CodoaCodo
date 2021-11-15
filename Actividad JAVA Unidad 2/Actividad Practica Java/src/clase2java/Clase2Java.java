
package clase2java;

import java.util.Scanner;


public class Clase2Java {

   
    public static void main(String[] args) {
       Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese su nombre");
        String nombre = entrada.nextLine();
         System.out.println("Ingrese su edad");
        String edad = entrada.nextLine();
        System.out.println("Ingrese su hobbie");
        String hobbie = entrada.nextLine();
        System.out.println("Ingrese su editor de codigo preferido");
        String editor = entrada.nextLine();
        System.out.println("Ingrese su sistema operativo");
        String sistema = entrada.nextLine();
        
        
        
        /*System.out.println("Ingrese su contraseña");
        String pass = entrada.nextLine(); */
        Ingreso ingresar = new Ingreso();
        ingresar.setNombre(nombre);
        ingresar.setEdad(edad);
        ingresar.setHobbie(hobbie);
        ingresar.setEditor(editor);
        ingresar.setSistema(sistema);
        
        /*ingresar.setPass(pass);*/
       if(ingresar.validar()){
           System.out.println("Bienvenido "+ ingresar.getNombre());
           System.out.println("Verifique que sus datos sean los correctos \n Edad:" + ingresar.getEdad()+
           "  \n Hobbie: " + ingresar.getHobbie() + " \n Editor de codigo: " + ingresar.getEditor() +
                   " \n Sistema operativo que utiliza: " + ingresar.getSistema() ); 
           
          
       }else{
           System.out.println("Los datos son incorrectos");
       }
               
    }
    
}
