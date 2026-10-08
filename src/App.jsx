import { useState, useEffect } from "react";
import QnaydsLOgo from "../src/assets/QNAYDS_LOGO.png";
import Alan_sir from "../src/assets/Alan_sir.webp";
import CheckoutModal from "./components/CheckoutModal";
import {
  CheckCircle2,
  Play,
  Star,
  ChevronDown,
  ChevronUp,
  UserX,
  ArrowRight,
  Users,
  ThumbsUp,
  Download,
  XCircle,
  ExternalLink,
  CreditCard,
  MailCheck,
  GraduationCap,
  LayoutDashboard,
  MonitorPlay,
  TrendingUp,
  Shield,
  Award,
  Cpu,
  Clock,
  X,
  ShieldAlert,
} from "lucide-react";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";
import Intro from "./assets/Intro.MP4";
import thumbnail from "./assets/thumbnail.webp";
import CourseSyllabus from "./components/CourseSyllabus";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const COURSE_ID = import.meta.env.VITE_COURSE_ID;
const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY;

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LC4oL8ozK88yYLRSNagwTko0T01LTk60SDZKM0pMszKoSEoxNbawsDRPskgxNzYxSfJiK8xLrEwpBgBZoBMV&q=qnayds&rlz=1CDGOYI_enIN1209IN1210&oq=qnayds&gs_lcrp=EgZjaHJvbWUqEggFEC4YJxivARjHARi6AhiOBTIGCAAQRRg8MgYIARBFGDwyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDwyEggFEC4YJxivARjHARi6AhiOBTIGCAYQRRg7MgkIBxBFGDsYgAQyCQgIEEUYOxiABDIHCAkQABiABNIBCDIwMDFqMGo3qAIasAIB4gMEGAEgX_EFMiM1YNrxwWTxBTIjNWDa8cFk&hl=en-GB&sourceid=chrome-mobile&ie=UTF-8#ebo=0&mpd=~3379620392164112321/customers/reviews";

// Live Sales & Purchase Notification Data
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
  "Nikhil B.",
  "Arjun V.",
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
const getRandomTime = () => Math.floor(Math.random() * 45) + 2;

// Real Malayalam Student Videos
const ALL_VIDEOS = [
  {
    id: "dSWuXMFdOaQ",
    name: "Fukri",
    role: "CEO, Fukri Smart Solutions",
    desc: "Fukri Smart Solutions CEO Fukri-യുടെ experience. ആദ്യം അദ്ദേഹം ഈ course friend-ന് recommend ചെയ്തു, പിന്നീട് course-ന്റെ quality കണ്ടിട്ട് himself join ചെയ്തു.",
  },
  {
    id: "oO2m4N7rkjc",
    name: "Student Review",
    role: "Student",
    desc: "Hacking പഠിക്കാൻ ആഗ്രഹിക്കുന്ന beginners-ന് ഈ course വളരെ useful ആണെന്ന് student പറയുന്നു.",
  },
  {
    id: "vILn-_i2n5U",
    name: "Student Review",
    role: "Student",
    desc: "Complex Cybersecurity topics പോലും simple Malayalam explanations ഉപയോഗിച്ച് easy ആയി മനസ്സിലാക്കാം.",
  },
  {
    id: "mcGd31D19Xo",
    name: "Student Review",
    role: "Working Professional",
    desc: "Recorded classes ആയതിനാൽ സ്വന്തം free time-ൽ job-നൊപ്പം പഠിക്കാൻ കഴിഞ്ഞ experience.",
  },
  {
    id: "U-9r2GyKZ0s",
    name: "Student Review",
    role: "Student",
    desc: "WhatsApp Group-ൽ കിട്ടുന്ന quick doubt support വളരെ helpful ആയിരുന്നു എന്ന് student പറയുന്നു.",
  },
  {
    id: "XflR50c2TvA",
    name: "Student Review",
    role: "Student",
    desc: "Cybersecurity-യിലെ പുതിയ കാര്യങ്ങൾ theory മാത്രം അല്ലാതെ practical ആയി മനസ്സിലാക്കാൻ ഈ course ഏറെ സഹായിച്ചു.",
  },
  {
    id: "TZmmOn7nkfE",
    name: "Student Review",
    role: "Student",
    desc: "Affordable price-ൽ ഇത്രയും valuable ആയ course നൽകുന്നതിന് QNAYDS Academy-ക്ക് നന്ദി.",
  },
  {
    id: "9_Q4-pjZbn0",
    name: "Student Review",
    role: "Student",
    desc: "എല്ലാ classes-ും clear & simple ആണ്. Interest ഉള്ള ഏത് beginner-നും confidently join ചെയ്യാം.",
  },
  {
    id: "Qi05xOMa2m4",
    name: "Student Review",
    role: "Beginner",
    desc: "Previous experience ഇല്ലാത്ത beginners-നും easy ആയി മനസ്സിലാകുന്ന രീതിയിലാണ് classes design ചെയ്തിരിക്കുന്നത്.",
  },
];

// Curated FAQs with Refund Answer open by default & typo fixed
const FAQS = [
  {
    q: "Refund policy ഉണ്ടോ?",
    a: "ഇത് instant access ലഭിക്കുന്ന digital course ആയതിനാൽ payment കഴിഞ്ഞാൽ refund ലഭ്യമല്ല. Join ചെയ്യുന്നതിന് മുമ്പ് course സംബന്ധിച്ച doubts WhatsApp വഴി ചോദിക്കാം.",
  },
  {
    q: "Hacking-ൽ previous experience വേണമോ?",
    a: "ഒട്ടും ആവശ്യമില്ല. Computer & smartphone basic ആയി use ചെയ്യാൻ അറിയുന്ന beginners-നും easy ആയി മനസ്സിലാകുന്ന രീതിയിലാണ് syllabus തയ്യാറാക്കിയിരിക്കുന്നത്.",
  },
  {
    q: "Classes live ആണോ? എപ്പോഴാണ് കാണാൻ കഴിയുക?",
    a: "അല്ല, ഇത് 100% recorded sessions ആണ് (Lifetime Access). നിങ്ങളുടെ convenience അനുസരിച്ച് എപ്പോൾ വേണമെങ്കിലും classes കാണാം.",
  },
  {
    q: "Laptop നിർബന്ധമാണോ, phone-ൽ പഠിക്കാമോ?",
    a: "Classes മനസ്സിലാക്കാൻ തുടക്കത്തിൽ smartphone മതിയാകും. Practical ആയി practice ചെയ്യാൻ ഒരു basic laptop ഉണ്ടെങ്കിൽ കൂടുതൽ നല്ലതാണ്.",
  },
  {
    q: "Learning സമയത്ത് doubts വന്നാൽ എന്ത് ചെയ്യും?",
    a: "നിങ്ങൾക്ക് ലഭിക്കുന്ന dedicated WhatsApp Group വഴി doubts ചോദിക്കാനും clear ചെയ്യാനും സാധിക്കും.",
  },
  {
    q: "Daily എത്ര സമയം മാറ്റിവെക്കണം?",
    a: "Daily 30–45 minutes മാറ്റിവെച്ചാൽ 30 days-ൽ course complete ചെയ്യാം. Busy days-ൽ നിങ്ങളുടെ convenience അനുസരിച്ച് pace adjust ചെയ്യാം.",
  },
  {
    q: "Course complete ചെയ്താൽ Certificate ലഭിക്കുമോ?",
    a: "അതെ, Masterclass complete ചെയ്യുന്നവർക്ക് verified Course Certificate ലഭിക്കും.",
  },
  {
    q: "ഈ course കഴിഞ്ഞാൽ എന്ത് ചെയ്യാം?",
    a: "ഈ Masterclass നിങ്ങളുടെ Cybersecurity journey-യുടെ strong Foundation ആണ്. ഇതിന് ശേഷം Advanced-level certification courses-ലേക്ക് move ചെയ്യാം.",
  },
];

// Section 2 Item 8: Every blue button trust text
function ButtonTrustIndicators() {
  return (
    <div className="flex justify-center items-center gap-2 md:gap-3 mt-2.5 text-[11px] md:text-xs font-semibold text-slate-500 flex-wrap text-center">
      <span>Instant Access</span>
      <span>•</span>
      <span>Secure Payment</span>
      <span>•</span>
      <span>Learn at Your Own Pace</span>
      <span>•</span>
      <span>Beginner Friendly</span>
    </div>
  );
}

function VideoCard({ video, activeVideoId, onPlay, onClose }) {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-lg shadow-blue-900/5 mb-6 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className="w-full h-112 md:h-128 relative cursor-pointer bg-slate-950"
        onClick={onPlay}
      >
        {activeVideoId === video.id ? (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-3 right-3 z-30 bg-black/80 text-white px-3 py-1.5 rounded-full text-xs font-bold hover:bg-black transition cursor-pointer"
            >
              ✕ Close
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
              alt="Student Review"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity absolute inset-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/40">
                <Play size={26} className="ml-1 fill-white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-center z-10">
              <span className="bg-white/95 text-blue-950 font-black text-xs px-3.5 py-1.5 rounded-full shadow-md">
                ▶ {video.name} • {video.role}
              </span>
            </div>
          </>
        )}
      </div>
      <div className="p-4 text-center bg-blue-50/40 border-t border-blue-100 grow flex items-center justify-center">
        <p className="text-xs md:text-sm text-slate-800 font-medium leading-relaxed">
          "{video.desc}"
        </p>
      </div>
    </div>
  );
}

function QuoteIcon(props) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export default function App() {
  // Refund FAQ is open by default as requested in PDF Section 2 & 3
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    name: "",
    location: "",
    time: "",
  });

  const [checkoutData, setCheckoutData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  // Meta Pixel Tracker
  const trackEvent = (eventName, params = {}) => {
    if (typeof window !== "undefined") {
      if (window.fbq) {
        window.fbq("trackCustom", eventName, params);
      } else {
        console.log(`[Meta Pixel Tracker] Event: ${eventName}`, params);
      }
    }
  };

  useEffect(() => {
    document.title =
      "30-Day Ethical Hacking Masterclass | QNAYDS Academy";
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

    // Live Sales / Purchase Notification Logic
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

    const initialTimeout = setTimeout(triggerNotification, 4000);
    const interval = setInterval(triggerNotification, 18000);

    return () => {
      isMounted = false;
      clearTimeout(initialTimeout);
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeVideoId]);

  const handleCheckout = async () => {
    if (!checkoutData.name.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!checkoutData.email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(checkoutData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!checkoutData.phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    const phone = checkoutData.phone.replace(/\D/g, "");
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);

      if (window.fbq) {
        window.fbq("init", "1605940110959444", {
          em: checkoutData.email,
          ph: phone,
        });

        window.fbq("track", "InitiateCheckout", {
          value: 999,
          currency: "INR",
        });
      }

      const { data } = await axios.post(`${API_URL}/landing/create-order`, {
        name: checkoutData.name,
        email: checkoutData.email,
        phone,
        courseId: COURSE_ID,
      });

      setLoading(false);
      setShowCheckout(false);
      openRazorpay(data.data);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert(
        error.response?.data?.message ||
          "Unable to create your order. Please try again.",
      );
    }
  };

  const openRazorpay = (paymentData) => {
    const options = {
      key: RAZORPAY_KEY || import.meta.env.VITE_RAZORPAY_KEY,
      amount: paymentData.order.amount,
      currency: paymentData.order.currency,
      name: "QNAYDS Academy",
      description: paymentData.course.title,
      order_id: paymentData.order.id,
      prefill: {
        name: paymentData.student.name,
        email: paymentData.student.email,
        contact: checkoutData.phone,
      },
      theme: {
        color: "#2563eb",
      },
      handler: async function (response) {
        try {
          await axios.post(`${API_URL}/payments/verify`, {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (window.fbq) {
            window.fbq("track", "Purchase", {
              value: 999,
              currency: "INR",
              content_name: "30-Day Ethical Hacking Masterclass",
            });
          }

          if (window.gtag) {
            window.gtag("event", "purchase", {
              transaction_id: response.razorpay_payment_id,
              value: 999,
              currency: "INR",
              items: [{ item_name: "30-Day Ethical Hacking Masterclass", price: 999 }],
            });
          }

          alert(
            "Payment successful! Please check your email to activate your account.",
          );
        } catch (error) {
          console.error(error);
          alert(
            error.response?.data?.message || "Payment verification failed.",
          );
        }
      },
      modal: {
        ondismiss() {
          console.log("Payment cancelled");
        },
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const handleWhatsAppContact = (context = "Floating Button") => {
    trackEvent("WhatsApp_Click", { context });
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "WhatsApp Inquiry",
        context,
      });
    }
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "contact", {
        method: "WhatsApp",
        context,
      });
    }
    const message =
      "Hi QNAYDS Team, I would like to know more about the 30-Day Ethical Hacking Masterclass.";
    window.open(
      `https://wa.me/919074871204?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const handleLeadCapture = () => {
    trackEvent("Lead_Magnet_Download", { method: "WhatsApp" });
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "Free Ethical Hacking Starter Kit",
        method: "WhatsApp",
      });
    }
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "generate_lead", {
        content_name: "Free Ethical Hacking Starter Kit",
      });
    }
    window.open(
      "https://wa.me/919074871204?text=Hi%2C%20please%20send%20me%20the%20Free%20Ethical%20Hacking%20Starter%20Kit.",
      "_blank",
    );
  };

  const triggerCheckout = (location) => {
    trackEvent("CTA_InitiateCheckout", { button_location: location });
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout", {
        value: 999,
        currency: "INR",
        content_name: "30-Day Ethical Hacking Masterclass",
        button_location: location,
      });
    }
    setShowCheckout(true);
  };

  const visibleVideos = showAllVideos ? ALL_VIDEOS : ALL_VIDEOS.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500/20 overflow-x-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Malayalam:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap');
        body { font-family: 'Poppins', 'Noto Sans Malayalam', sans-serif; }
        @keyframes pulse-btn {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.45); }
          50% { transform: scale(1.02); box-shadow: 0 0 25px 4px rgba(37, 99, 235, 0.6); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.45); }
        }
        .animate-pulse-btn {
          animation: pulse-btn 2.2s infinite ease-in-out;
        }
        .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
      `,
        }}
      />

      {/* WHATSAPP BUTTON WITH SHORT LABEL (Section 2 Item 10) */}
      <button
        onClick={() => handleWhatsAppContact("Floating Icon")}
        className="fixed bottom-44 md:bottom-8 right-4 md:right-8 z-90 bg-[#25D366] hover:bg-[#20ba59] text-white w-13 h-13 sm:w-14 sm:h-14 md:w-auto md:h-auto p-0 md:px-4 md:py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border-2 border-white/60"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp size={26} className="shrink-0" />
        <span className="hidden md:inline text-xs md:text-sm font-bold whitespace-nowrap">
          സംശയമുണ്ടോ? WhatsApp-ൽ ചോദിക്കൂ
        </span>
      </button>

      {/* SALES / PAYMENT POPUP NOTIFICATION (LIVE SOCIAL PROOF) */}
      <div
        className={`fixed bottom-20 md:bottom-8 left-4 md:left-8 z-85 bg-white border border-blue-100 rounded-2xl shadow-2xl p-3 sm:p-3.5 flex items-center gap-3 max-w-72 sm:max-w-xs transition-all duration-500 ease-in-out transform ${
          notification.show && !activeVideoId && !showCheckout
            ? "translate-x-0 opacity-100 scale-100 pointer-events-auto"
            : "-translate-x-full opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-emerald-100 p-2 sm:p-2.5 rounded-xl text-emerald-600 shrink-0 shadow-xs">
          <CheckCircle2 size={22} />
        </div>
        <div className="flex-1 min-w-0 pr-3">
          <p className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-wide truncate">
            {notification.name} from {notification.location}
          </p>
          <p className="text-xs sm:text-sm font-black text-blue-950 leading-tight">
            Masterclass Purchased
          </p>
          <p className="text-[10px] text-blue-600 mt-1 font-semibold flex items-center gap-1">
            <Clock size={11} /> {notification.time}
          </p>
        </div>
        <button
          onClick={() => setNotification((prev) => ({ ...prev, show: false }))}
          className="absolute -top-2 -right-2 bg-white border border-slate-200 rounded-full p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 shadow-xs transition-colors cursor-pointer"
          aria-label="Close notification"
        >
          <X size={12} />
        </button>
      </div>

      {/* TOP BANNER (Section 2 Item 1) */}
      <div className="sticky top-0 z-50 bg-blue-600 text-white font-bold px-3 py-2.5 text-center text-xs md:text-sm shadow-md">
        Launch Offer: ₹2,000-ന്റെ Course ഇപ്പോൾ ₹999 മാത്രം
      </div>

      {/* HEADER LOGO */}
      <header className="bg-white py-4 px-6 border-b border-blue-100 shadow-xs relative z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <img
            src={QnaydsLOgo}
            alt="QNAYDS Academy"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </div>
      </header>

      {/* 1. HEADLINE + BUTTON (Section 2 items 2, 3, 4, 5) */}
      <section className="px-4 pt-8 pb-6 md:pt-12 md:pb-8 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-950 leading-snug sm:leading-tight mb-4 tracking-tight max-w-3xl mx-auto">
          Hacking പഠിക്കാൻ ആഗ്രഹമുണ്ടോ? എവിടെ നിന്ന് start ചെയ്യണം എന്നറിയില്ലേ?
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-700 font-semibold max-w-2xl mx-auto mb-6 leading-relaxed">
          30 ദിവസത്തിൽ Ethical Hacking-ന്റെ basics Malayalam-ൽ easy ആയി പഠിക്കാം. IT background ആവശ്യമില്ല.
        </p>

        <div className="max-w-md mx-auto mb-6">
          <button
            onClick={() => triggerCheckout("First Screen Button")}
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-black text-base md:text-lg py-4 px-6 rounded-2xl transition shadow-lg shadow-blue-500/30 cursor-pointer animate-pulse-btn flex items-center justify-center gap-2"
          >
            <span>₹999-ന് ഇപ്പോൾ Enroll ചെയ്യൂ</span>
            <ArrowRight size={20} />
          </button>
          <p className="text-xs text-slate-500 font-bold mt-2 text-center">
            Instant Access • Secure Payment
          </p>
        </div>

        <p className="text-xs md:text-sm text-slate-600 font-medium max-w-xl mx-auto mb-3">
          Experienced trainers തയ്യാറാക്കിയ course. കേരളത്തിലെ 10,000+ students വിശ്വസിക്കുന്ന training.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-xs font-bold text-slate-700">
          <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs flex items-center gap-1.5">
            <Star className="text-amber-400 fill-amber-400" size={14} /> 4.6 Google Rating
          </span>
          <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs flex items-center gap-1.5">
            <Users className="text-blue-600" size={14} /> 10,000+ Students
          </span>
          <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs flex items-center gap-1.5">
            <FaWhatsapp className="text-emerald-500" size={14} /> WhatsApp Support
          </span>
        </div>
      </section>

      {/* 2. VIDEO (Section 2 Item 6) */}
      <section className="px-4 py-4 max-w-md mx-auto text-center">
        <p className="text-xs md:text-sm font-black text-blue-700 uppercase tracking-wider mb-3">
          Enroll ചെയ്യുന്നതിന് മുമ്പ് ഈ Intro Video കാണൂ
        </p>
        <div className="rounded-3xl overflow-hidden border border-blue-200 shadow-2xl bg-black">
          <video
            className="block w-full h-auto object-contain"
            controls
            playsInline
            preload="metadata"
            poster={thumbnail}
          >
            <source src={Intro} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* 3. PRICE BOX (Section 2 Items 7 & 8) */}
      <section className="px-4 py-8 max-w-lg mx-auto">
        <div className="bg-white border-2 border-blue-500 rounded-3xl p-6 md:p-8 shadow-xl shadow-blue-500/10 text-left">
          <h2 className="text-lg md:text-xl font-black text-blue-950 mb-4 border-b border-slate-100 pb-3">
            ഈ Course-ൽ നിങ്ങൾക്ക് എന്തൊക്കെ ലഭിക്കും?
          </h2>

          <ul className="space-y-2.5 mb-6 text-xs md:text-sm font-semibold text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              <span>30 Days Recorded Classes</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              <span>Lifetime Access</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              <span>WhatsApp Group Support</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              <span>100% Malayalam Explanation</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              <span>Beginner Friendly</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              <strong className="text-blue-900">Course Certificate</strong>
            </li>
          </ul>

          <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-4 mb-5">
            <span className="bg-red-100 text-red-700 text-xs font-black px-2.5 py-1 rounded-md">
              ₹1,001 Save ചെയ്യാം
            </span>
            <div className="text-right">
              <span className="text-xs text-slate-400 line-through font-bold block">
                Regular Price: ₹2,000
              </span>
              <span className="text-2xl md:text-3xl font-black text-blue-600">
                Today: ₹999
              </span>
            </div>
          </div>

          <button
            onClick={() => triggerCheckout("Price Box Button")}
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-black text-base md:text-lg py-4 px-6 rounded-2xl transition shadow-lg shadow-blue-500/30 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Hacking പഠിച്ചു തുടങ്ങാം</span>
            <ArrowRight size={20} />
          </button>
          <ButtonTrustIndicators />
        </div>
      </section>

      {/* 4. REAL STUDENT VIDEOS (Section 4 Item 10) */}
      <section className="py-12 md:py-16 bg-white border-y border-slate-200 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-950">
              Real Student Experiences
            </h2>
            <p className="text-xs md:text-sm text-slate-600 font-medium mt-1">
              QNAYDS Student Reviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                activeVideoId={activeVideoId}
                onPlay={() => {
                  setNotification((prev) => ({ ...prev, show: false }));
                  setActiveVideoId(video.id);
                  trackEvent("Video_Play", { video_id: video.id });
                }}
                onClose={() => setActiveVideoId(null)}
              />
            ))}
          </div>

          {!showAllVideos && (
            <div className="text-center mt-4">
              <button
                onClick={() => setShowAllVideos(true)}
                className="bg-white text-blue-600 hover:text-blue-800 font-bold text-xs md:text-sm py-2.5 px-6 rounded-full border border-blue-200 hover:border-blue-400 transition cursor-pointer shadow-xs"
              >
                More Reviews കാണൂ
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4 ITEM 1: STILL TRYING TO LEARN FROM YOUTUBE? */}
      <section className="py-12 md:py-16 bg-slate-50 px-4 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-950 mb-3 leading-snug">
              Hacking പഠിക്കാൻ ഇപ്പോഴും YouTube videos നോക്കി നടക്കുകയാണോ?
            </h2>
          </div>

          <div className="bg-red-50/70 p-6 md:p-8 rounded-3xl border border-red-100 mb-8">
            <h3 className="font-black text-red-950 text-base md:text-lg mb-3">
              നിങ്ങൾ face ചെയ്യുന്ന Problems:
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              ഒരുപാട് videos, പക്ഷേ clear ആയി മനസ്സിലാകുന്നില്ല • Step-by-step roadmap ഇല്ല • English terms മനസ്സിലാക്കാൻ ബുദ്ധിമുട്ട് • Doubts ചോദിക്കാൻ ആരുമില്ല
            </p>
          </div>

          {/* Internal Doubts: Keep already Malayalam */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xs">
            <h3 className="font-black text-blue-950 text-base md:text-lg mb-4 border-b border-slate-100 pb-3">
              നിങ്ങളുടെ Mind-ലെ Common Doubts:
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-xs md:text-sm font-bold text-slate-900 mb-1">
                  "Cybersecurity എനിക്ക് പഠിക്കാൻ പറ്റുമോ?"
                </p>
                <p className="text-xs text-slate-600 font-medium">
                  തീർച്ചയായും! Complex concepts simple examples ഉപയോഗിച്ച് explain ചെയ്യുന്നു.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-xs md:text-sm font-bold text-slate-900 mb-1">
                  "Technical background ഇല്ലാത്തതുകൊണ്ട് സാധിക്കില്ലേ?"
                </p>
                <p className="text-xs text-slate-600 font-medium">
                  സാധിക്കും! Coding knowledge ഇല്ലെങ്കിലും security tools step-by-step ആയി പഠിക്കാം.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-xs md:text-sm font-bold text-slate-900 mb-1">
                  "ഞാൻ തുടങ്ങാൻ വൈകിപ്പോയോ?"
                </p>
                <p className="text-xs text-slate-600 font-medium">
                  ഇല്ല! School/College students മുതൽ working professionals വരെ ആർക്കും start ചെയ്യാം.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-xs md:text-sm font-bold text-slate-900 mb-1">
                  "Hacking വളരെ difficult ആണെന്ന് തോന്നുന്നു."
                </p>
                <p className="text-xs text-slate-600 font-medium">
                  ശരിയായ roadmap + Malayalam explanation ഉണ്ടെങ്കിൽ Hacking easy ആയി പഠിക്കാം.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 ITEM 2: DARK BLUE QUOTE SECTION */}
      <section className="py-12 bg-blue-950 text-white px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <QuoteIcon className="mx-auto text-blue-400/40 mb-3" />
          <h2 className="text-lg md:text-2xl font-black mb-3 leading-relaxed">
            Cybersecurity പഠിക്കാൻ എല്ലാവർക്കും opportunity ലഭിക്കണം. English അറിയാത്തത് കൊണ്ട് ആരും പിന്നിലാകേണ്ടതില്ല.
          </h2>
          <p className="text-blue-300 font-medium text-xs md:text-sm max-w-xl mx-auto">
            Confusion ഒഴിവാക്കി, clear roadmap നൽകി Malayalam-ൽ പഠിപ്പിക്കുന്നു. Language barrier ഇല്ലാതെ skill develop ചെയ്യാം.
          </p>
        </div>
      </section>

      {/* SECTION 4 ITEM 3: GOOGLE REVIEWS BOX */}
      <section className="py-12 bg-white px-4 border-b border-slate-200">
        <div className="max-w-3xl mx-auto bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
              <FaGoogle className="text-[#4285F4] text-xl" />
              <span className="font-black text-blue-950 text-base md:text-lg">
                Google Reviews
              </span>
            </div>
            <p className="text-xs md:text-sm text-slate-700 font-bold">
              ആയിരക്കണക്കിന് students വിശ്വസിക്കുന്നു | 1,400+ Reviews അടിസ്ഥാനമാക്കി
            </p>
          </div>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("Google_Review_Click")}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-blue-200 rounded-full text-xs font-bold text-blue-700 hover:bg-blue-50 transition shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Google Reviews വായിക്കൂ</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </section>

      {/* SECTION 4 ITEM 4: WHAT YOU'LL LEARN (6 CARDS) */}
      <CourseSyllabus />

      {/* SECTION 4 ITEM 5: INSIDE THE LEARNING PLATFORM */}
      <section className="py-14 md:py-16 bg-slate-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-2">
            Learning Platform-നുള്ളിൽ
          </h2>
          <p className="text-xs md:text-sm text-slate-300 font-medium mb-8">
            Phone-ലോ Laptop-ലോ easy ആയി use ചെയ്യാം
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 text-center flex flex-col items-center gap-2.5">
              <LayoutDashboard size={28} className="text-blue-400" />
              <span className="font-bold text-xs sm:text-sm">Course Dashboard</span>
            </div>
            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 text-center flex flex-col items-center gap-2.5">
              <MonitorPlay size={28} className="text-blue-400" />
              <span className="font-bold text-xs sm:text-sm">Recorded Classes</span>
            </div>
            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 text-center flex flex-col items-center gap-2.5">
              <TrendingUp size={28} className="text-blue-400" />
              <span className="font-bold text-xs sm:text-sm">Progress Tracking</span>
            </div>
            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 text-center flex flex-col items-center gap-2.5">
              <FaWhatsapp size={28} className="text-[#25D366]" />
              <span className="font-bold text-xs sm:text-sm">WhatsApp Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 ITEM 6: MEET YOUR GUIDE (ALAN SIR) */}
      <section className="py-12 md:py-16 bg-blue-50/50 px-4 border-b border-blue-100">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-blue-100 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="w-36 h-36 md:w-44 md:h-44 shrink-0 rounded-2xl overflow-hidden border-2 border-blue-100 shadow-md">
              <img
                src={Alan_sir}
                alt="Alan Sir"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-xl md:text-2xl font-black text-blue-950 mb-1">
                നിങ്ങളെ പഠിപ്പിക്കുന്നത് - Alan Sir, Senior Cybersecurity Trainer
              </h2>
              <p className="text-xs text-blue-600 font-bold mb-3">
                CEH Certified • CompTIA Security+ • 5,000+ Students Trained • 8+ Years Experience
              </p>
              <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed space-y-2">
                <p className="italic">
                  "Theory മാത്രം പഠിക്കുന്നതല്ല, practical ആയി tools use ചെയ്ത് concepts മനസ്സിലാക്കുന്നതാണ് പ്രധാനപ്പെട്ടത്."
                </p>
                <p>
                  • Simple Malayalam-ൽ step-by-step lab training. • Doubts clear ചെയ്യാനും guide ചെയ്യാനും direct support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 ITEM 7: YOUR JOURNEY AFTER ENROLLMENT */}
      <section className="py-14 md:py-16 bg-white px-4 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-blue-950 mb-2">
              Enroll ചെയ്ത ശേഷം എന്താണ് നടക്കുന്നത്?
            </h2>
            <p className="text-xs md:text-sm text-slate-600 font-medium max-w-xl mx-auto">
              എല്ലാം simple & automatic ആണ്. Payment മുതൽ course access വരെ കുറച്ച് minutes മാത്രം.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3">
                <CreditCard size={20} />
              </div>
              <h3 className="font-black text-blue-950 text-base mb-2">
                1. Payment ചെയ്യൂ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Razorpay വഴി UPI, Card, Net Banking ഉപയോഗിച്ച് secure ആയി payment ചെയ്യാം. (2 minutes)
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3">
                <MailCheck size={20} />
              </div>
              <h3 className="font-black text-blue-950 text-base mb-2">
                2. Account Activate ചെയ്യൂ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                ഞങ്ങൾ ഉടൻ activation email അയക്കും. Password create ചെയ്ത് login ചെയ്യാം.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-3">
                <GraduationCap size={20} />
              </div>
              <h3 className="font-black text-blue-950 text-base mb-2">
                3. Learning Start ചെയ്യൂ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                റെക്കോർഡ് ചെയ്ത ക്ലാസുകളും WhatsApp Communityയും ഉപയോഗിക്കാം. (Lifetime Access)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 ITEM 8: IMAGINE YOURSELF ONE MONTH FROM NOW */}
      <section className="py-14 md:py-16 bg-blue-950 text-white px-4 border-b border-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-8">
            One Month കഴിഞ്ഞാൽ നിങ്ങൾക്ക്...
          </h2>

          <div className="grid sm:grid-cols-2 gap-3.5 max-w-3xl mx-auto text-left">
            {[
              "Ethical Hacking concepts clear ആയി മനസ്സിലാക്കും",
              "Wi-Fi & Smartphone Security മനസ്സിലാക്കും",
              "Cybersecurity terms confidently understand ചെയ്യും",
              "Malayalam-ൽ confidence-ോടെ പഠിക്കും",
              "Strong Cybersecurity Foundation build ചെയ്യും",
              "Online-ൽ നിങ്ങളെയും മറ്റുള്ളവരെയും protect ചെയ്യാൻ പഠിക്കും",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10"
              >
                <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-blue-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 ITEM 9: STUDENT TRANSFORMATION (AKHIL P.) */}
      <section className="py-12 md:py-14 bg-white px-4 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-black text-blue-950 mb-6 text-center">
            Student Transformation
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50/60 p-5 rounded-2xl border border-red-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <span className="font-bold text-red-900 block mb-2">Before Masterclass:</span>
              "ഓൺലൈനിൽ പരതി നടന്ന് ധാരാളം സമയം പാഴായി. എവിടെ തുടങ്ങണം, ഏത് ടൂളുകൾ ഇൻസ്റ്റാൾ ചെയ്യണം എന്നതിൽ ഒരു വ്യക്തതയും ലഭിച്ചിരുന്നില്ല."
            </div>

            <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-100 text-xs sm:text-sm text-slate-800 leading-relaxed font-bold">
              <span className="font-black text-emerald-900 block mb-2">After Masterclass:</span>
              "30 ദിവസത്തെ ഈ റോഡ്‌മാപ്പ് കാര്യങ്ങൾ വളരെ എളുപ്പമാക്കി. Linux, നെറ്റ്‌വർക്കിംഗ്, സുരക്ഷാ രീതികൾ എന്നിവ കൃത്യമായി പഠിച്ചെടുത്തു. കരിയറിലേക്ക് അടുത്ത പടി വെക്കാൻ ഇപ്പോൾ നല്ല ആത്മവിശ്വാസമുണ്ട്."
              <p className="text-[11px] text-blue-600 font-bold mt-2">— Akhil P.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 ITEMS 11 & 12: WHO THIS COURSE IS FOR & NOT FOR */}
      <section className="py-12 md:py-16 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-blue-100 shadow-xs">
            <h2 className="text-lg md:text-xl font-black text-blue-950 mb-4 flex items-center gap-2">
              <ThumbsUp className="text-blue-600" size={20} />
              ഈ Course ആർക്കൊക്കെ?
            </h2>
            <ul className="space-y-3 mb-4 text-xs md:text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>College, Degree, Engineering Students</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Working Professionals & Job Seekers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Cybersecurity-ൽ താൽപ്പര്യമുള്ള Beginners</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Malayalam-ൽ പഠിക്കാൻ ആഗ്രഹിക്കുന്ന ആർക്കും</span>
              </li>
            </ul>
            <p className="text-xs font-bold text-blue-700 bg-blue-100/60 p-2.5 rounded-lg">
              * Hacking-ൽ previous experience ആവശ്യമില്ല.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-red-100 shadow-xs">
            <h2 className="text-lg md:text-xl font-black text-red-950 mb-4 flex items-center gap-2">
              <UserX className="text-red-500" size={20} />
              ഈ Course-ൽ എന്താണ് expect ചെയ്യരുത്?
            </h2>
            <ul className="space-y-3 mb-4 text-xs md:text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <XCircle size={16} className="text-red-400 shrink-0" />
                <span>Advanced Penetration Testing</span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle size={16} className="text-red-400 shrink-0" />
                <span>Illegal Hacking Methods</span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle size={16} className="text-red-400 shrink-0" />
                <span>Practice ചെയ്യാൻ തയ്യാറല്ലാത്തവർക്ക് ഇത് suitable അല്ല</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              ഞങ്ങൾ Ethical Hacking-ന്റെ basic & educational side-ൽ മാത്രം focus ചെയ്യുന്നു.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 ITEM 13: RECOGNIZED & APPROVED BY */}
      <section className="py-10 bg-white px-4 border-b border-slate-200 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            Recognitions & Approvals
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm font-black text-slate-700">
            <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
              <Shield size={16} className="text-blue-600" /> AICTE Approved
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
              <Award size={16} className="text-amber-600" /> MSME Recognized
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
              <Cpu size={16} className="text-emerald-600" /> Kerala Startup Mission
            </span>
          </div>
        </div>
      </section>

      {/* DEDICATED REFUND POLICY SECTION / SESSION (Refund Policy - 100% സുതാര്യമായ പോളിസി) */}
      <section className="py-12 md:py-16 bg-white px-4 border-b border-slate-200">
        <div className="max-w-3xl mx-auto bg-amber-50/70 border border-amber-200/90 rounded-3xl p-6 md:p-8 text-center shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-3 shadow-xs">
            <ShieldAlert size={26} className="text-amber-700" />
          </div>

          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2">
            Refund Policy
          </h2>

          <p className="text-xs sm:text-sm text-slate-700 font-medium max-w-xl mx-auto leading-relaxed mb-4">
            ഇത് Instant Access ലഭിക്കുന്ന ഡിജിറ്റൽ റെക്കോർഡ് Course ആണ്. എൻറോൾ ചെയ്ത ഉടൻ തന്നെ എല്ലാ ക്ലാസുകളിലേക്കും ലൈഫ്‌ടൈം ആക്സസ് ലഭ്യമാകുന്നതിനാൽ, ആക്സസ് നൽകിയ ശേഷം റീഫണ്ട് നൽകാൻ സാധിക്കില്ല.
          </p>

          <div className="bg-white/95 border border-amber-200 rounded-2xl p-4 max-w-lg mx-auto text-xs sm:text-sm text-slate-700 font-medium mb-5 text-left shadow-xs">
            <p className="font-bold text-amber-950 mb-1 flex items-center gap-1.5">
              <span>💡</span> 100% Transparency & Full Clarity:
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Join ചെയ്യുന്നതിന് മുമ്പ് course content, language, അല്ലെങ്കിൽ മറ്റേതെങ്കിലും കാര്യങ്ങളെക്കുറിച്ച് doubts ഉണ്ടെങ്കിൽ WhatsApp വഴി training team-നോട് സംസാരിച്ച് complete clarity നേടാം.
            </p>
          </div>

          <button
            onClick={() => handleWhatsAppContact("Refund Section Consultation")}
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition shadow-md shadow-green-900/10 cursor-pointer hover:scale-105 active:scale-95"
          >
            <FaWhatsapp size={18} />
            <span>WhatsApp-ൽ Doubts ചോദിക്കൂ</span>
          </button>
        </div>
      </section>

      {/* SECTION 4 ITEM 15: FAQ (WITH REFUND ANSWER OPEN BY DEFAULT) */}
      <section className="py-12 md:py-16 px-4 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-blue-950">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-2xl overflow-hidden transition-all shadow-xs ${
                activeFaq === idx ? "border-blue-400" : "border-slate-200"
              }`}
            >
              <button
                className="w-full px-5 py-4 text-left flex justify-between items-center text-blue-950 font-bold hover:bg-slate-50 text-xs md:text-sm cursor-pointer"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <span className="pr-4">{faq.q}</span>
                {activeFaq === idx ? (
                  <ChevronUp size={18} className="text-blue-600 shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-slate-400 shrink-0" />
                )}
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs md:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 ITEM 14: NOT READY TO START YET? (FREE STARTER KIT) */}
      <section className="py-14 md:py-18 bg-linear-to-b from-blue-700 via-blue-800 to-indigo-900 text-white px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mx-auto mb-3 shadow-inner">
            <Download size={28} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black mb-2">
            Not Ready to Start Yet?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 mb-6 max-w-lg mx-auto font-medium leading-relaxed">
            Free Ethical Hacking Starter Kit download ചെയ്ത് എങ്ങനെ start ചെയ്യാമെന്ന് മനസ്സിലാക്കൂ.
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            <span className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-100 border border-white/15">
              • Learning Roadmap
            </span>
            <span className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-100 border border-white/15">
              • Beginner Tool List
            </span>
            <span className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-100 border border-white/15">
              • Career Guide
            </span>
            <span className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-100 border border-white/15">
              • Learning Checklist
            </span>
          </div>

          <div className="max-w-md mx-auto">
            <button
              onClick={handleLeadCapture}
              className="w-full bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white font-black text-base py-4 px-6 rounded-2xl transition shadow-xl shadow-green-950/20 cursor-pointer flex items-center justify-center gap-2.5 animate-pulse-btn"
            >
              <FaWhatsapp size={24} className="shrink-0" />
              <span>WhatsApp-ൽ Connect ചെയ്യൂ</span>
            </button>
            <p className="text-xs text-blue-200 font-semibold mt-3 text-center">
              ⚡ ഒരു message അയക്കൂ, Starter Kit ഉടൻ WhatsApp-ൽ ലഭിക്കും
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 ITEM 16: FINAL SECTION: YOUR CYBERSECURITY JOURNEY STARTS TODAY */}
      <section className="py-14 md:py-18 px-4 bg-slate-50 text-center border-t border-slate-200">
        <div className="max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-950 mb-3">
            Your Cybersecurity Journey Starts Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-semibold max-w-lg mx-auto mb-4">
            YouTube videos നോക്കി confusion ആകുന്നതിന് പകരം, Cybersecurity confidence-ോടെ മനസ്സിലാക്കുന്ന ഒരാളാകൂ.
          </p>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl text-xs sm:text-sm text-blue-950 font-medium inline-block">
            <span>Course-നെക്കുറിച്ച് കൂടുതൽ അറിയണമെന്നുണ്ടോ? </span>
            <button
              onClick={() => handleWhatsAppContact("Final Section Consultation")}
              className="text-emerald-700 font-bold hover:underline cursor-pointer inline-flex items-center gap-1 ml-1"
            >
              <FaWhatsapp size={15} /> WhatsApp-ൽ Team-നോട് സംസാരിക്കാം
            </button>
          </div>
        </div>

        {/* Final Price Box */}
        <div className="max-w-lg mx-auto bg-white border-2 border-blue-500 rounded-3xl p-6 md:p-8 shadow-xl text-left">
          <h3 className="text-lg md:text-xl font-black text-blue-950 mb-1">
            30-Day Ethical Hacking Masterclass
          </h3>
          <p className="text-xs text-blue-600 font-bold mb-4">
            ഈ Course-ൽ നിങ്ങൾക്ക് എന്തൊക്കെ ലഭിക്കും?
          </p>

          <ul className="space-y-2 mb-6 text-xs md:text-sm font-semibold text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              <span>30 Days Recorded Classes</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              <span>Lifetime Access</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              <span>WhatsApp Group Support</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              <span>100% Malayalam Explanation</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              <span>Beginner Friendly</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              <strong className="text-blue-900">Course Certificate</strong>
            </li>
          </ul>

          <div className="flex items-center justify-between border-t border-slate-100 pt-4 mb-5">
            <span className="bg-red-100 text-red-700 text-xs font-black px-2.5 py-1 rounded-md">
              ₹1,001 Save ചെയ്യാം
            </span>
            <div className="text-right">
              <span className="text-xs text-slate-400 line-through font-bold block">
                Regular Price: ₹2,000
              </span>
              <span className="text-2xl md:text-3xl font-black text-blue-600">
                Today: ₹999
              </span>
            </div>
          </div>

          <button
            onClick={() => triggerCheckout("Final Button Section")}
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-black text-base md:text-lg py-4 px-6 rounded-2xl transition shadow-lg shadow-blue-500/30 cursor-pointer flex items-center justify-center gap-2 animate-pulse-btn"
          >
            <span>Hacking പഠിച്ചു തുടങ്ങാം</span>
            <ArrowRight size={20} />
          </button>
          <ButtonTrustIndicators />
        </div>
      </section>

      {/* STICKY MOBILE BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 z-50 flex justify-between items-center gap-3 pb-safe shadow-[0_-5px_15px_rgba(0,0,0,0.06)]">
        <div className="shrink-0 pl-1">
          <div className="text-slate-400 text-[10px] line-through font-bold">
            ₹2,000
          </div>
          <div className="text-blue-700 font-black text-xl leading-none">
            ₹999
          </div>
        </div>
        <button
          onClick={() => triggerCheckout("Mobile Sticky Bar")}
          className="flex-1 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-black py-3 px-3 rounded-xl transition shadow-md shadow-blue-500/25 text-xs text-center cursor-pointer flex items-center justify-center gap-1.5"
        >
          <span>₹999-ന് ഇപ്പോൾ Enroll ചെയ്യൂ</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* SECTION 4 ITEM 17: FOOTER */}
      <footer className="py-10 px-6 bg-slate-900 text-slate-400 text-center text-xs pb-28 md:pb-10 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <p className="font-bold mb-2 text-white text-xs sm:text-sm">
            QNAYDS അക്കാദമി ഒരുക്കിയത് - പ്രായോഗിക മലയാളം പരിശീലനത്തിലൂടെ 10,000+ Studentsക്ക് Cybersecurity യാത്രയ്ക്ക് തുടക്കമിടുന്നു.
          </p>

          <p className="font-bold mb-3 text-white flex justify-center items-center gap-1 text-xs sm:text-sm">
            Need Help?{" "}
            <button
              onClick={() => handleWhatsAppContact("Footer Link")}
              className="text-[#25D366] hover:underline flex items-center gap-1 cursor-pointer ml-1"
            >
              <FaWhatsapp size={15} /> WhatsApp ചെയ്യൂ
            </button>
          </p>

          <div className="flex flex-wrap justify-center gap-4 my-3 font-medium text-slate-400">
            <a href="/terms-and-conditions" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/refund-policy" className="hover:text-white transition">
              Refund Policy
            </a>
            <a href="/contact" className="hover:text-white transition">
              Contact Us
            </a>
          </div>

          <p className="mb-3 text-slate-500">
            © 2026 QNAYDS Academy. All Rights Reserved.
          </p>

          <div className="text-[11px] text-slate-500 max-w-md mx-auto leading-relaxed">
            Digital access course ആയതിനാൽ payment കഴിഞ്ഞാൽ refund ലഭ്യമല്ല. കൂടുതൽ details-ക്ക് Refund Policy കാണുക.
          </div>
        </div>
      </footer>

      {/* CHECKOUT MODAL */}
      <CheckoutModal
        open={showCheckout}
        onClose={() => setShowCheckout(false)}
        formData={checkoutData}
        setFormData={setCheckoutData}
        loading={loading}
        onContinue={handleCheckout}
      />
    </div>
  );
}
