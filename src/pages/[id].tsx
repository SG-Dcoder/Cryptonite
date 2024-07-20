import React from 'react'
import { useRouter } from 'next/router'
import Navbar2 from '@/components/HomePageComponents/Navbar2';
import CoinDetailHero from '@/components/CoinDetailPageComponents/CoinDetailHero';
import Footer from '@/components/HomePageComponents/Footer';
import CoinDetailChart from '@/components/CoinDetailPageComponents/CoinDetailChart';

const Coindetail = () => {

  const router = useRouter();
  const coinName = router.query.id;

  return (
    <div>
      <div className="h-28">
        <Navbar2 />
      </div>

      <CoinDetailHero cryptoName={coinName} />

      <br />
      <br />
      <br />
      <br />

      <div>
      </div>

      <br />
      <br />
      <br />

      <Footer />

    </div>
  )
}

export default Coindetail


   