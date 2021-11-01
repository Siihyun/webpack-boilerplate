import makeSentence from './utils';
import './style.css';
import thumbnail from './images/cartoon_image.png';

const result = makeSentence('seeh_h');
const root = document.querySelector('#root');

const makeAvatar = () => {
  const newAvatar = document.createElement('div');
  newAvatar.classList.add('avatar');
  newAvatar.innerHTML = `<img class="thumbnailImg" src=${thumbnail}/>` + result;
  root.appendChild(newAvatar);
};

makeAvatar();
