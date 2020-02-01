CREATE TABLE tb_usuarios(
    id_usuario INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(60) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(150) NOT NULL,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp,
    PRIMARY KEY(id_usuario)
);
