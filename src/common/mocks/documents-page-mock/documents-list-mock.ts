export type DocumentFileProps = {
  id: number,
  name: string,
  url: string,
  extension: string,
};

export type DocumentsListComponentProps = {
  id: number,
  date: string,
  showDate: boolean,
  title: string,
  subtitle?: string,
  description?: string,
  files: DocumentFileProps[],
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
    files: [
      {
        id: 1,
        name: `Протокол закупки №31907985526`,
        url: `/public/documents/Protocol.pdf`,
        extension: `.pdf`,
      },
    ],
    category: {
      id: 3,
    },
  },
  {
    id: 1,
    date: `07.07.2019`,
    showDate: true,
    title: `Договор №350474`,
    subtitle: `Договор на поставку продукции животноводства (мясо говядина) для нужд муниципального бюджетного 
    учреждения культуры «зоопарк»`,
    description: `Контракт заключен по результатам электронного аукциона в рамках 223-ФЗ.
    Извещение №31907985126 в электронной форме размещены на сайте по адресу в сети
    Интернет: www.zakupki.gov.ru и на электронной площадке tender.otc.ru процедура № 4442641 лот № 7816638.
    Протокол №U4442641-7816638-3 от 07.07.2019 г.`,
    files: [
      {
        id: 2,
        name: `Договор №350474`,
        url: `/public/documents/Protocol.pdf`,
        extension: `.pdf`,
      },
    ],
    category: {
      id: 3,
    },
  },
  {
    id: 2,
    date: `07.07.2019`,
    showDate: true,
    title: `Отчёт о выполнении муниципального задания за\u00A02022г.`,
    subtitle: `Отчёт о выполнении муниципального задания по предоставлению муниципальных услуг (выполнению работ) за 2022 год.`,
    files: [
      {
        id: 3,
        name: `Отчёт о выполнении муниципального задания за 2022г.`,
        url: `/public/documents/Protocol.pdf`,
        extension: `.pdf`,
      },
    ],
    category: {
      id: 3,
    },
  },
  {
    id: 3,
    date: `07.07.2019`,
    showDate: true,
    title: `Протоколы закупки №31907985526`,
    files: [
      {
        id: 4,
        name: `Протокол 1.pdf`,
        url: `/public/documents/Protocol.pdf`,
        extension: `.pdf`,
      },
      {
        id: 5,
        name: `Протокол закупки (копия).pdf`,
        url: `/public/documents/Protocol.pdf`,
        extension: `.pdf`,
      },
      {
        id: 6,
        name: `Скрин.pdf`,
        url: `/public/documents/Protocol.pdf`,
        extension: `.pdf`,
      },
    ],
    category: {
      id: 3,
    },
  },
];
