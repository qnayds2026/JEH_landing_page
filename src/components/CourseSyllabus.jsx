import {
  Shield,
  Terminal,
  Lock,
  Globe,
  Search,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const modules = [
  {
    icon: Shield,
    title: "Ethical Hacking Fundamentals",
    topics: [
      "Cybersecurity Basics",
      "Ethical Hacking Methodology",
      "Attack Surfaces",
      "Legal & Ethics",
    ],
  },
  {
    icon: Terminal,
    title: "Linux, Kali & Security Tools",
    topics: [
      "Linux Commands",
      "Kali Linux",
      "Android Termux",
      "Nmap & Burp Suite",
    ],
  },
  {
    icon: Lock,
    title: "Social Engineering & Phishing",
    topics: [
      "Phishing",
      "Password Security",
      "Cryptography",
      "Attack Prevention",
    ],
  },
  {
    icon: Globe,
    title: "Privacy & Online Security",
    topics: [
      "Dark Web Basics",
      "VPN & Tor",
      "Digital Privacy",
      "Device Protection",
    ],
  },
  {
    icon: Search,
    title: "OSINT & Red Teaming",
    topics: [
      "Reconnaissance",
      "OSINT",
      "SSH",
      "Remote Access",
    ],
  },
  {
    icon: ShieldCheck,
    title: "System Security",
    topics: [
      "Network Security",
      "System Hardening",
      "Best Practices",
      "Real-World Protection",
    ],
  },
];

export default function CourseSyllabus() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            30-DAY LEARNING ROADMAP
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-black text-blue-950">
            What You'll Learn
          </h2>

          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Everything you need to build a strong foundation in Ethical Hacking
            and Cybersecurity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {modules.map((module, index) => {
            const Icon = module.icon;

            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <Icon className="text-blue-600" size={24} />
                </div>

                <h3 className="text-lg font-bold text-blue-950 mb-4">
                  {module.title}
                </h3>

                <div className="space-y-3">
                  {module.topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-blue-500 shrink-0"
                      />

                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

        </div>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-bold text-blue-950">
            ✔ Structured 30-Day Learning Path
          </h3>

          <p className="mt-2 text-slate-600">
            Beginner-friendly • 100% Malayalam • Practical demonstrations •
            Lifetime access
          </p>
        </div>

      </div>
    </section>
  );
}