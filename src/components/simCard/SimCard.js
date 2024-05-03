import React from 'react';
import {useSelector} from 'react-redux';
import {selectSimCard} from "../../slices/SimCardSlice";

export default function SimCard() {
    const simCard = useSelector(selectSimCard);

    return (<div>
            <span>{simCard}</span>
        </div>
    )
}