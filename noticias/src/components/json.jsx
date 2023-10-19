import React, { useState } from 'react';


function JSON() {
  const jsonData = [{
    id:1,
    title:'Fazt Web',
    url: 'http://google.com'

},
{
    
    id:2,
    title:'Fazt Blog',
    url: 'http://google.com'
},
{
    
    id:3,
    title:'Fazt Web',
    url: 'http://google.com'
},{
    id:4,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:5,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:6,
    title:'Fazt Web',

    url: 'http://google.com'

},{
    id:7,
    title:'Fazt Web',

    url: 'http://google.com'

},{
    id:8,
    title:'Fazt Web',

    url: 'http://google.com'

},{
    id:9,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:10,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:11,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:12,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:13,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:14,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:1,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:1,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:1,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:1,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:1,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:1,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:1,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:1,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:1,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:1,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:1,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:1,
    title:'Fazt Web',
    url: 'http://google.com'

},{
    id:1,
    title:'Fazt Web',
    url: 'http://google.com'

}
];
const itemsPerPage = 10; // Número de elementos por página
const [currentPage, setCurrentPage] = useState(1);

// Calcular el índice de inicio y final para los elementos de la página actual
const startIndex = (currentPage - 1) * itemsPerPage;
let endIndex = startIndex + itemsPerPage;

// Si endIndex es mayor que la longitud del JSON, ajustarla para mostrar todos los elementos restantes
if (endIndex > jsonData.length) {
  endIndex = jsonData.length;
}

// Obtener los elementos de la página actual
const currentPageData = jsonData.slice(startIndex, endIndex);

// Función para ir a la página anterior
const goToPrevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

// Función para ir a la página siguiente
const goToNextPage = () => {
  const totalPages = Math.ceil(jsonData.length / itemsPerPage);
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};

return (
  <div>
    <h1>JSON Paginado</h1>
    {currentPageData.map((item, id) => (
      <div key={id}>{item.title}</div>
    ))}
    <div>
      <button onClick={goToPrevPage} disabled={currentPage === 1}>
        Anterior
      </button>
      <button onClick={goToNextPage} disabled={currentPage * itemsPerPage >= jsonData.length}>
        Siguiente
      </button>
    </div>
  </div>
);
}

export default JSON;