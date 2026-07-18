import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/forever-assets/assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  
  const {productID} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async ()=>{

    products.map((item)=>{
      if(item._id === productID)
      {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }
  useEffect(()=>{
    fetchProductData();
  },[productID,products])

  return productData ?(
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/*Data of product */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*image of product */}
        <div className='flex-1 flex flex-col-reverse sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer' alt="" />
                ))
              }
            </div>

            <div className='w-full ml-2 sm:w-[80%]'>
                <img  className='w-full h-auto' src={image} alt="" />
            </div>
        </div>

    {/*----Information of product---- */}
        <div className='flex-1'>
            <h1 className='font-semibold text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
                  <img src={assets.star_icon} className="w-3 5" />
                  <img src={assets.star_icon} className="w-3 5" />
                  <img src={assets.star_icon} className="w-3 5" />
                  <img src={assets.star_icon} className="w-3 5" />
                  <img src={assets.star_dull_icon} className="w-3 5" />
                  <p className='pl-2'>(92)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>
              {currency}{productData.price}
            </p>
            <p className='mt-5 text-gray-500 md:w-4/5'>
              {productData.description}
            </p>
            <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                    {productData.sizes.map((item,index)=>(
                      <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'bg-orange-500' : ''}`} key={index}>{item}</button>
                    ))}
                </div>
            </div>  
                <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                <hr className='mt-8 sm:w-4/5'/>
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p>100% Original Product.</p>
                    <p>Cash on delivery available.</p>
                    <p>Easy return and exchange policy within 7 days.</p>
                </div>
        </div>
    </div>



    {/*-----------DESCRIPTION AND REVIEW SECTION--------- */}
    <div className='mt-20'>
          <div className='flex'>
                  <b className='border px-5 py-3 text-sm'>Description</b>
                  <p className='border px-5 py-3 text-sm'>Reviews (92)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text:sm text-gray-500'>
            <p>Lorem ipsum sit amet consectetur, adipisicing elit. Tempore quis, omnis quam esse qui corporis, nulla accusamus  dolor sit amet consectetur adipisicing elit. Aperiam assumenda unde deleniti omnis, enim natus corrupti fugit harum delectus. Nesciunt!</p>
            <p>Lorem nulla! Velit nemo, sapiente odio facilis dignissimos debitis itaque labore asperiores, rerum harum dolorum nobis sit fugiat facere. Error, maiores ipsum. Necessitatibus recusandae impedit modi cumque tenetur molestiae quae dolore, officia excepturi in voluptatibus eveniet harum magni blanditiis a natus quod nam aut. Officiis quo voluptatum delectus quos exercitationem, eos dolorum velit totam facilis earum commodi rem architecto inventore aperiam ad blanditiis sed sit pariatur dignissimos ab nam cum!</p>
          </div>
    </div>



    {/*----------Related Products-------------- */}
    <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

</div>
  ) : <div className='opacity-0'></div>
}

export default Product