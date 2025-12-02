import React from 'react'

import Header from './Header'
import ProductList from './ProductList'
import CartList from './CardList'
import { CartProvider } from './CardContext'
function CartApp() {
    return (
        
        <CartProvider>
            <div className="app">
                <Header />
                <main>
                    <ProductList />
                    <CartList />
                </main>
            </div>
        </CartProvider>
    )
}

export default CartApp