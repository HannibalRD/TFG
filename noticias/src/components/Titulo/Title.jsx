
import '../Carta/cards.css'
const portada= 'GLOSARIO';
const dividido= portada.split('')


function Title(){
    return(
        <div className="pt-4 d-flex justify-content-center ">
        {dividido.map((dividido,index) => (
            <h1 key={index} className={`hola-${index} animate__animated animate__fadeInDown`}>
            {dividido}
            </h1>
        ))}
        </div>
    )
}
export default Title