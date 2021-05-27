import { Card } from '../Card';
import { useGenericContext } from '../Contexts/Context';
import styles from './styles.module.scss'

import ImageGallery from 'react-image-gallery';
import { useEffect, useState } from 'react';

type Slider = {
    original: string;
}

type ProductDetail = {
    title: string;
    price: Price;
    condition:  string;
    description: string;
    picture: [];
    sold_quantity: string;
}

type Price = {
    amount: number;
    currency: string;
    decimals: string;
}


const ProductDetails = (props: any) => {

    const { hideLoader } = useGenericContext();
    const [slider, setSlider] = useState<Slider[]>([]);

    const product:ProductDetail = props.product;

    useEffect(()=> {
        const pictures:Slider[] = [];

        product.picture.map((item:any) => {
            pictures.push({original: item.url})
        })

        setSlider(pictures)
        hideLoader();
    },[product])
            
    return(
        <Card padding="large">       
            <section className={styles.product}>
                <section className={styles.productDetail}>
                    <div className={`${styles.preview}`}>
                    <ImageGallery  items={slider}
                        lazyLoad={true}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        additionalClass="preview"
                    />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.status}>
                            <span>{ product.condition } - </span>
                            <span>{product.sold_quantity} vendidos</span>
                        </div>
                        <div className={styles.title}> { product.title } </div>
                        <div className={styles.price}> { product.price.decimals } </div>
                        <div className={styles.purchase}>
                            <button>Comprar</button>
                        </div>
                    </div>
                </section>
                <section className={styles.productDescription}>
                    <div className={styles.label}>Descriptión del producto</div>
                    <div className={styles.description}>{ product.description }</div>
                </section>
            </section>
        </Card>
    )
}

export { ProductDetails }