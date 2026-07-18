import React, { useState, useEffect } from "react";
import QnaydsLOgo from "../src/assets/QNAYDS_LOGO.png";
import Alan_sir from "../src/assets/Alan_sir.webp";
import {
  CheckCircle2,
  Play,
  Star,
  ChevronDown,
  ChevronUp,
  Shield,
  Wifi,
  UserX,
  Smartphone,
  Camera,
  Bluetooth,
  Cpu,
  Lock,
  ArrowRight,
  Clock,
  MessageCircle,
  AlertCircle,
  Award,
  Briefcase,
  Check,
  X,
  Users,
  BookOpen,
  ShieldCheck,
  ThumbsUp,
  HeartHandshake,
  Download,
  Trophy,
  XCircle,
  LayoutDashboard,
  TrendingUp,
  MonitorPlay,
  ExternalLink,
  ArrowRightCircle,
} from "lucide-react";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";

// --- CONFIGURATION & DATA ---

// A/B Testing Constant for Primary CTA
const PRIMARY_CTA_TEXT = "START LEARNING ETHICAL HACKING TODAY";

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LC4oL8ozK88yYLRSNagwTko0T01LTk60SDZKM0pMszKoSEoxNbawsDRPskgxNzYxSfJiK8xLrEwpBgBZoBMV&q=qnayds&rlz=1CDGOYI_enIN1209IN1210&oq=qnayds&gs_lcrp=EgZjaHJvbWUqEggFEC4YJxivARjHARi6AhiOBTIGCAAQRRg8MgYIARBFGDwyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDwyEggFEC4YJxivARjHARi6AhiOBTIGCAYQRRg7MgkIBxBFGDsYgAQyCQgIEEUYOxiABDIHCAkQABiABNIBCDIwMDFqMGo3qAIasAIB4gMEGAEgX_EFMiM1YNrxwWTxBTIjNWDa8cFk&hl=en-GB&sourceid=chrome-mobile&ie=UTF-8#ebo=0&mpd=~3379620392164112321/customers/reviews"; //

const OFFER_HOURS = 5;
const OFFER_MINS = 42;
const OFFER_SECS = 18;

// Updated Video Arrays with Descriptions in Malayalam
const ALL_VIDEOS = [
  {
    id: "dSWuXMFdOaQ",
    desc: "Fukri Smart Solutions CEO ഫുക്രിയുടെ അനുഭവം. അദ്ദേഹം ഈ കോഴ്‌സ് സുഹൃത്തിന് നിർദ്ദേശിക്കുകയും പിന്നീട് ഇതിലെ ക്വാളിറ്റി കണ്ട് സ്വയം ജോയിൻ ചെയ്യുകയും ചെയ്തു.",
  },
  {
    id: "oO2m4N7rkjc",
    desc: "ഹാക്കിങ് പഠിക്കാൻ ആഗ്രഹിക്കുന്ന തുടക്കക്കാർക്ക് ഏറ്റവും മികച്ച കോഴ്‌സ് ആണിതെന്ന് വിദ്യാർത്ഥി പറയുന്നു.",
  },
  {
    id: "vILn-_i2n5U",
    desc: "സങ്കീർണ്ണമായ സൈബർ സെക്യൂരിറ്റി വിഷയങ്ങൾ പോലും വളരെ ലളിതമായി മലയാളത്തിൽ മനസ്സിലാക്കിത്തരുന്നു.",
  },
  {
    id: "mcGd31D19Xo",
    desc: "റെക്കോർഡഡ് ക്ലാസ്സുകൾ ആയതിനാൽ സ്വന്തം സമയത്ത് ജോലിക്ക് ഒപ്പം പഠിക്കാൻ സാധിച്ചതിന്റെ അനുഭവം.",
  },
  {
    id: "U-9r2GyKZ0s",
    desc: "Whatsapp ഗ്രൂപ്പിലൂടെ ലഭിക്കുന്ന മികച്ച സപ്പോർട്ട് വളരെ സഹായകമായി എന്ന് വിദ്യാർത്ഥി സാക്ഷ്യപ്പെടുത്തുന്നു.",
  },
  {
    id: "XflR50c2TvA",
    desc: "സൈബർ ലോകത്തെ പുതിയ കാര്യങ്ങൾ പ്രാക്ടിക്കൽ ആയി പഠിക്കാൻ ഈ കോഴ്‌സ് ഏറെ സഹായിച്ചു.",
  },
  {
    id: "TZmmOn7nkfE",
    desc: "വളരെ കുറഞ്ഞ ഫീസിൽ ഇത്രയും മികച്ചൊരു കോഴ്‌സ് നൽകുന്നതിന് QNAYDS അക്കാദമിക്ക് നന്ദി.",
  },
  {
    id: "9_Q4-pjZbn0",
    desc: "എല്ലാ ക്ലാസ്സുകളും വ്യക്തവും ലളിതവുമാണ്. താല്പര്യമുള്ള എല്ലാവർക്കും ധൈര്യമായി ജോയിൻ ചെയ്യാം.",
  },
  {
    id: "Qi05xOMa2m4",
    desc: "മുൻപരിചയം ഇല്ലാത്തവർക്കും എളുപ്പത്തിൽ മനസ്സിലാകുന്ന രീതിയിലാണ് ക്ലാസ്സുകൾ ഡിസൈൻ ചെയ്തിരിക്കുന്നത്.",
  },
];

const SYLLABUS = [
  { title: "Ethical Hacking Fundamentals", icon: Shield },
  { title: "Wi-Fi Security Concepts", icon: Wifi },
  { title: "Social Engineering", icon: UserX },
  { title: "Phishing Defence", icon: Lock },
  { title: "Smartphone Security", icon: Smartphone },
  { title: "Camera & CCTV Security", icon: Camera },
  { title: "Bluetooth Security", icon: Bluetooth },
  { title: "AI in Cybersecurity", icon: Cpu },
];

const FAQS = [
  {
    q: "എനിക്ക് hacking-ൽ മുൻപരിചയം വേണോ?",
    a: "വേണ്ട. തികച്ചും Beginners-നെ പരിഗണിച്ചാണ് ഈ കോഴ്‌സ് തയ്യാറാക്കിയിരിക്കുന്നത്. അടിസ്ഥാന കാര്യങ്ങളിൽ നിന്ന് തുടങ്ങി നിങ്ങളെ പടിപടിയായി പഠിപ്പിക്കുന്നു.",
  },
  {
    q: "Classes live ആണോ? എപ്പോൾ കാണാം?",
    a: "അല്ല, ഇത് Fully Recorded സെഷനുകളാണ്. നിങ്ങളുടെ സ്വന്തം സമയക്രമം അനുസരിച്ച്, ഒഴിവുസമയങ്ങളിൽ എപ്പോൾ വേണമെങ്കിലും ക്ലാസ്സുകൾ കാണാനും പഠിക്കാനും സാധിക്കും.",
  },
  {
    q: "ലാൻഡ്‌ടോപ്പ് നിർബന്ധമാണോ അതോ ഫോണിൽ പഠിക്കാമോ?",
    a: "തുടക്കത്തിൽ ക്ലാസ്സുകൾ മനസ്സിലാക്കാൻ സ്മാർട്ട്‌ഫോൺ മതിയാകും. എന്നാൽ പ്രാക്ടിക്കൽ ആയി ചെയ്തുപഠിക്കാൻ ഒരു ബേസിക് ലാപ്ടോപ്പ് ഉണ്ടാവുന്നത് വളരെ നല്ലതാണ്.",
  },
  {
    q: "പഠിക്കുമ്പോൾ സംശയങ്ങൾ വന്നാൽ എന്ത് ചെയ്യും?",
    a: "നിങ്ങൾക്ക് ലഭിക്കുന്ന പ്രത്യേക WhatsApp ഗ്രൂപ്പ് വഴി സംശയങ്ങൾ ചോദിക്കാനും പരിഹരിക്കാനും സാധിക്കും.",
  },
  {
    q: "How much time should I spend daily?",
    a: "ദിവസവും 30 മുതൽ 45 മിനിറ്റ് വരെ മാറ്റിവെക്കുന്നത് വളരെ നല്ലതാണ്. എന്നാൽ ഇത് പൂർണ്ണമായും Recorded ആയതിനാൽ നിങ്ങൾക്ക് നിങ്ങളുടെ സമയത്തിനനുസരിച്ച് പഠിക്കാൻ സാധിക്കും.",
  },
  {
    q: "What should I do after completing this course?",
    a: "ഈ മാസ്റ്റർക്ലാസ് നിങ്ങളുടെ സൈബർ സെക്യൂരിറ്റി യാത്രയുടെ ശക്തമായ അടിത്തറയാണ് (Foundation). ഇതിന് ശേഷം നിങ്ങൾക്ക് Advanced ലെവൽ സർട്ടിഫിക്കേഷൻ കോഴ്സുകളിലേക്ക് കടക്കാം.",
  },
  {
    q: "Refund policy ഉണ്ടോ?",
    a: "This is a digital recorded course with instant access. Once access is provided, refunds cannot be issued. If you have any questions, please contact us on WhatsApp before enrolling.",
  },
];

// Mock Data for Sales Notifications
const BUYER_NAMES = [
  "Rahul M.",
  "Sneha T.",
  "Akhil P.",
  "Vishnu Das",
  "Kavya K.",
  "Ajay S.",
  "Meera V.",
  "Fasil K.",
  "Jithin C.",
  "Anjali R.",
];
const BUYER_LOCATIONS = [
  "Kochi",
  "Trivandrum",
  "Kozhikode",
  "Thrissur",
  "Malappuram",
  "Kannur",
  "Kollam",
  "Palakkad",
  "Kottayam",
  "Alappuzha",
];
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomTime = () => Math.floor(Math.random() * 59) + 1;

// --- COMPONENTS ---

export default function App() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    name: "",
    location: "",
    time: "",
  });

  // Custom Event Tracker for Meta Pixel
  const trackEvent = (eventName, params = {}) => {
    if (typeof window !== "undefined") {
      if (window.fbq) {
        window.fbq("trackCustom", eventName, params);
      } else {
        console.log(`[Meta Pixel Tracker] Event: ${eventName}`, params);
      }
    }
  };

  // SEO, Initial Pixels, Scroll Tracking & Notification Timer
  useEffect(() => {
    document.title =
      "30-Day Ethical Hacking Masterclass in Malayalam | QNAYDS Academy";
    trackEvent("ViewContent");

    // Scroll Tracking
    let scrolled25 = false,
      scrolled50 = false,
      scrolled75 = false,
      scrolled100 = false;
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      if (scrollPercent >= 25 && !scrolled25) {
        scrolled25 = true;
        trackEvent("ScrollDepth", { depth: "25%" });
      }
      if (scrollPercent >= 50 && !scrolled50) {
        scrolled50 = true;
        trackEvent("ScrollDepth", { depth: "50%" });
      }
      if (scrollPercent >= 75 && !scrolled75) {
        scrolled75 = true;
        trackEvent("ScrollDepth", { depth: "75%" });
      }
      if (scrollPercent >= 99 && !scrolled100) {
        scrolled100 = true;
        trackEvent("ScrollDepth", { depth: "100%" });
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Sales Notification Logic
    let isMounted = true;
    const triggerNotification = () => {
      if (!isMounted || activeVideoId) return;

      setNotification({
        show: true,
        name: getRandomElement(BUYER_NAMES),
        location: getRandomElement(BUYER_LOCATIONS),
        time: `${getRandomTime()} mins ago`,
      });
      setTimeout(() => {
        if (isMounted) setNotification((prev) => ({ ...prev, show: false }));
      }, 5000);
    };

    const initialTimeout = setTimeout(triggerNotification, 5000);
    const interval = setInterval(triggerNotification, 20000);

    return () => {
      isMounted = false;
      clearTimeout(initialTimeout);
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeVideoId]);

  const getCheckoutUrl = () => {
    const baseUrl =
      "https://qnayds.akamai.net.in/new-courses/7-30-days-hacking-course?activeTab=content";
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const utmString = urlParams.toString();
      return utmString ? `${baseUrl}&${utmString}` : baseUrl;
    }
    return baseUrl;
  };

  const handlePurchase = (location = "Unknown") => {
    trackEvent("InitiateCheckout", { button_location: location });
    window.location.href = getCheckoutUrl();
  };

  const handleWhatsAppContact = (context = "Floating Button") => {
    trackEvent("WhatsApp_Click", { context });

    const message =
      "Hi QNAYDS Team, I would like to know more about the 30-Day Ethical Hacking Masterclass.";

    window.open(
      `https://wa.me/919074871204?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const handleLeadCapture = (e, method) => {
    e.preventDefault();
    setLeadCaptured(true);
    trackEvent("Lead_Magnet_Download", { method });
    if (method === "WhatsApp") {
      window.open(
        "https://wa.me/919074871204?text=Hi%2C%20please%20send%20me%20the%20Free%20Ethical%20Hacking%20Starter%20Kit.",
        "_blank",
      );
    }
  };

  const CTATrustIndicators = () => (
    <div className="flex justify-center items-center gap-3 md:gap-4 mt-3 text-[11px] md:text-xs font-bold text-slate-500 flex-wrap">
      <span className="flex items-center gap-1">
        <CheckCircle2 size={12} className="text-blue-500" /> Instant Access
      </span>
      <span className="flex items-center gap-1">
        <Lock size={12} className="text-blue-500" /> Secure Payment
      </span>
      <span className="flex items-center gap-1">
        <Clock size={12} className="text-blue-500" /> Learn at Your Own Pace
      </span>
      <span className="flex items-center gap-1">
        <Shield size={12} className="text-blue-500" /> Beginner Friendly
      </span>
    </div>
  );

  const StickyTrustBar = () => (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 mb-2 max-w-4xl mx-auto">
      <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 text-xs font-bold shadow-sm">
        <Star className="text-amber-400 fill-amber-400" size={14} /> 4.6 Google
        Rating
      </div>
      <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 text-xs font-bold shadow-sm">
        <Users className="text-blue-500" size={14} /> 10,000+ Students
      </div>
      <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 text-xs font-bold shadow-sm">
        <FaWhatsapp className="text-green-500" size={14} /> WhatsApp Support
      </div>
    </div>
  );

  const VideoCard = ({ video }) => (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-xl shadow-blue-900/10 mb-6 flex flex-col group transition-transform hover:-translate-y-1">
      <div
        className="w-full h-137.5 relative cursor-pointer bg-slate-900"
        onClick={() => {
          setNotification((prev) => ({ ...prev, show: false }));
          setActiveVideoId(video.id);
          trackEvent("Video_Play", { video_id: video.id });
        }}
      >
        {activeVideoId === video.id ? (
          <>
            <button
              onClick={(e) => setActiveVideoId(null)}
              className="absolute top-2 right-2 z-20 bg-black/70 text-white px-2 py-1 rounded"
            >
              ✕
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
              title="Student Review"
              className="w-full h-full border-0 absolute inset-0 z-10"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </>
        ) : (
          <>
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt="Student Review Thumbnail"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity absolute inset-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-950/90 via-blue-900/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-600/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                <Play size={28} className="ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-6 left-4 right-4 text-center z-10">
              <span className="bg-white/95 text-blue-950 font-bold text-xs px-3 py-1.5 rounded-full shadow-lg">
                QNAYDS Student Review
              </span>
            </div>
          </>
        )}
      </div>
      <div className="p-4 text-center bg-blue-50/50 border-t border-blue-100 grow flex items-center justify-center">
        <p className="text-sm text-blue-950 font-medium leading-relaxed">
          {video.desc}
        </p>
      </div>
    </div>
  );

  const visibleVideos = showAllVideos ? ALL_VIDEOS : ALL_VIDEOS.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        
        body { font-family: 'Poppins', sans-serif; }
        
        @keyframes pulse-btn {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
          50% { transform: scale(1.02); box-shadow: 0 0 20px 0 rgba(37, 99, 235, 0.6); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
        }
        @keyframes blink-text {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-btn {
          animation: pulse-btn 2s infinite ease-in-out;
        }
        .animate-blink {
          animation: blink-text 1.5s infinite ease-in-out;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
      `,
        }}
      />

      {/* FLOATING WHATSAPP BUTTON */}
      <button
        onClick={() => handleWhatsAppContact("Floating Icon")}
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-100 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </button>

      {/* SALES NOTIFICATION POPUP (SOCIAL PROOF) */}
      <div
        className={`fixed bottom-24 md:bottom-8 left-4 md:left-8 z-90 bg-white border border-blue-100 rounded-xl shadow-2xl p-3 flex items-center gap-3 max-w-70 md:max-w-[320px] transition-all duration-500 ease-in-out transform ${notification.show ? "translate-x-0 opacity-100" : "translate-x-[150%] opacity-0"}`}
      >
        <div className="bg-green-100 p-2.5 rounded-full text-green-600 shrink-0 shadow-sm">
          <CheckCircle2 size={24} />
        </div>
        <div className="flex-1 min-w-0 pr-4">
          <p className="text-[11px] font-bold text-slate-400 mb-0.5 uppercase tracking-wide">
            {notification.name} from {notification.location}
          </p>
          <p className="text-sm font-bold text-blue-950 leading-tight">
            Purchased the Masterclass
          </p>
          <p className="text-[10px] text-blue-500 mt-1 font-semibold flex items-center gap-1">
            <Clock size={10} /> {notification.time}
          </p>
        </div>
        <button
          onClick={() => setNotification((prev) => ({ ...prev, show: false }))}
          className="absolute -top-2 -right-2 bg-white border border-slate-200 rounded-full p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-50 shadow-sm transition-colors"
          aria-label="Close notification"
        >
          <X size={14} />
        </button>
      </div>

      {/* SECTION 1: OFFER BAR */}
      <div className="sticky top-0 z-50 bg-blue-600 text-white font-bold px-4 py-3 text-center text-sm flex flex-col md:flex-row items-center justify-center gap-2 shadow-lg">
        <span className="flex items-center justify-center gap-2">
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-md animate-blink">
            🔥
          </span>
          SPECIAL LAUNCH OFFER:{" "}
          <span className="line-through opacity-70 ml-1">₹2,000</span> COURSE
          NOW AT ₹999
        </span>
      </div>

      {/* HEADER LOGO */}
      <header className="bg-white py-5 px-6 flex justify-center border-b border-blue-100 shadow-sm relative z-40">
        <img
          src={QnaydsLOgo}
          alt="QNAYDS Academy Logo"
          className="h-20 md:h-24 w-auto object-contain transition-transform hover:scale-105"
        />
      </header>
      {/* SECTION 2: HERO (PROBLEM + TRANSFORMATION) */}
      <section className="relative px-6 pt-12 pb-12 md:pt-16 md:pb-16 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-0 w-full h-full bg-linear-to-b from-blue-50 to-white -z-10"></div>

        <div className="relative z-10 w-full">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6 border border-blue-200">
            30-DAY HACKING MASTERCLASS
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-tight mb-4 tracking-tight">
            ഹാക്കിംഗ് പഠിക്കാൻ ആഗ്രഹമുണ്ടോ? <br className="hidden md:block" />{" "}
            എവിടെ തുടങ്ങണം എന്നറിയില്ലേ?
          </h1>

          <p className="text-lg md:text-2xl text-blue-700 font-bold max-w-3xl mx-auto mb-4 leading-relaxed px-4">
            30 ദിവസത്തിനുള്ളിൽ Cybersecurity confidently മനസ്സിലാക്കി Ethical
            Hacking-ന്റെ ശക്തമായ Foundation Build ചെയ്യാം.
          </p>

          <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl mx-auto mb-8">
            Designed by experienced cybersecurity trainers and trusted by more
            than 10,000 students across Kerala.
          </p>

          <StickyTrustBar />

          <div className="bg-white border-2 border-blue-500 rounded-3xl p-6 md:p-8 max-w-md mx-auto shadow-2xl relative overflow-hidden mt-6">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-md">
              SAVE ₹1,001
            </div>

            <h3 className="font-bold text-blue-950 text-lg mb-4 text-left border-b border-slate-100 pb-3">
              Course Value Stack:
            </h3>
            <ul className="text-left space-y-2 mb-6">
              {[
                "30-Day Recorded Masterclass",
                "Lifetime Recorded Access",
                "WhatsApp Group Support",
                "100% Malayalam Explanation",
                "Beginner Friendly Path",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-slate-700 font-medium"
                >
                  <CheckCircle2 size={16} className="text-blue-500" /> {item}
                </li>
              ))}
            </ul>

            <div className="flex items-end justify-center gap-3 mb-5 border-t border-slate-100 pt-5">
              <div className="text-slate-500 font-bold mb-1 uppercase text-xs tracking-wider flex flex-col items-end">
                <span>Regular Price</span>
                <span className="line-through text-lg">₹2,000</span>
              </div>
              <div className="text-5xl font-black text-blue-950 flex flex-col items-start leading-none">
                <span className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">
                  Today
                </span>
                ₹999
              </div>
            </div>

            <button
              onClick={() => handlePurchase("Hero Box")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-lg py-4 md:py-5 px-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] mb-2 flex items-center justify-center gap-2 animate-pulse-btn"
            >
              {PRIMARY_CTA_TEXT} <ArrowRight size={20} className="shrink-0" />
            </button>
            <CTATrustIndicators />
          </div>
        </div>
      </section>

      {/* SECTION 3: EXTERNAL & INTERNAL PAIN POINTS */}
      <section className="py-12 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center text-blue-950 mb-10 leading-tight">
            Still trying to learn hacking from random YouTube videos?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100">
              <h3 className="font-bold text-red-900 mb-4 border-b border-red-200 pb-2">
                The Struggle is Real
              </h3>
              <ul className="space-y-3">
                {[
                  "Too many confusing tutorials",
                  "No proper step-by-step roadmap",
                  "English terms are difficult to grasp",
                  "No mentor to ask doubts",
                ].map((pain, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-slate-700 font-medium text-sm"
                  >
                    <XCircle
                      className="text-red-400 shrink-0 mt-0.5"
                      size={18}
                    />{" "}
                    {pain}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">
                Internal Doubts
              </h3>
              <ul className="space-y-3">
                {[
                  '"Cybersecurity എനിക്ക് പഠിക്കാൻ പറ്റുമോ?"',
                  '"Technical background ഇല്ലാത്തതുകൊണ്ട് സാധിക്കില്ലേ?"',
                  '"ഞാൻ തുടങ്ങാൻ വൈകിപ്പോയോ?"',
                  '"Hacking വളരെ difficult ആണെന്ന് തോന്നുന്നു."',
                ].map((doubt, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-slate-700 font-medium text-sm italic"
                  >
                    <AlertCircle
                      className="text-slate-400 shrink-0 mt-0.5"
                      size={18}
                    />{" "}
                    {doubt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PHILOSOPHICAL PROBLEM / SOLUTION (THE GUIDE) */}
      <section className="py-10 bg-blue-950 text-white px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <QuoteIcon className="mx-auto text-blue-500/50 mb-4" />
          <h2 className="text-xl md:text-2xl font-bold mb-4 leading-relaxed">
            Cybersecurity പഠിക്കാൻ എല്ലാവർക്കും അവസരം ലഭിക്കണം.{" "}
            <br className="hidden md:block" />
            <span className="text-blue-400">
              English അറിയാത്തതുകൊണ്ട് ഒരാളും പിന്നിൽ പോകാൻ പാടില്ല.
            </span>
          </h2>
          <p className="text-blue-200 font-medium text-sm max-w-2xl mx-auto">
            We remove the confusion, provide a clear roadmap, and teach you in
            Malayalam so you can focus on building skills, not struggling with
            language.
          </p>
        </div>
      </section>

      {/* SECTION 5: VISUAL GOOGLE TRUST */}
      <section className="py-12 bg-slate-50 px-6 border-b border-slate-200">
        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="bg-white p-2 rounded-full shadow-md border border-slate-200">
              <FaGoogle className="text-[#4285F4] text-2xl" />
            </div>

            <div className="text-left">
              <h3 className="text-blue-950 font-black text-xl leading-none">
                Google Reviews
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-1">
                Trusted by Thousands of Students
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="text-5xl font-black text-blue-950 leading-none">
              4.6
            </span>
            <div className="flex flex-col items-start">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i === 4 ? "url(#half-grad)" : "currentColor"}
                    className={i === 4 ? "text-slate-200" : ""}
                  />
                ))}
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="half-grad">
                      <stop offset="60%" stopColor="#fbbf24" />
                      <stop offset="60%" stopColor="currentColor" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-xs font-bold text-slate-500 mt-1">
                Based on 1.4K+ Reviews
              </span>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href={GOOGLE_REVIEW_URL}
              onClick={() => trackEvent("Google_Review_Click")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-blue-200 rounded-full shadow-sm hover:shadow-md text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaGoogle className="text-[#4285F4] text-lg" />
              Read Google Reviews
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6: VALUE PROPOSITION */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-blue-950">
            How The Masterclass Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-blue-100 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
              <BookOpen size={32} />
            </div>
            <h3 className="text-lg font-bold text-blue-950 mb-2">
              Structured Learning
            </h3>
            <p className="text-slate-600 text-sm font-medium">
              Learn step-by-step without confusion.
            </p>
          </div>
          <div className="bg-white border border-blue-100 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-lg font-bold text-blue-950 mb-2">
              Practical Knowledge
            </h3>
            <p className="text-slate-600 text-sm font-medium">
              Understand real cybersecurity concepts.
            </p>
          </div>
          <div className="bg-white border border-blue-100 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
              <span className="font-black text-2xl">മ</span>
            </div>
            <h3 className="text-lg font-bold text-blue-950 mb-2">
              Beginner Friendly
            </h3>
            <p className="text-slate-600 text-sm font-medium">
              Designed specifically for Malayalam learners.
            </p>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={() => handlePurchase("How It Works Section")}
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-colors"
          >
            {PRIMARY_CTA_TEXT}
          </button>
          <CTATrustIndicators />
        </div>
      </section>

      {/* SECTION 7: COURSE PLATFORM PREVIEW */}
      <section className="py-12 bg-slate-900 text-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              Inside The Learning Platform
            </h2>
            <p className="text-blue-300 font-medium">
              Everything you need to succeed, accessible from your phone or
              laptop.
            </p>
          </div>

          <div className="bg-slate-950 rounded-xl border border-slate-800 p-1 shadow-2xl overflow-hidden max-w-4xl mx-auto">
            {/* Fake Browser header */}
            <div className="flex items-center gap-2 p-3 bg-slate-900 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              <div className="ml-4 bg-slate-800 text-slate-400 text-xs px-3 py-1 rounded-md flex-1 text-center font-mono">
                academy.qnayds.com/dashboard
              </div>
            </div>
            {/* Body */}
            <div className="p-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900/50">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center flex flex-col items-center justify-center gap-3">
                <LayoutDashboard size={32} className="text-blue-400" />
                <span className="font-bold text-sm">Course Dashboard</span>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center flex flex-col items-center justify-center gap-3">
                <MonitorPlay size={32} className="text-blue-400" />
                <span className="font-bold text-sm">Recorded Lessons</span>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center flex flex-col items-center justify-center gap-3">
                <TrendingUp size={32} className="text-blue-400" />
                <span className="font-bold text-sm">Progress Tracking</span>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center flex flex-col items-center justify-center gap-3">
                <FaWhatsapp size={32} className="text-[#25D366]" />
                <span className="font-bold text-sm">WhatsApp Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: MEET YOUR TRAINER (AUTHORITY + EMPATHY) */}
      <section className="py-12 bg-blue-50 px-6 border-y border-blue-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-blue-950">
              Meet Your Guide
            </h2>
          </div>

          <div className="bg-white border border-blue-100 p-6 md:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-xl shadow-blue-900/5">
            {/* Trainer Avatar */}
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
              <img
                src={Alan_sir}
                alt="Alan Sir - Senior Cybersecurity Trainer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://ui-avatars.com/api/?name=Alan+Sir&background=2563eb&color=fff&size=512&font-size=0.33";
                }}
              />
            </div>

            {/* Trainer Details */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-2">
                Alan Sir
              </h3>
              <p className="text-blue-600 font-bold text-lg mb-6">
                Senior Cybersecurity Trainer
              </p>

              <ul className="grid sm:grid-cols-2 gap-4 mb-8 text-sm">
                <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <Award className="text-amber-500 shrink-0" size={20} />
                  <span className="font-bold text-slate-700">
                    CEH Certified
                  </span>
                </li>
                <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <Shield className="text-amber-500 shrink-0" size={20} />
                  <span className="font-bold text-slate-700">
                    CompTIA Security+
                  </span>
                </li>
                <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <Users className="text-blue-500 shrink-0" size={20} />
                  <span className="font-bold text-slate-700">
                    5,000+ Students Trained
                  </span>
                </li>
                <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <Briefcase className="text-blue-500 shrink-0" size={20} />
                  <span className="font-bold text-slate-700">
                    8+ Years Experience
                  </span>
                </li>
              </ul>

              {/* Empathy Statement - Bulleted for scanning */}
              <div className="bg-blue-50/50 border-l-4 border-blue-500 p-4 rounded-r-lg text-slate-700 text-sm font-medium">
                <p className="mb-2 italic">
                  "We understand how confusing cybersecurity feels when starting
                  from zero."
                </p>
                <ul className="space-y-1">
                  <li>
                    •{" "}
                    <strong className="text-blue-900">
                      Most resources are overly technical and in English.
                    </strong>
                  </li>
                  <li>
                    •{" "}
                    <strong className="text-blue-900">
                      This course is completely in Malayalam
                    </strong>{" "}
                    to make your journey smooth.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: 3-STEP PLAN */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-center text-blue-950 mb-10">
          Your Simple 3-Step Plan
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-blue-100 -z-10"></div>

          <div className="relative">
            <div className="w-16 h-16 mx-auto bg-blue-600 text-white font-black text-2xl rounded-full flex items-center justify-center mb-4 shadow-lg ring-8 ring-white">
              1
            </div>
            <h3 className="font-bold text-blue-950 text-lg mb-2">Enroll</h3>
            <p className="text-sm text-slate-600 font-medium">
              Complete your registration securely.
            </p>
          </div>

          <div className="relative">
            <div className="w-16 h-16 mx-auto bg-blue-600 text-white font-black text-2xl rounded-full flex items-center justify-center mb-4 shadow-lg ring-8 ring-white">
              2
            </div>
            <h3 className="font-bold text-blue-950 text-lg mb-2">Learn</h3>
            <p className="text-sm text-slate-600 font-medium">
              Watch structured recorded sessions anytime.
            </p>
          </div>

          <div className="relative">
            <div className="w-16 h-16 mx-auto bg-blue-600 text-white font-black text-2xl rounded-full flex items-center justify-center mb-4 shadow-lg ring-8 ring-white">
              3
            </div>
            <h3 className="font-bold text-blue-950 text-lg mb-2">Practice</h3>
            <p className="text-sm text-slate-600 font-medium">
              Build your cybersecurity foundation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: IMAGINE YOURSELF AFTER 30 DAYS (TRANSFORMATION) */}
      <section className="py-12 bg-blue-950 text-white px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8 text-white">
            Imagine Yourself One Month From Now
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
            {[
              "Understanding Ethical Hacking concepts clearly",
              "Understanding Wi-Fi & Smartphone Security",
              "Understanding Cybersecurity terminology",
              "Learning confidently in Malayalam",
              "Building a strong cybersecurity foundation",
              "Protecting yourself & others online",
            ].map((outcome, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2
                  className="text-blue-400 shrink-0 mt-0.5"
                  size={20}
                />
                <span className="font-medium text-blue-50">{outcome}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => handlePurchase("Transformation Section")}
              className="bg-white text-blue-950 font-black py-4 px-8 md:px-12 rounded-xl shadow-lg hover:bg-blue-50 transition-colors text-lg animate-pulse-btn"
            >
              {PRIMARY_CTA_TEXT}
            </button>
            <CTATrustIndicators />
          </div>
        </div>
      </section>

      {/* SECTION 11: STUDENT SUCCESS STORY (BEFORE / AFTER) */}
      <section className="py-12 bg-slate-50 border-b border-slate-200 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center text-blue-950 mb-8">
            Student Transformation
          </h2>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6 md:p-8 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="flex items-center gap-2 text-slate-500 font-bold mb-4 uppercase text-xs tracking-wider">
                <XCircle size={16} /> Before Learning
              </div>
              <p className="text-slate-700 italic font-medium leading-relaxed">
                "I used to watch random YouTube videos about hacking but never
                understood the core concepts. The technical English terms were
                too hard, and I didn't know where to actually start."
              </p>
            </div>
            <div className="md:w-1/2 p-6 md:p-8 bg-blue-50">
              <div className="flex items-center gap-2 text-blue-600 font-bold mb-4 uppercase text-xs tracking-wider">
                <CheckCircle2 size={16} /> After The Masterclass
              </div>
              <p className="text-blue-950 font-bold leading-relaxed">
                "Everything clicked! Learning in Malayalam made complex topics
                so easy. Now I have a clear, structured foundation in Ethical
                Hacking and know exactly how to progress my career."
              </p>
              <p className="text-sm text-blue-500 mt-4 font-bold">
                — Akhil P., Recent Student
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: REAL STUDENT REVIEWS */}
      <section className="py-12 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-blue-950 mb-4">
              Real Student Experiences
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {!showAllVideos && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllVideos(true)}
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full border-2 border-blue-100 hover:border-blue-300 transition-colors"
              >
                View More Student Reviews
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 13: WHAT YOU WILL MASTER (SYLLABUS) */}
      <section className="py-12 bg-slate-50 px-6 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-blue-950 text-center mb-8">
            What You Will Master
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SYLLABUS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col items-center text-center shadow-sm hover:border-blue-300 transition-colors"
                >
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600 shadow-sm mb-3">
                    <Icon size={24} />
                  </div>
                  <span className="text-sm text-slate-800 font-bold">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 14: WHO IS THIS FOR & NOT FOR */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Who is it for */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-blue-100 shadow-sm">
            <h3 className="text-xl font-black text-blue-950 mb-6 flex items-center gap-2">
              <ThumbsUp className="text-blue-500" /> Who Is This Course For?
            </h3>
            <ul className="space-y-4 mb-6">
              {[
                "College, Degree & Engineering Students",
                "Working Professionals & Job Seekers",
                "Beginners interested in Cybersecurity",
                "Anyone wanting to learn in Malayalam",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>{" "}
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 text-blue-800 p-3 rounded-lg text-sm font-bold border border-blue-100">
              * No previous hacking experience required.
            </div>
          </div>

          {/* Who is it NOT for */}
          <div className="bg-red-50/30 p-8 rounded-3xl border border-red-100 shadow-sm">
            <h3 className="text-xl font-black text-red-950 mb-6 flex items-center gap-2">
              <UserX className="text-red-500" /> This Course Is NOT For You
              If...
            </h3>
            <ul className="space-y-4 mb-6">
              {[
                "You are expecting advanced Penetration Testing.",
                "You are looking for illegal hacking methods.",
                "You are unwilling to practice what you learn.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-700 font-medium"
                >
                  <XCircle className="text-red-400 shrink-0 mt-1" size={16} />{" "}
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-slate-50 text-slate-600 p-3 rounded-lg text-xs font-medium border border-slate-100">
              We focus strictly on ethical, foundational education.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15: WHY QNAYDS IS DIFFERENT (COMPARISON) */}
      <section className="py-12 bg-slate-50 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center text-blue-950 mb-8">
            Why QNAYDS Is Different
          </h2>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
            <div className="grid grid-cols-2 bg-slate-100 border-b border-slate-200">
              <div className="p-4 md:p-6 text-center font-bold text-slate-500">
                Traditional Learning
              </div>
              <div className="p-4 md:p-6 text-center font-black text-blue-700 bg-blue-50">
                QNAYDS Academy
              </div>
            </div>

            {[
              { t: "English Only", q: "100% Malayalam" },
              { t: "No Proper Roadmap", q: "Structured Learning" },
              { t: "No Support", q: "WhatsApp Support" },
              { t: "Unverified Creators", q: "Experienced Trainer" },
              { t: "Random YouTube Videos", q: "Organized Recorded Sessions" },
            ].map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-2 border-b border-slate-100 last:border-0"
              >
                <div className="p-4 flex items-center justify-center gap-2 text-slate-500 text-sm font-medium text-center">
                  <X className="text-red-300 shrink-0" size={16} /> {row.t}
                </div>
                <div className="p-4 flex items-center justify-center gap-2 text-blue-950 font-bold bg-blue-50/30 text-center text-sm">
                  <Check className="text-blue-500 shrink-0" size={18} /> {row.q}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 16: PARTNERS */}
      <section className="py-12 bg-white px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
            Recognized & Approved By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="font-black text-slate-700 text-lg md:text-xl flex items-center gap-2">
              <Shield size={24} /> AICTE Recognised
            </div>
            <div className="font-black text-slate-700 text-lg md:text-xl flex items-center gap-2">
              <Award size={24} /> MSME Approved
            </div>
            <div className="font-black text-slate-700 text-lg md:text-xl flex items-center gap-2">
              <Cpu size={24} /> Kerala Startup Mission
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 17: TRANSITIONAL CTA (LEAD CAPTURE) */}
      <section className="py-12 bg-blue-600 text-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Download size={40} className="mx-auto mb-4 text-blue-200" />
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Not ready to start yet?
          </h2>
          <p className="text-blue-100 mb-6 font-medium">
            Download our{" "}
            <strong className="text-white">
              Free Ethical Hacking Starter Kit
            </strong>{" "}
            and see exactly how to start your journey.
          </p>

          <ul className="text-blue-100 text-sm mb-8 flex flex-wrap justify-center gap-4 font-medium">
            <li>• Learning Roadmap</li>
            <li>• Beginner Tool List</li>
            <li>• Career Guide</li>
            <li>• Learning Checklist</li>
          </ul>

          {!leadCaptured ? (
            <form
              onSubmit={(e) => handleLeadCapture(e, "Email")}
              className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="px-4 py-3 rounded-lg text-slate-800 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-3 px-6 rounded-lg whitespace-nowrap transition-colors"
              >
                Send via Email
              </button>
              {/* WhatsApp Lead Option */}
              <button
                type="button"
                onClick={(e) => handleLeadCapture(e, "WhatsApp")}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-lg whitespace-nowrap transition-colors flex items-center justify-center gap-2"
              >
                Get via WhatsApp
              </button>
            </form>
          ) : (
            <div className="bg-blue-800/50 p-4 rounded-xl border border-blue-500 inline-block">
              <p className="font-bold flex items-center gap-2">
                <CheckCircle2 className="text-green-400" /> Awesome! Check your
                inbox/WhatsApp shortly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 18: FAQ */}
      <section className="py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-center text-blue-950 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-blue-100 rounded-xl overflow-hidden transition-all shadow-sm"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-blue-950 font-bold hover:bg-blue-50"
                onClick={() => {
                  setActiveFaq(activeFaq === idx ? null : idx);
                  if (activeFaq !== idx)
                    trackEvent("FAQ_Open", { question: faq.q });
                }}
              >
                <span className="pr-4">{faq.q}</span>
                {activeFaq === idx ? (
                  <ChevronUp size={18} className="text-blue-600 shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-slate-400 shrink-0" />
                )}
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-5 text-sm text-slate-600 font-medium leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 19: LOW-RISK PRE-PURCHASE & FINAL OFFER */}
      <section className="py-12 md:py-20 px-6 bg-linear-to-b from-slate-50 to-white text-center relative border-t border-slate-200">
        <div className="max-w-2xl mx-auto">
          <div className="bg-blue-50 text-blue-800 p-6 rounded-2xl mb-10 border border-blue-100">
            <HeartHandshake className="mx-auto mb-3 text-blue-500" size={32} />
            <p className="font-medium text-sm">
              If you're unsure whether this course is right for you, contact our
              team on WhatsApp before enrolling. We'll help you determine
              whether this course matches your goals.
            </p>
            <button
              onClick={() => handleWhatsAppContact("Pre-purchase Support Box")}
              className="inline-block mt-4 text-blue-600 font-bold hover:underline cursor-pointer"
            >
              Chat with our team
            </button>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-blue-950 mb-4 leading-tight">
            Your Cybersecurity Journey Starts Today.
          </h2>
          <p className="text-lg text-slate-600 font-bold mb-8">
            Become someone who understands Cybersecurity with confidence instead
            of depending on random YouTube videos.
          </p>

          <StickyTrustBar />

          <div className="bg-white border-2 border-blue-500 p-8 rounded-3xl shadow-2xl mb-8 relative mt-6">
            <h3 className="text-xl font-black text-blue-950 mb-4">
              30-Day Hacking Masterclass
            </h3>

            <div className="mb-6">
              <span className="text-slate-400 line-through mr-3 font-bold">
                ₹2,000
              </span>
              <span className="text-6xl font-black text-blue-950">₹999</span>
            </div>

            <button
              onClick={() => handlePurchase("Final Offer Box")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xl py-5 px-6 rounded-xl transition-transform transform hover:scale-[1.02] shadow-[0_0_30px_rgba(37,99,235,0.4)] flex justify-center items-center gap-2 animate-pulse-btn mb-3"
            >
              {PRIMARY_CTA_TEXT} <ArrowRight size={24} className="shrink-0" />
            </button>
            <CTATrustIndicators />
          </div>
        </div>
      </section>

      {/* SECTION 20: ABOUT QNAYDS */}
      <section className="py-10 bg-slate-100 px-6 border-t border-slate-200 text-center">
        <div className="max-w-xl mx-auto">
          <h3 className="text-blue-950 font-black text-lg mb-2">
            Created by QNAYDS Academy
          </h3>
          <p className="text-slate-600 font-medium text-sm">
            Helping 10,000+ students begin their cybersecurity journey through
            practical Malayalam training.
          </p>
        </div>
      </section>

      {/* SECTION 21: STICKY MOBILE BUY BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 sm:p-4 z-50 flex justify-between items-center gap-3 pb-safe shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <div className="shrink-0 pl-1">
          <div className="text-slate-400 text-xs line-through font-bold">
            ₹2,000
          </div>
          <div className="text-blue-950 font-black text-xl sm:text-2xl leading-none">
            ₹999
          </div>
        </div>
        <button
          onClick={() => handlePurchase("Mobile Sticky Bar")}
          className="flex-1 bg-blue-600 text-white font-black py-3 px-2 rounded-xl active:scale-95 transition-transform shadow-lg shadow-blue-500/30 text-xs sm:text-sm text-center"
        >
          GET INSTANT ACCESS
        </button>
      </div>

      {/* FOOTER */}
      <footer className="py-10 px-6 bg-slate-900 text-slate-400 text-center text-sm pb-32 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <p className="font-bold mb-4 text-white flex justify-center items-center gap-2">
            Need Help?{" "}
            <button
              onClick={() => handleWhatsAppContact("Footer Link")}
              className="text-blue-400 hover:underline flex items-center gap-1"
            >
              <FaWhatsapp size={16} /> WhatsApp Us
            </button>
          </p>
          <p className="mb-6">
            © {new Date().getFullYear()} QNAYDS ACADEMY. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-medium">
            <a
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/refund-policy"
              className="hover:text-white transition-colors"
            >
              Refund Policy
            </a>
            <a href="/contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div className="mt-8 text-xs text-slate-500 max-w-lg mx-auto">
            <p>
              This is a digital recorded course with instant access. Once access
              is provided, refunds cannot be issued. If you have any questions,
              please contact us on WhatsApp before enrolling.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Minimal icon for philosophical section
function QuoteIcon(props) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
