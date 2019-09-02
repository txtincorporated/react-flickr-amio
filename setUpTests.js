import { React } from 'react'; 
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

window.URL.createObjectURL = () => {};

configure({ adapter: new Adapter() });