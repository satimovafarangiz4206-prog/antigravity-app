import React, { useState } from 'react';
import { 
  Brain, 
  GraduationCap, 
  Microscope, 
  BookOpen, 
  TrendingUp, 
  Image as ImageIcon, 
  Calculator, 
  Laptop, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Bot,  
  Database, 
  Cpu, 
  Check 
} from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function App() {
  const [activeTab, setActiveTab] = useState('diagnostic');
  const [selectedStyle, setSelectedStyle] = useState('visual');
  const [quizFeedback, setQuizFeedback] = useState(null);
  const [aiSuggestion, setAiSuggestion] = useState(
    "Tahlillarga ko'ra siz vizual ma'lumotlarni 40% tezroq o'zlashtirasiz. Dars materiallari grafik ko'rinishda tayyorlandi."
  );

  const startAdaptiveLesson = () => {
    if (selectedStyle === 'visual') {
      setAiSuggestion("Tahlillarga ko'ra siz vizual ma'lumotlarni 40% tezroq o'zlashtirasiz. Materiallar illyustratsiyalar bilan berildi.");
    } else if (selectedStyle === 'analytical') {
      setAiSuggestion("Matematik va mantiqiy modellarga asoslangan taqdimot tanlandi.");
    } else {
      setAiSuggestion("Amaliy mashqlar va kod namunalari orqali o'rganish rejimi faollashtirildi.");
    }
    setActiveTab('learning');
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setQuizFeedback({
        type: 'success',
        text: "Barakalla! To'g'ri javob. Antigravity AI keyingi topshiriq murakkabligini oshirdi (+10 ball)."
      });
      setAiSuggestion("Ajoyib! O'quvchi mavzuni to'liq o'zlashtirmoqda. Keyingi modul ochildi.");
    } else {
      setQuizFeedback({
        type: 'error',
        text: "Noto'g'ri. Antigravity siz uchun maxsus soddalashtirilgan tushuntirish tayyorladi.",
        detail: "💡 Soddalashtirilgan izoh: Kirish qatlami (Input Layer) — bu xuddi insonning sezgi organlariga o'xshaydi. U faqat tashqi muhitdan ma'lumotni qabul qilib olib, tarmoq ichkarisiga uzatadi."
      });
      setAiSuggestion("Xato javob aniqlandi. AI o'quvchiga tushunishi oson bo'lishi uchun mavzuni soddalashtirilgan qadamlarga bo'lib chiqdi.");
    }
  };

  const chartData = {
    labels: ['1-Dars', '2-Dars', '3-Dars', '4-Dars', '5-Dars'],
    datasets: [
      {
        label: "An'anaviy usul",
        data: [50, 55, 58, 60, 62],
        borderColor: '#94a3b8',
        borderDash: [5, 5],
        fill: false,
      },
      {
        label: 'EduAdapt (Antigravity AI)',
        data: [50, 68, 79, 85, 92],
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg">
                <Brain className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">
                Edu<span className="text-indigo-600">Adapt</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium flex items-center gap-1">
                <GraduationCap className="w-4 h-4 text-indigo-600" /> Farangiz[cite: 1]
              </span>
              <button
                onClick={() => setActiveTab('diagnostic')}
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-sm hover:opacity-90 transition-all cursor-pointer"
              >
                Diagnostikani Boshlash
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-2 border-b border-slate-200 mb-8">
          <button
            onClick={() => setActiveTab('diagnostic')}
            className={`py-3 px-6 text-sm font-semibold border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'diagnostic' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Microscope className="w-4 h-4" /> 1-Bosqich: AI Diagnostika
          </button>
          <button
            onClick={() => setActiveTab('learning')}
            className={`py-3 px-6 text-sm font-semibold border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'learning' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4" /> 2-Bosqich: Moslashuvchan Dars
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`py-3 px-6 text-sm font-semibold border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'dashboard' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <TrendingUp className="w-4 h-4" /> 3-Bosqich: AI Analitika
          </button>
        </div>

        {activeTab === 'diagnostic' && (
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-full">
                Antigravity AI Tahlil
              </span>
              <h2 className="text-2xl font-bold mt-2 text-slate-900">O'zlashtirish Usulingizni Aniqlaymiz</h2>
              <p className="text-slate-600 text-sm mt-1">Quyidagi savolga bergan javobingizga qarab AI dars berish usulini moslashtiradi.</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-lg text-slate-800 mb-4">Mavzuni tezroq tushunishingiz uchun qaysi usul ko'proq yordam beradi?</p>

              <label onClick={() => setSelectedStyle('visual')} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${selectedStyle === 'visual' ? 'bg-indigo-50/50 border-indigo-300' : 'border-slate-200 hover:bg-slate-50'}`}>
                <input type="radio" name="style" checked={selectedStyle === 'visual'} onChange={() => {}} className="text-indigo-600 h-4 w-4" />
                <div className="ml-3">
                  <span className="font-medium text-slate-900 flex items-center gap-2"><ImageIcon className="w-4 h-4 text-indigo-500" /> Vizual (Ko'rish orqali)</span>
                  <span className="text-xs text-slate-500">Video, grafik va illyustratsiyalar bilan yaxshi o'zlashtiraman.</span>
                </div>
              </label>

              <label onClick={() => setSelectedStyle('analytical')} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${selectedStyle === 'analytical' ? 'bg-indigo-50/50 border-indigo-300' : 'border-slate-200 hover:bg-slate-50'}`}>
                <input type="radio" name="style" checked={selectedStyle === 'analytical'} onChange={() => {}} className="text-indigo-600 h-4 w-4" />
                <div className="ml-3">
                  <span className="font-medium text-slate-900 flex items-center gap-2"><Calculator className="w-4 h-4 text-indigo-500" /> Analitik (Mantiqiy)</span>
                  <span className="text-xs text-slate-500">Mantiqiy zanjirlar, sxemalar va qoidalar orqali o'rganaman.</span>
                </div>
              </label>

              <label onClick={() => setSelectedStyle('practical')} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${selectedStyle === 'practical' ? 'bg-indigo-50/50 border-indigo-300' : 'border-slate-200 hover:bg-slate-50'}`}>
                <input type="radio" name="style" checked={selectedStyle === 'practical'} onChange={() => {}} className="text-indigo-600 h-4 w-4" />
                <div className="ml-3">
                  <span className="font-medium text-slate-900 flex items-center gap-2"><Laptop className="w-4 h-4 text-indigo-500" /> Amaliy (Bajarish orqali)</span>
                  <span className="text-xs text-slate-500">To'g'ridan-to'g'ri topshiriq va mashqlar bajarib o'rganaman.</span>
                </div>
              </label>

              <button onClick={startAdaptiveLesson} className="w-full mt-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                Darsni Moslashtirish va Boshlash <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'learning' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 font-semibold text-xs rounded-full uppercase">{selectedStyle} Rejim</span>
                  <span className="text-xs text-slate-400">Mavzu: Neyron Tarmoqlari</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Sun'iy Neyron Tarmoqlari qanday ishlaydi?</h3>

                {selectedStyle === 'visual' && (
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 mb-4 text-center">
                      <div className="flex justify-center items-center gap-4 py-6">
                        <div className="p-3 bg-white shadow rounded-lg border text-center"><Database className="w-6 h-6 text-indigo-600 mx-auto mb-1" /><span className="text-xs font-semibold">Input</span></div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                        <div className="p-3 bg-indigo-600 text-white shadow rounded-lg text-center"><Cpu className="w-6 h-6 mx-auto mb-1" /><span className="text-xs font-semibold">Hidden Layer</span></div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                        <div className="p-3 bg-white shadow rounded-lg border text-center"><Check className="w-6 h-6 text-green-600 mx-auto mb-1" /><span className="text-xs font-semibold">Output</span></div>
                      </div>
                      <p className="text-xs text-slate-500">Sxema: Neyron tarmog'ining ma'lumot uzatish iyerarxiyasi</p>
                    </div>
                    <p>Neyron tarmog'i inson miyasi ishlash prinsipiga taqlid qiladi. U uchta asosiy qatlamdan iborat: Kirish, Yashirin va Chiqish qatlamlari.</p>
                  </div>
                )}

                {selectedStyle === 'analytical' && (
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <div className="bg-slate-100 p-4 rounded-xl font-mono text-xs text-slate-800 mb-4">f(x) = Activation( Σ (weight_i * input_i) + bias )</div>
                    <p><strong>Mantiqiy algoritm:</strong></p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>1-qadam:</strong> Kirish signallari vazn parametrlariga ko'paytiriladi.</li>
                      <li><strong>2-qadam:</strong> Barcha qiymatlar yig'ilib, aktivatsiya funksiyasiga uzatiladi.</li>
                    </ul>
                  </div>
                )}

                {selectedStyle === 'practical' && (
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <div className="bg-slate-900 text-green-400 p-4 rounded-xl font-mono text-xs mb-4">
                      # Antigravity Python Prototip Kodu<br />
                      inputs = [1.2, 5.1, 2.1]<br />
                      weights = [0.2, 0.8, -0.5]<br />
                      output = sum(i*w for i,w in zip(inputs, weights))<br />
                      print("Neyron Chiqishi:", output)
                    </div>
                    <p>Amalda sinab ko'ring: Yuqoridagi kod fragmenti orqali neyronning matematik hisob-kitobini tushunishingiz mumkin.</p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-indigo-600" /> O'zlashtirishni tekshirish</h4>
                <p className="text-sm text-slate-600 mb-4">Neyron tarmog'idagi kiritish qatlami (Input Layer) vazifasi nima?</p>
                <div className="space-y-2">
                  <button onClick={() => handleAnswer(true)} className="w-full text-left p-3 border rounded-lg text-sm hover:bg-slate-50 transition-all font-medium border-slate-200 cursor-pointer">
                    A) Tashqi ma'lumotlarni qabul qilish va tarmoqqa uzatish
                  </button>
                  <button onClick={() => handleAnswer(false)} className="w-full text-left p-3 border rounded-lg text-sm hover:bg-slate-50 transition-all font-medium border-slate-200 cursor-pointer">
                    B) Faqat yakuniy natijani hisoblash
                  </button>
                </div>

                {quizFeedback && (
                  <div className={`mt-4 p-3 rounded-lg text-sm border ${quizFeedback.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                    <div className="flex items-center gap-2">
                      {quizFeedback.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      <span>{quizFeedback.text}</span>
                    </div>
                    {quizFeedback.detail && <div className="mt-2 p-2 bg-white rounded border border-red-100 text-slate-700 text-xs">{quizFeedback.detail}</div>}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400"><Bot className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold">Antigravity Tutor AI</h4>
                    <span className="text-xs text-indigo-300">Shaxsiy AI Yordamchi</span>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">"{aiSuggestion}"</p>
                <div className="border-t border-slate-800 pt-4 flex justify-between text-xs text-slate-400">
                  <span>Qiyinlik darajasi:</span>
                  <span className="text-indigo-400 font-semibold">Adaptiv (O'rta)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-xs font-semibold text-slate-500 uppercase">O'zlashtirish Darajasi</p>
                <h3 className="text-3xl font-bold text-slate-900 mt-1">88%</h3>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-xs font-semibold text-slate-500 uppercase">O'rganish Tezgichligi</p>
                <h3 className="text-3xl font-bold text-slate-900 mt-1">1.4x</h3>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-xs font-semibold text-slate-500 uppercase">Dominant Usul</p>
                <h3 className="text-2xl font-bold text-indigo-600 mt-1 capitalize">{selectedStyle}</h3>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4">O'zlashtirish Dinamikasi</h4>
              <div className="h-64">
                <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}