import React from 'react';
// import Product from './component/Product';
import { BsFillGridFill } from "react-icons/bs";
import { BsBorderWidth } from "react-icons/bs";
import { useFilterContext } from './context/filter_context';
import { NavLink } from 'react-router-dom';


const Products = () => {

  const { filter_products, sorting, filters: { text, category, company,minPrice,maxPrice,price }, updateFilterValue, all_product, setGrid, setList, list_view, grid_view,clearFilter } = useFilterContext();
  console.log(filter_products);
  console.log(text)
  console.log(list_view)
  console.log(grid_view)


  const getUniqueData = (data, property) => {
    const newVal = data.map((Ele) => {
      return Ele[property];
    })
    if (property === "colors") {
      return ["All", ...new Set(newVal.flat())]
    }
    return ["All", ...new Set(newVal)]

  }
  const categoryOnlyData = getUniqueData(all_product, "category");
  const companyOnlyData = getUniqueData(all_product, "company");
  const colorOnlyData = getUniqueData(all_product, "colors")
  console.log(categoryOnlyData);
  console.log(companyOnlyData);
  console.log(colorOnlyData);
  return (
    <>
      {/* <h2>products</h2> */}
      {/* <Product></Product> */}
      <div className='product-container'>
        <div className='filter-product'>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type='text' className='search-product' placeholder='SEARCH..' name='text' value={text} onChange={updateFilterValue}></input>
          </form>
          <h3 className='category'>Category</h3>
          {categoryOnlyData.map((Ele, ind) => {
            return (
              <>
                <button key={ind} className='filter-btn' name="category" onClick={updateFilterValue} value={Ele}>{Ele}</button>
              </>
            )
          })}
          <h3 className='category'>Company</h3>
          <select onClick={updateFilterValue} name="company">
            {companyOnlyData.map((Ele, ind) => {
              return (
                <>
                  <option key={ind} value={Ele} name="company">{Ele}</option>
                  <option disabled></option>
                </>
              )

            })}
          </select>
          {/* <h3 className='colors'>Colors</h3>

          <p className="color">{colorOnlyData.map((Ele) => {
            return <button className="filter-colr" style={{ backgroundColor: Ele }}>
            </button>
          })}
          </p> */}
          <h3 className='category'>Price</h3>
          <p>{price}</p>
          <input  className='range' type='range' name='price' min={minPrice} max={maxPrice} value={price} step="1000" onChange={updateFilterValue}></input>
          <button className='clear-btn' onClick={clearFilter}>CLEAR FILTER</button>
        </div>
        <div className='All-product'>
          <div className='product-sort'>
            <div className='grid-logo'>
              <BsFillGridFill onClick={setGrid} className='sign'></BsFillGridFill>
              <BsBorderWidth onClick={setList} className='sign'></BsBorderWidth>
            </div>
            <p>{filter_products.length} total products.</p>
            <select id="sort" onClick={sorting}>
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest" >Price(higest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Price(a-z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </div>
          {grid_view ?
            <div className='products'>
              {/* <h3>No Product Here</h3> */}
              {filter_products.map((Ele, ind) => {
                return (<>
                  <NavLink to={`/SingleProduct/${Ele.id}`} >
                    <div className='card' key={ind}>
                      {/* <div className='card-info'>
                    <h3>{Ele.name}</h3>
                </div> */}
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
            </div> : ""}
          {list_view ?
            <div className='products-grid'>
              {/* <h3>No Product Here</h3> */}
              {filter_products.map((Ele, ind) => {
                return (<>
                  <NavLink to={`/SingleProduct/${Ele.id}`} className="grid-link">
                    <div className='card-grid' key={ind}>
                      {/* <div className='card-info'>
                    <h3>{Ele.name}</h3>
                </div> */}
                      {/* <span className='grid-name'>{Ele.name}</span> */}
                      <div className='card-img-grid'>
                        <img src={Ele.image} alt=''></img>
                        <div className='grid-shadow'>
                      </div>
                      </div>
                      <div className='grid-description'>
                        <h3>{Ele.name}</h3>
                        <p>${Ele.price}</p>
                        <p>{Ele.description.slice(0,200)}....</p>
                        <button className='read-btn'>Read More</button>
                      </div>
                      
                    </div>
                  </NavLink>
                </>)
              })}
            </div> : ""}

        </div>
      </div>
    </>

  )
}

export default Products;