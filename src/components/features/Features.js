import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { SiAntdesign, SiProgress } from "react-icons/si";
import { FaGlobe, FaMobile } from "react-icons/fa";

function Features() {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Features"
          des="Lorem ipsum dolor sit amet consectetur adipiscing elit. Ateque soluta hic
          consequuntur eum non proident Lore"
        />
        <Card
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur adipiscing elit. Ateque soluta hic
          consequuntur eum non proident Lore"
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimization"
          des="Lorem ipsum dolor sit amet consectetur adipiscing elit. Ateque soluta hic
          consequuntur eum non proident Lore"
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipiscing elit. Ateque soluta hic
          consequuntur eum non proident Lore"
          icon={<FaMobile />}
        />
        <Card
          title="Ux Design"
          des="Lorem ipsum dolor sit amet consectetur adipiscing elit. Ateque soluta hic
          consequuntur eum non proident Lore"
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipiscing elit. Ateque soluta hic
          consequuntur eum non proident Lore"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features;
