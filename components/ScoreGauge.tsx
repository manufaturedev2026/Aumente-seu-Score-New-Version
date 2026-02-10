
import React from 'react';

interface ScoreGaugeProps {
  score: number;
}

const ScoreGauge: React.FC<ScoreGaugeProps> = ({ score }) => {
  const percentage = Math.min(Math.max(score / 1000, 0), 1);
  
  // Usando viewBox 100x100 para escalonamento perfeito
  // Raio 40 deixa margem para a borda (stroke) de 8
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - percentage * circumference;
  
  const getColor = (val: number) => {
    if (val < 300) return '#ef4444'; // Vermelho
    if (val < 500) return '#f97316'; // Laranja
    if (val < 700) return '#eab308'; // Amarelo
    return '#22c55e'; // Verde
  };

  return (
    <div className="relative flex items-center justify-center w-40 h-40 mx-auto">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full transform -rotate-90"
      >
        {/* Círculo de Fundo (Trilha) */}
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          fill="transparent"
          stroke="#f3f4f6"
          strokeWidth={stroke}
        />
        {/* Círculo de Progresso */}
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          fill="transparent"
          stroke={getColor(score)}
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      
      {/* Centralização do Texto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-4xl font-black text-gray-900 leading-none">
          {score}
        </span>
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mt-2 ml-1">
          Pontos
        </span>
      </div>
    </div>
  );
};

export default ScoreGauge;
