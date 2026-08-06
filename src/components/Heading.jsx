import React from 'react'

const Heading = ({Tag="h1",className="",children}) => {
  return (
    <>
    
     <Tag className={className}>{children}</Tag>

    </>
  )
}

export default Heading