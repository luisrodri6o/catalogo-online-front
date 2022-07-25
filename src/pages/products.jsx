import {Card} from '../Components';
import './styleSheeds/products.css';

function Products (){
    return(
      
        <div className='producs-section'>
          <Card photo={1} name={"nombre"} description={'descripcion de producto'} price={'54.000'} />
          <Card photo={2} name={"nombre"} description={'descripcion de producto'} price={'54.000'} />
          <Card photo={3} name={"nombre"} description={'descripcion de producto'} price={'54.000'} />
          <Card photo={4} name={"nombre"} description={'descripcion de producto'} price={'54.000'} />
          <Card photo={6} name={"nombre"} description={'descripcion de producto'} price={'54.000'} />
          <Card photo={7} name={"nombre"} description={'descripcion de producto'} price={'54.000'} />
    
        </div>
        )
}

export default Products;