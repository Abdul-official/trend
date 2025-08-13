import React, { useEffect, useState } from 'react'
import './Collectionsec.css'
import {ShowContext} from '../../context/Showcontext'
// import {assets} from '../../assets/assets/'
import { useContext } from 'react'
import Productitems from '../../productitems/Productitems'
const Collectionsec = () => {


const {products , search , setsearch} = useContext(ShowContext)
const [currentpage , setcurrentpage] =useState(1);
const [filterproduct , setfilterproduct] = useState([])
const [category , setcategory]  = useState([]);
const [subcategory , setsubcategory]  = useState([]);


 const reloadpage = 8;
 const lastindex = currentpage * reloadpage;
 const firstindex = lastindex - reloadpage;
 
 const record = filterproduct.slice(firstindex , lastindex);
 const npage = Math.ceil(filterproduct.length / reloadpage)
//  const number = [...Array(npage + 1).keys()].slice(1)

 function prevbtn(){
   if(currentpage > 1){
      setcurrentpage(currentpage - 1)
   }
 }
 function nextbtn(){
     if(currentpage < npage){
      setcurrentpage(currentpage + 1)
   }
 }
 function changebtn(_id){
     setcurrentpage(_id)
 }



 //chatgpt

 function getPaginationNumbers() {
    let pages = [];

    if (npage <= 5) {
      // If total pages are less than or equal to 5, show all
      for (let i = 1; i <= npage; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentpage > 3) {
        pages.push("...");
      }

      let start = Math.max(2, currentpage - 1);
      let end = Math.min(npage - 1, currentpage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentpage < npage - 2) {
        pages.push("...");
      }

      // Always show last page
      pages.push(npage);
    }

    return pages;
  }





// Filter-product


const togglecategory = (e) =>{
  if (category.includes(e.target.value )) {
    setcategory((prev)=>(prev.filter((item)=>(item !== e.target.value))))
  } else {
    setcategory((prev)=>[...prev, e.target.value])
  }
}

const togglesubcategory = (e) =>{
    if (subcategory.includes(e.target.value)) {
      setsubcategory((prev)=>(prev.filter((item)=>(item !== e.target.value))))
    } else {
      setsubcategory((prev)=>[...prev, e.target.value])
    }
}

const applyfilter = () =>{
  let productcopy = [...products]
 
  if(setsearch && search){
    productcopy = productcopy.filter((item)=>(item.name.toLowerCase().includes(search.toLowerCase())))
  }

  if(category.length > 0){
    productcopy = productcopy.filter((item)=>(category.includes(item.category)))
  }
  if(subcategory.length > 0){
    productcopy = productcopy.filter((item)=>(subcategory.includes(item.subCategory)))
  }

  setfilterproduct(productcopy)
  setcurrentpage(1)
}

useEffect(()=>{
  applyfilter()
},[category,subcategory,search,setsearch])

 useEffect(()=>{
   setfilterproduct(products)
 },[products])


  return (
    <>
    <div className='container'>
        <div className='filter-container'>
          <h1>Filter</h1>
          <div className='filter'>
           <div className='category-container'>
               <h2>Category</h2>
               <div className='input-container'>
                <input type="checkbox" value={'Men'} onClick={togglecategory}/>
                <span>Men</span>
               </div>
               <div className='input-container'>
                <input type="checkbox" value={'Kids'} onClick={togglecategory}/>
                <span>Kids</span>
               </div>
            </div>  
             <div className='subcategory-container'>
               <h2>Sub Category</h2>
               <div className='input-container'>
                <input type="checkbox" value={'Shirt'} onClick={togglesubcategory}/>
                <span>Shirt</span>
               </div>
               <div className='input-container'>
                <input type="checkbox" value={'T-Shirt'} onClick={togglesubcategory}/>
                <span>T-Shirt</span>
               </div>
               <div className='input-container'>
                <input type="checkbox" value={'Cotton-Pant'} onClick={togglesubcategory}/>
                <span>Cotton-Pant</span>
               </div>
               <div className='input-container'>
                <input type="checkbox" value={'Jeans'} onClick={togglesubcategory}/>
                <span>Jeans</span>
               </div>
            </div>
            </div>  
        </div>
        <div className='collection-container'>
             <h1>Collections..!</h1>
         <div>
            <div className='image-container'>
             {
                record.map((item , index)=>(
                    <Productitems key={index} name={item.name} id={item._id} image={item.image} price={item.price}  />
                ))
             }
            </div>
         </div>
         {/* <div className='page-container'>
             <div className='prevpage' onClick={prevbtn}> 
               <img src={assets.dropdown_icon} alt="" />
             </div>
             {
               number.map((n)=>(
                 <li className={currentpage === n ? "active-page" : ""} key={n}><a href='#' onClick={(e)=>{e.preventDefault(); changebtn(n)}}>{n}</a></li>
               ))
             }
             <div className='nextpage' onClick={nextbtn}>
               <img src={assets.dropdown_icon} alt="" />
             </div>
        </div> */}
   

<div className='page-chat-container'>
      <div className='page-number'>
        <button className='page-button' onClick={prevbtn} disabled={currentpage === 1} style={{ opacity: currentpage === 1 ? 0 : 1 }}>
          &lt;
        </button>

        {getPaginationNumbers().map((item, index) => item === "..." ? (<span key={index}>...</span>) : 
        (<button key={index} onClick={() => changebtn(item)}
              style={{ background: currentpage === item ? "tomato" : "transparent",color: currentpage === item ? "#fff" : "#000",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              {item}
            </button>
          )
        )}

        <button className='page-button'
          onClick={nextbtn}
          disabled={currentpage === npage}
          style={{ opacity: currentpage === npage ? 0 : 1 }}
        >
          &gt;
        </button>
      </div>
    </div>


    </div>
    </div>
    </>
  )
}

export default Collectionsec
