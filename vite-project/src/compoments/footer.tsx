import React from 'react'

type Props = {
  "title":string
}

const Footer = (props: Props) => {
  return (
    <>
    {props.title}
    <div>day la footer</div>
    </>
  )
}

export default Footer