export type DocumentFileProps = {
  id: number,
  name: string,
  url: string,
  ext: string,
};

export type DocumentsListComponentProps = {
  id: number,
  date: string,
  showDate: boolean,
  title: string,
  subtitle: string | null,
  description: string | null,
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
    subtitle: null,
    description: null,
    files: [
      {
        id: 1,
        name: `test.pdf`,
        url: `/uploads/Sammari_vstrechi_29_10_236ddfc2bf.pdf`,
        ext: `.pdf`,
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
    Извещение №31907985126 в электронной форме размещены на сайте по адресу в сети\nИнтернет: www.zakupki.gov.ru и на электронной площадке 
    tender.otc.ru процедура № 4442641 лот № 7816638.Протокол №U4442641-7816638-3 от 07.07.2019 г.`,
    files: [
      {
        id: 2,
        name: `test.pdf`,
        url: `/uploads/Sammari_vstrechi_29_10_236ddfc2bf.pdf`,
        ext: `.pdf`,
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
    title: `Отчёт о выполнении муниципального задания за 2022г.`,
    subtitle: `Отчёт о выполнении муниципального задания по предоставлению муниципальных услуг 
    (выполнению работ за 2022 год.`,
    description: null,
    files: [
      {
        id: 3,
        name: `test.pdf`,
        url: `/uploads/Sammari_vstrechi_29_10_236ddfc2bf.pdf`,
        ext: `.pdf`,
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
    subtitle: null,
    description: null,
    files: [
      {
        id: 4,
        name: `Протокол 1.pdf`,
        url: `/uploads/Sammari_vstrechi_29_10_236ddfc2bf.pdf`,
        ext: `.pdf`,
      },
      {
        id: 5,
        name: `Протокол закупки (копия).pdf`,
        url: `/uploads/Sammari_vstrechi_29_10_236ddfc2bf.pdf`,
        ext: `.pdf`,
      },
      {
        id: 6,
        name: `Скрин.pdf`,
        url: `/uploads/Sammari_vstrechi_29_10_236ddfc2bf.pdf`,
        ext: `.pdf`,
      },
    ],
    category: {
      id: 3,
    },
  },
];
