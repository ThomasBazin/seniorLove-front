function EditProfileComponent() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-primaryText"
                >
                  Prénom
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Jean"
                      autoComplete="firstName"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1  text-primaryText placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="birthDate"
                  className="block text-sm font-medium leading-6  text-primaryText"
                >
                  Date de naissance
                </label>
                <div className="flex">
                  <select
                    id="birthDay"
                    name="birthDay"
                    autoComplete="birthDay"
                    className="block w-full rounded-md border-0 py-1.5 text-primaryText shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="">Jour</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  <select
                    id="birthMonth"
                    name="birthMonth"
                    autoComplete="birthMonth"
                    className="block w-full rounded-md border-0 py-1.5 text-primaryText shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="">Mois</option>
                    <option value="1">Janvier</option>
                    <option value="2">Fevrier</option>
                    <option value="3">Mars</option>
                    <option value="4">Avril</option>
                    <option value="5">Mai</option>
                    <option value="6">Juin</option>
                    <option value="7">Juillet</option>
                    <option value="8">Août</option>
                    <option value="9">Septembre</option>
                    <option value="10">Octobre</option>
                    <option value="11">Novembre</option>
                    <option value="12">Decembre</option>
                  </select>
                  <select
                    id="birthYear"
                    name="birthYear"
                    autoComplete="birthYear"
                    className="block w-full rounded-md border-0 py-1.5 text-primaryText shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="">Annee</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                    <option value="1929">1929</option>
                    <option value="1928">1928</option>
                    <option value="1927">1927</option>
                    <option value="1926">1926</option>
                    <option value="1925">1925</option>
                  </select>
                </div>
                <div className="mt-6 space-y-6"></div>
                <div className="col-span-full">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-primaryText">
                      Description
                    </legend>
                    <div className="mt-6 space-y-3"></div>
                    <p>
                      {' '}
                      Je suis heureux de faire partie de SeniorLove pour
                      rencontrer de nouvelles personnes et peut-être trouver
                      l'amour. Grâce à cette communauté, j'ai découvert des
                      activités passionnantes qui me permettent de tisser des
                      liens d'amitié sincères. À mon âge, je pense qu'il est
                      essentiel de rester actif et de profiter de chaque
                      instant, et SeniorLove m'offre cette belle opportunité. Au
                      plaisir de vous rencontrer lors d'une prochaine activité !
                    </p>
                  </fieldset>
                </div>
                <div className="mt-10 space-y-10">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-primaryText">
                      Centres d’intérêt
                    </legend>
                    <div className="mt-6 space-y-6">
                      <ul>
                        <li>La marche en plein air</li>
                        <li>La lecture</li>
                        <li>La cuisine</li>
                        <li>Le jardinage</li>
                        <li>Le bénévolat dans la communauté</li>
                        <li>Les jeux de société</li>
                      </ul>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProfileComponent;
