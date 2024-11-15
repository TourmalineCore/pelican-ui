import { BlockTypes } from "../enum";
import { MapComponentProps } from "../types";
import lamaImage from '../../../public/images/map/lama.png';

export const MAP: MapComponentProps = {
  id: 6,
  __component: BlockTypes.MAP,
  title: `Челябинск,\nул. Труда 191 `,
  description: `Мы находимся в центре Челябинска (остановка «Зоопарк»), до нас легко добраться как на транспорте, так и пешком.`,
  note: `Единственный государственный\nзоопарк на Южном Урале`,
  image: {
    url: lamaImage,
    alt: `Изображение ламы`,
  },
};
