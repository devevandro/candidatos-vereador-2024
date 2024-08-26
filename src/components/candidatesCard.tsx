"use client";
import { Candidatos } from "@/models/candidates";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataMapper } from "@/mappers";
import { Candidato } from "@/models/datas";

/* eslint-disable @next/next/no-img-element */
export function CandidatesCard() {
  const [candidatos, setCandidatos] = useState<Candidatos[]>();

  useEffect(() => {
    axios
      .get(
        "https://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2024/75256/2045202024/13/candidatos"
      )
      .then((response) => {
        const { data } = response;
        const values = data?.candidatos;
        const mapper = values?.map((value: Candidato) => DataMapper(value));
        setCandidatos(mapper);
      });
  }, []);

  return (
    <>
      {candidatos?.map((candidato) => {
        return (
          <>
            <div
              className="bg-background rounded-lg shadow-lg overflow-hidden"
              key={candidato?.id}
            >
              <img
                key={candidato?.id}
                src={`https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/${candidato?.id}/75256`}
                alt="Person 1"
                width={500}
                height={300}
                className="w-full h-96 object-cover"
                style={{ aspectRatio: "500/300", objectFit: "contain" }}
              />
              <div className="p-4" key={candidato?.id}>
                <h3 className="text-lg font-semibold">
                  {candidato?.nomeUrna || "Jon Doe Nick"}
                </h3>
                <p className="text-muted-foreground font-semibold">
                  {candidato?.nomeColigacao || "Jon Doe"}
                </p>
                <p className="text-sm font-medium">{candidato?.numero || 0}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
