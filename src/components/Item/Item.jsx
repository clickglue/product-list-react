import styles from "./Item.module.css";
import PropTypes from "prop-types";
import AddToCart from "../AddToCart/AddToCart";

function Item({ itemData, onDataChange }) {
  Item.propTypes = {
    itemData: PropTypes.object.isRequired,
    onDataChange: PropTypes.func.isRequired
  };

  return (
    <article className={styles.article}>
      <picture>
        <source srcSet={itemData.image.desktop} media="(min-width: 1024px)" />
        <source srcSet={itemData.image.tablet} media="(min-width: 768px)" />
        <img src={itemData.image.mobile} alt={`Picture of ${itemData.name}`} />
      </picture>
      <AddToCart itemData={itemData} onDataChange={onDataChange}/>
      <section className={styles.content}>
        <h1>{itemData.category}</h1>
        <h2>{itemData.name}</h2>
        <h3>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(itemData.price)}
        </h3>
      </section>
    </article>
  );
}
export default Item;
