// CharacterGrid component
function CharacterGrid({ charactersData, additionalCharactersData, backgroundImage }) {
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
  }, [activeFilter, charactersData, additionalCharactersData]);

  return (
    <section
      id="characters"
      data-name="characters-section"
      className="py-20 bg-black relative overflow-hidden">

      {/* Background cosmic effect */}
      <div
        data-name="cosmic-background"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3) contrast(1.2)'
        }}>
      </div>
      
      <div className="container-custom mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2
            data-name="characters-title"
            className="section-title text-white inline-block">

            Earth's Mightiest Heroes
          </h2>
          <p
            data-name="characters-subtitle"
            className="text-gray-300 max-w-2xl mx-auto mt-6">

            Meet the iconic characters who have joined forces to become the Avengers, protecting Earth from threats too great for any single hero.
          </p>
        </div>
        
        {/* Character filters */}
        <div
          data-name="character-filters"
          className="flex flex-wrap justify-center gap-4 mb-10">

          <button
            data-name="filter-all-characters"
            className={`px-6 py-2 ${activeFilter === 'all' ? 'bg-avengers-red' : 'bg-gray-800'} text-white rounded-full hover:bg-red-700 transition-colors duration-300`}
            onClick={() => setActiveFilter('all')}>

            All Heroes
          </button>
          <button
            data-name="filter-original-six"
            className={`px-6 py-2 ${activeFilter === 'original' ? 'bg-avengers-red' : 'bg-gray-800'} text-white rounded-full hover:bg-gray-700 transition-colors duration-300`}
            onClick={() => setActiveFilter('original')}>

            Original Six
          </button>
          <button
            data-name="filter-new-avengers"
            className={`px-6 py-2 ${activeFilter === 'new' ? 'bg-avengers-red' : 'bg-gray-800'} text-white rounded-full hover:bg-gray-700 transition-colors duration-300`}
            onClick={() => setActiveFilter('new')}>

            New Avengers
          </button>
        </div>
        
        {/* Characters grid */}
        <div
          data-name="characters-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {characters.map((character) =>
          <CharacterCard key={character.id} character={character} />
          )}
        </div>
        
        {/* More characters button */}
        <div
          data-name="more-characters"
          className="text-center mt-12">

          <a
            href="https://www.marvel.com/movies"
            target="_blank"
            rel="noopener noreferrer"
            data-name="more-characters-button"
            className="avengers-button px-8 py-3 inline-block">

            Discover All Marvel Heroes
          </a>
        </div>
      </div>
    </section>);

}