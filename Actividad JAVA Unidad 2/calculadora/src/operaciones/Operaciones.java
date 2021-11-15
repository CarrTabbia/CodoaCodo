
package operaciones;


public class Operaciones {
    public float num,num2;
    public String op;
    public Operaciones(float num,float num2, String op){
        this.num=num;
        this.num=num2;
        this.op= op;
    }
    public float operación(){
        if(op.equals("suma")){
            return num + num2;
        }else if(op.equals("+")){
            return num + num2;
        }else if(op.equals("-")){
            return num - num2;
        }else if(op.equals("*")){
            return num * num2;
        }
        else if(op.equals("/")){
            return num + num2;
        }else { return 0;}
}
