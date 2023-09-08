import CrypterMarkets from "../components/CrypterMarkets";
import Header from "../components/Header";
import Landing from "../components/Landing";
import OnlinePrices from "../components/OnlinePrices";
import WhyCrypter from "../components/WhyCrypter";

const HomePage = () => {
  return (
    <>
      <Landing />
      <CrypterMarkets />
      <OnlinePrices />
      <WhyCrypter />
    </>
  );
};

export default HomePage;
