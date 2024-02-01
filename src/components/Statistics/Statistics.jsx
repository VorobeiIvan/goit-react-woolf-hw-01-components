import getRandomColor from '../getRandomColor';

const Statistics = ({ title, stats }) => {
  if (!stats) {
    return null;
  }
  return (
    <section className="statistics">
      <h2 className="title-statistics">{title}</h2>

      <ul className="stat-list-statistics">
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className="item-statistics"
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label-statistics">{label}</span>
            <span className="percentage-statistics">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
