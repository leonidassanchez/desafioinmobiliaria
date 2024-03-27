document.addEventListener("DOMContentLoaded", function () {
  // Arreglo de propiedades en alquiler
  const propiedadesAlquiler = [
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      nombre: "Apartamento en el centro de la ciudad",
      descripcion:
        "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banios: 2,
      costo: 2000,
      permitirFumar: false,
      permitirMascotas: true,
    },
    {
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      nombre: "Apartamento luminoso con vista al mar",
      descripcion:
        "Este hermoso apartamento ofrece una vista impresionante al mar",
      ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      banios: 3,
      costo: 2500,
      permitirFumar: true,
      permitirMascotas: true,
    },
    {
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      nombre: "Condominio moderno en zona residencial",
      descripcion:
        "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banios: 2,
      costo: 2200,
      permitirFumar: false,
      permitirMascotas: false,
    },
  ];

  // Función para generar la tarjeta de una propiedad en alquiler
  function generarTarjetaPropiedad(propiedad) {
    let permitirFumarHTML = "";
    let permitirMascotasHTML = "";

    if (propiedad.permitirFumar) {
      permitirFumarHTML =
        '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>';
    } else {
      permitirFumarHTML =
        '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
    }

    if (propiedad.permitirMascotas) {
      permitirMascotasHTML =
        '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>';
    } else {
      permitirMascotasHTML =
        '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>';
    }

    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento" />
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banios} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    ${permitirFumarHTML}
                    ${permitirMascotasHTML}
                </div>
            </div>
        </div>
        `;
  }

  //contenedor de propiedades en alquiler
  const propiedadesAlquilerContainer = document.getElementById(
    "propiedadesAlquiler"
  );

  // tarjetas de propiedades en alquiler para agregarlas al contenedor
  propiedadesAlquiler.forEach(function (propiedad) {
    const tarjetaHTML = generarTarjetaPropiedad(propiedad);
    propiedadesAlquilerContainer.innerHTML += tarjetaHTML;
  });
});
