import { motion } from 'framer-motion';

const storySections = [
  {
    title: 'Who I Am',
    paragraphs: [
      'Founder of Half Raw Motion.',
      'Cinematic Sports & Portrait Photographer.',
      'Brand & Marketing Growth Specialist.'
    ]
  },
  {
    title: 'Why This Exists',
    paragraphs: [
      'I came to Montreal from Guinea Bissau, West Africa, as a young immigrant working as a grocery store clerk during the pandemic. People kept commenting on my smile and saying it lit up the room when everyone was scared. They told me to try modeling. So I did.',
      'What I found was frustrating. I kept searching for photographers who could reveal something real, not just pose you, but capture the energy and emotion that are already there. Nobody was doing it the way I envisioned it, so I decided to learn it myself.',
      'In late 2023, with a $1,500 tax refund and a choice between a guitar, paying bills, or investing in something that truly meant something, I chose a camera. Not on impulse. On purpose.'
    ]
  },
  {
    title: 'Why Boxing',
    paragraphs: [
      'As someone who trains boxing multiple times a week, I noticed something that bothered me. The sport I love, in this city I call home, had little to no dedicated media presence and not enough boxing photographers in Montreal.',
      'Fighters, gyms, and promoters in Montreal were still showing up online with content that did not reflect their level. That is unacceptable when the talent is world-class and the goal is to build strong gym and athlete branding.',
      'Half Raw Motion exists to fix that.'
    ]
  },
  {
    title: "What We're Building",
    paragraphs: [
      'Every client we work with brings us closer to something bigger. Beyond photography, the mission has always included giving back to the community through representation, growth, and service to people who are often overlooked.',
      "When you work with us, you are not just getting images. You are working with someone who understands your world, respects your grind, and is committed to showing people what you're made of."
    ]
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-14 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden bg-[#111]">
              <img
                src="https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/About%20section/1_1771816727_AKPL0465.jpeg"
                alt="Portrait of Hernane Ferreira holding a camera"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-28 md:h-28 border border-white/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="order-1 lg:order-2 lg:pr-3"
          >
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-[3.3rem] font-light text-white tracking-tight mb-4">
                About
              </h1>

              <h2 className="text-xl md:text-2xl lg:text-[2rem] font-light text-white/90 mb-6">
                Hey, I&apos;m Hernane.
              </h2>

              <p className="max-w-[64ch] text-white/70 text-base md:text-lg leading-[1.85] font-light">
                Entrepreneur, photographer, boxing enthusiast, and the founder of Half Raw Motion, a cinematic sports
                photography studio based in Montreal, Quebec. I&apos;m here to represent boxers, fighters, gyms, and
                athletes in their truest and rawest form, in ways they&apos;ve never been represented before.
              </p>
            </header>

            <div className="space-y-12 md:space-y-14 max-w-[68ch]">
              {storySections.map((section) => (
                <section key={section.title} className="border-t border-white/10 pt-8 first:border-t-0 first:pt-0">
                  <h3 className="text-xl md:text-2xl lg:text-[2rem] font-light text-white/90 leading-tight mb-5">
                    {section.title}
                  </h3>
                  <div className="space-y-5 text-white/65 text-base md:text-lg leading-[1.9] font-light">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <p className="mt-14 max-w-[28ch] text-white text-xl md:text-[1.75rem] font-light leading-relaxed">
              Athletes. Gyms. Promoters. This is for you.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
