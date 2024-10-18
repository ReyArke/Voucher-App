import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import VoucherList from '../components/VoucherList'
import Container from '../components/Container'
import SaleFrom from '../components/SaleFrom'

const VoucherPage = () => {
  return (
    <div>
      <Container>
      <Breadcrumbs currentPageTitle={"Voucher Module"} />
      <VoucherList/>
      <SaleFrom/>
      </Container>
      
    </div>
  )
}

export default VoucherPage
