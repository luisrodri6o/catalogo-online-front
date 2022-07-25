import './styleSheeds/product.css'
const photos = require.context('../images/products');
function Card ({photo, name, description,price}){
    return (

        <div className='card'>
            <div className='image-container'>
              <img src={photos(`./${photo}.jpg`)} alt="" />
            </div>
            <div className='card-body'>
                <div className='name'>                    
                    <h6> {name} </h6>
                </div>                
                <div className='description'>                    
                    <p> {description} </p>
                </div>
                <div className='price'>
                    <p>$ {price} </p>
                </div>
                    

            </div>

        </div>
    )
}
export default Card;