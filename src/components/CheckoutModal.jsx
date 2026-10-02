import { X, User, Mail, Phone, ShieldCheck } from "lucide-react";

export default function CheckoutModal({
  open,
  onClose,
  formData,
  setFormData,
  onContinue,
  loading = false,
}) {
  if (!open) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-blue-600 px-4 py-4 md:px-6 md:py-5 text-white">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 transition hover:bg-white/20 cursor-pointer"
          >
            <X size={18} />
          </button>

          <h2 className="text-xl md:text-2xl font-black">
            പ്രവേശനം പൂർത്തിയാക്കൂ
          </h2>

          <p className="mt-1 text-xs md:text-sm text-blue-100">
            തുടരുന്നതിനായി നിങ്ങളുടെ വിവരങ്ങൾ നൽകുക
          </p>
        </div>

        {/* Body */}
        <div className="p-4 md:p-6">
          {/* Course Card */}
          <div className="mb-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <h3 className="font-bold text-blue-950">
              30 ദിവസത്തെ എത്തിക്കൽ ഹാക്കിംഗ് മാസ്റ്റർക്ലാസ്
            </h3>

            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 line-through">
                  ₹2,000
                </p>

                <p className="text-2xl md:text-3xl font-black text-blue-600">
                  ₹999
                </p>
              </div>

              <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs md:text-sm font-bold text-emerald-700">
                ₹1,001 ലാഭം
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-3">
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="name"
                placeholder="പൂർണ്ണമായ പേര് (Full Name)"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 py-2.5 pl-11 pr-4 outline-none transition focus:border-blue-500 text-sm"
              />
            </div>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="email"
                name="email"
                placeholder="ഇമെയിൽ വിലാസം (Email)"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 py-2.5 pl-11 pr-4 outline-none transition focus:border-blue-500 text-sm"
              />
            </div>

            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="phone"
                placeholder="10-അക്ക മൊബൈൽ നമ്പർ (WhatsApp)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 py-2.5 pl-11 pr-4 outline-none transition focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Trust */}
          <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/70 p-3">
            <div className="flex items-start gap-3">
              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-emerald-600"
              />

              <div>
                <h4 className="font-bold text-emerald-800 text-xs md:text-sm">
                  സുരക്ഷിത പേയ്മെന്റ് (Secure Checkout)
                </h4>

                <p className="mt-1 text-xs text-emerald-700 leading-relaxed font-medium">
                  Razorpay വഴി സുരക്ഷിതമായി പേയ്മെന്റ് ചെയ്യാം. പേയ്മെന്റിന് ശേഷം ഉടൻ ആക്റ്റിവേഷൻ ഇമെയിൽ ലഭിക്കും.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
            <button
              onClick={onClose}
              className="flex-1 rounded-xl border border-slate-200 py-3 font-semibold transition hover:bg-slate-50 text-xs md:text-sm cursor-pointer"
            >
              റദ്ദാക്കുക (Cancel)
            </button>

            <button
              onClick={onContinue}
              disabled={loading}
              className="flex-1 rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 text-xs md:text-sm cursor-pointer shadow-md shadow-blue-500/25"
            >
              {loading ? "പ്രോസസ്സ് ചെയ്യുന്നു..." : "പേയ്മെന്റിലേക്ക് തുടരുക (₹999)"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}