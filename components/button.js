export default function Button({ cta }) {
  return (
    <div className="p-6 flex flex-col items-center">
      <button className="btn btn-active btn-secondary text-xl font-poppins font-semibold">
        {cta}
      </button>
    </div>
  );
}