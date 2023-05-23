import React from 'react';

import styles from "../../styles/Products.module.css";

const Product = () => {
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
                    />
            ))}
        </div>
    </section>
  )
}

export default Product