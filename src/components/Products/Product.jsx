import React from 'react';

import styles from "../../styles/Product.module.css";

const Product = ({price, title, images}) => {
  return (
    <section className={styles.product}>
        <div className={styles.images}>
            <div  className={styles.current}
                  style = {{backgroundImage: `url(${currentImage})`}} />
            {images.map((image, i) => (
                <div 
                    key={i}
                    className={styles.image}
                    style = {{backgroundImage: `url(${image})`}}
                    onClick={() => {}}
                    />
            ))}
        </div>
        <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.price}>{price}</div>
        </div>
    </section>
  )
}

export default Product