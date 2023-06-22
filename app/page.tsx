import { CardToday, CardTomorrow, Header } from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="w-full sm:px-16 px-6">
        <CardToday />
      </section>
      <section className="w-full max-w-[1440px] mx-auto sm:px-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8 pb-10">
        <CardTomorrow day={1} />
        <CardTomorrow day={2} />
        <CardTomorrow day={3} />
        <CardTomorrow day={4} />
      </section>
    </main>
  );
}
