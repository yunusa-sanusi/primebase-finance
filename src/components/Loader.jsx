import ClipLoader from 'react-spinners/ClipLoader';

function Loader() {
  return (
    <section className="w-full flex justify-center mt-5">
      <ClipLoader
        color="#000d23"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </section>
  );
}
export default Loader;
