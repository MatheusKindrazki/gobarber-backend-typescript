# Recuperação de senha

**RF | Requisitos Funcionais**

- O Usuário deve poder recuperar sua senha informando o seu email;
- O Usuário deve receber um e-mail com instruções de recuperação de senha;
- O Usuário deve poder resetar sua senha;

**RNF | Requisitos não Funcionais**

- Utilizar mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano ( background job );

**RN | Requisitos de Negocio**

- O link enviado por e-mail para resete de senha, deve expirar em 2h;
- O Usuário precisa confirmar a nova senha ao resetar a senha;

# Atualização do perfil

**RF | Requisitos Funcionais**

- O Usuário deve atualizar seu nome, email, avatar e senha;

**RN | Requisitos de Negocio**

- O Usuário não pode alterar seu e-mail para um já cadastrado dentro da plataforma;
- Para atualizar a senha, o usuário deve informar a senha antiga;
- Para atualizar a senha, o usuário deve confirmar a senha;

# Painel do prestador

**RF | Requisitos Funcionais**

- O Usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF | Requisitos não Funcionais**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- AS notificações do prestador deverm ser enviadas em tempo-real utilizando Socket.io;

**RN | Requisitos de Negocio**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;


# Agendamento de serviços

**RF | Requisitos Funcionais**

- O Usuário deve poder listar todos os prestadores de serviço cadastrados;
- O Usuário deve poder listar os dias de um mês com pelo menos um horário disponível por prestador;
- O Usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O Usuário deve poder realiazar um novo agendamento com um prestador;


**RNF | Requisitos não Funcionais**

- A listagem de prestadores deve ser armazenada em cache;


**RN | Requisitos de Negocio**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h / 18h (Primeiro ás 8h, último ás 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um usuário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
-
