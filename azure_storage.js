//Instalar: npm install azure-storage
//Paquetes:
var azure = require('azure-storage');

//Crear conexión:
var azure2 = require('./keys_azure'); //Importación de llaves
var tableSvc = azure.createTableService(azure2.myaccount, azure2.myaccesskey);

//Formato para importar las llaves:
//(Debe crearse en otro script y ser llamado con: "var NOMBREVARIABLE = require('RUTADESCRIPT');")
/*
var exports = module.exports = {
    myaccount: 'TUCUENTA',
    myaccesskey: 'TULLAVE'
}
*/

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
};

//JSON base para eliminar un row:
var taskDelete = {
    PartitionKey: { '_': 'hometasks' },
    RowKey: { '_': '1' }
};

//Variables para realizar una busqueda:
var tablaUsar = "botdyesatb02"
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

//Variable para amacenar el nombre del nuevo PartitionKey que el usuario colóque:
var newPatitionKey = "";



//Consulta de entidad:
function consultarEntidad() {
    partitionKeyBusqueda = document.getElementById("partitionKeyBusqueda").value;
    rowKeyBusqueda = document.getElementById("rowKeyBusqueda").value;
    tableSvc.retrieveEntity(`${tablaUsar}`, `${partitionKeyBusqueda}`, `${rowKeyBusqueda}`, function(error, result, response) {
        if (!error) {
            //Se obtiene la información en un json:
            task = result;

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

            //Se le da información al JSON que eliminara el row en caso de necesitar un cambio de PartitionKey:
            taskDelete['PartitionKey']['_'] = task['PartitionKey']['_'];
            taskDelete['RowKey']['_'] = task['RowKey']['_'];

            //Se manda la información obtenida a la ventana HTML:
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

            //Se informa del estado de la busqueda:
            document.getElementById("estadoTarea").value = "¡Busqueda exitosa!"
            console.log("Busqueda correcta");
        } else {
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

        task['PartitionKey']['_'] = newPatitionKey.toString();

        tableSvc.insertEntity(`${tablaUsar}`, task, function(error, result, response) {
            if (!error) {
                document.getElementById("estadoTarea").value = "Se agrego la entidad correctamente.";
                //Se elimina la entidad que fue remplazada con la insertada anteriormente:
                tableSvc.deleteEntity(`${tablaUsar}`, taskDelete, function(error, response) {
                    if (!error) {
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

                        //Se manda la información obtenida a la ventana HTML:
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

                        document.getElementById("estadoTarea").value = "¡Cambio realizado!";
                        console.log('La entidad se ha eliminado.');
                    } else {
                        console.log("Ocurrio un error...");
                        return;
                    }
                });
            } else {
                //Se notifica al usuario si hay un error:
                document.getElementById("estadoTarea").value = "Ocurrio un error durante el cambio.";
                return;
            }
        });
    } else {
        //En caso que no haya un busqueda anteriormente:
        document.getElementById("estadoTarea").value = "Debes realizar una busqueda primero...";
    }
}