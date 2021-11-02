import { makeSentence, makeAvatar } from './utils';
import './style.css';

const result = makeSentence('seeh_h');
const root = document.querySelector('#root');

makeAvatar(root, result);
