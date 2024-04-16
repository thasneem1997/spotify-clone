import React from 'react'

function SidebarOption({title,Icon}) {
  return (
    <div className='sidebarOption'>
      {Icon&&<Icon  className="sidebarOption-icon"/>}
      {Icon ? <h3>{title}</h3>:<p>{title}</p>}
    </div>
  )
}

export default SidebarOption
 