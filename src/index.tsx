import { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Gopher from '../src/asset/Gopher.jpeg';

const Container = styled.div`
	width: 100vw;
    height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Image = styled.div`
	width: 200px;
	height: 200px;
	background-image: url(${Gopher});
	background-position: center;
	background-size: cover;
`;

const App: FC = () => {
	return (
		<Container>
			<h1>Hello React 17</h1>
			<Image />
		</Container>
	);
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);