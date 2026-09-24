/**
 * ASTRA VEDIC — ROLEX-STYLE CELESTIAL MASTERPIECES & APP LOGIC
 * Principles:
 * 1. Zero price & zero direct checkout.
 * 2. Dedicated Rolex-style product pages (No popups) in Hinglish.
 * 3. Dedicated Appointment booking portal with confidential pass generation.
 * 4. Dedicated Status & Kundli report download portal.
 * 5. Full mobile responsiveness down to 320px (iPhone SE).
 */

(function () {
  'use strict';

  // 1. STATE MANAGEMENT
  const state = {
    activePage: 'home',
    booking: {
      id: 'ASTRA-8921',
      name: '',
      phone: '',
      concern: 'Dhan & Wealth Alignment (Money Magnet)',
      dob: '',
      tob: '',
      city: '',
      acharya: 'Acharya Vidyadhar Shastri'
    },
    audio: { ctx: null, gain: null, playing: false }
  };

  // 2. THE ROLEX-STYLE SACRED MASTERPIECES (CHAPTER-BY-CHAPTER STORYTELLING CARDS, ZERO PRICE, ZERO ORDER MENTIONS)
  const products = {
    'money-magnet': {
      id: 'money-magnet',
      kicker: 'DHAN AAKARSHAN • SACRED ABUNDANCE MATRIX',
      title: 'Vedic 5-Element Money Magnet & Abundance Bracelet',
      rating: '★ 4.99 (520+ Consecrated Seekers)',
      img: 'assets/money-magnet-1.jpg',
      badge: '5-Stone Sacred Matrix',
      chapters: [
        {
          num: '01',
          badge: '01 / SANCTIFIED FORM',
          kicker: 'CHAPTER 01 • THE SANCTIFIED AESTHETIC',
          title: 'Minimalist Architectural Form & 8mm Symmetry',
          img: 'assets/money-magnet-1.jpg',
          desc: 'Har ek crystal bead ko 8mm ke precise spherical proportion me hand-carve aur polish kiya gaya hai taaki wrist par pehante hi perfect balance aur weight poise mile. Architectural white stone platter par iska pristine presence darshata hai ki yeh shastra-sammat sacred geometry ka anokha living artifact hai jo visual aur energetic poise provide karta hai.',
          specs: ['8mm Grade-AAA Spheres', 'Ergonomic Weight Poise', 'Vitreous Natural Luster']
        },
        {
          num: '02',
          badge: '02 / SACRED MATRIX',
          kicker: 'CHAPTER 02 • THE ABUNDANCE CODEX',
          title: 'The Certified 5-Element Consecutive Frequency Ladder',
          img: 'assets/money-magnet-2.jpg',
          desc: 'Crystals ka sequence random nahi hai. Raw Pyrite se shuru hokar Golden Citrine, Green Aventurine, Deep Onyx aur Tiger Eye ka aapsi kram ek continuous energy ladder banata hai. Beech me lagaye gaye 18K gold spacers is circuit ko unbroken rakhte hain taaki dhan aakarshan frequency continuous circulate ho.',
          specs: ['Pancha-Tattva Alignment', 'GI Lab Gemological Grade', '18K Gold Energy Loop']
        },
        {
          num: '03',
          badge: '03 / GEMOLOGICAL PHYSICS',
          kicker: 'CHAPTER 03 • MACRO CRAFT & MINERAL PHYSICS',
          title: 'Raw Metallic Facets & 528Hz Vibrational Resonance',
          img: 'assets/money-magnet-3.jpg',
          desc: 'Extreme macro close-up me dekhein: Peruvian Pyrite ke cubic crystal facets natural light me shine karte hain, Citrine ke internal golden crackles solar heat reflect karte hain, aur Green Aventurine ke shimmering mica flecks wearer ke aura me positive financial frequency transmit karte hain.',
          specs: ['Peruvian Pyrite Cubes', 'Solar Quartz Inclusions', '528Hz Solfeggio Harmonics']
        },
        {
          num: '04',
          badge: '04 / LIVING RESONANCE',
          kicker: 'CHAPTER 04 • LIVING RESONANCE ON WRIST',
          title: 'Radial Artery & Left Receiving Wrist Meridian',
          img: 'assets/money-magnet-4.jpg',
          desc: 'Jab yeh bracelet left wrist (receiving channel) par pehna jata hai, toh iske natural crystals wearer ki radial artery pulse se touch karte hain. Har heartbeat ke saath crystals ki piezo-electric frequency subconscious mind tak communicate hoti hai, jisse business decisions me unwavering clarity aati hai.',
          specs: ['Left Wrist Meridian', 'Direct Skin-to-Crystal Touch', 'All-Day Luxury Comfort']
        },
        {
          num: '05',
          badge: '05 / VEDIC CONSECRATION',
          kicker: 'CHAPTER 05 • BRAHMAMUHURTA CONSECRATION',
          title: 'Kuber Yantra & 108 Lakshmi Beej Sankalp',
          img: 'assets/money-magnet-5.jpg',
          desc: 'Har ek bracelet ko dispatch se pehle Kuber Altar par consecrated kiya jata hai. Pure brass diya ki agni, dhoop dravya aur 108 Kuber Gayatri beej mantron se iske inert crystal lattice ko "Chaitanya" (energetically alive) kiya jata hai, taaki wearer tak pahunchte hi yeh apna cosmic karya shuru kar sake.',
          specs: ['4:24 AM Brahmamuhurta', '108 Kuber Gayatri & Sri Suktam', 'Himalayan Vedic Lineage']
        }
      ],
      intro: 'Yeh koi aam fashion jewelry nahi hai. Yeh 5 mukhya abundance crystals (Pyrite, Citrine, Green Aventurine, Green Onyx, Tiger Eye) aur Clear Quartz ka certified Vedic sequence hai, jise Kuber Kund me 108 Gayatri mantron se abhimantrit kiya gaya hai. Yeh wearer ke bio-magnetic aura se poverty consciousness aur financial blocks ko dissolve karke continuous cashflow aur wealth opportunities attract karta hai.',
      howItWorks: [
        {
          title: '528Hz Wealth Frequency Activation',
          desc: 'Peruvian Pyrite aur Golden Citrine solar frequency (Agni Tattva) ko conduct karke sub-conscious mind ke scarcity blocks ko break karte hain.'
        },
        {
          title: 'Heart & Solar Plexus Alignment',
          desc: 'Green Aventurine aur Green Onyx dil ke chakra ko open karke naye business deals, luck aur financial calmness attract karte hain.'
        },
        {
          title: 'Unbroken Prana Loop Spacers',
          desc: 'High-polish gold sphere spacers continuous electromagnetic loop maintain karte hain taaki haath ke Lagna Pulse par uninterrupted energy flow rahe.'
        }
      ],
      stones: [
        {
          name: 'Peruvian Raw Iron Pyrite',
          vedic: 'Swarna Makshika (स्वर्ण माक्षिक)',
          role: 'Wealth Attractor',
          chakra: 'Agni Tattva • Solar Plexus (528Hz)',
          desc: 'Metallic cubic crystal structure jo sub-conscious mind se scarcity mindset ko dissolve karke continuous cash opportunities aur unexpected wealth inflow ko magnetic pull deta hai.'
        },
        {
          name: 'Golden Citrine',
          vedic: 'Sunela (सुनेला) / Merchant\'s Stone',
          role: 'Business Success',
          chakra: 'Devaguru Brihaspati (Jupiter)',
          desc: 'Vyapariyon ka mukhya ratna. Negative financial energy ko positive cashflow me badal deta hai. Sales closures aur client conversions me stagnation ko break karta hai.'
        },
        {
          name: 'Green Aventurine',
          vedic: 'Dana-Malika (धन-मालिका)',
          role: 'Opportunity & Luck',
          chakra: 'Anahata Chakra (Heart Center)',
          desc: 'Natural shimmering mica flecks se yukt. New job promotions, business tenders, investments aur stock market me favorable cosmic luck attract karta hai.'
        },
        {
          name: 'Deep Green Onyx',
          vedic: 'Soumya Ratna (सौम्य रत्न)',
          role: 'Emotional & Debt Stability',
          chakra: 'Budh Graha (Mercury Resonance)',
          desc: 'Nervous system ko shaant karke financial anxiety aur anchahe achanak kharchon ko roktay hai, jisse wealth accumulate (bachat) hoti hai.'
        },
        {
          name: 'South African Tiger Eye',
          vedic: 'Vyaghra Ratna (व्याघ्र अक्षी)',
          role: 'Loss & Envy Protection',
          chakra: 'Manipura Chakra (Grounding)',
          desc: 'Chatoyant optical band jo fearless focus deta hai. Business fraud, bad debts aur competitors ki jealous buri nazar se suraksha pradaan karta hai.'
        },
        {
          name: 'Natural Clear Quartz',
          vedic: 'Shudh Sphatik (स्फटिक)',
          role: '10x Master Amplifier',
          chakra: 'Sahasrara (Crown Harmony)',
          desc: 'Hexagonal crystalline grid baki sabhi 5 abundance crystals ki vibrational frequency ko 10 guna amplify karke unified energy field banata hai.'
        },
        {
          name: '18K Gold Sphere Spacers',
          vedic: 'Tamra-Swarna Conductor',
          role: 'Energy Loop Circuit',
          chakra: 'Lagna Acupressure Meridian',
          desc: 'Crystals ke beech prana flow ko unbroken rakhte hain taaki haath ke pulse point par continuous wealth vibration communicate hoti rahe.'
        }
      ],
      features: [
        { label: 'Stone Sequence', value: 'Pyrite, Citrine, Aventurine, Onyx, Tiger Eye, Quartz' },
        { label: 'Bead Dimension', value: '8mm Grade-AAA Natural Polished Spheres' },
        { label: 'Energization Lineage', value: '108 Kuber Gayatri & Lakshmi Beej Japa' },
        { label: 'Muhurta Protocol', value: 'Brahmamuhurta (4:24 AM - 5:12 AM)' },
        { label: 'Spacers & Wiring', value: 'Electromagnetic Pure Gold-Finish Spheres' },
        { label: 'Authenticity Guarantee', value: 'GI Lab Certified Gemological Grade' }
      ],
      whoShouldWear: [
        'Jin seekers ke vyapar ya career me financial flow stagnant ho gaya hai aur payments atak rahi hain.',
        'Jo log regular earn karte hain lekin anchahe achanak kharche aur debt ka pressure rehta hai.',
        'New business, investments ya startup shuru karne wale jo decisive leadership chahte hain.'
      ]
    },

    'career-shield': {
      id: 'career-shield',
      kicker: '10TH HOUSE KARMA BHAVA • ROYAL AUTHORITY & EXPANSION',
      title: 'Aditya-Tejas Surya-Budh Career & Executive Authority Shield',
      rating: '★ 4.99 (580+ Consecrated Seekers)',
      img: 'assets/career-shield-1.jpg',
      badge: 'Dasham Bhav Authority Matrix',
      chapters: [
        {
          num: '01',
          badge: '01 / SANCTIFIED FORM',
          kicker: 'CHAPTER 01 • THE BASALT SANCTUARY',
          title: 'Sacred Surya Yantra Medallion & 24K Gold Alloy Core',
          img: 'assets/career-shield-1.jpg',
          desc: 'Chiselled raw black basalt slate platter par vishram karta yeh Aditya-Tejas Shield ek commanding architectural authority pradarshit karta hai. Center me pure 24K gold finished Surya Yantra medallion hai jisme 12 Aditya solar rays aur sacred Gayatri geometry engraved hai, jiske dono taraf faceted Burmese Ruby, cubic Peruvian Pyrite aur Golden Tiger Eye shastra-sammat poise deliver karte hain.',
          specs: ['24K Surya Yantra Core', 'Faceted Burmese Ruby', 'Raw Basalt Poise']
        },
        {
          num: '02',
          badge: '02 / SACRED MATRIX',
          kicker: 'CHAPTER 02 • THE 10TH HOUSE CODEX',
          title: 'Navy Leather Flat-Lay & Certified Vedic Alignment',
          img: 'assets/career-shield-2.jpg',
          desc: 'Midnight blue executive leather par certified "ADITYA-TEJAS CAREER SHIELD • 10TH HOUSE VEDIC MATRIX" presentation card ke saath arranged. Pyrite cubes ke geometric angles, deep pigeon-blood ruby beads aur tiger eye ka balance Kundli ke Dasham Bhav (House of Career, Power & Fame) ko seedha stimulate karta hai, jisse workplace recognition aur promotions me rukawatein samapt hoti hain.',
          specs: ['10th House Karma Codex', 'Pancha-Dhatu Spacers', 'GI Lab Gemological Grade']
        },
        {
          num: '03',
          badge: '03 / GEMOLOGICAL PHYSICS',
          kicker: 'CHAPTER 03 • MACRO MINERAL CRAFT',
          title: 'Raw Ruby Inclusions & Radiant Solar Engraved Spacers',
          img: 'assets/career-shield-3.jpg',
          desc: 'Extreme macro close-up me dekhein: Unheated natural Ruby bead ke bheetar pigeon-blood crimson fractures aur rutile silk threads solar heat absorb karte hain, metallic Pyrite cube ke sharp edges strategic intellect promote karte hain, aur 18K gold finished bead par haath se engraved Surya-chakra continuous cosmic energy flow sustain karta hai.',
          specs: ['Pigeon-Blood Ruby Silk', 'Cubic Pyrite Sharp Facets', 'Hand-Engraved Surya Bead']
        },
        {
          num: '04',
          badge: '04 / LIVING RESONANCE',
          kicker: 'CHAPTER 04 • LIVING RESONANCE ON WRIST',
          title: 'Executive Boardroom Dominance & Radial Pulse Touch',
          img: 'assets/career-shield-4.jpg',
          desc: 'High-gloss mahogany boardroom conference table par luxury gold timepieces ke saath pehna gaya yeh shield ek unapologetic commanding aura radiate karta hai. Jab crystals wearer ki right wrist (action-oriented solar channel) ke radial pulse se touch karte hain, toh yeh corporate negotiations, presentations aur high-stakes deals me unwavering confidence aur persuasive speech deta hai.',
          specs: ['Right Pingala Solar Channel', 'Boardroom Gravitas', 'High-Stakes Decision Poise']
        },
        {
          num: '05',
          badge: '05 / VEDIC CONSECRATION',
          kicker: 'CHAPTER 05 • BRAHMAMUHURTA CONSECRATION',
          title: 'Copper Surya Yantra, Sindoor Altar & 1008 Aditya Hridayam',
          img: 'assets/career-shield-5.jpg',
          desc: 'Himalayan temple sanctum me subah Brahmamuhurta me Surya Bhagwan ki pehli kiran ke samay consecrated. Pavitra tamra Surya yantra par sindoor, kumkum, brass kalash aur loban dhoop ke pavitra dhuen ke beech 1008 Rigvedic Aditya Hridayam aur Gayatri mantron se iske crystal lattice ko "Prana Pratishtha" di jati hai.',
          specs: ['Morning Surya Kiran Pratishtha', '1008 Aditya Hridayam Japa', 'Himalayan Vedic Ashram Lineage']
        }
      ],
      intro: 'Vedic Jyotish ke Dasham Bhav (10th House of Career, Status, Governance & Royal Authority) ko balwan karne ke liye Surya (Sun), Budh (Mercury) aur Brihaspati ke pavitra prabhav se craft kiya gaya Aditya-Tejas Astral Shield. Yeh workplace politics, bureaucratic delays aur promotion hurdles ko overcome karne ke liye ek prachand cosmic protective shield provide karta hai jo wearer ke speech aur aura me natural authority badhata hai.',
      howItWorks: [
        {
          title: 'Surya Tejas & Commanding Aura Transmission',
          desc: 'Surya Bhagwan ki royal authority aur commanding influence ko elevate karta hai, jisse meetings aur presentations me aapki aawaz aur decisions ka authentic weight badhta hai.'
        },
        {
          title: 'Budh-Brihaspati Strategic Intellect Expansion',
          desc: 'Peruvian cubic pyrite aur tiger eye sharp intellect, market analysis aur complex negotiations me quick decisive victory dilaate hain.'
        },
        {
          title: 'Karma Stagnation & Credit Leakage Dissolution',
          desc: 'Aksar mehnat ka credit dusre le jate hain ya promotion atak jati hai. Yeh shield 10th house ke energy leaks ko seal karke credit aur fame directly wearer ko anchor karta hai.'
        }
      ],
      stones: [
        {
          name: 'Natural Faceted Burmese Ruby',
          vedic: 'Manikya Ratna (माणिक्य रत्न)',
          role: 'Royal Authority & Self-Esteem',
          chakra: 'Surya Graha • Manipura Chakra',
          desc: 'Pigeon-blood red natural ruby jo leadership qualities, executive presence aur administrative power ko stimulate karta hai.'
        },
        {
          name: 'Peruvian Cubic Iron Pyrite',
          vedic: 'Swarna Makshika (स्वर्ण माक्षिक)',
          role: 'Strategic Wealth & Focus',
          chakra: 'Budh-Agni Tattva • Solar Plexus',
          desc: 'Sharp cubic metallic facets jo decisive market strategy, financial calculations aur aggressive business wins me clarity dete hain.'
        },
        {
          name: 'South African Golden Tiger Eye',
          vedic: 'Vyaghra Akshi (व्याघ्र अक्षी)',
          role: 'Courage & Boardroom Focus',
          chakra: 'Solar-Plexus Willpower',
          desc: 'Golden chatoyant luster jo competitors aur workplace politics se protection deta hai aur high-pressure environment me fearless calm maintain karta hai.'
        },
        {
          name: 'High-Density Black Obsidian',
          vedic: 'Pratyangira Raksha Ratna (प्रत्यांगिरा)',
          role: 'Stress & Fatigue Shield',
          chakra: 'Muladhara Grounding',
          desc: 'Deep volcanic mineral jo mental burnout, corporate exhaustion aur negative envy vibrations ko sponge ki tarah absorb kar leta hai.'
        },
        {
          name: '24K Gold Surya Yantra Medallion',
          vedic: 'Aditya Mandala Yantra (आदित्य मण्डल)',
          role: 'Focal Leadership Vortex',
          chakra: 'Sahasrara & Pingala Channel',
          desc: '12 Aditya rays aur sacred Vedic geometry se yukt central disc jo recognition, promotion aur royal prestige attract karti hai.'
        },
        {
          name: 'Hand-Engraved Surya-Chakra Gold Spacers',
          vedic: 'Tejas Conductor (तेजस संवाहक)',
          role: 'Continuous Prana Circulation',
          chakra: 'Radial Pulse Meridian',
          desc: 'High-polish engraved spacers jo crystals ke beech uninterrupted energy loop banaye rakhte hain.'
        }
      ],
      features: [
        { label: 'Gemstone Matrix', value: 'Faceted Ruby + Cubic Pyrite + Tiger Eye + Black Obsidian' },
        { label: 'Central Focal Medallion', value: '24K Micron Gold Plated Surya Yantra Disc' },
        { label: 'Bead Dimension', value: '8mm-10mm Grade-AAA Hand-Polished Spheres & Cubes' },
        { label: 'Consecration Lineage', value: '1008 Rigvedic Aditya Hridayam & Gayatri Japa' },
        { label: 'Muhurta Protocol', value: 'Sunday Shukla Paksha Surya Sunrise Yoga' },
        { label: 'Certification Standard', value: 'GI Lab Certified 100% Natural Gemstones' }
      ],
      whoShouldWear: [
        'Corporate leaders, managers aur executives jo promotion, salary hike aur status recognition chahte hain.',
        'Hardworking professionals jinki mehnat ka credit hamesha koi aur le jata hai ya jinka career stagnate ho chuka hai.',
        'Business founders, consultants aur civil services aspirants jo authority, winning tenders aur commanding negotiations chahte hain.'
      ]
    },

    'love-harmony': {
      id: 'love-harmony',
      kicker: 'ANAHATA CHAKRA • PREM, SOULMATE & MARRIAGE HARMONY',
      title: 'Radha-Shukra Vedic Prem & Sambandh Harmony Kavach',
      rating: '★ 4.99 (640+ Consecrated Seekers)',
      img: 'assets/love-harmony-1.jpg',
      badge: 'Prem & Vivah Matrix',
      chapters: [
        {
          num: '01',
          badge: '01 / SANCTIFIED FORM',
          kicker: 'CHAPTER 01 • THE TRAVERTINE SANCTUARY',
          title: 'Anahata Lotus & Soft Pastel Gemstone Symmetry',
          img: 'assets/love-harmony-1.jpg',
          desc: 'Organic fluted travertine stone platter par vishram karta yeh bracelet Madagascar Rose Quartz, Peach Moonstone aur Burmese Green Jade ka ek komal aur aakarshak swaroop darshata hai. Center me laga pure 18K rose gold Anahata lotus charm dil ke chakra ki 12 pankhudiyon ko represent karta hai.',
          specs: ['8mm Grade-AAA Rose Quartz', '18K Rose Gold Lotus Charm', 'Fluted Travertine Balance']
        },
        {
          num: '02',
          badge: '02 / SACRED MATRIX',
          kicker: 'CHAPTER 02 • THE RADHA-SHUKRA CODEX',
          title: 'Certified Gemological Sequence & Authenticity Card',
          img: 'assets/love-harmony-2.jpg',
          desc: 'Cotton textured paper par prastut yeh flat-lay Radha-Shukra Prem Kavach ki gemological authenticity ko pramanit karta hai. Gulabi Sphatik, Harita Jade aur Chandra Kanta Mani ka yeh certified kram do aatmayon ke beech mutual respect, unconditional acceptance aur emotional safety establish karta hai.',
          specs: ['GI Lab Authenticated', 'Madagascar & Burmese Origin', 'Zero Heat-Treated Glass']
        },
        {
          num: '03',
          badge: '03 / GEMOLOGICAL PHYSICS',
          kicker: 'CHAPTER 03 • MACRO MINERAL FACETS',
          title: 'Faceted Rose Quartz & Lunar Adularescence',
          img: 'assets/love-harmony-3.jpg',
          desc: 'Extreme macro focus me dekhein: Faceted Rose Quartz ke bheetar natural crystalline fractures soft pink glow dete hain, Peach Moonstone ke andar blue-peach lunar shimmer (adularescence) chamakta hai, aur mirror-finish rose gold ball divine cosmic current conduct karta hai.',
          specs: ['Natural Mineral Fractures', 'Blue-Peach Adularescence', 'Rose Gold Conductor']
        },
        {
          num: '04',
          badge: '04 / LIVING RESONANCE',
          kicker: 'CHAPTER 04 • LIVING RESONANCE ON WRIST',
          title: 'Aura Softening & Relationship Empathy',
          img: 'assets/love-harmony-4.jpg',
          desc: 'Sunlit marble table par café setting me pehna gaya yeh bracelet subtle elegance radiate karta hai. Yeh wearer ki body language aur voice tone ko naturally soft aur receptive banata hai, jisse conversation me bitterness ya defensive ego dissolve ho jati hai aur empathy badhti hai.',
          specs: ['Emotional Softening', 'All-Day Wrist Comfort', 'Subtle Luxury Aesthetic']
        },
        {
          num: '05',
          badge: '05 / VEDIC CONSECRATION',
          kicker: 'CHAPTER 05 • BRAHMAMUHURTA CONSECRATION',
          title: 'Silver Thali, Pink Lotus & Sandalwood Pratishtha',
          img: 'assets/love-harmony-5.jpg',
          desc: 'Pure silver engraved thali me tazi gulabi lotus pankhudiyan, laal gulab, aur chandan ke saath yeh kavach consecrated hota hai. Shukra Gayatri aur Kamadeva mantron se abhimantrit yeh kavach marriage me romance, trust aur spiritual oneness ko punarjeevit karta hai.',
          specs: ['Silver Thali Pratishtha', '1008 Radha-Krishna Japa', 'Shukra-Chandra Harmony']
        }
      ],
      intro: 'Vedic Jyotish me Shukra (Venus) aur Chandra (Moon) ki shubh drishti se prem sambandh, shaadi aur parivaarik sauhardh sthir rehte hain. Yeh pavitra kavach Grade-AAA Madagascar Rose Quartz (Gulabi Sphatik), Peach Moonstone (Chandra Kanta Mani), aur Burmese Green Jade ka certified sequence hai, jise Radha-Krishna aur Kamadeva beej mantron se 108 baar abhimantrit kiya gaya hai. Yeh dil ke chakra ke purane emotionally painful wounds aur ego clashes ko dissolve karke unconditional love aur deep bonding attract karta hai.',
      howItWorks: [
        {
          title: 'Anahata (Heart Chakra) 528Hz Tuning',
          desc: 'Translucent Rose Quartz aur Green Jade dil ki subtle vibrational frequency ko open karke self-love, empathy aur emotional safety create karte hain.'
        },
        {
          title: 'Chandra Kanta Lunar Cooling',
          desc: 'Peach Moonstone lunar energy release karke rishton me achanak hone wale verbal arguments, insecurity aur overthinking ko shaant karta hai.'
        },
        {
          title: 'Lotus Mudra Soulmate Attraction',
          desc: 'Central rose-gold Anahata lotus emblem wearer ke aura ko magnetic aur gentle banata hai jisse compatible partners naturally attract hote hain.'
        }
      ],
      stones: [
        {
          name: 'Madagascar Natural Rose Quartz',
          vedic: 'Gulabi Sphatik / Prem Ratna (प्रेम रत्न)',
          role: 'Unconditional Love & Heart Healing',
          chakra: 'Anahata Chakra (Heart Center)',
          desc: 'Translucent soft blush pink crystal jo past emotional heartbreaks, resentment aur distrust ko dissolve karke tender compassion jagata hai.'
        },
        {
          name: 'Burmese Imperial Green Jade',
          vedic: 'Harita Ratna / Hridaya Stambh (हरित रत्न)',
          role: 'Marital Trust & Loyalty Anchor',
          chakra: 'Anahata Prithvi Tattva',
          desc: 'Smooth light-green polished jade jo vivah aur long-term commitments me unwavering trust, emotional peace aur stability establish karta hai.'
        },
        {
          name: 'Luminous Peach Moonstone',
          vedic: 'Chandra Kanta Mani (चन्द्रकान्त मणि)',
          role: 'Emotional Softening & Romance',
          chakra: 'Swadhisthana & Ajna Gateway',
          desc: 'Glowing adularescence shimmer se yukt stone jo mood swings, misunderstandings aur verbal bitterness ko cooling lunar touch deta hai.'
        },
        {
          name: '18K Rose Gold Sphere Spacers',
          vedic: 'Tamra-Swarna Conductor (ताम्र-स्वर्ण)',
          role: 'Continuous Prana Circulation',
          chakra: 'Lagna Pulse Meridian',
          desc: 'Crystals ke beech gentle electromagnetic current maintain karte hain taaki haath ke nadi point par prem ki continuous frequency communicate hoti rahe.'
        },
        {
          name: 'Rose Gold Anahata Lotus Focal Charm',
          vedic: 'Hridaya Padma Yantra (हृदय पद्म यन्त्र)',
          role: 'Soul Connection Magnet',
          chakra: 'Heart Lotus Vortex',
          desc: 'Pavitra 12-petaled Anahata chakra geometry jo authentic commitment, respect aur emotional harmony ko anchor karti hai.'
        }
      ],
      features: [
        { label: 'Gemstone Sequence', value: 'Madagascar Rose Quartz + Peach Moonstone + Green Jade' },
        { label: 'Center Focal Mudra', value: '18K Rose Gold Finished Anahata Lotus Charm' },
        { label: 'Bead Dimension', value: '8mm Grade-AAA Natural Hand-Polished Spheres' },
        { label: 'Consecration Lineage', value: '1008 Radha-Krishna & Shukra Gayatri Japa' },
        { label: 'Muhurta Protocol', value: 'Friday Shukla Paksha Amrit Siddhi Yoga' },
        { label: 'Certification Standard', value: 'GI Lab Certified 100% Natural Gemstones' }
      ],
      whoShouldWear: [
        'Jin couples ya married partners ke beech choti-choti baaton par ego clashes aur dooriyan badh rahi hain.',
        'Jo log apna genuine soulmate ya stable marriage proposal attract karna chahte hain.',
        'Jinka past relationship trauma ya heartbreak unhe naye rishte me trust karne se rok raha hai.'
      ]
    },

    'love-nazar': {
      id: 'love-nazar',
      kicker: 'AURA CLEANSING • TRIPLE PROTECTION & EVIL EYE DEFLECTION',
      title: 'Authentic Triple Protection & Evil Eye Nazar Raksha Kavach',
      rating: '★ 4.98 (680+ Consecrated Seekers)',
      img: 'assets/nazar-shield-1.jpg',
      badge: 'Triple Shield Matrix',
      chapters: [
        {
          num: '01',
          badge: '01 / SANCTIFIED FORM',
          kicker: 'CHAPTER 01 • THE DARK SLATE BASTION',
          title: 'Impenetrable Aura Armor & Luxury Presentation',
          img: 'assets/nazar-shield-1.jpg',
          desc: 'Charcoal black basalt slate rock par "RAKSHA" luxury box ke saath rakha yeh Triple Protection Shield ek commanding visual weight deliver karta hai. High-density volcanic obsidian, specular hematite aur golden tiger eye ka anutha sangam ek personal protective armor banata hai.',
          specs: ['Triple Stone Defense', 'Black Slate Presentation', '8mm High-Density Spheres']
        },
        {
          num: '02',
          badge: '02 / SACRED MATRIX',
          kicker: 'CHAPTER 02 • THE TRIPLE DEFENSE CODEX',
          title: 'Architectural Fluted Flat-Lay & Alignment Grid',
          img: 'assets/nazar-shield-2.jpg',
          desc: 'Fluted architectural tray par certified order me arranged: Mediterranean Cobalt Evil Eye focal point, jiske dono taraf high-polish Black Obsidian, mirror Hematite aur chatoyant Tiger Eye shastra-sammat geometry me place kiye gaye hain taaki kisi bhi disha se aane wali evil glare block ho sake.',
          specs: ['10mm Cobalt Evil Eye', 'Fibonacci Balance Pattern', 'Engineered Silver Spacers']
        },
        {
          num: '03',
          badge: '03 / GEMOLOGICAL PHYSICS',
          kicker: 'CHAPTER 03 • SPECULAR METALLIC PHYSICS',
          title: 'Mirror Hematite Reflection & Volcanic Density',
          img: 'assets/nazar-shield-3.jpg',
          desc: 'Extreme macro close-up me dekhein: Jet black Obsidian volcanic glass ki gehrai, Metallic Hematite sphere jisme pure mirror reflection banta hai jo camera lens tak reflect karta hai, aur Tiger Eye ka silky golden chatoyant fiber band jo protective shield ka kam karta hai.',
          specs: ['Specular Hematite Mirror', 'Natural Chatoyant Tiger Eye', 'Deep Volcanic Obsidian']
        },
        {
          num: '04',
          badge: '04 / LIVING RESONANCE',
          kicker: 'CHAPTER 04 • LIVING RESONANCE ON WRIST',
          title: 'Executive Boardroom Armor & Envy Deflection',
          img: 'assets/nazar-shield-4.jpg',
          desc: 'Corporate boardroom me dark tailored suit ke saath wrist par pehna gaya yeh shield high-stakes negotiations me psychological balance banaye rakhta hai. Office politics, malicious envy aur boardroom rivalries ke beech wearer ka focus laser-sharp aur grounded rehta hai.',
          specs: ['Boardroom Psychic Armor', 'Negative Intent Absorption', 'Commanding Authority']
        },
        {
          num: '05',
          badge: '05 / VEDIC CONSECRATION',
          kicker: 'CHAPTER 05 • BRAHMAMUHURTA CONSECRATION',
          title: 'Antique Brass Thali, Sarson Diya & Kale Til Pratishtha',
          img: 'assets/nazar-shield-5.jpg',
          desc: 'Pracheen Vedic mandir me brass thali par sarson ke tel ka diya, kale til aur dhoop ke pavitra dhuen me is bracelet ka 1008 Maha Mrityunjaya aur Pratyangira beej mantron se sankalp kiya gaya hai. Yeh wearer par aane wali kisi bhi achanak aapad ya buri drishti ko tatkal shant karta hai.',
          specs: ['1008 Maha Mrityunjaya Japa', 'Sarson Diya & Kale Til Homa', 'Pratyangira Devi Shield']
        }
      ],
      intro: 'Buri nazar, toxic workplace jealousy aur anchahe psychological stress ko kaatne ke liye banaya gaya Authentic Triple Protection Shield. Isme Mediterranean Cobalt Blue Evil Eye focal bead ke saath natural Black Obsidian, mirror-polish Metallic Hematite aur Golden Tiger Eye ko shastra-sammat Vedic kram me gundha gaya hai. Maha Mrityunjaya aur Pratyangira beej mantron se sanctified yeh kavach wearer ke aura ke charo taraf ek abhedya raksha chakra banata hai.',
      howItWorks: [
        {
          title: 'Cobalt Evil Eye Active Deflection',
          desc: 'Concentric circle optical geometry kisi bhi jealous nazar ya malicious intent ko tatkal pakad kar uske source par hi neutralize kar deti hai.'
        },
        {
          title: 'Black Obsidian Sponge Absorption',
          desc: 'High-density volcanic obsidian toxic aur depressive vibrations ko absorb karke wearer ke bio-field ko bilkul clean aur light rakhta hai.'
        },
        {
          title: 'Hematite Grounding & Root Anchor',
          desc: 'Mirror-metallic hematite pulse point par blood circulation aur nervous system ko ground karke overthinking aur sudden anxiety attacks ko roktay hai.'
        }
      ],
      stones: [
        {
          name: 'Cobalt Blue Evil Eye Focal Bead',
          vedic: 'Drishti Dosh Haran (दृष्टि दोष हरण)',
          role: 'Active Glare Deflector',
          chakra: 'Ajna Chakra (Third Eye Shield)',
          desc: 'Hand-crafted concentric cobalt blue, white aur black pupil. Yeh kisi bhi jealous vyakti ki seedhi buri nazar ko deflect karke aapke subtle body ko bachaata hai.'
        },
        {
          name: 'High-Polish Black Obsidian',
          vedic: 'Pratyangira Raksha Ratna (प्रत्यांगिरा रत्न)',
          role: 'Toxicity Absorption',
          chakra: 'Muladhara Chakra (Root Grounding)',
          desc: 'Prachand volcanic glass jo toxic office politics, negative energy aur psychic attacks ko sponge ki tarah absorb karke harmless bana deta hai.'
        },
        {
          name: 'Mirror-Finish Metallic Hematite',
          vedic: 'Lohitaksh / Raktashma (रक्ताश्म)',
          role: 'Energetic Armor & Seal',
          chakra: 'Prithvi Tattva (Earth Balance)',
          desc: 'Specular mirror reflection se yukt pure iron-bearing stone. Yeh subconscious stress, burnout aur energy vampires se aura leaks ko seal karta hai.'
        },
        {
          name: 'South African Golden Tiger Eye',
          vedic: 'Vyaghra Akshi (व्याघ्र अक्षी)',
          role: 'Willpower & Fearlessness',
          chakra: 'Manipura Chakra (Solar Plexus)',
          desc: 'Silky chatoyant optical band jo internal fear, indecision aur self-doubt ko overcome karke commanding self-worth aur dynamic confidence deta hai.'
        },
        {
          name: 'Engineered Silver Ring Spacers',
          vedic: 'Rajat Mandala (रजत मण्डल)',
          role: 'Cooling & Frequency Bridge',
          chakra: 'Som / Chandra Meridian',
          desc: 'Central Evil eye ke dono taraf lagaye gaye silver finish spacers gemstones ke electromagnetic flow ko harmonious aur grounded banaye rakhte hain.'
        }
      ],
      features: [
        { label: 'Triple Stone Core', value: 'Black Obsidian + Hematite + Golden Tiger Eye' },
        { label: 'Center Eye Dimension', value: '10mm Hand-Formed Cobalt Blue Glass Enamel' },
        { label: 'Bead Dimension', value: '8mm Grade-AAA High-Polish Calibrated Spheres' },
        { label: 'Vedic Consecration', value: '1008 Maha Mrityunjaya & Pratyangira Japa' },
        { label: 'Sacred Cord', value: 'Reinforced Multi-Ply Elastic / Adjustable Silk' },
        { label: 'Quality Guarantee', value: '100% Genuine Gemological Certified' }
      ],
      whoShouldWear: [
        'Jin logon ko lagta hai ki unke kaam, khushiyon ya success par bar-bar buri nazar lagti hai aur kaam bante-bante bigad jaate hain.',
        'High-profile, corporate professionals ya entrepreneurs jo toxic environment aur competitors ke beech kaam karte hain.',
        'Jo log regular thakan, bina wajah ka heaviness, chidchidapan ya unexplained anxiety feel karte hain.'
      ]
    }
  };

  // 3. PAGE NAVIGATION LOGIC
  function showPage(pageId) {
    state.activePage = pageId;

    // Toggle pages
    const pages = document.querySelectorAll('.app-page');
    pages.forEach(p => {
      p.classList.remove('active');
    });

    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
      targetPage.classList.add('active');
      // Scroll to top of viewport
      targetPage.scrollTop = 0;
      const scrollable = targetPage.querySelector('.app-scroll-content');
      if (scrollable) scrollable.scrollTop = 0;
    }

    // Toggle bottom dock tabs
    const homeTab = document.getElementById('tab-nav-home');
    const apptTab = document.getElementById('tab-nav-appointment');
    const statusTab = document.getElementById('tab-nav-status');

    if (homeTab) homeTab.classList.toggle('active', pageId === 'home');
    if (apptTab) apptTab.classList.toggle('active', pageId === 'appointment');
    if (statusTab) statusTab.classList.toggle('active', pageId === 'status');
  }

  // 4. ROLEX-STYLE PRODUCT PAGE RENDERER (NO POPUPS)
  function showProduct(productId) {
    const prod = products[productId] || products['money-magnet'];
    const container = document.getElementById('dynamic-product-content');
    if (!container) return;

    const hasGallery = prod.gallery && prod.gallery.length > 0;
    const initialImg = hasGallery ? prod.gallery[0].src : prod.img;

    // Build Rolex Luxury Showcase in Hinglish with Chapter-by-Chapter Editorial Cards
    container.innerHTML = `
      <!-- Luxury Masterpiece Header Card -->
      <div class="rolex-product-header">
        <span class="rolex-kicker">${prod.kicker}</span>
        <h1 class="rolex-main-title">${prod.title}</h1>
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <div class="rolex-rating-badge">
            <span>${prod.rating}</span>
          </div>
          <span class="teaser-badge" style="position: static;">${prod.badge}</span>
        </div>
        <div class="rolex-pillars-row">
          <span class="rolex-pillar-tag">✓ 100% Consecrated</span>
          <span class="rolex-pillar-tag">✓ Handcrafted Spheres</span>
          <span class="rolex-pillar-tag">✓ GI Lab Certified</span>
          <span class="rolex-pillar-tag">✓ Brahmamuhurta Lineage</span>
        </div>
      </div>

      <!-- Rolex Editorial Visuals Flow: Every Image In Its Dedicated Luxury Card -->
      <div class="rolex-chapters-flow">
        ${(prod.chapters || []).map(ch => `
          <article class="rolex-story-card">
            <div class="rolex-card-media-box">
              <img src="${ch.img}" alt="${ch.title}" loading="lazy">
              <span class="rolex-chapter-floating-badge">${ch.badge}</span>
            </div>
            <div class="rolex-card-caption-body">
              <span class="rolex-card-kicker">${ch.kicker}</span>
              <h3 class="rolex-card-title">${ch.title}</h3>
              <p class="rolex-card-narrative">${ch.desc}</p>
              ${ch.specs && ch.specs.length > 0 ? `
                <div class="rolex-card-specs-pills">
                  ${ch.specs.map(spec => `<span class="rolex-spec-pill">✦ ${spec}</span>`).join('')}
                </div>
              ` : ''}
            </div>
          </article>
        `).join('')}
      </div>
    `;

    // Navigate to dedicated page
    showPage('product-detail');
  }

  function switchProductImage(src, el) {
    const mainImg = document.getElementById('rolex-main-display-img');
    if (!mainImg) return;
    mainImg.style.opacity = '0.3';
    mainImg.style.transform = 'scale(0.98)';
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = '1';
      mainImg.style.transform = 'scale(1)';
    }, 120);

    document.querySelectorAll('.rolex-thumb-item').forEach(t => t.classList.remove('active'));
    if (el) el.classList.add('active');
  }

  // 5. APPOINTMENT BOOKING HANDLER
  function submitAppointment() {
    const name = document.getElementById('appt-name')?.value.trim();
    const phone = document.getElementById('appt-phone')?.value.trim();
    const concern = document.getElementById('appt-concern')?.value;
    const dob = document.getElementById('appt-dob')?.value;
    const tob = document.getElementById('appt-tob')?.value;
    const city = document.getElementById('appt-city')?.value.trim();
    const acharya = document.querySelector('input[name="appt-acharya"]:checked')?.value || 'Acharya Vidyadhar Shastri';

    if (!name || !phone) {
      alert('Kripya apna poora naam aur WhatsApp number darj karein.');
      return;
    }

    state.booking.name = name;
    state.booking.phone = phone;
    state.booking.concern = concern;
    state.booking.dob = dob;
    state.booking.tob = tob;
    state.booking.city = city;
    state.booking.acharya = acharya;
    state.booking.id = 'ASTRA-' + Math.floor(1000 + Math.random() * 9000);

    // Populate pass elements
    document.getElementById('appt-pass-id').textContent = state.booking.id;
    document.getElementById('appt-pass-name').textContent = state.booking.name;
    document.getElementById('appt-pass-acharya').textContent = state.booking.acharya;
    document.getElementById('appt-pass-focus').textContent = state.booking.concern;

    // Show pass card
    const passBox = document.getElementById('appointment-success-box');
    if (passBox) {
      passBox.style.display = 'block';
      passBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Auto fill status search input for seamless tracking
    const statusInput = document.getElementById('status-phone-input');
    if (statusInput) {
      statusInput.value = phone;
    }
  }

  // 6. STATUS LOOKUP & VERIFICATION PORTAL
  function checkUserStatus() {
    const input = document.getElementById('status-phone-input');
    const val = input ? input.value.trim() : '';

    if (!val || val.replace(/\D/g, '').length < 10) {
      alert('Kripya apna 10-digit mobile number sahi se darj karein.');
      return;
    }

    const cleanNum = val.replace(/\D/g, '').slice(-10);
    const titleEl = document.getElementById('report-user-title');
    const phoneEl = document.getElementById('report-reg-phone');
    const resultArea = document.getElementById('status-result-area');

    if (titleEl) {
      titleEl.textContent = (state.booking.name ? state.booking.name : 'Vedic Seeker') + ' Ji';
    }
    if (phoneEl) {
      phoneEl.textContent = '+91 ' + cleanNum;
    }

    if (resultArea) {
      resultArea.style.display = 'block';
      resultArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // 7. DOWNLOAD KUNDLI REPORT (PDF / PRINTABLE SUMMARY)
  function downloadReportPdf() {
    const seekerName = state.booking.name || 'Vedic Seeker';
    const seekerCity = state.booking.city || 'Varanasi, UP';
    const seekerDob = state.booking.dob || '1995-10-24';
    const seekerTob = state.booking.tob || '08:30 AM';
    const passId = state.booking.id || 'ASTRA-8921';
    const acharya = state.booking.acharya || 'Acharya Vidyadhar Shastri';

    const printWin = window.open('', '_blank', 'width=800,height=900');
    if (!printWin) {
      alert('Pop-up blocked. Kripya pop-ups allow karein report print/download karne ke liye.');
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Astra Vedic - Kundli & Consecration Report (${passId})</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap');
          body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background: #FAFAFA;
            color: #0F172A;
            padding: 30px;
            margin: 0;
          }
          .report-paper {
            background: #FFFFFF;
            border: 2px solid #D97706;
            border-radius: 12px;
            padding: 35px;
            max-width: 720px;
            margin: 0 auto;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          }
          .header {
            text-align: center;
            border-bottom: 2px solid #FDE68A;
            padding-bottom: 20px;
            margin-bottom: 25px;
          }
          .title {
            font-family: 'Cinzel', serif;
            font-size: 24px;
            color: #78350F;
            margin: 0;
            letter-spacing: 2px;
          }
          .subtitle {
            font-size: 13px;
            color: #B45309;
            font-weight: 700;
            letter-spacing: 1px;
            margin-top: 4px;
          }
          .badge-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            font-size: 12px;
            background: #FEF3C7;
            padding: 8px 14px;
            border-radius: 6px;
          }
          .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
          }
          .box {
            background: #F8FAFC;
            border: 1px solid #E2E8F0;
            border-radius: 8px;
            padding: 12px;
          }
          .box small {
            display: block;
            color: #64748B;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
          }
          .box strong {
            font-size: 14px;
            color: #0F172A;
          }
          .chart-preview {
            border: 1px solid #D97706;
            background: #FFFBEB;
            border-radius: 8px;
            padding: 18px;
            text-align: center;
            margin: 20px 0;
          }
          .chart-preview h4 {
            margin: 0 0 10px 0;
            color: #92400E;
            font-family: 'Cinzel', serif;
          }
          .remedy-box {
            border-left: 4px solid #D97706;
            padding-left: 14px;
            margin-top: 20px;
            font-size: 13px;
            line-height: 1.6;
            color: #334155;
          }
          .footer {
            margin-top: 35px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #E2E8F0;
            padding-top: 20px;
            font-size: 11px;
            color: #64748B;
          }
          .btn-print {
            background: linear-gradient(135deg, #D97706, #B45309);
            color: #FFF;
            border: none;
            padding: 10px 20px;
            font-weight: 700;
            border-radius: 6px;
            cursor: pointer;
            display: block;
            margin: 20px auto 0 auto;
          }
          @media print {
            .btn-print { display: none; }
            body { background: #FFF; padding: 0; }
            .report-paper { border: 1px solid #999; box-shadow: none; }
          }
        </style>
      </head>
      <body>
        <div class="report-paper">
          <div class="header">
            <h1 class="title">अस्त्रा वैदिक • ASTRA VEDIC</h1>
            <div class="subtitle">CERTIFIED JANMA KUNDLI & CELESTIAL ALMANAC</div>
          </div>

          <div class="badge-row">
            <span><strong>INTAKE PASS:</strong> ${passId}</span>
            <span><strong>VERIFYING ACHARYA:</strong> ${acharya}</span>
            <span><strong>STATUS:</strong> CONSECRATION VERIFIED ✓</span>
          </div>

          <div class="grid-2">
            <div class="box">
              <small>Seeker Name</small>
              <strong>${seekerName}</strong>
            </div>
            <div class="box">
              <small>Birth Location</small>
              <strong>${seekerCity}</strong>
            </div>
            <div class="box">
              <small>Janma Tithi (DOB)</small>
              <strong>${seekerDob}</strong>
            </div>
            <div class="box">
              <small>Janma Samay (TOB)</small>
              <strong>${seekerTob}</strong>
            </div>
          </div>

          <div class="chart-preview">
            <h4>Bhrigu-Parashara Planetary Coordinates (Lagna & Gochar)</h4>
            <p style="font-size: 12px; color: #78350F; margin: 0;">
              Lagna: <strong>Dhanu (Sagittarius)</strong> • Rashi: <strong>Vrishabha (Taurus, Chandra Exalted)</strong><br>
              Current Active Mahadasha: <strong>Brihaspati (Jupiter) Mahadasha - Shani Antardasha</strong>
            </p>
          </div>

          <div class="remedy-box">
            <strong>Acharya Remedial Recommendation:</strong>
            <p style="margin: 4px 0;">
              Aapki Kundli me 10th House (Karma) aur 2nd House (Dhan) ke beech positive trine sambandh ban raha hai. Wealth blockages ko release karne aur career sthirta ke liye <strong>Vedic Pyrite & Golden Tiger Eye Wealth Magnet</strong> tatha <strong>Surya-Budh Tejas Shield</strong> sarvashreshth energetic alignment pradaan karte hain.
            </p>
          </div>

          <button class="btn-print" onclick="window.print()">Print / Save as PDF 📄</button>

          <div class="footer">
            <span>Official Vedic Ephemeris Record • Astra Sanctuary Lineage</span>
            <span>Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          </div>
        </div>
      </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(htmlContent);
    printWin.document.close();
  }

  // 8. COSMIC PARTICLES BACKGROUND
  function initCanvas() {
    const canvas = document.getElementById('cosmic-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, stars = [];

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      stars = Array.from({ length: 45 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.4,
        a: Math.random(),
        speed: Math.random() * 0.015 + 0.005
      }));
    }

    function render() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#D97706';
      stars.forEach(s => {
        s.a += s.speed;
        if (s.a > 1 || s.a < 0.2) s.speed = -s.speed;
        ctx.globalAlpha = Math.max(0.04, Math.min(0.22, s.a * 0.22));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(render);
    }

    window.addEventListener('resize', resize);
    resize();
    render();
  }

  // 9. COSMIC 432Hz AMBIENT SOUND
  function initAudio() {
    const btn = document.getElementById('toggle-audio-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      if (!state.audio.playing) {
        try {
          const AC = window.AudioContext || window.webkitAudioContext;
          state.audio.ctx = new AC();
          state.audio.gain = state.audio.ctx.createGain();
          state.audio.gain.gain.setValueAtTime(0.001, state.audio.ctx.currentTime);
          state.audio.gain.gain.exponentialRampToValueAtTime(0.04, state.audio.ctx.currentTime + 2);

          const osc = state.audio.ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(432, state.audio.ctx.currentTime);
          osc.connect(state.audio.gain);
          state.audio.gain.connect(state.audio.ctx.destination);
          osc.start();

          state.audio.playing = true;
          btn.classList.add('active');
          btn.style.borderColor = 'var(--vedic-kesar)';
          btn.style.color = 'var(--vedic-kesar)';
          btn.style.background = '#FFFBEB';
        } catch (e) {
          console.warn('Cosmic audio context unavailable');
        }
      } else {
        if (state.audio.gain && state.audio.ctx) {
          state.audio.gain.gain.exponentialRampToValueAtTime(0.001, state.audio.ctx.currentTime + 1);
          setTimeout(() => {
            if (state.audio.ctx) {
              state.audio.ctx.close();
              state.audio.ctx = null;
            }
          }, 1100);
        }
        state.audio.playing = false;
        btn.classList.remove('active');
        btn.style.borderColor = 'rgba(0, 0, 0, 0.08)';
        btn.style.color = 'var(--text-secondary)';
        btn.style.background = 'rgba(255, 255, 255, 0.8)';
      }
    });
  }

  // 10. HERO CAROUSEL LOGIC (Auto-changes smoothly every 5 seconds, no dots)
  let currentHeroSlide = 0;
  let heroAutoInterval = null;

  function setHeroSlide(index) {
    const track = document.getElementById('hero-slides-track');
    if (!track) return;

    const slides = track.querySelectorAll('.hero-slide-card');
    if (!slides.length) return;

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    currentHeroSlide = index;
    track.scrollTo({ left: slides[index].offsetLeft, behavior: 'smooth' });
  }

  function nextHeroSlide() {
    const track = document.getElementById('hero-slides-track');
    if (!track) return;
    const slides = track.querySelectorAll('.hero-slide-card');
    if (!slides.length) return;
    const nextIndex = (currentHeroSlide + 1) % slides.length;
    setHeroSlide(nextIndex);
  }

  function initHeroCarousel() {
    const track = document.getElementById('hero-slides-track');
    if (!track) return;

    // Smooth auto change every 5 seconds (5000ms)
    if (heroAutoInterval) clearInterval(heroAutoInterval);
    heroAutoInterval = setInterval(nextHeroSlide, 5000);
  }

  // 11. SMOOTH SCROLL HELPER FOR DESKTOP NAV
  function scrollToSection(id) {
    if (state.activePage !== 'home') {
      showPage('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // 12. DOM READY INITIALIZATION
  document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    initAudio();
    initHeroCarousel();

    // Default to home page
    showPage('home');
  });

  // Global interface
  window.app = {
    showPage,
    showProduct,
    submitAppointment,
    checkUserStatus,
    downloadReportPdf,
    setHeroSlide,
    switchProductImage,
    scrollToSection
  };

})();
