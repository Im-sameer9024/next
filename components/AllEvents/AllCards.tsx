import React from 'react'
import EventCard from './EventCard'


interface cardDataProps {
  cardData: { id: number, companyName: string, color: string, title: string, logo: string, des: string,type:string, institutes:[] }[]
}


const AllCards = ({ cardData }: cardDataProps) => {
  return (
    <div className=' w-full flex flex-wrap gap-8 justify-center'>
      {
        cardData.map((item, index) => {
          return (
            <EventCard id={item.id} key={index} companyName={item.companyName} color={item.color} title={item.title} logo={item.logo} des={item.des} type={item.type} institutes={item.institutes} />
          )
        })

      }

    </div>
  )
}

export default AllCards
