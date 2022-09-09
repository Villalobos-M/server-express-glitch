const fs = require("fs");

class Contenedor {
   constructor(nameFile) {
      this.nameFile = nameFile;
   }
   getById(num) {
      const getById = async () => { 
         try {
            const contenidoArchivo = await fs.promises.readFile(`${this.nameFile}.txt`, "utf-8");
            const array = (JSON.parse(contenidoArchivo));
            const objId = array[num]; 
            if (objId) {
               return objId
            }else{
               console.log(null);
            }
         } catch (error) {
            console.log(error);
         }
      }
      return getById;
   }

   getAll() {
      const readFileFn = async () => {
         try {
            const contenidoArchivo = await fs.promises.readFile(`${this.nameFile}.txt`,"utf-8");
            return JSON.parse(contenidoArchivo)
         } catch (error) {
            console.log(error);
         }
      };
      return readFileFn;
   }

}


module.exports = { Contenedor };
 