import Card, { CardBody } from './components/Card';
import List from './components/List';

function App() {
  const list = ['JavaScript','Ruby','PHP','Python'];
  const handleSelect = (element: string) => {
    console.log('Printing', element);
  };
  return(
    <Card> 
      <CardBody 
        title='Hello world' 
        text='This is the text'
        />
        <List data={list} onSelect={ handleSelect } />
    </Card>
  );
}

export default App;