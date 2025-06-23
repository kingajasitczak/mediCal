import { Menu } from "lucide-react";
import React, { useState } from "react";

// --- DANE BADAŃ DLA KOBIET ---
const womanScreenings = [
  { age: "18–24", test: "Pap Smear (Cytology)", frequency: "Every 3 years", riskFactors: "Every 1 year – for history of cervical cancer, HPV, or immunosuppression",},
  { age: "18–24", test: "Gynecological Exam", frequency: "Every 1 year", riskFactors: "No changes",},
  { age: "18–24", test: "Breast Ultrasound", frequency: "Every 2 years", riskFactors: "Every 1 year – for cysts or family history of breast cancer", },
  { age: "18–24", test: "Blood Count, Urinalysis, Glucose", frequency: "Every 1 year", riskFactors: "Every 6 months – for family history of diabetes or obesity",},
  { age: "18–24", test: "Lipid Panel", frequency: "Every 3 years", riskFactors: "Every 1 year – for overweight or low physical activity",},
  { age: "18–24", test: "TSH (Thyroid)", frequency: "Every 3 years", riskFactors: "Every 1 year – for symptoms of hypothyroidism or family history",},
  { age: "25–39", test: "Pap Smear (Cytology)", frequency: "Every 3 years", riskFactors: "Every 1 year – as above",},
  { age: "25–39", test: "Breast Ultrasound", frequency: "Every 2 years", riskFactors: "Every 1 year – as above",},
  { age: "25–39", test: "Mammography", frequency: "Only if indicated", riskFactors: "Every 2 years – for BRCA1/2 mutation or other genetic loads",},
  { age: "25–39", test: "ECG", frequency: "Every 3 years", riskFactors: "Every 1 year – for hypertension, smoking, or obesity",},
  { age: "25–39", test: "Chest X-ray", frequency: "Every 5 years", riskFactors: "Every 2 years – for smokers",},
  { age: "40–49", test: "Pap Smear (Cytology)", frequency: "Every 3 years", riskFactors: "Every 1 year – for oncological risk",},
  { age: "40–49", test: "Breast Ultrasound", frequency: "Every 1 year", riskFactors: "Every 6 months – for palpable changes",},
  { age: "40–49", test: "Mammography", frequency: "Every 2 years", riskFactors: "Every 1 year – for family history of breast cancer",},
  { age: "40–49", test: "Colonoscopy", frequency: "From 45, every 10 years", riskFactors: "Every 5 years – for polyps or family history of colon cancer",},
  { age: "40–49", test: "Lipid Panel, Glucose", frequency: "Every 1 year", riskFactors: "Every 6 months – for obesity",},
  { age: "40–49", test: "Abdominal Ultrasound", frequency: "Every 3 years", riskFactors: "Every 1 year – for fatty liver disease or obesity",},
  { age: "40–49", test: "TSH (Thyroid)", frequency: "Every 2 years", riskFactors: "Every 1 year – for thyroid symptoms",},
  { age: "40–49", test: "Bone Density (Densitometry)", frequency: "Only if indicated", riskFactors: "Every 2 years – for menopause or osteoporosis",},
  { age: "50+", test: "Mammography", frequency: "Every 2 years", riskFactors: "Every 1 year – for genetic risk",},
  { age: "50+", test: "Pap Smear (Cytology)", frequency: "Until 65, every 3 years", riskFactors: "Every 1 year – for risk factors",},
  { age: "50+", test: "Colonoscopy", frequency: "Every 10 years", riskFactors: "Every 5 years – as above",},
  { age: "50+", test: "ECG", frequency: "Every 1 year", riskFactors: "Every 6 months – for heart disease or smoking",},
  { age: "50+", test: "Hearing and Vision Test", frequency: "Every 2 years", riskFactors: "Every 1 year – if function deteriorates",},
  { age: "50+", test: "Cognitive Function Tests", frequency: "When symptoms appear", riskFactors: "Every 1 year – for dementia risk",},
];

// --- DANE BADAŃ DLA MĘŻCZYZN ---
const manScreenings = [
    { age: "18–24", test: "Testicular Ultrasound", frequency: "Only when indicated", riskFactors: "Every 1 year – for family history of testicular cancer",},
    { age: "18–24", test: "Blood Count, Urinalysis, Glucose", frequency: "Every 1 year", riskFactors: "Every 6 months – for obesity or insulin resistance",},
    { age: "18–24", test: "Lipid Panel", frequency: "Every 3 years", riskFactors: "Every 1 year – for a sedentary lifestyle",},
    { age: "18–24", test: "TSH (Thyroid)", frequency: "Every 3 years", riskFactors: "Every 1 year – for symptoms or genetic predisposition",},
    { age: "25–39", test: "ECG", frequency: "Every 3 years", riskFactors: "Every 1 year – for high blood pressure or stress",},
    { age: "25–39", test: "Chest X-ray", frequency: "Every 5 years", riskFactors: "Every 2 years – for smokers",},
    { age: "25–39", test: "Abdominal Ultrasound", frequency: "Every 3 years", riskFactors: "Every 1 year – for obesity or liver problems",},
    { age: "25–39", test: "PSA (Prostate-Specific Antigen)", frequency: "Only when indicated", riskFactors: "From 40, every 1 year – for family history of prostate cancer",},
    { age: "40–49", test: "PSA (Prostate-Specific Antigen)", frequency: "Every 1 year", riskFactors: "Every 6 months – for family risk",},
    { age: "40–49", test: "Colonoscopy", frequency: "From 45, every 10 years", riskFactors: "Every 5 years – for family history of polyps",},
    { age: "40–49", test: "ECG", frequency: "Every 1 year", riskFactors: "Every 6 months – as above",},
    { age: "40–49", test: "Abdominal Ultrasound", frequency: "Every 2 years", riskFactors: "Every 1 year – for obesity",},
    { age: "40–49", test: "Liver Function Tests (ALT, AST, GGTP)", frequency: "Every 2 years", riskFactors: "Every 1 year – for alcohol consumption",},
    { age: "50+", test: "PSA (Prostate-Specific Antigen)", frequency: "Every 1 year", riskFactors: "Every 6 months – as above",},
    { age: "50+", test: "Colonoscopy", frequency: "Every 10 years", riskFactors: "Every 5 years – as above",},
    { age: "50+", test: "ECG", frequency: "Every 1 year", riskFactors: "Every 6 months – for heart disease",},
    { age: "50+", test: "Hearing and Vision Test", frequency: "Every 2 years", riskFactors: "Every 1 year – if function deteriorates",},
    { age: "50+", test: "Cognitive Tests (e.g., MMSE)", frequency: "When symptoms appear", riskFactors: "Every 1 year – for dementia risk",},
    { age: "50+", test: "Bone Density (Densitometry)", frequency: "Once after 70", riskFactors: "Every 2 years – for osteoporosis",},
  ];

// --- KOMPONENTY POMOCNICZE ---

// Komponent ikony ptaszka
const CheckIcon = () => (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
    </svg>
);

// Komponent tabeli
const ScreeningsTable = ({ data }) => (
    <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-800 uppercase bg-gray-50/70">
                <tr>
                    <th scope="col" className="px-6 py-3">Age</th>
                    <th scope="col" className="px-6 py-3">Test / Examination</th>
                    <th scope="col" className="px-6 py-3">Standard Frequency</th>
                    <th scope="col" className="px-6 py-3">Factors Affecting Frequency (Higher Risk)</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} className="bg-white/60 border-b border-gray-200">
                        <td className="px-6 py-4 font-medium">{item.age}</td>
                        <td className="px-6 py-4">{item.test}</td>
                        <td className="px-6 py-4">{item.frequency}</td>
                        <td className="px-6 py-4">{item.riskFactors}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// Komponent dla dzieci
const ChildrenScreenings = () => (
    <div className="text-gray-800 p-6 space-y-6 text-left">
        <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Newborns and Infants (0–1 year)</h3>
            <h4 className="font-semibold text-lg mb-2">Standard Screenings:</h4>
            <ul className="list-disc list-inside space-y-1">
                <li>Health Check-up: at 2, 4-6, and 9 months</li>
                <li>Hearing (Otoacoustic Emission): Screening right after birth</li>
                <li>Vision: Assessment of reflexes; ophthalmologist consultation if abnormal</li>
                <li>Transfontanellar & Abdominal Ultrasound: Up to 3 months of age</li>
                <li>Blood Count, Urinalysis: Only if infection or other issues are suspected</li>
            </ul>
            <h4 className="font-semibold text-lg mt-4 mb-2">Risk Factors:</h4>
            <p>Low birth weight, prematurity, genetic diseases → more frequent check-ups, specialist tests (neurologist, cardiologist).</p>
        </div>
        <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Young Children (1–6 years)</h3>
            <h4 className="font-semibold text-lg mb-2">Standard Screenings:</h4>
            <ul className="list-disc list-inside space-y-1">
                <li>Health Check-up: at 2, 4, and 6 years of age</li>
                <li>Hearing and Vision: During check-ups; specialist consultation if abnormal</li>
                <li>Lab Tests (Blood Count, Glucose, Urinalysis): Every 2-3 years or more often if indicated</li>
            </ul>
             <h4 className="font-semibold text-lg mt-4 mb-2">Risk Factors:</h4>
            <p>Family history of obesity, overweight → glucose & lipid panel control from age 5. Family history of allergies → allergy tests, allergist consultation.</p>
        </div>
        <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">School-Age Children (7–12 years)</h3>
            <h4 className="font-semibold text-lg mb-2">Standard Screenings:</h4>
            <ul className="list-disc list-inside space-y-1">
                <li>Health Check-up: at 10 years of age</li>
                <li>Vision and Hearing: Every 2-3 years</li>
                <li>Scoliosis, Posture Defects: Annual checks at school or by a pediatrician</li>
                <li>Lab Tests (Blood Count, Urinalysis): Every 2-3 years</li>
            </ul>
            <h4 className="font-semibold text-lg mt-4 mb-2">Risk Factors:</h4>
            <p>Low physical activity, overweight → annual glucose and lipid panel.</p>
        </div>
        <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Adolescents (13–18 years)</h3>
            <h4 className="font-semibold text-lg mb-2">Standard Screenings:</h4>
            <ul className="list-disc list-inside space-y-1">
                <li>Health Check-up: at 14 and 16 years of age (mandatory before vocational training)</li>
                <li>Vision, Hearing, Posture: Every 2 years</li>
                <li>Blood Count, Urinalysis, Glucose, Lipid Panel: Every 2 years</li>
                <li>Hormonal Tests (TSH, Prolactin): For puberty disorders</li>
                <li>Gynecological Consultation (girls): After menarche or in case of problems</li>
            </ul>
            <h4 className="font-semibold text-lg mt-4 mb-2">Risk Factors:</h4>
            <p>Active lifestyle (athletes) → annual ECG, exercise tests as needed.</p>
        </div>
    </div>
);


// --- GŁÓWNY KOMPONENT ---

export default function RecommendedScreenings() {
    const [activeTab, setActiveTab] = useState("Woman");
    const [filterByAge, setFilterByAge] = useState(false);
    
    // Przykładowy wiek użytkownika. W prawdziwej aplikacji pochodziłby np. z kontekstu lub propsów.
    const userAge = 35;

    // Funkcja pomocnicza do parsowania przedziałów wiekowych ze stringa (np. "25-39" lub "50+")
    const getAgeRange = (ageStr) => {
        if (ageStr.includes('–')) {
            const [min, max] = ageStr.split('–').map(Number);
            return { min, max };
        }
        if (ageStr.includes('+')) {
            const min = parseInt(ageStr, 10);
            return { min, max: Infinity };
        }
        return { min: 0, max: 0 };
    };

    // Logika do przygotowania danych do wyświetlenia (z uwzględnieniem filtra)
    const getFilteredData = () => {
        const sourceData = activeTab === 'Woman' ? womanScreenings : manScreenings;
        if (filterByAge) {
            return sourceData.filter(item => {
                const range = getAgeRange(item.age);
                return userAge >= range.min && userAge <= range.max;
            });
        }
        return sourceData;
    };

    const filteredData = getFilteredData();

    return (
        <div className="bg-white flex flex-row justify-center w-full">
            <div className="w-full min-h-screen relative [background:linear-gradient(to_bottom_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_right_/_50%_50%_no-repeat]">
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
                    <img
                        src="/MediCal.png"
                        alt="MediCal Logo"
                        className="w-[180px] sm:w-[200px] h-auto"
                    />
                </div>

                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
                    <button
                        type="button"
                        className="p-2 rounded-md text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                        aria-label="Open menu"
                    >
                        <Menu className="h-7 w-7 sm:h-8 sm:w-8" />
                    </button>
                </div>

                <div className="flex flex-col items-center justify-start pt-32 sm:pt-36 px-4 w-full">
                    <h1 className="text-white text-5xl sm:text-[64px] [font-family:'Roboto-ExtraBold',Helvetica] font-extrabold text-center leading-tight">
                        Recommended Screenings
                    </h1>
                    <p className="[font-family:'Roboto-Light',Helvetica] font-light text-white text-2xl sm:text-4xl text-center mt-4 mb-12 sm:mb-16">
                        Stay healthy and informed about necessary check-ups.
                    </p>

                    <div className="w-full max-w-7xl bg-white/80 backdrop-blur-md rounded-xl shadow-2xl mb-16">
                        {/* Nawigacja w zakładkach */}
                        <div className="flex justify-center border-b border-gray-300">
                            <button onClick={() => setActiveTab('Woman')} className={`py-4 px-6 block font-medium text-lg focus:outline-none ${activeTab === 'Woman' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>
                                Woman
                            </button>
                            <button onClick={() => setActiveTab('Man')} className={`py-4 px-6 block font-medium text-lg focus:outline-none ${activeTab === 'Man' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>
                                Man
                            </button>
                            <button onClick={() => setActiveTab('Children')} className={`py-4 px-6 block font-medium text-lg focus:outline-none ${activeTab === 'Children' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>
                                Children
                            </button>
                        </div>
                        
                        {/* Przycisk do filtrowania - widoczny tylko dla Kobiet i Mężczyzn */}
                        {(activeTab === 'Woman' || activeTab === 'Man') && (
                            <div className="flex justify-end p-4 border-b border-gray-200">
                                <label className="flex items-center cursor-pointer select-none">
                                    <div 
                                        onClick={() => setFilterByAge(!filterByAge)}
                                        className={`w-5 h-5 flex items-center justify-center rounded border-2 transition-all ${filterByAge ? 'bg-blue-600 border-blue-600' : 'bg-transparent border-gray-400'}`}
                                    >
                                        {filterByAge && <CheckIcon />}
                                    </div>
                                    <span 
                                        onClick={() => setFilterByAge(!filterByAge)}
                                        className="ml-2 font-medium text-gray-700"
                                    >
                                        Filter by my age
                                    </span>
                                </label>
                            </div>
                        )}

                        {/* Zawartość zakładek */}
                        <div className="p-2 sm:p-4">
                            {(activeTab === 'Woman' || activeTab === 'Man') && <ScreeningsTable data={filteredData} />}
                            {activeTab === 'Children' && <ChildrenScreenings />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}