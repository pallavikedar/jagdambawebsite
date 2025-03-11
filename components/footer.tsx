import Link from "next/link"
import { MapPin, MailOpenIcon as Envelope, Phone, Printer, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <div className="container-fluid footer bg-dark py-12 md:py-16 lg:py-20 wow fadeIn" data-wow-delay="0.2s">
      <div className="container bg-black py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-center">
          <div className="lg:col-span-7">
            <div className="position-relative mx-auto">
              <input
                className="form-control w-full py-3 px-4 rounded-md"
                type="text"
                placeholder="Email address to Subscribe"
              />
              <button
                type="button"
                className="btn btn-primary position-absolute top-0 end-0 py-2 px-4 mt-2 me-2 rounded-md"
                style={{ top: "0", right: "0" }}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-end flex items-center justify-center lg:justify-end">
              <Link href="#" className="btn btn-light btn-md-square me-3 rounded-md">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="btn btn-light btn-md-square me-3 rounded-md">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="btn btn-light btn-md-square me-3 rounded-md">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="btn btn-light btn-md-square me-0 rounded-md">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="footer-item d-flex flex-col">
            <div className="footer-item">
              <p className="mb-3 text-gray-300">
                Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="footer-item d-flex flex-col">
            <h4 className="text-white mb-4">Quick Links</h4>
            <Link href="#"> Home</Link>
            <Link href="#"> About us</Link>
            <Link href="#"> Service</Link>
            <Link href="#"> Testimonial</Link>
            <Link href="#"> Contact Us</Link>
          </div>
          <div className="footer-item d-flex flex-col">
            <h4 className="text-white mb-4">Contact Info</h4>
            <Link href="#">
              <MapPin className="text-primary inline-block mr-2" />
              medical Square, Nagpur
            </Link>
            <Link href="mailto:info@example.com">
              <Envelope className="text-primary inline-block mr-2" />
              info@example.com
            </Link>
            <Link href="mailto:support@example.com">
              <Envelope className="text-primary inline-block mr-2" />
              support@example.com
            </Link>
            <Link href="tel:+012 345 67890">
              <Phone className="text-primary inline-block mr-2" />
              +012 345 67890
            </Link>
            <Link href="tel:+012 345 67890" className="mb-3">
              <Printer className="text-primary inline-block mr-2" />
              +012 345 67890
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

