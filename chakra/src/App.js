import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Select12 } from './components/Select12';
// import {Select} from './components/Select'

function App() {
  return (
    <div className="App">
     <Button colorScheme='blue'>Button</Button>
     <div>
     Basic usage of Checkbox.
     <hr>
     </hr>
     <Checkbox defaultChecked>Checkbox</Checkbox>
     <div spacing={5} direction='row'>
  <Checkbox colorScheme='red' defaultChecked>
    Checkbox
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    Checkbox
  </Checkbox>
 <Select12/>
 
</div>
     </div>
    </div>
  );
}

export default App;
