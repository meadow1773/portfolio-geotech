import './App.scss'
import Home from './pages/Home/home'

export default function App() {
    /**
     * Título da página.
     */
    const title = 'VHOP | Portfólio'

    return (
        <Home titulo={title}></Home>
    )
}
