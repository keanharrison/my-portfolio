import { Masthead } from "@/components/masthead";
import { ProjectGrid } from "@/components/project-grid";
import { ExperienceGrid } from "@/components/experience-grid";
import { InterestsBlock } from "@/components/interests-block";

export default function Home() {
  return (
    <main>
      <Masthead />
      <ProjectGrid />
      <ExperienceGrid />
      <InterestsBlock />
    </main>
  );
}
