import React from 'react'
import MediaQuery from 'react-responsive'

export default (props) => {
    return (
        <MediaQuery query="(max-width:920px)">
            {props.children}
        </MediaQuery>
  )
}
