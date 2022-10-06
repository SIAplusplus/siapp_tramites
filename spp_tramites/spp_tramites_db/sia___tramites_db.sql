
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



CREATE TABLE `sia++_tramites_db` (
  `id` int(100) NOT NULL,
  `student_id` int(100) NOT NULL,
  `motive` varchar(1000) NOT NULL,
  `request_text` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



INSERT INTO `sia++_tramites_db` (`id`, `student_id`, `motive`, `request_text`) VALUES
(1, 55, 'Motivo 1', 'Motivo text 1'),
(2, 5, 'Motivo 5', 'Motivo text 5');


ALTER TABLE `sia++_tramites_db`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `sia++_tramites_db`
--
ALTER TABLE `sia++_tramites_db`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;


