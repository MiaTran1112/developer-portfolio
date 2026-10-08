// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import SectionHeading from '../../helper/section-heading';
import ContactForm from './contact-form';

const formatPhone = (phone) => phone.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3');

const CONTACT_ROWS = [
  { Icon: MdAlternateEmail, label: personalData.email, href: `mailto:${personalData.email}` },
  { Icon: IoMdCall, label: formatPhone(personalData.phone), href: `tel:${personalData.phone}` },
  { Icon: CiLocationOn, label: personalData.address },
];

const SOCIALS = [
  { href: personalData.github, label: 'GitHub', Icon: IoLogoGithub },
  { href: personalData.linkedIn, label: 'LinkedIn', Icon: BiLogoLinkedin },
  { href: personalData.twitter, label: 'Twitter', Icon: FaXTwitter },
  { href: personalData.stackOverflow, label: 'Stack Overflow', Icon: FaStackOverflow },
  { href: personalData.facebook, label: 'Facebook', Icon: FaFacebook },
].filter(social => social.href);

function ContactSection() {
  return (
    <section id="contact" className="py-8 md:py-10">
      <SectionHeading index="05" eyebrow="Contact" title="Let’s connect" />

      <div className="grid gap-6 rounded-2xl border border-line bg-surface/90 p-5 shadow-[0_20px_50px_-30px_#d889aa] md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <div className="flex flex-col">
          <p className="max-w-md leading-relaxed text-body">
            {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {CONTACT_ROWS.map(({ Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3 text-sm md:text-base">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blush text-accent">
                  <Icon size={18} aria-hidden="true" />
                </span>
                {href ? (
                  <a href={href} className="break-all text-ink hover:text-accent hover:underline">{label}</a>
                ) : (
                  <span className="text-ink">{label}</span>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-2 lg:mt-auto lg:pt-6">
            {SOCIALS.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-canvas text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
              >
                <Icon size={20} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
