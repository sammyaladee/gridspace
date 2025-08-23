import Card from "@/components/Card";
import coworker from "@/assets/Cowoker.png";
import recruit from "@/assets/rapid-recruiting.png";
import project from "@/assets/projects.png";

export default function HomePage() {
  return (
    <section>
      {/* Hero */}
      <div className="bg-gradient-to-b from-[#6a362b] to-[#2a2c3e] text-white h-[450px] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug">
          Choose How You Work <br />
          <span className="text-orange-500">With Gridspace</span>
        </h1>
        <p className="text-gray-200 text-lg sm:text-xl md:text-2xl max-w-2xl">
          One platform. Three ways to connect with opportunities.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8 py-16 px-4 sm:px-6">
        <Card
          title="Cowork Spaces"
          description=""
          button="Explore Spaces"
          href="/cowork"
          color="blue"
          image={coworker}
        />
        <Card
          title="Rapid Recruiting"
          description=""
          button="Start Recruiting"
          href="/rapid-recruit"
          color="orange"
          image={recruit}
        />
        <Card
          title="Projects"
          description=""
          button="Discover Project"
          href="/project"
          color="blue"
          image={project}
        />
      </div>
    </section>
  );
}
