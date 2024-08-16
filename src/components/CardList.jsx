"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';

const CardList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("https://fakestoreapiserver.reactbd.com/products").then(
        response => {
          const cardData = response.data.map(item => ({
            id: item._id,
            imageUrl: item.image,
            title: item.title,
            price: item.price,
            description: item.description
          }));
          setData(cardData);
        }
      ).catch(err=>{
        console.error("Error Fetching", err)
      })
    })

    console.log('data', data)
  
    return (
        <div className="space-y-4 p-4">
      {data.map(card => (
        <div key={card.id} className="w-full">
          <Card
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            price={card.price}
          />
        </div>
      ))}
    </div>
    )
}

export default CardList
