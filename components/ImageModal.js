// ImageModal component for displaying large hero images
function ImageModal({ isOpen, image, name, onClose }) {
  // If modal is not open, don't render anything
  if (!isOpen) return null;

  // Handle click on the backdrop to close the modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Get character-specific color
  const getCharacterColor = (name) => {
    const colorMap = {
      'Iron Man': 'rgba(229, 62, 62, 0.8)',
      'Captain America': 'rgba(59, 130, 246, 0.8)',
      'Thor': 'rgba(245, 158, 11, 0.8)',
      'Hulk': 'rgba(16, 185, 129, 0.8)',
      'Black Widow': 'rgba(220, 38, 38, 0.8)',
      'Hawkeye': 'rgba(124, 58, 237, 0.8)',
      'Scarlet Witch': 'rgba(124, 58, 237, 0.8)',
      'Doctor Strange': 'rgba(76, 29, 149, 0.8)'
    };

    return colorMap[name] || 'rgba(107, 114, 128, 0.8)';
  };

  const characterColor = getCharacterColor(name);

  return (
    <div
      data-name="image-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
      onClick={handleBackdropClick} data-id="xwlogc6dd" data-path="components/ImageModal.js">

      <div
        data-name="image-modal-content"
        className="relative max-w-4xl max-h-[90vh] w-full mx-4 modal-entrance" data-id="i43o5xn2m" data-path="components/ImageModal.js">

        {/* Close button */}
        <button
          data-name="modal-close-button"
          className="absolute top-4 right-4 z-50 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all duration-300"
          onClick={onClose} data-id="5sy9asfdl" data-path="components/ImageModal.js">

          <i className="fas fa-times text-xl" data-id="ud8iwwotf" data-path="components/ImageModal.js"></i>
        </button>
        
        {/* Image container with cosmic effects */}
        <div
          data-name="modal-image-container"
          className="relative rounded-lg overflow-hidden modal-image-container" data-id="0sgfe3k2r" data-path="components/ImageModal.js">

          <img
            src={image}
            alt={name}
            className="w-full object-contain max-h-[80vh] modal-image"
            data-name="modal-hero-image" data-id="3s1nmacvg" data-path="components/ImageModal.js" />

          
          {/* Cosmic energy effect around the image */}
          <div
            data-name="modal-cosmic-effect"
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: `inset 0 0 100px ${characterColor}`,
              background: `radial-gradient(circle at center, transparent 30%, ${characterColor} 150%)`,
              opacity: 0.6,
              mixBlendMode: 'overlay'
            }} data-id="m5vi6fye5" data-path="components/ImageModal.js">
          </div>
          
          {/* Character name */}
          <div
            data-name="modal-character-name"
            className="absolute bottom-0 left-0 right-0 p-6 text-center bg-gradient-to-t from-black to-transparent" data-id="f95vb72dy" data-path="components/ImageModal.js">

            <h2
              className="text-3xl font-bold text-white hero-text-shadow"
              style={{ textShadow: `0 0 20px ${characterColor}` }} data-id="ms235xdr2" data-path="components/ImageModal.js">

              {name}
            </h2>
          </div>
          
          {/* Cosmic particles */}
          <div className="modal-particle particle-1" data-id="az63j6vg5" data-path="components/ImageModal.js"></div>
          <div className="modal-particle particle-2" data-id="ay5m9xgmx" data-path="components/ImageModal.js"></div>
          <div className="modal-particle particle-3" data-id="2hy9hyxpw" data-path="components/ImageModal.js"></div>
        </div>
      </div>
    </div>);

}