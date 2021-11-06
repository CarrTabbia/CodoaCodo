let seccion = document.getElementById("section");
// seccion.style.visibility="hidden"
{/* <div> </div> */}
// agarra con section toda la parte de la pagina que va desp del nav y previa al footter
const comprarTickets =()=>{
    // le dice que cuando vaya al onclick haga.. 
    seccion.innerHTML=`
    
    <div class ="container">
         <div class= "row mt-3">
             <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
             <div class= "card-group"> 
             <div class= "card">
                 <div class="card-body border border-primary mr-2"> 
                    <h5 class="card-title text-center"> Estudiantes </h5>
                    <p class="card-text text-center fs-5">Tiene un descuento</p>
                    <p class="card-tittle text-center font-weight-bold fw-bold">80%</p>
                    <p class="card-text text-center fs-6"><small class"text-muted">*presentar documentación</small></p>
                    </div>
              </div>
              <div class= "card">
                 <div class="card-body border border-success mr-2 "> 
                    <h5 class="card-title text-center"> Trainee </h5>
                    <p class="card-text text-center fs-5">Tiene un descuento</p>
                    <p class="card-tittle text-center font-weight-bold fw-bold">50%</p>
                    <p class="card-text text-center fs-6"><small class"text-muted">*presentar documentación</small></p>
                    </div>
              </div>
              <div class= "card">
              <div class="card-body border border-warning mr-2 "> 
                 <h5 class="card-title text-center"> Junior </h5>
                 <p class="card-text text-center fs-5">Tiene un descuento</p>
                 <p class="card-tittle text-center font-weight-bold fw-bold">15%</p>
                 <p class="card-text text-center fs-6"><small class"text-muted">*presentar documentación</small></p>
                 </div>
           </div>
             </div>
          </div>
       </div> 
       <div class"row"> 
           <div class="col text-uppercase text-center mt-2">
                <small>Venta </small>
                 <h2>Valor de ticket $200</h2> 
              </div>
       </div>


       <div class"row">
            <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2"> 
           <form>
           
                 <div class= "form-row ">
                 <div class="d-flex justify-content-around">
                 <div class= "form-group col-5">
                    <input type="text" class ="form-control" placeholder="Nombre">
             </div>
                 <div class= "form-group col-5 ">
                 <input type="text" class ="form-control" placeholder="Apellido">
                 </div>
                  </div>
                  </div>

                  <div class= "form-row col-12 m-2 justify-content-around">
                 <input type="email" class ="form-control" placeholder="Correo">
            </div>
            <div class= "row">
            <div class="d-flex">
                    <div class= "form-group col-12 col-md-6 m-2">
                    <label for="">Cantidad</label>
                     <input id="cantidadEntrada" type="text" class ="form-control" placeholder=Cantidad">
           </div>
                    <div class= "form-group col-12 col-md-6">
                    <label for="">Categoria</label>
                     <select class"form-select" id="inputState">
                     <option value="estudiante" selected>Estudiante</option>
                     <option value="trainee">Trainee</option>
                     <option value="junior">Junior</option>
                     </select>
           </div>



           </div>
           
           </div>
            </div>
            <div class="form-row col-6 justify-content-center">
                <div class="form-group ">
                 <div id="totalCompra" class="alert alert-primary role="alert">
                  Total a pagar: $
                 </div> 
                </div>
            </div>
                  <div class="form-row d-flex" >
                  
                    <div class="form-group col">
                      <buton type="reset" onclick="limpiar()" class="btn btn-codo btn-block">Borrar<button>
            </div> 
                <div class="form-group col">
                 <buton type="button" id="botonCalcular" class="btn btn-codo btn-block" 
                 data-bs-toggle="modal" data-bs-target="#exampleModal"> Resumen<button>
            
                 </div> 
            </div>
           </form>
           </div>
        </div>
    </div>
    
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">ticket Numero : </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div  class="modal-body">
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary">Confirmar Compra</button>
      </div>
    </div>
  </div>
</div>
    `;
document.querySelector("#botonCalcular").addEventListener("click",()=>{
let inputs = document.querySelectorAll("input");
let descuento= document.querySelector("#inputState").value;
// para que aparecta el que es selector (barrita que abre de estudiante o junior)
let comprador ={
    // capura los elementos en un objeto, lo llama nombre apellido y pone el input capturado y [] para ver la posición del input capturado y el .value es para ver el VALOR que está ahi
    nombre:inputs[0].value,
    apellido:inputs[1].value,
    correo:inputs[2].value,
    cantidad:inputs[3].value,
};
 calcularValor(descuento,comprador.cantidad , comprador);

});
};
const calcularValor=(desc,cantEnt,comp)=>{
    let resultado = 0;
    let descuento = 0;
    let numT = document.querySelector("#exampleModalLabel");
    // caputuro el id del modal en tiket numero
   
    for (let index = 0; index < 8; index++) {
       numT.innerHTML+=crearNumTicket();
    }
    let modal = document.querySelector(".modal-body");
   

   
    if(desc == "estudiante"){
       resultado = (cantEnt * 200)*0.2;
       descuento = (cantEnt * 200)*0.8;
       alert.innerHTML="Total a pagar: $"
        alert.innerHTML+=resultado;
    }else if(desc=="trainee"){
        resultado = (cantEnt * 200)*0.5;
        descuento = (cantEnt * 200)*0.5;
        alert.innerHTML="Total a pagar: $"
        alert.innerHTML+=resultado;
    }else{
        resultado = (cantEnt * 200)*0.85;
        descuento = (cantEnt * 200)*0.15;
        alert.innerHTML="Total a pagar: $"
        alert.innerHTML+=resultado;
    }
    modal.innerHTML=`
   <p> Nombre : ${comp.nombre} </p>
    <p> Apellido : ${comp.apellido} </p>
    <p> Correo: ${comp.correo} </p>
   <p> Categoria: ${desc} </p>
   <p> Cantidad de Entradas: ${comp.cantidad} </p>
   <p> Descuento: ${descuento} </p>
    <p> Total a pagar: ${resultado} </p>
    
        `;
}
const crearNumTicket=()=>{
return  Math.floor (Math.random()*9);
  // math floor para que de numeros enteros sobre un math random  .el *9 para que de numeros del 0 al 9

};
const limpiar=()=>{
  let alert = document.querySelector("#totalCompra");
  alert.innerHTML="";
}