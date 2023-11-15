import Corp from '@/components/Corp'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="mocha flex flex-col min-h-screen bg-surface0">
      
      <main className="flex-grow">
        <Header/>
        <Corp />
      </main>
      <Footer />
    </div>
  )
}