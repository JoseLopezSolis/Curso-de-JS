/*
A)Cofla entró a una tienda que vende celulares porque le pareció bastante bueno comprarse un nuevo celular.
De todos los modelos que hay disponibles en esa tienda, a Cofla le llamaron la atención 3 telefonos especificamente,
El problema es que ningun vendedor sabe nada al respecto entonces no pueden recomendarle absolutaente nada ... pero claro:
el antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos,ahí
entramos nosotros.
    CREAR SOLUCIONES
    Crear un sistema para mostrarleacofla las particularidades de los 3 celulares.
   -Cada celular debe tener color,peso,resolución de pantalla,resolución de camaraymemoria ram
   -Cada celular debe poder prender,reiniciar,apagar,tomar fotos y grabar
*/
class Celular{
    constructor(color,peso,rdp,rdc,ram){
        this.color=color;
        this.peso=peso;
        this.resolucionDePantalla=rdp;
        this.resolucionDeCamara=rdc;
        this.memoriaRam=ram;
        this.encendido=false;
        this.informacion = `Color: <b> ${this.color} </b> </br>
                            Peso:<b> ${this.peso} </b></br>
                            Resolucion de pantalla: <b> ${this.resolucionDePantalla} </b></br>
                            Resolucion de camara: <b> ${this.resolucionDeCamara} </b></br>
                            RAM:<b> ${this.memoriaRam} </b></br>
                            `;
    }

    presionarBotonEncendido(){
        if(this.encendido==false){
            alert("Celular encendido");
            this.encendido = true;
        }else{
            alert("Celular apagado");
        }
    }

    reiniciar(){
        if(this.encendido==true){
            alert("Reiniciando celular");
        }else{
            alert("El celular esta apagado");
        }
    }
    tomarFotos(){
        alert(`Foto tomada con el dispositivo con una resolucion de ${this.resolucionDeCamara}`);
    }
    grabarVideos(){
        alert(`Grabando video con una resolucion de ${this.resolucionDeCamara}`);
    }
    get getinfo(){
        return this.informacion;
    }
}

class CelularAltaGama extends Celular{
    constructor(color,peso,rdp,rdc,ram,camExtra){
        super(color,peso,rdp,rdc,ram);
        this.camaraExtra = camExtra;
    }
    grabarVideoLento(){
        alert("Grabando video lento");
    }
    reconocimientoFacial(){
        alert("Haciendo reconocimiento facila...")
    }
    getInfoAltaGama(){
        return this.informacion+`Camara extra <b>${this.camaraExtra}</b></br>`;
    }
}

const celuarAlt1 = new CelularAltaGama("Rojo","150gr","5p","full hd","6gb","12mpx");
const celuarAlt2 = new CelularAltaGama("Negro","140gr","5.5p","full hd","8gb","16mpx");


document.write(celuarAlt1.getInfoAltaGama());
document.write(celuarAlt2.getInfoAltaGama());


/*
const celular1 = new Celular("Rojo","150gr","5p","full hd","6gb");
const celular2 = new Celular("Negro","140gr","4p","hd","4gb");
const celular3 = new Celular("Blanco","155 gr","5.4p","full hd","8gb");

document.write(celular1.getinfo+`</br>`);
document.write(celular2.getinfo+`</br>`);
document.write(celular3.getinfo+`</br>`);
*/