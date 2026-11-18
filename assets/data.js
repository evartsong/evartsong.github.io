/* =========================================================
   EVA SONG: THE GAME — all site content lives here.
   To add a project: copy one { ... } block in PROJECTS, change
   the text, and put its images in the /images folder.
   cover: 'images/bibi-cover.jpg'   (leave '' to show the color)
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
    cover: '', video: '', images: []
  },
  {
    id: 'warp', title: 'WARP', genre: 'Digital marketing', era: '2024', season: 'SEASON 2024',
    when: '03.2024 – 12.2024', role: 'Digital Marketing Specialist', color: '#3326B8', badge: '',
    desc: 'Website, landing pages, decks and B2B campaigns, leading marketing and revenue with the co-founders.',
    brief: 'At WARP I worked directly with the co-founders and led the marketing and revenue teams, while designing the brand’s website, landing pages and campaign assets myself.',
    did: [
      'Lead the marketing and revenue teams with the co-founders: run meetings, assign tasks, hit deadlines',
      'Design the website, landing pages and business decks; lead campaign asset design',
      'Run weekly email campaigns in HubSpot and Klaviyo',
      'Manage social and create B2B content: press releases, case studies and graphics'
    ],
    tools: ['HubSpot', 'Klaviyo'],
    type: 'B2B · web + email + social', collaborators: 'Co-founders, marketing and revenue teams', recognition: '',
    cover: '', video: '', images: []
  },
  {
    id: 'soundtrack', title: 'Soundtrack Your Life', genre: 'Styleframes · logo reveal', era: 'ARTCENTER', season: 'TRAINING ARC · ARTCENTER',
    when: 'ArtCenter College of Design', role: 'Designer + animator', color: '#0F6E4D', badge: 'GALLERY PICK',
    desc: 'Spotify’s instant access, told through a reversed animal food chain.',
    brief: 'One-minute styleframes showing how instantly accessible Spotify is, told through characters in a reversed animal food chain, ending on a Spotify logo reveal.',
    did: ['Flip the animal food chain into a story about instant access', 'Design sequential styleframes for a one-minute spot', 'Land it on a Spotify logo reveal'],
    tools: [],
    type: 'Spotify · concept spot', collaborators: '', recognition: 'ArtCenter Student Gallery, 2023',
    cover: '', video: '', images: []
  },
  {
    id: 'label-lunacy', title: 'Label Lunacy', genre: '3D motion', era: 'ARTCENTER', season: '',
    when: 'ArtCenter College of Design', role: '3D designer + animator', color: '#8A5F0E', badge: '',
    desc: 'A satirical ad on how brands turn everyday items into must-haves.',
    brief: 'A satirical ad about how brands steer consumer behavior, turning ordinary, everyday items into coveted possessions.',
    did: ['Write the satire: everyday items sold as status symbols', 'Build and animate the ad in 3D'],
    tools: [],
    type: 'Satirical ad', collaborators: '', recognition: '',
    cover: '', video: '', images: []
  },
  {
    id: 'moonrise', title: 'Moonrise Kingdom', genre: 'Title sequence', era: 'ARTCENTER', season: '',
    when: 'ArtCenter College of Design', role: 'Designer + animator', color: '#8A3A1C', badge: '',
    desc: 'Light as imagination in Sam and Suzy’s runaway love story.',
    brief: 'A title sequence for Moonrise Kingdom. Sam and Suzy fall in love and run away into the wilderness; light becomes the symbol of imagination at the story’s turning point.',
    did: ['Use light as the symbol of imagination', 'Design and animate the title sequence'],
    tools: [],
    type: 'Film title sequence', collaborators: '', recognition: '',
    cover: '', video: '', images: []
  },
  {
    id: 'vmix', title: 'vMix', genre: 'Brand identity + motion', era: 'ARTCENTER', season: '',
    when: 'ArtCenter College of Design', role: 'Brand designer + animator', color: '#1E1CA8', badge: '',
    desc: 'Inviting streamers to find their inner conductor in live video.',
    brief: 'Brand content for vMix aimed at younger generations and the streaming community, encouraging them to bring their inner conductor and creativity into live broadcast video.',
    did: ['Reframe live production software for a younger streaming audience', 'Build the identity and motion around the “inner conductor” idea'],
    tools: [],
    type: 'Live streaming software', collaborators: '', recognition: '',
    cover: '', video: '', images: []
  },
  {
    id: 'shampoo-bar', title: 'Shampoo Bar', genre: '3D motion graphics', era: 'ARTCENTER', season: '',
    when: 'ArtCenter College of Design', role: '3D designer + animator', color: '#146A75', badge: 'GALLERY PICK',
    desc: 'A 3D short nudging people from plastic bottles to waste-free bars.',
    brief: 'A short 3D animation encouraging people to switch from plastic bottles to waste-free shampoo bars, told through two characters with front-camera framing, facial expressions and body motion.',
    did: ['Tell a sustainability message through two characters', 'Stage it in front-camera framing with expressive faces and body motion', 'Model, light and render in Cinema 4D and Redshift'],
    tools: ['Cinema 4D', 'Redshift', 'After Effects'],
    type: 'Sustainability short', collaborators: 'Sarah Lee', recognition: 'ArtCenter Student Gallery, 2023',
    cover: '', video: '', images: []
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

/* Side quests on the Play page. type: 3d | graphic | illo | editorial | creator
   open: true = an empty "+ ADD WORK" slot waiting for a real piece. */
window.QUESTS = [
  { type: 'illo', title: 'Where Do We Go? tour merch', sub: 'Illustrated merch for Billie Eilish’s world tour, sold globally · Interscope Records', color: '#2F5D3A', ratio: '4 / 5', link: '', image: '' },
  { type: '3d', title: '[Add title]', sub: '3D experiment · Cinema 4D', color: '#5B2BB5', ratio: '1 / 1', link: '', image: '', open: true },
  { type: 'creator', title: 'Twitch · esongow', sub: 'Live channel grown to 10K followers', color: '#6B34C9', ratio: '16 / 10', link: 'https://www.twitch.tv/esongow', image: '' },
  { type: 'graphic', title: 'Woobofood', sub: 'Freelance · brand identity, website and launch materials', color: '#B5651D', ratio: '4 / 3', link: '', image: '' },
  { type: 'editorial', title: 'Hanbok', sub: 'Exhibition + publication for six Korean contemporary artists', color: '#7A2E5A', ratio: '4 / 5', link: '', image: '' },
  { type: '3d', title: '[Add title]', sub: '3D loop · Redshift', color: '#3E2A8C', ratio: '4 / 5', link: '', image: '', open: true },
  { type: 'graphic', title: 'SquareOne', sub: 'Freelance · brand identity, website and launch materials', color: '#1F5F7A', ratio: '4 / 3', link: '', image: '' },
  { type: 'creator', title: 'Short-form clips', sub: 'Viral gaming content: TikTok 1M+ views, YouTube 500K+', color: '#9C2A4A', ratio: '3 / 4', link: '', image: '' },
  { type: 'illo', title: '[Add title]', sub: 'Illustration · digital painting', color: '#A0371C', ratio: '1 / 1', link: '', image: '', open: true },
  { type: 'graphic', title: '[Add title]', sub: 'Poster · typography', color: '#0E6B8C', ratio: '3 / 4', link: '', image: '', open: true },
  { type: '3d', title: '[Add title]', sub: '3D experiment', color: '#4B2F9E', ratio: '16 / 10', link: '', image: '', open: true },
  { type: 'illo', title: '[Add title]', sub: 'Gifs + stickers', color: '#8A4B12', ratio: '4 / 3', link: '', image: '', open: true }
];

/* Links used across the site */
window.LINKS = {
  email: 'mailto:evartsong@gmail.com',
  linkedin: '',              /* paste your LinkedIn URL */
  instagram: 'https://www.instagram.com/evartsong',
  twitch: 'https://www.twitch.tv/esongow',
  resume: 'evasong_resume.pdf' /* drop the PDF into the site folder with this name */
};
