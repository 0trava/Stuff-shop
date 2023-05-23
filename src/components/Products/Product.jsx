import React from 'react';

import styles from "../../styles/Product.module.css";

const SIZES = [4, 4.5, 5];

const Product = ({price, title, images, description}) => {
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
            <div className={styles.action}>
                <button  className={styles.add}>Add to cart</button>
                <button  className={styles.add}>Add to favourites</button>
                <div className={styles.bottom}>
                    <div></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product