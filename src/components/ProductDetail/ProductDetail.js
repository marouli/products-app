import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductDetail.css';
import Carousel from '../Carousel/Carousel';
import CommentBox from '../Comment/CommentBox';


const ProductDetail = ({match: {params: {title}}}) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      !cancel && setIsLoading(true) && setIsError(false)
      try {
        const {data} = await axios.get(`http://private-5815fe-recommendationsknip.apiary-mock.com/products`);       
        !cancel && setData(data.filter(product => product.title === title)[0]);    
      } catch (error) {
          setIsError(true)
      } finally {
        !cancel && setIsLoading(false) 
      }
    }

    fetchData();

    return () => { cancel = true }
    
  },[title]);
      
	return (
    <>
    {isError && <div>Something went wrong ...</div>}
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <div className="c-detail__container">
        <Link className="c-detail__link" to="/">&#8592; Back to Products List</Link>
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
    )}
    </>
  );
}

export default ProductDetail;