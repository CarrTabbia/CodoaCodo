<%-- 
    Document   : alumnos
    Created on : 27 nov. 2021, 21:41:58
    Author     : Usuario
--%>

<%@page import="modelo.AlumnosDAO"%>
<%@page import="java.util.List"%>
<%@page import="modelo.Alumnos"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Lista de ALumnos</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
         <link rel="stylesheet" href="./paraLogin.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet">
    </head>
    <body>
        <h1>Listas de alumnos</h1>
        <div class="container">
            <div class="row">
               
                <table class="table table-secondary">
                    <thead>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Modificar</th>
                        <th>Eliminar</th>
                   </thead>
                   
                       <%--traer, importar
los datos de la base de datos. se importa arriba distinto--%>
                       <%
                           List<Alumnos> resultado = null;
                           AlumnosDAO alumno = new AlumnosDAO();
                           resultado = alumno.listarAlumnos(); 
                           

    for (int a = 0; a < resultado.size(); a++ ){
    String ruta = "AlumnosController?accion=modificar&id=" + resultado.get(a).getId();
    String rutaE = "AlumnosController?accion=eliminar&id=" + resultado.get(a).getId();

                           %>
                           <tr>
                               <td><%= resultado.get(a).getId()%></td>
                               <td><%= resultado.get(a).getNombres()%></td>
                               <td><%= resultado.get(a).getApellidos()%></td>
                               <td><%= resultado.get(a).getEmail()%></td>
                               <td><%= resultado.get(a).getTelefono()%></td>
                               <td><a class="text-sucess" href=<%= ruta%>>X</a></td>
                               <td><a class="text-danger" href=<%= rutaE%>>X</a></td>
                               
                               
                               
                           </tr>
                           <%
                           }
%>                          
     <a class="btn btn-secondary w-25 m-3 justify-content-center" href="AlumnosController?accion=nuevo">Agregar Alumnos</a>               
                </table>

            </div>
            
        </div>
    </body>
</html>
