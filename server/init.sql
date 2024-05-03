DO $$
BEGIN

    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'status') THEN
        CREATE TABLE "public"."status" ( 
            "id" SERIAL,
            "status" VARCHAR NOT NULL,
            CONSTRAINT "status_pkey" PRIMARY KEY ("id"),
            CONSTRAINT "UQ_c4ed986d2e229822be95b2bae31" UNIQUE ("status")
        );


        INSERT INTO "public"."status" ("status") VALUES
            ('pending'),
            ('progress'),
            ('completed');
    END IF;


    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'todo-list') THEN
        CREATE TABLE "public"."todo-list" ( 
            "id" SERIAL,
            "title" VARCHAR NOT NULL,
            "description" TEXT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now() ,
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now() ,
            "status" INTEGER NULL,
            CONSTRAINT "PK_45bb5da8cc53815d58f810dd2d4" PRIMARY KEY ("id"),
            CONSTRAINT "FK_81e30262eff88324dd250c6a747" FOREIGN KEY ("status") REFERENCES "public"."status" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        );
    END IF;
END $$;