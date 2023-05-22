import { useGetProductQuery } from 'features/api/apiSlice';
import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const {id} = useParams();
    const {data} = useGetProductQuery({id})

  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct