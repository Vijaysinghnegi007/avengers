// Timeline component
function Timeline() {
  const [activePhase, setActivePhase] = React.useState('all');
  const [filteredEvents, setFilteredEvents] = React.useState([]);

  // Filter timeline events based on selected phase
  React.useEffect(() => {
    if (activePhase === 'all') {
      setFilteredEvents(timelineData);
    } else {
      const phaseNumber = parseInt(activePhase.replace('phase', ''));
      setFilteredEvents(timelineData.filter((event) => event.phase === phaseNumber));
    }
  }, [activePhase]);

  return (
    <section
      id="timeline"
      data-name="timeline-section"
      className="py-20 bg-gradient-to-b from-gray-900 to-black" data-id="zh0j4hrth" data-path="components/Timeline.js">

      <div className="container-custom mx-auto px-4" data-id="uje1jk5v0" data-path="components/Timeline.js">
        <div className="text-center mb-12" data-id="h8hyvj2vh" data-path="components/Timeline.js">
          <h2
            data-name="timeline-title"
            className="section-title text-white inline-block" data-id="qm1v8h6q1" data-path="components/Timeline.js">

            Marvel Cinematic Universe Timeline
          </h2>
          <p
            data-name="timeline-subtitle"
            className="text-gray-300 max-w-2xl mx-auto mt-6" data-id="5slni6m2h" data-path="components/Timeline.js">

            Follow the epic journey of the Marvel Cinematic Universe from the beginning, through the Infinity Saga and beyond.
          </p>
        </div>
        
        {/* Phase filters */}
        <div
          data-name="timeline-filters"
          className="flex flex-wrap justify-center gap-4 mb-10" data-id="b2vrtu961" data-path="components/Timeline.js">

          <button
            data-name="filter-all-phases"
            className={`px-6 py-2 ${activePhase === 'all' ? 'bg-avengers-blue' : 'bg-gray-800'} text-white rounded-full hover:bg-blue-700 transition-colors duration-300`}
            onClick={() => setActivePhase('all')} data-id="4p1ecdw02" data-path="components/Timeline.js">

            All Phases
          </button>
          <button
            data-name="filter-phase1"
            className={`px-6 py-2 ${activePhase === 'phase1' ? 'bg-avengers-red' : 'bg-gray-800'} text-white rounded-full hover:bg-red-700 transition-colors duration-300`}
            onClick={() => setActivePhase('phase1')} data-id="7q71bdjt0" data-path="components/Timeline.js">

            Phase 1
          </button>
          <button
            data-name="filter-phase2"
            className={`px-6 py-2 ${activePhase === 'phase2' ? 'bg-avengers-gold' : 'bg-gray-800'} text-white rounded-full hover:bg-yellow-600 transition-colors duration-300`}
            onClick={() => setActivePhase('phase2')} data-id="64nbdgib0" data-path="components/Timeline.js">

            Phase 2
          </button>
          <button
            data-name="filter-phase3"
            className={`px-6 py-2 ${activePhase === 'phase3' ? 'bg-avengers-blue' : 'bg-gray-800'} text-white rounded-full hover:bg-blue-700 transition-colors duration-300`}
            onClick={() => setActivePhase('phase3')} data-id="na9huwkdx" data-path="components/Timeline.js">

            Phase 3
          </button>
          <button
            data-name="filter-phase4"
            className={`px-6 py-2 ${activePhase === 'phase4' ? 'bg-avengers-purple' : 'bg-gray-800'} text-white rounded-full hover:bg-purple-700 transition-colors duration-300`}
            onClick={() => setActivePhase('phase4')} data-id="2vu13j41t" data-path="components/Timeline.js">

            Phase 4
          </button>
        </div>
        
        {/* Timeline */}
        <div
          data-name="timeline-container"
          className="relative max-w-4xl mx-auto mt-16" data-id="a5hg17vlj" data-path="components/Timeline.js">

          {/* Timeline line */}
          <div
            data-name="timeline-line"
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-avengers-blue via-avengers-red to-avengers-gold"
            style={{ boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }} data-id="24g20b7e7" data-path="components/Timeline.js">
          </div>
          
          {/* Timeline events */}
          {filteredEvents.map((event, index) =>
          <div
            key={index}
            data-name={`timeline-event-${index}`}
            className={`relative flex items-center mb-16 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`
            } data-id="lxiqu5900" data-path="components/Timeline.js">

              {/* Content */}
              <div
              data-name={`timeline-content-${index}`}
              className={`w-5/12 p-6 bg-gray-900 rounded-lg shadow-lg border-t-4 ${
              index % 2 === 0 ? 'text-right mr-auto' : 'text-left ml-auto'}`
              }
              style={{
                borderColor: event.phase === 1 ? 'var(--avengers-red)' :
                event.phase === 2 ? 'var(--avengers-gold)' :
                event.phase === 3 ? 'var(--avengers-blue)' :
                'var(--avengers-purple)'
              }} data-id="8ehmhstsa" data-path="components/Timeline.js">

                <div
                data-name={`timeline-year-${index}`}
                className="text-sm font-bold mb-1"
                style={{
                  color: event.phase === 1 ? 'var(--avengers-red)' :
                  event.phase === 2 ? 'var(--avengers-gold)' :
                  event.phase === 3 ? 'var(--avengers-blue)' :
                  'var(--avengers-purple)'
                }} data-id="8iqrwccp5" data-path="components/Timeline.js">

                  {event.year}
                </div>
                <h3
                data-name={`timeline-event-title-${index}`}
                className="text-xl font-bold text-white mb-2" data-id="avjusskkm" data-path="components/Timeline.js">

                  {event.event}
                </h3>
                <p
                data-name={`timeline-description-${index}`}
                className="text-gray-300 text-sm" data-id="625ub2f30" data-path="components/Timeline.js">

                  {event.description}
                </p>
                <div
                data-name={`timeline-phase-badge-${index}`}
                className="mt-3 inline-block px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  backgroundColor: event.phase === 1 ? 'var(--avengers-red)' :
                  event.phase === 2 ? 'var(--avengers-gold)' :
                  event.phase === 3 ? 'var(--avengers-blue)' :
                  'var(--avengers-purple)'
                }} data-id="a0s9qot0x" data-path="components/Timeline.js">

                  Phase {event.phase}
                </div>
              </div>
              
              {/* Center dot */}
              <div
              data-name={`timeline-dot-${index}`}
              className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 cosmic-effect"
              style={{
                backgroundColor: event.phase === 1 ? 'var(--avengers-red)' :
                event.phase === 2 ? 'var(--avengers-gold)' :
                event.phase === 3 ? 'var(--avengers-blue)' :
                'var(--avengers-purple)',
                boxShadow: `0 0 15px ${
                event.phase === 1 ? 'rgba(239, 68, 68, 0.7)' :
                event.phase === 2 ? 'rgba(245, 158, 11, 0.7)' :
                event.phase === 3 ? 'rgba(59, 130, 246, 0.7)' :
                'rgba(124, 58, 237, 0.7)'}`

              }} data-id="y3cldiv2x" data-path="components/Timeline.js">
            </div>
              
              {/* Line to content */}
              <div
              data-name={`timeline-connector-${index}`}
              className={`absolute top-3 w-1/12 h-0.5 ${
              index % 2 === 0 ? 'right-[45%]' : 'left-[45%]'}`
              }
              style={{
                backgroundColor: event.phase === 1 ? 'var(--avengers-red)' :
                event.phase === 2 ? 'var(--avengers-gold)' :
                event.phase === 3 ? 'var(--avengers-blue)' :
                'var(--avengers-purple)',
                boxShadow: `0 0 10px ${
                event.phase === 1 ? 'rgba(239, 68, 68, 0.5)' :
                event.phase === 2 ? 'rgba(245, 158, 11, 0.5)' :
                event.phase === 3 ? 'rgba(59, 130, 246, 0.5)' :
                'rgba(124, 58, 237, 0.5)'}`

              }} data-id="oza740gli" data-path="components/Timeline.js">
            </div>
            </div>
          )}
          
          {/* Future teaser */}
          <div
            data-name="timeline-future"
            className="relative flex items-center" data-id="ivlxk4477" data-path="components/Timeline.js">

            <div
              data-name="timeline-future-content"
              className="w-full p-6 bg-gray-900 rounded-lg shadow-lg border-t-4 text-center mx-auto"
              style={{ borderColor: 'var(--avengers-gold)' }} data-id="kogeiqlrm" data-path="components/Timeline.js">

              <h3
                data-name="timeline-future-title"
                className="text-xl font-bold text-white mb-2" data-id="16aefri8m" data-path="components/Timeline.js">

                The Multiverse Saga Continues...
              </h3>
              <p
                data-name="timeline-future-description"
                className="text-gray-300 text-sm" data-id="dwiilzv35" data-path="components/Timeline.js">

                The story of the Marvel Cinematic Universe is far from over. New threats emerge as our heroes face challenges across the multiverse.
              </p>
              <button
                data-name="timeline-future-button"
                className="mt-4 px-6 py-2 bg-avengers-gold text-black font-bold rounded-full hover:bg-yellow-500 transition-colors duration-300" data-id="mfnyz9k6m" data-path="components/Timeline.js">

                Explore What's Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}