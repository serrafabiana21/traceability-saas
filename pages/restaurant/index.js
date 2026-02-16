import Header from '../../components/Header';
import RecentUploads from '../../components/RecentUploads';
import ScoreWidget from '../../components/ScoreWidget';
import Sidebar from '../../components/Sidebar';
import UploadArea from '../../components/UploadArea';
import VerifiedSuppliers from '../../components/VerifiedSuppliers';

function CO2Summary() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm" id="reports">
      <h2 className="text-lg font-semibold text-slate-900">CO2 Emissions Summary</h2>
      <p className="mt-1 text-sm text-slate-500">Monthly trend (kg CO₂e)</p>
      <div className="mt-4 flex h-36 items-end gap-2 rounded-lg bg-slate-50 p-4">
        {[42, 55, 40, 61, 48, 44, 39].map((value, index) => (
          <div key={index} className="flex-1 rounded-t bg-accent/80" style={{ height: `${value}%` }} />
        ))}
      </div>
    </section>
  );
}

export default function RestaurantDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <div className="lg:ml-64">
        <Header restaurantName="Green Fork Bistro" />

        <main className="space-y-6 p-6 lg:p-10">
          <div className="grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <UploadArea />
            </div>
            <ScoreWidget score={86} />
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <RecentUploads />
            </div>
            <VerifiedSuppliers />
          </div>

          <CO2Summary />
        </main>
      </div>
    </div>
  );
}
