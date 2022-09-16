import React from 'react'

const SourceLink = (props) => {
  const { fileName, ...otherProps } = props

  return (
    <a
      href={`https://ice01.kshost.com.br:8000/live`}
      className='source-link'
      {...otherProps}
    >
      Source
    </a>
  )
}

export default SourceLink