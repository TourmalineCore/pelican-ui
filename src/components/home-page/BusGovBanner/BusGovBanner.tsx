import Image from 'next/image';
import busGovQr from "@/public/images/footer/bus-gov-qr.jpg";

export function BusGovBanner() {
  return (

    <div className="bus-gov-banner">
      <div className="bus-gov-banner__inner container">
        <ul className="bus-gov-banner__cards">
          <li className="bus-gov-banner__card">
            <p className="bus-gov-banner__description">
              Пройдите
              <a
                className="text-link bus-gov-banner__link"
                href="https://bus.gov.ru/qrcode/rate/438089?agencyId=33122"
                target="_blank"
                rel="noopener noreferrer"
              >
                опрос о качестве
              </a>
              оказания услуг в нашем зоопарке,
              чтобы помочь нам понять, что сделать лучше,
              а&nbsp;что&nbsp;уже&nbsp;отлично.
            </p>
          </li>
          <li className="bus-gov-banner__card">
            <span className="bus-gov-banner__image">
              <Image
                src={busGovQr}
                fill
                alt=""
              />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
