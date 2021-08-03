--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying NOT NULL
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: periods; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.periods (
    id integer NOT NULL,
    name character varying NOT NULL
);


--
-- Name: periods_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.periods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: periods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.periods_id_seq OWNED BY public.periods.id;


--
-- Name: professors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.professors (
    id integer NOT NULL,
    name character varying NOT NULL
);


--
-- Name: professors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.professors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: professors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.professors_id_seq OWNED BY public.professors.id;


--
-- Name: professors_subjects_subjects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.professors_subjects_subjects (
    "professorsId" integer NOT NULL,
    "subjectsId" integer NOT NULL
);


--
-- Name: subjects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.subjects (
    id integer NOT NULL,
    name character varying NOT NULL
);


--
-- Name: subjects_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.subjects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: subjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.subjects_id_seq OWNED BY public.subjects.id;


--
-- Name: tests; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tests (
    id integer NOT NULL,
    name character varying NOT NULL,
    link character varying NOT NULL,
    "categoryId" integer,
    "subjectId" integer,
    "professorId" integer,
    "periodId" integer
);


--
-- Name: tests_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tests_id_seq OWNED BY public.tests.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: periods id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.periods ALTER COLUMN id SET DEFAULT nextval('public.periods_id_seq'::regclass);


--
-- Name: professors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professors ALTER COLUMN id SET DEFAULT nextval('public.professors_id_seq'::regclass);


--
-- Name: subjects id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subjects ALTER COLUMN id SET DEFAULT nextval('public.subjects_id_seq'::regclass);


--
-- Name: tests id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests ALTER COLUMN id SET DEFAULT nextval('public.tests_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.categories VALUES (1, 'P1');
INSERT INTO public.categories VALUES (2, 'P2');
INSERT INTO public.categories VALUES (3, 'P3');
INSERT INTO public.categories VALUES (4, 'P2ch');
INSERT INTO public.categories VALUES (5, 'outras');
INSERT INTO public.categories VALUES (6, 'P1');
INSERT INTO public.categories VALUES (7, 'P2');
INSERT INTO public.categories VALUES (8, 'P3');
INSERT INTO public.categories VALUES (9, 'P2ch');
INSERT INTO public.categories VALUES (10, 'outras');


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.migrations VALUES (1, 1627904088420, 'migration11627904088420');


--
-- Data for Name: periods; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.periods VALUES (1, '1º');
INSERT INTO public.periods VALUES (2, '2º');
INSERT INTO public.periods VALUES (3, 'Eletiva');
INSERT INTO public.periods VALUES (4, '1º');
INSERT INTO public.periods VALUES (5, '2º');
INSERT INTO public.periods VALUES (6, 'Eletiva');


--
-- Data for Name: professors; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.professors VALUES (1, 'Professor 1');
INSERT INTO public.professors VALUES (2, 'Professor 2');
INSERT INTO public.professors VALUES (3, 'Professor 3');
INSERT INTO public.professors VALUES (4, 'Professor 1');
INSERT INTO public.professors VALUES (5, 'Professor 2');
INSERT INTO public.professors VALUES (6, 'Professor 3');


--
-- Data for Name: professors_subjects_subjects; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: subjects; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.subjects VALUES (1, 'Disciplina 1');
INSERT INTO public.subjects VALUES (2, 'Disciplina 1');
INSERT INTO public.subjects VALUES (3, 'Disciplina 1');
INSERT INTO public.subjects VALUES (4, 'Disciplina 1');
INSERT INTO public.subjects VALUES (5, 'Disciplina 2');
INSERT INTO public.subjects VALUES (6, 'Disciplina 3');


--
-- Data for Name: tests; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categories_id_seq', 10, true);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.migrations_id_seq', 1, true);


--
-- Name: periods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.periods_id_seq', 6, true);


--
-- Name: professors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.professors_id_seq', 6, true);


--
-- Name: subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.subjects_id_seq', 6, true);


--
-- Name: tests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tests_id_seq', 1, false);


--
-- Name: subjects PK_1a023685ac2b051b4e557b0b280; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subjects
    ADD CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY (id);


--
-- Name: categories PK_24dbc6126a28ff948da33e97d3b; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY (id);


--
-- Name: tests PK_4301ca51edf839623386860aed2; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT "PK_4301ca51edf839623386860aed2" PRIMARY KEY (id);


--
-- Name: professors PK_6b249c6363a154820c909c45e27; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professors
    ADD CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY (id);


--
-- Name: periods PK_86c6afb6c818d97dc321898627c; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.periods
    ADD CONSTRAINT "PK_86c6afb6c818d97dc321898627c" PRIMARY KEY (id);


--
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- Name: professors_subjects_subjects PK_f7a683c2962f5b05c570c1ee5d8; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professors_subjects_subjects
    ADD CONSTRAINT "PK_f7a683c2962f5b05c570c1ee5d8" PRIMARY KEY ("professorsId", "subjectsId");


--
-- Name: IDX_ab84af5b3c6dbc738858eafec0; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "IDX_ab84af5b3c6dbc738858eafec0" ON public.professors_subjects_subjects USING btree ("professorsId");


--
-- Name: IDX_b5897f0bd8b57c0de84ce6132d; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "IDX_b5897f0bd8b57c0de84ce6132d" ON public.professors_subjects_subjects USING btree ("subjectsId");


--
-- Name: tests FK_3557744b71edc782e1882c84776; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT "FK_3557744b71edc782e1882c84776" FOREIGN KEY ("professorId") REFERENCES public.professors(id);


--
-- Name: tests FK_910215de6563cf9f350eeb60a1d; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT "FK_910215de6563cf9f350eeb60a1d" FOREIGN KEY ("subjectId") REFERENCES public.subjects(id);


--
-- Name: tests FK_a59dc4db9bd3d8407148a9b214b; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b" FOREIGN KEY ("categoryId") REFERENCES public.categories(id);


--
-- Name: professors_subjects_subjects FK_ab84af5b3c6dbc738858eafec0f; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professors_subjects_subjects
    ADD CONSTRAINT "FK_ab84af5b3c6dbc738858eafec0f" FOREIGN KEY ("professorsId") REFERENCES public.professors(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: professors_subjects_subjects FK_b5897f0bd8b57c0de84ce6132d2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professors_subjects_subjects
    ADD CONSTRAINT "FK_b5897f0bd8b57c0de84ce6132d2" FOREIGN KEY ("subjectsId") REFERENCES public.subjects(id);


--
-- Name: tests FK_efa5a6e1633a29cb951532ee424; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT "FK_efa5a6e1633a29cb951532ee424" FOREIGN KEY ("periodId") REFERENCES public.periods(id);


--
-- PostgreSQL database dump complete
--

