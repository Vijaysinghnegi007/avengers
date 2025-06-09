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
      style={{ height: '450px' }} data-id="18em8n2lh" data-path="components/CharacterCard.js">

      {/* Character image */}
      <div
        className="absolute inset-0 z-0 cursor-pointer"
        onClick={() => setModalOpen(true)} data-id="p22zhweqv" data-path="components/CharacterCard.js">

        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          data-name={`character-image-${character.id}`} data-id="w77cijhfg" data-path="components/CharacterCard.js" />

      </div>
      
      {/* Gradient overlay */}
      <div
        data-name={`character-overlay-${character.id}`}
        className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent" data-id="5ifnqw8om" data-path="components/CharacterCard.js">
      </div>
      
      {/* Character info */}
      <div
        data-name={`character-info-${character.id}`}
        className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300"
        style={{ transform: showDetails ? 'translateY(-70%)' : 'translateY(0)' }} data-id="jo4jjlpwb" data-path="components/CharacterCard.js">

        <h3
          data-name={`character-name-${character.id}`}
          className="text-2xl font-bold text-white mb-1"
          style={{ textShadow: `0 2px 10px ${characterColor}` }} data-id="ltxoguiwc" data-path="components/CharacterCard.js">

          {character.name}
        </h3>
        
        <p
          data-name={`character-real-name-${character.id}`}
          className="text-gray-300 mb-3" data-id="wrqnust3u" data-path="components/CharacterCard.js">

          {character.realName}
        </p>
        
        <p
          data-name={`character-portrayed-${character.id}`}
          className="text-sm text-gray-400 mb-4" data-id="48sftl71z" data-path="components/CharacterCard.js">

          Portrayed by: <span className="text-white" data-id="im4cfada8" data-path="components/CharacterCard.js">{character.portrayed}</span>
        </p>
        
        <button
          data-name={`character-details-toggle-${character.id}`}
          className="text-white bg-opacity-30 bg-white px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-opacity-40 transition-all duration-300"
          onClick={() => setShowDetails(!showDetails)} data-id="eyug8ezzb" data-path="components/CharacterCard.js">

          {showDetails ?
          <>
              <i className="fas fa-chevron-down" data-id="441me3ggf" data-path="components/CharacterCard.js"></i> Hide Details
            </> :

          <>
              <i className="fas fa-chevron-up" data-id="r4rc3m4mr" data-path="components/CharacterCard.js"></i> View Details
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
        }} data-id="2q0wg3s7k" data-path="components/CharacterCard.js">

        {/* Close button */}
        <button
          data-name={`character-details-close-${character.id}`}
          className="absolute top-3 right-3 text-white bg-opacity-30 bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-50 transition-all duration-300 z-30"
          onClick={() => setShowDetails(false)} data-id="f987klgmj" data-path="components/CharacterCard.js">

          <i className="fas fa-times" data-id="ui902ofbe" data-path="components/CharacterCard.js"></i>
        </button>
        
        {/* Scrollable content container */}
        <div
          data-name={`character-details-content-${character.id}`}
          className="h-full overflow-y-auto pr-2 scrollbar-thin"
          style={{ maxHeight: 'calc(100% - 10px)' }} data-id="j9x26232x" data-path="components/CharacterCard.js">

        <h4
            data-name={`character-bio-title-${character.id}`}
            className="text-lg font-bold text-white mb-3" data-id="dk53r0jhg" data-path="components/CharacterCard.js">

          Biography
        </h4>
        
        <p
            data-name={`character-description-${character.id}`}
            className="text-gray-300 text-sm mb-4" data-id="kqg2grjn4" data-path="components/CharacterCard.js">

          {character.description}
        </p>
        
        <h4
            data-name={`character-powers-title-${character.id}`}
            className="text-lg font-bold text-white mb-2" data-id="qyilw40yl" data-path="components/CharacterCard.js">

          Powers & Abilities
        </h4>
        
        <ul
            data-name={`character-powers-list-${character.id}`}
            className="text-gray-300 text-sm mb-4" data-id="bam9go2gl" data-path="components/CharacterCard.js">

          {character.powers.map((power, index) =>
            <li
              key={index}
              className="mb-1 flex items-start"
              data-name={`character-power-${index}-${character.id}`} data-id="2o62rqgdi" data-path="components/CharacterCard.js">

              <i className="fas fa-circle text-xs mt-1.5 mr-2" style={{ color: characterColor }} data-id="cbw1v33kc" data-path="components/CharacterCard.js"></i>
              {power}
            </li>
            )}
        </ul>
        
        <div
            data-name={`character-first-appearance-${character.id}`}
            className="text-sm text-gray-400" data-id="y55ifj5dr" data-path="components/CharacterCard.js">

          First MCU Appearance: <span className="text-white" data-id="1ukju8lzb" data-path="components/CharacterCard.js">{character.firstAppearance}</span>
        </div>
        </div>
      </div>
      
      {/* Character Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        image={character.image}
        name={character.name}
        onClose={() => setModalOpen(false)} data-id="iqj29wan5" data-path="components/CharacterCard.js" />

    </div>);

}