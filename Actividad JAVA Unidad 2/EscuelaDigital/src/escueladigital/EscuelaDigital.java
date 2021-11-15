
package escueladigital;

import alumnos.Alumno;
import docente.Docente;


public class EscuelaDigital {

   
    public static void main(String[] args) {
      Docente docente1= new Docente(12,"Carla","Tabbia",21);
      Alumno alumno = new Alumno(14, "Sangra","Muñoz",32,10);
      Campus campus = new Campus(14,"Web");
      campus.setPassword("123456");
      Campus docente =new Campus(12,"Web");
      docente.setPassword("14245534");
        System.out.println(docente.ingresar(12, "14245534" ));
    }
    
}
