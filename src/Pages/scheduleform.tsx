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

      const data = await res.json();

      if (data.status === "success") {

        setPopupMessage("✅ Consultation booked successfully!");
        setShowPopup(true);

        e.currentTarget.reset();
        setSelectedDate("");
        setSelectedTime("");
        setShowModal(false);

      } else {

        setPopupMessage(data.message || "❌ Error submitting form.");
        setShowPopup(true);

      }

    } catch (err) {

      console.error(err);
      setPopupMessage("⚠ Server error. Please try again.");
      setShowPopup(true);

    }

    setLoading(false);

  };

  return (
    <>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg z-50">
          {popupMessage}
        </div>
      )}

      {showModal && (

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">

          <div className="glass-card mt-20 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6 sm:p-8 lg:p-10 relative w-full max-w-lg mx-auto">

            <button
              className="absolute top-4 right-4 text-gray-700 text-xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-[#021423] mb-6">
              Schedule Your Visit
            </h3>

            <form className="grid gap-4" onSubmit={handleSubmit}>

              <input
                placeholder="Full Name"
                className="inputStyle"
                name="name"
                required
              />

              <input
                placeholder="Phone Number"
                className="inputStyle"
                type="tel"
                name="phone"
                required
              />

              <input
                placeholder="Email Address"
                className="inputStyle"
                type="email"
                name="email"
              />

              <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <label className="formLabel">Select Date</label>

                  <input
                    type="date"
                    className="inputStyle"
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
                    className="inputStyle"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    name="time"
                    required
                  />

                </div>

              </div>

              <select className="inputStyle" name="bill">

                <option>Monthly Electricity Bill</option>
                <option>Below ₹1000</option>
                <option>₹1000 – ₹3000</option>
                <option>₹3000 – ₹5000</option>
                <option>Above ₹5000</option>

              </select>

              <div className="grid grid-cols-2 gap-4">

                <input
                  placeholder="Pincode"
                  className="inputStyle"
                  name="pincode"
                />

                <input
                  placeholder="City"
                  className="inputStyle"
                  name="city"
                />

              </div>

              <button
                type="submit"
                disabled={!selectedDate || !selectedTime || !isTimeValid() || loading}
                className="mt-4 w-full bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-400
                text-white py-4 rounded-xl font-semibold shadow-lg hover:scale-[1.03]
                active:scale-[0.98] transition disabled:opacity-50"
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