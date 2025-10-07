'use client'

import { HomepageData } from "@/app/types/homepage";

type HeroSectionTwo = {
  home_section2: HomepageData["data"]["home_section2"];
};
export default function SectionTwo({ home_section2 }: HeroSectionTwo) {
  return (
    <section>
      <article className="container mx-auto flex items-center justify-between">
        <div>
          <h3>{home_section2.title1}</h3>
          <p>{home_section2.description1}</p>
        </div>
        <div className="border-l-2 border-l-primary px-4">
          <h3 className="text-gradient-1">{home_section2.title2}</h3>
          <p>{home_section2.description2}</p>
        </div>
      </article>
    </section>
  );
}
