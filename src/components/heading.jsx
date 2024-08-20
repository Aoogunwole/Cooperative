import React from 'react'

const heading = () => {
  return (
    <div className="flex items-center my-10 justify-center text-center max-w-[90vw] md:max-w-[75vw] mx-auto flex-col gap-6">
      <h2 className="text-3xl font-quicksand font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default heading
