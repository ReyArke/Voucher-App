import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import VoucherList from '../components/VoucherList'
import Container from '../components/Container'

const VoucherPage = () => {
  return (
    <div>
      <Container>
      <Breadcrumbs currentPageTitle={"Voucher Module"} />
      <VoucherList/>
      </Container>
      
    </div>
  )
}

export default VoucherPage
