import { useState } from "react";

type SolarResult = {
  systemSize: string;
  cost: string;
  yearlySavings: string;
};

export default function SolarCalculator() {

  const [bill, setBill] = useState<number>(3000);
  const [result, setResult] = useState<SolarResult | null>(null);

  const calculateSolar = () => {

    const systemSize = bill / 1000;
    const cost = systemSize * 55000;
    const yearlySavings = bill * 12 * 0.8;

    setResult({
      systemSize: systemSize.toFixed(2),
      cost: cost.toFixed(0),
      yearlySavings: yearlySavings.toFixed(0)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-[120px] px-6">

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-10">

        <h1 className="text-3xl font-bold text-center mb-8">
          Solar Savings Calculator
        </h1>

        <div className="space-y-6">

          <div>
            <label className="text-sm font-semibold text-gray-600">
              Monthly Electricity Bill
            </label>

            <input
              type="range"
              min="500"
              max="20000"
              step="500"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full mt-3"
            />

            <p className="text-lg font-bold text-blue-600 mt-2">
              ₹ {bill} / month
            </p>
          </div>

          <button
            onClick={calculateSolar}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold"
          >
            Calculate Solar System
          </button>

        </div>

        {result && (
          <div className="mt-10 text-black bg-gray-100 p-6 rounded-xl">

            <h2 className="text-xl font-bold mb-4">
              Estimated Solar System
            </h2>

            <p>Required System Size: <b>{result.systemSize} kW</b></p>
            <p>Estimated Installation Cost: <b>₹ {result.cost}</b></p>
            <p>Estimated Yearly Savings: <b>₹ {result.yearlySavings}</b></p>

          </div>
        )}

      </div>
    </div>
  );
}