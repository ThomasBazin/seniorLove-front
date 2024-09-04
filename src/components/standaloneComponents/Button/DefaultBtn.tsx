interface DefaultBtnProps {
  btnText: string;
  onClick?: () => void;
}

export default function DefaultBtn({ btnText, onClick }: DefaultBtnProps) {
  return (
    <button
      type="button"
      className="min-w-44 bg-secondaryPink hover:bg-secondaryPinkHover rounded-lg text-white font-bold text-lg shadow-md py-1 px-4 block mx-auto my-4"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}
