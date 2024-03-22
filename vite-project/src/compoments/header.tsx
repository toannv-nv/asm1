import React from 'react'

type Props = {
  "title":string
}

const Header = (props: Props) => {
  return (
    <>
    {props.title}
    <div>day la header</div>
    </>
  )
}

export default Header