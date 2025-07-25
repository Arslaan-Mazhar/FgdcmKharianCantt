import ImageSlider from "../../components/ImageSlider";
import About from "./aboutUs/page";
import Objectives from "./objectives/page";
import PaymentCard from "./donation/page";
import ContactUs from "./contactUs/page";
import Head from "next/head";
import MembershipForm from "./membership/page";
import CheckoutForm from "@/app/(root)/checkoutForm/page";
import AdminUpload from "./files/FileUpload";

export default function Home() {
  return (
    <>
      <Head>
        <title>FGDCM</title>
        <meta
          name="description"
          content="FG Degree College for Men Kharian Cantt is serving in education sector for years. Join us in our mission to make a difference."
        />
        <meta
          property="og:title"
          content="FG Degree College for Men (FGDCM) Kharian Cantt"
        />
        <meta
          property="og:description"
          content="Support the cause of eleviation of education with FG Degree College for Men Kharian Cantt."
        />
        <meta property="og:image" content="/logo1.jpeg" />
        <meta property="og:url" content="https://fgdcm.org" />
        <meta
          name="keywords"
          content="Students, College, Higher education, University, Undergraduate programs, Online learning, Online courses, Degree in Computer Science, Major in Biology,Major in Computer,Major in English,University near me,Kharian colleges,College in Kharian,FG Degree College Kharian admissions, Education for the students" />    <meta name="author" content="FG Degree College Kharian Cantt" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FGCollegeKharian" />
        <meta
          name="twitter:title"
          content="FG Degree College for Men (FGDCM) Kharian Cantt"
        />
        <meta
          name="twitter:description"
          content="FG Degree College for Men Kharian Cantt is serving in education sector for years. Join us in our mission to make a difference."
        />
        <meta
          name="twitter:image"
          content="https://www.fgdcm.org/og-image.jpg"
        />
      </Head>
      <main>
        <div className="flex justify-center items-center h-screen rounded-xl lg:mt-[7rem]">
          <ImageSlider />
        </div>
        <div className="sm:mb-24 md:mb-2"></div>
        <div>
          <Objectives />
        </div>
        <div className="sm:mb-24 md:mb-0">
          <About />
        </div>
        {/* <div className="sm:mb-12 md:mb-0">
          <MembershipForm />
        </div>
        <div className="sm:mb-12 md:mb-0">
          <PaymentCard />
        </div> */}
        {/* <div>
          <CheckoutForm />
        </div> */}
        <div className="sm:mb-12 md:mb-0">
          <ContactUs />
        </div>
      </main>
    </>
  );
}
