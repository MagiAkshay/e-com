import React, { useState, useEffect } from "react";
import "./mobile.css";
import AddCart from "../Add-Cart/addCart";
import { Link } from "react-router-dom";
import axios from 'axios';

function Mobile() {
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showSecondImage, setShowSecondImage] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [value, setValue] = useState(50); // Initial value set to 50

    // Fetch products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const responsed = await axios.get('http://localhost:6000/api/products');
                
                const data = await responsed.json();
                setProducts(data);
            } catch (error) {
                setError('Failed to fetch products');
            }
        };

        fetchProducts();
    }, []);

    // Timer logic
    useEffect(() => {
        const targetDate = new Date("2024-12-31T23:59:59"); // Replace with your target date

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({
                    days,
                    hours,
                    minutes,
                    seconds,
                });
            } else {
                clearInterval(interval);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Event handlers
    const handleAddCartClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 200); // Simulate some delay for the loader
    };

    const handleMouseMove = () => {
        setShowSecondImage(true);
    };

    const handleMouseLeave = () => {
        setShowSecondImage(false);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    
    const displayedProducts = products.slice(0, 2);

    
    
    return (
        <div>
            <div className="top-deals-div">
                <span className="top-deals">Top Deals Of The Day</span>
            </div>
            <div className="two-moblie-div"> 
                
                {products.map(product => (
                    <div className="image-mobile-div" key={product._id}>
                        <div>
                            <Link to="/find-id" className="link-tag">
                                <button
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    className="btn-mobile"
                                >
                                    <div className="btb-image-change">
                                        {showSecondImage ? (
                                            <div className="image-icon-div">
                                                <div>
                                                    <img
                                                        src={product.image_url_2}
                                                        alt="Alternate view of product"
                                                        className="image-change-mobile"
                                                    />
                                                </div>
                                                <div className="icon-mobile-div">
                                                    <img
                                                        src="https://example.com/heart-icon.jpg"
                                                        alt="Heart symbol"
                                                        className="heart-icons-mobile"
                                                    />
                                                    <img
                                                        src="https://example.com/eye-icon.jpg"
                                                        alt="Eye symbol"
                                                        className="heart-icons-mobile"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src={product.image_url_1}
                                                    alt="Primary view of product"
                                                    className="image-change-mobile"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </button>
                            </Link>
                        </div>
                        
                        <div className="moblie-describtion">
                            <div className="mobile-headname">
                                <h6>{product.product_name}</h6>
                            </div>
                            <div>
                                <div>
                                    <img
                                        src="https://example.com/star-icon.jpg"
                                        alt="Star rating"
                                        className="star-icon-moblie"
                                    />
                                    <img
                                        src="https://example.com/star-icon.jpg"
                                        alt="Star rating"
                                        className="star-icon-moblie"
                                    />
                                    <img
                                        src="https://example.com/star-icon.jpg"
                                        alt="Star rating"
                                        className="star-icon-moblie"
                                    />
                                    <img
                                        src="https://example.com/star-icon.jpg"
                                        alt="Star rating"
                                        className="star-icon-moblie"
                                    />
                                    <img
                                        src="https://example.com/star-icon.jpg"
                                        alt="Star rating"
                                        className="star-icon-moblie"
                                    />
                                    &nbsp;&nbsp;&nbsp;<span>2 Reviews</span>
                                    <p>${product.price}</p>
                                </div>

                                <div>
                                    <ul>
                                        <li>Screen Size: {product.specifications.screen_size}</li>
                                        <li>Operating System: {product.specifications.operating_system}</li>
                                        <li>Product Length: {product.specifications.product_length}</li>
                                    </ul>
                                </div>

                                <div className="timer-divs-direction">
                                    <div className="timer-div">{timeLeft.days}</div>
                                    <div className="timer-div">{timeLeft.hours}</div>
                                    <div className="timer-div">{timeLeft.minutes}</div>
                                    <div className="timer-div">{timeLeft.seconds}</div>
                                </div>
                            </div>
                            <div>
                                <input
                                    type="range"
                                    id="rangeInput"
                                    min="0"
                                    max="100"
                                    value={value}
                                    className="range-mobile-sold"
                                    onChange={handleChange}
                                />
                                <div>Sold : {value}/100</div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-dark btn-AddCart-moblie-large"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    onClick={handleAddCartClick}
                                >
                                    Add Cart
                                </button>

                                {loading ? <div className="loader"></div> : ""}
                                <AddCart />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        // Render
    
    );
   
}

export default Mobile;
