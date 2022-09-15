import React from "react";
import { useState, useEffect } from "react";
import { BiPlus, BiMinus } from 'react-icons/bi'
import { FiTrash2 } from 'react-icons/fi'
import './Modal.css'

export default function Modal(props) {
    let { image, title, price, id, count } = props

    const [quantity, setQuantity] = useState(count)






    const removeHandler = (id) => {
        props.onRemoveModal(id)
    }


    const countPlusHandler = () => {
        setQuantity(prev => prev + 1)
    }

    const countMinusHandler = () => {
        setQuantity(prev => prev - 1)
    }


    return (
        <>
            <div className="modal-items">
                <div className="modal-image-container">
                    <img src={image} className="modal-image"></img>
                </div>
                <div>{title}</div>
                <div>{price}$</div>
                <div className="modal-quantity">
                    <button onClick={countMinusHandler}>{<BiMinus />}</button>
                    <div>{quantity}</div>
                    <button onClick={countPlusHandler}>{<BiPlus />}</button>
                </div>
                <div>{price * quantity}$</div>
                <div onClick={() => removeHandler(id)}>{<FiTrash2 />}</div>
            </div>

        </>
    )
}
