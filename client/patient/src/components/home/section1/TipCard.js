import React from 'react'

function TipCard({ position, width, height, title, description }) {
  return (
    <div
      className={`absolute ${position} w-[${width}] h-[${height}] flex flex-col justify-center flex-shrink-0 rounded-[16px] border border-[rgba(255,68,68,0.20)] bg-[rgba(255,68,68,0.10)] px-[28px]`}
    >
      <p className="text-white font-inter text-[18px] font-normal leading-[27px]">
        {title}
      </p>
      <p className="text-white font-inter text-[14px] font-normal leading-[21px] pt-[11px]">
        {description}
      </p>
    </div>
  )
}

export default TipCard
