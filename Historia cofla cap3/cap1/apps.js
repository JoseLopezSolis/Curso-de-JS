class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada==false && this.instalada==true){
            this.iniciada = true;
            alert("App iniciada");
        }
    }
    cerrar(){
        if(this.iniciada==true && this.instalada==true){
            this.iniciada=false
            alert("App cerrada");
        }
    }
    instalar(){
        if(this.instalada==false){
            this.instalada=true;
            alert("App instalada");
        }
    }
    desinstalar(){
        if(this.instalada==true){
            this.instalada=false;
            alert("App desinstalada correctamente");
        }
    }
    appInfo(){
        return `Descargas: ${this.descargas}
                Puntuacion: ${this.puntuacion}
                Peso: ${this.peso}`;
    }
}

const app = new App("15000","6 estrellas","1gb");

document.write(app.instalar());
document.write(app.abrir());
document.write(app.appInfo());  
