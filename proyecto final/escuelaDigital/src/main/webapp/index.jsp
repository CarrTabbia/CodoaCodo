<%-- 
    Document   : index
    Created on : 14 dic. 2021, 14:28:25
    Author     : Usuario
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login</title>
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
         <link rel="stylesheet" href="./paraLogin.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet">
    
    </head>
    <body>
   <div class="container">
       
        
            <div class="row justify-content-center">
                <span class="border border-white justify-content-center mt-5">  </span>
                 <h1 class="text-center mt-5">LOG IN</h1>
                <form class="p-5 w-50 justify-content-center" action="AlumnosController?accion=ingresar" method="POST">
                    <div class="mb-3">
                        <label for="email" class="form-label">EMAIL</label>
                        <input type="text" class="form-control" id="email" name="email"/>
                    </div>
                    <div class="mb-3">
                        <label for="pass" class="form-label">CONTRASEÑA</label>
                        <input type="text" class="form-control" id="pass" name="pass"/>
                    </div>
                   <button type="submit" class="btn btn-secondary">Ingresar</button>
                   
                </form>
              <span class="border border-white justify-content-center mt-5">  </span>
            </div>
       
           </div>
    </body>
</html>
</html>
