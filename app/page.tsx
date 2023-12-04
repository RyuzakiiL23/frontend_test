'use client'
import Corp from '@/components/Corp'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LHeader from '@/components/LHeader'
import Lcorp from '@/components/Lcorp'
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

export default function Home() {
  const cookies = new Cookies();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = cookies.get('authToken');
    if (token) {
        setAuthenticated(true);
    }
  }, []);
  return (
    <div className="mocha flex flex-col min-h-screen bg-surface0">
      {authenticated ? <LHeader /> : <Header/>}
      <main className="flex-grow">
        {authenticated ? <Lcorp /> : <Corp />}
      </main>
      <Footer />
    </div>
  )
}