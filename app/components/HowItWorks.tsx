const steps = [
  {
    step: "1",
    title: "Collect",
    text: "Bring supplier certifications, lab results, and sourcing statements into one hub.",
  },
  {
    step: "2",
    title: "Connect",
    text: "Link ingredients to dishes with guided mapping and approval flows.",
  },
  {
    step: "3",
    title: "Share",
    text: "Publish transparent stories that keep guests and regulators aligned.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-slate-900">How it works</h2>
          <p className="text-lg text-slate-600">
            Three calm steps to move from sourcing evidence to trusted transparency.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
