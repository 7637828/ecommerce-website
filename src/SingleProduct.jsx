import { useEffect, useState } from "react";
// import styled from "styled-components";
import { useCartContext } from "./context/cart_context";

import { GlobalContext } from "./context/productcontext";

import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { BsShieldShaded } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";



// import PageNavigation from "./components/PageNavigation";

// import FormatPrice from "./src/Helper/FormatPrice";
// import { MdSecurity } from "react-icons/md";
// import { TbTruckDelivery, TbReplace } from "react-icons/tb";
// import Star from "./components/Star";
// import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  // const { singleProduct } = GlobalContext();
  const{addCart} = useCartContext();
  const {id} = useParams();
  // console.log(singleProduct)
  const[data1,setdata1] = useState({});
  const[data2,setdata2] = useState([]);
  const[main,setmain] = useState([]);
  const[toggle,settoggle] = useState(false);
  const[amount,setamount] = useState(1);
  const[colors,sertcolors] = useState([]);
  const[select,setselect] = useState(colors[0]);
  const[rating, setrating] = useState([]);
  

  const setDecrease = () =>{
    amount > 1 ? setamount(amount-1):setamount(1);
  };

  const setIncrease = () =>{
    amount < data1.stock ? setamount(amount+1):setamount(data1.stock);
  };
 
  
  useEffect( ()=>{
     axios.get(`${API}?id=${id}`)
     .then((res) =>{
      const data =res.data;
      const data3 = res.data.image;
      const colr = res.data.colors;
      const rate = res.data.stars;
      setdata1(data)
      setdata2(data3)
      sertcolors(colr)
      setrating(rate)
      
  })
  .catch((error) =>{
    setdata1(error)
      
  })
    },[id]);
    console.log(data1);
    console.log(data2);
    console.log(colors);
    const ratingStar = Array.from({length:5},(ele,ind)=>{
      let number = ind + 0.5;
      return (
        <span key={ind}>
          {
            rating >= ind+1
            ? <FaStar className="icon"></FaStar>
            : rating >= number
            ? <FaStarHalfAlt className="icon"></FaStarHalfAlt>
            :<AiOutlineStar className="icon"></AiOutlineStar>
          }
        </span>
      )

    })
  // const {
  //   id: alias,
  //   name,
  //   company,
  //   price,
  //   description,
  //   category,
  //   stock,
  //   stars,
  //   reviews,
  //   image,
  // } = singleProduct;



  // if (isSingleLoading) {
  //   return <div className="page_loading">Loading.....</div>;
  // }


  return (
    <>
      <div className="container2">
        <div className="section1">
          <div className="row1">
             {data2.map((ele,ind)=>{
              return (<>
              
                <div className="img1" key={ind} onClick={()=>{settoggle(true)}}>
              <img src={ele.url} alt="Not Found" onClick={()=>{setmain(ele)}}></img>
            </div>
              </>)
             })}
            {/* <div className="img1">
              <img src="" alt="Not Found"></img>
            </div>
            <div className="img2">
              <img src="" alt="Not Found"></img>
            </div>
            <div className="img3">
              <img src="" alt="Not Found"></img>
            </div>
            <div className="img4">
              <img src="" alt="Not Found"></img>
            </div> */}
            
          </div>
          <div className={toggle?"show row2":"hide"}>
            <div className="show-img">
              <img src={toggle?main.url:""} alt="Not Found"></img>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="product-name">
            <h3>{data1.name}</h3>
          </div>
            <p className="ratingStar">{ratingStar}</p>
          <div className="product-price">
            <h3>MRP:${data1.price}</h3>
          </div>
          <div className="deal-price">
            <h3>Deal of the Day:$6,000.00</h3>
          </div>
          <div className="description">
            <p>{data1.description}</p>
          </div>
          <div className="specification">
            <div className="benifits">
              <FaTruck></FaTruck>
              <p>Free Delivery</p>
            </div>
            <div className="benifits">
            <BsShieldShaded></BsShieldShaded>
              <p>30Days Replacement</p>
            </div>
            <div className="benifits">
            <BsShieldShaded></BsShieldShaded>
              <p>100% Reliable</p>
            </div>
            <div className="benifits">
              <BsShieldShaded></BsShieldShaded>
              <p>2 Year Warranty</p>
            </div>
          </div>
          <hr></hr>
          <div className="stock">
            <p>Available: <span>{data1.stock>0?"In-stock":"out-of-stock"}</span></p>
            <p>Id: <span>{data1.id}</span></p>
            <p>Brand: <span>{data1.company}</span></p>
          </div>
          <hr></hr>
          <div className="colors">
            <p className="color">colors:{colors.map((Ele)=>{
              return <button className={select===Ele ? "btn4 dark" :"btn4" } style={{backgroundColor:Ele}}
              onClick={()=>{
                setselect(Ele);
              }}>
                {select===Ele ? <FaCheck className="check"></FaCheck>:"" }
              </button>
            })}
            </p>
          </div>
          {data1.stock>0 && <>
            <div className="add-to-cart">
            <button className="btn1" onClick={setDecrease}>➖</button>
            <span className="qutantity">{amount}</span>
            <button className="btn1" onClick={setIncrease}>➕</button>
          </div>
          <NavLink to="/cart" onClick={()=>{addCart(data1.name,data1.price,amount,data1.id,data1)}}>
          <button className="btn2" >ADD TO CART</button>
          </NavLink>
          </>}
         
         
        </div>
      </div>
    </>
    // <Wrapper>
    //   <PageNavigation title={name} />
    //   <Container className="container">
    //     <div className="grid grid-two-column">
    //       {/* product Images  */}
    //       <div className="product_images">
    //         <MyImage imgs={image} />
    //       </div>

    //       {/* product dAta  */}
    //       <div className="product-data">
    //         <h2>{name}</h2>
    //         <Star stars={stars} reviews={reviews} />

    //         <p className="product-data-price">
    //           MRP:
    //           <del>
    //             <FormatPrice price={price + 250000} />
    //           </del>
    //         </p>
    //         <p className="product-data-price product-data-real-price">
    //           Deal of the Day: <FormatPrice price={price} />
    //         </p>
    //         <p>{description}</p>
    //         <div className="product-data-warranty">
    //           <div className="product-warranty-data">
    //             <TbTruckDelivery className="warranty-icon" />
    //             <p>Free Delivery</p>
    //           </div>

    //           <div className="product-warranty-data">
    //             <TbReplace className="warranty-icon" />
    //             <p>30 Days Replacement</p>
    //           </div>

    //           <div className="product-warranty-data">
    //             <TbTruckDelivery className="warranty-icon" />
    //             <p>Thapa Delivered </p>
    //           </div>

    //           <div className="product-warranty-data">
    //             <MdSecurity className="warranty-icon" />
    //             <p>2 Year Warranty </p>
    //           </div>
    //         </div>

    //         <div className="product-data-info">
    //           <p>
    //             Available:
    //             <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
    //           </p>
    //           <p>
    //             ID : <span> {id} </span>
    //           </p>
    //           <p>
    //             Brand :<span> {company} </span>
    //           </p>
    //         </div>
    //         <hr />
    //         {stock > 0 && <AddToCart product={singleProduct} />}
    //       </div>
    //     </div>
    //   </Container>
    // </Wrapper>



// const Wrapper = styled.section`
//   .container {
//     padding: 9rem 0;
//   }
//   .product_images {
//     display: flex;
//     align-items: center;
//   }
//   .product-data {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 2rem;
//     .product-data-warranty {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       border-bottom: 1px solid #ccc;
//       margin-bottom: 1rem;
//       .product-warranty-data {
//         text-align: center;
//         .warranty-icon {
//           background-color: rgba(220, 220, 220, 0.5);
//           border-radius: 50%;
//           width: 4rem;
//           height: 4rem;
//           padding: 0.6rem;
//         }
//         p {
//           font-size: 1.4rem;
//           padding-top: 0.4rem;
//         }
//       }
//     }
//     .product-data-price {
//       font-weight: bold;
//     }
//     .product-data-real-price {
//       color: "red";
//     }
//     .product-data-info {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       font-size: 1.8rem;
//       span {
//         font-weight: bold;
//       }
//     }
//     hr {
//       max-width: 100%;
//       width: 90%;
//       /* height: 0.2rem; */
//       border: 0.1rem solid #000;
//       color: red;
//     }
//   }
//   .product-images {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   .page_loading {
//     font-size: 3.2rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
  
// `;
  )
}

export default SingleProduct;