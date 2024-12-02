import React from 'react'
import CountdownTimer from '../components/CountdownTimer'
import LogoHeader from '../components/LogoHeader'
// import Footer from '../components/footer';

const LandingPage: React.FC = () => {
  const targetDate = new Date('2025-01-08T23:59:59')
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white bg-black">
      <LogoHeader />
      <CountdownTimer targetDate={targetDate} />
      {/* <Footer /> */}
    </div>
  )
}

export default LandingPage
