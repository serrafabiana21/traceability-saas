import { ReactNode } from "react";

type LandingShellProps = {
  children: ReactNode;
};

export default function LandingShell({ children }: LandingShellProps) {
  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
