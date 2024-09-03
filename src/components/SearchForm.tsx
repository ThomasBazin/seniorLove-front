export default function SearchForm() {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-md mx-auto">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-y-8">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-primaryText"
                >
                  Prénom
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Jean"
                      autoComplete="firstName"
                      className="block w-full border-0 bg-transparent py-1.5 pl-1 text-primaryText placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="birthDate"
                  className="block text-sm font-medium leading-6 text-primaryText"
                >
                  Date de naissance
                </label>
                <div className="mt-2">
                  <input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    className="block w-full rounded-md border-0 py-1.5 text-primaryText shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-primaryText">
                    Description
                  </legend>
                  {/* <div className="mt-6 space-y-3">
                    <textarea
                      id="description"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Entrez votre description ici..."
                      className="block w-full rounded-md border-0 py-1.5 text-primaryText shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      rows={4}
                    />
                  </div> */}
                </fieldset>
              </div>

              <div>
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-primaryText">
                    Centres d’intérêt
                  </legend>
                  {/* <div className="mt-6 space-y-6">
                    {hobbyArray.map((hobby, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          id={`hobby-${index}`}
                          type="checkbox"
                          checked={hobbies[hobby]}
                          onChange={() => handleHobbyChange(hobby)}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor={`hobby-${index}`}
                          className="ml-3 block text-sm font-medium text-primaryText"
                        >
                          {hobby}
                        </label>
                      </div>
                    ))}
                  </div> */}
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
