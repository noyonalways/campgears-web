import { FormEvent, useState } from "react";
import bannerImage from "../../assets/images/about-us/about-us-banner.png";

function AboutUs() {
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!image) {
      console.log("No image selected");
      return;
    }

    const form = new FormData();
    form.append("image", image);

    console.log(form);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_API_KEY
    }`;

    const config = {
      method: "POST",
      body: form,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error("Failed to upload image");
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="mx-auto py-12">
      {/* Banner Section */}
      <section className="lg:container">
        <div
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
          className="bg-cover lg:rounded-lg overflow-hidden py-44"
        >
          <div className="flex items-center justify-center lg:container">
            <div>
              <h1 className="text-center text-3xl font-bold md:text-5xl font-montserrat text-white mb-4">
                About Us | CAMPGEARS
              </h1>
              <p className="font-roboto text-center max-w-2xl mx-auto text-gray-100">
                Welcome to Campers Shop! We are your premier online destination
                for all things camping. Our mission is to provide camping
                enthusiasts with the highest quality gear, equipment, and
                accessories to make every outdoor adventure safe, enjoyable, and
                unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-10">
        <form onSubmit={handleSubmit}>
          <input
            className="block border p-2 mb-2"
            type="file"
            name="file"
            id="file"
            onChange={(e) =>
              setImage(e.target.files ? e.target.files[0] : null)
            }
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AboutUs;
