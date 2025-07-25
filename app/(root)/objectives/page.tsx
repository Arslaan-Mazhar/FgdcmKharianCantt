import Head from "next/head";
import Image from "next/image";

const Objectives = () => {
  return (
    <>
      <Head>
        <title>Objectives - FGDCM</title>
        <meta
          name="description"
          content="SCBW Foundation objectives are solely for students and our mission, vision, and the impact we're making for the students."
        />
      </Head>
      <div className="bg-gray-50 min-h-screen text-gray-900">
        {/* Header Section */}
        <header className=" hidden md:block bg-primary text-white py-6 rounded-full mx-56">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">
              FG Degree College for Men (FGDCM) Kharian Cantt
            </h1>
            <p className="mt-2">
              Empowering students to lead successful lives
            </p>
          </div>
        </header>

        {/* Objectives Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Our Objectives
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Education for all",
                  image: "/images/education.webp",
                  description:
                    "Our college serves according to the needs of the students.",
                },
                {
                  title: "FSc. Pre-Medical Program",
                  image: "/images/healthcare.webp",
                  description: "Providing best education to medical students.",
                },
                {
                  title: "FSc. Pre-Engineering Program",
                  image: "/images/vocational.png",
                  description:
                    "Promoting engineering programs and employment opportunities.",
                },
                {
                  title: "ICS & BS(IT) Computer Programs",
                  image: "/images/comp.jpg",
                  description:
                    "Providing best computer education with well establish computer lab.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-700 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Projects Overview
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/images/project.png"
                  alt="Project Overview"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <ul className="list-disc pl-5 space-y-4 text-gray-700">
                  <li>Developed new Computer Lab.</li>
                  <li>Furnished liberary with number of books.</li>
                  <li>Implement skill development programs.</li>
                  <li>Organize student events and workshops.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Objectives;
