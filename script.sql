CREATE DATABASE StudentDB
GO

USE StudentDB
GO

CREATE TABLE Student(
	id INT IDENTITY(1,1),
	name varchar(200),
	email varchar(200),
	city varchar(200)
)
DROP TABLE Student

-- Select data from table
SELECT * FROM Student

-- Insert data into table
--INSERT INTO Student (name, email, city) VALUES ('Adam','adam@ef.com','Sydney'),
--                                               ('Tuan','tuan@ef.com','Vietnam'),
--											   ('Uma','uma@ef.com','Hyderebad')

INSERT INTO Student (name, email, city) VALUES ('xkjdkjsd','sdd@ef.com','sdsdsd')

-- update data of the table                                         
UPDATE Student SET name ='Scott Desatnick' WHERE id = 1

--delet data from the table
DELETE FROM Student WHERE id= 5