
package clase2java;

public class Ingreso {
    private String nombre,edad,hobbie,editor,sistema;
    private String miNombre= "Carla";
    private String miEdad= "21";
   private String miHobbie= "Fotografia";
    private String miEditor= "HTML";
    private String miSistema= "Windows";

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    


    public String getEdad() {
        return edad;
    }

    public void setEdad(String edad) {
        this.edad = edad;
    }

    public String getHobbie() {
        return hobbie;
    }

    public void setHobbie(String hobbie) {
        this.hobbie = hobbie;
    }

   

    public String getEditor() {
        return editor;
    }

    public void setEditor(String editor) {
        this.editor = editor;
    }

    public String getSistema() {
        return sistema;
    }

    public void setSistema(String sistema) {
        this.sistema = sistema;
    }

   
    
    
    public boolean validar(){
          return nombre.equals(miNombre) && edad.equals(miEdad) && editor.equals(miEditor) && sistema.equals(miSistema)
                  && hobbie.equals(miHobbie);
                  /*  ;*/
    }

   
}
