interface DefaultBtnProps {
  btnText: string;
  onClick?: () => void;
  btnType?: 'button' | 'submit' | 'reset';
}

export default function DefaultBtn({
  btnText,
  onClick,
  btnType,
}: DefaultBtnProps) {
  return (
    <button
      // eslint-disable-next-line no-unneeded-ternary, react/button-has-type
      type={btnType ? btnType : 'button'}
      className="min-w-44 bg-secondaryPink hover:bg-secondaryPinkHover rounded-lg text-white font-bold text-lg shadow-md py-1 px-4 block mx-auto my-4"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}
