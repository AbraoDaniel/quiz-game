import { Button, Col, Row } from "antd";
import Presenter from "../Presenter";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import WinBoard from "../WinBoard";

// Definição do tipo para armazenar balões com posição e cor fixa
type Balloon = {
  xPos: number; // Posição horizontal
  hue: number; // Tonalidade fixa
};

const WinGamePage: React.FC = () => {
  const navigate = useNavigate();
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const location = useLocation();
  const { points } = location.state || {};

  useEffect(() => {
    // Gerar balões dinamicamente
    const interval = setInterval(() => {
      setBalloons((prev) => [
        ...prev,
        {
          xPos: Math.random() * 100, // Gera posição horizontal aleatória
          hue: Math.random() * 360, // Gera tonalidade fixa
        },
      ]);
    }, 300); // Adicionar balão a cada 300ms

    // Remover balões após 5 segundos
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Row style={{ width: "100vw", position: "relative", overflow: "hidden" }}>
      <Col xs={14}>
        <div
          style={{
            backgroundColor: "black",
            height: "100vh",
            display: "grid",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Row justify="space-between" style={{ alignItems: "center" }}>
            <Button
              className="question-button"
              style={{ backgroundColor: "#303030", color: "white" }}
              onClick={() => navigate("/")}
            >
              {"Retornar à tela inicial"}
            </Button>
          </Row>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <WinBoard points={points} />
          </div>
          {/* Contêiner para os balões */}
          <div className="balloon-container">
            {balloons.map((balloon, index) => (
              <img
                key={index}
                src="src/assets/redballoon.png"
                className="balloon"
                style={{
                  "--x-pos": balloon.xPos,
                  filter: `hue-rotate(${balloon.hue}deg)`, // Aplica tonalidade fixa
                } as React.CSSProperties}
                alt="Balloon"
              />
            ))}
          </div>
        </div>
      </Col>
      <Col xs={10}>
        <Presenter />
      </Col>
    </Row>
  );
};

export default WinGamePage;
