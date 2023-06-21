import React from 'react'
import { GlobalContext } from '../context/productcontext'
import { NavLink } from 'react-router-dom';
import { API } from '../context/productcontext';


const FeatureProduct = () => {
    const { featureProducts, singleProduct } = GlobalContext();
    console.log(featureProducts)
    console.log(singleProduct)
    return (
        <div className='feature-container'>
            <h1 className='feature-heading'>Feature Product</h1>
            <div className='card-container'>
                {featureProducts.map((Ele) => {
                    return (<>
                        <NavLink to={`/SingleProduct/${Ele.id}`} >
                            <div className='card'>
                                <span className='name'>{Ele.name}</span>
                                <div className='card-img'>
                                    <img src={Ele.image} alt=''></img>
                                </div>
                                <div className='shadow'>
                                </div>
                            </div>
                        </NavLink>

                    </>)
                })}
            </div>
        </div>

    )
}

export default FeatureProduct