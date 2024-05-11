import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { tokens } from "@/locales/tokens";
import { useSettings } from "@/hooks/use-settings";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";

const flags = { en: "/flags/flag-en.svg", el: "/flags/flag-el.svg" };

type Language = "en" | "el";
export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const settings = useSettings();
    const { toast } = useToast();
    const [currentLanguage, setCurrentLanguage] = useState<Language>(settings.language);

    const navigation = [
        { name: t(tokens.nav.aboutUs), href: "/#about-us" },
        { name: t(tokens.nav.programs), href: "/#programs" },
        { name: t(tokens.nav.contact), href: "/#about-us" },
    ];

    const handleToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        document.documentElement.classList.remove(theme === "light" ? "light" : "dark");
        document.documentElement.classList.add(theme === "light" ? "dark" : "light");
        toast({
            title: t(tokens.common.themeChanged),
            action: <ToastAction altText={t(tokens.common.close)}>{t(tokens.common.close)}</ToastAction>,
        });
    };

    useEffect(() => {
        i18n.changeLanguage(settings.language);
        setTheme("light");
    }, []);

    const handleChangeLanguage = (lang: Language) => {
        setCurrentLanguage(lang);
        i18n.changeLanguage(lang);
        toast({
            title: t(tokens.common.languageChanged),
            action: <ToastAction altText={t(tokens.common.close)}> {t(tokens.common.close)}</ToastAction>,
            variant: "default",
        });
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-base-200/50">
            <nav className="flex items-center justify-between p-3 lg:px-8 h-16" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Capital Compass</span>
                        {theme === "light" ? (
                            <Image src={"/logo-letters-white-bg.svg"} alt="Capital Compass Logo" width={150} height={100} />
                        ) : (
                            <Image src={"/logo-letters-dark.svg"} alt="Capital Compass Logo" width={150} height={100} />
                        )}
                    </Link>
                </div>
                <MobileNav handleToggleTheme={handleToggleTheme} currentLanguage={currentLanguage} handleChangeLanguage={handleChangeLanguage} theme={theme} />
                <div className="hidden md:flex md:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden md:flex md:flex-1 md:justify-end gap-1 items-center">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={handleToggleTheme} variant="ghost" size="icon">
                                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-sm font-semibold">{t(tokens.common.changeTheme)}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger className="cursor-pointer" asChild>
                            <Button variant="ghost" size="icon">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Image src={flags[currentLanguage]} alt="Language" className="w-6 h-6" width={24} height={24} />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="text-sm font-semibold">{t(tokens.common.changeLanguage)}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-42 mr-6">
                            <DropdownMenuItem onClick={() => handleChangeLanguage("en")} className="flex items-center gap-2">
                                <Image src={flags["en"]} alt="Language" className="w-6 h-6" width={24} height={24} />
                                <p className="font-semibold">English</p>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleChangeLanguage("el")} className="flex items-center gap-2">
                                <Image src={flags["el"]} alt="Language" className="w-6 h-6" width={24} height={24} />
                                <p className="font-semibold">Ελληνικά</p>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </header>
    );
}
