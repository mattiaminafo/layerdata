export const it = {
  // Header
  header: {
    logo: "LayerData",
    bookCall: "Prenota una call",
    home: "Home",
    about: "About",
    services: "Servizi",
    communityLearn: "Community & Learn"
  },

  // Hero
  hero: {
    mission: "Un unico sistema per connettere dati, marketing e performance",
    description: "Layerdata è il motore operativo che integra dati, piattaforme e insight in un unico ecosistema. Dalla raccolta alla misurazione, fino all'attivazione.",
    discoverServices: "Contattaci per info",
    discoverCommunity: "Scopri come funziona"
  },

  // Footer
  footer: {
    tagline: "LayerData — The Martech Operating System",
    pivaMattia: "P.IVA Mattia Minafò: 01808660193",
    pivaEnrico: "P.IVA Enrico Chiolo: 01272510866",
    address: "Via [indirizzo], Milano",
    email: "info@layerdata.eu",
    links: ["Terms of Service", "Privacy Policy", "Cookie Policy"]
  },

  // Events Modal
  eventsModal: {
    title: "Eventi per aziende",
    content: "Sei un'azienda e vorresti saperne di più sul mondo dati? Organizziamo una volta al mese qualche workshop gratuito, scrivici se vuoi essere aggiornato sui temi del workshop.",
    cta: "Scrivici →"
  },

  // Language selector
  language: {
    italian: "Italiano",
    english: "English"
  },

  // Products Page
  products: {
    title: "Prodotti Creati In-House by LayerData",
    subtitle: "Se vuoi acquistare uno di questi prodotti o un servizio personalizzato, contattaci via email e saremo felici di discutere le tue esigenze.",
    ctaButton: "Contattaci via Email",
    items: [
      {
        id: 1,
        name: "Custom Pixel Template",
        description: "Un template pixel di tracciamento personalizzato per Shopify avanzato. Include tutorial di configurazione del Pixel con scrpt inserito, comprende il contentiore Google tag manager già pronto con: GA4,Meta, Tiktok e Datat Tag per il server side qualora venga utilizzato Stape.",
        price: 1800,
        tags: ["Per Aziende", "Per Agenzie ADV", "Per Freelancers"]
      },
      {
        id: 2,
        name: "Multi-Client Dashboard",
        description: "Dashboard professionale per gestire i dati di più clienti in un'unica interfaccia. Visualizza metriche chiave, report e insights in tempo reale.",
        price: 3200,
        tags: ["Per Agenzie", "Per Freelancers"]
      },
      {
        id: 3,
        name: "NLP System Integration",
        description: "Sistema di Natural Language Processing per analisi dati e sentiment analysis. Estrai insights dai feedback clienti e dalle conversazioni.",
        price: 3500,
        tags: ["Per Aziende", "Per Agenzie"]
      },
      {
        id: 4,
        name: "Data Clinic",
        description: "Ottieni sempre risposte alle tue domande su dati e analytics. L'abbonamento ti dà accesso a consulenze illimitate, risorse pratiche e una community di esperti.",
        price: 350,
        tags: ["Per Aziende", "Per Agenzie"]
      },
      {
        id: 5,
        name: "Custom Pixel Implementation",
        description: "Per chi non ha tempo di implementare tramite il nostro template ma necessita di mani esperte sul progetto, inclusi consent mode, script pixel personalizzati, matching del catalogo, server side e altro ancora.",
        price: 3000,
        tags: ["Per Aziende", "Per Agenzie ADV", "Per Freelancers"]
      }
    ]
  },

  // What Is Layerdata - New Product Positioning
  whatIsLayerdata: {
    title: "Il sistema operativo dei tuoi dati",
    subtitle: "Non è un'agenzia. Non è una dashboard.",
    description: "È un layer tecnologico che si inserisce tra i tuoi strumenti e il tuo business, connettendo ogni dato per migliorare decisioni e risultati.",
    features: [
      "Unificare dati di analytics, CRM e advertising",
      "Tracciare ogni evento in modo coerente", 
      "Analizzare performance in tempo reale",
      "Attivare i dati verso le piattaforme media"
    ],
    tagline: "Un unico ambiente per misurare, capire e agire."
  },

  // How It Works - Modular System
  howItWorks: {
    title: "Dati integrati. Processi più intelligenti.",
    subtitle: "Layerdata è costruito su un'architettura modulare che si adatta al tuo stack esistente.",
    modules: [
      {
        icon: "🧩",
        name: "Collect",
        function: "Raccoglie e standardizza dati da siti, app e piattaforme adv",
        output: "Eventi e parametri puliti"
      },
      {
        icon: "🔗",
        name: "Connect", 
        function: "Integra CRM, GA4, BigQuery e pixel media in un unico schema",
        output: "Database unificato"
      },
      {
        icon: "⚙️",
        name: "Process",
        function: "Applica regole di business, filtri e validazioni automatiche",
        output: "Dati pronti per l'uso"
      },
      {
        icon: "📊",
        name: "Activate",
        function: "Invia insight e audience verso Ads, Meta, Google o CRM",
        output: "Attivazione immediata"
      },
      {
        icon: "🔁",
        name: "Monitor",
        function: "Dashboard e alert per analizzare e migliorare performance",
        output: "Ottimizzazione continua"
      }
    ],
    tagline: "Layerdata diventa la spina dorsale del tuo marketing digitale."
  },

  // Target Audience
  targetAudience: {
    title: "Un sistema, diversi casi d'uso",
    audiences: [
      {
        target: "Per aziende",
        description: "che vogliono avere una visione unica e reale delle performance"
      },
      {
        target: "Per agenzie", 
        description: "che vogliono offrire dati affidabili e report automatizzati ai clienti"
      },
      {
        target: "Per team media",
        description: "che vogliono eliminare silos e lavorare su insight unificati"
      }
    ],
    tagline: "Layerdata non sostituisce i tuoi strumenti: li connette e li potenzia.",
    cta: "Integra Layerdata nel tuo stack"
  },

  // Technical Architecture
  technicalArchitecture: {
    title: "Il cuore tecnologico",
    subtitle: "Layerdata si basa su componenti solidi e aperti:",
    components: [
      "Google Tag Manager / Server Side per la raccolta",
      "BigQuery per la centralizzazione", 
      "APIs e connettori custom per la sincronizzazione tra piattaforme",
      "Looker Studio / Power BI per la visualizzazione",
      "Alert e automazioni AI-driven per l'ottimizzazione continua"
    ],
    features: [
      "🔒 Conforme a GDPR e Consent Mode 2.0",
      "🧠 Scalabile su qualsiasi stack cloud", 
      "⚙️ Personalizzabile a seconda del flusso dati aziendale"
    ]
  },

  // Before After Comparison
  beforeAfter: {
    title: "Cosa cambia con Layerdata",
    before: {
      title: "Prima",
      items: [
        "Dati sparsi tra strumenti",
        "Insight ritardati o incompleti",
        "Setup manuale e disordinato", 
        "Performance basate su supposizioni"
      ]
    },
    after: {
      title: "Dopo con Layerdata",
      items: [
        "Dati centralizzati e puliti",
        "Insight in tempo reale",
        "Setup standardizzato e tracciabile",
        "Performance basate su dati verificati"
      ]
    },
    tagline: "Layerdata trasforma il caos informativo in vantaggio competitivo."
  },

  // Results Section
  results: {
    title: "Cosa ottieni integrando Layerdata",
    benefits: [
      "Riduzione del 40% dei tempi di analisi",
      "Dati affidabili e coerenti su tutti i canali",
      "Dashboard uniche per performance e ROI", 
      "Attivazioni media più precise e scalabili"
    ],
    tagline: "Più controllo, meno dispersione, più risultati."
  },

  // Integration Section
  integration: {
    title: "Plug & Play. Nessuna migrazione complessa.",
    subtitle: "Layerdata si integra con:",
    categories: [
      {
        title: "Advertising",
        tools: ["Google Ads", "Meta Ads", "TikTok Ads"]
      },
      {
        title: "E-commerce & CMS", 
        tools: ["Shopify", "Wordpress", "Custom CMS"]
      },
      {
        title: "CRM & Marketing",
        tools: ["HubSpot", "Salesforce", "ActiveCampaign"]
      },
      {
        title: "Data Warehouse",
        tools: ["BigQuery", "Postgres", "Snowflake"]
      }
    ],
    cta: "Richiedi un setup gratuito"
  },

  // About Page - How it Works
  about: {
    hero: {
      title: "How it Works — Inside Layerdata",
      subtitle: "The invisible layer that keeps everything connected.",
      description: "Every company today collects data. Few manage to make it work together. Layerdata was created to solve that exact problem — transforming scattered marketing systems into a single operational flow where data moves, learns, and acts.",
      tagline: "We don't replace your stack. We make it intelligent."
    },
    
    philosophy: {
      title: "A different way to think about marketing data",
      subtitle: "Traditional analytics gives you numbers. Layerdata gives you systems.",
      description: "Instead of one dashboard here and one spreadsheet there, we design a continuous flow — from event collection to campaign activation — where every insight becomes a direct action.",
      quote: "From analysis to execution, without friction.",
      benefits: [
        "Less time spent debugging, reconciling, or waiting for reports",
        "More time optimizing campaigns that actually perform"
      ]
    },
    
    architecture: {
      title: "Under the hood",
      subtitle: "Layerdata works as a central nervous system for your marketing operations.",
      steps: [
        {
          name: "Capture",
          description: "Every event, from website visits to CRM updates, is tracked and cleaned."
        },
        {
          name: "Connect", 
          description: "The data is unified under a common logic, merging analytics, CRM, and ads."
        },
        {
          name: "Compute",
          description: "Business rules and validations transform information into usable insights."
        },
        {
          name: "Act",
          description: "Segments and signals are sent back to ad platforms, triggering smarter automations."
        },
        {
          name: "Monitor",
          description: "AI-based alerts and dashboards keep performance under control in real time."
        }
      ],
      tagline: "Each step happens automatically — no manual exports, no broken integrations."
    },
    
    integration: {
      title: "Plug & Play Integration",
      subtitle: "Layerdata connects the tools you already use — no migration required.",
      description: "We build the missing layer between analytics, CRM, e-commerce, and advertising platforms, so they finally work as a single system.",
      categories: [
        {
          title: "Advertising",
          tools: ["Google Ads", "Meta Ads", "TikTok Ads"]
        },
        {
          title: "E-commerce & CMS",
          tools: ["Shopify", "Wordpress", "Custom CMS"]
        },
        {
          title: "CRM & Marketing Automation",
          tools: ["HubSpot", "Salesforce", "ActiveCampaign"]
        },
        {
          title: "Data Warehouse",
          tools: ["BigQuery", "Postgres", "Snowflake"]
        }
      ],
      quote: "Our integrations are not just connectors — they are designed to create logical consistency across every platform.",
      example: "When a conversion happens in Shopify, it's visible in GA4, validated in BigQuery, and immediately usable in Meta Ads. That's what we call data coherence at scale."
    },
    
    impact: {
      title: "What this means for your team",
      audiences: [
        {
          role: "For founders and marketing leaders",
          benefit: "clarity on what's driving growth, instantly."
        },
        {
          role: "For media specialists",
          benefit: "cleaner data and faster campaign iterations."
        },
        {
          role: "For agencies",
          benefit: "less time spent fixing, more time spent delivering."
        },
        {
          role: "For data teams",
          benefit: "a framework that scales without reinventing every pipeline."
        }
      ],
      tagline: "Layerdata becomes the engine room of your digital growth."
    },
    
    whyItWorks: {
      title: "Why it works better",
      description: "Because we designed it like software, not like consultancy. Each implementation follows a repeatable architecture — modular, transparent, and measurable.",
      explanation: "It connects with your stack (GA4, BigQuery, Meta, HubSpot, Shopify...) but adds a logic layer that makes every tool speak the same language.",
      tagline: "Think of it as an operating system where all your marketing tools plug in."
    },
    
    corePhilosophy: {
      title: "The philosophy behind Layerdata",
      subtitle: "We believe in operational intelligence — the ability to make fast, informed decisions because your system already knows how to measure itself.",
      principles: [
        "Clean collection, not just tracking",
        "Connected ecosystems, not isolated platforms", 
        "Smart activation, not vanity dashboards"
      ],
      quote: "We don't build reports. We build infrastructure that turns reports into real action."
    },
    
    security: {
      title: "Built for trust and scale",
      features: [
        "GDPR compliant by design",
        "Works with Consent Mode 2.0",
        "Flexible cloud architecture (Google, AWS, or hybrid)",
        "Full transparency and documentation on every integration"
      ],
      tagline: "No black boxes, no vendor lock-in. Just a solid, open system designed to last."
    },
    
    results: {
      title: "Results that matter",
      benefits: [
        "40% less time wasted in data analysis",
        "Cross-channel accuracy and traceability",
        "Faster optimizations and higher campaign ROI",
        "Teams aligned under one single view of truth"
      ],
      tagline: "Data-driven growth, made operational."
    },
    
    cta: {
      title: "Ready to see it in action?",
      description: "Layerdata isn't a concept — it's an operational backbone already powering marketing systems for companies like Boolean, L22, Utravel, Rougj, and OneDay Group.",
      action: "Book a session with our team and discover how to turn your marketing data into a living system.",
      button: "Contattaci per info"
    },
    
    pricing: {
      title: "Pricing",
      subtitle: "Simple, transparent pricing for the Martech Operating System",
      plan: {
        name: "Layerdata Operating System",
        price: "€2,000",
        period: "/mese",
        minimum: "minimo 3 mesi",
        description: "Accesso completo al sistema operativo Layerdata con tutti i moduli inclusi",
        features: [
          "Moduli Collect, Connect, Process, Activate, Monitor",
          "Integrazioni con tutti i tool principali",
          "Dashboard personalizzate e report automatizzati",
          "Supporto tecnico dedicato",
          "Formazione del team inclusa",
          "GDPR compliant e Consent Mode 2.0"
        ],
        cta: "Contattaci per info"
      }
    }
  },

  // What We Do - Legacy (keeping for backward compatibility)
  whatWeDo: {
    title: "COSA FACCIAMO",
    description: "Aiutiamo le aziende a progettare, costruire e attivare ecosistemi dati che migliorano performance e decisioni.",
    services: [
      {
        icon: "",
        title: "Strategy",
        subtitle: "Diamo direzione ai tuoi dati.",
        description: "Progettiamo strategie su misura per diventare realmente data-driven: dalla governance all'architettura, dal piano di misurazione al framework decisionale. Ti aiutiamo a creare una visione chiara e scalabile basata su dati affidabili.",
        cta: "Scopri la strategia →",
        href: "/it/servizi"
      },
      {
        icon: "",
        title: "Analytics & Intelligence",
        subtitle: "Dati che raccontano, misurano e guidano.",
        description: "Tracciamo comportamenti, analizziamo journey e costruiamo dashboard che trasformano numeri in insight. Ogni metrica è collegata a un obiettivo, ogni insight a un'azione concreta.",
        cta: "Scopri l'analisi →",
        href: "/it/servizi"
      },
      {
        icon: "",
        title: "Customer Data Activation",
        subtitle: "Connetti dati e persone.",
        description: "Unifichiamo le informazioni dei tuoi clienti in un unico modello per attivare esperienze personalizzate e misurabili. Ogni interazione diventa un'occasione per creare valore e fidelizzazione.",
        cta: "Scopri l'attivazione →",
        href: "/it/servizi"
      },
      {
        icon: "",
        title: "Acquisition & Optimization",
        subtitle: "Diamo struttura ai dati per campagne performanti.",
        description: "Il nostro compito è creare una solida infrastruttura dati che permetta alle tue campagne di performare al meglio. Ogni decisione è supportata da dati affidabili, ogni investimento è tracciabile e giustificato da metriche concrete.",
        cta: "Scopri la crescita →",
        href: "/it/servizi"
      },
      {
        icon: "",
        title: "Custom Products & Solutions",
        subtitle: "Prodotti specifici per le tue esigenze.",
        description: "Creiamo soluzioni personalizzate su richiesta: dashboard multi-cliente, sistemi di NLP, piattaforme di analytics custom e strumenti di automazione dedicati. Ogni prodotto è progettato per risolvere sfide specifiche del tuo business.",
        cta: "Scopri le soluzioni custom →",
        href: "/it/servizi"
      },
      {
        icon: "",
        title: "Data Science & Engineering",
        subtitle: "Infrastrutture e intelligenza che lavorano per te.",
        description: "Creiamo pipeline, modelli predittivi e architetture scalabili per garantire qualità, sicurezza e automazione del dato. Dal dato grezzo al machine learning, rendiamo i sistemi più intelligenti e le decisioni più rapide.",
        cta: "Scopri le soluzioni tech →",
        href: "/it/servizi"
      },
      {
        icon: "",
        title: "Training & Community",
        subtitle: "Non solo consulenti. Costruttori di competenze.",
        description: "Attraverso workshop e formazione, aiutiamo i team a diventare autonomi nell'uso dei dati e delle tecnologie. La nostra community unisce professionisti, idee e sperimentazione.",
        cta: "Unisciti alla Community →",
        href: "/it/servizi"
      }
    ]
  },

  // OurImpact
  ourImpact: {
    title: "Dati che guidano azioni",
    description: "Costruiamo un modello dati unificato che rende le informazioni affidabili, accessibili e attivabili. Customer data e comportamenti reali diventano la base per mostrare contenuti, messaggi e offerte pertinenti in ogni touchpoint."
  },

  // OurCommunity
  ourCommunity: {
    title: "Non siamo solo consulenti ma anche divulgatori, unisciti e contribuisci alla Community!"
  },

  // ContactForm
  contactForm: {
    title: "Porta Layerdata nella tua infrastruttura",
    subtitle: "Contattaci per info personalizzata per vedere come Layerdata può trasformare il tuo stack dati.",
    name: "Nome e Cognome*",
    email: "Email*",
    company: "Azienda*",
    role: "Ruolo*",
    request: "Esigenza*",
    message: "Messaggio",
    namePlaceholder: "Inserisci il tuo nome completo",
    emailPlaceholder: "Inserisci la tua email",
    companyPlaceholder: "Inserisci la tua azienda",
    rolePlaceholder: "La tua posizione",
    requestPlaceholder: "Descrivi il tuo obiettivo",
    messagePlaceholder: "Aggiungi dettagli utili",
    submit: "Contattaci per info",
    submitting: "Invio in corso...",
    success: "Richiesta inviata con successo! Ti contatteremo presto.",
    error: "Errore nell'invio. Riprova più tardi."
  },

  // OurExpertise
  ourExpertise: {
    button: "Cosa Facciamo",
    servicesTitle: "Services",
    servicesDescription: "Soluzioni modulari per monitorare, centralizzare e valorizzare i dati di marketing.",
    innovationTitle: "Community",
    innovationDescription: "Dall'idea alla realizzazione, sviluppiamo soluzioni tecnologiche su misura integrando marketing technology e sistemi avanzati per creare vantaggi competitivi concreti.",
    trainingTitle: "Workshops",
    trainingDescription: "Percorsi formativi e sessioni pratiche per team aziendali, pensati per trasferire competenze e facilitare l'adozione di processi e tecnologie data-driven."
  },

  // Skills
  skills: {
    button: "Le nostre specialità",
    skillsList: [
      "Data Scientist",
      "Web Analytics Specialist", 
      "Machine Learning Engineer",
      "Data Engineer",
      "AI Engineer",
      "Marketing Technology Specialist",
      "Data Governance Consultant",
      "Business Intelligence Analyst",
      "Database Administrator",
      "Data Visualization Engineer",
      "Generative AI Engineer",
      "Customer Data Platform (CDP) Architect",
      "Marketing Data Analyst",
      "Data Governance Engineer",
      "Cloud Data Solutions Architect"
    ]
  },

  // Clients
  clients: {
    title: "Ci hanno scelto per trasformare i dati in crescita."
  },

  // WhyLayerData
  whyLayerData: {
    title: "Allineiamo persone, dati e risultati",
    benefits: [
      "Un'unica verità dei dati – allineamento organizzativo reale.",
      "Accuratezza misurabile – controlli continui e standard condivisi.",
      "Compliance by design – gestione sicura e fluida dei consensi.",
      "Valore rapido – quick wins e rollout in ondate.",
      "Impatto tangibile – crescita di conversione, AOV, LTV e retention."
    ]
  },

  // AboutUs
  aboutUs: {
    title: "Architetti del modello dati",
    description: "LayerData nasce per mettere ordine e dare valore ai dati aziendali, creando un ciclo continuo di segmentazione → personalizzazione → analytics. Collaboriamo con brand che vogliono innovare, crescere e semplificare i processi.",
    foundersLabel: "I Founders",
    team: [
      {
        name: "Mattia Minafò",
        role: "Founder & Data Architect",
        description: "Esperto in data engineering e automazioni. Specializzato nella creazione di infrastrutture tecnicamente solide per e-commerce e SaaS. Appassionato di crescita aziendale guidata dai dati.",
        skills: ["Data Engineering", "Automazioni", "GA4", "GTM", "Python", "SQL","Conversion Optimization","Data Governance"]
      },
      {
        name: "Enrico Chiolo",
        role: "Founder & Analytics Lead",
        description: "Esperto in strumenti di analytics enterprise, con competenze in raccolta, integrazione e analisi dei dati digitali. Focus su attribuzione, data governance e insight strategici per guidare decisioni di business data-driven.",
        skills: ["Digital Analytics", "Data Governance", "Attribution Modeling", "Google Tag Manager", "Google Analytics 4", "Data Integration"]
      }
    ]
  },

  // ServiceHeader
  serviceHeader: {
    title: "Servizi che trasformano i dati in crescita.",
    subtitle: "Combiniamo strategia, tecnologia e analytics per aiutare le aziende a trasformare i dati in risultati di business misurabili. Dall'implementazione all'attivazione — e oltre.",
    button: "Scopri i Servizi"
  },

  // Services Sections
  services: {
    intro: {
      title: "Esperienza. Metodologia. Accelerazione.",
      description: "Guidiamo le organizzazioni in ogni fase del percorso dati: dall'impostazione di un'infrastruttura solida all'attivazione degli insights, fino all'empowerment dei team interni. Ogni servizio è progettato per aumentare il valore dell'audience, le performance e l'efficienza."
    },
    implementation: {
      title: "Implementation",
      subtitle: "Costruiamo le fondamenta giuste per una crescita scalabile.",
      description: "Ogni trasformazione inizia da un'architettura dati solida e KPI condivisi. Definiamo obiettivi chiari, workflow trasparenti e infrastrutture sostenibili — garantendo che ogni decisione sia basata su informazioni affidabili.",
      features: [
        "Discovery & Obiettivi: allineamento su obiettivi di business e KPI misurabili.",
        "Project Management Rigoroso: tempistiche chiare, comunicazione trasparente.",
        "Integrazione Tecnica: collaborazione con i team IT per sistemi sicuri e scalabili.",
        "Esperienza Consolidata: framework affinati attraverso decine di progetti di successo."
      ]
    },
    technicalAdvisory: {
      title: "Technical Advisory",
      subtitle: "Supporto tecnico dedicato, on demand.",
      description: "I nostri data engineer e specialisti Martech lavorano al fianco del tuo team per garantire continuità, compliance e qualità.",
      features: [
        "Audit & Assessment: rilevare incongruenze e validare la qualità dei dati.",
        "Framework Riutilizzabili: template pronti all'uso per tracking e governance.",
        "Connettori Custom: API e middleware in tempo reale per scambio dati fluido.",
        "Best Practice di Architettura: guida per progettare sistemi robusti e a prova di futuro."
      ]
    },
    audienceRevenue: {
      title: "Audience & Revenue Services",
      subtitle: "Aumentare il valore dell'audience e i ricavi a lungo termine.",
      description: "Colleghiamo i dati comportamentali con la strategia di marketing per attrarre, coinvolgere e fidelizzare gli utenti in modo più efficace.",
      features: [
        "Piani di Crescita Personalizzati: strategie basate su benchmark e metriche di performance.",
        "Engagement Mirato: inviare il messaggio giusto al segmento giusto al momento giusto.",
        "Framework Incrementale: trasformare macro-obiettivi in azioni misurabili.",
        "Benchmarking Continuo: scoprire nuove opportunità attraverso confronti di settore."
      ]
    },
    campaignOptimization: {
      title: "Campaign Optimization",
      subtitle: "Rendere le campagne più intelligenti — e più profittevoli.",
      description: "Combiniamo analytics, strategia media e automazione per massimizzare il ROAS e minimizzare gli sprechi.",
      features: [
        "Data-Driven Media Buying: decisioni guidate da segnali comportamentali reali.",
        "Efficienza di Spesa: migliore allocazione, CAC più basso.",
        "Boost del ROAS: strategie che migliorano sia i ricavi che i margini.",
        "Integrazione End-to-End: collegare le campagne con audience reali e dati concreti."
      ]
    },
    trainingEnablement: {
      title: "Training & Enablement",
      subtitle: "Empowering del tuo team per gestire il ciclo dati → azione.",
      description: "Il trasferimento di conoscenza è al centro di ogni progetto LayerData.",
      features: [
        "Programmi di Training Modulari: dalle basi all'analytics avanzata.",
        "Sessioni Pratiche: esercizi e test per applicazione immediata.",
        "Percorsi di Apprendimento Custom: di gruppo o individuali, remoti o in sede.",
        "Aggiornamenti Continui: contenuti in evoluzione e best practice di settore."
      ]
    },
    finalCta: {
      title: "Metti i tuoi dati al centro delle decisioni.",
      description: "Che tu voglia ottimizzare processi, personalizzare customer journey o scalare le performance delle campagne — ti aiutiamo ad accelerare con chiarezza e fiducia.",
      button: "Inizia il tuo progetto con LayerData →"
    }
  },

  // Process
  process: {
    title: "COME LAVORIAMO",
    subtitle: "Un processo strutturato che trasforma la complessità in chiarezza — e i dati in crescita.",
    steps: [
      "Strategia condivisa e KPI chiari – obiettivi misurabili per ogni team.",
      "Modello dati unificato – una singola fonte affidabile per decisioni rapide.",
      "Segmentazione attivabile – audience dinamiche basate su comportamento reale.",
      "Personalizzazione operativa – esperienze rilevanti in tempo reale.",
      "Misurazione e ottimizzazione continua – test, insight, crescita.",
      "Governance e compliance – dati sicuri, osservabili, conformi."
    ]
  },

  // Specialties
  specialties: {
    title: "LE NOSTRE SPECIALITÀ",
    skills: [
      "Data Scientists",
      "Web Analytics Specialist", 
      "Machine Learning Engineer",
      "Data Engineer",
      "AI Specialist",
      "Marketing Technology Expert",
      "Data Governance Consultant",
      "BI Analyst",
      "CDP Architect",
      "Cloud Data Architect",
      "NLP Engineer",
      "Custom Dashboard Developer",
      "Product Development Specialist"
    ]
  },

  // Packages
  packages: {
    title: "Il LayerData Growth Model",
    subtitle: "Dai 3 ai 5 mesi → La Tua Macchina per la Crescita.",
    bookCall: "Prenota una Call",
    discoverMore: "Scopri di Più",
    includes: "Comprende:",
    singlePackage: {
      name: "Pacchetto LayerData",
      price: " da € 1 500",
      period: "/mese",
      features: [
        "Tracciamento avanzato (GA4, Server-Side GTM, API Advertising)",
        "Modello dati unificato con compliance-by-design",
        "Dashboard centralizzate con KPI reali & metriche di revenue",
        "Segmentazione dinamica & esperienze personalizzate",
        "Ottimizzazione campagne per maggiore efficienza e ROAS",
        "Automazioni & insight azionabili in tempo quasi reale",
        "Supporto tecnico continuo & monitoraggio qualità dati",
        "Formazione team e trasferimento di competenze incluso"
      ],
      description: "Il Pacchetto LayerData è la soluzione completa per aziende che vogliono trasformare i propri dati in vantaggio competitivo. Include tutto il necessario per implementare il modello LayerData: tracking avanzato, centralizzazione dati, automazioni e formazione del team.",
      details: [
        { label: "Durata", value: "3-5 mesi" },
        { label: "Focus", value: "Modello LayerData completo" },
        { label: "Risultato", value: "Macchina per la crescita" },
        { label: "Ideale per", value: "Aziende che vogliono scalare con i dati" }
      ]
    }
  },

  // Tripwires
  tripwires: {
    title: "Il pacchetto non è ciò che fa per te? Ecco una serie di servizi singoli:",
    categories: ["Tutti", "Ecommerce Tracking", "Automazioni", "Database", "Formazione"],
    services: [
      {
        title: "Shopify Tracking",
        price: "€3000",
        period: "one shot",
        description: "Creiamo il tracciamento Shopify che funziona!",
        category: "Ecommerce Tracking"
      },
      {
        title: "Tracking Jumpstart",
        price: "€2000",
        period: "one shot",
        description: "Audit + tracciamento base GA4/Meta API + dashboard base",
        category: "Ecommerce Tracking"
      },
      {
        title: "CDP Pack",
        price: "€1500",
        period: "/mese",
        description: "Customer Data Platform completa",
        category: "Database"
      },
      {
        title: "Insight Pack",
        price: "€750",
        period: "/mese",
        description: "Report strategico e dashboard avanzata",
        category: "Ecommerce Tracking"
      },
      {
        title: "Training Pack",
        price: "€900",
        period: "/mese",
        description: "Formazione team + manuali operativi",
        category: "Formazione"
      },
      {
        title: "Automation Pack",
        price: "€900",
        period: "/mese",
        description: "Journey multicanale avanzato",
        category: "Automazioni"
      }
    ]
  },

  // CaseStudy
  caseStudy: {
    title: "Case Studies",
    discoverMore: "Scopri di più",
    close: "Chiudi",
    labels: {
      client: "Cliente",
      duration: "Durata",
      results: "Risultati", 
      technologies: "Tecnologie"
    },
    studies: [
      {
        title: "E-commerce Fashion",
        short: "Incremento conversioni tramite dashboard e automazioni. Abbiamo implementato una dashboard centralizzata e automazioni di marketing per un e-commerce fashion, portando a un aumento del 30% delle conversioni in 3 mesi.",
        long: "Abbiamo implementato una dashboard centralizzata e automazioni di marketing per un e-commerce fashion, portando a un aumento del 30% delle conversioni in 3 mesi. Integrazione con GA4, Meta API e automazioni email personalizzate.",
        client: "Fashion Brand",
        duration: "3 mesi",
        results: "+30% conversioni",
        technologies: ["GA4", "Meta API", "Automazioni"]
      },
      {
        title: "SaaS B2B",
        short: "Centralizzazione dati e insight per la crescita. Per una SaaS B2B abbiamo centralizzato i dati di vendita e prodotto, generando insight strategici che hanno guidato nuove campagne e ottimizzato il funnel di vendita.",
        long: "Per una SaaS B2B abbiamo centralizzato i dati di vendita e prodotto, generando insight strategici che hanno guidato nuove campagne e ottimizzato il funnel di vendita.",
        client: "SaaS Company",
        duration: "6 mesi",
        results: "Nuove campagne + ottimizzazione funnel",
        technologies: ["Data Warehouse", "Dashboard", "Automazioni"]
      },
      {
        title: "Marketplace Food",
        short: "Tracking avanzato e segmentazione utenti. Implementazione di tracking avanzato e segmentazione comportamentale per un marketplace food, migliorando la retention e la personalizzazione delle offerte.",
        long: "Implementazione di tracking avanzato e segmentazione comportamentale per un marketplace food, migliorando la retention e la personalizzazione delle offerte.",
        client: "Marketplace Food",
        duration: "4 mesi",
        results: "+20% retention",
        technologies: ["GA4", "Segmentazione", "Personalizzazione"]
      },
      {
        title: "E-commerce Cosmetica",
        short: "Setup completo tracciamento e migrazione dati. Abbiamo costruito l'intera infrastruttura di tracking da zero, recuperato lo storico ordini e migrato tutti i dati dal vecchio store alla nuova piattaforma.",
        long: "Per un e-commerce di cosmetica, abbiamo implementato un setup completo di tracking con GA4, GTM server-side e API advertising. Abbiamo recuperato e migrato l'intero database storico degli ordini dal sistema legacy alla nuova piattaforma, garantendo continuità dei dati e abilitando analytics avanzate fin dal primo giorno.",
        client: "Brand Cosmetico",
        duration: "5 mesi",
        results: "Migrazione dati completa + tracking avanzato",
        technologies: ["GA4", "GTM Server-side", "Migrazione Dati", "Integrazione API"]
      }
    ]
  }
};
