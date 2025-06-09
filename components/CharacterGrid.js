// CharacterGrid component
function CharacterGrid() {
  const [activeFilter, setActiveFilter] = React.useState('all');
  const [characters, setCharacters] = React.useState([]);

  // Filter characters based on selected filter
  React.useEffect(() => {
    if (activeFilter === 'all') {
      setCharacters([...charactersData, ...additionalCharactersData]);
    } else if (activeFilter === 'original') {
      setCharacters(charactersData.filter((char) => char.id <= 6));
    } else if (activeFilter === 'new') {
      setCharacters(additionalCharactersData);
    }
  }, [activeFilter]);

  return (
    <section
      id="characters"
      data-name="characters-section"
      className="py-20 bg-black relative overflow-hidden" data-id="0toqpebfv" data-path="components/CharacterGrid.js">

      {/* Background cosmic effect */}
      <div
        data-name="cosmic-background"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('${heroBackgroundImages[1]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3) contrast(1.2)'
        }} data-id="x8uzyxxxj" data-path="components/CharacterGrid.js">
      </div>
      
      <div className="container-custom mx-auto px-4 relative z-10" data-id="ubthlan9s" data-path="components/CharacterGrid.js">
        <div className="text-center mb-12" data-id="ju77wrfa4" data-path="components/CharacterGrid.js">
          <h2
            data-name="characters-title"
            className="section-title text-white inline-block" data-id="x0tb278jy" data-path="components/CharacterGrid.js">

            Earth's Mightiest Heroes
          </h2>
          <p
            data-name="characters-subtitle"
            className="text-gray-300 max-w-2xl mx-auto mt-6" data-id="o9qjxbzji" data-path="components/CharacterGrid.js">

            Meet the iconic characters who have joined forces to become the Avengers, protecting Earth from threats too great for any single hero.
          </p>
        </div>
        
        {/* Character filters */}
        <div
          data-name="character-filters"
          className="flex flex-wrap justify-center gap-4 mb-10" data-id="rehmhehta" data-path="components/CharacterGrid.js">

          <button
            data-name="filter-all-characters"
            className={`px-6 py-2 ${activeFilter === 'all' ? 'bg-avengers-red' : 'bg-gray-800'} text-white rounded-full hover:bg-red-700 transition-colors duration-300`}
            onClick={() => setActiveFilter('all')} data-id="zgzeimhlx" data-path="components/CharacterGrid.js">

            All Heroes
          </button>
          <button
            data-name="filter-original-six"
            className={`px-6 py-2 ${activeFilter === 'original' ? 'bg-avengers-red' : 'bg-gray-800'} text-white rounded-full hover:bg-gray-700 transition-colors duration-300`}
            onClick={() => setActiveFilter('original')} data-id="55seskvzh" data-path="components/CharacterGrid.js">

            Original Six
          </button>
          <button
            data-name="filter-new-avengers"
            className={`px-6 py-2 ${activeFilter === 'new' ? 'bg-avengers-red' : 'bg-gray-800'} text-white rounded-full hover:bg-gray-700 transition-colors duration-300`}
            onClick={() => setActiveFilter('new')} data-id="wphoeqytb" data-path="components/CharacterGrid.js">

            New Avengers
          </button>
        </div>
        
        {/* Characters grid */}
        <div
          data-name="characters-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="an1q7ul5v" data-path="components/CharacterGrid.js">

          {characters.map((character) =>
          <CharacterCard key={character.id} character={character} data-id="bsq50szjg" data-path="components/CharacterGrid.js" />
          )}
        </div>
        
        {/* More characters button */}
        <div
          data-name="more-characters"
          className="text-center mt-12" data-id="v0nezrk40" data-path="components/CharacterGrid.js">

          <a
            href="https://www.marvel.com/movies"
            target="_blank"
            rel="noopener noreferrer"
            data-name="more-characters-button"
            className="avengers-button px-8 py-3 inline-block" data-id="hpib1xsip" data-path="components/CharacterGrid.js">

            Discover All Marvel Heroes
          </a>
        </div>
      </div>
    </section>);

}