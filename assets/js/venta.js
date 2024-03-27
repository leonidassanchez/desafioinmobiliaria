const propiedades_venta = [
  {
    nombre: "Propiedad 1",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Descripción 1",
    ubicacion: "Santiago 123",
    habitaciones: 2,
    costo: 0,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Propiedad 2",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Descripción 2",
    ubicacion: "Santiago 123",
    habitaciones: 1,
    costo: 0,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Propiedad 3",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Descripción 3",
    ubicacion: "Santiago 123",
    habitaciones: 4,
    costo: 0,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Propiedad 4",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Descripción 4",
    ubicacion: "Santiago 123",
    habitaciones: 3,
    costo: 0,
    smoke: false,
    pets: true,
  },
];

// Función para generar el HTML de una propiedad
function generarPropiedadHTML(propiedad) {
  let textoFumar;
  if (propiedad.smoke) {
    textoFumar =
      '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>';
  } else {
    textoFumar =
      '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
  }

  let textoMascotas;
  if (propiedad.pets) {
    textoMascotas =
      '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>';
  } else {
    textoMascotas =
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
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
          ${textoFumar}
          ${textoMascotas}
        </div>
      </div>
    </div>
  `;
}

// Función para agregar las propiedades en la página correspondiente
function agregarPropiedadesEnPagina(propiedades, paginaId) {
  const contenedor = document.querySelector(`#${paginaId}`);
  propiedades.forEach((propiedad) => {
    const propiedadHTML = generarPropiedadHTML(propiedad);
    contenedor.innerHTML += propiedadHTML;
  });
}

// Llamadas para agregar las propiedades en las páginas correspondientes
agregarPropiedadesEnPagina(propiedades_venta, "venta");
agregarPropiedadesEnPagina(propiedades_alquiler, "alquiler");
