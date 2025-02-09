const Page = () => {
  return (
    <section>
      <header className="mb-4">
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <p className="text-gray-100/50">Overview</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article className="bordered-wrapper p-4 rounded">
          <h3 className="text-gray-100/50 mb-2">Anything</h3>
          <p className="text-2xl font-bold">P 300,003</p>
        </article>
        <article className="bordered-wrapper p-4 rounded">
          <h3 className="text-gray-100/50 mb-2">Anything</h3>
          <p className="text-2xl font-bold">P 300,003</p>
        </article>
        <article className="bordered-wrapper p-4 rounded">
          <h3 className="text-gray-100/50 mb-2">Anything</h3>
          <p className="text-2xl font-bold">P 300,003</p>
        </article>
      </div>

      <div className="h-72">Other Contents</div>
    </section>
  );
};

export default Page;
