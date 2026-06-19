import { Logo } from "./Logo";
import { business, nav, services, serviceAreas } from "@/lib/site";
import {
  PhoneIcon,
  MailIcon,
  ClockIcon,
  MapPinIcon,
  InstagramIcon,
  FacebookIcon,
  GoogleIcon,
} from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-night text-white/70">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {business.tagline} Premium, eco-friendly home and office cleaning across {business.area}.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: InstagramIcon, href: business.social.instagram, label: "Instagram" },
                { Icon: FacebookIcon, href: business.social.facebook, label: "Facebook" },
                { Icon: GoogleIcon, href: business.social.google, label: "Google reviews" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand-400 hover:bg-white/5 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="font-display text-base font-semibold text-white">Services</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <a href="#services" className="transition-colors hover:text-white">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-base font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="transition-colors hover:text-white">
                      {n.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#quote" className="transition-colors hover:text-white">
                    Free quote
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-display text-base font-semibold text-white">Get in touch</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href={business.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-white">
                    <PhoneIcon className="h-4 w-4 text-brand-400" />
                    {business.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={business.emailHref} className="flex items-center gap-2.5 transition-colors hover:text-white">
                    <MailIcon className="h-4 w-4 text-brand-400" />
                    {business.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <ClockIcon className="h-4 w-4 text-brand-400" />
                  {business.hours}
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {business.area}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.14em] text-white/40">Proudly serving</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/55">
            {serviceAreas.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>
            © {year} {business.legalName}. All rights reserved.
          </p>
          <p className="flex gap-5">
            <span>Insured &amp; bonded</span>
            <span>Privacy</span>
            <span>Terms</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
