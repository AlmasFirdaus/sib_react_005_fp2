import React from "react";
import img1 from "../../assets/images/Picture2.png";
import img2 from "../../assets/images/Picture1.png";
import CardAbout from "../../components/user/cardAbout/CardAbout";

const About = () => {
  return (
    <section id="about" className="pt-16 pb-28">
      <div className="container px-8 pt-10 lg:px-20 font-quicksand flex flex-col justify-center items-center">
        <div className="grid jus gap-7 md:grid-cols-2">
          <CardAbout image={img1} title="R. Fasich Aulia Pratama Iman" position="Lead" code="013" />
          <CardAbout image={img2} title="Almas Firdaus" position="Member" code="017" />
        </div>
      </div>
    </section>
  );
};

export default About;
