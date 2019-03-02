//Instalar: npm install azure-storage
//Paquetes:
var azure = require('azure-storage');

//Crear conexión:
var azure2 = require('./keys_azure'); //Importación de llaves
var tableSvc = azure.createTableService(azure2.myaccount, azure2.myaccesskey);

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

var taskDelete = {
    PartitionKey: { '_': 'hometasks' },
    RowKey: { '_': '1' }
};

//Variables:
var tablaUsar = "botdyesatb02"
var partitionKeyBusqueda = "";
var rowKeyBusqueda = "";

var stringSwitch = "";

//Informacion encontrada
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