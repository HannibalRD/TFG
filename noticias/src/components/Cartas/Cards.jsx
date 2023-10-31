import {useState} from 'react'
import Card from '../Carta/Card.jsx'


import image4 from "../../assets/image4.png";
import image5 from "../../assets/gobio_arena-removebg-preview.png";
import image6 from "../../assets/zifio-cuvier-removebg-preview.png";
import image7 from "../../assets/urta-removebg-preview.png";
import image8 from "../../assets/sargo_real-removebg-preview.png";
import image9 from "../../assets/Rorcual_común-removebg-preview.png";
import image10 from "../../assets/salmonete_de_roca-removebg-preview.png";
import image11 from "../../assets/oblada-removebg-preview.png";
import image12 from "../../assets/mona-removebg-preview.png";
import image13 from "../../assets/borodn_o_tordo-removebg-preview.png";
import image14 from "../../assets/chaparrudo-removebg-preview.png"
import image15 from "../../assets/Delfin_comun-removebg-preview.png"
import image16 from "../../assets/calderongris-removebg-preview.png"
import image17 from "../../assets/cachalote-removebg-preview.png"
import image18 from "../../assets/gallineta_rosada-removebg-preview.png"
import { animateScroll as scroll } from 'react-scroll';


const cards = [
{
    id:1,
    title:'Gobio de arena',
    localizacion:'Hola',
    extincion:'.',
    longitud:'.',
    image: image5,
    url: 'http://google.com'

},
{
    
    id:2,
    title:'Zifio cuvier',
    localizacion:'.' ,
    extincion:'.' ,
    longitud:'.' ,
    image: image6,
    url: 'http://google.com'
},
{
    
    id:3,
    title:'Rorcual común',
    peso:'3kg',
    image: image9,
    localizacion:'.' ,
    extincion:'.' ,
    longitud:'.' ,
    url: 'http://google.com'
},{
    id:4,
    title:'Urta',
    peso:'3kg',
    localizacion:'.' ,
    extincion:'.' ,
    longitud:'.' ,
    image: image7,
    url: 'http://google.com'

},{
    id:5,
    title:'Sargo real',
    localizacion:'.' ,
    extincion:'.' ,
    longitud:'.' ,
    image: image8,
    url: 'http://google.com'

},{
    id:6,
    title:'Mona amarilla',
    localizacion:'.' ,
    extincion:'.' ,
    longitud:'.' ,
    image: image4,
    url: 'http://google.com'

},{
    id:7,
    title:'Salmonete de roca',
    localizacion:'.' ,
    extincion:'.' ,
    longitud:'.' ,
    image: image10,
    url: 'http://google.com'

},{
    id:8,
    title:'Oblada',
    localizacion:'.' ,
    extincion:'.' ,
    longitud:'.' ,
    image: image11,
    url: 'http://google.com'

},{
    id:9,
    title:'Mona',
    localizacion:'.' ,
    extincion:'.' ,
    longitud:'.' ,
    image: image12,
    url: 'http://google.com'

},{
    id:10,
    title:'Borodon tordo',
    localizacion:'.' ,
    extincion:'.' ,
    longitud:'.' ,
    image: image13,
    url: 'http://google.com'

},{
    id:11,
    title:'Chaparudo',
    localizacion:'.' ,
    extincion:'.' ,
    longitud:'.' ,
    image: image14,
    url: 'http://google.com'

},{
    id:12,
    title:'Delfin comun',
    localizacion:'.' ,
    extincion:'.' ,
    longitud:'.' ,
    image: image15,
    url: 'http://google.com'

},{
    id:13,
    title:'Calderongris',
    localizacion:'.' ,
    extincion:'.' ,
    longitud:'.' ,
    image: image16,
    url: 'http://google.com'

},
{
  id:14,
  title:'Gabineta rosada',
  localizacion:'.' ,
  extincion:'.' ,
  longitud:'.' ,
  image: image18,
  url: 'http://google.com'

},{
  id:15,
  title:'Cachalote',
  localizacion:'.' ,
  extincion:'.' ,
  longitud:'.' ,
  image: image17,
  url: 'http://google.com'

},
]
const itemsPerPage = 12;
function Cards() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTitle, setSearchTitle] = useState('');
  const clearSearch = () => {
    setSearchTitle('');
  };
  const filteredCards = cards.filter((card) => {
    if (searchTitle === '') {
      return true; // Si no se ha ingresado un título, mostrar todas las cartas.
    } else {
      return card.title.toLowerCase().includes(searchTitle.toLowerCase());
    }
  });
  const startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;

  if (endIndex > cards.length) {
    endIndex = cards.length;
  }

  const currentPageData = filteredCards.slice(startIndex, endIndex);

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    scroll.scrollToTop();
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(cards.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    scroll.scrollToTop();
  };

  return (
    <>
      <div className='container d-flex justify-content-center align-items-center cards-container'>
        
        <div className='row'>
        <input
            type="text"
            placeholder="Ejemplo Cachalote"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <button className='mt-5 mb-5' onClick={clearSearch}>
    Limpiar búsqueda
  </button>
          {currentPageData.map((card, index) => (
            <div className='col custom-card' key={card.id}>
              <Card
                title={card.title}
                image={card.image}
                peso={card.peso}
                localizacion={card.localizacion}
                extincion={card.extincion}
                longitud={card.longitud}
                url={card.url}
                text={card.text}
                customClassName={`custom-card-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
      
      <button className='mt-5 mb-5' onClick={goToPrevPage} disabled={currentPage === 1}>
        Anterior
      </button>
      <button className='mt-5 mb-5' onClick={goToNextPage} disabled={currentPage * itemsPerPage >= cards.length}>
        Siguiente
      </button>
      </div>
    </>
  );
}

export default Cards;