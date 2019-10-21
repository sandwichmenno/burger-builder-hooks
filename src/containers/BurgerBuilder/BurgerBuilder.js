import React, { useState } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const BurgerBuilder = () =>  {
    const [ingredients, setIngredients] = useState({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    });
    const [totalPrice, setTotalPrice] = useState(4);
    const [purchasing, setPurchasing] = useState(false);

    const addIngredientHandler = (type) => {
        const updatedCount = ingredients[type] + 1;
        const updatedIngredients = {
            ...ingredients
        };
        updatedIngredients[type] = updatedCount;
        setIngredients(updatedIngredients);

        const updatedPrice = totalPrice + INGREDIENT_PRICES[type];
        setTotalPrice(updatedPrice);
    };

    const removeIngredientHandler = (type) => {
        if(ingredients[type] <= 0) {
            return;
        }

        const updatedCount = ingredients[type] - 1;
        const updatedIngredients = {
            ...ingredients
        };
        updatedIngredients[type] = updatedCount;
        setIngredients(updatedIngredients);

        const updatedPrice = totalPrice - INGREDIENT_PRICES[type];
        setTotalPrice(updatedPrice);
    };

    const purchaseHandler = () => {
        setPurchasing(true);
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    return (
        <Auxiliary>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                <OrderSummary
                    ingredients={ingredients}
                    price={totalPrice}
                    purchaseCanceled={purchaseCancelHandler} />
            </Modal>
            <Burger ingredients={ingredients}/>
            <BuildControls
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                price={totalPrice}
                ordered={purchaseHandler}
            />
        </Auxiliary>
    );
}

export default BurgerBuilder;