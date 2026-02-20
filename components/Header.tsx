export default function Header({ restaurantName = "Green Fork Bistro" }: { restaurantName?: string }) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 lg:px-8">
      <h1 className="text-xl font-semibold tracking-tight text-slate-900">{restaurantName}</h1>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium text-slate-900">Operations Admin</p>
          <p className="text-xs text-slate-500">restaurant@greenfork.io</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
          GF
        </div>
      </div>
    </header>
  );
}
