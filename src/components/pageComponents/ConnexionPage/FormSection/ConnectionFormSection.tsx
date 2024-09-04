import ConnectionForm from '../ConnectionForm/ConnectionForm';

export default function ConnectionFormSection() {
  return (
    <section className="bg-connectionForm bg-cover bg-no-repeat bg-center text-white content-center justify-center md:items-center gap-12 flex md:px-16 md:h-screen flex-1">
      <div className="md:block md:w-1/2 lg:2/3">
        <ConnectionForm />
      </div>
    </section>
  );
}
