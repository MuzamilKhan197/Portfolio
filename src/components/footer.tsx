import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { developer, navigation } from '@/data/portfolio';
import { SocialLinks } from '@/components/social-links';

export function Footer({ topHref = '#main' }: { topHref?: string }) {
  const initials = developer.name.split(/\s+/).map(part => part[0]).slice(0, 2).join('').toLowerCase();
  return <footer className="site-footer container">
    <div className="footer-top">
      <Link className="wordmark" href="/#home" aria-label={`${developer.name}, home`}><span className="monogram" aria-hidden="true">{initials[0]}<span>{initials[1]}</span><i /></span><span>{developer.name}<span className="wordmark-dot">.</span></span></Link>
      <span className="footer-role">{developer.shortRole}</span>
      <a href={topHref} className="back-to-top">Back to top<ArrowUp size={15} /></a>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} {developer.name}. Built with intention.</span>
      <nav aria-label="Footer navigation">{navigation.filter(item => item.section !== 'home').map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <SocialLinks />
    </div>
  </footer>;
}
