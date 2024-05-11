import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { tokens } from "@/locales/tokens";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

type MobileProps = {
    handleToggleTheme: () => void;
    currentLanguage: "en" | "el";
    handleChangeLanguage: (lang: "en" | "el") => void;
    theme: string | undefined;
};

const flags = { en: "/flags/flag-en.svg", el: "/flags/flag-el.svg" };

export function MobileNav({ handleToggleTheme, currentLanguage, handleChangeLanguage, theme }: MobileProps): JSX.Element {
    const [open, setOpen] = React.useState(false);
    const { t } = useTranslation();
    const navigation = [
        { name: t(tokens.nav.aboutUs), href: "/#about-us" },
        { name: t(tokens.nav.programs), href: "/#programs" },
        { name: t(tokens.nav.contact), href: "/#about-us" },
    ];

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                        <path d="M3 5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M3 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M3 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
                <MobileLink href="/" className="flex items-center w-full" onOpenChange={setOpen}>
                    <span className="sr-only">Capital Compass</span>
                    <Image src={theme === "light" ? "/logo-letters-white-bg.svg" : "/logo-letters-dark.svg"} alt="Capital Compass Logo" width={200} height={20} />
                </MobileLink>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
                    <div className="flex flex-col space-y-3">
                        {navigation?.map(
                            (item) =>
                                item.href && (
                                    <MobileLink key={item.href} href={item.href} onOpenChange={setOpen} className="text-md font-semibold leading-6 text-gray-900 dark:text-white">
                                        {item.name}
                                    </MobileLink>
                                )
                        )}
                    </div>
                    <hr />
                    <div className="md:hidden flex flex-1 justify-end gap-1 items-center">
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
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
}

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
    const router = useRouter();
    return (
        <Link
            href={href}
            onClick={() => {
                // router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    );
}
