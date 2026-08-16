import './Card.css';

export default function Card({ title, description, icon }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <button className="card-button">Learn More</button>
    </div>
  );
}
