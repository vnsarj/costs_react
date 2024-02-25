import styles from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";

import { useNavigate } from "react-router-dom";

function NewProject({ btnText }) {
  const history = useNavigate();

  function createPost(project) {
    // initialize cost nd service

    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
        history("/project", { state: {message: "Projeto criado com sucesso!" }});
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para adicionar serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}

export default NewProject;
