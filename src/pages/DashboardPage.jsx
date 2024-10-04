import React from "react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlinePointOfSale } from "react-icons/md";
import { HiMiniDocumentDuplicate } from "react-icons/hi2";

const DashboardPage = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1  md:grid-cols-3 grid-rows-3 gap-5">
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Product Module"}
              icon={<MdProductionQuantityLimits className="size-12" />}
              url={"product"}
            />
          </div> 
          <div className="col-span-1">
            <ModuleBtn
              name={"Sale Module"}
              icon={<MdOutlinePointOfSale className="size-12" />}
              url={"/sale"}
            />
          </div>
          <div className="col-span-1">
            <ModuleBtn
              name={"Voucher Module"}
              icon={<HiMiniDocumentDuplicate  className="size-12" />}
              url={"/voucher"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
