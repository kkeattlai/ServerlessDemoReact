import styles from "./App.module.css";

import Home from "./pages/Home";

const App = () => {
	return (
		<div className={ styles.container }>
			<Home />
		</div>
	);
}

export default App;
