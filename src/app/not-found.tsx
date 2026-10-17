import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section bg-paper min-h-[60vh] flex items-center">
      <div className="container text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="heading-xl">Page not found.</h1>
        <p className="body-lg mt-5 text-espresso/70 max-w-xl mx-auto">The page you are looking for may have moved. Return home or explore our services.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn btn-primary">Go Home</Link>
          <Link href="/services" className="btn btn-outline">Our Services</Link>
        </div>
      </div>
    </section>
  );
}
