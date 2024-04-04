import React from 'react'

function SidebarOption({title,Icon}) {
  return (
    <div className='sidebarOption'>
      {Icon&&<Icon  className="sidebarOption-icon"/>}
      {Icon ? <h1>{title}</h1>:<p>{title}</p>}
    </div>
  )
}

export default SidebarOption
 