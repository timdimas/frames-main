import React, { FC } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";

type ProgramProps = {
    title: string | undefined;
    description?: string;
    richText?: string;
    coverImage?: string;
};

export const ProgramTemplate: FC<ProgramProps> = ({ title, description, richText, coverImage }) => {
    return (
        <div>
            <div
                className="h-[25vh] rounded-tl-[2em] rounded-br-[2em] flex flex-col gap-3 justify-center items-center"
                style={{
                    backgroundImage: "url('/programs/blurry_background.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <h1 className="text-4xl font-bold text-primary">{title}</h1>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link aria-label="Go To Home" className="text-primary hover:underline" href="/">
                                Αρχική
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-black">{title}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div>
                <p>
                    Ο νέος Αναπτυξιακός Νόμος αναμένεται να τεθεί σε ισχύ από τον Ιανουάριο του 2022. Με τον νέο χάρτη των περιφερειακών ενισχύσεων, προβλέπονται προσαυξημένα
                    ποσοστά ενισχύσεων στο σύνολο σχεδόν των περιφερειών. Το μέγιστο ποσό της επιδότησης θα φτάνει τα 10 εκατ. ευρώ ανά επένδυση.
                </p>
                <h2 className="text-3xl font-bold">Ποιοι είναι οι κύριοι άξονες του νέου Αναπτυξιακού Νόμου;</h2>
                <p>Στον Νέο Αναπτυξιακό μπορούν να συμμετέχουν οι εξής μορφές επιχειρήσεων:</p>
                <ol className="list-disc flex flex-col gap-3 ml-5">
                    <li>Εμπορική εταιρία (ΟΕ, ΕΕ, ΑΕ, ΙΚΕ)</li>
                    <li>Συνεταιρισμοί, Κοιν.Σ.Επ, Αγροτικοί Συνεταιρισμοί (ΑΣ), Ομάδες Παραγωγών (ΟΠ), Αστικοί Συνεταιρισμοί, Αγροτικές Εταιρικές Συμπράξεις (ΑΕΣ)</li>
                    <li>Υπό ίδρυση ή υπό συγχώνευση εταιρίες (σύσταση μετά την έγκριση του επενδυτικού σχεδίου)</li>
                    <li>Κοινοπραξίες με προϋπόθεση καταχώρησης στο ΓΕΜΗ</li>
                    <li>Δημόσιες και δημοτικές επιχειρήσεις και θυγατρικές τους υπό προϋποθέσεις</li>
                </ol>
            </div>
        </div>
    );
};
