import React from 'react'
import bintang from '../assets/bintang.svg'
import ceklis from '../assets/ceklis.svg'
import check_in from '../assets/check_in.svg'
import pesan from '../assets/pesan.svg'
import map from '../assets/map.svg'
import harga from '../assets/harga.svg'
import icon from '../assets/iconB.svg'
import vector from '../assets/Vector5.svg'
import vector2 from '../assets/Vector4.svg'

const Reviews = () => {
  const data = [
    {
      'img': bintang,
      'title': '5.0',
      'alt': 'icon_bintang',
      'name': 'Cleanliness'
    },
    {
      'img': ceklis,
      'title': '5.0',
      'alt': 'icon_ceklis',
      'name': 'Accuracy'
    },
    {
      'img': check_in,
      'title': '5.0',
      'alt': 'icon_check_in',
      'name': 'Check-in'
    },
    {
      'img': pesan,
      'title': '5.0',
      'alt': 'icon_pesan',
      'name': 'Communication'
    },
    {
      'img': map,
      'title': '5.0',
      'alt': 'icon_map',
      'name': 'Location'
    },
    {
      'img': harga,
      'title': '5.0',
      'alt': 'icon_harga',
      'name': 'Value'
    },
  ]

  return (
    <main>
      <div className='flex w-full h-full mt-[100px] pt-[50px] items-center font-poppins text-ijo' id='Reviews'>
        <img className='size-[24px] ml-[52px] mr-3' src={icon} alt="IconBinang" />
        <p className='text-[24px]'>5.0 From 40 Reviews</p>
      </div>

      <div className='px-[52px] py-2 grid grid-cols-7 gap-[27px] justify-center text-center mt-[24px] pb-[75px]'>
        <h1 className='mr-[42px] text-[5px] md:text-[9px] lg:text-[14px]'>Overall rating
          <h2 className='grid grid-rows-5'>
            <p className='flex flex-row py-[2px] text-center w-full'> 5
              <img className='items-center w-[150px] pl-2' src={vector} alt="Vector" /> </p>
            <p className='flex flex-row py-[2px] text-center w-full'> 4
              <img className='items-center w-[150px] pl-2' src={vector2} alt="vector" /> </p>
            <p className='flex flex-row py-[2px] text-center w-full'> 3
              <img className='items-center w-[150px] pl-2' src={vector2} alt="vector" /> </p>
            <p className='flex flex-row py-[2px] text-center w-full'> 2
              <img className='items-center w-[150px] pl-2' src={vector2} alt="vector" /> </p>
            <p className='flex flex-row py-[2px] text-center w-full'> 1
              <img className='items-center w-[150px] pl-2' src={vector2} alt="vector" /> </p>
          </h2>
          <div>
          </div>
        </h1>
        {
          data.map((item, index) => (
            <div key={`${item.title}-${index}`} className='font-poppins text-ijo gap-3 w-full flex-col border-l-[2px] border-gray-300'>
              <p className='text-[5px] md:text-[9px] lg:text-[14px]'>{item.name}</p>
              <p className='text-[10px] lg:text-[48px] px-[10px] py-[10px]'>{item.title}</p>
              <img className='w-[50%] items-start size-[25px]' src={item.img} alt={item.alt} />
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default Reviews;
