import React from 'react'

const InputItem = ({placeholder}) => {
  return (
   <>
   <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px] col-span-1"
              placeholder={placeholder}
            />
   </>
  )
}

export default InputItem