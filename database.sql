DROP TABLE IF EXISTS rgutable;
CREATE TABLE IF NOT EXISTS rgutable
(
  buildID varchar(4) NOT NULL,
  roomNo varchar(4) NOT NULL,
  floorNo int(1) NOT NULL,
  PRIMARY KEY (buildID)
);

INSERT INTO `rgutable`(`buildID`, `roomNo`, `floorNo`) VALUES ('SIWB','N533','5');
INSERT INTO `rgutable`(`buildID`, `roomNo`, `floorNo`) VALUES ('RB','221','2');
INSERT INTO `rgutable`(`buildID`, `roomNo`, `floorNo`) VALUES ('IGB','H234','2');
INSERT INTO `rgutable`(`buildID`, `roomNo`, `floorNo`) VALUES ('GHA','SA18','1');