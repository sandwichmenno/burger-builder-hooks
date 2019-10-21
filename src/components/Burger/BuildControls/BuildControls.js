import React from 'react';
import './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Sla', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Kaas', type: 'cheese'},
    { label: 'Vlees', type: 'meat'},
];

const buildControls = (props) => (
    <div className="BuildControls">
        <p><strong>€{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}/>
        ))}
        <button className="OrderButton"
                onClick={props.ordered} >BESTEL DEZE BURGER</button>
    </div>
);

export default buildControls;