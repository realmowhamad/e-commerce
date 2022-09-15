import React, { useState, useEffect } from 'react';
import BottomBar from '../BottomBar/BottomBar';
import { Container, Row, Col } from 'react-bootstrap'
import { FiShoppingCart } from 'react-icons/fi'
import ProductAPI from '../ProductAPI/ProductAPI';
import MyData from '../Mydata/MyData';
import Modal from '../Modal/Modal'
import './Main.css';


const Main = () => {
    const [basketItems, setBasketItems] = useState([])
    const [products, setProducts] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [category, setCategory] = useState([
        "All", "Shoes", "Hoddie", "Accessory", "Jacket"
    ])


    const addBasket = (productId) => {
        let mainItem = products.find(product => product.id === productId)
        setBasketItems(prevState => [...prevState, mainItem])

    }

    const modalList = () => {
        setShowModal(!showModal)
    }



    const removeModalItem = (itemID) => {
        let removedItem = basketItems.filter(item => item.id !== itemID)

        setBasketItems(removedItem)

    }




    useEffect(() => {
        setProducts(MyData)
    }, [products])



    useEffect(() => {

    }, [basketItems])



    return (
        <Container fluid>
            <Row className={showModal ? "openModal Row-grid" : "Row-grid"}>
                <Col className="products">
                    <Col className="shopCount" onClick={modalList}>
                        {<FiShoppingCart />}
                        {basketItems.length > 0 ? (<span>{basketItems.length}</span>) : null}

                    </Col>
                    <Col className="title">
                        <h1>Our Product</h1>
                    </Col>
                    <Col className="category">
                        {category.map(item => (
                            <div className="category-item" key={item.id}>{item}</div>
                        ))}
                    </Col>
                    <Col sm={12} className="list-product">
                        {products.map(product => (
                            <ProductAPI key={product.id} addItem={addBasket} {...product} />
                        ))}
                    </Col>
                </Col>

                <Col className="BottomBar-Col">
                    {<BottomBar />}
                </Col>
                {showModal && (
                    <div className='modal-container'>
                        {basketItems.map(item => (
                            <Modal key={item.id} {...item} onRemoveModal={() => removeModalItem(item.id)} />
                        ))}
                    </div>
                )}


            </Row>

        </Container >
    );
}

export default Main;
