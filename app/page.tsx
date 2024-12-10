import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className={styles.shape} />
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to shambaLink.</strong> Connecting farmers with markets,training,opportunities{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              shambaLink
            </a>
            , brought to you by Dorine Okowo.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8zNV9waG90b19vZl9oYXBweV9hZnJpY2FuX2FtZXJpY2FuX3dvbWFuX2hhcnZlc181NmU4MWU4YS1kOWY3LTQ5M2QtYWY5ZS1mN2Y0OTNhNmNlMjdfMS5qcGc.jpg"
            width={1000}
            height={760}
            priority
            sizes="(min-width: 768px) 100vw, 50vw"
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
