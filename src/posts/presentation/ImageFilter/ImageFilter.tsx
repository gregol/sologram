import React from 'react'
import './instagram-filters.css'
interface ImageFilterProps { 
    image: string | null;
    setImageFilter: (filter: string) => void;
}
const filters: any[] = [
    { name: 'Normal', filter: 'none'}, 
    { name: 'Aden', filter: 'filter-aden'}, 
    { name: 'Amaro', filter: 'filter-crema'},
    { name: 'Kelvin', filter: 'filter-kelvin'},
    { name: 'Inkwell', filter: 'filter-inkwell'},
  ]

export const ImageFilter: React.FC<ImageFilterProps> = ({
    image,
    setImageFilter
}) => {
  if(!image) return null;
  return (
    <div className='overflow-x-auto flex mt-4 max-w-md mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5'>
      
      { filters.map((filter, index) => (
        <div 
          onClick={() => setImageFilter(filter.filter)}
          className='flex flex-col p-4 hover:cursor-pointer border-2 border-slate-400 mx-4 rounded-md items-center'
        >
          <div 
            key={index}
            className={`${filter.filter} bg-cover flex-none w-24 h-24 `} >
            { image && 
              <img src={image} className='bg-cover w-full h-3/4 select-none' alt='Post' />
            }
          </div>
          <h1>
            {filter.name}
          </h1>
        </div>
    
      ))}
    </div>
  )
}
