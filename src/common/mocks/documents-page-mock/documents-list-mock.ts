export type DocumentsListComponentProps = {
  id: number,
  date: string,
  showDate: boolean,
  title: string,
  subtitle: string | null,
  description: string | null,
  files: string[],
  category: {
    id: number,
  }
};

export const DOCUMENTS_LIST: DocumentsListComponentProps[] = [
  {
    id: 0,
    date: `07.07.2019`,
    showDate: false,
    title: `Протокол закупки  №31907985526`,
    subtitle: null,
    description: null,
    files: [`file`],
    category: {
      id: 3,
    },
  },
  {
    id: 1,
    date: `07.07.2019`,
    showDate: false,
    title: `Договор №350474`,
    subtitle: `Договор на поставку продукции животноводства (мясо говядина) для нужд муниципального бюджетного 
    учреждения культуры «зоопарк»`,
    description: `Контракт заключен по результатам электронного аукциона в рамках 223-ФЗ.\nИзвещение №31907985126 
    в электронной форме размещены на сайте по адресу в сети Интернет: www.zakupki.gov.ru и на электронной площадке 
    tender.otc.ru процедура № 4442641 лот № 7816638.Протокол №U4442641-7816638-3 от 07.07.2019 г.`,
    files: [`file`],
    category: {
      id: 3,
    },
  },
  {
    id: 2,
    date: `07.07.2019`,
    showDate: false,
    title: `Отчёт о выполнении муниципального задания за 2022г.`,
    subtitle: `Отчёт о выполнении муниципального задания по предоставлению муниципальных услуг 
    (выполнению работ за 2022 год.`,
    description: null,
    files: [`file`],
    category: {
      id: 3,
    },
  },
  {
    id: 3,
    date: `07.07.2019`,
    showDate: false,
    title: `Протоколы закупки №31907985526`,
    subtitle: null,
    description: null,
    files: [
      `Протокол 1`,
      `Протокол закупки (копия)`,
      `Скрин`,
    ],
    category: {
      id: 3,
    },
  },
];
