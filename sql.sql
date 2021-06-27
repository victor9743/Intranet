create database intranet;
use intranet;

/* usuários */
create table usuarios(
id_usuario int not null primary key auto_increment,
usuario varchar(15) not null,
senha varchar(32) not null

);

/* arquivos */

create table arquivos(
id_arquivo int primary key auto_increment,
arquivo varchar(50) not null,
ativo enum("sim", "não")
);

/* cartórios */
create table cartorios(
id_cartorio int primary key auto_increment,
_cnpj enum("sim", "não") not null,
cnpj varchar(14) not null,
cei varchar(20),
serventia varchar(6),
codigo_cnj varchar(5),
cartorio_nome varchar(80) not null,
cartorio_nome_fantasia varchar(80) not null,
cartorio_nome_resumido varchar(80) not null,
cep varchar(8) not null,
logradouro varchar(80) not null,
numero varchar(5),
complemento varchar(30),
bairro varchar(30) not null,
cidade varchar(30) not null,
telefone_fixo varchar(10) not null,
telefone_celular varchar(9),
cartorio_whatsapp enum("sim", "não"),
email varchar(50) not null,
tabeliao_cpf varchar(11) unique,
tabeliao_nome varchar(50) not null,
tabeliao_telefone_celular varchar(10),
tabeliao_whatsapp enum("sim", "não"),
tabeliao_email varchar(50) not null,
substituto_cpf varchar(11) unique,
substituto_nome varchar(50) not null,
substituto_telefone_celular varchar(10),
substituto_whatsapp enum("sim", "não"),
substituto_email varchar(50) not null,
cobranca enum("fisica","juridica"),
entrancia int,
contribuicao int,
regiao int not null,
atividade int,
observacoes varchar(100),
cadastro_data timestamp default current_timestamp,
/* fk atividade */
constraint fk_atividades foreign key(atividade)
references atividades(id_atividade),

/* fk contribuicao */
constraint fk_contribuicoes foreign key(contribuicao)
references contribuicoes(id_contribuicao),

/* fk regioes */
constraint fk_regioes foreign key(regiao)
references regioes(id_regiao),

/* fk entrancias */
constraint fk_entrancias foreign key(entrancia)
references entrancias(id_entrancia)

);


create table atividades(
id_atividade int primary key auto_increment,
nome_atividade varchar(50) not null,
ativo enum("sim","não")
);

create table contribuicoes(
 id_contribuicao int primary key auto_increment,
 nome_contribuicao varchar(20),
 ativo enum("sim", "não")
);
create table regioes(
id_regiao int primary key auto_increment,
nome_regiao varchar(20) not null,
ativo enum("sim","não")
);

create table entrancias(
id_entrancia int primary key auto_increment,
nome_entrancia varchar(20) not null,
ativo enum("sim","não")
);

create table contribuicoes(
id_contribuicao int primary key auto_increment,
ano int(4) not null,
arquivo_contribuicao varchar(100)
);


insert into usuarios(usuario, senha) values("teste",123456);

drop database intranet;

select * from usuarios;

select * from usuarios where id_usuario ='4' and usuario ='teste';