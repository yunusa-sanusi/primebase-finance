function LoanDetailCard({ title, detail }) {
  return (
    <article className="bg-white text-darkBlue rounded-md p-6 font-semibold h-fit shadow-sm shadow-[#000d23]">
      <h3 className="text-2xl mb-4">{title}</h3>
      <p className="text-lg">{detail}</p>
    </article>
  );
}
export default LoanDetailCard;
