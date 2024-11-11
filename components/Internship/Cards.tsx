import React from 'react'
import Card from './Card'

interface cardDataProps {
  cardData: { id: number, time: string, title: string, des: string, logo: string, validity: string, price: string, place: string,color:string }[]
}

const Cards = ({ cardData }: cardDataProps) => {



  return (
    <div className=' w-full flex flex-wrap justify-between gap-8'>
      {
        cardData.map((item, index) => {
          return (
            <Card id={item.id} key={index} time={item.time} title={item.title} des={item.des} logo={item.logo} validity={item.validity} price={item.price} place={item.place} color={item.color} />
          )
        })

      }

    </div>
  )
}

export default Cards
