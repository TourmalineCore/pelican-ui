import Image from 'next/image';
import iconVk from '../../../../public/images/social-media/vk.svg';
import iconTg from '../../../../public/images/social-media/tg.svg';
import iconOk from '../../../../public/images/social-media/ok.svg';
import iconDzen from '../../../../public/images/social-media/dzen.svg';

// TODO: get link from api
const ICONS = [
  {
    icon: iconVk,
    alt: `Иконка ВК`,
    link: `#`,
  },
  {
    icon: iconTg,
    alt: `Иконка телеграмма`,
    link: `#`,
  },
  {
    icon: iconOk,
    alt: `Иконка одноклассников`,
    link: `#`,
  },
  {
    icon: iconDzen,
    alt: `Иконка яндекс дзен`,
    link: `#`,
  },
];

export function SocialMedia({
  size,
}:{
  size: {
    width: number;
    height: number;
  }
}) {
  return (
    <>
      {ICONS.map(({
        icon,
        alt,
        link,
      }) => (
        <a
          href={link}
          key={alt}
          style={{
            width: size.width,
            height: size.height,
          }}
        >
          <Image
            width={size.width}
            height={size.height}
            src={icon}
            alt={alt}
          />
        </a>
      ))}
    </>
  );
}
