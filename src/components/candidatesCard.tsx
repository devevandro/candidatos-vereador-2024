"use client";
import { Candidates } from "@/models/candidates";
import { useEffect, useState } from "react";
import { getCandidates } from "@/services";

/* eslint-disable @next/next/no-img-element */
export function CandidatesCard() {
  const [candidates, setCandidates] = useState<Candidates[]>();

  useEffect(() => {
    console.log(process);
    getCandidates().then((values) => {
      setCandidates(values);
    });
  }, []);

  return (
    <>
      {candidates?.map((candidate) => {
        return (
          <div
            className="bg-background rounded-lg shadow-lg overflow-hidden"
            key={candidate?.nomeUrna}
          >
            <img
              src={`https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/${candidate?.id}/75256`}
              alt="Person 1"
              width={500}
              height={300}
              className="w-full h-96 object-cover"
              style={{ aspectRatio: "500/300", objectFit: "contain" }}
            />
            <div className="p-4" key={candidate?.nomeUrna}>
              <h3 className="text-lg font-semibold">
                {candidate?.nomeUrna || "Jon Doe Nick"}
              </h3>
              <span className="text-lg font-medium">{candidate?.numero || 0}</span>
              <h6 className="text-lg">{candidate?.dataDeNascimento}</h6>
              <p className="text-muted-foreground font-semibold">
              {"Coligação: " } {candidate?.nomeColigacao || "Jon Doe"}
              </p>
              <p className="text-sm font-medium">
                {"Reeleição: " } {candidate?.reeleicao === true ? "SIM" : "NÃO"}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
