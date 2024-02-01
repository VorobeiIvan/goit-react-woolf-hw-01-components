import React from 'react';

// Компонент статистики, який відображає статистичні дані
const Statistics = ({ title, stats }) => {
  // Перевірка, чи існують статистичні дані
  if (!stats) {
    return null; // Можна також вивести пустий або заглушковий елемент
  }

  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {/* Перевірка на наявність stats перед використанням map */}
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
