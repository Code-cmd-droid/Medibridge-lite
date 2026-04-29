import { useState, useEffect, useRef } from "react";

const T = {
  en: {
    appName:"MediBridge Lite",home:"Home",symptoms:"Symptoms",nearby:"Nearby",education:"Health Tips",consult:"Consult",
    checkSymptoms:"Check Symptoms",findCare:"Find Care",healthTips:"Health Tips",talkDoctor:"Talk to Doctor",
    selectSymptoms:"Select your symptoms",checkNow:"Check Now",clearAll:"Clear All",
    resultMonitor:"Safe to Monitor",resultConsult:"Consult a Doctor Soon",resultEmergency:"Seek Emergency Care",
    monitorMsg:"Your symptoms are mild. Rest, stay hydrated, and monitor for 24–48 hours.",
    consultMsg:"We recommend seeing a doctor within 24 hours. Avoid self-medication.",
    emergencyMsg:"Please seek emergency care immediately. Call 112 or go to the nearest hospital now.",
    call112:"Call 112",findHospital:"Find Hospital",
    nearbyTitle:"Nearby Healthcare",all:"All",hospitals:"Hospitals",clinics:"Clinics",pharmacies:"Pharmacies",
    open:"Open",closed:"Closed",call:"Call",directions:"Directions",
    offlineNote:"Showing cached data. Connect to internet for real-time info.",
    educationTitle:"Health Tips & Guides",
    consultTitle:"Get Help",premiumFeature:"Premium Feature",
    upgradeMsg:"Teleconsultation is available for ₹99/month. Connect with real doctors 24/7.",
    upgrade:"Upgrade Now",maybeLater:"Maybe Later",
    typeMessage:"Describe your symptoms...",doctor:"Dr. Priya (Online)",
    goodMorning:"Good Morning",goodAfternoon:"Good Afternoon",goodEvening:"Good Evening",
    howAreYou:"How are you feeling today?",quickActions:"Quick Actions",
    supported:"Supported by UN SDG 3 · Good Health & Well-being",
    symptomsSelected:"symptoms selected",tryAgain:"Try Again",done:"Done",
    disclaimer:"⚠ General guidance only. Always consult a qualified doctor for medical advice.",
    freePlan:"Free Plan",premiumPlan:"Premium Plan",
    upgradeTitle:"Unlock Full Access",free1:"Symptom Checker",free2:"Health Education",free3:"Nearby Services",free4:"AI Health Assistant",
    paid1:"Live Teleconsultation",paid2:"Doctor History",paid3:"Priority Support",
    talkAI:"Talk to AI",talkAIDesc:"Free · Instant guidance",talkDoctorDesc:"Premium · Real doctor",
    aiName:"MediAI",aiDisclaimer:"AI gives general guidance only — not a diagnosis.",
    aiWelcome:"Hi! Tell me what's bothering you. I'll keep it short and honest — including if you need to see a doctor.",
    consultHubTitle:"How can we help?",consultHubSubtitle:"Choose how you'd like to get help today",
    aiChatTitle:"AI Health Assistant",thinking:"Thinking...",clearChat:"Clear",
  },
  hi: {
    appName:"मेडीब्रिज लाइट",home:"होम",symptoms:"लक्षण",nearby:"नजदीकी",education:"सुझाव",consult:"सलाह",
    checkSymptoms:"लक्षण जांचें",findCare:"देखभाल खोजें",healthTips:"स्वास्थ्य सुझाव",talkDoctor:"डॉक्टर से बात",
    selectSymptoms:"अपने लक्षण चुनें",checkNow:"अभी जांचें",clearAll:"सभी हटाएं",
    resultMonitor:"निगरानी में रखें",resultConsult:"जल्द डॉक्टर से मिलें",resultEmergency:"आपातकालीन देखभाल लें",
    monitorMsg:"आपके लक्षण हल्के हैं। 24-48 घंटे आराम करें।",
    consultMsg:"हम 24 घंटे में डॉक्टर से मिलने की सलाह देते हैं।",
    emergencyMsg:"कृपया तुरंत आपातकालीन देखभाल लें। 112 पर कॉल करें।",
    call112:"112 कॉल करें",findHospital:"अस्पताल खोजें",
    nearbyTitle:"नजदीकी स्वास्थ्य सेवाएं",all:"सभी",hospitals:"अस्पताल",clinics:"क्लीनिक",pharmacies:"दवाखाना",
    open:"खुला",closed:"बंद",call:"कॉल",directions:"दिशा",
    offlineNote:"कैश्ड डेटा दिखाया जा रहा है।",educationTitle:"स्वास्थ्य सुझाव और गाइड",
    consultTitle:"सहायता पाएं",premiumFeature:"प्रीमियम सुविधा",
    upgradeMsg:"टेलीकंसल्टेशन ₹99/माह में उपलब्ध है।",
    upgrade:"अभी अपग्रेड करें",maybeLater:"बाद में",
    typeMessage:"अपने लक्षण बताएं...",doctor:"डॉ. प्रिया (ऑनलाइन)",
    goodMorning:"सुप्रभात",goodAfternoon:"नमस्कार",goodEvening:"शुभ संध्या",
    howAreYou:"आज आप कैसा महसूस कर रहे हैं?",quickActions:"त्वरित कार्य",
    supported:"UN SDG 3 द्वारा समर्थित · अच्छा स्वास्थ्य",
    symptomsSelected:"लक्षण चुने गए",tryAgain:"फिर कोशिश करें",done:"हो गया",
    disclaimer:"⚠ यह ऐप केवल सामान्य मार्गदर्शन प्रदान करता है।",
    freePlan:"मुफ्त योजना",premiumPlan:"प्रीमियम योजना",
    upgradeTitle:"पूर्ण पहुंच अनलॉक करें",free1:"लक्षण जांचकर्ता",free2:"स्वास्थ्य शिक्षा",free3:"नजदीकी सेवाएं",free4:"AI स्वास्थ्य सहायक",
    paid1:"लाइव टेलीकंसल्टेशन",paid2:"डॉक्टर इतिहास",paid3:"प्राथमिकता सहायता",
    talkAI:"AI से बात करें",talkAIDesc:"मुफ्त · तत्काल सहायता",talkDoctorDesc:"प्रीमियम · असली डॉक्टर",
    aiName:"MediAI",aiDisclaimer:"AI केवल सामान्य मार्गदर्शन देता है — निदान नहीं।",
    aiWelcome:"नमस्ते! अपनी समस्या बताएं। मैं संक्षिप्त और ईमानदार रहूंगा।",
    consultHubTitle:"हम कैसे मदद कर सकते हैं?",consultHubSubtitle:"आज आप कैसे सहायता लेना चाहते हैं?",
    aiChatTitle:"AI स्वास्थ्य सहायक",thinking:"सोच रहा हूं...",clearChat:"साफ करें",
  },
  ta: {
    appName:"மெடிபிரிட்ஜ் லைட்",home:"முகப்பு",symptoms:"அறிகுறிகள்",nearby:"அருகில்",education:"குறிப்புகள்",consult:"ஆலோசனை",
    checkSymptoms:"அறிகுறி சோதனை",findCare:"சிகிச்சை தேடு",healthTips:"சுகாதார குறிப்புகள்",talkDoctor:"மருத்துவர்",
    selectSymptoms:"உங்கள் அறிகுறிகளை தேர்ந்தெடுக்கவும்",checkNow:"இப்போது சோதிக்கவும்",clearAll:"அனைத்தும் நீக்கு",
    resultMonitor:"கண்காணிக்கவும்",resultConsult:"விரைவில் மருத்துவர்",resultEmergency:"அவசர சிகிச்சை பெறுங்கள்",
    monitorMsg:"உங்கள் அறிகுறிகள் சாதாரணமானவை. 24-48 மணி நேரம் ஓய்வு எடுங்கள்.",
    consultMsg:"24 மணி நேரத்திற்குள் மருத்துவரை சந்திக்க பரிந்துரைக்கிறோம்.",
    emergencyMsg:"உடனடியாக அவசர சிகிச்சை பெறுங்கள். 112 ஐ அழைக்கவும்.",
    call112:"112 அழைக்கவும்",findHospital:"மருத்துவமனை கண்டுபிடி",
    nearbyTitle:"அருகில் உள்ள சுகாதார சேவைகள்",all:"அனைத்தும்",hospitals:"மருத்துவமனைகள்",clinics:"கிளினிக்குகள்",pharmacies:"மருந்தகங்கள்",
    open:"திறந்திருக்கிறது",closed:"மூடப்பட்டுள்ளது",call:"அழைக்கவும்",directions:"வழி",
    offlineNote:"தற்காலிக தரவு காட்டப்படுகிறது.",educationTitle:"சுகாதார குறிப்புகள்",
    consultTitle:"உதவி பெறுங்கள்",premiumFeature:"பிரீமியம் அம்சம்",
    upgradeMsg:"தொலை ஆலோசனை ₹99/மாதம்.",
    upgrade:"இப்போது மேம்படுத்து",maybeLater:"பின்னர்",
    typeMessage:"உங்கள் அறிகுறிகளை விவரிக்கவும்...",doctor:"டாக்டர் பிரியா (ஆன்லைன்)",
    goodMorning:"காலை வணக்கம்",goodAfternoon:"மதிய வணக்கம்",goodEvening:"மாலை வணக்கம்",
    howAreYou:"இன்று உங்களுக்கு எப்படி இருக்கிறது?",quickActions:"விரைவு நடவடிக்கைகள்",
    supported:"UN SDG 3 ஆதரவு · நல்ல ஆரோக்கியம்",
    symptomsSelected:"அறிகுறிகள் தேர்ந்தெடுக்கப்பட்டன",tryAgain:"மீண்டும் முயற்சி",done:"முடிந்தது",
    disclaimer:"⚠ இந்த செயலி பொதுவான வழிகாட்டுதல் மட்டுமே வழங்குகிறது.",
    freePlan:"இலவச திட்டம்",premiumPlan:"பிரீமியம் திட்டம்",
    upgradeTitle:"முழு அணுகலை திறக்கவும்",free1:"அறிகுறி சோதனை",free2:"சுகாதார கல்வி",free3:"அருகில் சேவைகள்",free4:"AI சுகாதார உதவியாளர்",
    paid1:"நேரடி ஆலோசனை",paid2:"மருத்துவர் வரலாறு",paid3:"முன்னுரிமை ஆதரவு",
    talkAI:"AI உடன் பேசுங்கள்",talkAIDesc:"இலவசம் · உடனடி வழிகாட்டுதல்",talkDoctorDesc:"பிரீமியம் · உண்மையான மருத்துவர்",
    aiName:"MediAI",aiDisclaimer:"AI பொதுவான வழிகாட்டுதல் மட்டுமே — நோய் கண்டறிதல் அல்ல.",
    aiWelcome:"வணக்கம்! உங்கள் பிரச்சனையை சொல்லுங்கள். நான் சுருக்கமாகவும் நேர்மையாகவும் பதிலளிப்பேன்.",
    consultHubTitle:"நாங்கள் எப்படி உதவலாம்?",consultHubSubtitle:"இன்று எப்படி உதவி பெற விரும்புகிறீர்கள்?",
    aiChatTitle:"AI சுகாதார உதவியாளர்",thinking:"யோசிக்கிறேன்...",clearChat:"நீக்கு",
  },
};

const SYMPTOMS = [
  {id:1,icon:"🌡️",en:"Fever",hi:"बुखार",ta:"காய்ச்சல்",severity:"medium"},
  {id:2,icon:"🤕",en:"Headache",hi:"सिर दर्द",ta:"தலைவலி",severity:"low"},
  {id:3,icon:"❤️‍🩹",en:"Chest Pain",hi:"सीने में दर्द",ta:"மார்பு வலி",severity:"high"},
  {id:4,icon:"😷",en:"Cough",hi:"खांसी",ta:"இருமல்",severity:"low"},
  {id:5,icon:"🫁",en:"Difficulty Breathing",hi:"सांस की कठिनाई",ta:"மூச்சு திணறல்",severity:"high"},
  {id:6,icon:"🤢",en:"Vomiting",hi:"उल्टी",ta:"வாந்தி",severity:"medium"},
  {id:7,icon:"😣",en:"Diarrhea",hi:"दस्त",ta:"வயிற்றுப்போக்கு",severity:"medium"},
  {id:8,icon:"🔴",en:"Skin Rash",hi:"चकत्ते",ta:"தடிப்பு",severity:"low"},
  {id:9,icon:"💫",en:"Dizziness",hi:"चक्कर",ta:"தலைச்சுற்று",severity:"medium"},
  {id:10,icon:"🩸",en:"Severe Bleeding",hi:"गंभीर रक्तस्राव",ta:"கடுமையான இரத்தப்போக்கு",severity:"high"},
  {id:11,icon:"😵",en:"Unconsciousness",hi:"बेहोशी",ta:"உணர்விழப்பு",severity:"high"},
  {id:12,icon:"🫃",en:"Stomach Pain",hi:"पेट दर्द",ta:"வயிற்று வலி",severity:"medium"},
  {id:13,icon:"🤧",en:"Sore Throat",hi:"गले में खराश",ta:"தொண்டை வலி",severity:"low"},
  {id:14,icon:"🦴",en:"Body Ache",hi:"शरीर दर्द",ta:"உடல் வலி",severity:"low"},
  {id:15,icon:"👁️",en:"Eye Irritation",hi:"आंखों में जलन",ta:"கண் எரிச்சல்",severity:"low"},
  {id:16,icon:"🍬",en:"High Blood Sugar",hi:"उच्च शर्करा",ta:"அதிக சர்க்கரை",severity:"medium"},
];

function assessSymptoms(ids){
  const high=[3,5,10,11],medium=[1,6,7,9,12,16];
  if(!ids.length)return null;
  if(ids.some(id=>high.includes(id)))return"emergency";
  if(ids.filter(id=>medium.includes(id)).length>=2||ids.length>=4)return"consult";
  return"monitor";
}

const NEARBY=[
  {id:1,type:"hospital",icon:"🏥",name:"District General Hospital",distance:"2.3 km",phone:"+91 98765 43210",address:"Main Road, Town Centre",open:true},
  {id:2,type:"clinic",icon:"🩺",name:"Dr. Sharma's Clinic",distance:"0.8 km",phone:"+91 87654 32109",address:"Near Bus Stand",open:true},
  {id:3,type:"pharmacy",icon:"💊",name:"MedPlus Pharmacy",distance:"0.4 km",phone:"+91 76543 21098",address:"Market Street",open:true},
  {id:4,type:"clinic",icon:"🩺",name:"Community Health Centre",distance:"1.5 km",phone:"+91 65432 10987",address:"Ward 4, Village Road",open:false},
  {id:5,type:"hospital",icon:"🏥",name:"Taluk Hospital",distance:"5.1 km",phone:"+91 54321 09876",address:"Highway NH-48",open:true},
  {id:6,type:"pharmacy",icon:"💊",name:"Jan Aushadhi Store",distance:"1.2 km",phone:"+91 43210 98765",address:"Co-operative Area",open:true},
];

const ARTICLES=[
  {id:1,icon:"🌡️",bg:"#FFF0E8",accent:"#FF6B35",en:{title:"Managing Fever at Home",body:"• Rest and stay hydrated — drink at least 8 glasses of water\n• Apply a cool, damp cloth to the forehead\n• Take paracetamol if temperature is above 38.5°C\n• Avoid cold baths — they can cause shivering\n• Seek help if fever exceeds 39.5°C or lasts more than 3 days"},hi:{title:"घर पर बुखार का प्रबंधन",body:"• आराम करें और खूब पानी पिएं\n• माथे पर ठंडा कपड़ा रखें\n• 38.5°C से ऊपर होने पर पेरासिटामोल लें\n• 39.5°C से ऊपर या 3 दिन से अधिक होने पर डॉक्टर से मिलें"},ta:{title:"வீட்டில் காய்ச்சல் மேலாண்மை",body:"• ஓய்வு எடுங்கள், தண்ணீர் குடிக்கவும்\n• நெற்றியில் குளிர்ந்த துணி வையுங்கள்\n• 38.5°C க்கு மேல் பாராசிட்டமால் எடுங்கள்"}},
  {id:2,icon:"🩹",bg:"#E8F4FF",accent:"#2563EB",en:{title:"Basic First Aid Guide",body:"• Cuts: Clean wound, apply pressure, bandage firmly\n• Burns: Cool under running water for 20 minutes\n• Choking: Give 5 back blows, then 5 abdominal thrusts\n• Fainting: Lay person flat, elevate legs\n• Snake bite: Immobilise limb, rush to hospital"},hi:{title:"प्राथमिक चिकित्सा गाइड",body:"• कटना: साफ करें, दबाव दें, पट्टी बांधें\n• जलना: 20 मिनट पानी से ठंडा करें\n• बेहोशी: लिटाएं, पैर ऊपर करें\n• सांप का काटना: अस्पताल जाएं"},ta:{title:"அடிப்படை முதலுதவி",body:"• வெட்டுகள்: சுத்தம், அழுத்தம், கட்டு\n• தீக்காயம்: 20 நிமிடம் தண்ணீரில்\n• மயக்கம்: கால்களை உயர்த்துங்கள்"}},
  {id:3,icon:"🤧",bg:"#E8FFF2",accent:"#10B981",en:{title:"Cold & Flu Recovery",body:"• Rest at home for 5–7 days\n• Drink warm fluids: ginger tea, turmeric milk, soup\n• Inhale steam for 10 minutes\n• Gargle warm salt water twice daily\n• Wear a mask if you must go outdoors"},hi:{title:"सर्दी-जुकाम से उबरना",body:"• 5-7 दिन घर पर आराम करें\n• गर्म पेय पिएं\n• 10 मिनट भाप लें\n• दिन में दो बार गर्म नमक पानी से गरारे करें"},ta:{title:"சளி & காய்ச்சல்",body:"• 5-7 நாட்கள் வீட்டில் ஓய்வு\n• சூடான திரவங்கள் குடிக்கவும்\n• 10 நிமிடம் நீராவி சுவாசிக்கவும்"}},
  {id:4,icon:"💧",bg:"#F0E8FF",accent:"#7C3AED",en:{title:"Water Safety & Hygiene",body:"• Boil water for at least 1 minute before drinking\n• Wash hands for 20 seconds before eating\n• Use ORS for diarrhea\n• Keep toilets clean"},hi:{title:"पानी की सुरक्षा",body:"• पीने से पहले पानी 1 मिनट उबालें\n• खाने से पहले 20 सेकंड हाथ धोएं\n• दस्त के लिए ORS लें"},ta:{title:"தண்ணீர் பாதுகாப்பு",body:"• குடிக்கும் முன் கொதிக்க வையுங்கள்\n• கைகழுவுங்கள்\n• வயிற்றுப்போக்கிற்கு ORS"}},
  {id:5,icon:"🩺",bg:"#FFF8E0",accent:"#D97706",en:{title:"Diabetes Self-Care",body:"• Check blood sugar regularly\n• Eat small, frequent meals every 3–4 hours\n• Avoid sugar, fried foods, soft drinks\n• Exercise 30 minutes every day\n• Never skip medications"},hi:{title:"मधुमेह स्व-देखभाल",body:"• नियमित रक्त शर्करा जांचें\n• हर 3-4 घंटे में छोटा भोजन लें\n• चीनी और तला खाना न लें\n• रोज 30 मिनट तेज चलें"},ta:{title:"நீரிழிவு பராமரிப்பு",body:"• இரத்த சர்க்கரையை சோதிக்கவும்\n• சிறிய உணவு சாப்பிடுங்கள்\n• தினமும் 30 நிமிடம் நடைப்பயிற்சி"}},
  {id:6,icon:"👶",bg:"#FFE8F4",accent:"#DB2777",en:{title:"Mother & Child Health",body:"• Attend all 8+ antenatal check-ups\n• Take iron and folic acid as prescribed\n• Breastfeed exclusively for the first 6 months\n• Vaccinate children on schedule"},hi:{title:"माँ और बच्चे का स्वास्थ्य",body:"• गर्भावस्था में 8+ जांचें करवाएं\n• आयरन और फोलिक एसिड लें\n• 6 महीने केवल स्तनपान कराएं"},ta:{title:"தாய் மற்றும் குழந்தை",body:"• கர்ப்ப காலத்தில் 8+ முறை பரிசோதனை\n• இரும்பு மற்றும் ஃபோலிக் அமிலம்\n• 6 மாதம் தாய்ப்பால் மட்டும்"}},
];

const DR_RESPONSES=[
  "Hello! I'm Dr. Priya. Please describe how you're feeling today.",
  "I understand. How long have you had these symptoms?",
  "Are you able to eat and drink normally?",
  "Based on what you've described, rest and take paracetamol for discomfort. Monitor closely for 24 hours.",
  "If symptoms worsen — especially high fever or breathing difficulty — please visit your nearest clinic immediately.",
  "Is there anything else you'd like to discuss?",
];

const AI_SYSTEM_PROMPT=`You are MediAI, a concise health guidance assistant in a rural India healthcare app.

RULES — strictly follow all of these:
- Max 55 words per response. Never exceed this.
- Simple, plain language only. No medical jargon.
- Never diagnose. Never name specific drugs to take.
- If symptoms are serious (chest pain, can't breathe, unconscious, severe bleeding, stroke signs): say "This sounds serious — call 112 or go to a hospital now." Then stop.
- If unsure or symptoms need examination: say "You should see a doctor." briefly explain why, then stop.
- For mild issues: give 1-2 simple tips. End with: "Monitor for 24 hours. See a doctor if it gets worse."
- No lengthy explanations. Short. Direct. Honest.`;

const C={
  primary:"#1A7A5E",primaryDark:"#115740",primaryLight:"#E8F7F2",primaryMid:"#2D9E7A",
  accent:"#FF5A36",warning:"#F59E0B",warningLight:"#FFFBEB",
  safe:"#10B981",safeLight:"#ECFDF5",
  text:"#1A2E24",textMid:"#4B6558",textLight:"#8BA898",
  bg:"#F6FAF8",card:"#FFFFFF",border:"#D8EDEA",
  premium:"#7C3AED",premiumLight:"#F3EEFF",
  ai:"#0EA5E9",aiLight:"#E0F2FE",
  navH:64,headerH:60,
};

export default function MediBridgeLite(){
  const[screen,setScreen]=useState("home");
  const[prevScreen,setPrevScreen]=useState(null);
  const[lang,setLang]=useState("en");
  const[showLangPicker,setShowLangPicker]=useState(false);
  const[selSymptoms,setSelSymptoms]=useState([]);
  const[assessResult,setAssessResult]=useState(null);
  const[symptomStep,setSymptomStep]=useState("select");
  const[nearbyFilter,setNearbyFilter]=useState("all");
  const[openArticle,setOpenArticle]=useState(null);
  const[isPremium,setIsPremium]=useState(false);
  const[showUpgrade,setShowUpgrade]=useState(false);
  // Doctor
  const[drMsgs,setDrMsgs]=useState([{from:"doctor",text:DR_RESPONSES[0],time:"Now"}]);
  const[drInput,setDrInput]=useState("");
  const[drIdx,setDrIdx]=useState(1);
  const[drTyping,setDrTyping]=useState(false);
  // AI
  const[aiMsgs,setAiMsgs]=useState([]);
  const[aiInput,setAiInput]=useState("");
  const[aiLoading,setAiLoading]=useState(false);
  const[aiHistory,setAiHistory]=useState([]);

  const drEndRef=useRef(null);
  const aiEndRef=useRef(null);
  const t=T[lang];
  const hour=new Date().getHours();
  const greeting=hour<12?t.goodMorning:hour<17?t.goodAfternoon:t.goodEvening;
  const now=()=>new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});

  const go=(s)=>{setPrevScreen(screen);setScreen(s);};

  useEffect(()=>{drEndRef.current?.scrollIntoView({behavior:"smooth"});},[drMsgs,drTyping]);
  useEffect(()=>{aiEndRef.current?.scrollIntoView({behavior:"smooth"});},[aiMsgs,aiLoading]);
  useEffect(()=>{
    if(screen==="aichat"&&aiMsgs.length===0){
      setAiMsgs([{from:"ai",text:t.aiWelcome,time:now()}]);
    }
  },[screen]);

  const toggleSymptom=(id)=>setSelSymptoms(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);
  const handleAssess=()=>{ if(!selSymptoms.length)return; setAssessResult(assessSymptoms(selSymptoms)); setSymptomStep("result"); };

  const handleDrSend=()=>{
    if(!drInput.trim())return;
    setDrMsgs(p=>[...p,{from:"user",text:drInput.trim(),time:now()}]);
    setDrInput(""); setDrTyping(true);
    setTimeout(()=>{
      setDrTyping(false);
      setDrMsgs(p=>[...p,{from:"doctor",text:DR_RESPONSES[drIdx%DR_RESPONSES.length],time:now()}]);
      setDrIdx(i=>i+1);
    },1400+Math.random()*700);
  };

  const handleAiSend=async()=>{
    if(!aiInput.trim()||aiLoading)return;
    const txt=aiInput.trim();
    setAiMsgs(p=>[...p,{from:"user",text:txt,time:now()}]);
    setAiInput(""); setAiLoading(true);
    const hist=[...aiHistory,{role:"user",parts:[{text:txt}]}];
    setAiHistory(hist);
    try{
      const GEMINI_KEY="AIzaSyBrO8P2hjONTqXVYrg6J7gmDap8UUih4eA"; // Replace with real Gemini API key
      const res=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          system_instruction:{parts:[{text:AI_SYSTEM_PROMPT}]},
          contents:hist,
        }),
      });
      const data=await res.json();
      const reply=data?.candidates?.[0]?.content?.parts?.[0]?.text||"Sorry, couldn't process that. Please try again.";
      setAiMsgs(p=>[...p,{from:"ai",text:reply,time:now()}]);
      setAiHistory(p=>[...p,{role:"model",parts:[{text:reply}]}]);
    }catch{
      setAiMsgs(p=>[...p,{from:"ai",text:"Connection error. Please check your internet and try again.",time:now()}]);
    }finally{ setAiLoading(false); }
  };

  const clearAiChat=()=>{ setAiMsgs([{from:"ai",text:t.aiWelcome,time:now()}]); setAiHistory([]); };

  const filteredNearby=nearbyFilter==="all"?NEARBY:NEARBY.filter(p=>p.type===(nearbyFilter==="hospitals"?"hospital":nearbyFilter==="clinics"?"clinic":"pharmacy"));

  const headerTitles={symptoms:t.checkSymptoms,nearby:t.nearbyTitle,education:t.educationTitle,consult:t.consultTitle,aichat:t.aiChatTitle,doctorchat:t.doctor};

  return(
    <div style={{fontFamily:"'Nunito','Segoe UI',system-ui,sans-serif",background:C.bg,minHeight:"100vh",maxWidth:430,margin:"0 auto",position:"relative",overflowX:"hidden"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:0}
        button{cursor:pointer;border:none;outline:none;font-family:inherit}
        input{font-family:inherit;outline:none}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
        @keyframes blink{0%,80%,100%{opacity:0}40%{opacity:1}}
        .anim{animation:fadeUp 0.32s ease both}
        .pulse-anim{animation:pulse 2s ease-in-out infinite}
        .dot1{animation:blink 1.4s infinite;animation-delay:0s}
        .dot2{animation:blink 1.4s infinite;animation-delay:.2s}
        .dot3{animation:blink 1.4s infinite;animation-delay:.4s}
        .tap:active{transform:scale(0.96);opacity:.88}
        .chip:active{transform:scale(0.93)}
      `}</style>

      {/* LANG MODAL */}
      {showLangPicker&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:999,display:"flex",alignItems:"flex-end"}} onClick={()=>setShowLangPicker(false)}>
          <div style={{background:C.card,width:"100%",maxWidth:430,margin:"0 auto",borderRadius:"24px 24px 0 0",padding:"24px 20px 40px",animation:"fadeUp .25s ease"}} onClick={e=>e.stopPropagation()}>
            <div style={{width:40,height:4,background:C.border,borderRadius:4,margin:"0 auto 20px"}}/>
            <p style={{fontWeight:800,fontSize:18,color:C.text,marginBottom:16}}>🌐 Select Language</p>
            {[["en","English"],["hi","हिंदी"],["ta","தமிழ்"]].map(([code,label])=>(
              <button key={code} onClick={()=>{setLang(code);setShowLangPicker(false);}}
                style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"15px 18px",marginBottom:10,borderRadius:14,background:lang===code?C.primaryLight:"#F6F8F7",border:`2px solid ${lang===code?C.primary:"transparent"}`,fontSize:16,fontWeight:700,color:lang===code?C.primary:C.text}}>
                <span>{label}</span>{lang===code&&<span style={{color:C.primary}}>✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* UPGRADE MODAL */}
      {showUpgrade&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.55)",zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
          <div style={{background:C.card,borderRadius:24,padding:"28px 22px",width:"100%",maxWidth:390,animation:"fadeUp .25s ease"}}>
            <div style={{textAlign:"center",marginBottom:20}}>
              <div style={{fontSize:48,marginBottom:8}}>👨‍⚕️</div>
              <h2 style={{fontSize:22,fontWeight:900,color:C.text}}>{t.upgradeTitle}</h2>
              <p style={{color:C.textMid,marginTop:8,fontSize:14,lineHeight:1.5}}>{t.upgradeMsg}</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20}}>
              <div style={{background:C.primaryLight,borderRadius:14,padding:"14px 12px"}}>
                <p style={{fontWeight:800,color:C.primary,fontSize:13,marginBottom:8}}>✓ {t.freePlan}</p>
                {[t.free1,t.free2,t.free3,t.free4].map(f=><p key={f} style={{fontSize:11,color:C.textMid,marginBottom:3}}>• {f}</p>)}
              </div>
              <div style={{background:C.premiumLight,borderRadius:14,padding:"14px 12px",border:`2px solid ${C.premium}`}}>
                <p style={{fontWeight:800,color:C.premium,fontSize:13,marginBottom:8}}>⭐ {t.premiumPlan}</p>
                {[t.paid1,t.paid2,t.paid3].map(f=><p key={f} style={{fontSize:11,color:C.textMid,marginBottom:3}}>• {f}</p>)}
              </div>
            </div>
            <button onClick={()=>{setIsPremium(true);setShowUpgrade(false);go("doctorchat");}}
              style={{width:"100%",padding:"16px",borderRadius:14,background:`linear-gradient(135deg,${C.premium},#9333EA)`,color:"#fff",fontWeight:800,fontSize:16,marginBottom:10}}>
              {t.upgrade} — ₹99/month
            </button>
            <button onClick={()=>setShowUpgrade(false)}
              style={{width:"100%",padding:"14px",borderRadius:14,background:"#F0F0F0",color:C.textMid,fontWeight:700,fontSize:15}}>
              {t.maybeLater}
            </button>
          </div>
        </div>
      )}

      {/* ARTICLE MODAL */}
      {openArticle&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:998,display:"flex",alignItems:"flex-end"}}>
          <div style={{background:C.card,width:"100%",maxWidth:430,margin:"0 auto",borderRadius:"24px 24px 0 0",padding:"24px 20px 48px",maxHeight:"80vh",overflowY:"auto",animation:"fadeUp .3s ease"}}>
            <div style={{width:40,height:4,background:C.border,borderRadius:4,margin:"0 auto 20px"}}/>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
              <div style={{width:52,height:52,borderRadius:14,background:openArticle.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>{openArticle.icon}</div>
              <h2 style={{fontSize:18,fontWeight:800,color:C.text,flex:1}}>{openArticle[lang].title}</h2>
            </div>
            <div style={{background:openArticle.bg,borderRadius:14,padding:"16px",borderLeft:`4px solid ${openArticle.accent}`}}>
              {openArticle[lang].body.split("\n").map((l,i)=><p key={i} style={{fontSize:15,color:C.text,lineHeight:1.7,marginBottom:4}}>{l}</p>)}
            </div>
            <button onClick={()=>setOpenArticle(null)} style={{width:"100%",marginTop:20,padding:"16px",borderRadius:14,background:C.primary,color:"#fff",fontWeight:800,fontSize:16}}>{t.done}</button>
          </div>
        </div>
      )}

      {/* TOP HEADER */}
      {screen!=="home"&&(
        <div style={{position:"sticky",top:0,zIndex:100,background:C.card,borderBottom:`1px solid ${C.border}`,padding:"0 16px",height:C.headerH,display:"flex",alignItems:"center",gap:12}}>
          <button onClick={()=>{
            if(screen==="aichat"||screen==="doctorchat")go("consult");
            else{setScreen(prevScreen||"home");setSymptomStep("select");setAssessResult(null);}
          }} style={{width:38,height:38,borderRadius:10,background:C.primaryLight,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>←</button>
          <h1 style={{fontWeight:800,fontSize:17,color:C.text,flex:1}}>{headerTitles[screen]||""}</h1>
          {screen==="aichat"?(
            <button onClick={clearAiChat} style={{padding:"7px 12px",borderRadius:10,background:C.aiLight,color:C.ai,fontWeight:800,fontSize:12}}>{t.clearChat}</button>
          ):(
            <button onClick={()=>setShowLangPicker(true)} style={{width:38,height:38,borderRadius:10,background:C.primaryLight,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800,color:C.primary}}>{lang.toUpperCase()}</button>
          )}
        </div>
      )}

      {/* SCREENS */}
      <div style={{paddingBottom:(screen==="aichat"||screen==="doctorchat")?0:80}}>

        {/* ── HOME ── */}
        {screen==="home"&&(
          <div className="anim">
            <div style={{background:`linear-gradient(145deg,${C.primaryDark} 0%,${C.primaryMid} 60%,#3BB88A 100%)`,padding:"20px 20px 28px",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:-30,right:-30,width:120,height:120,borderRadius:"50%",background:"rgba(255,255,255,.07)"}}/>
              <div style={{position:"absolute",bottom:-20,left:-20,width:90,height:90,borderRadius:"50%",background:"rgba(255,255,255,.05)"}}/>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:18,position:"relative"}}>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                    <div style={{width:28,height:28,borderRadius:8,background:"rgba(255,255,255,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>⚕️</div>
                    <span style={{color:"rgba(255,255,255,.85)",fontWeight:800,fontSize:14}}>MediBridge Lite</span>
                  </div>
                  <h1 style={{color:"#fff",fontWeight:900,fontSize:26,lineHeight:1.2,marginBottom:4}}>{greeting}! 👋</h1>
                  <p style={{color:"rgba(255,255,255,.75)",fontSize:14,fontWeight:500}}>{t.howAreYou}</p>
                </div>
                <button onClick={()=>setShowLangPicker(true)} style={{padding:"7px 12px",borderRadius:10,background:"rgba(255,255,255,.18)",color:"#fff",fontWeight:800,fontSize:13}}>🌐 {lang.toUpperCase()}</button>
              </div>
              <div className="pulse-anim" style={{background:"rgba(255,90,54,.95)",borderRadius:14,padding:"12px 16px",display:"flex",alignItems:"center",gap:10}}>
                <span style={{fontSize:22}}>🚨</span>
                <div style={{flex:1}}><p style={{color:"#fff",fontWeight:800,fontSize:13}}>Emergency? Call 112</p><p style={{color:"rgba(255,255,255,.8)",fontSize:11}}>Free · 24/7 · All India</p></div>
                <a href="tel:112" style={{textDecoration:"none"}}><button style={{padding:"8px 14px",borderRadius:9,background:"#fff",color:C.accent,fontWeight:800,fontSize:13}}>CALL</button></a>
              </div>
            </div>

            <div style={{padding:"9px 20px",background:C.primaryLight,display:"flex",alignItems:"center",gap:8,justifyContent:"center"}}>
              <span style={{fontSize:14}}>🌍</span><span style={{fontSize:12,fontWeight:700,color:C.primary}}>{t.supported}</span>
            </div>

            <div style={{padding:"20px 16px 8px"}}>
              <p style={{fontWeight:800,fontSize:16,color:C.text,marginBottom:14}}>{t.quickActions}</p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                {[
                  {label:t.checkSymptoms,icon:"🔍",desc:"Rule-based check",color:"#E8F7F2",scr:"symptoms"},
                  {label:t.findCare,icon:"📍",desc:"Clinics & hospitals",color:"#E8EEFF",scr:"nearby"},
                  {label:t.healthTips,icon:"📚",desc:"Easy guides",color:"#FFF3E8",scr:"education"},
                  {label:t.consult,icon:"💬",desc:"AI + Doctor",color:"#E0F2FE",scr:"consult"},
                ].map(a=>(
                  <button key={a.label} className="tap" onClick={()=>go(a.scr)}
                    style={{background:C.card,borderRadius:18,padding:"18px 16px",boxShadow:"0 2px 12px rgba(0,0,0,.06)",border:`1px solid ${C.border}`,textAlign:"left",transition:"transform .15s"}}>
                    <div style={{width:44,height:44,borderRadius:12,background:a.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,marginBottom:10}}>{a.icon}</div>
                    <p style={{fontWeight:800,fontSize:14,color:C.text,marginBottom:3}}>{a.label}</p>
                    <p style={{fontSize:12,color:C.textLight}}>{a.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div style={{padding:"12px 16px"}}>
              <p style={{fontWeight:800,fontSize:15,color:C.text,marginBottom:12}}>📊 Daily Health Tips</p>
              <div style={{display:"flex",gap:10,overflowX:"auto",paddingBottom:4}}>
                {[{val:"8",unit:"glasses",label:"Water daily",icon:"💧",bg:"#E8F4FF"},{val:"7–8",unit:"hours",label:"Sleep needed",icon:"😴",bg:"#F0E8FF"},{val:"30",unit:"minutes",label:"Exercise/day",icon:"🏃",bg:"#E8FFF2"},{val:"5",unit:"servings",label:"Fruits & veg",icon:"🥦",bg:"#FFF8E0"}].map(s=>(
                  <div key={s.label} style={{minWidth:100,background:s.bg,borderRadius:14,padding:"12px",textAlign:"center",flexShrink:0}}>
                    <div style={{fontSize:22,marginBottom:4}}>{s.icon}</div>
                    <p style={{fontWeight:900,fontSize:18,color:C.text}}>{s.val}</p>
                    <p style={{fontSize:10,color:C.textMid,fontWeight:700}}>{s.unit}</p>
                    <p style={{fontSize:10,color:C.textLight}}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{margin:"8px 16px 0",padding:"12px 14px",background:C.warningLight,borderRadius:12,border:`1px solid #FDE68A`}}>
              <p style={{fontSize:11,color:"#92400E",lineHeight:1.5,fontWeight:600}}>{t.disclaimer}</p>
            </div>
          </div>
        )}

        {/* ── SYMPTOMS ── */}
        {screen==="symptoms"&&(
          <div className="anim" style={{padding:"16px"}}>
            {symptomStep==="select"&&(
              <>
                <div style={{background:C.primaryLight,borderRadius:16,padding:"14px 16px",marginBottom:16,display:"flex",gap:10}}>
                  <span style={{fontSize:22}}>ℹ️</span>
                  <div>
                    <p style={{fontWeight:700,color:C.primary,fontSize:14}}>{t.selectSymptoms}</p>
                    <p style={{color:C.textMid,fontSize:12,marginTop:3}}>{selSymptoms.length>0?`${selSymptoms.length} ${t.symptomsSelected}`:"Tap all that apply"}</p>
                  </div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:20}}>
                  {SYMPTOMS.map((s,i)=>{
                    const sel=selSymptoms.includes(s.id),hi=s.severity==="high";
                    return(
                      <button key={s.id} className="chip" onClick={()=>toggleSymptom(s.id)}
                        style={{padding:"14px 12px",borderRadius:14,textAlign:"left",background:sel?(hi?"#FFF0ED":C.primaryLight):C.card,border:`2px solid ${sel?(hi?C.accent:C.primary):C.border}`,transition:"all .15s",animationDelay:`${i*.04}s`}}>
                        <div style={{fontSize:24,marginBottom:6}}>{s.icon}</div>
                        <p style={{fontWeight:700,fontSize:13,color:sel?(hi?C.accent:C.primary):C.text}}>{s[lang]||s.en}</p>
                        {hi&&<p style={{fontSize:10,color:C.accent,fontWeight:700,marginTop:2}}>⚠ High risk</p>}
                        {sel&&<div style={{width:18,height:18,borderRadius:"50%",background:hi?C.accent:C.primary,display:"flex",alignItems:"center",justifyContent:"center",marginTop:6}}><span style={{color:"#fff",fontSize:10,fontWeight:900}}>✓</span></div>}
                      </button>
                    );
                  })}
                </div>
                <div style={{display:"flex",gap:10}}>
                  {selSymptoms.length>0&&<button onClick={()=>setSelSymptoms([])} style={{flex:1,padding:"15px",borderRadius:14,background:"#F0F0F0",color:C.textMid,fontWeight:700,fontSize:15}}>{t.clearAll}</button>}
                  <button onClick={handleAssess} style={{flex:2,padding:"15px",borderRadius:14,background:selSymptoms.length?`linear-gradient(135deg,${C.primary},${C.primaryMid})`:"#D1D5DB",color:"#fff",fontWeight:800,fontSize:16}}>{t.checkNow} →</button>
                </div>
              </>
            )}
            {symptomStep==="result"&&assessResult&&(
              <div className="anim">
                {assessResult==="monitor"&&<div style={{background:C.safeLight,border:`2px solid ${C.safe}`,borderRadius:20,padding:"28px 20px",textAlign:"center",marginBottom:20}}><div style={{fontSize:60,marginBottom:12}}>✅</div><h2 style={{fontWeight:900,fontSize:22,color:"#065F46",marginBottom:10}}>{t.resultMonitor}</h2><p style={{color:"#047857",fontSize:15,lineHeight:1.6}}>{t.monitorMsg}</p></div>}
                {assessResult==="consult"&&<div style={{background:C.warningLight,border:`2px solid ${C.warning}`,borderRadius:20,padding:"28px 20px",textAlign:"center",marginBottom:20}}><div style={{fontSize:60,marginBottom:12}}>⚠️</div><h2 style={{fontWeight:900,fontSize:22,color:"#92400E",marginBottom:10}}>{t.resultConsult}</h2><p style={{color:"#B45309",fontSize:15,lineHeight:1.6}}>{t.consultMsg}</p></div>}
                {assessResult==="emergency"&&(
                  <div style={{background:"#FFF0ED",border:`2px solid ${C.accent}`,borderRadius:20,padding:"28px 20px",textAlign:"center",marginBottom:20}}>
                    <div className="pulse-anim" style={{fontSize:60,marginBottom:12}}>🚨</div>
                    <h2 style={{fontWeight:900,fontSize:22,color:"#B91C1C",marginBottom:10}}>{t.resultEmergency}</h2>
                    <p style={{color:"#DC2626",fontSize:15,lineHeight:1.6,marginBottom:16}}>{t.emergencyMsg}</p>
                    <div style={{display:"flex",gap:10}}>
                      <a href="tel:112" style={{flex:1,textDecoration:"none"}}><button style={{width:"100%",padding:"14px",borderRadius:12,background:C.accent,color:"#fff",fontWeight:800,fontSize:15}}>🆘 {t.call112}</button></a>
                      <button onClick={()=>go("nearby")} style={{flex:1,padding:"14px",borderRadius:12,background:"#fff",border:`2px solid ${C.accent}`,color:C.accent,fontWeight:800,fontSize:15}}>🏥 {t.findHospital}</button>
                    </div>
                  </div>
                )}
                <div style={{background:C.card,borderRadius:16,padding:"16px",marginBottom:16,border:`1px solid ${C.border}`}}>
                  <p style={{fontWeight:700,color:C.textMid,fontSize:13,marginBottom:10}}>Symptoms Checked:</p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                    {selSymptoms.map(id=>{const s=SYMPTOMS.find(x=>x.id===id);return<span key={id} style={{padding:"5px 10px",background:C.primaryLight,borderRadius:20,fontSize:13,fontWeight:700,color:C.primary}}>{s.icon} {s[lang]||s.en}</span>;})}
                  </div>
                </div>
                <div style={{display:"flex",gap:10}}>
                  <button onClick={()=>{setSymptomStep("select");setAssessResult(null);}} style={{flex:1,padding:"15px",borderRadius:14,background:"#F0F0F0",color:C.textMid,fontWeight:700,fontSize:15}}>{t.tryAgain}</button>
                  <button onClick={()=>go("nearby")} style={{flex:2,padding:"15px",borderRadius:14,background:`linear-gradient(135deg,${C.primary},${C.primaryMid})`,color:"#fff",fontWeight:800,fontSize:15}}>📍 {t.findCare}</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── NEARBY ── */}
        {screen==="nearby"&&(
          <div className="anim" style={{padding:"16px"}}>
            <div style={{background:"#FFFBEB",borderRadius:12,padding:"10px 14px",marginBottom:14,display:"flex",gap:8,alignItems:"center",border:`1px solid #FDE68A`}}>
              <span style={{fontSize:16}}>📶</span><p style={{fontSize:12,color:"#92400E",fontWeight:600}}>{t.offlineNote}</p>
            </div>
            <div style={{display:"flex",gap:8,marginBottom:16,overflowX:"auto",paddingBottom:4}}>
              {["all","hospitals","clinics","pharmacies"].map(f=>(
                <button key={f} onClick={()=>setNearbyFilter(f)}
                  style={{padding:"9px 16px",borderRadius:20,whiteSpace:"nowrap",background:nearbyFilter===f?C.primary:C.card,color:nearbyFilter===f?"#fff":C.textMid,fontWeight:700,fontSize:13,border:`1.5px solid ${nearbyFilter===f?C.primary:C.border}`,flexShrink:0}}>
                  {f==="all"?t.all:f==="hospitals"?t.hospitals:f==="clinics"?t.clinics:t.pharmacies}
                </button>
              ))}
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {filteredNearby.map((p,i)=>(
                <div key={p.id} className="anim" style={{animationDelay:`${i*.07}s`,background:C.card,borderRadius:18,padding:"16px",boxShadow:"0 2px 10px rgba(0,0,0,.05)",border:`1px solid ${C.border}`}}>
                  <div style={{display:"flex",gap:12}}>
                    <div style={{width:48,height:48,borderRadius:14,background:p.type==="hospital"?"#E8EEFF":p.type==="clinic"?C.primaryLight:"#FFF3E8",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>{p.icon}</div>
                    <div style={{flex:1}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                        <p style={{fontWeight:800,fontSize:14,color:C.text,lineHeight:1.3}}>{p.name}</p>
                        <span style={{padding:"3px 9px",borderRadius:20,background:p.open?C.safeLight:"#FEE2E2",color:p.open?C.safe:"#DC2626",fontSize:11,fontWeight:700,flexShrink:0,marginLeft:8}}>{p.open?t.open:t.closed}</span>
                      </div>
                      <p style={{color:C.textLight,fontSize:12,marginTop:2}}>📍 {p.address}</p>
                      <p style={{color:C.primary,fontSize:12,fontWeight:700,marginTop:2}}>📏 {p.distance}</p>
                    </div>
                  </div>
                  <div style={{display:"flex",gap:8,marginTop:12}}>
                    <a href={`tel:${p.phone}`} style={{textDecoration:"none",flex:1}}><button style={{width:"100%",padding:"11px",borderRadius:11,background:C.primaryLight,color:C.primary,fontWeight:700,fontSize:13}}>📞 {t.call}</button></a>
                    <button style={{flex:1,padding:"11px",borderRadius:11,background:"#E8EEFF",color:"#3B5BDB",fontWeight:700,fontSize:13}}>🗺️ {t.directions}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── EDUCATION ── */}
        {screen==="education"&&(
          <div className="anim" style={{padding:"16px"}}>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {ARTICLES.map((a,i)=>(
                <button key={a.id} className="tap" onClick={()=>setOpenArticle(a)}
                  style={{background:C.card,borderRadius:18,padding:"16px",boxShadow:"0 2px 10px rgba(0,0,0,.05)",border:`1px solid ${C.border}`,textAlign:"left",transition:"transform .15s",display:"block",animationDelay:`${i*.08}s`}}>
                  <div style={{display:"flex",gap:12,alignItems:"center"}}>
                    <div style={{width:54,height:54,borderRadius:14,background:a.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0}}>{a.icon}</div>
                    <div style={{flex:1}}>
                      <p style={{fontWeight:800,fontSize:15,color:C.text,marginBottom:4}}>{a[lang]?.title||a.en.title}</p>
                      <p style={{fontSize:12,color:C.textMid}}>{(a[lang]?.body||a.en.body).split("\n")[0]}</p>
                    </div>
                    <div style={{width:32,height:32,borderRadius:8,background:a.bg,display:"flex",alignItems:"center",justifyContent:"center",color:a.accent,fontSize:16,flexShrink:0}}>→</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════
            CONSULT HUB
        ════════════════════════════════════════ */}
        {screen==="consult"&&(
          <div className="anim" style={{padding:"20px 16px"}}>
            <div style={{textAlign:"center",marginBottom:26}}>
              <div style={{fontSize:50,marginBottom:10}}>💬</div>
              <h2 style={{fontWeight:900,fontSize:22,color:C.text,marginBottom:6}}>{t.consultHubTitle}</h2>
              <p style={{color:C.textMid,fontSize:14}}>{t.consultHubSubtitle}</p>
            </div>

            {/* AI Card — FREE */}
            <button className="tap" onClick={()=>go("aichat")}
              style={{width:"100%",background:C.card,borderRadius:20,padding:"20px",border:`2px solid ${C.ai}`,boxShadow:`0 4px 20px rgba(14,165,233,.14)`,textAlign:"left",marginBottom:14,display:"block",transition:"transform .15s"}}>
              <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:14}}>
                <div style={{width:56,height:56,borderRadius:16,background:C.aiLight,display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,flexShrink:0}}>🤖</div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                    <p style={{fontWeight:900,fontSize:18,color:C.text}}>{t.talkAI}</p>
                    <span style={{padding:"3px 10px",borderRadius:20,background:C.safeLight,color:C.safe,fontSize:11,fontWeight:800}}>FREE</span>
                  </div>
                  <p style={{fontSize:13,color:C.textMid}}>{t.talkAIDesc}</p>
                </div>
                <span style={{color:C.ai,fontSize:22,fontWeight:800}}>→</span>
              </div>
              <div style={{background:C.aiLight,borderRadius:12,padding:"12px 14px"}}>
                {["Quick health guidance","Honest about when to see a doctor","Powered by Gemini 1.5 · Free"].map(f=>(
                  <div key={f} style={{display:"flex",alignItems:"center",gap:8,marginBottom:5,lastChild:{marginBottom:0}}}>
                    <span style={{color:C.ai,fontSize:14,fontWeight:800}}>✓</span>
                    <span style={{fontSize:13,color:"#0369A1",fontWeight:600}}>{f}</span>
                  </div>
                ))}
              </div>
            </button>

            {/* Doctor Card — PREMIUM */}
            <button className="tap" onClick={()=>isPremium?go("doctorchat"):setShowUpgrade(true)}
              style={{width:"100%",background:C.card,borderRadius:20,padding:"20px",border:`2px solid ${isPremium?C.premium:C.border}`,boxShadow:isPremium?`0 4px 20px rgba(124,58,237,.14)`:"none",textAlign:"left",display:"block",transition:"transform .15s"}}>
              <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:14}}>
                <div style={{width:56,height:56,borderRadius:16,background:C.premiumLight,display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,flexShrink:0}}>👩‍⚕️</div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                    <p style={{fontWeight:900,fontSize:18,color:C.text}}>{t.talkDoctor}</p>
                    <span style={{padding:"3px 10px",borderRadius:20,background:C.premiumLight,color:C.premium,fontSize:11,fontWeight:800}}>{isPremium?"⭐ ACTIVE":"PRO"}</span>
                  </div>
                  <p style={{fontSize:13,color:C.textMid}}>{t.talkDoctorDesc}</p>
                </div>
                <span style={{color:isPremium?C.premium:C.textLight,fontSize:22,fontWeight:800}}>→</span>
              </div>
              <div style={{background:isPremium?C.premiumLight:"#F8F8F8",borderRadius:12,padding:"12px 14px"}}>
                {["Real certified doctor","Prescription & referrals","Medical history saved"].map(f=>(
                  <div key={f} style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}>
                    <span style={{color:isPremium?C.premium:C.textLight,fontSize:14,fontWeight:800}}>{isPremium?"✓":"🔒"}</span>
                    <span style={{fontSize:13,color:isPremium?C.textMid:C.textLight,fontWeight:600}}>{f}</span>
                  </div>
                ))}
              </div>
              {!isPremium&&(
                <div style={{marginTop:12,padding:"10px 14px",borderRadius:12,background:`${C.premium}10`,border:`1px dashed ${C.premium}50`,textAlign:"center"}}>
                  <p style={{fontSize:13,color:C.premium,fontWeight:700}}>Unlock for ₹99/month →</p>
                </div>
              )}
            </button>

            <div style={{marginTop:16,padding:"12px 14px",background:C.warningLight,borderRadius:12,border:`1px solid #FDE68A`}}>
              <p style={{fontSize:11,color:"#92400E",lineHeight:1.5,fontWeight:600}}>{t.disclaimer}</p>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════
            AI CHAT
        ════════════════════════════════════════ */}
        {screen==="aichat"&&(
          <div className="anim" style={{display:"flex",flexDirection:"column",height:"calc(100vh - 60px)"}}>

            {/* AI header bar */}
            <div style={{padding:"10px 16px",background:`linear-gradient(135deg,${C.ai}18,${C.aiLight})`,borderBottom:`1px solid ${C.ai}25`,display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:38,height:38,borderRadius:12,background:`linear-gradient(135deg,${C.ai},#38BDF8)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🤖</div>
              <div style={{flex:1}}>
                <p style={{fontWeight:800,fontSize:14,color:C.text}}>{t.aiName}</p>
                <p style={{fontSize:11,color:C.ai,fontWeight:700}}>Powered by Gemini 1.5 · Brief guidance only</p>
              </div>
              <div style={{padding:"4px 10px",borderRadius:20,background:C.safeLight,color:C.safe,fontSize:11,fontWeight:800}}>FREE</div>
            </div>

            {/* Disclaimer */}
            <div style={{padding:"8px 16px",background:"#FFFBEB",borderBottom:`1px solid #FDE68A`,display:"flex",gap:6,alignItems:"center"}}>
              <span style={{fontSize:13}}>⚠️</span>
              <p style={{fontSize:11,color:"#92400E",fontWeight:600,lineHeight:1.4}}>{t.aiDisclaimer}</p>
            </div>

            {/* Messages */}
            <div style={{flex:1,overflowY:"auto",padding:"16px",display:"flex",flexDirection:"column",gap:12}}>
              {aiMsgs.map((m,i)=>(
                <div key={i} className="anim" style={{display:"flex",justifyContent:m.from==="user"?"flex-end":"flex-start",alignItems:"flex-end",gap:8}}>
                  {m.from==="ai"&&(
                    <div style={{width:30,height:30,borderRadius:10,background:`linear-gradient(135deg,${C.ai},#38BDF8)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0}}>🤖</div>
                  )}
                  <div style={{maxWidth:"76%"}}>
                    <div style={{
                      padding:"11px 14px",
                      borderRadius:m.from==="user"?"18px 18px 4px 18px":"18px 18px 18px 4px",
                      background:m.from==="user"?`linear-gradient(135deg,${C.primary},${C.primaryMid})`:C.card,
                      color:m.from==="user"?"#fff":C.text,
                      fontSize:14,lineHeight:1.6,fontWeight:500,
                      boxShadow:"0 2px 8px rgba(0,0,0,.07)",
                      border:m.from==="ai"?`1px solid ${C.ai}25`:"none",
                    }}>
                      {m.text}
                    </div>
                    <p style={{fontSize:10,color:C.textLight,marginTop:3,textAlign:m.from==="user"?"right":"left"}}>{m.time}</p>
                  </div>
                </div>
              ))}

              {aiLoading&&(
                <div style={{display:"flex",alignItems:"flex-end",gap:8}}>
                  <div style={{width:30,height:30,borderRadius:10,background:`linear-gradient(135deg,${C.ai},#38BDF8)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14}}>🤖</div>
                  <div style={{padding:"11px 16px",borderRadius:"18px 18px 18px 4px",background:C.card,border:`1px solid ${C.ai}25`,display:"flex",gap:5,alignItems:"center"}}>
                    <div className="dot1" style={{width:7,height:7,borderRadius:"50%",background:C.ai}}/>
                    <div className="dot2" style={{width:7,height:7,borderRadius:"50%",background:C.ai}}/>
                    <div className="dot3" style={{width:7,height:7,borderRadius:"50%",background:C.ai}}/>
                    <span style={{fontSize:11,color:C.textLight,marginLeft:4}}>{t.thinking}</span>
                  </div>
                </div>
              )}
              <div ref={aiEndRef}/>
            </div>

            {/* Quick prompts */}
            {aiMsgs.length<=1&&(
              <div style={{padding:"0 16px 8px",display:"flex",gap:8,overflowX:"auto"}}>
                {["I have a fever 🌡️","Stomach pain since morning","Bad headache & cold","Should I see a doctor?"].map(p=>(
                  <button key={p} onClick={()=>setAiInput(p)}
                    style={{padding:"8px 14px",borderRadius:20,background:C.aiLight,color:C.ai,fontWeight:700,fontSize:12,flexShrink:0,border:`1px solid ${C.ai}30`,whiteSpace:"nowrap"}}>
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div style={{padding:"12px 16px 16px",background:C.card,borderTop:`1px solid ${C.border}`,display:"flex",gap:10,alignItems:"center"}}>
              <input value={aiInput} onChange={e=>setAiInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleAiSend()}
                placeholder={t.typeMessage}
                style={{flex:1,padding:"13px 16px",borderRadius:14,background:C.bg,border:`1.5px solid ${aiLoading?C.border:`${C.ai}60`}`,fontSize:14,color:C.text,fontWeight:500,transition:"border .2s"}}
              />
              <button onClick={handleAiSend} disabled={aiLoading||!aiInput.trim()}
                style={{width:46,height:46,borderRadius:14,background:aiInput.trim()&&!aiLoading?`linear-gradient(135deg,${C.ai},#38BDF8)`:"#E5E7EB",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0,transition:"background .2s",opacity:aiLoading?0.6:1}}>
                {aiLoading?"⏳":"➤"}
              </button>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════
            DOCTOR CHAT (PREMIUM)
        ════════════════════════════════════════ */}
        {screen==="doctorchat"&&(
          <div className="anim" style={{display:"flex",flexDirection:"column",height:"calc(100vh - 60px)"}}>
            {!isPremium?(
              <div style={{padding:20,textAlign:"center"}}>
                <div style={{fontSize:64,marginBottom:16}}>🔒</div>
                <h2 style={{fontWeight:900,fontSize:22,color:C.text,marginBottom:10}}>{t.premiumFeature}</h2>
                <p style={{color:C.textMid,fontSize:15,lineHeight:1.6,marginBottom:24}}>{t.upgradeMsg}</p>
                <button onClick={()=>setShowUpgrade(true)} style={{width:"100%",padding:"16px",borderRadius:16,background:`linear-gradient(135deg,${C.premium},#9333EA)`,color:"#fff",fontWeight:800,fontSize:17}}>⭐ {t.upgrade}</button>
              </div>
            ):(
              <>
                <div style={{padding:"12px 16px",background:C.card,borderBottom:`1px solid ${C.border}`,display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:44,height:44,borderRadius:"50%",background:`linear-gradient(135deg,${C.primaryMid},${C.primary})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>👩‍⚕️</div>
                  <div>
                    <p style={{fontWeight:800,fontSize:15,color:C.text}}>{t.doctor}</p>
                    <div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:8,height:8,borderRadius:"50%",background:C.safe}}/><p style={{fontSize:12,color:C.safe,fontWeight:700}}>Online</p></div>
                  </div>
                  <div style={{marginLeft:"auto",padding:"5px 12px",borderRadius:20,background:C.premiumLight,color:C.premium,fontSize:12,fontWeight:800}}>⭐ Premium</div>
                </div>
                <div style={{flex:1,overflowY:"auto",padding:"16px",display:"flex",flexDirection:"column",gap:12}}>
                  {drMsgs.map((m,i)=>(
                    <div key={i} className="anim" style={{display:"flex",justifyContent:m.from==="user"?"flex-end":"flex-start",alignItems:"flex-end",gap:8}}>
                      {m.from==="doctor"&&<div style={{width:32,height:32,borderRadius:"50%",background:`linear-gradient(135deg,${C.primaryMid},${C.primary})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>👩‍⚕️</div>}
                      <div style={{maxWidth:"72%"}}>
                        <div style={{padding:"12px 14px",borderRadius:m.from==="user"?"18px 18px 4px 18px":"18px 18px 18px 4px",background:m.from==="user"?`linear-gradient(135deg,${C.primary},${C.primaryMid})`:C.card,color:m.from==="user"?"#fff":C.text,fontSize:14,lineHeight:1.5,fontWeight:500,boxShadow:"0 2px 8px rgba(0,0,0,.08)",border:m.from==="doctor"?`1px solid ${C.border}`:"none"}}>{m.text}</div>
                        <p style={{fontSize:10,color:C.textLight,marginTop:4,textAlign:m.from==="user"?"right":"left"}}>{m.time}</p>
                      </div>
                    </div>
                  ))}
                  {drTyping&&(
                    <div style={{display:"flex",alignItems:"flex-end",gap:8}}>
                      <div style={{width:32,height:32,borderRadius:"50%",background:`linear-gradient(135deg,${C.primaryMid},${C.primary})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>👩‍⚕️</div>
                      <div style={{padding:"12px 16px",borderRadius:"18px 18px 18px 4px",background:C.card,border:`1px solid ${C.border}`,display:"flex",gap:5,alignItems:"center"}}>
                        {[0,1,2].map(d=><div key={d} className={`dot${d+1}`} style={{width:7,height:7,borderRadius:"50%",background:C.textLight}}/>)}
                      </div>
                    </div>
                  )}
                  <div ref={drEndRef}/>
                </div>
                <div style={{padding:"12px 16px",background:C.card,borderTop:`1px solid ${C.border}`,display:"flex",gap:10,alignItems:"center"}}>
                  <input value={drInput} onChange={e=>setDrInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleDrSend()}
                    placeholder={t.typeMessage}
                    style={{flex:1,padding:"13px 16px",borderRadius:14,background:C.bg,border:`1.5px solid ${C.border}`,fontSize:14,color:C.text,fontWeight:500}}
                  />
                  <button onClick={handleDrSend} style={{width:46,height:46,borderRadius:14,background:drInput.trim()?`linear-gradient(135deg,${C.primary},${C.primaryMid})`:"#E5E7EB",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>➤</button>
                </div>
              </>
            )}
          </div>
        )}

      </div>

      {/* BOTTOM NAV */}
      {screen!=="aichat"&&screen!=="doctorchat"&&(
        <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,background:C.card,borderTop:`1px solid ${C.border}`,display:"flex",height:C.navH,boxShadow:"0 -4px 20px rgba(0,0,0,.06)",zIndex:100}}>
          {[{id:"home",icon:"🏠",label:t.home},{id:"symptoms",icon:"🔍",label:t.symptoms},{id:"nearby",icon:"📍",label:t.nearby},{id:"education",icon:"📚",label:t.education},{id:"consult",icon:"💬",label:t.consult}].map(n=>{
            const active=screen===n.id;
            return(
              <button key={n.id} onClick={()=>go(n.id)}
                style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:3,background:"none",transition:"transform .12s"}}>
                <div style={{fontSize:20,lineHeight:1}}>{n.icon}</div>
                <span style={{fontSize:10,fontWeight:active?800:600,color:active?C.primary:C.textLight}}>{n.label}</span>
                {active&&<div style={{width:20,height:3,borderRadius:2,background:C.primary}}/>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
