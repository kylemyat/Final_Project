CREATE TABLE IF NOT EXISTS public."Loandata"
(
    id integer NOT NULL,
    loan_amnt integer,
    funded_amnt bigint,
    funded_amnt_inv numeric,
    term interval,
    int_rate numeric,
    installment numeric,
    emp_length character varying COLLATE pg_catalog."default",
    home_ownership character varying COLLATE pg_catalog."default",
    annual_inc bigint,
    verification_status character varying COLLATE pg_catalog."default",
    loan_status character varying COLLATE pg_catalog."default",
    purpose character varying COLLATE pg_catalog."default",
    title character varying COLLATE pg_catalog."default",
    dti numeric,
    delinq_2yrs bigint,
    inq_last_6mths bigint,
    open_acc bigint,
    pub_rec bigint,
    revol_bal bigint,
    revol_util numeric,
    total_acc bigint,
    CONSTRAINT "Loandata_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Loandata"
    OWNER to postgres;