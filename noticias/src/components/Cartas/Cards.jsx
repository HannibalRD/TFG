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
    title:'Fazt Web',
    image: image5,
    url: 'http://google.com'

},
{
    
    id:2,
    title:'Fazt Blog',
    image: image6,
    url: 'http://google.com'
},
{
    
    id:3,
    title:'',
    peso:'3kg',
    image: image9,
    url: 'http://google.com'
},{
    id:4,
    title:'Fazt Web',
    peso:'3kg',
    image: image7,
    url: 'http://google.com'

},{
    id:5,
    title:'Fazt Web',
    image: image8,
    url: 'http://google.com'

},{
    id:6,
    title:'Mona amarilla',
    image: image4,
    url: 'http://google.com'

},{
    id:7,
    title:'Fazt Web',
    image: image10,
    url: 'http://google.com'

},{
    id:8,
    title:'Fazt Web',
    image: image11,
    url: 'http://google.com'

},{
    id:9,
    title:'Fazt Web',
    image: image12,
    url: 'http://google.com'

},{
    id:10,
    title:'Fazt Web',
    image: image13,
    url: 'http://google.com'

},{
    id:11,
    title:'Fazt Web',
    image: image14,
    url: 'http://google.com'

},{
    id:12,
    title:'Fazt Web',
    image: image15,
    url: 'http://google.com'

},{
    id:13,
    title:'Fazt Web',
    image: image16,
    url: 'http://google.com'

},
{
  id:14,
  title:'Fazt Web',
  image: image18,
  url: 'http://google.com'

},{
  id:15,
  title:'Fazt Web',
  image: image17,
  url: 'http://google.com'

},
]
const itemsPerPage = 12;
function Cards() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;

  if (endIndex > cards.length) {
    endIndex = cards.length;
  }

  const currentPageData = cards.slice(startIndex, endIndex);

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
          {currentPageData.map((card, index) => (
            <div className='col custom-card' key={card.id}>
              <Card
                title={card.title}
                image={card.image}
                peso={card.peso}
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