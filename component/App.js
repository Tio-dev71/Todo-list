import html from '../core.js';
import { connect } from '../store.js';
import Header from './Header.js';
import Addbox from './Addbox.js';
import List from './List.js';

const connector = connect();

function App({ todos }) {
    return html`
        <div class = "todo">
            ${Header()}
            ${Addbox()}
            ${todos.length > 0 && List()}
        </div>
    `
}

export default connector(App)