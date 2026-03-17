import { useState, useEffect } from "react";

const ScheduleForm = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const isTimeValid = () => selectedTime !== "";

  useEffect(() => {
    setShowModal(true);
  }, []);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {

      const res = await fetch(
        "https://anshsolarelectricals.com/Backend/save_consultation.php",
        {
          method: "POST",
          body: formData
        }
      );

      /* NEW: check HTTP status */
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const text = await res.text();

      /* NEW: log backend response for debugging */
      console.log("Server Response:", text);

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid JSON response");
      }

      if (data.status === "success") {

        setShowModal(false);

        setPopupMessage("✅ Consultation booked successfully!");
        setShowPopup(true);

        e.currentTarget.reset();
        setSelectedDate("");
        setSelectedTime("");

      } else {

        setPopupMessage(data.message || "❌ Error submitting form.");
        setShowPopup(true);

      }

    } catch (err) {

      console.error("Server error:", err);

      setPopupMessage("⚠ Server error. Please try again.");
      setShowPopup(true);

    }

    setLoading(false);

  };

  return (
    <>

      {/* POPUP MESSAGE */}
      {showPopup && (
        <div className="fixed bottom-5 right-5 sm:right-8 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg z-[999] text-sm sm:text-base">
          {popupMessage}
        </div>
      )}

      {showModal && (

        <div className="fixed inset-0 bg-black/50 z-[999] flex items-start justify-center pt-24 sm:pt-28 pb-10 px-4 overflow-y-auto">

          <div className="
            glass-card
            w-full
            max-w-lg
            bg-white
            rounded-3xl
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            p-6 sm:p-8 lg:p-10
            relative
          ">

            {/* CLOSE BUTTON */}
            <button
              className="absolute top-4 right-4 text-gray-700 text-xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-[#021423] mb-6 text-center">
              Schedule Your Visit
            </h3>

            <form className="grid gap-4" onSubmit={handleSubmit}>

              <input
                placeholder="Full Name"
                className="inputStyle w-full"
                name="name"
                required
              />

              <input
                placeholder="Phone Number"
                className="inputStyle w-full"
                type="tel"
                name="phone"
                required
              />

              <input
                placeholder="Email Address"
                className="inputStyle w-full"
                type="email"
                name="email"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="formLabel">Select Date</label>

                  <input
                    type="date"
                    className="inputStyle w-full"
                    min={new Date().toISOString().split("T")[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    name="date"
                    required
                  />

                </div>

                <div>

                  <label className="formLabel">Select Time</label>

                  <input
                    type="time"
                    className="inputStyle w-full"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    name="time"
                    required
                  />

                </div>

              </div>

              <select className="inputStyle w-full" name="bill">

                <option>Monthly Electricity Bill</option>
                <option>Below ₹1000</option>
                <option>₹1000 – ₹3000</option>
                <option>₹3000 – ₹5000</option>
                <option>Above ₹5000</option>

              </select>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <input
                  placeholder="Pincode"
                  className="inputStyle w-full"
                  name="pincode"
                />

                <input
                  placeholder="City"
                  className="inputStyle w-full"
                  name="city"
                />

              </div>

              <button
                type="submit"
                disabled={!selectedDate || !selectedTime || !isTimeValid() || loading}
                className="mt-4 w-full bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-400
                text-white py-3 sm:py-4 rounded-xl font-semibold shadow-lg
                hover:scale-[1.03] active:scale-[0.98]
                transition disabled:opacity-50"
              >

                {loading ? "Submitting..." : "Confirm Consultation →"}

              </button>

            </form>

          </div>

        </div>

      )}

    </>
  );
};

export default ScheduleForm;