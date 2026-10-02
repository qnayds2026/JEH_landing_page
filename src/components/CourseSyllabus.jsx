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
    title: "എത്തിക്കൽ ഹാക്കിംഗ് അടിസ്ഥാനങ്ങൾ",
    subtitle: "Ethical Hacking Fundamentals",
    topics: [
      "സൈബർ സെക്യൂരിറ്റി അടിസ്ഥാനങ്ങൾ",
      "എത്തിക്കൽ ഹാക്കിംഗ് രീതികൾ",
      "അറ്റാക്ക് സർഫസുകൾ",
      "ലീഗൽ & എത്തിക്സ്",
    ],
  },
  {
    icon: Terminal,
    title: "ലിനക്സ്, Kali & സെക്യൂരിറ്റി ടൂളുകൾ",
    subtitle: "Linux, Kali & Security Tools",
    topics: [
      "Linux കമാൻഡുകൾ",
      "Kali Linux ഇൻസ്റ്റലേഷൻ",
      "Android Termux ഉപയോഗം",
      "Nmap & Burp Suite ടൂളുകൾ",
    ],
  },
  {
    icon: Lock,
    title: "സോഷ്യൽ എഞ്ചിനീയറിംഗ് & ഫിഷിംഗ്",
    subtitle: "Social Engineering & Phishing",
    topics: [
      "ഫിഷിംഗ് രീതികൾ & തിരിച്ചറിയൽ",
      "പാസ്‌വേഡ് സുരക്ഷ",
      "ക്രിപ്റ്റോഗ്രഫി അടിസ്ഥാനങ്ങൾ",
      "അറ്റാക്ക് പ്രിവൻഷൻ വഴികൾ",
    ],
  },
  {
    icon: Globe,
    title: "പ്രൈവസി & ഓൺലൈൻ സുരക്ഷ",
    subtitle: "Privacy & Online Security",
    topics: [
      "Dark Web അടിസ്ഥാനങ്ങൾ",
      "VPN & Tor നെറ്റ്‌വർക്ക്",
      "ഡിജിറ്റൽ പ്രൈവസി സംരക്ഷണം",
      "ഡിവൈസ് സെക്യൂരിറ്റി",
    ],
  },
  {
    icon: Search,
    title: "OSINT & റെഡ് ടീമിംഗ്",
    subtitle: "OSINT & Red Teaming",
    topics: [
      "Reconnaissance രീതികൾ",
      "OSINT അന്വേഷണങ്ങൾ",
      "SSH സുരക്ഷ",
      "റിമോട്ട് ആക്സസ് സുരക്ഷ",
    ],
  },
  {
    icon: ShieldCheck,
    title: "സിസ്റ്റം സെക്യൂരിറ്റി",
    subtitle: "System Security",
    topics: [
      "നെറ്റ്‌വർക്ക് സുരക്ഷ",
      "സിസ്റ്റം ഹാർഡനിംഗ്",
      "സെക്യൂരിറ്റി ബെസ്റ്റ് പ്രാക്ടീസസ്",
      "യഥാർത്ഥ ലോക സൈബർ സുരക്ഷ",
    ],
  },
];

export default function CourseSyllabus() {
  return (
    <section className="py-16 px-6 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-3">
            30 ദിവസത്തെ ലേണിംഗ് റോഡ്‌മാപ്പ്
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-950">
            നിങ്ങൾ എന്തെല്ലാം പഠിക്കും
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Ethical Hacking & Cybersecurity മലയാളത്തിൽ തുടക്കം മുതൽ പടിപടിയായി പഠിക്കാം.
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