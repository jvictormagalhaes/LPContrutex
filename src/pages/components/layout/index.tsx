import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { Footer } from '../footer'
import ScrollToHashElement from '../../../App'

export function Layout() {
    return (
        <div className="flex flex-col bg-white">
            <ScrollToHashElement />
            <Header />

            <main className='flex-1 pt-22'>
                <Outlet />
            </main>
            
            <Footer />
        </div>
    )
}
