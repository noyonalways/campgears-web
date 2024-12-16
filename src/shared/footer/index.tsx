import {
  BadgePercent,
  Facebook,
  Instagram,
  Mail,
  Package,
  Phone,
  ShieldCheck,
  Truck,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Tents", url: "/products?category=tents" },
  { name: "Sleeping Bags", url: "/products?category=sleeping-bags" },
  { name: "Camping Stoves", url: "/products?category=stoves" },
  { name: "Trekking Poles", url: "/products?category=trekking-poles" },
  { name: "Backpacks", url: "/products?category=backpacks" },
  { name: "Camping Lanterns", url: "/products?category=lanterns" },
  { name: "Hiking Boots", url: "/products?category=boots" },
  { name: "Outdoor Clothing", url: "/products?category=clothing" },
  { name: "Camping Chairs", url: "/products?category=camping-chairs" },
];

const usefulLinks = [
  { name: "Home", url: "/" },
  { name: "Shop", url: "/shop" },
  { name: "About Us", url: "/about" },
  { name: "Blog", url: "/blog" },
  { name: "Contact Us", url: "/contact" },
];

const helpCenter = [
  { name: "Your Order", url: "/order" },
  { name: "Your Account", url: "/account" },
  { name: "Track Order", url: "/track-order" },
  { name: "Your Wishlist", url: "/wishlist" },
  { name: "FAQ", url: "/faq" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary pb-6">
      <div
        className={`bg-[url('/footer-shape.png')] bg-no-repeat bg-left-top pt-10`}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between pb-10 border-b border-dashed">
            <div className="flex md:flex-col lg:flex-row  items-center text-muted-foreground space-x-4 border-r border-dashed pr-6">
              <Package size={32} />
              <p>Premium Outdoor Essentials</p>
            </div>
            <div className="flex md:flex-col lg:flex-row  items-center text-muted-foreground space-x-4 border-r border-dashed pr-6">
              <Truck size={32} />
              <p>Free Delivery on Orders Over $50</p>
            </div>
            <div className="flex md:flex-col lg:flex-row  items-center text-muted-foreground space-x-4 border-r border-dashed pr-6">
              <BadgePercent size={32} />
              <p>Exclusive Deals for Outdoor Enthusiasts</p>
            </div>
            <div className="flex md:flex-col lg:flex-row items-center text-muted-foreground space-x-4">
              <ShieldCheck size={32} />
              <p>Unmatched Quality at the Best Prices</p>
            </div>
          </div>

          <div className="grid gap-4 md:gap-6 lg:gap-4 md:grid-cols-3 lg:grid-cols-5 pt-10">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link href={"/"}>
                <h1 className="text-3xl font-quickSand font-bold">
                  Camp<span className="text-primary">gears</span>
                </h1>
              </Link>
              <p className="text-muted-foreground">
                We provide premium camping equipment for your outdoor
                adventures.
              </p>
              <address className="not-italic space-y-2 text-sm">
                <p>1418 Riverwood Drive, CA 96052, US</p>
                <p>Email: support@campgears.com</p>
              </address>
            </div>

            {/* Categories Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      className="hover:text-primary text-muted-foreground hover:ml-2 duration-100 hover:underline"
                      href={category.url}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Useful Links</h3>
              <ul className="space-y-2">
                {usefulLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="hover:text-primary text-muted-foreground hover:ml-2 duration-100 hover:underline"
                      href={link.url}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Center Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Help Center</h3>
              <ul className="space-y-2">
                {helpCenter.map((help) => (
                  <li key={help.name}>
                    <Link
                      className="hover:text-primary text-muted-foreground hover:ml-2 duration-100 hover:underline"
                      href={help.url}
                    >
                      {help.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Us</h3>

              <div className="space-y-4">
                <div className="flex space-x-2 text-muted-foreground">
                  <Phone size={20} />
                  <div className="text-muted-foreground text-sm space-y-1 flex flex-col md:border-b w-full pb-2 border-b-0 border-dashed">
                    <p>Hotline 24/7:</p>
                    <a
                      href="tel:+1 888 104 2340"
                      className="text-black font-medium"
                    >
                      +1 888 104 2340
                    </a>
                  </div>
                </div>

                <div className="flex space-x-2 text-muted-foreground">
                  <Mail size={20} />
                  <div className="text-muted-foreground text-sm space-y-1 flex flex-col md:border-b w-full pb-2 border-b-0 border-dashed">
                    <p>Email Address:</p>
                    <a
                      href="mailto:contact@campgears.com"
                      className="text-black font-medium"
                    >
                      contact@campgears.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-8 pb-14 lg:pb-0 border-t border-dashed pt-4 flex flex-col-reverse md:flex-row items-center justify-between text-sm md:text-xs lg:text-sm">
            <p className="text-muted-foreground">
              ©2022 Campgears. All rights reserved
            </p>
            <div className="my-4 md:my-0">
              <Image
                width={280}
                height={20}
                src={"/payments.png"}
                alt="payments-icons"
              />
            </div>

            <div className="flex items-center space-x-1">
              <p className="text-muted-foreground">Stay Connected:</p>
              <div className="flex space-x-3">
                <Link href="#" aria-label="Facebook">
                  <Facebook
                    size={16}
                    className="hover:text-primary text-muted-foreground"
                  />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter
                    size={16}
                    className="hover:text-primary text-muted-foreground"
                  />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram
                    size={16}
                    className="hover:text-primary text-muted-foreground"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
