import React from "react";
import Container from "../components/Container";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumbs currentPageTitle={"Product Module"}  />
        <ProductList />
      </Container>
    </section>
  );
};

export default ProductPage;
