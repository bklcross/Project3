USE authdb;

INSERT INTO users (email, password, first_name, last_name, created, modified)
VALUES
	("a@b.c",		"a",		"a",		"a", 		now(),	now()),
	("bob@b.c",		"bob",		"Bob",		"Imel", 	now(),	now()),
	("brian@b.c",	"brian",	"Brian",	"Lee", 		now(),	now()),
	("dan@b.c",		"dan",		"Dan",		"McCabe", 	now(),	now()),
	("wayne@b.c",	"wayne",	"Wayne",	"unknown", 	now(),	now())
    ;
