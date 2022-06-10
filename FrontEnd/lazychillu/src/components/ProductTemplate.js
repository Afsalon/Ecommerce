import React from 'react';
import {Link,useParams} from 'react-router-dom';

const ProductTemplate = (props) => {
  const {id,photo, name,description, brand, isAvailable, price, category} = props;
  return (

    <div key={id} className='product'>
      <Link to={`/products/${id}`}>
        <div className='imageBG'>
          <img className="productTemplatePic" src={'http://127.0.0.1:8000'+photo+'/'} alt={name}/>
        </div>
      </Link>
      <div className="productTemplateDetail">
        <h5 className="name">{name}</h5>
        <p className="price">&#8377;{price}</p>
      </div>
    </div>
  );
}

export default ProductTemplate;
