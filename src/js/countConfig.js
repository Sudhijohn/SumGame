import mango from 'url:../img/svg/mango.svg';
import orange from 'url:../img/svg/orange.svg';
import robo from 'url:../img/svg/robo.svg';
import apple from 'url:../img/svg/apple.svg';
import cherries from 'url:../img/svg/cherries.svg';
import flower from 'url:../img/svg/flower.svg';
import grapes from 'url:../img/svg/grapes.svg';
import round from 'url:../img/svg/round.svg';
import santa from 'url:../img/svg/santa.svg';
import { generateNumber } from './helper';

const imageCountConfig = [
  { img: mango },
  { img: orange },
  { img: robo },
  { img: apple },
  { img: cherries },
  { img: flower },
  { img: grapes },
  { img: round },
  { img: santa },
];

export const getImagePath = () => {
  const length = imageCountConfig.length;
  const index = generateNumber(length);
  return imageCountConfig[index].img;
};
