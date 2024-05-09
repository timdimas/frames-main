import { Button } from "@/components/ui/button";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Hero() {
    return (
        <div
            className="hero h-[80vh]"
            style={{
                backgroundImage: "url('/main-img.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="w-full h-full bg-black/60">
                <div className="text-center text-neutral-content flex justify-center items-center h-full">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">
                            Hello there
                        </h1>
                        <p className="mb-5 text-white">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <Link href="#about-us">
                            <Button
                                className="rounded-full animate-bounce"
                                variant="outline"
                            >
                                <CaretDownIcon className="h-8 w-8" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
