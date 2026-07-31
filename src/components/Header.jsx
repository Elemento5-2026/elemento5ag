import "./Header.css";

export default function Header() {
  return (
    <header className="header">

      <div className="header-left">

        <div className="logo">
          GRUPO AG
        </div>

        <h1 className="title">
          Elemento 5
        </h1>

        <p className="subtitle">
          Gestión de Incidentes
        </p>

      </div>

      <div className="header-right">

        <div className="user">
          👤 Pablo Hernández
        </div>

        <div className="date">
          31 Jul 2026
        </div>

      </div>

    </header>
  );
}
