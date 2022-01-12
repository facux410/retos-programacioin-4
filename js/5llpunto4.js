var Descripcion = {
    nombre: "facu",
    apellido: "orellana",
    dni: 41845225,
    edad: 22,
    sexo: "Masculino",
  };
  
  function Mipersona(Descripcion) {
    let objectValues = Object.values(Descripcion);
    objectValues.forEach((item) => {
      console.log(item);
    });
  }
  
  MiDescripcion(Descripcion);