/* eslint-disable react/prop-types */
export function Button(props) {
  return (
    <button
      className={`p-2 rounded w-full self-center ${
        (props.variant === "primary" &&
          `bg-blue-500 text-white  hover:bg-blue-400`) ||
        (props.variant === "secondary" &&
          `bg-slate-300 text-black hover:bg-slate-200`)
      }`}
      {...props}
    >
      {props.children}
    </button>
  );
}
