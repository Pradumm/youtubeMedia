import React from 'react'

const ButtonList = ({ buttonList }) => {
  return (
    <>
      <div className='  hidden sm:flex justify-start gap-3 lg:ml-8' >
        {
          buttonList.map((item) => {
            return (
              <div className=' bg-slate-800 px-3 py-1 inline-block rounded-lg  text-sm'>{item}</div>
            )
          })
        }
      </div>
    </>
  )
}

export default ButtonList