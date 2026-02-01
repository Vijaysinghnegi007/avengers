// CharacterCard component
function CharacterCard({ character }) {
  const [showDetails, setShowDetails] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  // Character-specific color mapping
  const getCharacterColor = (name) => {
    const colorMap = {
      'Iron Man': 'rgba(229, 62, 62, 0.8)',
      'Captain America': 'rgba(59, 130, 246, 0.8)',
      'Thor': 'rgba(245, 158, 11, 0.8)',
      'Hulk': 'rgba(16, 185, 129, 0.8)',
      'Black Widow': 'rgba(220, 38, 38, 0.8)',
      'Hawkeye': 'rgba(124, 58, 237, 0.8)'
    };

    return colorMap[name] || 'rgba(107, 114, 128, 0.8)';
  };

  const characterColor = getCharacterColor(character.name);

  return (
    <div
      data-name={`character-card-${character.id}`}
      className="character-card relative rounded-lg overflow-hidden shadow-lg"
      style={{ height: '450px' }}>

      {/* Character image */}
      <div
        className="absolute inset-0 z-0 cursor-pointer"
        onClick={() => setModalOpen(true)}>

        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          data-name={`character-image-${character.id}`} />

      </div>
      
      {/* Gradient overlay */}
      <div
        data-name={`character-overlay-${character.id}`}
        className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent">
      </div>
      
      {/* Character info */}
      <div
        data-name={`character-info-${character.id}`}
        className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300"
        style={{ transform: showDetails ? 'translateY(-70%)' : 'translateY(0)' }}>

        <h3
          data-name={`character-name-${character.id}`}
          className="text-2xl font-bold text-white mb-1"
          style={{ textShadow: `0 2px 10px ${characterColor}` }}>

          {character.name}
        </h3>
        
        <p
          data-name={`character-real-name-${character.id}`}
          className="text-gray-300 mb-3">

          {character.realName}
        </p>
        
        <p
          data-name={`character-portrayed-${character.id}`}
          className="text-sm text-gray-400 mb-4">

          Portrayed by: <span className="text-white">{character.portrayed}</span>
        </p>
        
        <button
          data-name={`character-details-toggle-${character.id}`}
          className="text-white bg-opacity-30 bg-white px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-opacity-40 transition-all duration-300"
          onClick={() => setShowDetails(!showDetails)}>

          {showDetails ?
          <>
              <i className="fas fa-chevron-down"></i> Hide Details
            </> :

          <>
              <i className="fas fa-chevron-up"></i> View Details
            </>
          }
        </button>
      </div>
      
      {/* Extended character details */}
      <div
        data-name={`character-extended-info-${character.id}`}
        className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-black bg-opacity-80 transform transition-all duration-300"
        style={{
          height: '70%',
          opacity: showDetails ? 1 : 0,
          visibility: showDetails ? 'visible' : 'hidden',
          borderTop: `3px solid ${characterColor}`
        }}>

        {/* Close button */}
        <button
          data-name={`character-details-close-${character.id}`}
          className="absolute top-3 right-3 text-white bg-opacity-30 bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-50 transition-all duration-300 z-30"
          onClick={() => setShowDetails(false)}>

          <i className="fas fa-times"></i>
        </button>
        
        {/* Scrollable content container */}
        <div
          data-name={`character-details-content-${character.id}`}
          className="h-full overflow-y-auto pr-2 scrollbar-thin"
          style={{ maxHeight: 'calc(100% - 10px)' }}>

        <h4
            data-name={`character-bio-title-${character.id}`}
            className="text-lg font-bold text-white mb-3">

          Biography
        </h4>
        
        <p
            data-name={`character-description-${character.id}`}
            className="text-gray-300 text-sm mb-4">

          {character.description}
        </p>
        
        <h4
            data-name={`character-powers-title-${character.id}`}
            className="text-lg font-bold text-white mb-2">

          Powers & Abilities
        </h4>
        
        <ul
            data-name={`character-powers-list-${character.id}`}
            className="text-gray-300 text-sm mb-4">

          {character.powers.map((power, index) =>
            <li
              key={index}
              className="mb-1 flex items-start"
              data-name={`character-power-${index}-${character.id}`}>

              <i className="fas fa-circle text-xs mt-1.5 mr-2" style={{ color: characterColor }}></i>
              {power}
            </li>
            )}
        </ul>
        
        <div
            data-name={`character-first-appearance-${character.id}`}
            className="text-sm text-gray-400">

          First MCU Appearance: <span className="text-white">{character.firstAppearance}</span>
        </div>
        </div>
      </div>
      
      {/* Character Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        image={character.image}
        name={character.name}
        onClose={() => setModalOpen(false)} />

    </div>);

}