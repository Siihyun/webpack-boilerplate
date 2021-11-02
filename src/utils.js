import thumbnail from './images/cartoon_image.png';

const makeSentence = (name) => `안녕하세요. 저는 ${name}입니다.`;

const makeAvatar = (target, message) => {
  const newAvatar = document.createElement('div');
  newAvatar.classList.add('avatar');
  newAvatar.innerHTML =
    `<img class="thumbnailImg" src=${thumbnail}/>` + message;
  target.appendChild(newAvatar);
};

export { makeSentence, makeAvatar };
