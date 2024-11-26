import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import MervelService from './services/MervelService';
import './style/style.scss';

const marvelService = new MervelService();
marvelService.getAllCharacters().then((res) => res.data.results.forEach((item) => console.log(item.name)));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
