import lamaImage from '@/public/images/map/lama.png';
import { BlockTypes } from "../../../enum";
import { MapComponentProps } from "../../../types";

export const MOCK_MAP: MapComponentProps = {
  id: 6,
  __component: BlockTypes.HOME_MAP,
  title: `Челябинск,\nул. Труда 191 `,
  // eslint-disable-next-line @stylistic/max-len
  subtitle: `Мы находимся в центре Челябинска (<a className='map-address-card__link' href='https://yandex.ru/maps/-/CDxuFE7e' target='_blank' rel="noopener noreferrer" data-testid="map-address-link">остановка\u00A0«Зоопарк»</a>), до\u00A0нас\u00A0легко добраться как на транспорте, так\u00A0и\u00A0пешком.`,
  note: `<p>Единственный государственный\nзоопарк на Южном Урале</p>`,
  image: {
    url: lamaImage,
    alternativeText: ``,
  },
};
