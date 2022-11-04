# 3. Crea una BD en MySQL con una tabla usuarios, como la de los ejercicios anteriores y permite insertar por medio de un procedimiento usuarios en la tabla.

#DROP DATABASE Ejercicio4nov;
CREATE DATABASE Ejercicio4nov;
USE Ejercicio4nov;

CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    passw VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);
# DROP PROCEDURE insertData;
#Procedimiento
DELIMITER //
CREATE PROCEDURE insertData (IN email varchar(50),IN passw varchar(50))
BEGIN
    insert into Usuarios (email,passw) values (email,passw);
END
//
DELIMITER ;

CALL insertData('gerar@gmail.com','223435435');
SELECT * FROM Usuarios