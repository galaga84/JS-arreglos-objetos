let propiedadesVenta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    foto: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    foto: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    foto: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento familiar nuevo",
    descripcion: "Este departamento cuenta con espacios diseñados para toda la familia",
    foto: "https://content.arquitecturaydiseno.es/medio/2023/04/27/recreacion-de-la-casa-de-los-simpson_8a4e6a3c_230427095547_1600x1105.jpg",
    ubicacion: "Avenida siempre viva, Springfield, MI 58632",
    habitaciones: 3,
    baños: 3,
    costo: 5500,
    smoke: true,
    pets: true,
  },
];

let html = "";
let propiedades = document.getElementById("propiedades");

for (let venta of propiedadesVenta) {
  html += `<img
                src="${venta.foto}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${venta.nombre}
                </h5>
                <p class="card-text">
                  ${venta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.habitaciones} |
                  <i class="fas fa-bath"></i> ${venta.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>`;

  if (venta.smoke) {
    html += `<p class="text-success">
                <i class="fas fa-smoking"></i> Permitido fumar
              </p>`;
  } else {
    html += `<p class="text-danger">
                <i class="fas fa-smoking-ban"></i> No se permite fumar
              </p>`;
  }

  if (venta.pets) {
    html += `<p class="text-success">
                <i class="fas fa-paw"></i> Mascotas permitidas
              </p>`;
  } else {
    html += `<p class="text-danger">
                <i class="fas fa-ban"></i> No se permiten mascotas
              </p>`;
  }

  html += `</div>`;
}

propiedades.innerHTML = html;

  