
CREATE TABLE Usuario (
	Rut varchar(255) UNIQUE,
	nombre varchar(255),
	apellido varchar(255),
	correo varchar(255) UNIQUE,
	fecha_nacimiento date,
	telefono int,
	password varchar(255),
	PRIMARY KEY (Rut)

);
CREATE TABLE Cancha (
	Id_cancha varchar(255),
	PRIMARY KEY (Id_cancha)
);

CREATE TABLE Descripcion(
	Id_cancha varchar(255),
	capacidad int,
	costo int,
	FOREIGN KEY (Id_cancha) REFERENCES Cancha(Id_cancha)
);

CREATE TABLE Reservar(
	Codigo_reserva varchar(255),
	id_cancha varchar(255),
	rut_cliente varchar,
	fecha date,
	hora  int,
	PRIMARY KEY (Codigo_reserva),
	FOREIGN KEY (id_cancha) REFERENCES Cancha(Id_cancha),
	FOREIGN KEY (rut_cliente) REFERENCES Usuario(Rut)
);

CREATE TABLE Disponible(
	id_cancha varchar(255),
	fecha date,
	hora int,
	isAvaible boolean,
	FOREIGN KEY (id_cancha) REFERENCES Cancha(Id_cancha)
);


insert into usuario(Rut,nombre,apellido,correo,fecha_nacimiento,telefono) 
values ('20040740-7','italo','adrian','italin131@gmail.com','1998-10-31',979179677);

INSERT INTO Cancha(Id_cancha) VALUES
('000001'),
('000002'),
('000003');


INSERT INTO Disponible(id_cancha,fecha,hora,isAvaible) VALUES
('000001','2021-12-29',1800,'1'),
('000001','2021-12-29',1900,'1'),
('000001','2021-12-29',2000,'1'),
('000001','2021-12-29',2100,'1'),
('000002','2021-12-29',1800,'1'),
('000002','2021-12-29',1900,'1'),
('000002','2021-12-29',2100,'1'),
('000002','2021-12-29',2300,'1'),
('000003','2021-12-29',1800,'1'),
('000003','2021-12-29',2000,'1'),
('000003','2021-12-29',2300,'0');
