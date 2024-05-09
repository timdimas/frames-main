/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2GmyDAV6h3h
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { tokens } from "@/locales/tokens";
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="pt-10 pb-2 text-foreground bg-card dark:text-gray-200 border-t-secondary border-t-2">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-max">
                <div className="space-y-4">
                    <h4 className="text-lg font-medium">
                        {t(tokens.nav.connectWithUs)}
                    </h4>
                    <div className="flex items-center space-x-4">
                        <Link
                            className="text-2xl hover:text-primary"
                            href="https://www.instagram.com/capitalcompass_consulting/"
                            target="_blank"
                            referrerPolicy="no-referrer"
                        >
                            <InstagramLogoIcon className="h-5 w-5" />
                        </Link>
                        <Link
                            className="text-2xl hover:text-primary"
                            href="https://www.instagram.com/capitalcompass_consulting/"
                            target="_blank"
                            referrerPolicy="no-referrer"
                        >
                            <InstagramLogoIcon className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="text-lg font-medium">
                        {t(tokens.nav.contactUs)}
                    </h4>
                    <div className="space-y-2">
                        <Link
                            className="flex items-center space-x-2 transition-colors hover:text-primary"
                            href="tel:+302312316971"
                        >
                            <PhoneIcon className="h-5 w-5" />
                            <span>+30 2312 316971</span>
                        </Link>
                        <Link
                            className="flex items-center space-x-2 transition-colors hover:text-primary"
                            href="tel:+306987012565"
                        >
                            <DevicePhoneMobileIcon className="h-5 w-5" />
                            <span>+30 698 7012 565</span>
                        </Link>
                        <Link
                            className="flex items-center space-x-2 transition-colors hover:text-primary"
                            href="mailto:info@capitalcompass.gr"
                        >
                            <EnvelopeIcon className="h-5 w-5" />
                            <span>info@capitalcompass.gr</span>
                        </Link>
                        <Link
                            className="flex items-center space-x-2 transition-colors hover:text-primary"
                            href="https://maps.google.com/maps?ll=40.637858,22.936605&z=13&t=m&hl=en&gl=GR&mapclient=embed&q=Fragkon%2012%20Thessaloniki%20546%2026"
                            target="_blank"
                            referrerPolicy="no-referrer"
                        >
                            <MapPinIcon className="h-5 w-5" />
                            <span>{t(tokens.common.addressLocation)}</span>
                        </Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="text-lg font-medium">
                        {t(tokens.nav.ourLocation)}
                    </h4>
                    <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                        <iframe
                            className="md:h-full w-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12110.534140349313!2d22.93670338112944!3d40.63796309286925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839a73a2fee51%3A0x16647f44f8a27766!2sFragkon%2012%2C%20Thessaloniki%20546%2026!5e0!3m2!1sen!2sgr!4v1695631433259!5m2!1sen!2sgr"
                            width="600"
                            height="450"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
                {/* <div className="space-y-4">
                    <h4 className="text-lg font-medium">About Us</h4>
                    <p>
                        Acme Inc. is a leading provider of high-quality products
                        and services. We are committed to delivering exceptional
                        value to our customers.
                    </p>
                </div> */}
            </div>
            <div className="mt-4 border-t border-foreground/20 pt-2 text-center dark:border-gray-700">
                <p className="text-sm">
                    © 2024 Capital Compass. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
