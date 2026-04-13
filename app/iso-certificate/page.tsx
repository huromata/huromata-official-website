import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const certificateSrc = "/certificates/iso-certificate.jpg";
const certificateFile = path.join(
  process.cwd(),
  "public",
  "certificates",
  "iso-certificate.jpg"
);

const certificateDetails = [
  {
    label: "Standard",
    value: "ISO 9001:2015"
  },
  {
    label: "Company",
    value: "Huromata"
  },
  {
    label: "Place",
    value: "Coimbatore, Tamil Nadu"
  },
  {
    label: "Registration",
    value: "2026"
  }
];

export const metadata: Metadata = {
  title: "ISO 9001:2015 Certificate | Huromata",
  description:
    "View Huromata's ISO 9001:2015 certificate and company certification details."
};

export default function IsoCertificatePage() {
  const hasCertificateImage = fs.existsSync(certificateFile);

  return (
    <>
      <section className="border-b border-zinc-200 bg-zinc-50 py-20 sm:py-24">
        <Container>
          <AnimateOnScroll>
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                ISO Certificate
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tighter text-black sm:text-5xl">
                Huromata ISO 9001:2015 certificate
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-500">
                This page shows the ISO certificate issued for Huromata. You can view the
                certificate image below and open it separately if you need the full document.
              </p>

              <div className="mt-10 grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 sm:grid-cols-2 lg:grid-cols-4">
                {certificateDetails.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-black">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <AnimateOnScroll>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)] lg:items-start">
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
                {hasCertificateImage ? (
                  <div className="rounded-xl border border-zinc-200 bg-white p-3 sm:p-4">
                    <Image
                      src={certificateSrc}
                      alt="Huromata ISO 9001:2015 certificate"
                      width={1600}
                      height={2200}
                      className="h-auto w-full rounded-lg object-contain"
                      priority
                    />
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-8 py-20 text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-zinc-400">
                      Certificate Image
                    </p>
                    <p className="mt-4 text-2xl font-bold tracking-tight text-black">
                      ISO certificate image will appear here
                    </p>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
                      Add the certificate image to{" "}
                      <span className="font-semibold text-black">
                        public/certificates/iso-certificate.jpg
                      </span>{" "}
                      and this page will display it automatically.
                    </p>
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Certificate Information
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-black">
                  View and verify
                </h2>
                <p className="mt-5 text-base leading-relaxed text-zinc-600">
                  The certificate image on this page includes the company name, address,
                  scope, and registration details shown on the document.
                </p>
                <p className="mt-4 text-base leading-relaxed text-zinc-600">
                  Use the button below if you want to open the image separately and review
                  it more clearly.
                </p>
                {hasCertificateImage ? (
                  <Link
                    href={certificateSrc}
                    target="_blank"
                    className="mt-8 inline-flex items-center rounded-full border border-black px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                  >
                    Open Certificate Image
                  </Link>
                ) : null}
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
