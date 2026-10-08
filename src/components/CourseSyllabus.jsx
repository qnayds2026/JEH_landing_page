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
    title: "Ethical Hacking അടിസ്ഥാനങ്ങൾ",
    subtitle: "Ethical Hacking Fundamentals",
    topics: [
      "Cybersecurity അടിസ്ഥാനങ്ങൾ",
      "Ethical Hacking-ന്റെ പ്രധാന രീതികൾ",
      "Attack Surfaces മനസ്സിലാക്കാം",
      "Legal & Ethical Guidelines",
    ],
  },
  {
    icon: Terminal,
    title: "Linux, Kali & Security Tools",
    subtitle: "Linux, Kali & Security Tools",
    topics: [
      "Linux Commands",
      "Kali Linux Installation",
      "Android Termux ഉപയോഗം",
      "Nmap & Burp Suite Tools",
    ],
  },
  {
    icon: Lock,
    title: "Social Engineering & Phishing",
    subtitle: "Social Engineering & Phishing",
    topics: [
      "Phishing Methods & തിരിച്ചറിയൽ",
      "Password Security",
      "Cryptography അടിസ്ഥാനങ്ങൾ",
      "Attack Prevention Methods",
    ],
  },
  {
    icon: Globe,
    title: "Privacy & Online Security",
    subtitle: "Privacy & Online Security",
    topics: [
      "Dark Web-ന്റെ അടിസ്ഥാനങ്ങൾ",
      "VPN & Tor Networks",
      "Digital Privacy സംരക്ഷണം",
      "Device Security",
    ],
  },
  {
    icon: Search,
    title: "OSINT & Red Teaming",
    subtitle: "OSINT & Red Teaming",
    topics: [
      "Reconnaissance Techniques",
      "OSINT Investigations",
      "SSH Security",
      "Remote Access Security",
    ],
  },
  {
    icon: ShieldCheck,
    title: "System Security",
    subtitle: "System Security",
    topics: [
      "Network Security",
      "System Hardening",
      "Security Best Practices",
      "Real-World Cybersecurity",
    ],
  },
];

export default function CourseSyllabus() {
  return (
    <section className="py-16 px-6 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-3">
            30-Day Learning Roadmap
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-950">
            നിങ്ങൾ എന്തെല്ലാം പഠിക്കും?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Ethical Hacking & Cybersecurity Malayalam-ൽ
            തുടക്കം മുതൽ step-by-step ആയി പഠിക്കാം.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;

            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg transition bg-slate-50/50"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 shadow-xs">
                  <Icon className="text-blue-600" size={24} />
                </div>

                <h3 className="text-lg font-black text-blue-950 mb-1">
                  {module.title}
                </h3>

                <p className="text-xs text-blue-600 font-semibold mb-4">
                  {module.subtitle}
                </p>

                <div className="space-y-2.5">
                  {module.topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-emerald-500 shrink-0"
                      />

                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}