interface DefaultBtnProps {
  btnText: string;
  onClick?: () => void;
  btnType?: 'button' | 'submit' | 'reset';
  btnPage?: string;
  btnDelete?: string;
  btnMessage?: boolean;
  btnMessageMobile?: boolean;
}
export default function DefaultBtn({
  btnText,
  onClick,
  btnType,
  btnPage,
  btnDelete,
  btnMessage,
  btnMessageMobile,
}: DefaultBtnProps) {
  return (
    <button
      // eslint-disable-next-line no-unneeded-ternary, react/button-has-type
      type={btnType ? btnType : 'button'}
      className={` rounded-lg text-white font-bold shadow-md py-1 block mx-auto ${btnPage === 'profile' ? 'text-sm px-2 min-w-24 my-0' : 'text-lg px-4 min-w-44 my-4'} ${btnMessageMobile ? 'text-sm px-2 min-w-24 my-0' : 'text-lg px-4 min-w-44 my-4'} ${btnDelete === 'true' ? 'bg-red-600 hover:bg-red-500' : ''} ${btnMessage ? 'bg-green-600 hover:bg-green-700' : 'bg-secondaryPink hover:bg-secondaryPinkHover'}`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}
