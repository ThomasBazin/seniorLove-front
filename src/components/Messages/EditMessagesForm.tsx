export default function EditMessagesForm({ send }) {
  return (
    <form action="post" className="bg-transparent" id="formMessage">
      <input
        type="text"
        name="sendMessage"
        placeholder="Ecrivez un message..."
        className="border-y shadow-inner w-full h-15"
      />
      <button
        type="button"
        className="min-w-44 bg-buttonGreen hover:bg-secondaryPinkHover rounded-lg text-black font-bold text-lg shadow-md py-1 px-4 block mx-auto my-4"
        onClick={() => {
          const inputForm = document.getElementById('formMessage')
          const formData = Object.fromEntries(new FormData(inputForm))
          console.log(formData)
        }}
      >
        Envoyer
      </button>
    </form>
  );
}
