import { useGetProductQuery } from 'features/api/apiSlice';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
import Product from './Product';
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedProducts } from 'features/products/productsSlice';

const SingleProduct = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { list, related } = useSelector(({ products }) => products);


    const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id});

    useEffect(() =>{
        if (!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME);
        }
    }, [isFetching, isLoading, isSuccess, navigate])

    useEffect(() =>{
        if (!data || list.lenght) return;

            dispatch(getRelatedProducts(data.category.id));

    }, [data, dispatch, list.lenght])

  return  !data ? 
    (
        <section className="preloader">Loading...</section>
    ) : (
    <>
        <Product {...data} />
        <Products products={related} amount={5} title="Related product" />
    </>);

}

export default SingleProduct