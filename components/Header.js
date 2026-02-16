export default function Header({ restaurantName = 'Green Fork Bistro' }) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/90 px-6 py-4 backdrop-blur lg:px-10">
      <h1 className="text-lg font-semibold text-slate-900">{restaurantName}</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-500">Admin</span>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
          GF
        </div>
      </div>
    </header>
  );
}
