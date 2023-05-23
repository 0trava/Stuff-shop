import { useGetProductQuery } from 'features/api/apiSlice';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

const SingleProduct = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id});

    useEffect(() =>{
        if (!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME);
        }
    }, [isFetching, isLoading, isSuccess])

  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct