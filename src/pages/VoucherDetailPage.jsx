import React from "react";
import Container from "../components/Container";
import Breadcrumbs from "../components/Breadcrumbs";
import VoucherCard from "../components/VoucherCard";

const VoucherDetailPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumbs
          currentPageTitle={"Voucher Detail"}
          links={[{ title: "Voucher Module", path: "/voucher" }]}
        />
        <VoucherCard/>
      </Container>
    </section>
  );
};

export default VoucherDetailPage;
