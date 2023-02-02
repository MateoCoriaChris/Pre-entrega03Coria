const productos = [
      {
        id: 1,
        nombre: 'Producto 1',
        precio: 200,
        descripcion: 'Super producto 1 para el hogar',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'categoria1'
      },
      {
        id: 2,
        nombre: 'Producto 2',
        precio: 1500,
        descripcion: 'Super producto 2 para el hogar',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'categoria1'
      },
      {
        id: 3,
        nombre: 'Producto 3',
        precio: 2000,
        descripcion: 'Super producto 3 para el hogar',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'categoria1'
      },
      {
        id: 4,
        nombre: 'Producto 4',
        precio: 500,
        descripcion: 'Super producto 4 para el hogar',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'categoria2'
      },
      {
        id: 5,
        nombre: 'Producto 5',
        precio: 400,
        descripcion: 'Super producto 5 para el hogar',
        imagen: 'https://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
        categoria: 'categoria2'
      }
    ];
    
    
    /*const contenedorProductos = document.getElementById('contenedor-productos');
    const carritoTexto = document.getElementById('carrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevaCantidadCarrito = carrito.reduce((acc, { cantidad }) => acc + cantidad, 0);
    carritoTexto.innerHTML = `Carrito(${nuevaCantidadCarrito})`;
    
    const agregarCardDeProducto = producto => {
      const cardProducto = document.createElement('div');
      cardProducto.className = 'col';
      cardProducto.innerHTML = `
        <div id="producto-${producto.id}" class="card">
          <img src="${producto.imagen}" class="card-img-top">
          <div class="card-body">
            <h5>${producto.nombre}</h5>
            <p>${producto.descripcion}</p>
            <p>Categoria: ${producto.categoria}</p>
            <p>$ ${producto.precio}</p>
            <button class="btn btn-primary">Agregar al carrito</button>
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

*/