export default function HomePage() {
  const programs = [
    {
      title: "Junior Programs",
      description:
        "Structured coaching for red, orange, green, and advanced junior players with clear development pathways.",
    },
    {
      title: "Adult Clinics",
      description:
        "High-energy group sessions for beginners, intermediates, and competitive players looking to improve fast.",
    },
    {
      title: "Private Lessons",
      description:
        "One-on-one coaching tailored to technique, match strategy, footwork, and confidence on court.",
    },
    {
      title: "Seasonal Camps",
      description:
        "School-break and summer camps that combine instruction, match play, and fun for all ages.",
    },
  ];

  const highlights = [
    "10 lighted courts",
    "Programs for kids and adults",
    "Professional coaching staff",
    "League play and clinics",
    "Camps, lessons, and events",
    "Family-friendly club atmosphere",
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$99/mo",
      description: "Great for casual players getting started.",
      features: ["1 clinic per week", "Member court booking", "Club events access"],
    },
    {
      name: "Competitive",
      price: "$179/mo",
      description: "Best for active players improving consistently.",
      features: ["2 clinics per week", "Priority court booking", "League play access"],
    },
    {
      name: "Elite Family",
      price: "$299/mo",
      description: "Built for households who want full club access.",
      features: ["Family access", "Junior program discounts", "Priority event registration"],
    },
  ];

  const coaches = [
    {
      name: "Steve Nolen",
      role: "Director of Tennis",
      bio: "Experienced racquet sports leader focused on player development, strong fundamentals, and community programming.",
    },
    {
      name: "Peter Hancy",
      role: "Head Racquets Professional",
      bio: "High-performance coach working with juniors, adults, and competitive players across all skill levels.",
    },
    {
      name: "Performance Team",
      role: "Club Coaching Staff",
      bio: "A welcoming coaching team dedicated to helping every player improve through structured training and match play.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative min-h-[90vh] overflow-hidden text-white">
        {/* Tennis court photo background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/tennis-hero.png)" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,18,38,0.88)_0%,rgba(15,23,42,0.82)_50%,rgba(20,39,74,0.78)_100%)]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-10 top-20 h-40 w-40 rounded-full border border-white/20" />
          <div className="absolute right-20 top-28 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute bottom-10 left-1/3 h-52 w-52 rounded-full border border-cyan-300/20" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              SpringPark-inspired tennis club website
            </div>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              A modern tennis club website built to attract members, lessons, and camp registrations.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              This homepage is designed for a community racquet club with strong coaching, family programming, and a premium local feel.
              It is structured for Vercel deployment and can be expanded into a full website.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#membership"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-lg transition hover:-translate-y-0.5"
              >
                View Memberships
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Contact the Club
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-white p-6 text-slate-900">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Featured program</p>
                    <h2 className="text-2xl font-semibold">Spring Performance Academy</h2>
                  </div>
                  <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                    Open Enrollment
                  </div>
                </div>

                <div className="rounded-3xl bg-[linear-gradient(135deg,#dbeafe_0%,#ecfeff_100%)] p-6">
                  <p className="text-sm font-medium text-sky-700">For juniors & competitive adults</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    Build a stronger all-court game with technical coaching, movement training, and live-point scenarios in a motivating club environment.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-slate-500">Sessions</p>
                      <p className="mt-1 font-semibold">Mon–Sat</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-slate-500">Levels</p>
                      <p className="mt-1 font-semibold">Beginner to Elite</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-slate-500">Format</p>
                      <p className="mt-1 font-semibold">Clinics + Match Play</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-slate-500">Booking</p>
                      <p className="mt-1 font-semibold">Online Registration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Programs</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Designed for juniors, adults, families, and competitive players.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Use this section to drive registrations for lessons, clinics, camps, and club training pathways.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program) => (
            <div key={program.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-2xl bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                Signature Offering
              </div>
              <h3 className="text-xl font-semibold">{program.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Why members join</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Premium local club feel with a strong community and modern training experience.
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Easy online registration for programs and events",
                  "Clear pathways from beginner to advanced development",
                  "Family-friendly club environment with strong retention potential",
                  "Opportunity to promote leagues, socials, and court reservations",
                ].map((item) => (
                  <div key={item} className="rounded-3xl bg-white p-5 shadow-sm">
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[linear-gradient(180deg,#0f172a_0%,#1e3a8a_100%)] p-8 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-200">Quick stats</p>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-4xl font-semibold">10+</p>
                  <p className="mt-1 text-slate-300">Lighted courts and multi-program club access</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold">All Ages</p>
                  <p className="mt-1 text-slate-300">Junior training, adult clinics, camps, and private lessons</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold">Year-Round</p>
                  <p className="mt-1 text-slate-300">Ongoing programs, events, leagues, and seasonal intensives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Memberships</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Sample pricing section for your club website.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Replace this with your actual membership structure, clinic packages, or court fees.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricing.map((tier, index) => (
            <div
              key={tier.name}
              className={`rounded-[2rem] border p-8 shadow-sm ${index === 1
                  ? "border-sky-600 bg-sky-600 text-white shadow-xl"
                  : "border-slate-200 bg-white text-slate-900"
                }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">{tier.name}</h3>
                  <p className={`mt-2 text-sm ${index === 1 ? "text-sky-100" : "text-slate-500"}`}>
                    {tier.description}
                  </p>
                </div>
                {index === 1 && (
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                    Most Popular
                  </span>
                )}
              </div>

              <p className="mt-8 text-4xl font-semibold">{tier.price}</p>
              <div className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <div
                    key={feature}
                    className={`rounded-2xl px-4 py-3 text-sm ${index === 1 ? "bg-white/10 text-white" : "bg-slate-50 text-slate-700"
                      }`}
                  >
                    {feature}
                  </div>
                ))}
              </div>
              <button
                className={`mt-8 w-full rounded-2xl px-5 py-3 text-sm font-semibold transition ${index === 1
                    ? "bg-white text-sky-700 hover:opacity-95"
                    : "bg-slate-900 text-white hover:opacity-95"
                  }`}
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Coaching Team</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Showcase the pros behind your club.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              This section is built to highlight your tennis director, head pro, and supporting staff.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {coaches.map((coach) => (
              <div key={coach.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="h-14 w-14 rounded-2xl bg-white/10" />
                <h3 className="mt-5 text-xl font-semibold">{coach.name}</h3>
                <p className="mt-1 text-sm text-cyan-300">{coach.role}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Make it easy for visitors to join, call, or book.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Use your real contact info, registration links, and embedded form or booking system here.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">Location</p>
                <p className="mt-1 font-medium">3330 Springpark Way, Garland, TX 75044</p>
              </div>
              <div className="rounded-3xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">Phone</p>
                <p className="mt-1 font-medium">(469) 371-1644</p>
              </div>
              <div className="rounded-3xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">Email</p>
                <p className="mt-1 font-medium">info@yourtennisclub.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Request Information</h3>
            <p className="mt-2 text-sm text-slate-500">This can be connected to Formspree, HubSpot, or your CRM.</p>

            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0" placeholder="First name" />
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0" placeholder="Last name" />
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 sm:col-span-2" placeholder="Email" />
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 sm:col-span-2" placeholder="Phone" />
              <select className="rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 sm:col-span-2">
                <option>Interested In</option>
                <option>Membership</option>
                <option>Junior Programs</option>
                <option>Adult Clinics</option>
                <option>Private Lessons</option>
                <option>Camps</option>
              </select>
              <textarea
                className="min-h-[140px] rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 sm:col-span-2"
                placeholder="Tell us what you are looking for"
              />
              <button className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white sm:col-span-2">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}