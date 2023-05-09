import clsx from 'clsx';

import SideFooter from 'components/footer/SideFooter';
import GitHubIcon from 'components/Icons/GitHubIcon';
import LinkedInIcon from 'components/Icons/LinkedInIcon';
import MediumIcon from 'components/Icons/MediumIcon';

const SocialLinksFooter = () => (
  <SideFooter id="social-links" side="left">
    <ul className="hidden md:flex md:items-center md:gap-1">
      <li>
        <a
          className={clsx(
            'focus-indicator inline-block p-2 transition-transform duration-300',
            'hover:-translate-y-1 hover:text-yellow-500',
            'focus-visible:text-yellow-500',
          )}
          href="https://github.com/ClothierNamedJeremiah"
          target="_blank"
          rel="noreferrer"
          title="Jeremiah's GitHub Profile"
        >
          <GitHubIcon className="text-2xl text-inherit transition-all" />
        </a>
      </li>
      <li>
        <a
          className={clsx(
            'focus-indicator inline-block p-2 transition-transform duration-300',
            'hover:-translate-y-1 hover:text-yellow-500',
            'focus-visible:text-yellow-500',
          )}
          href="https://www.linkedin.com/in/jeremiah-clothier/"
          target="_blank"
          rel="noreferrer"
          title="Jeremiah's LinkedIn Profile"
        >
          <LinkedInIcon className="text-2xl text-inherit transition-all" />
        </a>
      </li>
      <li>
        <a
          className={clsx(
            'focus-indicator inline-block p-2 transition-transform duration-300',
            'hover:-translate-y-1 hover:text-yellow-500',
            'focus-visible:text-yellow-500',
          )}
          href="https://clothiernamedjeremiah.medium.com/"
          target="_blank"
          rel="noreferrer"
          title="Jeremiah's Personal Tech Blog"
        >
          <MediumIcon className="text-2xl text-inherit transition-all" />
        </a>
      </li>
    </ul>
  </SideFooter>
);

export default SocialLinksFooter;
