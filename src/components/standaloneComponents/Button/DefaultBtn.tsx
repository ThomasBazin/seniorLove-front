interface DefaultBtnProps {
  btnText: string;
  onClick?: () => void;
  btnType?: 'button' | 'submit' | 'reset';
  btnPage?: string;
  btnDelete?: string;
}

export default function DefaultBtn({
  btnText,
  onClick,
  btnType,
  btnPage,
  btnDelete,
}: DefaultBtnProps) {
  return (
    <button
      // eslint-disable-next-line no-unneeded-ternary, react/button-has-type
      type={btnType ? btnType : 'button'}
      className={`bg-secondaryPink hover:bg-secondaryPinkHover rounded-lg text-white font-bold shadow-md py-1 block mx-auto ${btnPage === 'profile' ? 'text-sm px-2 min-w-24 my-0' : 'text-lg px-4 min-w-44 my-4'} ${btnDelete === 'true' ? 'bg-red-600 hover:bg-red-500' : ''}`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}
