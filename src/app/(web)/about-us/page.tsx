import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-tertiary-light font-heading p-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          About El-Caaz Farms & Resort
        </h1>
        <p className="text-base md:text-lg mt-2">
          Upscale Organic Farm & Resort Accommodation
        </p>
      </header>

      {/* About Us Section */}
      <section className="max-w-7xl mx-auto p-6 md:flex md:flex-row md:space-x-12">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-black dark:text-white">
            Who We Are
          </h2>
          <p className="text-sm md:text-base text-gray-700 dark:text-white">
            El-Caaz Farms & Resort is an upscale destination that combines the
            luxury of organic farming with the peacefulness of resort
            accommodation. We specialize in organic livestock, poultry,
            fishery, plantation, and field farming, offering guests an
            immersive experience in nature&apos;s tranquility while maintaining
            a commitment to sustainable farming practices.
          </p>
        </div>

        <div className="md:w-1/2 space-y-4 mt-6 md:mt-0">
          <h2 className="text-xl md:text-2xl font-semibold text-black dark:text-white">
            Our Services
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700 dark:text-white">
            <li>Organic Livestock and Poultry Farming</li>
            <li>Fishery and Aquaculture</li>
            <li>Luxury Resort Accommodation</li>
            <li>Plantation and Crop Farming</li>
            <li>Field Farming with Sustainable Practices</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-tertiary-light text-black dark:text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Visit Us Today!
          </h2>
          <p className="text-sm md:text-lg">
            Come experience the beauty of nature at El-Caaz Farms & Resort,
            where luxury meets sustainability.
          </p>
          <div className="mt-5">
            <Link href="/rooms" className="btn-primary">
              Book Your Stay
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} El-Caaz Farms & Resort. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
