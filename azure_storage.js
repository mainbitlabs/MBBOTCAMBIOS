//Instalar: npm install azure-storage
//Paquetes:
var azure = require('azure-storage');

//Crear conexión:
var azure2 = require('./keys_azure'); //Importación de llaves
var tableSvc = azure.createTableService(azure2.myaccount, azure2.myaccesskey);

//JSON base para manipular la información:
var task = {
    PartitionKey: { '_': '' },
    RowKey: { '_': '' },
    Timestamp: { '_': '' },
    Area: { '_': '' },
    Baja: { '_': '' },
    Borrado: { '_': '' },
    Check: { '_': '' },
    Descripcion: { '_': '' },
    Fecha_Fin: { '_': '' },
    Fecha_ini: { '_': '' },
    HojaDeServicio: { '_': '' },
    Inmueble: { '_': '' },
    Localidad: { '_': '' },
    NombreEnlace: { '_': '' },
    NombreUsuario: { '_': '' },
    Pospuesto: { '_': '' },
    Proyecto: { '_': '' },
    Resguardo: { '_': '' },
    SerieBorrada: { '_': '' },
    Servicio: { '_': '' },
    Status: { '_': '' },
    No_Fact: { '_': '' },
    Fecha_Fact: { '_': '' },
};

//JSON base para eliminar un row:
var taskDelete = {
    PartitionKey: { '_': 'hometasks' },
    RowKey: { '_': '1' }
};

//Variables para realizar una busqueda:
var tablaUsar = "botdyesatb01"
var partitionKeyBusqueda = "";
var rowKeyBusqueda = "";

//Variable para almacenar el estado del trabajo:
var stringIF = "";

//Variables para almacenar la informacion encontrada:
var partitionKeyEn = "";
var rowKeyEn = "";
var timestampEn = "";
var areaEn = "";
var bajaEn = "";
var borradoEn = "";
var checkEn = "";
var descripcionEn = "";
var fecha_FinEn = "";
var fecha_iniEn = "";
var hojaDeServicioEn = "";
var inmuebleEn = "";
var localidadEn = "";
var nombreEnlaceEn = "";
var nombreUsuarioEn = "";
var pospuestoEn = "";
var proyectoEn = "";
var resguardoEn = "";
var serieBorradaEn = "";
var servicioEn = "";
var statusEn = "";
var no_FactEn = "";
var fecha_FactEn = "";

//Variable para amacenar el nombre del nuevo PartitionKey que el usuario colóque:
var newPatitionKey = "";



//Consulta de entidad:
function consultarEntidad() {
    partitionKeyBusqueda = document.getElementById("partitionKeyBusqueda").value;
    rowKeyBusqueda = document.getElementById("rowKeyBusqueda").value;
    tableSvc.retrieveEntity(`${tablaUsar}`, `${partitionKeyBusqueda}`, `${rowKeyBusqueda}`, function(error, result, response) {
        if (!error) {
            //Se obtiene la información en un json valor por valor en caso de no existir alguno:
            task['PartitionKey']['_'] = result['PartitionKey']['_']; // 1
            task['RowKey']['_'] = result['RowKey']['_']; //2
            task['Timestamp']['_'] = result['Timestamp']['_']; //3
            //-----------4
            if (result['Area'] == undefined) {
                task['Area']['_'] = "";
            } else {
                task['Area']['_'] = result['Area']['_'];
            }
            //-----------5
            if (result['Baja'] == undefined) {
                task['Baja']['_'] = "";
            } else {
                task['Baja']['_'] = result['Baja']['_'];
            }
            //-----------6
            if (result['Borrado'] == undefined) {
                task['Borrado']['_'] = "";
            } else {
                task['Borrado']['_'] = result['Borrado']['_'];
            }
            //-----------7
            if (result['Check'] == undefined) {
                task['Check']['_'] = "";
            } else {
                task['Check']['_'] = result['Check']['_'];
            }
            //-----------8
            if (result['Descripcion'] == undefined) {
                task['Descripcion']['_'] = "";
            } else {
                task['Descripcion']['_'] = result['Descripcion']['_'];
            }
            //-----------9
            if (result['Fecha_Fin'] == undefined) {
                task['Fecha_Fin']['_'] = "";
            } else {
                task['Fecha_Fin']['_'] = result['Fecha_Fin']['_'];
            }
            //-----------10
            if (result['Fecha_ini'] == undefined) {
                task['Fecha_ini']['_'] = "";
            } else {
                task['Fecha_ini']['_'] = result['Fecha_ini']['_'];
            }
            //-----------11
            if (result['HojaDeServicio'] == undefined) {
                task['HojaDeServicio']['_'] = "";
            } else {
                task['HojaDeServicio']['_'] = result['HojaDeServicio']['_'];
            }
            //-----------12
            if (result['Inmueble'] == undefined) {
                task['Inmueble']['_'] = "";
            } else {
                task['Inmueble']['_'] = result['Inmueble']['_'];
            }
            //-----------13
            if (result['Localidad'] == undefined) {
                task['Localidad']['_'] = "";
            } else {
                task['Localidad']['_'] = result['Localidad']['_'];
            }
            //-----------14
            if (result['NombreEnlace'] == undefined) {
                task['NombreEnlace']['_'] = "";
            } else {
                task['NombreEnlace']['_'] = result['NombreEnlace']['_'];
            }
            //-----------15
            if (result['NombreUsuario'] == undefined) {
                task['NombreUsuario']['_'] = "";
            } else {
                task['NombreUsuario']['_'] = result['NombreUsuario']['_'];
            }
            //-----------16
            if (result['Pospuesto'] == undefined) {
                task['Pospuesto']['_'] = "";
            } else {
                task['Pospuesto']['_'] = result['Pospuesto']['_'];
            }
            //-----------17
            if (result['Proyecto'] == undefined) {
                task['Proyecto']['_'] = "";
            } else {
                task['Proyecto']['_'] = result['Proyecto']['_'];
            }
            //-----------18
            if (result['Resguardo'] == undefined) {
                task['Resguardo']['_'] = "";
            } else {
                task['Resguardo']['_'] = result['Resguardo']['_'];
            }
            //-----------19
            if (result['SerieBorrada'] == undefined) {
                task['SerieBorrada']['_'] = "";
            } else {
                task['SerieBorrada']['_'] = result['SerieBorrada']['_'];
            }
            //-----------20
            if (result['Servicio'] == undefined) {
                task['Servicio']['_'] = "";
            } else {
                task['Servicio']['_'] = result['Servicio']['_'];
            }
            //-----------21
            if (result['Status'] == undefined) {
                task['Status']['_'] = "";
            } else {
                task['Status']['_'] = result['Status']['_'];
            }
            //-----------22
            if (result['No_Fact'] == undefined) {
                task['No_Fact']['_'] = "";
            } else {
                task['No_Fact']['_'] = result['No_Fact']['_'];
            }
            //-----------23
            if (result['Fecha_Fact'] == undefined) {
                task['Fecha_Fact']['_'] = "";
            } else {
                task['Fecha_Fact']['_'] = result['Fecha_Fact']['_'];
            }

            //Se extrae la informacion del json en variables:
            partitionKeyEn = task['PartitionKey']['_'];
            rowKeyEn = task['RowKey']['_'];
            timestampEn = task['Timestamp']['_'];
            areaEn = task['Area']['_'];
            bajaEn = task['Baja']['_'];
            borradoEn = task['Borrado']['_'];
            checkEn = task['Check']['_'];
            descripcionEn = task['Descripcion']['_'];
            fecha_FinEn = task['Fecha_Fin']['_'];
            fecha_iniEn = task['Fecha_ini']['_'];
            hojaDeServicioEn = task['HojaDeServicio']['_'];
            inmuebleEn = task['Inmueble']['_'];
            localidadEn = task['Localidad']['_'];
            nombreEnlaceEn = task['NombreEnlace']['_'];
            nombreUsuarioEn = task['NombreUsuario']['_'];
            pospuestoEn = task['Pospuesto']['_'];
            proyectoEn = task['Proyecto']['_'];
            resguardoEn = task['Resguardo']['_'];
            serieBorradaEn = task['SerieBorrada']['_'];
            servicioEn = task['Servicio']['_'];
            statusEn = task['Status']['_'];
            no_FactEn = task['No_Fact']['_'];
            fecha_FactEn = task['Fecha_Fact']['_'];

            //Se le da información al JSON que eliminara el row en caso de necesitar un cambio de PartitionKey:
            taskDelete['PartitionKey']['_'] = task['PartitionKey']['_'];
            taskDelete['RowKey']['_'] = task['RowKey']['_'];

            //Se limpa la información vieja de la ventana HTML:
            document.getElementById("partitionKeyEn").value = partitionKeyEn;
            document.getElementById("rowKeyEn").value = rowKeyEn;
            document.getElementById("timestampEn").value = timestampEn;
            document.getElementById("areaEn").value = areaEn;
            document.getElementById("bajaEn").value = bajaEn;
            document.getElementById("borradoEn").value = borradoEn;
            document.getElementById("checkEn").value = checkEn;
            document.getElementById("descripcionEn").value = descripcionEn;
            document.getElementById("fechafinEn").value = fecha_FinEn;
            document.getElementById("fechainiEn").value = fecha_iniEn;
            document.getElementById("hojadeservicioEn").value = hojaDeServicioEn;
            document.getElementById("inmuebleEn").value = inmuebleEn;
            document.getElementById("localidadEn").value = localidadEn;
            document.getElementById("nombreenlaceEn").value = nombreEnlaceEn;
            document.getElementById("nombreusuarioEn").value = nombreUsuarioEn;
            document.getElementById("pospuestoEn").value = pospuestoEn;
            document.getElementById("proyectoEn").value = proyectoEn;
            document.getElementById("resguardoEn").value = resguardoEn;
            document.getElementById("serieborradaEn").value = serieBorradaEn;
            document.getElementById("statusEn").value = statusEn;
            document.getElementById("servicioEn").value = servicioEn;
            document.getElementById("no_FactEn").value = no_FactEn;
            document.getElementById("fecha_FactEn").value = fecha_FactEn;

            //Se manda la información vieja al HTML:
            document.getElementById("partitionKeyCam").value = "";
            document.getElementById("rowKeyCam").value = "";
            document.getElementById("timestampCam").value = "";
            document.getElementById("areaCam").value = "";
            document.getElementById("bajaCam").value = "";
            document.getElementById("borradoCam").value = "";
            document.getElementById("checkCam").value = "";
            document.getElementById("descripcionCam").value = "";
            document.getElementById("fechafinCam").value = "";
            document.getElementById("fechainiCam").value = "";
            document.getElementById("hojadeservicioCam").value = "";
            document.getElementById("inmuebleCam").value = "";
            document.getElementById("localidadCam").value = "";
            document.getElementById("nombreenlaceCam").value = "";
            document.getElementById("nombreusuarioCam").value = "";
            document.getElementById("pospuestoCam").value = "";
            document.getElementById("proyectoCam").value = "";
            document.getElementById("resguardoCam").value = "";
            document.getElementById("serieborradaCam").value = "";
            document.getElementById("statusCam").value = "";
            document.getElementById("servicioCam").value = "";
            document.getElementById("no_FactCam").value = "";
            document.getElementById("fecha_FactCam").value = "";

            //Se informa del estado de la busqueda:
            document.getElementById("infoTabla").value = "Resultado busqueda:"
            document.getElementById("informaUsuario").value = "Se encontro la siguente información:"
            document.querySelector("#estadoTarea").style.color = "green";
            document.getElementById("estadoTarea").value = "¡Busqueda exitosa!"
            console.log("Busqueda correcta");
        } else {
            document.querySelector("#estadoTarea").style.color = "red";
            document.getElementById("estadoTarea").value = "Ocurrio en error en la busqueda."
            console.log("Ocurrio en error...");
        }
    });
}

//Cambio PartitionKey:
function remplazarPartKey() {
    //Se obtiene el estado actual de trabajo para poder verificar si se puede o no continuar con el:
    stringIF = document.getElementById("estadoTarea").value;

    //Verifica en que estado se encuentra la tarea actual y toma una decisión de que hacer:
    if (stringIF == "¡Busqueda exitosa!") {
        newPatitionKey = document.getElementById("newPartKey").value;
        if (newPatitionKey != "") {
            task['PartitionKey']['_'] = newPatitionKey.toString();

            tableSvc.insertEntity(`${tablaUsar}`, task, function(error, result, response) {
                if (!error) {

                    document.getElementById("estadoTarea").value = "Se agrego la entidad correctamente.";
                    //Se elimina la entidad que fue remplazada con la insertada anteriormente:
                    tableSvc.deleteEntity(`${tablaUsar}`, taskDelete, function(error, response) {
                        if (!error) {
                            //Se manda la información vieja al HTML:
                            document.getElementById("partitionKeyCam").value = partitionKeyEn;
                            document.getElementById("rowKeyCam").value = rowKeyEn;
                            document.getElementById("timestampCam").value = timestampEn;
                            document.getElementById("areaCam").value = areaEn;
                            document.getElementById("bajaCam").value = bajaEn;
                            document.getElementById("borradoCam").value = borradoEn;
                            document.getElementById("checkCam").value = checkEn;
                            document.getElementById("descripcionCam").value = descripcionEn;
                            document.getElementById("fechafinCam").value = fecha_FinEn;
                            document.getElementById("fechainiCam").value = fecha_iniEn;
                            document.getElementById("hojadeservicioCam").value = hojaDeServicioEn;
                            document.getElementById("inmuebleCam").value = inmuebleEn;
                            document.getElementById("localidadCam").value = localidadEn;
                            document.getElementById("nombreenlaceCam").value = nombreEnlaceEn;
                            document.getElementById("nombreusuarioCam").value = nombreUsuarioEn;
                            document.getElementById("pospuestoCam").value = pospuestoEn;
                            document.getElementById("proyectoCam").value = proyectoEn;
                            document.getElementById("resguardoCam").value = resguardoEn;
                            document.getElementById("serieborradaCam").value = serieBorradaEn;
                            document.getElementById("statusCam").value = statusEn;
                            document.getElementById("servicioCam").value = servicioEn;
                            document.getElementById("no_FactCam").value = no_FactEn;
                            document.getElementById("fecha_FactCam").value = fecha_FactEn;


                            //Se extrae la informacion del json en variables:
                            partitionKeyEn = task['PartitionKey']['_'];
                            rowKeyEn = task['RowKey']['_'];
                            timestampEn = task['Timestamp']['_'];
                            areaEn = task['Area']['_'];
                            bajaEn = task['Baja']['_'];
                            borradoEn = task['Borrado']['_'];
                            checkEn = task['Check']['_'];
                            descripcionEn = task['Descripcion']['_'];
                            fecha_FinEn = task['Fecha_Fin']['_'];
                            fecha_iniEn = task['Fecha_ini']['_'];
                            hojaDeServicioEn = task['HojaDeServicio']['_'];
                            inmuebleEn = task['Inmueble']['_'];
                            localidadEn = task['Localidad']['_'];
                            nombreEnlaceEn = task['NombreEnlace']['_'];
                            nombreUsuarioEn = task['NombreUsuario']['_'];
                            pospuestoEn = task['Pospuesto']['_'];
                            proyectoEn = task['Proyecto']['_'];
                            resguardoEn = task['Resguardo']['_'];
                            serieBorradaEn = task['SerieBorrada']['_'];
                            servicioEn = task['Servicio']['_'];
                            statusEn = task['Status']['_'];
                            no_FactEn = task['No_Fact']['_'];
                            fecha_FactEn = task['Fecha_Fact']['_'];

                            //Se manda la información nueva al HTML:
                            document.getElementById("partitionKeyEn").value = partitionKeyEn;
                            document.getElementById("rowKeyEn").value = rowKeyEn;
                            document.getElementById("timestampEn").value = timestampEn;
                            document.getElementById("areaEn").value = areaEn;
                            document.getElementById("bajaEn").value = bajaEn;
                            document.getElementById("borradoEn").value = borradoEn;
                            document.getElementById("checkEn").value = checkEn;
                            document.getElementById("descripcionEn").value = descripcionEn;
                            document.getElementById("fechafinEn").value = fecha_FinEn;
                            document.getElementById("fechainiEn").value = fecha_iniEn;
                            document.getElementById("hojadeservicioEn").value = hojaDeServicioEn;
                            document.getElementById("inmuebleEn").value = inmuebleEn;
                            document.getElementById("localidadEn").value = localidadEn;
                            document.getElementById("nombreenlaceEn").value = nombreEnlaceEn;
                            document.getElementById("nombreusuarioEn").value = nombreUsuarioEn;
                            document.getElementById("pospuestoEn").value = pospuestoEn;
                            document.getElementById("proyectoEn").value = proyectoEn;
                            document.getElementById("resguardoEn").value = resguardoEn;
                            document.getElementById("serieborradaEn").value = serieBorradaEn;
                            document.getElementById("statusEn").value = statusEn;
                            document.getElementById("servicioEn").value = servicioEn;
                            document.getElementById("no_FactEn").value = no_FactEn;
                            document.getElementById("fecha_FactEn").value = fecha_FactEn;


                            //Se notifica al usuario el estado de la tarea:
                            document.getElementById("infoTabla").value = "Nuevo:"
                            document.getElementById("informaUsuario").value = "Se modifico el PartitionKey:"
                            document.querySelector("#estadoTarea").style.color = "green";
                            document.getElementById("estadoTarea").value = "¡Cambio realizado!";
                            console.log('La entidad se ha eliminado.');
                        } else {
                            //Se notifica al usuario si hay un error:
                            document.querySelector("#estadoTarea").style.color = "red";
                            document.getElementById("estadoTarea").value = "Ocurrio un error durante el cambio.";
                            console.log("Ocurrio un error...");
                            return;
                        }
                    });
                } else {
                    //Se notifica al usuario si hay un error:
                    document.querySelector("#estadoTarea").style.color = "red";
                    document.getElementById("estadoTarea").value = "Ocurrio un error durante el cambio.";
                    return;
                }
            });
        } else {
            //En caso de no tener información en el campo:
            document.querySelector("#estadoTarea").style.color = "red";
            document.getElementById("estadoTarea").value = "¡El campo debe tener información!";
        }
    } else {
        //En caso que no haya un busqueda anteriormente:
        document.getElementById("informaUsuario").value = "¡No hay información para trabajar!"
        document.querySelector("#estadoTarea").style.color = "red";
        document.getElementById("estadoTarea").value = "Debes realizar una busqueda primero...";
    }
}

//Actualizar entidad:
function actualizarEntidad() {
    //Se obtiene el estado actual de trabajo para poder verificar si se puede o no continuar con el:
    stringIF = document.getElementById("estadoTarea").value;

    //Verifica en que estado se encuentra la tarea actual y toma una decisión de que hacer:
    if (stringIF == "¡Busqueda exitosa!") {
        //Se manda la información la ventana HTML:
        document.getElementById("partitionKeyCam").value = partitionKeyEn;
        document.getElementById("rowKeyCam").value = rowKeyEn;
        document.getElementById("timestampCam").value = timestampEn;
        document.getElementById("areaCam").value = areaEn;
        document.getElementById("bajaCam").value = bajaEn;
        document.getElementById("borradoCam").value = borradoEn;
        document.getElementById("checkCam").value = checkEn;
        document.getElementById("descripcionCam").value = descripcionEn;
        document.getElementById("fechafinCam").value = fecha_FinEn;
        document.getElementById("fechainiCam").value = fecha_iniEn;
        document.getElementById("hojadeservicioCam").value = hojaDeServicioEn;
        document.getElementById("inmuebleCam").value = inmuebleEn;
        document.getElementById("localidadCam").value = localidadEn;
        document.getElementById("nombreenlaceCam").value = nombreEnlaceEn;
        document.getElementById("nombreusuarioCam").value = nombreUsuarioEn;
        document.getElementById("pospuestoCam").value = pospuestoEn;
        document.getElementById("proyectoCam").value = proyectoEn;
        document.getElementById("resguardoCam").value = resguardoEn;
        document.getElementById("serieborradaCam").value = serieBorradaEn;
        document.getElementById("statusCam").value = statusEn;
        document.getElementById("servicioCam").value = servicioEn;
        document.getElementById("no_FactCam").value = no_FactEn;
        document.getElementById("fecha_FactCam").value = fecha_FactEn;

        //Cambiar las variables por los campos modificados por el usuario:
        areaEn = document.getElementById("areaEn").value;
        bajaEn = document.getElementById("bajaEn").value;
        borradoEn = document.getElementById("borradoEn").value;
        checkEn = document.getElementById("checkEn").value;
        descripcionEn = document.getElementById("descripcionEn").value;
        fecha_FinEn = document.getElementById("fechafinEn").value;
        fecha_iniEn = document.getElementById("fechainiEn").value;
        hojaDeServicioEn = document.getElementById("hojadeservicioEn").value;
        inmuebleEn = document.getElementById("inmuebleEn").value;
        localidadEn = document.getElementById("localidadEn").value;
        nombreEnlaceEn = document.getElementById("nombreenlaceEn").value;
        nombreUsuarioEn = document.getElementById("nombreusuarioEn").value;
        pospuestoEn = document.getElementById("pospuestoEn").value;
        proyectoEn = document.getElementById("proyectoEn").value;
        resguardoEn = document.getElementById("resguardoEn").value;
        serieBorradaEn = document.getElementById("serieborradaEn").value;
        statusEn = document.getElementById("statusEn").value;
        servicioEn = document.getElementById("servicioEn").value;
        servicioEn = document.getElementById("no_FactEn").value;
        servicioEn = document.getElementById("fecha_FactEn").value;

        //Se le da la información de las variables anteriores al JSON base:
        task['Area']['_'] = areaEn.toString();
        task['Baja']['_'] = bajaEn.toString();
        task['Borrado']['_'] = borradoEn.toString();
        task['Check']['_'] = checkEn.toString();
        task['Descripcion']['_'] = descripcionEn.toString();
        task['Fecha_Fin']['_'] = fecha_FinEn.toString();
        task['Fecha_ini']['_'] = fecha_iniEn.toString();
        task['HojaDeServicio']['_'] = hojaDeServicioEn.toString();
        task['Inmueble']['_'] = inmuebleEn.toString();
        task['Localidad']['_'] = localidadEn.toString();
        task['NombreEnlace']['_'] = nombreEnlaceEn.toString();
        task['NombreUsuario']['_'] = nombreUsuarioEn.toString();
        task['Pospuesto']['_'] = pospuestoEn.toString();
        task['Proyecto']['_'] = proyectoEn.toString();
        task['Resguardo']['_'] = resguardoEn.toString();
        task['SerieBorrada']['_'] = serieBorradaEn.toString();
        task['Servicio']['_'] = servicioEn.toString();
        task['Status']['_'] = statusEn.toString();
        task['No_Fact']['_'] = statusEn.toString();
        task['Fecha_Fact']['_'] = statusEn.toString();

        //Realiza la actualización del row:
        tableSvc.replaceEntity(`${tablaUsar}`, task, function(error, result, response) {
            if (!error) {
                console.log("Entidad actualizada");
                //Se informa que la actualización a tenido exito:
                document.getElementById("infoTabla").value = "Nuevo:"
                document.getElementById("informaUsuario").value = "Se modifico la siguente información:"
                document.querySelector("#estadoTarea").style.color = "green";
                document.getElementById("estadoTarea").value = "¡Actualización exitosa!"
            } else {
                console.log("¡Ocurrio un error en la actualización...!");
                //Se informa que la actualización no a tenido exito:
                console.log(error);
                document.querySelector("#estadoTarea").style.color = "red";
                document.getElementById("estadoTarea").value = "¡Ocurrio un error en la actualización...!"
            }
        });
    } else {
        //En caso que no haya un busqueda anteriormente:
        document.getElementById("informaUsuario").value = "¡No hay información para trabajar!"
        document.querySelector("#estadoTarea").style.color = "red";
        document.getElementById("estadoTarea").value = "Debes realizar una busqueda primero...";
    }

}