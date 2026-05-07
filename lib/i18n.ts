export type Lang = "en" | "it"

export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "it", label: "Italiano", short: "IT" },
]

type Translations = {
  nav: {
    flavors: string
    seasonal: string
    story: string
    menu: string
    visit: string
    openToday: string
    openLabel: string
    closedLabel: string
  }
  hero: {
    eyebrow: string
    headlinePre: string
    headlineItalic1: string
    headlineMid: string
    headlineItalic2: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    badge: string
    scroll: string
    statFlavors: string
    statYears: string
    statStabilizers: string
    statFlavorsLabel: string
    statYearsLabel: string
    statStabilizersLabel: string
  }
  marquee: string[]
  flavors: {
    eyebrow: string
    headlinePre: string
    headlineItalic: string
    intro: string
    counter: string
    seeMenu: string
    items: {
      key: string
      name: string
      italian: string
      description: string
      category: string
      image: string
      price: string
    }[]
    addScoop: string
  }
  seasonal: {
    eyebrow: string
    titlePre: string
    titleItalic: string
    description: string
    availableLabel: string
    availableValue: string
    pairsLabel: string
    pairsValue: string
    scoopLabel: string
    scoopPrice: string
    pintLabel: string
    pintPrice: string
    cta: string
    badge: string
    limited: string
  }
  story: {
    eyebrow: string
    titlePre: string
    titleItalic: string
    titlePost: string
    paragraph1: string
    paragraph2: string
    pullQuote: string
    figcaption: string
    principles: { n: string; title: string; body: string }[]
  }
  menu: {
    eyebrow: string
    titlePre: string
    titleItalic: string
    note: string
    groups: {
      title: string
      caption: string
      items: { name: string; note?: string; price: string }[]
    }[]
  }
  testimonials: {
    eyebrow: string
    aside: string
    pressTitle: string
    reviews: { quote: string; author: string; detail: string }[]
  }
  visit: {
    eyebrow: string
    titlePre: string
    titleItalic: string
    description: string
    addressLabel: string
    addressValue: string
    phoneLabel: string
    phoneValue: string
    emailLabel: string
    emailValue: string
    openTodayLabel: string
    openTodayValue: string
    hoursTitle: string
    hours: { day: string; time: string }[]
    hoursNote: string
    cta1: string
    cta2: string
  }
  footer: {
    eyebrow: string
    titlePre: string
    titleItalic: string
    description: string
    placeholder: string
    subscribe: string
    spam: string
    tagline: string
    cols: { title: string; links: { label: string; href: string }[] }[]
    rights: string
    privacy: string
    accessibility: string
    farewell: string
  }
  ui: {
    languageSwitch: string
  }
}

export const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      flavors: "Flavors",
      seasonal: "Seasonal",
      story: "Our Story",
      menu: "Menu",
      visit: "Visit",
      openToday: "Open today · 12–10",
      openLabel: "Open",
      closedLabel: "Closed",
    },
    hero: {
      eyebrow: "Est. 2014 · Italy",
      headlinePre: "Dolce e Gelato.",
      headlineItalic1: "Sicilian-soul.",
      headlineMid: "Gelato made",
      headlineItalic2: "by hand.",
      description:
        "A tiny family-run gelateria churning small batches every morning with whole milk, single-origin pistachios from Bronte, and stone fruit from upstate orchards. No shortcuts. No air. Just gelato the way nonna meant it.",
      ctaPrimary: "Today's flavors",
      ctaSecondary: "Find the shop",
      badge: "Churned this morning",
      scroll: "Scroll",
      statFlavors: "24",
      statYears: "11yrs",
      statStabilizers: "00",
      statFlavorsLabel: "Daily flavors, rotating",
      statYearsLabel: "Of family recipes",
      statStabilizersLabel: "Stabilizers, ever",
    },
    marquee: [
      "Pistacchio di Bronte",
      "Stracciatella",
      "Limone di Sorrento",
      "Cioccolato fondente",
      "Fragola",
      "Nocciola Piemonte",
      "Fior di latte",
      "Caffè",
      "Pesca & basilico",
      "Ricotta & fichi",
    ],
    flavors: {
      eyebrow: "N° 01 — The Flavors",
      headlinePre: "Twenty-four spoons,",
      headlineItalic: "one obsession.",
      intro:
        "We rotate through over 80 recipes a year. Six classics live on the counter every day. The rest? They follow the seasons.",
      counter:
        "Plus 18 other flavors on the counter today, and three on the seasonal list.",
      seeMenu: "See the full menu",
      addScoop: "Add scoop",
      items: [
        {
          key: "pistachio",
          name: "Pistachio",
          italian: "Pistacchio di Bronte",
          description:
            "DOP pistachios from the slopes of Mount Etna, slow-roasted and stone-milled into a velvet paste.",
          category: "Gelato",
          image: "/images/flavor-pistachio.jpg",
          price: "$6.50",
        },
        {
          key: "fragola",
          name: "Strawberry",
          italian: "Fragola di campo",
          description:
            "Sun-ripened strawberries from Red Jacket Orchards, hand-mashed with a whisper of lemon.",
          category: "Sorbetto",
          image: "/images/flavor-fragola.jpg",
          price: "$6.00",
        },
        {
          key: "cioccolato",
          name: "Dark Chocolate",
          italian: "Cioccolato fondente",
          description:
            "Single-origin 70% Ecuadorian cacao, churned dense and almost fudgy. Nothing else, ever.",
          category: "Gelato",
          image: "/images/flavor-cioccolato.jpg",
          price: "$6.50",
        },
        {
          key: "limone",
          name: "Sorrento Lemon",
          italian: "Limone di Sorrento",
          description:
            "Bright, almost effervescent — the Amalfi coast distilled into a spoon. Naturally vegan.",
          category: "Vegan",
          image: "/images/flavor-limone.jpg",
          price: "$6.00",
        },
        {
          key: "nocciola",
          name: "Hazelnut",
          italian: "Nocciola Piemonte",
          description:
            "IGP Piedmont hazelnuts, twice-roasted in copper pans for that classic, deep praline edge.",
          category: "Gelato",
          image: "/images/flavor-nocciola.jpg",
          price: "$6.50",
        },
        {
          key: "stracciatella",
          name: "Stracciatella",
          italian: "Stracciatella",
          description:
            "Our fior di latte base laced with cracked shards of dark chocolate, poured in by hand.",
          category: "Gelato",
          image: "/images/flavor-stracciatella.jpg",
          price: "$6.50",
        },
      ],
    },
    seasonal: {
      eyebrow: "N° 02 — This week's special",
      titlePre: "Black Mission fig",
      titleItalic: "& ricotta-honey.",
      description:
        "Late-summer figs from Frecon Farms, folded into a base of fresh-strained sheep's milk ricotta and Brooklyn wildflower honey. Soft, faintly floral, a little jammy at the edges.",
      availableLabel: "Available",
      availableValue: "While figs last",
      pairsLabel: "Pairs with",
      pairsValue: "Espresso · Sea salt",
      scoopLabel: "Single scoop",
      scoopPrice: "$7.00",
      pintLabel: "Pint to go",
      pintPrice: "$14.00",
      cta: "Reserve a pint",
      badge: "On the counter — through Sept 21",
      limited: "limited",
    },
    story: {
      eyebrow: "N° 03 — Our Story",
      titlePre: "From a kitchen in",
      titleItalic: "Catania",
      titlePost: "to a corner shop in Brooklyn.",
      paragraph1:
        "Lucia learned to make gelato at her grandmother's bar in Sicily, where every morning began with a copper pot and the same six ingredients. She moved to New York in 2011, carried the recipes in a small notebook, and opened the shop three years later.",
      paragraph2:
        "A decade on, the notebook is fuller. The recipes are stricter. The gelato is the same.",
      pullQuote:
        "Make less. Make it slowly. Use the best thing you can put your hands on.",
      figcaption: "Lucia, behind the counter on a Tuesday morning.",
      principles: [
        {
          n: "01",
          title: "Whole, raw milk",
          body:
            "Sourced weekly from a single Hudson Valley dairy. Never powdered, never homogenized.",
        },
        {
          n: "02",
          title: "No air, no shortcuts",
          body:
            "Real gelato runs at 25% overrun. Ours runs lower. Denser, slower-melting, more flavor per spoon.",
        },
        {
          n: "03",
          title: "Ingredients first",
          body:
            "If we can't get it whole, we don't make it. No pastes, no syrups, no flavorings.",
        },
      ],
    },
    menu: {
      eyebrow: "N° 04 — The Menu",
      titlePre: "Short list,",
      titleItalic: "long memory.",
      note: "Prices in USD. Cash and card both fine. Tip jar feeds the dairy.",
      groups: [
        {
          title: "By the scoop",
          caption: "Served in cup or house-made waffle cone",
          items: [
            { name: "Single scoop", note: "Choose any one flavor", price: "$6.00" },
            { name: "Double scoop", note: "Two flavors, side by side", price: "$8.50" },
            { name: "Triple", note: "For the brave", price: "$10.50" },
            { name: "Affogato", note: "Fior di latte, hot espresso poured table-side", price: "$8.00" },
          ],
        },
        {
          title: "Pints to take home",
          caption: "Hand-packed, ready in 5",
          items: [
            { name: "Single pint", note: "Any flavor on the counter", price: "$13.00" },
            { name: "Pint flight (3)", note: "Choose three, save four", price: "$36.00" },
            { name: "Seasonal pint", note: "This week — fig & ricotta-honey", price: "$14.00" },
            { name: "Cake by the half kilo", note: "48hr notice", price: "from $48" },
          ],
        },
        {
          title: "From the bar",
          caption: "Espresso program by Parlor Coffee",
          items: [
            { name: "Espresso", price: "$3.50" },
            { name: "Cappuccino", note: "Until 11am, like in Italy", price: "$4.50" },
            { name: "Granita di caffè", note: "Sicilian-style, with cream", price: "$5.50" },
            { name: "Acqua frizzante", price: "$3.00" },
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: "N° 05 — Said about us",
      aside: "Three of about six hundred.",
      pressTitle: "As featured in",
      reviews: [
        {
          quote:
            "The pistachio is the best in the city, full stop. Dense, savory, unmistakably Sicilian — I drove from Queens for it twice last week.",
          author: "The New York Times",
          detail: "Critic's Notebook, 2024",
        },
        {
          quote:
            "Lucia's stracciatella ruined every other gelato for me. There's a quietness to her flavors — nothing screams, everything sings.",
          author: "Eater NY",
          detail: "Best Ice Cream in NYC",
        },
        {
          quote:
            "We came in for one scoop and left with a pint, two cones, and a reservation for next Saturday. The shop is small, the line is happy.",
          author: "Mira K.",
          detail: "Park Slope, regular",
        },
      ],
    },
    visit: {
      eyebrow: "N° 06 — Visit",
      titlePre: "Find us on",
      titleItalic: "Vanderbilt.",
      description:
        "A green awning, a tiny bell, and a marble counter that's usually three deep on a Saturday. The line moves quickly, we promise.",
      addressLabel: "Address",
      addressValue: "482 Vanderbilt Ave\nBrooklyn, NY 11238",
      phoneLabel: "Phone",
      phoneValue: "(718) 555-0182",
      emailLabel: "Email",
      emailValue: "ciao@gelaterialucia.com",
      openTodayLabel: "Open today",
      openTodayValue: "12:00 – 22:00",
      hoursTitle: "Hours",
      hours: [
        { day: "Monday", time: "Closed" },
        { day: "Tuesday – Thursday", time: "12:00 – 22:00" },
        { day: "Friday", time: "12:00 – 23:00" },
        { day: "Saturday", time: "11:00 – 23:00" },
        { day: "Sunday", time: "11:00 – 21:00" },
      ],
      hoursNote:
        "Hours shift with the seasons — we add an extra hour on summer Fridays and close early in deep winter. Pints to-go are available all open hours.",
      cta1: "Get directions",
      cta2: "Call the shop",
    },
    footer: {
      eyebrow: "The list",
      titlePre: "New flavors, every Friday",
      titleItalic: "in your inbox.",
      description:
        "Six hundred or so people read it. We send one short email a week, with what's on the counter and what's coming next.",
      placeholder: "you@email.com",
      subscribe: "Subscribe",
      spam: "No spam. Unsubscribe with one click.",
      tagline:
        "Small-batch Italian gelato, hand-churned every morning at 482 Vanderbilt Avenue, Brooklyn.",
      cols: [
        {
          title: "Shop",
          links: [
            { label: "Today's flavors", href: "#flavors" },
            { label: "Menu", href: "#menu" },
            { label: "Seasonal", href: "#seasonal" },
            { label: "Pints & cakes", href: "#" },
          ],
        },
        {
          title: "Visit",
          links: [
            { label: "Hours", href: "#visit" },
            { label: "Directions", href: "#visit" },
            { label: "Catering", href: "#visit" },
            { label: "Press", href: "#visit" },
          ],
        },
        {
          title: "Follow",
          links: [
            { label: "Instagram", href: "https://instagram.com" },
            { label: "TikTok", href: "#" },
            { label: "Substack", href: "#" },
            { label: "Email us", href: "mailto:ciao@gelaterialucia.com" },
          ],
        },
      ],
      rights: "© {year} Gelateria Lucia. Made by hand in Brooklyn.",
      privacy: "Privacy",
      accessibility: "Accessibility",
      farewell: "Buona giornata.",
    },
    ui: {
      languageSwitch: "Switch language",
    },
  },
  it: {
    nav: {
      flavors: "Gusti",
      seasonal: "Stagionali",
      story: "La nostra storia",
      menu: "Menù",
      visit: "Vieni a trovarci",
      openToday: "Aperti oggi · 12–22",
      openLabel: "Aperto",
      closedLabel: "Chiuso",
    },
    hero: {
      eyebrow: "Dal 2014 · Italy",
      edition: "N° 04 — Edizione di primavera",
      headlinePre: "Dolce e Gelato.",
      headlineItalic1: "Anima siciliana.",
      headlineMid: "Gelato fatto",
      headlineItalic2: "a mano.",
      description:
        "Una piccola gelateria a conduzione familiare che manteca piccole partite ogni mattina con latte intero, pistacchi monorigine di Bronte e frutta di stagione dei contadini dell’Hudson Valley. Niente scorciatoie. Niente aria. Solo gelato come lo faceva la nonna.",
      ctaPrimary: "I gusti di oggi",
      ctaSecondary: "Trova la gelateria",
      badge: "Mantecato stamattina",
      scroll: "Scorri",
      statFlavors: "24",
      statYears: "11anni",
      statStabilizers: "00",
      statFlavorsLabel: "Gusti del giorno, a rotazione",
      statYearsLabel: "Di ricette di famiglia",
      statStabilizersLabel: "Stabilizzanti, mai",
    },
    marquee: [
      "Pistacchio di Bronte",
      "Stracciatella",
      "Limone di Sorrento",
      "Cioccolato fondente",
      "Fragola",
      "Nocciola Piemonte",
      "Fior di latte",
      "Caffè",
      "Pesca & basilico",
      "Ricotta & fichi",
    ],
    flavors: {
      eyebrow: "N° 01 — I gusti",
      headlinePre: "Ventiquattro cucchiai,",
      headlineItalic: "una sola ossessione.",
      intro:
        "Ruotiamo oltre 80 ricette all’anno. Sei classici vivono in vetrina ogni giorno. Gli altri? Seguono le stagioni.",
      counter:
        "Più altri 18 gusti oggi in vetrina, e tre nella lista stagionale.",
      seeMenu: "Vedi tutto il menù",
      addScoop: "Aggiungi pallina",
      items: [
        {
          key: "pistachio",
          name: "Pistacchio",
          italian: "Pistacchio di Bronte",
          description:
            "Pistacchi DOP dalle pendici dell’Etna, tostati lentamente e macinati a pietra fino a una pasta di velluto.",
          category: "Gelato",
          image: "/images/flavor-pistachio.jpg",
          price: "€5,80",
        },
        {
          key: "fragola",
          name: "Fragola",
          italian: "Fragola di campo",
          description:
            "Fragole maturate al sole di Red Jacket Orchards, schiacciate a mano con un soffio di limone.",
          category: "Sorbetto",
          image: "/images/flavor-fragola.jpg",
          price: "€5,40",
        },
        {
          key: "cioccolato",
          name: "Cioccolato fondente",
          italian: "Cioccolato fondente",
          description:
            "Cacao monorigine 70% dell’Ecuador, mantecato denso, quasi fudge. Nient’altro, mai.",
          category: "Gelato",
          image: "/images/flavor-cioccolato.jpg",
          price: "€5,80",
        },
        {
          key: "limone",
          name: "Limone di Sorrento",
          italian: "Limone di Sorrento",
          description:
            "Brillante, quasi effervescente — la costiera amalfitana in un cucchiaio. Naturalmente vegano.",
          category: "Vegano",
          image: "/images/flavor-limone.jpg",
          price: "€5,40",
        },
        {
          key: "nocciola",
          name: "Nocciola",
          italian: "Nocciola Piemonte",
          description:
            "Nocciole IGP del Piemonte, tostate due volte in pentola di rame per quel classico tono profondo di pralina.",
          category: "Gelato",
          image: "/images/flavor-nocciola.jpg",
          price: "€5,80",
        },
        {
          key: "stracciatella",
          name: "Stracciatella",
          italian: "Stracciatella",
          description:
            "La nostra base di fior di latte attraversata da schegge di cioccolato fondente, versate a mano.",
          category: "Gelato",
          image: "/images/flavor-stracciatella.jpg",
          price: "€5,80",
        },
      ],
    },
    seasonal: {
      eyebrow: "N° 02 — Lo speciale della settimana",
      titlePre: "Fico Black Mission",
      titleItalic: "& ricotta al miele.",
      description:
        "Fichi di fine estate di Frecon Farms, mescolati a una base di ricotta di pecora fresca e miele millefiori di Brooklyn. Morbido, leggermente floreale, un po’ marmellatoso ai bordi.",
      availableLabel: "Disponibile",
      availableValue: "Finché ci sono fichi",
      pairsLabel: "Si abbina con",
      pairsValue: "Espresso · Sale marino",
      scoopLabel: "Pallina singola",
      scoopPrice: "€6,30",
      pintLabel: "Vaschetta da asporto",
      pintPrice: "€12,50",
      cta: "Prenota una vaschetta",
      badge: "In vetrina — fino al 21 settembre",
      limited: "limitato",
    },
    story: {
      eyebrow: "N° 03 — La nostra storia",
      titlePre: "Da una cucina di",
      titleItalic: "Catania",
      titlePost: "a una bottega d’angolo a Brooklyn.",
      paragraph1:
        "Lucia ha imparato a fare il gelato nel bar della nonna in Sicilia, dove ogni mattina iniziava con una pentola di rame e gli stessi sei ingredienti. È arrivata a New York nel 2011, con le ricette in un piccolo quaderno, e tre anni dopo ha aperto la gelateria.",
      paragraph2:
        "Dieci anni dopo, il quaderno è più pieno. Le ricette più rigorose. Il gelato è lo stesso.",
      pullQuote:
        "Fanne meno. Fallo lentamente. Usa la cosa migliore che ti capita tra le mani.",
      figcaption: "Lucia, dietro al banco un martedì mattina.",
      principles: [
        {
          n: "01",
          title: "Latte intero, crudo",
          body:
            "Da una sola cascina dell’Hudson Valley, ogni settimana. Mai in polvere, mai omogeneizzato.",
        },
        {
          n: "02",
          title: "Niente aria, niente scorciatoie",
          body:
            "Il vero gelato ha il 25% di overrun. Il nostro ne ha meno. Più denso, più lento a sciogliersi, più sapore per cucchiaio.",
        },
        {
          n: "03",
          title: "Prima gli ingredienti",
          body:
            "Se non lo troviamo intero, non lo facciamo. Niente paste, niente sciroppi, niente aromi.",
        },
      ],
    },
    menu: {
      eyebrow: "N° 04 — Il menù",
      titlePre: "Lista breve,",
      titleItalic: "memoria lunga.",
      note: "Prezzi in EUR. Contanti e carta vanno bene. Le mance sostengono la cascina.",
      groups: [
        {
          title: "Al cucchiaio",
          caption: "In coppetta o cono di cialda fatto in casa",
          items: [
            { name: "Pallina singola", note: "Scegli un gusto", price: "€5,40" },
            { name: "Pallina doppia", note: "Due gusti, fianco a fianco", price: "€7,60" },
            { name: "Triplo", note: "Per i coraggiosi", price: "€9,40" },
            { name: "Affogato", note: "Fior di latte, espresso caldo al tavolo", price: "€7,20" },
          ],
        },
        {
          title: "Vaschette da asporto",
          caption: "Confezionate a mano, pronte in 5 minuti",
          items: [
            { name: "Vaschetta singola", note: "Qualsiasi gusto in vetrina", price: "€11,70" },
            { name: "Trio di vaschette", note: "Scegli tre, paghi quattro meno", price: "€32,00" },
            { name: "Vaschetta stagionale", note: "Questa settimana — fico e ricotta al miele", price: "€12,50" },
            { name: "Torta al mezzo chilo", note: "Con 48 ore di preavviso", price: "da €43" },
          ],
        },
        {
          title: "Dal banco bar",
          caption: "Programma espresso di Parlor Coffee",
          items: [
            { name: "Espresso", price: "€3,20" },
            { name: "Cappuccino", note: "Fino alle 11, all’italiana", price: "€4,00" },
            { name: "Granita di caffè", note: "Alla siciliana, con panna", price: "€4,90" },
            { name: "Acqua frizzante", price: "€2,80" },
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: "N° 05 — Hanno detto di noi",
      aside: "Tre di circa seicento.",
      pressTitle: "Hanno scritto di noi",
      reviews: [
        {
          quote:
            "Il pistacchio è il migliore della città, punto. Denso, sapido, inconfondibilmente siciliano — la settimana scorsa sono venuto due volte dal Queens.",
          author: "The New York Times",
          detail: "Critic's Notebook, 2024",
        },
        {
          quote:
            "La stracciatella di Lucia mi ha rovinato ogni altro gelato. C’è una quiete nei suoi gusti — niente urla, tutto canta.",
          author: "Eater NY",
          detail: "I migliori gelati di NYC",
        },
        {
          quote:
            "Siamo entrati per una pallina e usciti con una vaschetta, due coni e una prenotazione per sabato. La bottega è piccola, la fila è felice.",
          author: "Mira K.",
          detail: "Park Slope, cliente abituale",
        },
      ],
    },
    visit: {
      eyebrow: "N° 06 — Vieni a trovarci",
      titlePre: "Ci trovi su",
      titleItalic: "Vanderbilt.",
      description:
        "Una tenda verde, un piccolo campanello e un banco di marmo che il sabato è di solito affollato di tre file. La fila scorre veloce, promesso.",
      addressLabel: "Indirizzo",
      addressValue: "482 Vanderbilt Ave\nBrooklyn, NY 11238",
      phoneLabel: "Telefono",
      phoneValue: "(718) 555-0182",
      emailLabel: "Email",
      emailValue: "ciao@gelaterialucia.com",
      openTodayLabel: "Aperti oggi",
      openTodayValue: "12:00 – 22:00",
      hoursTitle: "Orari",
      hours: [
        { day: "Lunedì", time: "Chiuso" },
        { day: "Martedì – Giovedì", time: "12:00 – 22:00" },
        { day: "Venerdì", time: "12:00 – 23:00" },
        { day: "Sabato", time: "11:00 – 23:00" },
        { day: "Domenica", time: "11:00 – 21:00" },
      ],
      hoursNote:
        "Gli orari cambiano con le stagioni — un’ora in più nei venerdì d’estate, chiusura anticipata in pieno inverno. Vaschette da asporto disponibili in tutti gli orari di apertura.",
      cta1: "Indicazioni",
      cta2: "Chiama la gelateria",
    },
    footer: {
      eyebrow: "La newsletter",
      titlePre: "Nuovi gusti, ogni venerdì",
      titleItalic: "nella tua inbox.",
      description:
        "La leggono circa seicento persone. Mandiamo una mail breve a settimana, con quello che è in vetrina e quello che sta arrivando.",
      placeholder: "tu@email.com",
      subscribe: "Iscriviti",
      spam: "Niente spam. Disiscrizione con un clic.",
      tagline:
        "Gelato italiano in piccole partite, mantecato a mano ogni mattina al 482 Vanderbilt Avenue, Brooklyn.",
      cols: [
        {
          title: "Bottega",
          links: [
            { label: "Gusti di oggi", href: "#flavors" },
            { label: "Menù", href: "#menu" },
            { label: "Stagionali", href: "#seasonal" },
            { label: "Vaschette & torte", href: "#" },
          ],
        },
        {
          title: "Vieni",
          links: [
            { label: "Orari", href: "#visit" },
            { label: "Indicazioni", href: "#visit" },
            { label: "Catering", href: "#visit" },
            { label: "Press", href: "#visit" },
          ],
        },
        {
          title: "Seguici",
          links: [
            { label: "Instagram", href: "https://instagram.com" },
            { label: "TikTok", href: "#" },
            { label: "Substack", href: "#" },
            { label: "Scrivici", href: "mailto:ciao@gelaterialucia.com" },
          ],
        },
      ],
      rights: "© {year} Gelateria Lucia. Fatto a mano a Brooklyn.",
      privacy: "Privacy",
      accessibility: "Accessibilità",
      farewell: "Buona giornata.",
    },
    ui: {
      languageSwitch: "Cambia lingua",
    },
  },
}
