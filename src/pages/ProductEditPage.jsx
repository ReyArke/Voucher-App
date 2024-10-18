import React from 'react'
import Breadcrumbs from "../components/Breadcrumbs";
import Container from "../components/Container";

import ProductEditCard from '../components/ProductEditCard';

const ProductEditPage = () => {
    return (
        <section>
          <Container>
            <Breadcrumbs currentPageTitle={"Create Product"}
            links={[{title:"Product Module",path:"/product"}]} />
            <ProductEditCard/>
          </Container>
        </section>
      );
}

export default ProductEditPage
