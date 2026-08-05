import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { Footer } from '../footer'

export function Layout() {
    return (
        <div className="flex flex-col bg-white">
            <Header />

            <main className='flex-1 pt-22'>
                <Outlet />
            </main>
            
            <Footer />
        </div>
    )
}
