import CrypterMarkets from "../components/CrypterMarkets";
import Header from "../components/Header";
import Landing from "../components/Landing";
import OnlinePrices from "../components/OnlinePrices";

const HomePage = () => {
  return (
    <>
      <Landing />
      <CrypterMarkets />
      <OnlinePrices />
    </>
  );
};

export default HomePage;
