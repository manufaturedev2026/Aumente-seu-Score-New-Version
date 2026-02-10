
import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Trophy, 
  BookOpen, 
  Calculator, 
  Zap, 
  ChevronDown, 
  CheckSquare, 
  ChevronLeft, 
  PlayCircle,
  Lightbulb,
  Sparkles,
  HelpCircle,
  XCircle,
  Info,
  Compass,
  Circle,
  Percent,
  BrainCircuit,
  RotateCcw,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

import { View, UserProfile, DayMission, ChecklistItem, ModuleTopic, QuizOption } from './types';
import { EDUCATIONAL_MODULES, PLAN_30_STEPS, CHECKLIST_DATA, COACH_TIPS, XP_VALUES } from './constants';
import Navigation from './components/Navigation';
import ScoreGauge from './components/ScoreGauge';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<View>('onboarding');
  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  const [selectedTopic, setSelectedTopic] = useState<ModuleTopic | null>(null);
  const [currentTip, setCurrentTip] = useState<string>("");
  
  // Quiz states
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Calculator states
  const [calcPrincipal, setCalcPrincipal] = useState('');
  const [calcRate, setCalcRate] = useState('');
  const [calcTime, setCalcTime] = useState('');
  const [calcResult, setCalcResult] = useState<{ total: number, interest: number } | null>(null);

  const totalTopicsCount = useMemo(() => EDUCATIONAL_MODULES.flatMap(m => m.topics).length, []);

  const [user, setUser] = useState<UserProfile>({
    name: 'Estrategista',
    photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop',
    initialScore: 0,
    currentScore: 0,
    targetScore: 1000, 
    completedDays: [],
    completedTopics: [],
    completedChecklist: [],
    scoreHistory: [
      { date: 'Seg', value: 0 },
      { date: 'Hoje', value: 0 },
    ]
  });

  const [missions] = useState<DayMission[]>(PLAN_30_STEPS);

  // Randomize options for the current quiz step
  const currentStepOptions = useMemo(() => {
    const options = [...missions[currentQuizIndex].options];
    // Simple Fisher-Yates shuffle
    return options.sort(() => Math.random() - 0.5);
  }, [currentQuizIndex, missions]);

  const totalXP = useMemo(() => {
    const topicsXP = user.completedTopics.length * XP_VALUES.TOPIC_READ;
    const checklistXP = user.completedChecklist.length * XP_VALUES.CHECKLIST_ITEM;
    const quizXP = user.completedDays.length * XP_VALUES.QUIZ_CORRECT;
    return topicsXP + checklistXP + quizXP;
  }, [user.completedTopics, user.completedChecklist, user.completedDays]);

  const planProgress = useMemo(() => {
    return Math.round((user.completedDays.length / 30) * 100);
  }, [user.completedDays]);

  const courseProgress = useMemo(() => {
    return Math.round((user.completedTopics.length / totalTopicsCount) * 100);
  }, [user.completedTopics, totalTopicsCount]);

  const checklistProgress = useMemo(() => {
    return Math.round((user.completedChecklist.length / CHECKLIST_DATA.length) * 100);
  }, [user.completedChecklist]);

  // CALCULO DO SCORE BASEADO NO CONHECIMENTO (Acertos no Quiz)
  const potentialScore = useMemo(() => {
    return Math.round((user.completedDays.length / 30) * 1000);
  }, [user.completedDays]);

  useEffect(() => {
    if (activeTab === 'dashboard') {
      setCurrentTip(COACH_TIPS[Math.floor(Math.random() * COACH_TIPS.length)]);
    }
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleCalculateJuros = () => {
    const p = parseFloat(calcPrincipal);
    const r = parseFloat(calcRate) / 100;
    const t = parseFloat(calcTime);
    if (!p || isNaN(r) || !t) return;
    const total = p * Math.pow(1 + r, t);
    setCalcResult({ total, interest: total - p });
  };

  const handleOptionSelect = (option: QuizOption, idx: number) => {
    if (selectedOptionIdx !== null) return;
    setSelectedOptionIdx(idx);
    setShowExplanation(true);
    
    if (option.isCorrect) {
      setUser(prev => ({
        ...prev,
        completedDays: prev.completedDays.includes(currentQuizIndex) ? prev.completedDays : [...prev.completedDays, currentQuizIndex]
      }));
    }
  };

  const completeTopic = (topicId: string) => {
    setUser(prev => ({
      ...prev,
      completedTopics: prev.completedTopics.includes(topicId) ? prev.completedTopics : [...prev.completedTopics, topicId]
    }));
    setSelectedTopic(null);
  };

  const toggleChecklistItem = (id: string) => {
    setUser(prev => {
      const isCompleted = prev.completedChecklist.includes(id);
      return {
        ...prev,
        completedChecklist: isCompleted 
          ? prev.completedChecklist.filter(item => item !== id)
          : [...prev.completedChecklist, id]
      };
    });
  };

  const nextQuiz = () => {
    setSelectedOptionIdx(null);
    setShowExplanation(false);
    if (currentQuizIndex < 29) setCurrentQuizIndex(prev => prev + 1);
  };

  const restartQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedOptionIdx(null);
    setShowExplanation(false);
    setUser(prev => ({
      ...prev,
      completedDays: []
    }));
  };

  const renderDashboard = () => (
    <div className="pb-24 pt-8 px-5 space-y-6 animate-in fade-in duration-500">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={user.photo} className="w-12 h-12 rounded-2xl object-cover shadow-lg border-2 border-white" />
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Mestre do Crédito</p>
            <h2 className="text-xl font-black text-gray-900">{user.name}</h2>
          </div>
        </div>
        <div className="bg-white px-3 py-1.5 rounded-full border border-gray-100 flex items-center gap-2 shadow-sm">
          <Zap size={14} className="text-orange-500" />
          <span className="text-xs font-black">{totalXP} XP</span>
        </div>
      </header>

      {/* GRAFICO DE SCORE POTENCIAL BASEADO EM CONHECIMENTO */}
      <section className="bg-white border border-gray-100 rounded-[40px] p-8 shadow-xl relative overflow-hidden text-center">
        <div className="mb-6 flex justify-center">
           <ScoreGauge score={potentialScore} />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-black text-gray-900 leading-tight px-4">
            Seu potencial Score hoje com o seu conhecimento
          </h3>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Baseado em {user.completedDays.length} acertos no plano</p>
        </div>
        
        {/* Barras de Progresso */}
        <div className="mt-8 pt-6 border-t border-gray-50 text-left space-y-5">
          {/* Jornada 30 Dias */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest">Jornada 30 Dias</span>
              <span className="text-xs font-black text-gray-900">{planProgress}%</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-1000 ease-out rounded-full shadow-sm" 
                style={{ width: `${planProgress}%` }} 
              />
            </div>
          </div>

          {/* Cursos Completos */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Cursos Completos</span>
              <span className="text-xs font-black text-gray-900">{courseProgress}%</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000 ease-out rounded-full shadow-sm" 
                style={{ width: `${courseProgress}%` }} 
              />
            </div>
          </div>

          {/* Checklist Prático */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Checklist Prático</span>
              <span className="text-xs font-black text-gray-900">{checklistProgress}%</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-1000 ease-out rounded-full shadow-sm" 
                style={{ width: `${checklistProgress}%` }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Atalho Calculadora */}
      <button 
        onClick={() => setActiveTab('tools')}
        className="w-full bg-gradient-to-br from-orange-400 to-orange-500 rounded-[32px] p-5 text-white flex items-center justify-between shadow-lg shadow-orange-100 active:scale-95 transition-all group"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
            <Percent size={24} strokeWidth={3} />
          </div>
          <div className="text-left">
            <h4 className="font-black text-lg leading-none mb-1 text-white">Calculadora de Juros</h4>
            <p className="text-orange-100 text-[10px] font-bold uppercase tracking-wider">Simule o custo das suas dívidas</p>
          </div>
        </div>
        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
          <ChevronRight size={20} />
        </div>
      </button>

      <section className="bg-orange-50 border-2 border-orange-100 rounded-[32px] p-6">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb size={18} className="text-orange-500" />
          <h4 className="font-black text-orange-900 text-sm">Dica de Hoje</h4>
        </div>
        <p className="text-orange-800 text-sm font-medium leading-relaxed italic">"{currentTip}"</p>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => setActiveTab('checklist')} className="bg-white border border-gray-100 p-6 rounded-[32px] shadow-sm flex flex-col gap-3 active:scale-95 transition-all text-left">
          <div className="w-10 h-10 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center"><CheckSquare size={20} /></div>
          <div>
            <h5 className="font-black text-gray-900 text-sm">Checklist</h5>
            <p className="text-[10px] text-gray-400 font-bold uppercase">{user.completedChecklist.length} de {CHECKLIST_DATA.length} feitos</p>
          </div>
        </button>
        <button onClick={() => setActiveTab('modules')} className="bg-white border border-gray-100 p-6 rounded-[32px] shadow-sm flex flex-col gap-3 active:scale-95 transition-all text-left">
          <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center"><BookOpen size={20} /></div>
          <div>
            <h5 className="font-black text-gray-900 text-sm">Cursos</h5>
            <p className="text-[10px] text-gray-400 font-bold uppercase">XP Infinito</p>
          </div>
        </button>
      </div>
    </div>
  );

  const renderSteps = () => {
    const currentStep = missions[currentQuizIndex];
    return (
      <div className="pb-24 pt-8 px-5 animate-in slide-in-from-bottom duration-300 min-h-screen">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900">{currentStep.title}</h2>
            <p className="text-gray-500 font-medium">Missão Prática</p>
          </div>
          <div className="w-12 h-12 bg-purple-100 rounded-2xl flex flex-col items-center justify-center text-purple-600 font-black">
            <span className="text-[10px] leading-none">DIA</span>
            <span className="text-lg leading-none">{currentStep.day}</span>
          </div>
        </header>

        <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-50 mb-6">
          <h4 className="text-xl font-bold text-gray-900 mb-8 leading-relaxed">
            {currentStep.question}
          </h4>
          
          <div className="space-y-4">
            {currentStepOptions.map((opt, idx) => {
              let btnClass = "w-full p-5 rounded-3xl text-left font-bold transition-all border-2 ";
              if (selectedOptionIdx === null) {
                btnClass += "border-gray-100 hover:border-purple-200 text-gray-700 bg-gray-50";
              } else {
                if (opt.isCorrect) btnClass += "border-green-500 bg-green-50 text-green-900";
                else if (selectedOptionIdx === idx) btnClass += "border-red-500 bg-red-50 text-red-900";
                else btnClass += "border-gray-100 bg-white text-gray-400 opacity-50";
              }

              return (
                <button 
                  key={idx} 
                  disabled={selectedOptionIdx !== null}
                  onClick={() => handleOptionSelect(opt, idx)}
                  className={btnClass}
                >
                  <div className="flex items-center gap-3">
                    {selectedOptionIdx !== null && opt.isCorrect && <CheckCircle2 size={20} className="text-green-600" />}
                    {selectedOptionIdx === idx && !opt.isCorrect && <XCircle size={20} className="text-red-600" />}
                    <span>{opt.text}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {showExplanation && (
          <div className="animate-in slide-in-from-top duration-500">
            <div className="bg-purple-50 rounded-[32px] p-6 border-2 border-purple-100 mb-6">
              <div className="flex items-center gap-2 mb-3 text-purple-900">
                <BrainCircuit size={18} />
                <h5 className="font-black text-sm uppercase">Análise Técnica:</h5>
              </div>
              <p className="text-purple-800 text-sm leading-relaxed font-medium">
                {currentStep.explanation}
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              {currentQuizIndex === 29 ? (
                <>
                  <button 
                    onClick={() => setActiveTab('dashboard')}
                    className="w-full bg-purple-600 text-white font-black py-5 rounded-3xl shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    Ver Meu Score <ArrowRight size={20} />
                  </button>
                  <button 
                    onClick={restartQuiz}
                    className="w-full bg-white border-2 border-purple-200 text-purple-600 font-black py-4 rounded-3xl active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    Reiniciar Quiz <RotateCcw size={18} />
                  </button>
                </>
              ) : (
                <button 
                  onClick={nextQuiz}
                  className="w-full bg-purple-600 text-white font-black py-5 rounded-3xl shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Próxima Missão <ArrowRight size={20} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderCurrentView = () => {
    if (selectedTopic) return (
      <div className="min-h-screen bg-white pb-32 animate-in slide-in-from-right duration-300">
        <header className="sticky top-0 bg-white/90 backdrop-blur-md px-5 py-4 flex items-center gap-4 border-b border-gray-100 z-50">
          <button onClick={() => setSelectedTopic(null)} className="p-2 -ml-2 text-gray-400"><ChevronLeft size={28} /></button>
          <div className="flex-1">
            <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest leading-none mb-1">{selectedTopic.chapterContext}</p>
            <h3 className="font-bold text-gray-900 truncate leading-none">{selectedTopic.title}</h3>
          </div>
        </header>
        <div className="px-6 pt-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-8 leading-tight">{selectedTopic.title}</h2>
          {selectedTopic.content?.split('\n').map((p, i) => <p key={i} className="text-gray-700 text-lg leading-relaxed mb-6">{p}</p>)}
          
          <div className="mt-12 p-8 bg-purple-600 rounded-[40px] text-white shadow-2xl shadow-purple-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center"><Sparkles size={24} /></div>
              <h4 className="text-xl font-bold">Lição Aprendida?</h4>
            </div>
            <p className="text-purple-100 mb-8 text-sm leading-relaxed">Conclua este tópico para ganhar <b>+{XP_VALUES.TOPIC_READ} XP</b> e avançar no seu curso.</p>
            <button 
              onClick={() => completeTopic(selectedTopic.id)}
              className="w-full bg-orange-500 text-white font-black py-5 rounded-3xl shadow-lg active:scale-95 transition-all uppercase tracking-widest text-sm"
            >
              Concluir e Resgatar XP
            </button>
          </div>
        </div>
      </div>
    );

    switch (activeTab) {
      case 'onboarding': return (
        <div className="min-h-screen purple-gradient flex flex-col items-center justify-center p-8 text-white text-center">
          <div className="relative mb-12 animate-in zoom-in duration-700">
            {/* Efeito de Brilho de Fundo */}
            <div className="absolute inset-0 bg-white/20 blur-[60px] rounded-full scale-150" />
            
            {/* Container da Logo */}
            <div className="relative w-32 h-32 bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden border-4 border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent" />
              <div className="relative">
                 <ShieldCheck size={64} className="text-purple-600 stroke-[1.5]" />
                 <div className="absolute -bottom-1 -right-1 bg-orange-500 p-1.5 rounded-xl border-2 border-white shadow-lg">
                    <TrendingUp size={20} className="text-white" />
                 </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 max-w-sm">
            <h1 className="text-4xl font-black italic tracking-tighter leading-[1.1] text-white">
              Sua Nova<br/>Era de <span className="text-orange-400">Crédito</span>
            </h1>
            <p className="text-lg text-purple-100/90 font-medium leading-relaxed">
              Descubra os segredos para subir seu Score de forma prática e recupere seu poder de compra hoje.
            </p>
          </div>

          <div className="mt-12 w-full max-w-xs space-y-4">
            <button 
              onClick={() => setActiveTab('dashboard')} 
              className="w-full bg-orange-500 text-white font-black py-6 rounded-3xl shadow-[0_10px_30px_rgba(249,115,22,0.4)] flex items-center justify-center gap-3 uppercase tracking-[0.1em] text-sm active:scale-95 transition-all"
            >
              Começar Agora <ArrowRight size={20} />
            </button>
            <p className="text-[10px] font-black text-purple-300 uppercase tracking-widest opacity-60">Versão Pro 2025</p>
          </div>
        </div>
      );
      case 'dashboard': return renderDashboard();
      case 'plan': return renderSteps();
      case 'tools': {
        const handleCalculate = () => {
          const p = parseFloat(calcPrincipal);
          const r = parseFloat(calcRate) / 100;
          const t = parseFloat(calcTime);
          if (!p || isNaN(r) || !t) return;
          const total = p * Math.pow(1 + r, t);
          setCalcResult({ total, interest: total - p });
        };
        return (
          <div className="pb-24 pt-8 px-5 animate-in fade-in duration-300 space-y-8">
            <header className="flex items-center gap-4">
              <button onClick={() => setActiveTab('dashboard')} className="p-2 -ml-2 text-gray-400"><ChevronLeft size={28} /></button>
              <div>
                <h2 className="text-3xl font-black text-gray-900">Calculadora de <span className="text-purple-600 italic">Juros</span></h2>
                <p className="text-gray-500 font-medium">Veja o custo real do tempo no seu dinheiro.</p>
              </div>
            </header>
            <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-100 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Valor (R$)</label>
                  <input type="number" value={calcPrincipal} onChange={e => setCalcPrincipal(e.target.value)} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 font-bold outline-none focus:ring-2 focus:ring-purple-500" placeholder="0.00" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Taxa (%)</label>
                    <input type="number" value={calcRate} onChange={e => setCalcRate(e.target.value)} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 font-bold outline-none" placeholder="1.5" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Meses</label>
                    <input type="number" value={calcTime} onChange={e => setCalcTime(e.target.value)} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 font-bold outline-none" placeholder="12" />
                  </div>
                </div>
                <button onClick={handleCalculate} className="w-full bg-purple-600 text-white font-black py-5 rounded-3xl shadow-lg active:scale-95 transition-all uppercase tracking-widest text-sm">Simular Juros</button>
              </div>
              {calcResult && (
                <div className="pt-6 border-t border-gray-100 animate-in zoom-in duration-300">
                  <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100 mb-4 text-center">
                    <p className="text-[10px] font-black text-purple-600 uppercase mb-1">Montante Final</p>
                    <p className="text-3xl font-black text-purple-900">R$ {calcResult.total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      }
      case 'checklist': return (
        <div className="pb-24 pt-8 px-5 animate-in fade-in duration-300 space-y-8">
          <header>
            <h2 className="text-3xl font-black text-gray-900">Mapeamento <span className="text-purple-600 italic">Prático</span></h2>
            <p className="text-gray-500 font-medium">Ações que geram resultados imediatos.</p>
          </header>
          <div className="space-y-4">
            {CHECKLIST_DATA.map(item => {
              const isCompleted = user.completedChecklist.includes(item.id);
              return (
                <div key={item.id} className={`bg-white rounded-[32px] p-6 border transition-all duration-300 ${isCompleted ? 'border-green-100 bg-green-50/30' : 'border-gray-100 shadow-sm'}`}>
                  <div className="flex items-start gap-4">
                    <button 
                      onClick={() => toggleChecklistItem(item.id)}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all active:scale-90 ${
                        isCompleted ? 'bg-green-500 text-white shadow-lg shadow-green-100' : 'bg-gray-100 text-gray-300 border-2 border-dashed border-gray-200'
                      }`}
                    >
                      {isCompleted ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                    </button>
                    <div className="flex-1 pt-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className={`font-black text-base leading-tight ${isCompleted ? 'text-green-800 line-through opacity-60' : 'text-gray-900'}`}>
                          {item.label}
                        </h4>
                        {!isCompleted && (
                          <span className="text-[9px] font-black bg-purple-100 text-purple-600 px-2 py-1 rounded-lg uppercase tracking-wider">
                            +{XP_VALUES.CHECKLIST_ITEM} XP
                          </span>
                        )}
                      </div>
                      <p className={`text-sm leading-relaxed ${isCompleted ? 'text-green-700/60' : 'text-gray-500 font-medium'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="p-6 bg-orange-50 rounded-[32px] border-2 border-orange-100 text-center">
            <Trophy className="mx-auto text-orange-400 mb-3" size={32} />
            <h5 className="font-black text-orange-900 mb-1">Caminho para o Sucesso</h5>
            <p className="text-orange-800 text-xs font-bold uppercase tracking-widest opacity-80">
              {user.completedChecklist.length} de {CHECKLIST_DATA.length} tarefas concluídas
            </p>
          </div>
        </div>
      );
      case 'modules': return (
        <div className="pb-24 pt-8 px-5 animate-in slide-in-from-right duration-300 space-y-8">
          <header>
            <h2 className="text-3xl font-black text-gray-900">E-book <span className="text-purple-600 italic">Completo</span></h2>
            <p className="text-gray-500 font-medium">Estude cada tópico para desbloquear seu crédito.</p>
          </header>
          <div className="space-y-4">
            {EDUCATIONAL_MODULES.map(mod => (
              <div key={mod.id} className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
                <button onClick={() => setExpandedModule(expandedModule === mod.id ? null : mod.id)} className="w-full p-6 text-left flex justify-between items-center transition-all hover:bg-gray-50">
                  <div>
                    <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest">{mod.subtitle}</span>
                    <h3 className="text-xl font-bold text-gray-900">{mod.title}</h3>
                  </div>
                  <ChevronDown className={`transition-transform text-gray-400 ${expandedModule === mod.id ? 'rotate-180' : ''}`} />
                </button>
                {expandedModule === mod.id && (
                  <div className="px-4 pb-6 space-y-2 animate-in slide-in-from-top duration-300">
                    {mod.topics.map(t => (
                      <button 
                        key={t.id} 
                        onClick={() => setSelectedTopic(t)} 
                        className={`w-full text-left p-5 rounded-2xl flex items-center justify-between transition-all group ${
                          user.completedTopics.includes(t.id) ? 'bg-green-50' : 'bg-gray-50 hover:bg-purple-50'
                        }`}
                      >
                         <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                              user.completedTopics.includes(t.id) ? 'bg-green-500 text-white' : 'bg-white text-purple-300 group-hover:text-purple-600'
                            }`}>
                               {user.completedTopics.includes(t.id) ? <CheckCircle2 size={16} /> : <PlayCircle size={16} />}
                            </div>
                            <div>
                               <h4 className={`font-bold text-sm ${user.completedTopics.includes(t.id) ? 'text-green-800' : 'text-gray-900'}`}>{t.title}</h4>
                               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">
                                  {user.completedTopics.includes(t.id) ? 'Concluído' : `Vale +${XP_VALUES.TOPIC_READ} XP`}
                               </p>
                            </div>
                         </div>
                         <ChevronRight size={16} className="text-gray-300" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto shadow-2xl relative border-x border-gray-100 overflow-x-hidden">
      {renderCurrentView()}
      {activeTab !== 'onboarding' && !selectedTopic && (
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      )}
    </div>
  );
};

export default App;
