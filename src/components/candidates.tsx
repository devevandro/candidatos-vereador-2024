import { CandidatesCard } from "./candidatesCard";

export function Candidates() {
  return (
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <CandidatesCard />
    </section>
  )
}
