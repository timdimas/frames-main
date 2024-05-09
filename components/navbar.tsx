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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const flags = { en: "/flags/flag-en.svg", el: "/flags/flag-el.svg" };

type Language = "en" | "el";
export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const settings = useSettings();
    const { toast } = useToast();
    const [currentLanguage, setCurrentLanguage] = useState<Language>(
        settings.language
    );

    const navigation = [
        { name: t(tokens.nav.aboutUs), href: "/#about-us" },
        { name: t(tokens.nav.programs), href: "/#programs" },
        { name: t(tokens.nav.contact), href: "/#about-us" },
    ];

    const handleToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        document.documentElement.classList.remove(
            theme === "light" ? "light" : "dark"
        );
        document.documentElement.classList.add(
            theme === "light" ? "dark" : "light"
        );
        toast({
            title: t(tokens.common.themeChanged),
            action: (
                <ToastAction altText={t(tokens.common.close)}>
                    {t(tokens.common.close)}
                </ToastAction>
            ),
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
            action: (
                <ToastAction altText={t(tokens.common.close)}>
                    {" "}
                    {t(tokens.common.close)}
                </ToastAction>
            ),
            variant: "default",
        });
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-base-200/50">
            <nav
                className="flex items-center justify-between p-3 lg:px-8 h-16"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image
                            src={"/logo-letters.webp"}
                            alt="Logo"
                            width={150}
                            height={100}
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-1 items-center">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    onClick={handleToggleTheme}
                                    variant="ghost"
                                    size="icon"
                                >
                                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">
                                        Toggle theme
                                    </span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-sm font-semibold">
                                    {t(tokens.common.changeTheme)}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger className="cursor-pointer" asChild>
                            <Button variant="ghost" size="icon">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Image
                                            src={flags[currentLanguage]}
                                            alt="Language"
                                            className="w-6 h-6"
                                            width={24}
                                            height={24}
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="text-sm font-semibold">
                                            {t(tokens.common.changeLanguage)}
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-42 mr-6">
                            <DropdownMenuItem
                                onClick={() => handleChangeLanguage("en")}
                                className="flex items-center gap-2"
                            >
                                <Image
                                    src={flags["en"]}
                                    alt="Language"
                                    className="w-6 h-6"
                                    width={24}
                                    height={24}
                                />
                                <p className="font-semibold">English</p>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => handleChangeLanguage("el")}
                                className="flex items-center gap-2"
                            >
                                <Image
                                    src={flags["el"]}
                                    alt="Language"
                                    className="w-6 h-6"
                                    width={24}
                                    height={24}
                                />
                                <p className="font-semibold">Ελληνικά</p>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
