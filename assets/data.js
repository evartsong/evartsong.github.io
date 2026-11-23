/* =========================================================
   EVA SONG: THE GAME — all site content lives here.
   To add a project: copy one { ... } block in PROJECTS, change
   the text, and put its images in the /images folder.
   cover / images: filled in automatically from assets/media.js
   video: 'https://player.vimeo.com/video/123456'  or a YouTube
          embed link like 'https://www.youtube.com/embed/abc123'
   images: ['images/bibi-1.jpg', 'images/bibi-2.jpg', ...]
   ========================================================= */

window.PROJECTS = [
  {
    id: 'bibi',
    title: 'BiBi',
    genre: 'E-commerce + visual merchandising',
    era: '2026',
    season: 'SEASON 2026',
    when: '04.2026 – 11.2026',
    role: 'Brand Designer + Marketing Specialist',
    color: '#B0174F',
    badge: 'NEW',
    desc: 'Brand visuals, weekly email campaigns, social video and marketplace ads for a fashion wholesale brand.',
    brief: 'BiBi sells fashion wholesale to retailers. I owned how the brand looks everywhere buyers meet it, from website banners and emails to marketplace ads, and ran the campaigns that put new products in front of them every week.',
    results: [['30%', 'average open rate on weekly wholesale emails'], ['$25–30K', 'in Faire sales the week of each Faire email campaign'], ['100–130', 'new products uploaded every two weeks']],
    did: [
      'Own brand design and visual assets: website banners, email graphics, promotional materials and photo editing',
      'Run weekly Mailchimp and Faire wholesale email campaigns: a 30% open rate and $25–⁠30K in Faire sales each campaign week',
      'Build an AI workflow with Gemini, Higgsfield and Motioncast for on-model product shots and social video, with no new photoshoots',
      'Manage the e-commerce catalog: 100–⁠130 new products uploaded every two weeks, accurate pricing and inventory, Photoshop color variants',
      'Run FashionGO front-page ads and SEO, tracking sales and traffic to optimize product placement'
    ],
    tools: ['Photoshop', 'Illustrator', 'Mailchimp', 'Faire', 'FashionGO', 'Shopify', 'Gemini (Nano Banana)', 'Higgsfield AI', 'Motioncast AI'],
    type: 'Fashion wholesale + e-commerce',
    collaborators: '',
    recognition: '',
    tile: 'images/bibi/28.jpg', tilePos: '50% calc(14px - 34.74cqw)', /* home grid framing: pins the window sign 14px under the tile top, clear of the caption */
    cover: 'images/bibi/06.jpg',
    coverRatio: '1200 / 553',
    video: '',
    images: []
  },
  {
    id: 'vmix', title: 'vMix', genre: 'Brand identity + motion', era: '2023', season: 'SEASON 2023',
    when: '2023', role: 'Brand Designer + Animator', color: '#A3001C', badge: '',
    desc: 'Inviting streamers to find their inner conductor in live video.',
    brief: 'A rebrand concept for vMix, the live production and streaming software. To make professional broadcast tools feel inviting to a younger generation of streamers, I built the brand around one idea: everyone has an inner conductor. The conductor’s baton became the logo mark, conducting gestures became the brand shapes, and the system runs through posters, environment graphics, a website, an app and a brand montage.',
    did: [
      'Design the identity: the baton logo mark, wordmark, color palette and a set of brand shapes drawn from conducting gestures',
      'Animate the logo’s opening and closing and edit the brand montage',
      'Create identity and content posters and place the system in real spaces, from street posters to billboards',
      'Design the website and mobile app in Adobe XD, carrying the shapes and palette into the interface'
    ],
    tools: ['Illustrator', 'InDesign', 'Photoshop', 'Adobe XD', 'After Effects'],
    type: 'Rebrand concept for live streaming software', collaborators: '', recognition: '',
    tile: 'images/covers/vmix.jpg', tilePos: '50% 100%', /* home grid image; framed low so the poster words clear the caption */
    cover: 'images/vmix/11.jpg', coverRatio: '2000 / 1333', video: 'videos/vmix.mp4' /* self-hosted 1080p montage; was youtube.com/watch?v=OEFBsg1CY_U */, poster: 'images/vmix/video-poster.jpg', images: []
  },
  {
    id: 'warp', title: 'WARP', genre: 'Digital marketing', era: '2024', season: 'SEASON 2024',
    when: '03.2024 – 12.2024', role: 'Digital Marketing Specialist', color: '#3326B8', badge: '',
    desc: 'Website, landing pages, decks and B2B campaigns, leading marketing and revenue with the co-founders.',
    brief: 'At WARP, a Los Angeles freight logistics company, I worked directly with the co-founders and led the marketing and revenue teams, while also designing the website, landing pages and campaign assets myself.',
    results: [['18K → 25K', 'company LinkedIn followers while I was there'], ['20%', 'open rate on outbound sales emails, turning into sales meetings and new customers']],
    did: [
      'Lead the marketing and revenue teams with the co-founders: run meetings, assign tasks and hit deadlines',
      'Design the website, landing pages and business decks, and lead campaign design',
      'Run weekly email campaigns in HubSpot and Klaviyo, plus outbound sales emails that book meetings with new customers',
      'Manage social and create B2B content: press releases, case studies and graphics'
    ],
    tools: ['Photoshop', 'Illustrator', 'Figma', 'Midjourney', 'HubSpot', 'Klaviyo', 'Canva', 'LinkedIn Ads', 'Google Ads', 'Google Analytics'],
    type: 'Web, email + social for B2B freight logistics', collaborators: 'Co-founders, marketing and revenue teams', recognition: '',
    tile: 'images/covers/warp-feature.jpg', /* home grid image */
    cover: 'images/warp/25-hero.jpg' /* project page hero: From Dock to Doorstep with the corner logo removed (hero only); was warp/19.jpg */, coverRatio: '1200 / 1200', video: '', images: []
  },
  {
    id: 'soundtrack', title: 'Soundtrack Your Life', genre: 'Styleframes + logo reveal', era: '2023', season: 'SEASON 2023',
    when: '2023', role: 'Designer + Animator', color: '#0F6E4D', badge: 'GALLERY PICK',
    desc: 'Spotify’s instant access, told through a reversed animal food chain.',
    brief: 'One-minute styleframes showing how instantly accessible Spotify is, told through characters in a reversed animal food chain, ending on a Spotify logo reveal.',
    did: ['Flip the animal food chain into a story about instant access', 'Design sequential styleframes for a one-minute spot', 'Create most of the backgrounds and the lion’s details', 'Land it on a Spotify logo reveal'],
    tools: ['Photoshop', 'Procreate', 'Cinema 4D'],
    type: 'Concept spot for Spotify', collaborators: 'Elaine Lee', recognition: 'ArtCenter Student Gallery, 2023',
    tile: 'images/covers/soundtrack.png', /* home grid image */
    cover: 'images/soundtrack/01.png', coverRatio: '2000 / 1125', video: '', images: []
  },
  {
    id: 'label-lunacy', title: 'Label Lunacy', genre: '3D motion', era: '2023', season: 'SEASON 2023',
    when: '2023', role: '3D Designer + Animator', color: '#8A5F0E', badge: '',
    desc: 'A satirical ad on how brands turn everyday items into must-haves.',
    brief: 'A satirical ad about the power of a label: some shoppers will buy almost anything as long as it says Louis Vuitton. We staged it like a luxury product reveal, building curiosity with liquid gold and the LV logo until the final shot. What gets revealed is a plain folding chair.',
    did: ['Storyboard the scenes and plan the camera views', 'Build the reveal to keep viewers curious until the last shot', 'Model, light and animate the ad in 3D'],
    tools: ['Cinema 4D', 'After Effects'],
    type: 'Satirical ad', collaborators: 'Ewan Lee', recognition: '',
    tile: 'images/label-lunacy/05.jpg', /* home grid image */
    cover: 'images/label-lunacy/08.jpg', coverRatio: '1920 / 1080', video: 'videos/label-lunacy.mp4' /* self-hosted 1080p with sound; was youtube.com/watch?v=fuxI35rUmUM */, images: []
  },
  {
    id: 'moonrise', title: 'Moonrise Kingdom', genre: 'Title sequence', era: '2022', season: 'SEASON 2022',
    when: '2022', role: 'Designer + Animator', color: '#8A3A1C', badge: '',
    desc: 'Light as imagination in Sam and Suzy’s runaway love story.',
    brief: 'A title sequence for Moonrise Kingdom. Sam and Suzy fall in love and run away into the wilderness; light becomes the symbol of imagination at the story’s turning point.',
    did: ['Use light as the symbol of imagination', 'Storyboard the scenes in values to plan the lighting', 'Model, light and render the title sequence in Cinema 4D and Arnold'],
    tools: ['Cinema 4D', 'Arnold', 'Photoshop'],
    type: 'Film title sequence', collaborators: 'Jason Kim', recognition: '',
    tile: 'images/moonrise/03.jpg', /* home grid image */
    cover: 'images/covers/moonrise.jpg', coverRatio: '2000 / 1125', video: '', images: []
  },
  {
    id: 'gsa', title: 'GSA: GameStop Arena', genre: 'Brand identity + motion', era: '2022', season: 'SEASON 2022',
    when: '2022', role: 'Brand Designer', color: '#9E1F18', badge: '',
    desc: 'An identity for an arena where gamers compete for prizes and rep.',
    brief: 'A brand identity for GSArena, powered by GameStop: a new venue where local and global gamers and esports players compete for prizes and reputation. Rounded, expressive letters keep it approachable.',
    did: ['Name and position the venue: GSArena, powered by GameStop', 'Design rounded, expressive letterforms that feel approachable', 'Extend the identity into motion'],
    tools: ['InDesign', 'Photoshop', 'After Effects'],
    type: 'Esports venue', collaborators: '', recognition: '',
    tile: 'images/gsa/15.jpg', /* home grid image */
    cover: 'images/gsa/01.jpg', coverRatio: '2000 / 900', video: '', images: []
  },
  {
    id: 'shampoo-bar', title: 'Shampoo Bar', genre: '3D motion', era: '2023', season: 'SEASON 2023',
    when: '2023', role: '3D Designer + Animator', color: '#146A75', badge: 'GALLERY PICK',
    desc: 'A 3D short nudging people from plastic bottles to waste-free bars.',
    brief: 'A short 3D animation encouraging people to switch from plastic bottles to waste-free shampoo bars, told through two characters with front-camera framing, facial expressions and body motion.',
    did: ['Tell a sustainability message through two characters', 'Stage it in front-camera framing with expressive faces and body motion', 'Model, light and render in Cinema 4D and Redshift'],
    tools: ['Cinema 4D', 'Redshift', 'After Effects'],
    type: 'Sustainability short', collaborators: 'Sarah Lee', recognition: 'ArtCenter Student Gallery, 2023',
    tile: 'images/shampoo-bar/03.jpg', /* home grid image */
    cover: 'images/shampoo-bar/01.jpg', coverRatio: '1920 / 1080', video: 'videos/shampoo-bar.mp4' /* self-hosted 1080p with sound; was youtube.com/watch?v=Tv06w4CawK4 */, poster: 'images/shampoo-bar/video-poster.jpg', images: []
  },
  {
    id: 'minari', title: 'Minari', genre: 'Title sequence', era: '2021', season: 'SEASON 2021',
    when: '2021', role: 'Designer', color: '#3F6420', badge: '',
    desc: 'A seed carries growth and hope through the film’s burning-crops scene.',
    brief: 'A title sequence for Minari that visualizes growth and hope through a seed, framed around the scene where the crops burn and Jacob and Monica try to save them.',
    did: ['Use a seed as the framing device for growth and hope', 'Build the sequence around the burning-crops scene', 'Set the credits in one simple sans serif, using scale for hierarchy'],
    tools: ['Photoshop', 'Lightroom', 'InDesign'],
    type: 'Film title sequence', collaborators: '', recognition: '',
    tile: 'images/minari/06.jpg', /* home grid image */
    cover: 'images/minari/01.jpg', coverRatio: '2000 / 1125', video: '', images: []
  },
  {
    id: 'hanbok', title: 'Hanbok', genre: 'Exhibition + publication', era: '2021', season: 'SEASON 2021',
    when: '2021', role: 'Graphic Designer', color: '#7A2E5A', badge: '',
    desc: 'An exhibition and book for six South Korean contemporary artists, colored by traditional hanbok silk.',
    brief: 'A group exhibition and publication featuring six South Korean contemporary artists who weave history and culture into their work. The book covers the exhibition introduction, Korean art history, artist sections and interviews, with colors and silk textures drawn from traditional Korean clothing.',
    did: ['Design the publication: cover, spreads and artist sections', 'Build a color and texture system from traditional hanbok silk', 'Extend the identity into the exhibition wall, promotional poster and an artist poster series'],
    tools: ['InDesign', 'Illustrator', 'Photoshop'],
    type: 'Exhibition + publication', collaborators: '', recognition: '',
    tile: 'images/hanbok/01.jpg', /* home grid image */
    cover: 'images/hanbok/spread-1.jpg', coverRatio: '2000 / 1500', video: '', images: []
  }
];

/* Side quests that get their own page (project.html?id=...). Same fields as PROJECTS.
   Images come from assets/media.js; video can be a YouTube/Vimeo link or an .mp4 path. */
window.EXTRAS = [
  {
    id: 'eve-arnold', title: 'Eve Arnold', genre: 'Editorial design', when: 'ArtCenter', role: 'Designer', color: '#3B3F46', badge: '',
    desc: 'Book spreads for a Great Photographer Series volume on photographer Eve Arnold.',
    brief: 'An editorial layout for a photographer monograph: essays, captions and full-bleed photography paced across a run of spreads.',
    did: [], tools: ['InDesign'], type: 'Book spreads', collaborators: '', recognition: '', video: ''
  },
  {
    id: 'akkurat', title: 'Akkurat type specimen', genre: 'Graphic design', when: 'ArtCenter', role: 'Designer', color: '#E8573A', badge: '',
    desc: 'A type specimen for LL Akkurat: its history, weights and glyphs.',
    brief: 'A type specimen series for the typeface LL Akkurat, mixing its history and character with expressive typographic layouts.',
    did: [], tools: ['InDesign', 'Illustrator'], type: 'Type specimen', collaborators: '', recognition: '', video: ''
  },
  {
    id: 'nyum', title: 'Nyum! Menu', genre: 'Graphic design', when: 'Personal', role: 'Designer + Illustrator', color: '#E59BC4', badge: '',
    desc: 'An illustrated sushi menu with cat characters.',
    brief: 'An illustrated menu for a playful sushi spot, pairing each roll with its own character.',
    did: [], tools: ['Procreate', 'Illustrator'], type: 'Menu design', collaborators: '', recognition: '', video: ''
  },
  {
    id: 'voyage', title: 'Voyage', genre: '3D motion', when: 'Personal', role: '3D Artist', color: '#5B2BB5', badge: '',
    desc: 'A short 3D motion piece.',
    brief: 'A short 3D motion experiment.',
    did: [], tools: ['Cinema 4D', 'Redshift'], type: '3D animation', collaborators: '', recognition: '', video: 'videos/voyage.mp4'
  },
  {
    id: 'karaoke-cube', title: 'Karaoke Cube', genre: '3D motion', when: 'Personal', role: '3D Artist', color: '#3E2A8C', badge: '',
    desc: 'A 10-second 3D loop.',
    brief: 'A short 3D motion loop.',
    did: [], tools: ['Cinema 4D', 'Redshift'], type: '3D loop', collaborators: '', recognition: '', video: 'videos/karaoke-cube.mp4'
  },
  {
    id: 'metamorphosis', title: 'Metamorphosis', genre: 'Illustration', when: 'Personal', role: 'Illustrator', color: '#6B3FB8', badge: '',
    desc: 'Illustrated frames of a transformation, ending on a Riot Games reveal.',
    brief: 'A sequence of illustrated frames built around light, hands and transformation.',
    did: [], tools: ['Procreate', 'Photoshop'], type: 'Illustrated frames', collaborators: '', recognition: '', video: ''
  },
  {
    id: 'snowstorm', title: 'Snowstorm', genre: 'Illustration', when: 'Personal', role: 'Illustrator', color: '#1F4F8A', badge: '',
    desc: 'Illustrated frames of a climber facing a mountain storm.',
    brief: 'Two illustrated frames: a mountain storm and the figure walking into it.',
    did: [], tools: ['Procreate', 'Photoshop'], type: 'Illustrated frames', collaborators: '', recognition: '', video: ''
  },
  {
    id: 'killjoy', title: 'Killjoy × Adventure Time', genre: 'Illustration', when: 'Personal', role: 'Illustrator', color: '#C99BE8', badge: '',
    desc: 'Valorant’s Killjoy drawn in the Adventure Time style.',
    brief: 'Fan illustration mixing a Valorant agent with Adventure Time’s character style.',
    did: [], tools: ['Procreate'], type: 'Fan illustration', collaborators: '', recognition: '', video: ''
  },
  {
    id: 'nicotine', title: 'Nicotine', genre: 'Illustration', when: 'Personal', role: 'Illustrator', color: '#2B2F7A', badge: '',
    desc: 'A bold character illustration.',
    brief: 'A character illustration with saturated color and pattern.',
    did: [], tools: ['Procreate'], type: 'Illustration', collaborators: '', recognition: '', video: ''
  },
  {
    id: 'portrait', title: 'Portrait study', genre: 'Illustration', when: 'Personal', role: 'Illustrator', color: '#8A5A4A', badge: '',
    desc: 'A digital painting portrait study.',
    brief: 'A painted portrait study focused on light and skin tones.',
    did: [], tools: ['Procreate'], type: 'Digital painting', collaborators: '', recognition: '', video: ''
  },
  {
    id: 'ig-characters', title: 'Character illustrations', genre: 'Illustration', when: '2020 – 2022', role: 'Illustrator', color: '#D94A6B', badge: '',
    desc: 'Original characters: a girl in a beanie, a duck with a knife, a starry space bird and a robot.',
    brief: 'A set of original character illustrations from my Instagram, mixing flat digital color with playful shapes.',
    did: [], tools: ['Procreate', 'Photoshop'], type: 'Character design', collaborators: '', recognition: '', video: ''
  },
  {
    id: 'ig-portraits', title: 'Digital portraits', genre: 'Illustration', when: '2017 – 2019', role: 'Illustrator', color: '#4E6E7A', badge: '',
    desc: 'Painted digital portraits focused on light, hair and skin.',
    brief: 'Digital portrait paintings exploring soft light, hair texture and skin tones.',
    did: [], tools: ['Procreate', 'Photoshop'], type: 'Digital painting', collaborators: '', recognition: '', video: ''
  },
  {
    id: 'ig-paintings', title: 'Painting studies', genre: 'Illustration', when: '2017 – 2020', role: 'Painter', color: '#5B3A2E', badge: '',
    desc: 'Acrylic, oil and gouache studies: portraits, a Viking, landscapes and the sea.',
    brief: 'Traditional painting studies from photo references and life: portraits, figures, landscapes and seascapes in acrylic, oil and gouache.',
    did: [], tools: ['Acrylic', 'Oil', 'Gouache'], type: 'Traditional painting', collaborators: '', recognition: '', video: ''
  },
  {
    id: 'ig-ink', title: 'Ink drawings', genre: 'Illustration', when: '2017 – 2020', role: 'Illustrator', color: '#22252B', badge: '',
    desc: 'Detailed pen-and-ink work: Kobe, crowded collages, statue heads, fashion figures and a gamer’s room.',
    brief: 'Pen-and-ink drawings built from dense line work and pattern, from portrait studies to full collages and a one-point perspective gamer’s room.',
    did: [], tools: ['Pen + ink', 'Micron'], type: 'Ink illustration', collaborators: '', recognition: '', video: ''
  },
  {
    id: 'ig-drawing', title: 'Drawing studies', genre: 'Illustration', when: '2018 – 2021', role: 'Artist', color: '#6E6E6E', badge: '',
    desc: 'Charcoal figures and drapery, a statue study and colored-pencil hands.',
    brief: 'Observational drawing studies in charcoal and colored pencil.',
    did: [], tools: ['Charcoal', 'Colored pencil'], type: 'Drawing studies', collaborators: '', recognition: '', video: ''
  },
  {
    id: 'ig-sculpt', title: 'Sculpt study', genre: '3D', when: '2022', role: '3D Artist', color: '#2E2E33', badge: '',
    desc: 'A digital sculpture study rendered in 3D.',
    brief: 'A 3D sculpting study of a classical figure, rendered from several angles.',
    did: [], tools: ['ZBrush', 'Cinema 4D'], type: '3D sculpt', collaborators: '', recognition: '', video: ''
  }
];

/* Play page board: one flip card per piece, grouped by type of art.
   type: 3d | painting | digital | ink | drawing | sketch | graphic | editorial | creator
   image + ratio: the picture on the card. tools: shown as MADE WITH on the back.
   id: a video side quest above (Voyage, Karaoke Cube). */
window.QUESTS = [
  { type: 'painting', title: 'Viking portrait', image: 'images/ig-paintings/01.jpg', ratio: '1440 / 1800', tools: ['Acrylic painting'], color: '#2A2A2A' },
  { type: 'ink', title: 'RIP Kobe', image: 'images/ig-ink/01.jpg', ratio: '1439 / 1669', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Statue study', image: 'images/ig-drawing/03.jpg', ratio: '1080 / 1080', tools: ['Charcoal', 'Colored pencil'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Rhino studies', image: 'images/play/018.jpg', ratio: '1080 / 1080', tools: ['Pen'], color: '#2A2A2A' },
  { type: 'painting', title: 'Blue portrait', image: 'images/ig-paintings/04.jpg', ratio: '1440 / 1800', tools: ['Acrylic painting'], color: '#2A2A2A' },
  { type: 'ink', title: 'Crowd of faces', image: 'images/ig-ink/02.jpg', ratio: '1440 / 1800', tools: ['Pen'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Hand studies', image: 'images/ig-drawing/04.jpg', ratio: '1440 / 1117', tools: ['Ink', 'Colored pens'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Pattern studies', image: 'images/play/019.jpg', ratio: '1080 / 1080', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: '3d', title: 'Clay sculpture', image: 'images/college/17.jpg', ratio: '864 / 1296', tools: ['Clay'], color: '#2A2A2A' },
  { type: '3d', title: 'Creature sculpt', image: 'images/play/001.jpg', ratio: '1080 / 720', tools: ['Octane'], color: '#2A2A2A', video: 'videos/play/creature-sculpt.mp4' },
  { type: 'painting', title: 'Gentleman portrait', image: 'images/ig-paintings/05.jpg', ratio: '1440 / 1800', tools: ['Acrylic painting'], color: '#2A2A2A' },
  { type: 'ink', title: 'Creatures', image: 'images/ig-ink/03.jpg', ratio: '1440 / 1800', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Figure study', image: 'images/play/007.jpg', ratio: '1284 / 1600', tools: ['Charcoal'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Billie Eilish tour merch', image: 'images/play/022.jpg', ratio: '1080 / 657', tools: ['Pen'], color: '#2A2A2A' },
  { type: 'painting', title: 'Seated man', image: 'images/ig-paintings/06.jpg', ratio: '1026 / 1171', tools: ['Acrylic painting'], color: '#2A2A2A' },
  { type: 'ink', title: 'Shattered portraits', image: 'images/ig-ink/04.jpg', ratio: '937 / 1171', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Two figures', image: 'images/play/008.jpg', ratio: '1284 / 1600', tools: ['Charcoal'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Monkey studies', image: 'images/play/024.jpg', ratio: '1080 / 865', tools: ['Colored pencil'], color: '#2A2A2A' },
  { type: 'painting', title: 'Valley landscape', image: 'images/ig-paintings/07.jpg', ratio: '1440 / 1092', tools: ['Acrylic painting'], color: '#2A2A2A' },
  { type: 'ink', title: 'Portrait in black', image: 'images/ig-ink/05.jpg', ratio: '1440 / 1440', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Face studies', image: 'images/play/026.jpg', ratio: '1080 / 857', tools: ['Pen'], color: '#2A2A2A' },
  { type: 'painting', title: 'Coastal landscape', image: 'images/ig-paintings/11.jpg', ratio: '1080 / 903', tools: ['Acrylic painting'], color: '#2A2A2A' },
  { type: 'digital', title: 'Killjoy x Adventure Time', image: 'images/killjoy/01.jpg', ratio: '1350 / 1771', tools: ['Procreate'], color: '#2A2A2A' },
  { type: 'ink', title: 'Line portrait', image: 'images/ig-ink/06.jpg', ratio: '1440 / 1721', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Character sketches', image: 'images/play/027.jpg', ratio: '1080 / 1350', tools: ['Pen'], color: '#2A2A2A' },
  { type: 'painting', title: 'Portrait studies', image: 'images/play/005.jpg', ratio: '1440 / 1440', tools: ['Mixed media'], color: '#2A2A2A' },
  { type: 'digital', title: 'Nicotine', image: 'images/nicotine/01.jpg', ratio: '2000 / 1951', tools: ['Procreate'], color: '#2A2A2A' },
  { type: 'ink', title: 'Squad lineup', image: 'images/ig-ink/07.jpg', ratio: '1080 / 1080', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Anatomy studies', image: 'images/play/012.jpg', ratio: '1080 / 820', tools: ['Charcoal'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Sketchbook spread', image: 'images/play/028.jpg', ratio: '1123 / 898', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'digital', title: 'Portrait study', image: 'images/portrait/01.jpg', ratio: '1841 / 2000', tools: ['Photoshop painting'], color: '#2A2A2A' },
  { type: 'ink', title: 'Hanging out', image: 'images/ig-ink/08.jpg', ratio: '1080 / 977', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'graphic', title: 'Nyum! Menu', image: 'images/nyum/01.jpg', ratio: '1800 / 1350', tools: ['Procreate'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Seated figure', image: 'images/play/013.jpg', ratio: '1280 / 1600', tools: ['Graphite'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Character concepts', image: 'images/play/029.jpg', ratio: '1080 / 683', tools: ['Pen'], color: '#2A2A2A' },
  { type: 'painting', title: 'Seated figure', image: 'images/play/011.jpg', ratio: '1080 / 1350', tools: ['Acrylic painting'], color: '#2A2A2A' },
  { type: 'digital', title: 'Killjoy Valorant', image: 'images/ig-drawing/06.jpg', ratio: '1440 / 1440', tools: ['Procreate'], color: '#2A2A2A' },
  { type: 'ink', title: 'Balloon girl', image: 'images/ig-ink/09.jpg', ratio: '1080 / 1286', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'graphic', title: 'Enlightenment', image: 'images/play/002.jpg', ratio: '1440 / 1079', tools: ['Typography'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Girl in static', image: 'images/play/015.jpg', ratio: '1080 / 1080', tools: ['Pen'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Constellations', image: 'images/play/031.jpg', ratio: '1080 / 1066', tools: ['White ink'], color: '#2A2A2A' },
  { type: 'painting', title: 'Cat collage', image: 'images/college/11.jpg', ratio: '1277 / 936', tools: ['Mixed media'], color: '#2A2A2A' },
  { type: 'digital', title: 'Portrait in green', image: 'images/ig-portraits/01.jpg', ratio: '1440 / 1800', tools: ['Photoshop painting'], color: '#2A2A2A' },
  { type: 'ink', title: 'Piano dress', image: 'images/ig-ink/10.jpg', ratio: '1440 / 1440', tools: ['Pencil'], color: '#2A2A2A' },
  { type: 'painting', title: 'Jungle scene', image: 'images/college/15.jpg', ratio: '1237 / 936', tools: ['Acrylic painting'], color: '#2A2A2A' },
  { type: 'digital', title: 'Portrait in blue', image: 'images/ig-portraits/02.jpg', ratio: '705 / 881', tools: ['Photoshop painting'], color: '#2A2A2A' },
  { type: 'ink', title: 'Gamer\'s room', image: 'images/ig-ink/11.jpg', ratio: '1440 / 1800', tools: ['Pencil'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Climber', image: 'images/play/020.jpg', ratio: '1080 / 1080', tools: ['Pen'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Music collage', image: 'images/sketchbook/01.jpg', ratio: '1222 / 1600', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'painting', title: 'Still life with pitcher', image: 'images/college/16.jpg', ratio: '1163 / 936', tools: ['Acrylic painting'], color: '#2A2A2A' },
  { type: 'digital', title: 'Checkerboard portrait', image: 'images/ig-portraits/03.jpg', ratio: '1080 / 701', tools: ['Mixed media'], color: '#2A2A2A' },
  { type: 'ink', title: 'Comic page', image: 'images/ig-ink/12.jpg', ratio: '1440 / 1711', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Reclining on checkers', image: 'images/play/021.jpg', ratio: '654 / 1080', tools: ['Pen', 'Colored pencil'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Perspective study', image: 'images/sketchbook/02.jpg', ratio: '1600 / 1166', tools: ['Colored pencil'], color: '#2A2A2A' },
  { type: 'digital', title: 'Duck character', image: 'images/ig-characters/02.jpg', ratio: '1440 / 1439', tools: ['Procreate'], color: '#2A2A2A' },
  { type: 'ink', title: 'Comic page II', image: 'images/ig-ink/13.jpg', ratio: '1440 / 1440', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Tree study', image: 'images/play/023.jpg', ratio: '723 / 723', tools: ['Pencil'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Portrait on orange', image: 'images/sketchbook/03.jpg', ratio: '1120 / 1600', tools: ['Graphite'], color: '#2A2A2A' },
  { type: 'painting', title: 'Coastal landscape', image: 'images/college/18.jpg', ratio: '1161 / 936', tools: ['Acrylic painting'], color: '#2A2A2A' },
  { type: 'digital', title: 'Space whale', image: 'images/ig-characters/03.jpg', ratio: '759 / 720', tools: ['Cinema 4D', 'Procreate'], color: '#2A2A2A' },
  { type: 'ink', title: 'Seated figure', image: 'images/play/003.jpg', ratio: '1281 / 1600', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Portrait in pen', image: 'images/play/030.jpg', ratio: '1080 / 1080', tools: ['Ballpoint pen'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Character outfits', image: 'images/sketchbook/04.jpg', ratio: '1600 / 1313', tools: ['Pen', 'Ink', 'Color'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Robot', image: 'images/ig-characters/04.jpg', ratio: '1080 / 1349', tools: ['Ballpoint pen'], color: '#2A2A2A' },
  { type: 'ink', title: 'Reclining figure', image: 'images/play/004.jpg', ratio: '1312 / 1600', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Roman soldier', image: 'images/college/01.jpg', ratio: '936 / 1240', tools: ['Graphite'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Plants, birds', image: 'images/sketchbook/05.jpg', ratio: '1600 / 1295', tools: ['Ballpoint pen'], color: '#2A2A2A' },
  { type: 'ink', title: 'Streetwear character', image: 'images/play/014.jpg', ratio: '1080 / 1080', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Still life with lantern', image: 'images/college/02.jpg', ratio: '1232 / 936', tools: ['Graphite'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Character lineup', image: 'images/sketchbook/06.jpg', ratio: '1600 / 1294', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'ink', title: 'Car and character', image: 'images/play/016.jpg', ratio: '1080 / 1080', tools: ['Pen', 'Ink', 'Marker'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Studio corner', image: 'images/college/04.jpg', ratio: '936 / 1210', tools: ['Graphite'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Character turnaround', image: 'images/sketchbook/07.jpg', ratio: '1361 / 1600', tools: ['Pen', 'Colored pencil'], color: '#2A2A2A' },
  { type: 'ink', title: 'EVA SONG lettering', image: 'images/play/025.jpg', ratio: '1080 / 1141', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Seated figure', image: 'images/play/032.jpg', ratio: '936 / 1236', tools: ['Graphite'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Musicians', image: 'images/sketchbook/08.jpg', ratio: '1600 / 1311', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Pattern collage', image: 'images/college/03.jpg', ratio: '936 / 1221', tools: ['Charcoal'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Tiger and towers', image: 'images/college/05.jpg', ratio: '1440 / 780', tools: ['Graphite'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Creature notes', image: 'images/sketchbook/09.jpg', ratio: '1600 / 1229', tools: ['Pen'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Winged creature', image: 'images/college/06.jpg', ratio: '1137 / 734', tools: ['Colored pencil', 'Graphite'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Plant creatures', image: 'images/sketchbook/10.jpg', ratio: '1600 / 1305', tools: ['Pen'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Location sketches', image: 'images/college/07.jpg', ratio: '1227 / 936', tools: ['Graphite'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Monkey studies', image: 'images/sketchbook/11.jpg', ratio: '1600 / 1285', tools: ['Pen', 'Colored pencil'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Bust and pattern', image: 'images/college/08.jpg', ratio: '864 / 1320', tools: ['Graphite', 'Colored pencil'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Underwater study', image: 'images/college/09.jpg', ratio: '864 / 1296', tools: ['Graphite'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Drapery, dancer', image: 'images/sketchbook/13.jpg', ratio: '1600 / 1306', tools: ['Graphite'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Portrait with a spoon', image: 'images/college/10.jpg', ratio: '936 / 1291', tools: ['Colored pencil'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Face studies', image: 'images/sketchbook/14.jpg', ratio: '1038 / 1600', tools: ['Pen'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Lettering, character', image: 'images/sketchbook/15.jpg', ratio: '1600 / 1258', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'drawing', title: 'The Robe book cover', image: 'images/college/14.jpg', ratio: '936 / 1247', tools: ['Mixed media'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Texture studies', image: 'images/sketchbook/17.jpg', ratio: '787 / 1600', tools: ['Pen', 'Ink'], color: '#2A2A2A' },
  { type: 'sketch', title: 'Form studies, spaceships', image: 'images/sketchbook/16.jpg', ratio: '1063 / 1600', tools: ['Pencil'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Gesture drawings', image: 'images/play/037.jpg', ratio: '1252 / 936', tools: ['Charcoal'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Gesture drawings', image: 'images/play/038.jpg', ratio: '1251 / 936', tools: ['Charcoal'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Gesture drawings', image: 'images/play/039.jpg', ratio: '1253 / 936', tools: ['Charcoal'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Gesture drawings', image: 'images/play/040.jpg', ratio: '1246 / 936', tools: ['Colored pencil'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Gesture drawings', image: 'images/play/041.jpg', ratio: '1253 / 936', tools: ['Colored pencil'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Figure study', image: 'images/play/042.jpg', ratio: '936 / 1244', tools: ['Charcoal'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Gesture drawings', image: 'images/play/044.jpg', ratio: '1262 / 936', tools: ['Charcoal'], color: '#2A2A2A' },
  { type: 'drawing', title: 'Gesture drawings', image: 'images/play/047.jpg', ratio: '1247 / 936', tools: ['Charcoal'], color: '#2A2A2A' }
];

/* Play: Story mode. Multi-part pieces shown as slideshows (arrows, swipe, autoplay).
   id: images come from assets/media.js for that id. Order here = order on the page. */
window.STORIES = [
  { id: 'snowstorm', title: 'Snowstorm', type: 'Digital art', text: 'Two frames: a mountain storm, then the climber walking into it.', tools: ['Procreate', 'Photoshop'], start: 1 },
  { id: 'akkurat', title: 'Akkurat type specimen', type: 'Graphic design', text: 'A type specimen for LL Akkurat: its history, weights and glyphs, told across seven spreads.', tools: ['InDesign', 'Illustrator'], start: 4 },
  { id: 'eve-arnold', title: 'Eve Arnold', type: 'Editorial', text: 'Book spreads for a Great Photographer Series volume on photographer Eve Arnold.', tools: ['InDesign'], start: 4 },
  { id: 'metamorphosis', title: 'Riot Games: Metamorphosis', type: 'Digital art', text: 'Illustrated frames of light, hands and transformation, ending on a Riot Games reveal.', tools: ['Procreate', 'Photoshop'], start: 2 },
  { id: 'squareone', title: 'SquareOne', type: 'Web design', text: 'A fashion resale marketplace: the homepage, menswear and womenswear shops, and the page that invites people to sell.', tools: ['Adobe XD', 'Illustrator'], start: 6 },
  { id: 'woobofood', title: 'Woobofood, Bullbop', type: 'Web design', text: 'Websites for Woobofood, an international Korean food company, its brands Purunchon, Lechi and Ocean Snack, and Bullbop, its Korean BBQ food truck.', tools: ['Wix', 'Illustrator'], start: 7 }
];

/* Play: Cutscenes. Animations shown as video players with sound (no autoplay). */
window.CUTSCENES = [
  { title: 'Voyage', type: '3D animation', text: 'A short 3D motion piece.', video: 'videos/voyage.mp4', poster: 'images/covers/voyage.jpg', tools: ['Cinema 4D', 'Redshift'] },
  { title: 'Karaoke Cube', type: '3D loop', text: 'A 10-second 3D loop.', video: 'videos/karaoke-cube.mp4', poster: 'images/covers/karaoke-cube.jpg', tools: ['Cinema 4D', 'Redshift'] }
];
/* Links used across the site */
window.LINKS = {
  email: 'mailto:evartsong@gmail.com',
  linkedin: 'https://www.linkedin.com/in/eva-song-5261561b7/',
  instagram: 'https://www.instagram.com/evartsong',
  resume: 'evasong_resume.pdf' /* drop the PDF into the site folder with this name */
};

/* How each project page is laid out, top to bottom:
   final  = Final work (shown first and biggest)
   process = Process (storyboards, sketches, renders, strategy)
   ref    = Moodboard + references
   imgs: image numbers in images/<id>/ (01.jpg = 1). clips: video numbers in videos/<id>/.
   video: true puts the project's main video (from PROJECTS) in that spot.
   Titles and captions come from the old Cargo pages. */
window.SECTIONS = {
  bibi: [
    { g: 'final', title: 'Email campaigns', phone: 2, text: 'Weekly wholesale emails for Faire Campaigns and FashionGO through Mailchimp, averaging a 30% open rate. The GIFs play in place, just as customers saw them.', imgs: [8, 9, 10, 11, 13], labels: { '8': 'Early Black Friday · Faire', '9': 'Early Black Friday · FashionGO', '10': 'Spring Summer pre-order', '11': 'Dallas Market Show best sellers', '13': 'Santa’s Final Order List' }, start: { '8': 0.019, '9': 0.0631, '10': 0.0206, '11': 0.0212, '13': 0.0222 }, overlays: { '8': [['images/bibi/email/faire-bf.gif', 0.06289, 0.06289], [['images/bibi/email/faire-leopard-1.jpg', 'images/bibi/email/faire-leopard-2.jpg', 'images/bibi/email/faire-leopard-3.jpg'], 0.41507, 0.12578]], '9': [['images/bibi/email/fg-bf.gif', 0.06289, 0.06294], [['images/bibi/email/fg-cargo-1.jpg', 'images/bibi/email/fg-cargo-2.jpg', 'images/bibi/email/fg-cargo-3.jpg', 'images/bibi/email/fg-cargo-4.jpg'], 0.27043, 0.12578]], '10': [[['images/bibi/email/ss-sweater-1.jpg', 'images/bibi/email/ss-sweater-2.jpg', 'images/bibi/email/ss-sweater-3.jpg', 'images/bibi/email/ss-sweater-4.jpg'], 0.246, 0.13666]], '13': [['images/bibi/20.gif', 0.022, 0.07334]] } },
    { g: 'final', title: 'Store + marketplace banners', text: 'Homepage banners for Shopify, FashionGO and Faire, desktop and mobile.', imgs: [1, 3, 2, 5] },
    { g: 'final', title: 'Instagram posts, stories + reels', phone: 2, text: 'Posts, stories and reels for Instagram, including AI-styled product videos and the Dallas Market Center booth.', imgs: [16, 18, 17, 15, 14, 19, 20, 21, 22, 29, 30, 31, 35], clips: [1, 2, 3], frame: 'macbook-screens', labels: { '29': 'Higgsfield AI', '30': 'Higgsfield AI', '31': 'Higgsfield AI', '35': 'Instagram' }, focus: { '29': 'right', '30': 'right', '31': 'right', '35': 'left' } },
    { g: 'final', title: 'Collections', text: 'Collection graphics, including Early Black Friday and Best Sellers, and the collection pages on the BiBi and So-Me Faire storefronts.', imgs: [7, 27, 23, 6], frame: 'macbook-screens', labels: { '23': 'Faire Storefront · So-Me', '27': 'Faire Storefront · BiBi' }, layout: 'pairs' },
    { g: 'final', title: 'Running the storefronts', text: 'The day-to-day behind the storefronts: FashionGO ads and storefront, the ERP catalog, Motioncast AI video and the clone schedule sheet.', imgs: [25, 26, 28, 32, 33, 34], frame: 'macbook', labels: { '25': 'FashionGO Ads', '26': 'ERP Software', '28': 'FashionGO Storefront', '32': 'Motioncast AI', '33': 'Motioncast AI', '34': 'FashionGO Clone Schedule Sheet' } },
    { g: 'process', title: 'AI styling', text: 'No model shoot, just a design reference and a fabric swatch. I put each look on a model with Gemini (Nano Banana) and polished it in Photoshop.', imgs: [107, 106, 90, 91, 92, 93, 94, 108, 103, 85, 83, 84, 109, 105, 88, 89, 104, 86, 87, 102, 70, 71, 72, 73, 74, 110, 66, 67, 68, 69], layout: '4', recipes: [{ ref: 102, refLabel: 'Product reference', out: [70, 71, 72, 73, 74], outLabel: 'AI result · grey half-zip' }, { ref: 110, refLabel: 'Product reference', out: [66, 67, 68, 69], outLabel: 'AI result · bunny sweater' }, { ref: 107, refLabel: 'Product reference', fabric: 106, out: [90, 91, 92, 93, 94] }, { ref: 108, refLabel: 'Back reference', fabric: 103, out: [85, 83, 84] }, { ref: 109, refLabel: 'Product reference', fabric: 105, out: [88, 89] }, { ref: 109, refLabel: 'Product reference', fabric: 104, out: [86, 87] }] },
    { g: 'process', title: 'Same pose, two styles', text: 'New design, old photoshoot: I put the new shorts into an existing shoot, pose for pose, with Gemini and Photoshop, so they went live without a reshoot.', imgs: [75, 79, 76, 80, 77, 81, 78, 82], layout: '4', sets: [[76, 80], [77, 81], [75, 79], [78, 82]], setWord: 'STYLES' },
    { g: 'process', title: 'Photoshop color variants', text: 'One product shoot, every colorway: color variants made in Photoshop for BiBi and its sister label So-Me.', imgs: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 37, 36, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 96, 97, 98, 99, 100, 101], layout: '4', sets: [[36, 37], [38, 39, 40, 41], [42, 43, 44, 45], [46, 47, 48, 49, 50], [51, 52, 53], [54, 55, 56, 57], [58, 59, 60, 61, 62, 63, 64, 65], [96, 97, 98, 99, 100, 101]] }
  ],
  warp: [
    { g: 'final', title: 'Website', frame: 'macbook-pages', cols: 2, pace: 1.6, text: 'The 2024 WARP website, from the home and company pages to the service pages. Each page scrolls from top to bottom.', imgs: [1, 2, 3, 4, 5, 8], labels: { '1': 'Home', '2': 'About us', '3': 'Our technology', '4': 'Sustainability', '5': 'Store replenishments', '8': 'LTL' } },
    { g: 'final', title: 'LinkedIn + blog graphics', phone: 2, text: 'B2B LinkedIn and blog graphics for WARP LTL Freight, built on the brand’s blue, yellow and black.', imgs: [15, 16, 17, 18, 19, 20, 22, 24, 28, 29, 32, 33] },
    { g: 'final', title: 'Network maps + data', text: 'Monthly lane and cross-dock maps and city delivery totals for the blog and LinkedIn.', imgs: [36, 37, 38, 40, 41, 42], cols: 2 },
    { g: 'final', title: 'Blog illustrations', text: 'Isometric illustrations and product visuals for blog headers, case studies and the WARP apps.', imgs: [47, 52, 53, 54], cols: 2 }
  ],
  soundtrack: [
    { g: 'final', title: 'Styleframes', layout: 'poster', text: 'Our story focuses on animal characters that exist in an unconventional food chain. In this world, carnivores are now the pets of herbivores and are considered weak. Our main character, Pet Lion, has forgotten about how strong his ancestors used to be. As Pet Lion gets instant access to his favorite music, he awakens his instinct and feels empowered to become the king.', imgs: [1, 2, 3, 4, 5] },
    { g: 'process', title: 'Storyboard + 3D process', text: 'The storyboard went from line sketches to values to flat colors. For the details, we blocked out the supermarket, the characters and the flying objects in Cinema 4D, so every frame had the right perspective and scale before we illustrated it.', imgs: [9, 10, 11, 12, 13, 14], sets: [[9, 10, 11], [12, 13, 14]], setWord: 'STAGES' },
    { g: 'ref', title: 'Moodboard', layout: 'trio', text: 'Taking inspiration from the execution of flat colors with hard light and shadow forms, we incorporated playful color palettes and shape language into our styleframes.', imgs: [6, 8, 7] }
  ],
  'label-lunacy': [
    { g: 'final', title: 'The ad', video: true },
    { g: 'final', title: 'Styleframes', text: 'Frames from the finished ad: liquid gold resolving into the Louis Vuitton mark, then an everyday folding chair staged as a luxury object.', imgs: [5, 6, 7, 8, 9, 10, 11, 12], cols: 2 },
    { g: 'process', title: 'Storyboard', imgs: [4] },
    { g: 'ref', title: 'Moodboard', row: true, text: 'Liquid gold and brushed metal close-ups, dark luxury lighting and textures, and surreal 3D sets with a single piece of furniture as the centerpiece.', imgs: [1, 2, 3] }
  ],
  moonrise: [
    { g: 'final', title: 'Title sequence frames', layout: 'poster-b', text: 'We used a warm yellow tone for inside the tent, where Sam and Suzy feel the most comfort and true love. In contrast, we used a cool tone of blue and purple for the final scene, where it is revealed that the tent is placed in the room that represents the cold reality.', imgs: [1, 2, 3, 4, 5, 6] },
    { g: 'process', title: 'Storyboard, render + type', text: 'Before modeling, we sketched the scenes in values to plan the lighting and details, then set up the first renders before adding texture and adjusting the light. The type stays soft and consistent in size to match the mood.', imgs: [11, 12, 10], sets: [[11, 12]], setWord: 'STAGES' },
    { g: 'ref', title: 'Moodboard', text: 'Warm references for the cozy feeling inside the tent, cold night tones against cozy light for the reality outside it, and 3D film titles that inspired our backlit title reveal.', imgs: [7, 8, 9] }
  ],
  vmix: [
    { g: 'final', title: 'Brand video', video: true },
    { g: 'final', title: 'Logo', text: 'vMix allows users to produce like a director and a conductor. The main form of the mark was inspired by the positioning and stroke of the orchestra baton.', imgs: [1, 2] },
    { g: 'final', title: 'Logo animation', text: 'Opening: the two baton strokes swing into one line that wipes the screen red. Closing: the rhythm pattern clears and the mark resolves into the vMix logo.', imgs: [3, 4] },
    { g: 'final', title: 'Graphic elements', text: 'I created custom brand shapes as my own take on a conductor’s movements, then built patterns from the stroke of the logo mark, each with its own rhythm.', imgs: [5] },
    { g: 'final', title: 'Identity posters', text: 'Street posters pairing the conducting shapes with production words like Tempo, Jump, Cut and Finale.', imgs: [6, 7] },
    { g: 'final', title: 'Content posters', text: 'Posters featuring creators at work, framed by the curve of the baton.', imgs: [8, 9, 10] },
    { g: 'final', title: 'Environment', text: 'The identity at building scale: billboards and wall graphics.', imgs: [11, 12] },
    { g: 'final', title: 'Website', frame: 'macbook', screen: '16 / 9', text: 'Website design, from the home page and mission to creator stories.', imgs: [13, 14, 15, 16] },
    { g: 'final', title: 'App', frame: 'phone', phone: 2, layout: '5', bare: true, text: 'The mobile app: launch screen, home, menu and content pages.', imgs: [18, 19, 20, 21, 22] }
  ],
  'shampoo-bar': [
    { g: 'final', title: 'The animation', video: true },
    { g: 'final', title: 'Styleframes', text: 'Frames from the short: the bathroom set, the two characters and the bath-toy ocean scenes.', imgs: [1, 2, 3, 4, 5, 6] },
    { g: 'process', title: 'Storyboard to 3D', text: 'We storyboarded every camera change and facial expression, sketched all the characters and bathroom props, then modeled and colored them to scale. We worked through the modeling together on a Miro board during calls.', imgs: [7, 8, 10, 9, 11], sets: [[10, 9]], setWord: 'STAGES' }
  ],
  minari: [
    { g: 'final', title: 'Title sequence frames', layout: 'poster-c', text: 'Close-up frames follow the seed from the soil to roots, a stem and leaves, so the credits grow with it, ending on the MINARI title framed by the leaves.', imgs: [1, 2, 3, 4, 5, 6, 7] },
    { g: 'process', title: 'Storyboard + typography', text: 'I sketched variations of camera angles to tell the story of the seed’s growth and hope, and set the credits in one simple sans serif, using scale for hierarchy and light on the type.', imgs: [9, 10] },
    { g: 'ref', title: 'Moodboard', text: 'Photo references to study the intense lighting I wanted to capture.', imgs: [8] }
  ],
  gsa: [
    { g: 'final', title: 'Logo + lockups', text: 'GSA is spelled out to help recognize the new GameStop Arena, with horizontal and stacked lockups and their clear space.', imgs: [2, 3, 4, 5], cols: 2 },
    { g: 'final', title: 'Typography + color', text: 'Dubai in four weights, and a blue, purple and red palette that runs through every piece.', imgs: [6, 7], cols: 2 },
    { g: 'final', title: 'Promotional posters', phone: 2, text: 'Posters built from the GSA letterforms and the PLAY, COMPETE, ENJOY tagline.', imgs: [10, 11, 12] },
    { g: 'final', title: 'Motion', text: 'The GSA letters turning in 3D through PLAY, COMPETE, ENJOY, a spinning GSA cube, and the logo reveal.', imgs: [19, 20, 21], cols: 3 },
    { g: 'final', title: 'In the arena', text: 'The identity on the arena’s exterior and stage, a digital stand, a bus shelter ad and street banners.', imgs: [15, 16, 13, 14], cols: 2 },
    { g: 'final', title: 'Website + app', imgs: [17, 18], cols: 2 },
    { g: 'process', title: 'Brand strategy', text: 'The brand steering wheel, keywords and brand driver that set the tone: professional, visionary, competitive, entertaining.', imgs: [8, 9], cols: 2 }
  ],
  hanbok: [
    { g: 'final', title: 'The book', text: 'Each color block on the cover is taken from the silk of a traditional hanbok.', imgs: [2, 1] },
    { g: 'final', title: 'Inside the book', text: 'The exhibition introduction, Korean art history, then a section and an interview for each of the six artists.', imgs: [3, 4, 5, 6, 7, 8], cols: 2 },
    { g: 'final', title: 'Spread by spread', text: 'The whole publication laid out page by page.', imgs: [15, 16, 17, 18], cols: 2 },
    { g: 'final', title: 'Exhibition identity', text: 'The HANBOK wordmark on the gallery wall and the promotional poster.', imgs: [10, 9], cols: 2 },
    { g: 'final', title: 'Artist poster series', phone: 2, text: 'Each artist is given a color and a shape, and the poster colors complement each other.', imgs: [11, 12, 13, 14] }
  ]
};
