export interface TestRecommendation {
  id: string;
  name: string;
  fullName: string;
  category: string;
  purchaseLevel: string;
  ageRange: string;
  description: string;
  useCase: string;
  url: string;
  relevance: number; // 0-100
  tags: string[];
}

const testCatalog: Omit<TestRecommendation, "relevance">[] = [
  // ── FUNZIONI COGNITIVE ──
  {
    id: "wisc-v",
    name: "WISC-V",
    fullName: "Wechsler Intelligence Scale for Children - 5ª Edizione",
    category: "Funzioni Cognitive",
    purchaseLevel: "C",
    ageRange: "6–16 anni",
    description: "Gold standard internazionale per la misurazione delle capacità cognitive nei bambini.",
    useCase: "QI totale, ragionamento visuospaziale, memoria di lavoro, velocità di elaborazione. Essenziale nella diagnosi DSA, ADHD, disabilità intellettiva e gifted.",
    url: "https://www.giuntipsy.it/wisc-v-wechsler-intelligence-scale-for-children",
    tags: ["intelligenza", "qi", "bambino", "bambini", "cognitivo", "dsa", "adhd", "gifted", "apprendimento", "scuola", "memoria", "ragionamento"],
  },
  {
    id: "wais-iv",
    name: "WAIS-IV",
    fullName: "Wechsler Adult Intelligence Scale - 4ª Edizione",
    category: "Funzioni Cognitive",
    purchaseLevel: "C",
    ageRange: "16–90 anni",
    description: "Il test di intelligenza per adulti più utilizzato al mondo.",
    useCase: "QI totale e 4 indici (comprensione verbale, ragionamento percettivo, memoria, velocità). Indicato per diagnosi neuropsicologiche, peritali e cliniche nell'adulto.",
    url: "https://www.giuntipsy.it/wais-iv-wechsler-adult-intelligence-scale-fourth-edition",
    tags: ["intelligenza", "qi", "adulto", "adulti", "cognitivo", "neuropsicologia", "forense", "peritale", "memoria", "ragionamento"],
  },
  {
    id: "wppsi-iv",
    name: "WPPSI-IV",
    fullName: "Wechsler Preschool and Primary Scale of Intelligence - 4ª Ed.",
    category: "Funzioni Cognitive",
    purchaseLevel: "C",
    ageRange: "2:6–7:7 anni",
    description: "Valutazione dell'intelligenza nei bambini prescolari.",
    useCase: "QI in età prescolare, utile per identificare ritardi nello sviluppo, disabilità intellettiva precoce e bambini ad alto potenziale cognitivo.",
    url: "https://www.giuntipsy.it/wppsi-iv-wechsler-preschool-and-primary-scale-of-intelligence-fourth-edition",
    tags: ["intelligenza", "qi", "prescolare", "bambino piccolo", "sviluppo", "ritardo", "cognitivo"],
  },
  {
    id: "raven-2",
    name: "Matrici Progressive di Raven 2",
    fullName: "Raven's 2 - Test non verbale per abilità cognitiva generale",
    category: "Funzioni Cognitive",
    purchaseLevel: "C",
    ageRange: "4–69 anni",
    description: "Test non verbale per la valutazione dell'abilità cognitiva generale.",
    useCase: "Ragionamento astratto e fluido senza influenza linguistica. Ideale per soggetti con difficoltà linguistiche, stranieri, o come screening rapido del QI.",
    url: "https://www.giuntipsy.it/matrici-progressive-raven-2",
    tags: ["intelligenza", "qi", "non verbale", "ragionamento", "astratto", "culture-fair", "straniero", "linguaggio"],
  },
  {
    id: "leiter-3",
    name: "Leiter-3",
    fullName: "Leiter International Performance Scale - 3ª Edizione",
    category: "Funzioni Cognitive",
    purchaseLevel: "C",
    ageRange: "3–75+ anni",
    description: "Test completamente non verbale di QI e abilità cognitive.",
    useCase: "Valutazione non verbale ideale per persone con disturbi del linguaggio, persone autistiche, sordi, o con barriere linguistiche.",
    url: "https://www.giuntipsy.it/leiter-3-test-non-verbale-misura-qi-abilita-cognitive",
    tags: ["intelligenza", "qi", "non verbale", "autismo", "sordo", "linguaggio", "cognitivo"],
  },
  {
    id: "wms-iv",
    name: "WMS-IV",
    fullName: "Wechsler Memory Scale - 4ª Edizione",
    category: "Funzioni Cognitive",
    purchaseLevel: "C",
    ageRange: "16–90 anni",
    description: "Valutazione clinica completa della memoria negli adulti.",
    useCase: "Memoria visiva, uditiva, immediata e differita. Essenziale nella diagnosi di demenze, Alzheimer, amnesia, e valutazione neuropsicologica post-trauma.",
    url: "https://www.giuntipsy.it/wms-iv-wechsler-memory-scale-fourth-edition",
    tags: ["memoria", "adulto", "anziano", "demenza", "alzheimer", "neuropsicologia", "decadimento", "trauma"],
  },
  {
    id: "cas2",
    name: "CAS2",
    fullName: "Cognitive Assessment System - Second Edition",
    category: "Funzioni Cognitive",
    purchaseLevel: "C",
    ageRange: "5–18 anni",
    description: "Assessment cognitivo basato sulla teoria PASS.",
    useCase: "Pianificazione, Attenzione, Simultaneità, Successione. Utile per la diagnosi di ADHD e disturbi specifici dell'apprendimento con profilo cognitivo dettagliato.",
    url: "https://www.giuntipsy.it/cas2-test-assessment-cognitivo-bambini",
    tags: ["cognitivo", "attenzione", "pianificazione", "adhd", "dsa", "bambino", "apprendimento"],
  },
  {
    id: "cefi",
    name: "CEFI",
    fullName: "Comprehensive Executive Function Inventory",
    category: "Funzioni Cognitive",
    purchaseLevel: "C",
    ageRange: "5–18 anni",
    description: "Valutazione delle funzioni esecutive nei bambini e adolescenti.",
    useCase: "Pianificazione, organizzazione, flessibilità cognitiva, autoregolazione. Complemento ideale nella valutazione di ADHD e disturbi del comportamento.",
    url: "https://www.giuntipsy.it/cefi-test-funzioni-esecutive",
    tags: ["funzioni esecutive", "attenzione", "pianificazione", "adhd", "bambino", "adolescente", "autoregolazione", "comportamento"],
  },
  {
    id: "bayley-4",
    name: "Bayley-4",
    fullName: "Bayley Scales of Infant and Toddler Development - 4th Ed.",
    category: "Funzioni Cognitive",
    purchaseLevel: "B",
    ageRange: "1–42 mesi",
    description: "Valutazione dello sviluppo cognitivo, linguistico e motorio nei neonati e bambini piccoli.",
    useCase: "Screening neonatale e prima infanzia per ritardo dello sviluppo, prematurità, rischio neurologico.",
    url: "https://www.giuntipsy.it/bayley-4",
    tags: ["sviluppo", "neonato", "neonati", "infant", "bambino piccolo", "motorio", "cognitivo", "linguaggio", "prematurità", "ritardo"],
  },
  {
    id: "bcse",
    name: "BCSE",
    fullName: "Esame Breve dello Stato Cognitivo",
    category: "Funzioni Cognitive",
    purchaseLevel: "B",
    ageRange: "Adulti/Anziani",
    description: "Screening breve delle funzioni cognitive.",
    useCase: "Screening rapido per identificare decadimento cognitivo nell'anziano. Utile come prima valutazione prima di batterie più complete.",
    url: "https://www.giuntipsy.it/esame-breve-dello-stato-cognitivo-bcse",
    tags: ["screening", "cognitivo", "anziano", "demenza", "decadimento", "rapido", "breve"],
  },
  {
    id: "adas",
    name: "ADAS",
    fullName: "Alzheimer's Disease Assessment Scale",
    category: "Funzioni Cognitive",
    purchaseLevel: "C",
    ageRange: "Anziani",
    description: "Valutazione della gravità del deterioramento cognitivo nell'Alzheimer.",
    useCase: "Monitoraggio della progressione dell'Alzheimer e valutazione dell'efficacia dei trattamenti. Scala specifica per demenza di Alzheimer.",
    url: "https://www.giuntipsy.it/adas",
    tags: ["alzheimer", "demenza", "anziano", "decadimento", "cognitivo", "neuropsicologia", "deterioramento"],
  },
  {
    id: "bas3",
    name: "BAS3",
    fullName: "British Ability Scales 3",
    category: "Funzioni Cognitive",
    purchaseLevel: "C",
    ageRange: "3–17 anni",
    description: "Batteria di valutazione delle abilità cognitive nei bambini e adolescenti.",
    useCase: "Valutazione flessibile delle abilità cognitive con indici specifici. Alternativa alla WISC con profilo modulare.",
    url: "https://www.giuntipsy.it/bas3-british-ability-scale-3",
    tags: ["intelligenza", "cognitivo", "bambino", "adolescente", "abilità"],
  },

  // ── PERSONALITÀ ──
  {
    id: "mmpi-3",
    name: "MMPI-3",
    fullName: "Minnesota Multiphasic Personality Inventory - 3ª Edizione",
    category: "Personalità",
    purchaseLevel: "C",
    ageRange: "18+ anni",
    description: "Il test per la valutazione della personalità e dei disturbi psicopatologici.",
    useCase: "Assessment multiassiale della personalità: scale cliniche, RC, scale specifiche. Usato in clinica, forense, selezione di sicurezza.",
    url: "https://www.giuntipsy.it/mmpi-3-minnesota-multiphasic-personality-inventory",
    tags: ["personalità", "psicopatologia", "adulto", "forense", "clinico", "depressione", "ansia", "schizofrenia", "disturbo"],
  },
  {
    id: "mmpi-2",
    name: "MMPI-2",
    fullName: "Minnesota Multiphasic Personality Inventory - 2",
    category: "Personalità",
    purchaseLevel: "C",
    ageRange: "18+ anni",
    description: "Versione classica del MMPI per la valutazione della personalità e psicopatologia.",
    useCase: "567 item per un profilo completo della personalità. Ampia base normativa, utilizzato in contesto clinico, forense e peritale.",
    url: "https://www.giuntipsy.it/mmpi-2-minnesota-multiphasic-personality-inventory",
    tags: ["personalità", "psicopatologia", "adulto", "forense", "clinico", "peritale"],
  },
  {
    id: "mmpi-2-rf",
    name: "MMPI-2-RF",
    fullName: "Minnesota Multiphasic Personality Inventory-2 Restructured Form",
    category: "Personalità",
    purchaseLevel: "C",
    ageRange: "18+ anni",
    description: "Forma ristrutturata del MMPI-2, più breve e con scale rinnovate.",
    useCase: "338 item con scale ristrutturate. Più efficiente del MMPI-2 mantenendo la robustezza clinica. Utile in contesti con tempo limitato.",
    url: "https://www.giuntipsy.it/mmpi-2-rf-minnesota-multiphasic-personality-inventory-2-restructured-form",
    tags: ["personalità", "psicopatologia", "adulto", "forense", "clinico", "breve"],
  },
  {
    id: "mmpi-a",
    name: "MMPI-A",
    fullName: "Minnesota Multiphasic Personality Inventory - Adolescenti",
    category: "Personalità",
    purchaseLevel: "C",
    ageRange: "14–18 anni",
    description: "Versione del MMPI specificamente normata per adolescenti.",
    useCase: "Valutazione della personalità e dei disturbi psicopatologici negli adolescenti. Scale cliniche adattate all'età evolutiva.",
    url: "https://www.giuntipsy.it/mmpir-a",
    tags: ["personalità", "psicopatologia", "adolescente", "clinico", "disturbo"],
  },
  {
    id: "bfq-3",
    name: "BFQ-3",
    fullName: "Big Five Questionnaire - 3ª Edizione",
    category: "Personalità",
    purchaseLevel: "C HR+",
    ageRange: "14+ anni",
    description: "Valutazione dei 5 grandi fattori di personalità.",
    useCase: "Energia, Amicalità, Coscienziosità, Stabilità emotiva, Apertura mentale. Utilizzato in clinica e selezione HR.",
    url: "https://www.giuntipsy.it/bfq-3-big-five-questionnaire-3-test-personalita",
    tags: ["personalità", "big five", "adulto", "adolescente", "hr", "selezione", "organizzazioni"],
  },
  {
    id: "bfq-c",
    name: "BFQ-C",
    fullName: "Big Five Questionnaire - Children",
    category: "Personalità",
    purchaseLevel: "C",
    ageRange: "7–14 anni",
    description: "Valutazione dei tratti Big Five nei bambini e preadolescenti.",
    useCase: "Profilo di personalità in età evolutiva secondo il modello Big Five.",
    url: "https://www.giuntipsy.it/bfq-c",
    tags: ["personalità", "big five", "bambino", "preadolescente"],
  },
  {
    id: "dpa",
    name: "DPA",
    fullName: "Dimensional Personality Assessment",
    category: "Personalità",
    purchaseLevel: "C",
    ageRange: "18+ anni",
    description: "Indagine dimensionale della personalità con approccio clinico.",
    useCase: "Valutazione dimensionale dei tratti di personalità in chiave clinica. Integra modelli categoriali e dimensionali.",
    url: "https://www.giuntipsy.it/dpa-dimensional-personality-assessment-indagine-dimensionale-della-personalita",
    tags: ["personalità", "dimensionale", "clinico", "adulto", "disturbo personalità"],
  },
  {
    id: "mbti",
    name: "MBTI Step I",
    fullName: "Myers-Briggs Type Indicator - Step I",
    category: "Personalità",
    purchaseLevel: "C HR+",
    ageRange: "14+ anni",
    description: "Identificazione del tipo psicologico secondo la teoria di Jung.",
    useCase: "16 tipi di personalità. Molto utilizzato in ambito organizzativo per team building, sviluppo della leadership e coaching.",
    url: "https://www.giuntipsy.it/mbti-step-i-myers-briggs-type-indicator-test-personalita-jung",
    tags: ["personalità", "jung", "tipo", "hr", "organizzazioni", "team", "leadership", "coaching"],
  },
  {
    id: "rorschach",
    name: "Tavole di Rorschach",
    fullName: "Tavole di Rorschach (edizione da collezione)",
    category: "Personalità",
    purchaseLevel: "C",
    ageRange: "Adolescenti/Adulti",
    description: "Test proiettivo classico con macchie d'inchiostro.",
    useCase: "Esplorazione profonda della struttura di personalità, meccanismi di difesa, funzionamento psicodinamico. Utilizzato in clinica e in ambito forense.",
    url: "https://www.giuntipsy.it/tavole-di-rorschach-da-collezione-edizione-limitata",
    tags: ["proiettivo", "personalità", "psicodinamico", "forense", "clinico", "inconscio", "difesa"],
  },
  {
    id: "ppt",
    name: "PPT",
    fullName: "Parents Preference Test",
    category: "Personalità",
    purchaseLevel: "C",
    ageRange: "Genitori",
    description: "Valutazione delle preferenze e stili genitoriali.",
    useCase: "Utile in contesti di custodia, separazione, perizia sulla genitorialità.",
    url: "https://www.giuntipsy.it/ppt",
    tags: ["genitoriale", "custodia", "separazione", "forense", "genitorialità", "famiglia"],
  },

  // ── SALUTE MENTALE ──
  {
    id: "batteria-beck",
    name: "Batteria Scale Beck",
    fullName: "BDI-II, BAI, BHS, BSS - Batteria Scale Beck",
    category: "Salute Mentale",
    purchaseLevel: "C",
    ageRange: "13+ anni",
    description: "Batteria completa per depressione, ansia, disperazione e ideazione suicidaria.",
    useCase: "Le 4 scale Beck coprono depressione (BDI-II), ansia (BAI), disperazione (BHS) e ideazione suicidaria (BSS). Gold standard per la valutazione dell'umore.",
    url: "https://www.giuntipsy.it/batteria-beck",
    tags: ["depressione", "ansia", "suicidio", "umore", "adulto", "adolescente", "beck", "clinico"],
  },
  {
    id: "bdi-fs",
    name: "BDI-FS",
    fullName: "Beck Depression Inventory - FastScreen",
    category: "Salute Mentale",
    purchaseLevel: "C",
    ageRange: "Adulti",
    description: "Screening rapido della depressione.",
    useCase: "Screening veloce (7 item) della depressione in contesti medici, di pronto soccorso o come prima valutazione.",
    url: "https://www.giuntipsy.it/bdi-fs-beck-depression-inventory-fast-screen",
    tags: ["depressione", "screening", "rapido", "adulto", "beck", "umore"],
  },
  {
    id: "bss",
    name: "BSS",
    fullName: "Beck Scale for Suicide Ideation",
    category: "Salute Mentale",
    purchaseLevel: "C",
    ageRange: "Adulti",
    description: "Valutazione dell'ideazione suicidaria e del rischio suicidario.",
    useCase: "Misura specifica del rischio suicidario: pensieri, piani, intenzioni. Essenziale nella valutazione di emergenza psichiatrica.",
    url: "https://www.giuntipsy.it/bss-beck-scale-for-suicide-ideation",
    tags: ["suicidio", "rischio", "emergenza", "adulto", "beck", "ideazione"],
  },
  {
    id: "conners-3",
    name: "Conners 3",
    fullName: "Conners 3 - Terza Edizione",
    category: "Salute Mentale",
    purchaseLevel: "C",
    ageRange: "6–18 anni",
    description: "Valutazione di ADHD e disturbi del comportamento.",
    useCase: "Gold standard per la diagnosi di ADHD nei bambini e adolescenti. Forme per genitori, insegnanti e autovalutazione. Include scale di inattenzione, iperattività, disturbo oppositivo.",
    url: "https://www.giuntipsy.it/conners-3",
    tags: ["adhd", "attenzione", "iperattività", "bambino", "adolescente", "comportamento", "scuola", "oppositivo"],
  },
  {
    id: "edi-3",
    name: "EDI-3",
    fullName: "Eating Disorder Inventory - 3",
    category: "Salute Mentale",
    purchaseLevel: "C",
    ageRange: "13+ anni",
    description: "Valutazione dei disturbi del comportamento alimentare.",
    useCase: "Anoressia, bulimia, binge eating. 12 scale primarie che coprono aspetti psicologici (perfezionismo, insoddisfazione corporea, paura della maturità) e comportamentali.",
    url: "https://www.giuntipsy.it/edi-3",
    tags: ["alimentare", "anoressia", "bulimia", "binge", "adolescente", "adulto", "corpo", "peso"],
  },
  {
    id: "edi-3-rf",
    name: "EDI-3 RF",
    fullName: "Eating Disorder Inventory - 3 Referral Form",
    category: "Salute Mentale",
    purchaseLevel: "A",
    ageRange: "13+ anni",
    description: "Screening breve per i disturbi alimentari.",
    useCase: "Forma di screening rapida (25 item) per identificare soggetti a rischio di disturbo alimentare e indirizzarli a valutazione specialistica.",
    url: "https://www.giuntipsy.it/edi-3-rf",
    tags: ["alimentare", "screening", "anoressia", "bulimia", "rapido"],
  },
  {
    id: "scl-90-r",
    name: "SCL-90-R",
    fullName: "Symptom Checklist 90 - Revised",
    category: "Salute Mentale",
    purchaseLevel: "C",
    ageRange: "13+ anni",
    description: "Valutazione di un ampio spettro di sintomi psicopatologici.",
    useCase: "90 item che coprono somatizzazione, ossessività, sensibilità interpersonale, depressione, ansia, ostilità, fobie, ideazione paranoide, psicoticismo.",
    url: "https://www.giuntipsy.it/scl-90-r",
    tags: ["psicopatologia", "sintomi", "ansia", "depressione", "ossessivo", "fobia", "paranoide", "screening", "adulto"],
  },
  {
    id: "ados",
    name: "ADOS",
    fullName: "Autism Diagnostic Observation Schedule",
    category: "Salute Mentale",
    purchaseLevel: "C",
    ageRange: "Da 12 mesi all'età adulta",
    description: "Osservazione diagnostica semi-strutturata per lo spettro autistico.",
    useCase: "Gold standard per la diagnosi di autismo. Osservazione del comportamento sociale, comunicazione, gioco e comportamenti stereotipati in 4 moduli per età.",
    url: "https://www.giuntipsy.it/ados",
    tags: ["autismo", "spettro", "diagnosi", "bambino", "adulto", "comunicazione", "sociale", "osservazione"],
  },
  {
    id: "safa",
    name: "SAFA",
    fullName: "Scale Psichiatriche di Autosomministrazione per Fanciulli e Adolescenti",
    category: "Salute Mentale",
    purchaseLevel: "C",
    ageRange: "8–18 anni",
    description: "Batteria di autovalutazione psichiatrica per bambini e adolescenti.",
    useCase: "Ansia, depressione, disturbi alimentari, ossessioni, somatizzazione. Autovalutazione in età evolutiva per screening ampio.",
    url: "https://www.giuntipsy.it/safa-scale-psichiatriche-autosomministrazione-per-fanciulli-adolescenti",
    tags: ["ansia", "depressione", "bambino", "adolescente", "psichiatria", "ossessivo", "alimentare", "screening"],
  },
  {
    id: "staxi-2",
    name: "STAXI-2",
    fullName: "State-Trait Anger Expression Inventory - 2",
    category: "Salute Mentale",
    purchaseLevel: "C",
    ageRange: "16+ anni",
    description: "Valutazione dell'esperienza e dell'espressione della rabbia.",
    useCase: "Rabbia di stato, rabbia di tratto, espressione esterna/interna, controllo della rabbia. Utile nella gestione dell'aggressività e in ambito forense.",
    url: "https://www.giuntipsy.it/staxi-2",
    tags: ["rabbia", "aggressività", "emozione", "forense", "adulto", "comportamento"],
  },
  {
    id: "sims",
    name: "SIMS",
    fullName: "Structured Inventory of Malingered Symptomatology",
    category: "Salute Mentale",
    purchaseLevel: "C",
    ageRange: "Adulti",
    description: "Screening della simulazione di sintomi.",
    useCase: "Identificazione della simulazione (malingering) di sintomi psicopatologici e cognitivi. Essenziale in ambito forense e peritale.",
    url: "https://www.giuntipsy.it/sims",
    tags: ["simulazione", "malingering", "forense", "peritale", "validità"],
  },
  {
    id: "srp-4",
    name: "SRP 4",
    fullName: "Self-Report Psychopathy Scale - 4",
    category: "Salute Mentale",
    purchaseLevel: "C",
    ageRange: "Adulti",
    description: "Valutazione self-report dei tratti di psicopatia.",
    useCase: "Misurazione dei tratti psicopatici (manipolazione, insensibilità, antisocialità) in popolazione adulta. Contesto forense e di ricerca.",
    url: "https://www.giuntipsy.it/srp-4-self-report-psychopathy-scale",
    tags: ["psicopatia", "antisociale", "forense", "personalità", "adulto", "manipolazione"],
  },

  // ── APPRENDIMENTI ──
  {
    id: "bvsco-3",
    name: "BVSCO-3",
    fullName: "Batteria per la Valutazione della Scrittura e della Competenza Ortografica - 3",
    category: "Apprendimenti",
    purchaseLevel: "B",
    ageRange: "Età scolare",
    description: "Valutazione clinica della scrittura e dell'ortografia.",
    useCase: "Diagnosi di disgrafia e disortografia. Valutazione della velocità, qualità e correttezza della scrittura.",
    url: "https://www.giuntipsy.it/bvsco-3-batteria-per-la-valutazione-della-scrittura-e-delle-competenza-ortografica",
    tags: ["dsa", "scrittura", "ortografia", "disgrafia", "bambino", "scuola", "apprendimento"],
  },
  {
    id: "prove-mt-3",
    name: "Prove MT-3 Clinica",
    fullName: "Prove MT-3 Clinica (Cornoldi)",
    category: "Apprendimenti",
    purchaseLevel: "B",
    ageRange: "Età scolare",
    description: "Valutazione clinica delle abilità di lettura.",
    useCase: "Correttezza, rapidità e comprensione del testo. Gold standard italiano per la diagnosi di dislessia e difficoltà di lettura (DSA).",
    url: "https://www.giuntipsy.it/prove-mt-3-clinica-cornoldi",
    tags: ["dsa", "lettura", "dislessia", "comprensione", "bambino", "scuola", "apprendimento"],
  },
  {
    id: "bda-16-30",
    name: "BDA 16-30",
    fullName: "Batteria per la Dislessia Adulti 16-30",
    category: "Apprendimenti",
    purchaseLevel: "B",
    ageRange: "16–30 anni",
    description: "Valutazione della dislessia negli adulti.",
    useCase: "Lettura, scrittura e comprensione per la diagnosi di dislessia in adulti e giovani adulti (università, lavoro).",
    url: "https://www.giuntipsy.it/bda-16-30-batteria-per-la-dislessia-adulti-prove-di-lettura-scrittura-e-comprensione",
    tags: ["dsa", "dislessia", "adulto", "giovane", "università", "lettura", "scrittura"],
  },

  // ── COMUNICAZIONE E LINGUAGGIO ──
  {
    id: "trog-2",
    name: "TROG-2",
    fullName: "Test for Reception of Grammar - 2",
    category: "Comunicazione e Linguaggio",
    purchaseLevel: "B",
    ageRange: "4–adulti",
    description: "Valutazione della comprensione delle strutture grammaticali.",
    useCase: "Comprensione morfosintattica. Utile nella diagnosi di disturbi del linguaggio, afasia e valutazione logopedica.",
    url: "https://www.giuntipsy.it/trog-2",
    tags: ["linguaggio", "comprensione", "grammatica", "afasia", "logopedia", "bambino", "comunicazione"],
  },
  {
    id: "token-test",
    name: "Test dei Gettoni",
    fullName: "Token Test",
    category: "Comunicazione e Linguaggio",
    purchaseLevel: "B",
    ageRange: "Bambini/Adulti",
    description: "Valutazione della comprensione verbale.",
    useCase: "Comprensione di comandi verbali di complessità crescente. Classico strumento per afasia, disturbi del linguaggio e screening neuropsicologico.",
    url: "https://www.giuntipsy.it/test-dei-gettoni",
    tags: ["linguaggio", "comprensione", "afasia", "neuropsicologia", "comunicazione"],
  },

  // ── FUNZIONAMENTO PSICOMOTORIO ──
  {
    id: "movement-abc-2",
    name: "Movement ABC-2",
    fullName: "Movement Assessment Battery for Children - 2",
    category: "Funzionamento Psicomotorio",
    purchaseLevel: "B",
    ageRange: "3–16 anni",
    description: "Valutazione delle difficoltà motorie nei bambini.",
    useCase: "Destrezza manuale, lancio/afferramento, equilibrio. Diagnosi del Disturbo di Coordinazione Motoria (DCD/disprassia).",
    url: "https://www.giuntipsy.it/movement-abc-2",
    tags: ["motorio", "coordinazione", "disprassia", "bambino", "equilibrio", "movimento", "dcd"],
  },
  {
    id: "sensory-profile-2",
    name: "Sensory Profile 2",
    fullName: "Sensory Profile 2",
    category: "Funzionamento Psicomotorio",
    purchaseLevel: "B",
    ageRange: "Dalla nascita ai 14 anni",
    description: "Valutazione dell'elaborazione sensoriale.",
    useCase: "Profilo sensoriale: reattività, ricerca sensoriale, evitamento. Fondamentale nella valutazione di autismo, ADHD e disturbi dell'integrazione sensoriale.",
    url: "https://www.giuntipsy.it/sensory-profile-2",
    tags: ["sensoriale", "autismo", "adhd", "bambino", "integrazione", "tattile", "uditivo"],
  },

  // ── CAPACITÀ ADATTIVE ──
  {
    id: "vineland-ii",
    name: "Vineland-II",
    fullName: "Vineland Adaptive Behavior Scales - II",
    category: "Capacità Adattive",
    purchaseLevel: "B",
    ageRange: "Dalla nascita ai 90 anni",
    description: "Valutazione del comportamento adattivo.",
    useCase: "Comunicazione, abilità della vita quotidiana, socializzazione, motricità. Essenziale nella diagnosi di disabilità intellettiva e autismo (livello di funzionamento).",
    url: "https://www.giuntipsy.it/vineland-ii",
    tags: ["adattivo", "autonomia", "socializzazione", "disabilità", "autismo", "bambino", "adulto", "quotidiano"],
  },
  {
    id: "abas-ii",
    name: "ABAS-II",
    fullName: "Adaptive Behavior Assessment System - II",
    category: "Capacità Adattive",
    purchaseLevel: "B",
    ageRange: "Dalla nascita ai 89 anni",
    description: "Valutazione del comportamento adattivo.",
    useCase: "10 aree di abilità adattive. Complemento alla Vineland per la diagnosi di disabilità intellettiva secondo i criteri DSM.",
    url: "https://www.giuntipsy.it/abas-ii",
    tags: ["adattivo", "autonomia", "disabilità", "diagnosi", "dsm"],
  },

  // ── FUNZIONAMENTO SOCIO-EMOTIVO ──
  {
    id: "eq-i",
    name: "EQ-i",
    fullName: "Emotional Quotient Inventory",
    category: "Funzionamento Socio-Emotivo",
    purchaseLevel: "C",
    ageRange: "Adulti",
    description: "Valutazione dell'intelligenza emotiva.",
    useCase: "Consapevolezza di sé, gestione dello stress, relazioni interpersonali, adattabilità. Utilizzato in clinica e in ambito organizzativo.",
    url: "https://www.giuntipsy.it/eq-i-emotional-quotient-inventory",
    tags: ["emozione", "intelligenza emotiva", "stress", "adulto", "hr", "organizzazioni"],
  },
  {
    id: "tpb",
    name: "TPB",
    fullName: "Test Prevenzione Bullismo",
    category: "Funzionamento Socio-Emotivo",
    purchaseLevel: "C",
    ageRange: "Età scolare",
    description: "Screening e prevenzione del bullismo.",
    useCase: "Identificazione di dinamiche di bullismo e cyberbullismo in contesti scolastici. Valutazione di vittime, bulli e spettatori.",
    url: "https://www.giuntipsy.it/tpb-test-prevenzione-bullismo",
    tags: ["bullismo", "cyberbullismo", "scuola", "bambino", "adolescente", "sociale"],
  },

  // ── PSICOLOGIA DELLE ORGANIZZAZIONI ──
  {
    id: "tki",
    name: "TKI",
    fullName: "Metodo TKI di gestione dei conflitti (Thomas-Kilmann)",
    category: "Psicologia delle Organizzazioni",
    purchaseLevel: "C",
    ageRange: "Adulti",
    description: "Identificazione dello stile di gestione dei conflitti.",
    useCase: "5 stili: competizione, collaborazione, compromesso, evitamento, adattamento. Per team building, coaching e sviluppo manageriale.",
    url: "https://www.giuntipsy.it/metodo-tki-di-gestione-dei-conflitti-thomas-kilmann",
    tags: ["conflitto", "team", "hr", "organizzazioni", "leadership", "management"],
  },
  {
    id: "alq-2",
    name: "ALQ-2",
    fullName: "Agentic Leadership Questionnaire 2",
    category: "Psicologia delle Organizzazioni",
    purchaseLevel: "HR",
    ageRange: "Adulti",
    description: "Valutazione delle competenze di leadership.",
    useCase: "Profilo di leadership: stile di guida, influenza, decision-making. Per sviluppo del potenziale e assessment center.",
    url: "https://www.giuntipsy.it/alq-2-agentic-leadership-questionnaire-test-valutazione-leadership",
    tags: ["leadership", "hr", "organizzazioni", "management", "assessment", "potenziale"],
  },

  // ── PSICOLOGIA GIURIDICA ──
  {
    id: "sims-forense",
    name: "SIMS (Forense)",
    fullName: "Structured Inventory of Malingered Symptomatology",
    category: "Psicologia Giuridica",
    purchaseLevel: "C",
    ageRange: "Adulti",
    description: "Screening della simulazione in contesto peritale.",
    useCase: "Validità della presentazione clinica in ambito forense: identificazione di esagerazione o fabbricazione di sintomi.",
    url: "https://www.giuntipsy.it/sims",
    tags: ["forense", "simulazione", "peritale", "giuridica", "validità", "malingering"],
  },
];

// ── Keyword-matching recommendation engine ──

const keywordMap: Record<string, string[]> = {
  "ansia": ["batteria-beck", "bdi-fs", "scl-90-r", "safa", "mmpi-3", "mmpi-2", "dpa"],
  "depressione": ["batteria-beck", "bdi-fs", "scl-90-r", "safa", "mmpi-3", "mmpi-2"],
  "umore": ["batteria-beck", "bdi-fs", "scl-90-r"],
  "suicid": ["bss", "batteria-beck"],
  "adhd": ["conners-3", "cefi", "cas2", "wisc-v", "sensory-profile-2"],
  "attenzione": ["conners-3", "cefi", "cas2", "wisc-v"],
  "iperattiv": ["conners-3", "cefi"],
  "inattenzione": ["conners-3", "cefi", "cas2"],
  "concentrazione": ["conners-3", "cefi", "cas2", "wisc-v", "wais-iv"],
  "bambino": ["wisc-v", "wppsi-iv", "conners-3", "cefi", "cas2", "movement-abc-2", "vineland-ii", "safa", "bfq-c"],
  "bambina": ["wisc-v", "wppsi-iv", "conners-3", "cefi", "cas2", "movement-abc-2", "vineland-ii", "safa"],
  "adolescent": ["wisc-v", "mmpi-a", "conners-3", "safa", "edi-3", "bfq-c"],
  "adulto": ["wais-iv", "mmpi-3", "mmpi-2", "mmpi-2-rf", "bfq-3", "batteria-beck", "scl-90-r", "eq-i"],
  "adulta": ["wais-iv", "mmpi-3", "mmpi-2", "mmpi-2-rf", "bfq-3", "batteria-beck", "scl-90-r", "eq-i"],
  "anziano": ["wms-iv", "bcse", "adas", "wais-iv"],
  "demenza": ["adas", "bcse", "wms-iv", "wais-iv"],
  "alzheimer": ["adas", "bcse", "wms-iv"],
  "memoria": ["wms-iv", "bcse", "wais-iv", "adas"],
  "decadimento": ["adas", "bcse", "wms-iv"],
  "cognitiv": ["wisc-v", "wais-iv", "wppsi-iv", "raven-2", "leiter-3", "cas2", "bcse", "bas3"],
  "intelligenza": ["wisc-v", "wais-iv", "wppsi-iv", "raven-2", "leiter-3", "bas3"],
  "qi": ["wisc-v", "wais-iv", "wppsi-iv", "raven-2", "leiter-3", "bas3"],
  "autismo": ["ados", "vineland-ii", "leiter-3", "sensory-profile-2", "abas-ii"],
  "autistic": ["ados", "vineland-ii", "leiter-3", "sensory-profile-2", "abas-ii"],
  "spettro": ["ados", "vineland-ii", "leiter-3", "sensory-profile-2"],
  "personalit": ["mmpi-3", "mmpi-2", "mmpi-2-rf", "bfq-3", "dpa", "rorschach", "mbti"],
  "forense": ["mmpi-3", "mmpi-2", "sims", "srp-4", "ppt", "rorschach", "staxi-2", "sims-forense"],
  "peritale": ["mmpi-3", "mmpi-2", "sims", "srp-4", "ppt", "sims-forense"],
  "perizia": ["mmpi-3", "mmpi-2", "sims", "srp-4", "ppt", "wais-iv", "sims-forense"],
  "custodia": ["ppt", "mmpi-3", "mmpi-2", "sims-forense"],
  "genitoriale": ["ppt", "mmpi-3"],
  "alimentar": ["edi-3", "edi-3-rf", "safa"],
  "anoressia": ["edi-3", "edi-3-rf"],
  "bulimia": ["edi-3", "edi-3-rf"],
  "peso": ["edi-3", "edi-3-rf"],
  "dsa": ["prove-mt-3", "bvsco-3", "bda-16-30", "wisc-v"],
  "dislessia": ["prove-mt-3", "bda-16-30", "wisc-v"],
  "lettura": ["prove-mt-3", "bda-16-30"],
  "scrittura": ["bvsco-3", "bda-16-30"],
  "ortografia": ["bvsco-3"],
  "scuola": ["wisc-v", "conners-3", "prove-mt-3", "bvsco-3", "tpb", "cefi"],
  "linguaggio": ["trog-2", "token-test", "leiter-3", "bayley-4"],
  "comunicazione": ["trog-2", "token-test", "vineland-ii"],
  "afasia": ["trog-2", "token-test"],
  "motorio": ["movement-abc-2", "bayley-4", "sensory-profile-2"],
  "coordinazione": ["movement-abc-2"],
  "disprassia": ["movement-abc-2"],
  "sensoriale": ["sensory-profile-2"],
  "sviluppo": ["bayley-4", "wppsi-iv", "vineland-ii"],
  "neonat": ["bayley-4"],
  "prematur": ["bayley-4"],
  "disabilità": ["vineland-ii", "abas-ii", "leiter-3"],
  "adattiv": ["vineland-ii", "abas-ii"],
  "psicopatia": ["srp-4"],
  "antisocial": ["srp-4", "mmpi-3"],
  "aggressiv": ["staxi-2", "srp-4", "conners-3"],
  "rabbia": ["staxi-2"],
  "bullismo": ["tpb"],
  "simulazione": ["sims", "sims-forense"],
  "malingering": ["sims", "sims-forense"],
  "leadership": ["alq-2", "mbti", "tki"],
  "team": ["tki", "mbti", "eq-i"],
  "hr": ["bfq-3", "mbti", "tki", "alq-2", "eq-i"],
  "selezione": ["bfq-3", "mbti", "alq-2"],
  "organizzat": ["tki", "alq-2", "mbti", "bfq-3", "eq-i"],
  "prescolar": ["wppsi-iv", "bayley-4"],
  "non verbale": ["raven-2", "leiter-3"],
  "screening": ["bcse", "bdi-fs", "edi-3-rf", "scl-90-r", "safa"],
  "proiettivo": ["rorschach", "ppt"],
  "jung": ["mbti"],
  "big five": ["bfq-3", "bfq-c"],
  "comportament": ["conners-3", "vineland-ii", "staxi-2", "cefi"],
  "ossessiv": ["scl-90-r", "safa"],
  "fobia": ["scl-90-r", "safa"],
  "trauma": ["wms-iv", "scl-90-r"],
  "stress": ["eq-i", "batteria-beck"],
  "emozioni": ["eq-i", "staxi-2"],
  "funzioni esecutive": ["cefi", "cas2"],
  "gifted": ["wisc-v", "raven-2"],
  "alto potenziale": ["wisc-v", "raven-2"],
  "4 anni": ["wppsi-iv", "ados", "bayley-4", "sensory-profile-2"],
  "5 anni": ["wppsi-iv", "ados", "cas2"],
  "8 anni": ["wisc-v", "conners-3", "cas2", "cefi"],
  "sordo": ["leiter-3", "raven-2"],
  "straniero": ["raven-2", "leiter-3"],
};

export function getRecommendations(query: string): TestRecommendation[] {
  const q = query.toLowerCase();
  const scores: Record<string, number> = {};

  for (const [keyword, testIds] of Object.entries(keywordMap)) {
    if (q.includes(keyword)) {
      for (const id of testIds) {
        scores[id] = (scores[id] || 0) + 1;
      }
    }
  }

  // Also match on test tags directly
  for (const test of testCatalog) {
    for (const tag of test.tags) {
      if (q.includes(tag)) {
        scores[test.id] = (scores[test.id] || 0) + 0.5;
      }
    }
  }

  if (Object.keys(scores).length === 0) {
    // Fallback: return some general-purpose tests
    return testCatalog
      .filter((t) => ["mmpi-3", "wais-iv", "scl-90-r", "bfq-3"].includes(t.id))
      .map((t) => ({ ...t, relevance: 60 }));
  }

  const maxScore = Math.max(...Object.values(scores));

  return Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([id, score]) => {
      const test = testCatalog.find((t) => t.id === id)!;
      return {
        ...test,
        relevance: Math.round((score / maxScore) * 100),
      };
    })
    .filter(Boolean);
}

export function generateReasoning(query: string, recs: TestRecommendation[]): string {
  const q = query.toLowerCase();
  const parts: string[] = [];

  parts.push(`Sulla base del quesito clinico presentato, ho individuato **${recs.length} test** dal catalogo Giunti Psychometrics che risultano particolarmente pertinenti.\n`);

  if (q.includes("adhd") || q.includes("attenzione") || q.includes("iperattiv") || q.includes("inattenzione")) {
    parts.push("Il quadro descritto suggerisce la necessità di una **valutazione specifica per l'ADHD**, con strumenti multimodali (genitori, insegnanti, osservazione clinica) e una parallela valutazione del profilo cognitivo per escludere altre cause di disattenzione.\n");
  }

  if (q.includes("autismo") || q.includes("autistic") || q.includes("spettro")) {
    parts.push("Per la valutazione dello **spettro autistico** è fondamentale un approccio multi-strumento che includa osservazione diretta (ADOS), valutazione del funzionamento adattivo (Vineland) e profilo cognitivo non verbale.\n");
  }

  if (q.includes("ansia") || q.includes("depressione") || q.includes("umore")) {
    parts.push("Il quadro ansioso-depressivo richiede una **valutazione dell'umore e dell'ansia** con scale validate, accompagnata da un assessment più ampio della psicopatologia per identificare comorbidità.\n");
  }

  if (q.includes("alimentar") || q.includes("anoressia") || q.includes("bulimia") || q.includes("peso")) {
    parts.push("La valutazione dei **disturbi del comportamento alimentare** richiede strumenti specifici che esplorino sia gli aspetti comportamentali che le dimensioni psicologiche sottostanti (immagine corporea, perfezionismo, relazioni interpersonali).\n");
  }

  if (q.includes("forense") || q.includes("peritale") || q.includes("perizia") || q.includes("custodia")) {
    parts.push("In ambito **forense**, è essenziale affiancare alla valutazione clinica strumenti di controllo della validità della risposta (scale di simulazione) e test con robuste proprietà psicometriche riconosciute in ambito giudiziario.\n");
  }

  if (q.includes("demenza") || q.includes("alzheimer") || q.includes("anziano") || q.includes("decadimento") || q.includes("memoria")) {
    parts.push("Per il **sospetto deterioramento cognitivo**, si consiglia uno screening iniziale seguito da batterie neuropsicologiche mirate per memoria, funzioni esecutive e capacità cognitive globali.\n");
  }

  if (q.includes("dsa") || q.includes("dislessia") || q.includes("lettura") || q.includes("scrittura")) {
    parts.push("La diagnosi di **DSA** richiede la valutazione delle specifiche abilità di lettura, scrittura e calcolo, affiancata da un profilo cognitivo completo per verificare la discrepanza con il livello intellettivo.\n");
  }

  parts.push("\nI test sono ordinati per **rilevanza** rispetto al quesito clinico. Si consiglia di valutare la batteria nel suo insieme, adattandola al contesto specifico del paziente.");

  return parts.join("\n");
}
