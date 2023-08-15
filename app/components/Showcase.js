"use client"
import React from 'react'
import Navbar from './Navbar'
import ShowcaseCard from './ShowcaseCard'
import OrderBottom from './OrderBottom'

export default function Showcase() {
  const data=[{
    "id":1,
    "title":"Veggie Delight Burger", 
    "description":"For the veggie lovers, we present the Veggie Delight Burger. A hearty and flavorful patty made from a blend of garden-fresh vegetables, paired with melted cheese, tangy pickles, and our signature mayo. Bite into a burst of colors and flavors that will make you forget you're eating your greens",
    "img":"/food3.jpg",
    "price":120
  },
  {
    "id":2,
    "title":"Grilled Chicken Caesar Wrap", 
    "description":"Elevate your lunch with our Grilled Chicken Caesar Wrap. Tender grilled chicken, crisp romaine lettuce, Parmesan cheese, and creamy Caesar dressing all wrapped in a soft flour tortilla. It's a taste of sophistication in the convenience of a handheld delight",
    "img":"/food4.jpg",
    "price":160
  },
  {
    "id":3,
    "title":"Turkey Avocado Club Sandwich", 
    "description":"Our Turkey Avocado Club Sandwich is a symphony of flavors and textures. Layers of thinly sliced turkey, creamy avocado, crispy bacon, lettuce, and tomato, all nestled between toasted whole-grain bread. It's a wholesome and indulgent masterpiece",
    "img":"/food5.jpg",
    "price":170
  },
  {
    "id":4,
    "title":"Home-Style Comfort Pasta", 
    "description":"Experience comfort in every forkful with our Home-Style Comfort Pasta. Al dente pasta coated in a rich and hearty tomato sauce, featuring your choice of succulent meatballs or sautéed vegetables. It's a taste of nostalgia that warms the heart",
    "img":"/food6.jpg",
    "price":180
  },
  {
    "id":5,
    "title":"Veggie Delight Burger", 
    "description":"For the veggie lovers, we present the Veggie Delight Burger. A hearty and flavorful patty made from a blend of garden-fresh vegetables, paired with melted cheese, tangy pickles, and our signature mayo. Bite into a burst of colors and flavors that will make you forget you're eating your greens",
    "img":"/food3.jpg",
    "price":120
  },
  {
    "id":6,
    "title":"Grilled Chicken Caesar Wrap", 
    "description":"Elevate your lunch with our Grilled Chicken Caesar Wrap. Tender grilled chicken, crisp romaine lettuce, Parmesan cheese, and creamy Caesar dressing all wrapped in a soft flour tortilla. It's a taste of sophistication in the convenience of a handheld delight",
    "img":"/food4.jpg",
    "price":150
  },
  {
    "id":7,
    "title":"Turkey Avocado Club Sandwich", 
    "description":"Our Turkey Avocado Club Sandwich is a symphony of flavors and textures. Layers of thinly sliced turkey, creamy avocado, crispy bacon, lettuce, and tomato, all nestled between toasted whole-grain bread. It's a wholesome and indulgent masterpiece",
    "img":"/food5.jpg",
    "price":140
  },
  {
    "id":8,
    "title":"Home-Style Comfort Pasta", 
    "description":"Experience comfort in every forkful with our Home-Style Comfort Pasta. Al dente pasta coated in a rich and hearty tomato sauce, featuring your choice of succulent meatballs or sautéed vegetables. It's a taste of nostalgia that warms the heart",
    "img":"/food6.jpg",
    "price":180
  }, 
]

  const content = data.map((el)=>{
    return(
      <ShowcaseCard key={el.id} el={el}/>
    )
  })
  return (
    <div id='showcase'>
      <div className=' sticky top-0 z-50'>
      <Navbar/>
      </div>
      <div className=' flex justify-center items-center flex-wrap flex-row gap-20 py-8'>
        {content}
        </div>
        <footer class=" flex sticky bottom-0">
          <OrderBottom pay={false}/>
        </footer>
        </div>
  )
}
