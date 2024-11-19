import { BlockTypes } from "../enum";
import { MapComponentProps } from "../types";
import lamaImage from '../../../public/images/map/lama.png';

export const MAP: MapComponentProps = {
  id: 6,
  __component: BlockTypes.MAP,
  title: `Челябинск,\nул. Труда 191 `,
  // eslint-disable-next-line @stylistic/max-len
  subtitle: `Мы находимся в центре Челябинска <a className='map-address-card__link text-link' href='https://yandex.ru/maps/-/CDxuFE7e' target='blank_'>(остановка\u00A0«Зоопарк»)</a>, до\u00A0нас\u00A0легко добраться как на транспорте, так\u00A0и\u00A0пешком.`,
  note: `Единственный государственный\nзоопарк на Южном Урале`,
  image: {
    url: lamaImage,
    alt: `Изображение ламы`,
  },
};
