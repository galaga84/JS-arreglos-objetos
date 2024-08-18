let propiedadesAlquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón  de la ciudad, cerca de todo.",
    foto: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    foto: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    foto: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento para amigos",
    descripcion: "We were on a break!",
    foto: "https://media.admagazine.com/photos/618a5f46be961b98e9f0983b/master/w_1600%2Cc_limit/88545.jpg",
    ubicacion: "90 Bedford Street",
    habitaciones: 3,
    baños: 1,
    costo: 1000,
    smoke: false,
    pets: true,
  },
];

let html2 = "";
let propiedades2 = document.getElementById("propiedades2");

for (let alquiler of propiedadesAlquiler) {
  html2 += `<img
                src="${alquiler.foto}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${alquiler.nombre}
                </h5>
                <p class="card-text">
                  ${alquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${alquiler.habitaciones} |
                  <i class="fas fa-bath"></i> ${alquiler.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>`;

  if (alquiler.smoke) {
    html2 += `<p class="text-success">
                <i class="fas fa-smoking"></i> Permitido fumar
              </p>`;
  } else {
    html2 += `<p class="text-danger">
                <i class="fas fa-smoking-ban"></i> No se permite fumar
              </p>`;
  }

  if (alquiler.pets) {
    html2 += `<p class="text-success">
                <i class="fas fa-paw"></i> Mascotas permitidas
              </p>`;
  } else {
    html2 += `<p class="text-danger">
                <i class="fas fa-ban"></i> No se permiten mascotas
              </p>`;
  }

  html2 += `</div>`;
}

propiedades2.innerHTML = html2;
