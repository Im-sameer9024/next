import React from 'react'
import List from './List'

interface DataItem {

  id: number,
  image: string,
  name: string,
  place: string,
  rating: number,
  review: number,
  minPrice: number,
  maxPrice: number,
  exam: number,

}

interface dataProps {
  data: DataItem[];
}

const Lists = ({ data }: dataProps) => {
  return (
    <div className=' w-full flex flex-wrap justify-between gap-8'>
      {
        data.map((item) =>
        (
          <List id={item.id} image={item.image} name={item.name} place={item.place} rating={item.rating} review={item.review} minPrice={item.minPrice} maxPrice={item.maxPrice} />
        )
        )
      }

    </div>
  )
}

export default Lists
