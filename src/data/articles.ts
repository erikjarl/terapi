export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Kognitiv beteendeterapi vid social ångest: En metaanalys av behandlingseffekter",
    excerpt: "En omfattande metaanalys visar att kognitiv beteendeterapi (KBT) är en effektiv behandlingsmetod för social ångest. Studien analyserade 42 randomiserade kontrollerade studier med totalt 3,200 deltagare och fann signifikanta förbättringar i ångestsymptom.",
    content: "Forskare vid Karolinska Institutet har genomfört en omfattande metaanalys som bekräftar KBT:s effektivitet vid social ångest. Analysen inkluderade 42 randomiserade kontrollerade studier med totalt 3,200 deltagare från 15 olika länder.\n\nResultaten visar att KBT-behandling leder till signifikanta förbättringar i ångestsymptom jämfört med både väntlistekontroller och aktiva kontrollbehandlingar. Effektstorleken var medelstor till stor (Cohen's d = 0.85), och behandlingseffekterna kvarstod vid uppföljningar upp till 12 månader efter avslutad behandling.\n\nForskarna noterade att exponeringsbaserade KBT-interventioner hade något större effekt än enbart kognitiva interventioner. Grupp-KBT och individuell KBT visade liknande effektivitet, vilket har viktiga implikationer för kostnadseffektiv vård.\n\nStudien betonar vikten av att behandlingen inkluderar både kognitiva och beteendemässiga komponenter för bästa resultat. Framtida forskning bör fokusera på att identifiera vilka patienter som har störst nytta av olika behandlingsformat.",
    date: "2025-10-18",
    tags: ["KBT", "Social ångest", "Metaanalys"],
  },
  {
    id: "2",
    title: "Mindfulness och stressreduktion: Nya fynd om hjärnans neuroplasticitet",
    excerpt: "En ny studie publicerad i Nature Neuroscience visar att regelbunden mindfulness-meditation kan leda till mätbara förändringar i hjärnans struktur och funktion, särskilt i områden som är associerade med stresshantering och emotionell reglering.",
    content: "Forskare vid Harvard Medical School har använt avancerad hjärnavbildning för att undersöka hur mindfulness-meditation påverkar hjärnan. I studien deltog 75 personer som genomgick ett åtta veckors mindfulness-baserat stressreduktionsprogram (MBSR).\n\nResultaten visade signifikanta ökningar i gråsubstansvolymen i hippocampus, ett område som är viktigt för inlärning och minne, samt i områden som är associerade med självmedvetenhet och medkänsla. Samtidigt observerades minskningar i amygdalas volym, det område som är centralt för rädsla och stress.\n\nDeltagarna rapporterade också subjektiva förbättringar i upplevd stress, ångest och livskvalitet. Dessa självrapporterade förbättringar korrelerade med de observerade hjärnförändringarna, vilket stärker sambandet mellan mindfulness-träning och hjärnans neuroplasticitet.\n\nForskarna betonar att dessa fynd har viktiga implikationer för behandling av stressrelaterade tillstånd och understryker vikten av evidensbaserade mindfulness-interventioner i klinisk praktik.",
    date: "2025-10-17",
    tags: ["Mindfulness", "Neuroplasticitet", "Stress"],
  },
  {
    id: "3",
    title: "Sömnens roll i emotionell reglering: Implikationer för psykisk hälsa",
    excerpt: "Ny forskning visar att sömnbrist kraftigt försämrar hjärnans förmåga att reglera emotioner, vilket kan bidra till utveckling av ångest och depression. Studien identifierar specifika neuronala mekanismer bakom detta samband.",
    content: "En banbrytande studie från University of California, Berkeley, har kartlagt de neuronala mekanismerna som kopplar sömnbrist till emotionell dysreglering. Forskarna använde funktionell magnetresonanstomografi (fMRI) för att studera hjärnaktivitet hos deltagare efter en natt utan sömn.\n\nResultaten visade att sömnbrist ledde till 60% ökad aktivitet i amygdala som respons på negativa känslomässiga stimuli. Samtidigt observerades minskad aktivitet i prefrontala cortex, det område som normalt modulerar amygdalas reaktivitet.\n\nDessa fynd förklarar varför sömnbrist kan leda till överreaktivitet och svårigheter att hantera stress och negativa känslor. Studien visar också att en enda natt med återhämtande sömn kan återställa normal emotionell reglering.\n\nForskarna betonar vikten av att prioritera sömn som en central del av behandling för ångest och depression. Detta stödjer också användningen av sömninterventioner i kognitiv beteendeterapi för emotionella störningar.",
    date: "2025-10-16",
    tags: ["Sömn", "Emotionell reglering", "Ångest"],
  },
];
