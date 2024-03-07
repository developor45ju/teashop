import Header from './components/Header.jsx';
import logo from '/public/favicon.png';

function App() {
    const links = ['Home', 'Shop', 'About', 'Blog', 'Contact'];

    return (
        <Header logo={logo} links={links} />
    )
}

export default App
