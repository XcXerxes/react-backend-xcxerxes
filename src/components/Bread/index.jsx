import React from 'react'
import {Breadcrumb} from 'antd'
import {Link, withRouter} from 'react-router-dom'

const Bread = withRouter((props) => {
  const {breadcrumbNameMap} = props
  const breadcrumbItmes = breadcrumbNameMap.map((item, index) => {
    return (
      <Breadcrumb.Item key={index}>
        <Link to={item.url}>
          {item.name}
        </Link>
      </Breadcrumb.Item>
    )
  })

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbItmes}
    </Breadcrumb>
  )
})

export default Bread
