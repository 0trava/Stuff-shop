import React, { useEffect, useState } from 'react';
import { ROUTES } from 'utils/routes';
import { Link } from "react-router-dom";

import styles from "../../styles/Product.module.css";



const SIZES = [4, 4.5, 5];

const Product = ({price, title, images, description}) => {
        // const currentImage = images[0];

    const [currentImage, setCurrentImage] = useState();

useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);


  return (
    <section className={styles.product}>
        <div className={styles.images}>
            <div  className={styles.current}
                  style = {{backgroundImage: `url(${currentImage})`}} />
                  <div className={styles["images-list"]}>
                    {images.map((image, i) => (
                        <div 
                            key={i}
                            className={styles.image}
                            style = {{backgroundImage: `url(${image})`}}
                            onClick={() => setCurrentImage(image)}
                            />
                    ))}
                 </div>
            </div>
        <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.price}>{price}</div>
            <div className={styles.color}>
                <span>Color:</span>Green
            </div>
            <div className={styles.sizes}>
                <span>Sizes:</span>
                <div className={styles.list}>
                    {SIZES.map(size => (
                        <div className={`${styles.size}`} onClick={()=>{}} key={size}>
                            {size}
                        </div>
                    ))}

                </div>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.actions}>
                <button  className={styles.add}>Add to cart</button>
                <button  className={styles.add}>Add to favourites</button>
                <div className={styles.bottom}>
                    <div className={styles.purchase}>19 people purchased</div>
                    <Link to={ROUTES.HOME}>Peturn to store</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product;