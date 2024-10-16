import styles from "./Item.module.css";
import AddToCart from "../AddToCart/AddToCart";

const itemDataBU = {
    image: {
      thumbnail: "/src/assets/images/image-waffle-thumbnail.jpg",
      mobile: "/src/assets/images/image-waffle-mobile.jpg",
      tablet: "/src/assets/images/image-waffle-tablet.jpg",
      desktop: "/src/assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  };
  
  function Item({itemData}) {
    return (
      <article className={styles.article}>
        <picture>
          <source srcSet={itemData.image.desktop} media="(min-width: 1024px)" />
          <source srcSet={itemData.image.tablet} media="(min-width: 768px)" />
          <img src={itemData.image.mobile} alt={`Picture of ${itemData.name}`} />
        </picture>
        <AddToCart />
        <section className={styles.content}>
        <h1>{itemData.category}</h1>
        <h2>{itemData.name}</h2>
        <h3>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(itemData.price)}
        </h3>
        </section>
        
      </article>
    );
  }
  export default Item;
