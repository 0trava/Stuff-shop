import { useGetProductQuery } from 'features/api/apiSlice';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';



const Category = () => {
    const {id} = useParams();

    const {data} = useGetProductQuery({categoryId: id});

    useEffect(() => {

    }, [])


  return (

  )
}

export default Category;