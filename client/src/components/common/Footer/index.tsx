import Link from 'next/link';

// clsx
import clsx from 'clsx';

// material ui icons
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
  return (
    <footer className={clsx('py-16')}>
      <ul className={clsx('i-flex-center')}>
        <li>
          <Link href='https://github.com/igdev116'>
            <a target='_blank'>
              <GitHubIcon
                className={clsx(
                  'text-gray-icon',
                  '!transition ease-out',
                  'hover:text-gray-darkest'
                )}
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://www.linkedin.com/in/hu%E1%BB%B3nh-minh-h%C6%B0ng-08ab9a1ba/'>
            <a target='_blank'>
              <LinkedInIcon
                className={clsx(
                  'ml-4 !text-2xl',
                  'text-gray-icon',
                  '!transition ease-out',
                  'hover:text-gray-darkest'
                )}
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://www.facebook.com/hung1162/'>
            <a target='_blank'>
              <FacebookIcon
                className={clsx(
                  'ml-4 !text-2xl',
                  'text-gray-icon',
                  '!transition ease-out',
                  'hover:text-gray-darkest'
                )}
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://www.youtube.com/channel/UCtMA-IpVPoFIg1Psf5x1-fQ'>
            <a target='_blank'>
              <YouTubeIcon
                className={clsx(
                  'ml-4 !text-2xl',
                  'text-gray-icon',
                  '!transition ease-out',
                  'hover:text-gray-darkest'
                )}
              />
            </a>
          </Link>
        </li>
      </ul>
      <div className={clsx('text-center mt-4', 'text-gray-icon')}>
        Facebook © 2021
      </div>
    </footer>
  );
}

export default Footer;
