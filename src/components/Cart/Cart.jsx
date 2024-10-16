import styles from '/src/components/Cart/Cart.module.css'
import Order from '/src/components/Order/Order'

function Cart(){
    return(
        <article className={styles.cart}>
            <header>
                <h1>
                Your Cart(7)
                </h1>
            </header>
            <main>
                <div className={styles.orderContainer}>
                <Order></Order>
                <Order></Order>
                <Order></Order>
                </div>
                
                <div>
                    Order Total
                    $46.50
                </div>
                <div>
                    Carbon
                </div>
                <button>

                </button>
            </main>

        </article>
    )
}

export default Cart