import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Container from "../components/Container";
import ProductCreateCard from "../components/ProductCreateCard";


const ProductCreatePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumbs currentPageTitle={"Create Product"}
        links={[{title:"Product Module",path:"/product"}]} />
        <ProductCreateCard/>
      </Container>
    </section>
  );
};

export default ProductCreatePage;
