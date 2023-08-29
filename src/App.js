import styled from 'styled-components';
import TodoList from './pages/TodoList';

const Layout = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    min-width: 800px;
`;

function App() {
    return <TodoList />;
}

export default App;
