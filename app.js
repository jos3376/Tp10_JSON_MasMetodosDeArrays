const Bicicletas = require('./datosBici');

const dHBicis = {
    bicicletas: Bicicletas,
    buscarBici: function(id) {
        const resultado = this.bicicletas.filter(bici => bici.id === id);
        return resultado? resultado[0] : null;
    },
    venderBici: function(id) {
         const buscandoBici= this.buscarBici(id);
         if(buscandoBici){
            buscandoBici.vendida = true;
            return buscandoBici;
         }else{
            console.log("Bicicleta no encontrada");
         }
        },
        biciParaLaVenta: function(id) {
            const bicicleta = this.buscarBici(id);
            if (bicicleta) {
                if (!bicicleta.vendida) {
                    return bicicleta;
                } else {
                    return "La bicicleta ya está vendida.";
                }
            } else {
                return "Bicicleta no encontrada.";
            }
        },
        totalDeVentas: function() {
           
            const total = this.bicicletas.reduce((acumulador, bici) => {
                return bici.vendida ? acumulador + bici.precio : acumulador;
            }, 0);
    
            return total;
        },
        aumentoBicis:function(porcentaje){
            this.bicicletas.forEach(bici => {
                bici.precio+=bici.precio*(porcentaje/100)
                console.log(bici.precio)
                 ;
            }) ;
        },
        biciPorRodado: function(rodado){
            return this.bicicletas.filter(bici => bici.rodado === rodado);
        },
        listarTodasLasBici: function() {
            this.bicicletas.forEach(bici => {
                console.log(`ID: ${bici.id}, 
                    Marca: ${bici.marca}, 
                    Modelo: ${bici.modelo}, 
                    Rodado: ${bici.rodado}, 
                    Año: ${bici.anioFabricacion}, 
                    Color: ${bici.color}, 
                    Peso: ${bici.pesoKg}kg, 
                    Tipo: ${bici.tipo}, 
                    Precio: $${bici.precio}, 
                    Vendida: ${bici.vendida ? 'Sí' : 'No'}`);
            });
        }

}
console.log(dhBicis.buscarBici(1));
console.log(dhBicis.venderBici(1));
console.log(dhBicis.biciParaLaVenta(3))
console.log(dhBicis.totalDeVentas());
console.log(dhBicis.aumentoBicis(10));
console.log(dhBicis.biciPorRodado(26));
console.log(dhBicis.listarTodasLasBici());