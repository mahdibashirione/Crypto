import Crypter from "../components/Crypter";
import CrypterArticles from "../components/CrypterArticles";
import CrypterMarkets from "../components/CrypterMarkets";
import ExchangeCalculator from "../components/ExchangeCalculator";
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
      <ExchangeCalculator />
      <Crypter />
      <CrypterArticles />
    </>
  );
};

export default HomePage;
