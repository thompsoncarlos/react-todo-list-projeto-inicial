import { useState } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconAnchor, IconPlus } from "./components/icons";
import { SubHeading } from "./components/SubHeading";
import { ToDoItem } from "./components/ToDoItem";
import { ToDoList } from "./components/ToDoList";
import { ToDoForm } from "./components/ToDoForm";

const now = new Date();
const today = [
  now.getFullYear(),
  String(now.getMonth() + 1).padStart(2, "0"),
  String(now.getDate()).padStart(2, "0"),
].join("-");

const todos = [
  {
    id: 1,
    description: "Receber o serviço e conferir as ordens em vigor",
    completed: false,
    createdAt: today,
  },
  {
    id: 2,
    description: "Verificar o livro de serviço e registros pendentes",
    completed: false,
    createdAt: today,
  },
  {
    id: 3,
    description: "Conferir os meios de comunicação do posto",
    completed: false,
    createdAt: today,
  },
  {
    id: 4,
    description: "Realizar as rondas previstas na escala",
    completed: false,
    createdAt: today,
  },
];
const completed = [
  {
    id: 5,
    description: "Receber as informações do serviço anterior",
    completed: true,
    createdAt: today,
  },
  {
    id: 6,
    description: "Conferir os materiais sob responsabilidade do posto",
    completed: true,
    createdAt: today,
  },
];

function App() {
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  const addTodo = () => {
    toggleDialog();
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconAnchor />
            <span>
              Plano do Dia
              <small>Oficial de Serviço · Marinha do Brasil</small>
            </span>
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <SubHeading>A cumprir</SubHeading>
          <ToDoList>
            {todos.map(function (t) {
              return <ToDoItem key={t.id} item={t} />;
            })}
          </ToDoList>
          <SubHeading>Cumprido</SubHeading>
          <ToDoList>
            {completed.map(function (t) {
              return <ToDoItem key={t.id} item={t} />;
            })}
          </ToDoList>
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <ToDoForm onSubmit={addTodo} />
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
