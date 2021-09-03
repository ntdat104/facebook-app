import Image from 'next/image';

// clsx
import clsx from 'clsx';

import styles from './styles.module.scss';

interface IProps {
  src: any;
  alt: string;
  subClass?: string;
}

function NextImage({ src, alt, subClass }: IProps) {
  return (
    <div className={styles.container}>
      <Image
        src={src}
        layout='fill'
        alt={alt}
        className={clsx(styles.img, subClass)}
      />
    </div>
  );
}

export default NextImage;
