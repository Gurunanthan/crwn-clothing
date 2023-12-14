import Directory from './Components/directory/directory.Component';
import categoryData from './Assets/Categories'
const App = () => {

  return <Directory categories={categoryData} />;
};

export default App;