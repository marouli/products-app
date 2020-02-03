import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductDetail.css';
import Carousel from '../Carousel/Carousel';
import CommentBox from '../Comment/CommentBox';


const ProductDetail = ({match: {params: {title}}}) => {
  const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
          setIsLoading(true)
					const result = await axios(`http://private-5815fe-recommendationsknip.apiary-mock.com/products`);           
					setData(result.data.filter(product => product.title === title)[0]);     
					setIsLoading(false)  
        }    
				fetchData(); 
		}, [title]);
		
	if (isLoading) {
			return <div>Loading...</div>
	}
	
	return (
    <div className="c-detail__container">
      <Link className="c-detail__link" to="/">Return to List View</Link>
      <div className="c-detail__card">
        <h2 className="c-detail__title">{data.title}</h2>
		    <p className="c-detail__description">{data.description}</p>
			  <h4 className="c-detail__spec__title">Product Specifications</h4>
			  <p className="c-detail__spec">{data.specification}</p>
		    <p className="c-detail__price">€{data.price}</p>
          {data.images && 
            <Carousel images={data.images.map(image => image.original)}/>
          }
		    <CommentBox id={data.id}/>
      </div>
    </div>
  );
}

export default ProductDetail;