// Classe pai
class Usuario {
    nome: string;
    senha: string;
    email: string;
    slv_usr: boolean; // Salvar Usuario
    nivel_permissao: number;
    // Permissão 1 Alunos: visualizar
    // Permissão 2 Professor: (+ Permissão 1) Editar, Adicionar, Excluir.
    // Permissão 3 administrador: (+ Permissão 2) Excluir contas, Configuração do sistema, Resolução de problemas.
  }
  
  // Classe filha Professor
  class Professor extends Usuario {
    disciplina: string[];
  }
  
  // Classe filha Aluno
  class Aluno extends Usuario {
    Rm: string;
    turma: string;
    atividades_completas: number;
    notas: number[];
  
    // método que calcula a nota final
    calcularNotaFinal() {

    }
  }
  
  // Classe Atividade separada
  class Atividade{
    descricao: string;
    data_Entrega: Date;
    nota: number;
  }