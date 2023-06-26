import React from 'react'

const Skill = ({Title,data}) => {
  return (
    <>
    <h2 className="text-bold text-2xl">{Title}</h2>
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0 justify-center">
      {data.map(({ id, title, child, style }) => (
        <div
          key={id}
          className={`border hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
        >
          <div className="relative mx-auto border border-slate-500 shadow-md shadow-white/20 rounded-full w-24 h-24 bg-gradient-to-b">
            <div className="m-auto my-5 rounded-md w-14 h-14 backdrop-blur-sm bg-white/50 flex justify-center items-center">
              {child}
            </div>
          </div>
          <p className="mt-4">{title}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Skill
