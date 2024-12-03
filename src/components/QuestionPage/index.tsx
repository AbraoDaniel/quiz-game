/* eslint-disable @typescript-eslint/no-explicit-any */
import { QuestionOutlined } from "@ant-design/icons";
import { Button, Card, Col, Modal, Row, Tooltip, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Presenter from "../Presenter";
import { answers, questions } from "../../util/propertieFields";

const QuestionPage: React.FC = () => {
  const navigate = useNavigate();
  const [showTipModal, setShowTipModal] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [errorQuestions, setErrorQuestions] = useState<any>([]);
  const [points, setPoints] = useState(0);
  const [count, setCount] = useState(3);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    if (count === 0) {
      navigate("/lose_game", {
        state: { points, questionsQtd: questions?.length, errors: errorQuestions },
      });
    }
  }, [count, errorQuestions, navigate, points]);

  useEffect(() => {
    if (questionIndex === questions.length || points === 10) {
      navigate("/win_game", { state: { points } });
    }
  }, [questionIndex, questions.length, navigate, points]);

  function handleAnswer(answer: string) {
    setSelectedAnswer(answer);
    if (questions[questionIndex]?.correctAnswer === answer) {
      setPoints((state) => state + 1);
    } else {
      setErrorQuestions((state: any) => [
        ...state,
        {
          question: questionIndex,
          correctAnswer: questions[questionIndex]?.correctAnswer,
          userAnswer: answer,
        },
      ]);
      setCount((state) => state - 1);
    }
    setTimeout(() => {
      setQuestionIndex((state) => state + 1);
      setSelectedAnswer(null); 
    }, 1000);
  }

  const hearts = Array.from({ length: count }).map((_, index) => (
    <img key={index} src={"src/assets/heart.png"} style={{ marginRight: 5 }} />
  ));

  return (
    <Row style={{ width: "100vw" }}>
      <Col xs={14}>
        <div style={{ backgroundColor: "black", height: "100vh", display: "grid", justifyContent: "center" }}>
          <Row justify="space-between" style={{ alignItems: "center" }}>
            <Button
              className="question-button"
              style={{ backgroundColor: "#303030", color: "white" }}
              onClick={() => navigate("/")}
            >
              {"Retornar à tela inicial"}
            </Button>
            <div style={{ width: 150, height: 25, display: "flex" }}>{hearts}</div>
            <Tooltip title={"Solicitar Dica"} placement="right">
              <Button
                type="primary"
                shape="circle"
                className="tip-button"
                style={{ backgroundColor: "#303030" }}
                icon={<QuestionOutlined />}
                onClick={() => setShowTipModal(true)}
              />
            </Tooltip>
          </Row>

          <Card
            style={{
              boxShadow: "2px 5px 10px black",
              justifyContent: "center",
              display: "flex",
              background: "#303030",
              height: 150,
              width: "50vw",
              alignItems: "center",
              fontSize: 26,
              color: "white",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            {questions[questionIndex]?.title}
          </Card>

          <div style={{ width: "50vw", height: "50vh" }}>
            {answers[questionIndex]?.map((answer: {description: string, value: string}) => {
              const isCorrect = answer.value === questions[questionIndex]?.correctAnswer;
              const isSelected = answer.value === selectedAnswer;

              let backgroundColor = "#303030";
              if (isSelected) {
                backgroundColor = isCorrect ? "green" : "red";
              } else if (!isSelected && isCorrect && selectedAnswer) {
                backgroundColor = "green";
              }

              return (
                <Button
                  key={answer.value}
                  className="question-button"
                  style={{
                    display: "flex",
                    width: "100%",
                    padding: 15,
                    alignItems: "center",
                    backgroundColor,
                    height: "11vh",
                    fontSize: answer?.description?.length < 35 ? 36 : 22,
                    marginBottom: 20,
                    color: "white",
                    justifyContent: "start",
                    boxShadow: "2px 5px 10px black",
                    borderRadius: "10px",
                  }}
                  onClick={() => handleAnswer(answer?.value)}
                  disabled={!!selectedAnswer} // Desabilita o clique em outras respostas após uma ser selecionada
                >
                  {answer?.value}: {answer?.description}
                </Button>
              );
            })}
          </div>
        </div>
      </Col>
      <Col xs={10}>
        <Presenter />
      </Col>
      {showTipModal && (
        <Modal
          title="Dica solicitada"
          className="attempt-limit"
          open={true}
          onCancel={() => setShowTipModal(false)}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <Typography>{questions[questionIndex]?.tip}</Typography>
        </Modal>
      )}
    </Row>
  );
};

export default QuestionPage;
