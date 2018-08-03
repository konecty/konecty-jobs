import React from 'react'
import { IconResponsive, Card, Col } from './../styles/styles'

export default (props) => {
  return (
    <Card>
      <IconResponsive src={props.img} alt="img"></IconResponsive>
      <Col>
        {props.children}
      </Col>
    </Card>
  )
}
