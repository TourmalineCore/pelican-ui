import { BlockTypes } from "../enum";
import { MapComponentProps } from "../types";
import lamaImage from '../../../public/images/map/lama.png';

export const MAP: MapComponentProps = {
  id: 6,
  __component: BlockTypes.MAP,
  title: `Челябинск,\nул. Труда 191 `,
  subtitle: `Мы находимся в центре Челябинска (остановка «Зоопарк»), до\u00A0нас\u00A0легко добраться как на транспорте, так\u00A0и\u00A0пешком.`,
  note: `Единственный государственный\nзоопарк на Южном Урале`,
  image: {
    url: lamaImage,
    alt: `Изображение ламы`,
  },
};
