import React from 'react';
import MyData from '../Mydata/MyData'
import { BsPlusCircleFill } from 'react-icons/bs';


import './ProductAPI.css'

const ProductAPI = (props) => {


    let { id, title, image, price } = props

    const addItemHandler = (id) => {
        props.addItem(id)

    }






    return (
        <>
            <div className="box">
                <div className='box-image'>
                    <img className='product-image' src={image} alt="" />
                </div>
                <div className='box-info'>
                    <div className='box-info-color'>red</div>
                    <div className='box-info-title'>{title}</div>
                    <div className='box-info-price'>{price} $</div>
                    <div className='box-info-icon' onClick={() => addItemHandler(id)}>{<BsPlusCircleFill />}</div>
                </div>
            </div>


        </>
    )
}

export default ProductAPI;
