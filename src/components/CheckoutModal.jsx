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
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-blue-600 px-6 py-5 text-white">
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 hover:bg-white/20"
          >
            <X size={18} />
          </button>

          <h2 className="text-2xl font-black">
            Complete Your Enrollment
          </h2>

          <p className="mt-1 text-sm text-blue-100">
            Enter your details to continue securely.
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Course Card */}
          <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <h3 className="font-bold text-blue-950">
              30-Day Ethical Hacking Masterclass
            </h3>

            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 line-through">
                  ₹2,000
                </p>

                <p className="text-3xl font-black text-blue-600">
                  ₹999
                </p>
              </div>

              <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                Save ₹1001
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
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
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Trust */}
          <div className="mt-6 rounded-xl border border-green-100 bg-green-50 p-4">
            <div className="flex items-start gap-3">
              <ShieldCheck
                size={20}
                className="mt-0.5 text-green-600"
              />

              <div>
                <h4 className="font-bold text-green-700">
                  Secure Checkout
                </h4>

                <p className="text-sm text-green-600">
                  You'll be redirected to Razorpay for a secure payment.
                  After successful payment, an activation email will be sent
                  to your registered email address.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 rounded-xl border border-slate-200 py-3 font-semibold hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              onClick={onContinue}
              disabled={loading}
              className="flex-1 rounded-xl bg-blue-600 py-3 font-bold text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Continue to Payment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}