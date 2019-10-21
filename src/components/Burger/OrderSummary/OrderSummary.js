import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        });


    return (
        <Auxiliary>
            <h3>Jouw bestelling</h3>
            <p>Jouw burger bevat de volgende ingrediënten:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Totaal:</strong> €{props.price.toFixed(2)}</p>

            <Button btnType="Danger" clicked={props.purchaseCanceled}>ANNULEREN</Button>
            <Button btnType="Success">BEVESTIG BESTELLING</Button>
        </Auxiliary>
    );
};

export default orderSummary;
