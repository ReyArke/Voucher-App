import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Container from '../components/Container'
import VoucherInformation from '../components/VoucherInformation'
import SaleFrom from '../components/SaleFrom'

const SalePage = () => {
  return (
    <section>
     <Container>
      <Breadcrumbs currentPageTitle={"Sale Module"}/> 
      <VoucherInformation/>
      
     </Container>
    </section>
  )
}

export default SalePage
