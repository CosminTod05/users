const listaUsuarios = document.getElementById('listaUsuarios');

// Función para obtener los usuarios
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((usuarios) => {
    // Procesamos los datos de los usuarios
    usuarios.forEach((usuario) => {
      // Generar edad aleatoria
      const edadAleatoria = Math.floor(Math.random() * 50) + 18;

      // Destructuring para sacar los datos que necesitamos
      const { id, name, username, email, phone, company, address } = usuario;
      const { street, suite, city } = address;

      // Unir los datos en un nuevo objeto con spread operator como pide el readme
      const usuarioCompleto = {
        ...usuario,
        age: edadAleatoria,
        img: `./assets/img/${id}.jpeg`,
        address: `${street}, ${suite}, ${city}`
      };

      // Crear el elemento de la lista para cada usuario
      const li = document.createElement('li');
      li.classList.add('usuario-card');

      // Insertar el contenido HTML
      li.innerHTML = `
        <div class="info-personal">
            <div class="datos">
                <p><strong>Nombre:</strong> ${usuarioCompleto.name}</p>
                <p><strong>Edad:</strong> ${usuarioCompleto.age}</p>
                <p><strong>Username:</strong> ${usuarioCompleto.username}</p>
                <p><strong>Teléfono:</strong> ${usuarioCompleto.phone}</p>
                <p><strong>Email:</strong> ${usuarioCompleto.email}</p>
            </div>
            <img src="${usuarioCompleto.img}" alt="${usuarioCompleto.name}">
        </div>
        <p><strong>Compañía:</strong> ${usuarioCompleto.company.name}</p>
        <p><strong>Dirección:</strong> ${usuarioCompleto.address}</p>
      `;

      // Añadir a la lista
      listaUsuarios.appendChild(li);
    });
  })
  .catch((error) => {
    console.error('Error al obtener los usuarios:', error);
  });
