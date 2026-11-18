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
    id: 'bibi', title: 'BiBi', genre: 'Brand design + marketing', era: '2026', season: 'SEASON 2026',
    when: '04.2026 – 11.2026', role: 'Brand Designer + Marketing Specialist', color: '#B0174F', badge: 'NEW',
    desc: 'Brand visuals, weekly email campaigns, social video and marketplace ads for a fashion wholesale brand.',
    brief: 'BiBi sells fashion wholesale to retailers. I owned how the brand looks everywhere buyers meet it, from website banners and emails to marketplace ads, and ran the campaigns that put new products in front of them every week.',
    did: [
      'Own brand design and visual assets: website banners, email graphics, promotional materials and photo editing',
      'Run weekly Mailchimp and Faire wholesale email campaigns, with AI-made video and graphics for social',
      'Manage the e-commerce catalog: new product uploads, accurate pricing and inventory, Photoshop color variants',
      'Run FashionGo front-page ads and SEO, tracking sales and traffic to optimize product placement'
    ],
    tools: ['Photoshop', 'Mailchimp', 'Faire', 'FashionGo', 'AI video + graphics'],
    type: 'Fashion wholesale · e-commerce', collaborators: '', recognition: '',
    tile: 'images/bibi/14.jpg', /* home tiles: a social post crops better than the wide banner */
    cover: '', video: '', images: []
  },
  {
    id: 'warp', title: 'WARP', genre: 'Digital marketing', era: '2024', season: 'SEASON 2024',
    when: '03.2024 – 12.2024', role: 'Digital Marketing Specialist', color: '#3326B8', badge: '',
    desc: 'Website, landing pages, decks and B2B campaigns, leading marketing and revenue with the co-founders.',
    brief: 'At WARP, a Los Angeles freight logistics company, I worked directly with the co-founders and led the marketing and revenue teams, while designing the brand’s website, landing pages and campaign assets myself. The pages below are the 2024 site, captured from the Internet Archive.',
    did: [
      'Lead the marketing and revenue teams with the co-founders: run meetings, assign tasks, hit deadlines',
      'Design the website, landing pages and business decks; lead campaign asset design',
      'Run weekly email campaigns in HubSpot and Klaviyo',
      'Manage social and create B2B content: press releases, case studies and graphics'
    ],
    tools: ['HubSpot', 'Klaviyo'],
    type: 'B2B freight logistics · web + email + social', collaborators: 'Co-founders, marketing and revenue teams', recognition: '',
    cover: '', video: '', images: []
  },
  {
    id: 'soundtrack', title: 'Soundtrack Your Life', genre: 'Styleframes · logo reveal', era: 'ARTCENTER', season: 'TRAINING ARC · ARTCENTER',
    when: 'ArtCenter College of Design', role: 'Designer + animator', color: '#0F6E4D', badge: 'GALLERY PICK',
    desc: 'Spotify’s instant access, told through a reversed animal food chain.',
    brief: 'One-minute styleframes showing how instantly accessible Spotify is, told through characters in a reversed animal food chain, ending on a Spotify logo reveal.',
    did: ['Flip the animal food chain into a story about instant access', 'Design sequential styleframes for a one-minute spot', 'Land it on a Spotify logo reveal'],
    tools: ['Photoshop', 'Procreate', 'Cinema 4D'],
    type: 'Spotify · concept spot', collaborators: 'Elaine Lee', recognition: 'ArtCenter Student Gallery, 2023',
    cover: '', video: '', images: []
  },
  {
    id: 'label-lunacy', title: 'Label Lunacy', genre: '3D motion', era: 'ARTCENTER', season: '',
    when: 'ArtCenter College of Design', role: '3D designer + animator', color: '#8A5F0E', badge: '',
    desc: 'A satirical ad on how brands turn everyday items into must-haves.',
    brief: 'A satirical ad about how brands steer consumer behavior, turning ordinary, everyday items into coveted possessions.',
    did: ['Write the satire: everyday items sold as status symbols', 'Build and animate the ad in 3D'],
    tools: ['Cinema 4D', 'After Effects'],
    type: 'Satirical ad', collaborators: 'Ewan Lee', recognition: '',
    cover: '', video: 'https://www.youtube.com/watch?v=fuxI35rUmUM', images: []
  },
  {
    id: 'moonrise', title: 'Moonrise Kingdom', genre: 'Title sequence', era: 'ARTCENTER', season: '',
    when: 'ArtCenter College of Design', role: 'Designer + animator', color: '#8A3A1C', badge: '',
    desc: 'Light as imagination in Sam and Suzy’s runaway love story.',
    brief: 'A title sequence for Moonrise Kingdom. Sam and Suzy fall in love and run away into the wilderness; light becomes the symbol of imagination at the story’s turning point.',
    did: ['Use light as the symbol of imagination', 'Design and animate the title sequence'],
    tools: ['Cinema 4D', 'Arnold', 'Photoshop'],
    type: 'Film title sequence', collaborators: 'Jason Kim', recognition: '',
    cover: '', video: '', images: []
  },
  {
    id: 'vmix', title: 'vMix', genre: 'Brand identity + motion', era: 'ARTCENTER', season: '',
    when: 'ArtCenter College of Design', role: 'Brand designer + animator', color: '#1E1CA8', badge: '',
    desc: 'Inviting streamers to find their inner conductor in live video.',
    brief: 'Brand content for vMix aimed at younger generations and the streaming community, encouraging them to bring their inner conductor and creativity into live broadcast video.',
    did: ['Reframe live production software for a younger streaming audience', 'Build the identity and motion around the “inner conductor” idea'],
    tools: ['Illustrator', 'InDesign', 'Photoshop', 'XD', 'After Effects'],
    type: 'Live streaming software', collaborators: '', recognition: '',
    cover: '', video: 'https://www.youtube.com/watch?v=OEFBsg1CY_U', images: []
  },
  {
    id: 'shampoo-bar', title: 'Shampoo Bar', genre: '3D motion graphics', era: 'ARTCENTER', season: '',
    when: 'ArtCenter College of Design', role: '3D designer + animator', color: '#146A75', badge: 'GALLERY PICK',
    desc: 'A 3D short nudging people from plastic bottles to waste-free bars.',
    brief: 'A short 3D animation encouraging people to switch from plastic bottles to waste-free shampoo bars, told through two characters with front-camera framing, facial expressions and body motion.',
    did: ['Tell a sustainability message through two characters', 'Stage it in front-camera framing with expressive faces and body motion', 'Model, light and render in Cinema 4D and Redshift'],
    tools: ['Cinema 4D', 'Redshift', 'After Effects'],
    type: 'Sustainability short', collaborators: 'Sarah Lee', recognition: 'ArtCenter Student Gallery, 2023',
    cover: '', video: 'https://www.youtube.com/watch?v=Tv06w4CawK4', images: []
  },
  {
    id: 'minari', title: 'Minari', genre: 'Title sequence', era: 'ARTCENTER', season: '',
    when: 'ArtCenter College of Design', role: 'Designer', color: '#3F6420', badge: '',
    desc: 'A seed carries growth and hope through the film’s burning-crops scene.',
    brief: 'A title sequence for Minari that visualizes growth and hope through a seed, framed around the scene where the crops burn and Jacob and Monica try to save them.',
    did: ['Use a seed as the framing device for growth and hope', 'Build the sequence around the burning-crops scene'],
    tools: ['Photoshop', 'Lightroom', 'InDesign'],
    type: 'Film title sequence', collaborators: '', recognition: '',
    cover: '', video: '', images: []
  },
  {
    id: 'gsa', title: 'GSA: GameStop Arena', genre: 'Brand identity + motion', era: 'ARTCENTER', season: '',
    when: 'ArtCenter College of Design', role: 'Brand designer', color: '#9E1F18', badge: '',
    desc: 'An identity for an arena where gamers compete for prizes and rep.',
    brief: 'A brand identity for GSArena, powered by GameStop: a new venue where local and global gamers and esports players compete for prizes and reputation. Rounded, expressive letters keep it approachable.',
    did: ['Name and position the venue: GSArena, powered by GameStop', 'Design rounded, expressive letterforms that feel approachable', 'Extend the identity into motion'],
    tools: ['InDesign', 'Photoshop', 'After Effects'],
    type: 'Esports venue', collaborators: '', recognition: '',
    cover: '', video: '', images: []
  }
];

/* Side quests that get their own page (project.html?id=...). Same fields as PROJECTS.
   Images come from assets/media.js; video can be a YouTube/Vimeo link or an .mp4 path. */
window.EXTRAS = [
  {
    id: 'hanbok', title: 'Hanbok', genre: 'Graphic editorial', when: 'ArtCenter', role: 'Designer', color: '#7A2E5A', badge: '',
    desc: 'An exhibition and publication for six South Korean contemporary artists who weave history and culture into their work.',
    brief: 'A group exhibition and publication featuring six South Korean contemporary artists. The book covers the exhibition introduction, Korean art history, artist sections and interviews, with colors and silk textures drawn from traditional Korean clothing.',
    did: ['Design the publication: cover, spreads and artist sections', 'Build a color and texture system from traditional hanbok silk', 'Extend the identity into exhibition posters'],
    tools: ['InDesign', 'Illustrator', 'Photoshop'], type: 'Exhibition + publication', collaborators: '', recognition: '', video: ''
  },
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
    id: 'nyum', title: 'Nyum! Menu', genre: 'Graphic design', when: 'Personal', role: 'Designer + illustrator', color: '#E59BC4', badge: '',
    desc: 'An illustrated sushi menu with cat characters.',
    brief: 'An illustrated menu for a playful sushi spot, pairing each roll with its own character.',
    did: [], tools: ['Procreate', 'Illustrator'], type: 'Menu design', collaborators: '', recognition: '', video: ''
  },
  {
    id: 'voyage', title: 'Voyage', genre: '3D motion', when: 'Personal', role: '3D artist', color: '#5B2BB5', badge: '',
    desc: 'A short 3D motion piece.',
    brief: 'A short 3D motion experiment.',
    did: [], tools: ['Cinema 4D', 'Redshift'], type: '3D animation', collaborators: '', recognition: '', video: 'videos/voyage.mp4'
  },
  {
    id: 'karaoke-cube', title: 'Karaoke Cube', genre: '3D motion', when: 'Personal', role: '3D artist', color: '#3E2A8C', badge: '',
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
    id: 'ig-sculpt', title: 'Sculpt study', genre: '3D', when: '2022', role: '3D artist', color: '#2E2E33', badge: '',
    desc: 'A digital sculpture study rendered in 3D.',
    brief: 'A 3D sculpting study of a classical figure, rendered from several angles.',
    did: [], tools: ['ZBrush', 'Cinema 4D'], type: '3D sculpt', collaborators: '', recognition: '', video: ''
  }
];

/* Play page board. type: 3d | graphic | illo | editorial | creator
   id: links to a side quest page above. link: an outside URL. */
window.QUESTS = [
  { id: 'voyage', type: '3d', title: 'Voyage', sub: '3D motion · video', color: '#5B2BB5', ratio: '16 / 9' },
  { id: 'ig-characters', type: 'illo', title: 'Character illustrations', sub: '4 original characters', color: '#D94A6B', ratio: '1 / 1' },
  { id: 'ig-paintings', type: 'fine', title: 'Painting studies', sub: 'Acrylic, oil + gouache · 14 pieces', color: '#5B3A2E', ratio: '4 / 5' },
  { id: 'ig-ink', type: 'illo', title: 'Ink drawings', sub: 'Pen + ink · 13 pieces', color: '#22252B', ratio: '4 / 5' },
  { id: 'ig-portraits', type: 'illo', title: 'Digital portraits', sub: 'Digital painting', color: '#4E6E7A', ratio: '4 / 5' },
  { id: 'ig-drawing', type: 'fine', title: 'Drawing studies', sub: 'Charcoal + colored pencil', color: '#6E6E6E', ratio: '4 / 5' },
  { id: 'ig-sculpt', type: '3d', title: 'Sculpt study', sub: '3D sculpt', color: '#2E2E33', ratio: '3 / 2' },
  { id: 'akkurat', type: 'graphic', title: 'Akkurat type specimen', sub: 'Type specimen · 7 pieces', color: '#E8573A', ratio: '4 / 3' },
  { id: 'metamorphosis', type: 'illo', title: 'Metamorphosis', sub: 'Illustrated frames', color: '#6B3FB8', ratio: '16 / 9' },
  { id: 'eve-arnold', type: 'editorial', title: 'Eve Arnold', sub: 'Book spreads', color: '#3B3F46', ratio: '4 / 3' },
  { id: 'killjoy', type: 'illo', title: 'Killjoy × Adventure Time', sub: 'Fan illustration', color: '#C99BE8', ratio: '3 / 4' },
  { id: 'karaoke-cube', type: '3d', title: 'Karaoke Cube', sub: '3D loop · video', color: '#3E2A8C', ratio: '16 / 9' },
  { id: 'nyum', type: 'graphic', title: 'Nyum! Menu', sub: 'Illustrated menu', color: '#E59BC4', ratio: '4 / 3' },
  { id: 'snowstorm', type: 'illo', title: 'Snowstorm', sub: 'Illustrated frames', color: '#1F4F8A', ratio: '16 / 9' },
  { id: 'hanbok', type: 'editorial', title: 'Hanbok', sub: 'Exhibition + publication', color: '#7A2E5A', ratio: '4 / 3' },
  { id: 'nicotine', type: 'illo', title: 'Nicotine', sub: 'Character illustration', color: '#2B2F7A', ratio: '1 / 1' },
  { id: 'portrait', type: 'illo', title: 'Portrait study', sub: 'Digital painting', color: '#8A5A4A', ratio: '1 / 1' },
  /* College entrance portfolio: finished pieces (images/college) and sketchbook pages (images/sketchbook) */
  { type: 'fine', title: 'Roman soldier', image: 'images/college/01.jpg', ratio: '936 / 1240', tools: ['Graphite'], when: 'Entrance portfolio', color: '#3A3A3A' },
  { type: 'fine', title: 'Portrait with a spoon', image: 'images/college/10.jpg', ratio: '936 / 1291', tools: ['Colored pencil'], when: 'Entrance portfolio', color: '#8A2A22' },
  { type: 'fine', title: 'Still life with lantern', image: 'images/college/02.jpg', ratio: '1232 / 936', tools: ['Graphite'], when: 'Entrance portfolio', color: '#3A3A3A' },
  { type: 'fine', title: 'Bust and pattern', image: 'images/college/08.jpg', ratio: '864 / 1320', tools: ['Graphite', 'Colored pencil'], when: 'Entrance portfolio', color: '#3E6B3A' },
  { type: 'fine', title: 'Winged creature', image: 'images/college/06.jpg', ratio: '1137 / 734', tools: ['Colored pencil', 'Graphite'], when: 'Entrance portfolio', color: '#C98FA0' },
  { type: 'fine', title: 'Figure in scratchboard', image: 'images/college/13.jpg', ratio: '936 / 1239', tools: ['Scratchboard'], when: 'Entrance portfolio', color: '#111111' },
  { type: 'fine', title: 'Studio corner', image: 'images/college/04.jpg', ratio: '936 / 1210', tools: ['Graphite'], when: 'Entrance portfolio', color: '#4A4A4A' },
  { type: 'fine', title: 'The Robe book cover', image: 'images/college/14.jpg', ratio: '936 / 1247', tools: ['Colored pencil', 'Graphite'], when: 'Entrance portfolio', color: '#6E8FB5' },
  { type: 'fine', title: 'Pattern collage', image: 'images/college/03.jpg', ratio: '936 / 1221', tools: ['Pen + ink'], when: 'Entrance portfolio', color: '#1E1E1E' },
  { type: 'fine', title: 'Jungle scene', image: 'images/college/15.jpg', ratio: '1237 / 936', tools: ['Painting'], when: 'Entrance portfolio', color: '#2E3B2A' },
  { type: 'fine', title: 'Underwater study', image: 'images/college/09.jpg', ratio: '864 / 1296', tools: ['Graphite'], when: 'Entrance portfolio', color: '#5A5A5A' },
  { type: 'fine', title: 'Cat collage', image: 'images/college/11.jpg', ratio: '1277 / 936', tools: ['Mixed media'], when: 'Entrance portfolio', color: '#B2342C' },
  { type: 'fine', title: 'Still life with pitcher', image: 'images/college/16.jpg', ratio: '1163 / 936', tools: ['Painting'], when: 'Entrance portfolio', color: '#3B3A2E' },
  { type: 'fine', title: 'Elephants in relief', image: 'images/college/12.jpg', ratio: '1289 / 864', tools: ['Metal relief'], when: 'Entrance portfolio', color: '#5A3A1E' },
  { type: 'fine', title: 'Coastal landscape', image: 'images/college/18.jpg', ratio: '1161 / 936', tools: ['Painting'], when: 'Entrance portfolio', color: '#3D6A8C' },
  { type: 'fine', title: 'Clay sculpture', image: 'images/college/17.jpg', ratio: '864 / 1296', tools: ['Clay'], when: 'Entrance portfolio', color: '#2A1C16' },
  { type: 'fine', title: 'Tiger and towers', image: 'images/college/05.jpg', ratio: '1440 / 780', tools: ['Graphite'], when: 'Entrance portfolio', color: '#5A5A5A' },
  { type: 'fine', title: 'Location sketches', image: 'images/college/07.jpg', ratio: '1227 / 936', tools: ['Graphite'], when: 'Entrance portfolio', color: '#5A5A5A' },
  { type: 'fine', title: 'Hand studies', image: 'images/college/19.jpg', ratio: '1244 / 936', tools: ['Colored pencil'], when: 'Entrance portfolio', color: '#4E6E7A' },
  { type: 'fine', title: 'Foot studies', image: 'images/college/20.jpg', ratio: '1240 / 936', tools: ['Graphite'], when: 'Entrance portfolio', color: '#5A5A5A' },
  { type: 'sketch', title: 'Music collage', image: 'images/sketchbook/01.jpg', ratio: '1222 / 1600', tools: ['Pen + ink'], when: 'Entrance portfolio', color: '#1E1E1E' },
  { type: 'sketch', title: 'Portrait on orange', image: 'images/sketchbook/03.jpg', ratio: '1120 / 1600', tools: ['Graphite'], when: 'Entrance portfolio', color: '#C2561E' },
  { type: 'sketch', title: 'Character outfits', image: 'images/sketchbook/04.jpg', ratio: '1600 / 1313', tools: ['Pen + ink', 'Color'], when: 'Entrance portfolio', color: '#C98FA0' },
  { type: 'sketch', title: 'Character turnaround', image: 'images/sketchbook/07.jpg', ratio: '1361 / 1600', tools: ['Pen', 'Colored pencil'], when: 'Entrance portfolio', color: '#7A3A8C' },
  { type: 'sketch', title: 'Character lineup', image: 'images/sketchbook/06.jpg', ratio: '1600 / 1294', tools: ['Pen + ink'], when: 'Entrance portfolio', color: '#7A3A8C' },
  { type: 'sketch', title: 'Musicians', image: 'images/sketchbook/08.jpg', ratio: '1600 / 1311', tools: ['Pen + ink'], when: 'Entrance portfolio', color: '#1E1E1E' },
  { type: 'sketch', title: 'Face studies', image: 'images/sketchbook/14.jpg', ratio: '1038 / 1600', tools: ['Pen'], when: 'Entrance portfolio', color: '#8A7A66' },
  { type: 'sketch', title: 'Lettering + character', image: 'images/sketchbook/15.jpg', ratio: '1600 / 1258', tools: ['Pen + ink'], when: 'Entrance portfolio', color: '#1E1E1E' },
  { type: 'sketch', title: 'Creature notes', image: 'images/sketchbook/09.jpg', ratio: '1600 / 1229', tools: ['Pen'], when: 'Entrance portfolio', color: '#2E6B3A' },
  { type: 'sketch', title: 'Plant creatures', image: 'images/sketchbook/10.jpg', ratio: '1600 / 1305', tools: ['Pen'], when: 'Entrance portfolio', color: '#2E6B3A' },
  { type: 'sketch', title: 'Monkey studies', image: 'images/sketchbook/11.jpg', ratio: '1600 / 1285', tools: ['Pen'], when: 'Entrance portfolio', color: '#B2342C' },
  { type: 'sketch', title: 'Plants + birds', image: 'images/sketchbook/05.jpg', ratio: '1600 / 1295', tools: ['Ballpoint pen'], when: 'Entrance portfolio', color: '#3A4A8C' },
  { type: 'sketch', title: 'Character pages', image: 'images/sketchbook/12.jpg', ratio: '1600 / 1280', tools: ['Pen + ink'], when: 'Entrance portfolio', color: '#1E1E1E' },
  { type: 'sketch', title: 'Drapery + dancer', image: 'images/sketchbook/13.jpg', ratio: '1600 / 1306', tools: ['Graphite'], when: 'Entrance portfolio', color: '#4A4A4A' },
  { type: 'sketch', title: 'Perspective study', image: 'images/sketchbook/02.jpg', ratio: '1600 / 1166', tools: ['Colored pencil'], when: 'Entrance portfolio', color: '#C2561E' },
  { type: 'sketch', title: 'Form studies + spaceships', image: 'images/sketchbook/16.jpg', ratio: '1063 / 1600', tools: ['Pencil'], when: 'Entrance portfolio', color: '#8A7A66' },
  { type: 'sketch', title: 'Texture studies', image: 'images/sketchbook/17.jpg', ratio: '787 / 1600', tools: ['Pen + ink'], when: 'Entrance portfolio', color: '#8A7A66' },
  { type: 'illo', title: 'Where Do We Go? tour merch', sub: 'Billie Eilish world tour merch, sold globally · Interscope Records', color: '#2F5D3A', ratio: '4 / 5', link: '' },
  { type: 'graphic', title: 'Woobofood', sub: 'Freelance · brand identity, website and launch materials', color: '#B5651D', ratio: '4 / 3', link: '' },
  { type: 'graphic', title: 'SquareOne', sub: 'Freelance · brand identity, website and launch materials', color: '#1F5F7A', ratio: '4 / 3', link: '' },
  { type: 'creator', title: 'Short-form clips', sub: 'Viral gaming content: TikTok 1M+ views, YouTube 500K+', color: '#9C2A4A', ratio: '3 / 4', link: '' }
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
    { g: 'final', title: 'Store + marketplace banners', text: 'Homepage banners for Shopify, FashionGO and Faire, desktop and mobile.', imgs: [1, 2, 3, 4, 5, 23] },
    { g: 'final', title: 'Faire collections', text: 'Collection pages and graphics for Faire, including Early Black Friday and Best Sellers.', imgs: [6, 7, 8] },
    { g: 'final', title: 'Email campaigns', text: 'Weekly wholesale emails. Scroll inside each one to see the full email.', imgs: [9, 10, 11, 12] },
    { g: 'final', title: 'Social posts', imgs: [13, 14, 15, 16, 17, 18, 19, 20] },
    { g: 'final', title: 'Stories', imgs: [21, 22] },
    { g: 'final', title: 'Video', text: 'Product videos, social reels and the Dallas Market Center booth.', clips: [1, 2, 3, 4, 5, 6, 7, 8, 9] }
  ],
  warp: [
    { g: 'final', title: 'Homepage', text: 'The 2024 site, desktop and mobile. Scroll inside each page.', imgs: [1, 14] },
    { g: 'final', title: 'Company pages', text: 'About us, our technology and sustainability.', imgs: [2, 3, 4] },
    { g: 'final', title: 'Service pages', text: 'Store replenishments, inbound freight optimization, pool distribution, LTL, perishable freight and national distribution.', imgs: [5, 6, 7, 8, 9, 10] },
    { g: 'final', title: 'News, blog + contact', imgs: [11, 12, 13] }
  ],
  soundtrack: [
    { g: 'final', title: 'Styleframes', text: 'Our story focuses on animal characters that exist in an unconventional food chain. In this world, carnivores are now the pets of herbivores and are considered weak. Our main character, Pet Lion, has forgotten about how strong his ancestors used to be. As Pet Lion gets instant access to his favorite music, he awakens his instinct and feels empowered to become the king.', imgs: [1, 2, 3, 4, 5] },
    { g: 'process', title: 'Storyboard process', text: 'Starting with line sketches of our storyboard, we established values and then flat colors before diving into details.', imgs: [9, 10, 11] },
    { g: 'process', title: '3D process', text: 'When it came to the details of our execution, we used Cinema 4D as a guide. We quickly blocked out the environment, placements of the characters, and in this case, flying objects to help us get the perfect perspective and scale. This was our most essential tool and was very beneficial for our workflow. It helped us illustrate without struggling with perspective.', imgs: [12, 13, 14] },
    { g: 'ref', title: 'Moodboard', text: 'Taking inspiration from the execution of flat colors with hard light and shadow forms, we incorporated playful color palettes and shape language into our styleframes.', imgs: [6, 7, 8] }
  ],
  'label-lunacy': [
    { g: 'final', title: 'The ad', video: true },
    { g: 'process', title: 'Storyboard', imgs: [4] },
    { g: 'ref', title: 'Moodboard', imgs: [1] },
    { g: 'ref', title: 'Lighting + texture references', imgs: [2] },
    { g: 'ref', title: 'Environment references', imgs: [3] }
  ],
  moonrise: [
    { g: 'final', title: 'Title sequence frames', text: 'We used a warm yellow tone for inside the tent, where Sam and Suzy feel the most comfort and true love. In contrast, we used a cool tone of blue and purple for the final scene, where it is revealed that the tent is placed in the room that represents the cold reality.', imgs: [1, 2, 3, 4, 5, 6] },
    { g: 'process', title: '3D typography treatment', text: 'Taking inspiration from the 3D film titles, we designed a backlit of the 3D title reveal for our hero frame.', imgs: [9] },
    { g: 'process', title: 'Typography', text: 'We chose type treatment to go along with the soft mood of our sequences and the consistent size of the type.', imgs: [10] },
    { g: 'process', title: 'Storyboard sketch', text: 'Before modeling, we sketched out the scenes with values to anticipate the lighting and details.', imgs: [11] },
    { g: 'process', title: 'Render process', text: 'Our initial composition, lighting, and type treatment before adding texture and adjusting the intensity of the light.', imgs: [12] },
    { g: 'ref', title: 'Moodboard (warm)', text: 'We gathered tone references that give cozy feelings portraying the characters’ emotions and thoughts.', imgs: [7] },
    { g: 'ref', title: 'Moodboard (cool + warm)', text: 'We studied the contrast between cold night tones and cozy light which shows the reality of the situation in the story.', imgs: [8] }
  ],
  vmix: [
    { g: 'final', title: 'Brand video', video: true },
    { g: 'final', title: 'Logo', text: 'vMix allows users to produce like a director and a conductor. The main form of the mark was inspired by the positioning and stroke of the orchestra baton.', imgs: [1, 2] },
    { g: 'final', title: 'Opening animation', imgs: [3] },
    { g: 'final', title: 'Closing animation', imgs: [4] },
    { g: 'final', title: 'Graphic elements', text: 'Created a custom brand shapes as my own definition of conducting movements. Which led me to create patterns using the stroke of the logo mark in its own unique rhythms.', imgs: [5] },
    { g: 'final', title: 'Identity posters', imgs: [6, 7] },
    { g: 'final', title: 'Content posters', imgs: [8, 9, 10] },
    { g: 'final', title: 'Environment', imgs: [11, 12] },
    { g: 'final', title: 'Website', imgs: [13, 14, 15, 16] },
    { g: 'final', title: 'App', imgs: [17, 18, 19, 20, 21, 22] }
  ],
  'shampoo-bar': [
    { g: 'final', title: 'The animation', video: true },
    { g: 'final', title: 'Styleframes', imgs: [1, 2, 3, 4, 5, 6] },
    { g: 'process', title: 'Storyboard', text: 'We sketched scene by scene storyboard every time there were camera transitions and changes in facial expression.', imgs: [7] },
    { g: 'process', title: 'Character design', text: 'Before modeling, we divided our parts to sketch all the characters and bathroom elements in the animation.', imgs: [8] },
    { g: 'process', title: 'Character modeling', text: 'Referencing the sketch, all the characters were modeled and colored while showing the scale differences.', imgs: [9, 10] },
    { g: 'process', title: 'Modeling process', text: 'Using the Miro collaboration tool while on a call, we discussed taking side notes on the board.', imgs: [11] }
  ],
  minari: [
    { g: 'final', title: 'Title sequence frames', imgs: [1, 2, 3, 4, 5, 6, 7] },
    { g: 'process', title: 'Storyboard', text: 'Sketched out variations of camera angles to tell the narrative of this seed’s growth and hope.', imgs: [9] },
    { g: 'process', title: 'Typography', text: 'Using simple sans serif font throughout my sequences, scale differences to show the hierarchy, and lighting effect on the type.', imgs: [10] },
    { g: 'ref', title: 'Moodboard', text: 'Gathering photograph references to study the intense lighting that I want to capture.', imgs: [8] }
  ],
  gsa: [
    { g: 'final', title: 'The arena', imgs: [1] },
    { g: 'final', title: 'Logo', text: 'GSA is spelled out to help recognize the new GameStop Arena.', imgs: [2, 3] },
    { g: 'final', title: 'Lock up', imgs: [4] },
    { g: 'final', title: 'Clear space', imgs: [5] },
    { g: 'final', title: 'Typography', imgs: [6] },
    { g: 'final', title: 'Color', imgs: [7] },
    { g: 'final', title: 'Promotional posters', imgs: [10, 11, 12] },
    { g: 'final', title: 'Digital stand', imgs: [13] },
    { g: 'final', title: 'Banners', imgs: [14] },
    { g: 'final', title: 'Environment (exterior)', imgs: [15] },
    { g: 'final', title: 'Environment (interior)', imgs: [16] },
    { g: 'final', title: 'Website', imgs: [17] },
    { g: 'final', title: 'App', imgs: [18] },
    { g: 'final', title: 'Motion', imgs: [19, 20, 21] },
    { g: 'process', title: 'Brand steering wheel + keywords', imgs: [8] },
    { g: 'process', title: 'Brand driver', imgs: [9] }
  ],
  hanbok: [
    { g: 'final', title: 'Publication', imgs: [1, 2, 3, 4, 5, 6, 7, 8] },
    { g: 'final', title: 'Promotional poster', imgs: [9] },
    { g: 'final', title: 'Exhibition wall', imgs: [10] },
    { g: 'final', title: 'Exhibition poster series', text: 'Each artist is given a color, shape, and poster colors are complementary to each other.', imgs: [11, 12, 13, 14] },
    { g: 'final', title: 'Book spreads', imgs: [15, 16, 17, 18] }
  ]
};
