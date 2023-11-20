import Corp from '@/components/Corp'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LHeader from '@/components/LHeader'

export default function Home() {
  return (
    <div className="mocha flex flex-col min-h-screen bg-surface0">
      
      <main className="flex-grow">
        <LHeader/>
        <Corp />
      </main>
      <Footer />
    </div>
  )
}