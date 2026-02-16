import Header from "@/components/Header";
import RecentUploads from "@/components/RecentUploads";
import ScoreWidget from "@/components/ScoreWidget";
import Sidebar from "@/components/Sidebar";
import UploadArea from "@/components/UploadArea";
import VerifiedSuppliers from "@/components/VerifiedSuppliers";

export default function RestaurantDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar />

      <div className="lg:ml-64">
        <Header restaurantName="Green Fork Bistro" />

        <main className="space-y-6 p-6 lg:p-8">
          <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
            <UploadArea />
            <ScoreWidget score={86} />
          </div>

          <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
            <RecentUploads />
            <VerifiedSuppliers />
          </div>

          <section
            id="reports"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            aria-label="CO2 Emissions Summary"
          >
            <h2 className="text-lg font-semibold text-slate-900">CO2 Emissions Summary</h2>
            <p className="mt-1 text-sm text-slate-500">
              Monthly emissions trend for operations, logistics, and suppliers.
            </p>
            <div className="mt-4 flex h-64 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50">
              <p className="text-sm text-slate-500">Chart placeholder</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
