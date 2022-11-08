import { Avatar } from "@mui/material";
import { Transition } from "../../../components/Transition";
import { UserDropdown } from "../../../components/UserDropdown";
import { ContractHireP } from "../../layouts/ContractHireP";
import { Footer } from "../../layouts/Footer";
import { Header } from "../../layouts/Header";

export const HiredDetails = () => {
  return (
    <>
      <Header>
        <UserDropdown>
          <Avatar
            src={"https://cdn-icons-png.flaticon.com/512/219/219969.png"}
          />
        </UserDropdown>
      </Header>
      <Transition>
        <ContractHireP />
      </Transition>
      <Footer></Footer>
    </>
  );
};
