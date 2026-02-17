import Header from '@/components/Header';
import RecentUploads from '@/components/RecentUploads';
import ScoreWidget from '@/components/ScoreWidget';
import Sidebar from '@/components/Sidebar';
import UploadArea from '@/components/UploadArea';
import VerifiedSuppliers from '@/components/VerifiedSuppliers';

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar />

      <main className="px-4 py-6 lg:ml-64 lg:px-8">
        <Header />

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="space-y-6 xl:col-span-2">
            <UploadArea />
            <RecentUploads />
          </div>

          <div className="space-y-6">
            <ScoreWidget />
            <VerifiedSuppliers />
            <section className="rounded-2xl bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-slate-900">CO2 Summary</h2>
              <div className="mt-4 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-sm text-slate-500">
                CO2 analytics module coming soon.
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
