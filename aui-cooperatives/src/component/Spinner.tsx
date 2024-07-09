export default function Spinner() {
  return (
    <div className=" flex w-full items-center justify-center ">
      <div
        className={`animate-spin rounded-full size-7 border-t-4 border-blue`}
      ></div>
    </div>
  );
}
