const productos = [
      {
        id: 1,
        nombre: 'Helado de 1kg',
        precio: 200,
        descripcion: 'Gustos disponibles:chocolate,dulce de leche, frutilla, vainilla, frutos del bosque, tiramisu.',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'Helados',
        link:'productos/helados.html'
      },
      {
        id: 2,
        nombre: 'Helado de 1/2kg',
        precio: 1500,
        descripcion: 'Gustos disponibles:chocolate,dulce de leche, frutilla, vainilla, frutos del bosque, tiramisu.',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'Helados',
        link:'productos/helados.html'
      },
      {
        id: 3,
        nombre: 'Helado de 1/4kg',
        precio: 2000,
        descripcion: 'Gustos disponibles:chocolate,dulce de leche, frutilla, vainilla, frutos del bosque, tiramisu.',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'Helados',
        link:'productos/helados.html'
      },
      {
        id: 4,
        nombre: 'Pastel Cheesecake',
        precio: 500,
        descripcion: 'Super producto 4 para el hogar',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'Pasteles',
        link:'productos/pasteles.html'
      },
      {
        id: 5,
        nombre: 'Pastel Selva Negra',
        precio: 400,
        descripcion: 'Super producto 5 para el hogar',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'Pasteles',
        link:'productos/pasteles.html'
      },
      {
        id: 6,
        nombre: 'Chocotorta',
        precio: 400,
        descripcion: 'Super producto 5 para el hogar',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'Pasteles',
        link:'productos/pasteles.html'
      },
      {
        id: 7,
        nombre: 'Lemonpie',
        precio: 400,
        descripcion: 'Super producto 5 para el hogar',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'Pasteles',
        link:'productos/pasteles.html'
      },
      {
        id: 8,
        nombre: 'Bombon Suizo',
        precio: 400,
        descripcion: 'Super producto 5 para el hogar',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'categoria2',
        link:'productos/postres'
      },
      {
        id: 9,
        nombre: 'Helados de Agua',
        precio: 400,
        descripcion: 'Super producto 5 para el hogar',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'Helados de agua',
        link:'productos/heladosDeAgua.html'
      },
      {
        id: 10,
        nombre: 'Conos de helado',
        precio: 400,
        descripcion: 'Super producto 5 para el hogar',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'Otros',
        link:'productos/Otros.html'
      },
    ];
  
  
    const contenedorProductos = document.getElementById('contenedor-productos');
    const carritoTexto = document.getElementById('carrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevaCantidadCarrito = carrito.reduce((acc, { cantidad }) => acc + cantidad, 0);
    carritoTexto.innerHTML = `Carrito(${nuevaCantidadCarrito})`;
    
    const agregarCardDeProducto = producto => {
      const cardProducto = document.createElement('div');
      cardProducto.className = 'col';
      cardProducto.innerHTML = `
        <div id="producto-${producto.id}" class="card text-white bg-dark mb-3">
          <img src="${producto.imagen}" class="card-img-top">
          <div class="card-body">
            <h5>${producto.nombre}</h5>
            <p>${producto.descripcion}</p>
            <p>Categoria: ${producto.categoria}</p>
            <p>$ ${producto.precio}</p>
            <button class="btn btn-primary">Agregar al carrito</button>
            <button type="button" class="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark" id="Link" onclick="location.href='${producto.link}'" value="click here">enlace</button>
          </div>
        </div>
      `;
    
      contenedorProductos.append(cardProducto);
    
      document.querySelector(`#producto-${producto.id} button`).addEventListener(
        'click',
        () => {
          const productoEnElCarrito = carrito.find(
            (productoCarrito) => productoCarrito.id === producto.id
          );
    
          // const cantidad = (productoEnElCarrito?.cantidad ? productoEnElCarrito.cantidad : 0) + 1;
          const cantidad = (productoEnElCarrito?.cantidad || 0) + 1
    
          if (productoEnElCarrito) {
            productoEnElCarrito.cantidad = cantidad;
          } else {
            carrito.push({
              ...producto,
              cantidad
            });
          }
    
          localStorage.setItem('carrito', JSON.stringify(carrito));
    
          const nuevaCantidadCarrito = carrito.reduce((acc, { cantidad }) => acc + cantidad, 0);
          carritoTexto.innerHTML = `Carrito(${nuevaCantidadCarrito})`;
        }
      );
    }
    
    productos.forEach((producto => {
      agregarCardDeProducto(producto);
    }));
    
    document.getElementById('select-categoria').addEventListener(
      'input',
      (e) => {
        const categoriaAFiltrar = e.target.value;
        const productosFiltrados = categoriaAFiltrar ?
          productos.filter((producto) => producto.categoria === categoriaAFiltrar) :
          productos;
        
        document.querySelectorAll('.col').forEach(child => child.remove());
        productosFiltrados.forEach(producto => {
          agregarCardDeProducto(producto);
        });
      }
    );