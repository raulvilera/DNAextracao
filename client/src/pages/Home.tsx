import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Coleta da Amostra",
    icon: "🧪",
    color: "oklch(0.65 0.22 165)",
    description:
      "O material biológico (sangue, saliva, tecido) é coletado com cuidado. A qualidade da amostra é fundamental para o sucesso do processo.",
    details: [
      "Escolha da amostra adequada ao objetivo",
      "Uso de equipamentos estéreis",
      "Conservação a temperatura correta",
      "Identificação e rastreabilidade",
    ],
    fact: "Uma única célula humana contém cerca de 2 metros de DNA!",
  },
  {
    id: 2,
    title: "Lise Celular",
    icon: "💥",
    color: "oklch(0.6 0.2 200)",
    description:
      "As células são rompidas usando detergentes (SDS), temperatura, ou pressão mecânica para liberar o conteúdo interno, incluindo o DNA.",
    details: [
      "Detergente rompe membranas lipídicas",
      "Proteínas são desnaturadas",
      "DNA e RNA são liberados",
      "Tampão de lise mantém pH ideal",
    ],
    fact: "O SDS (dodecil sulfato de sódio) é o mesmo composto do shampoo!",
  },
  {
    id: 3,
    title: "Remoção de Proteínas",
    icon: "🔬",
    color: "oklch(0.58 0.18 280)",
    description:
      "Proteínas associadas ao DNA (histonas, etc.) são removidas por digestão com Proteinase K ou precipitação com sais e solventes orgânicos.",
    details: [
      "Proteinase K degrada proteínas",
      "Fenol-clorofórmio separa fases",
      "Proteínas ficam na fase orgânica",
      "DNA permanece na fase aquosa",
    ],
    fact: "As histonas organizam o DNA em estruturas chamadas nucleossomos.",
  },
  {
    id: 4,
    title: "Precipitação do DNA",
    icon: "❄️",
    color: "oklch(0.55 0.18 240)",
    description:
      "O DNA é precipitado com etanol frio e sal (acetato de sódio). O álcool reduz a solubilidade do DNA na água, formando uma massa visível.",
    details: [
      "Adição de acetato de sódio 3M",
      "Etanol absoluto gelado (-20°C)",
      "Centrifugação forma o pellet",
      "DNA visível como fio branco",
    ],
    fact: "O DNA precipitado se parece com fios de algodão brancos flutuando!",
  },
  {
    id: 5,
    title: "Purificação",
    icon: "✨",
    color: "oklch(0.62 0.2 130)",
    description:
      "O pellet de DNA é lavado com etanol 70% para remover sais residuais e contaminantes, depois ressuspenso em tampão TE ou água ultrapura.",
    details: [
      "Lavagem com etanol 70%",
      "Secagem do pellet",
      "Ressuspensão em tampão TE",
      "Armazenamento a -20°C ou -80°C",
    ],
    fact: "O tampão TE (Tris-EDTA) protege o DNA da degradação.",
  },
  {
    id: 6,
    title: "Verificação de Qualidade",
    icon: "📊",
    color: "oklch(0.6 0.22 60)",
    description:
      "A qualidade e concentração do DNA são avaliadas por espectrofotometria (NanoDrop), fluorometria (Qubit) ou eletroforese em gel de agarose.",
    details: [
      "Razão 260/280 indica pureza",
      "Concentração em ng/μL",
      "Gel de agarose mostra integridade",
      "DNA genômico: banda única no topo",
    ],
    fact: "Uma razão 260/280 entre 1,8–2,0 indica DNA puro de alta qualidade!",
  },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const handleStepClick = (stepId: number) => {
    setActiveStep(activeStep === stepId ? null : stepId);
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      next.add(stepId);
      return next;
    });
  };

  const progress = (completedSteps.size / steps.length) * 100;
  const activeStepData = steps.find((s) => s.id === activeStep);

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header
        style={{
          background: "oklch(0.14 0.025 240 / 0.95)",
          borderBottom: "1px solid oklch(0.3 0.03 240)",
          backdropFilter: "blur(20px)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 0",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.75rem",
                  background: "linear-gradient(135deg, oklch(0.65 0.22 165), oklch(0.55 0.18 200))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                }}
              >
                🧬
              </div>
              <div>
                <h1
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "oklch(0.95 0.005 240)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  Extração de DNA
                </h1>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "oklch(0.6 0.015 240)",
                    margin: 0,
                  }}
                >
                  Atividade Interativa
                </p>
              </div>
            </div>
            <div
              style={{
                background: "oklch(0.2 0.025 240)",
                border: "1px solid oklch(0.3 0.03 240)",
                borderRadius: "2rem",
                padding: "0.375rem 1rem",
                fontSize: "0.8rem",
                color: "oklch(0.65 0.22 165)",
                fontWeight: 600,
              }}
            >
              {completedSteps.size}/{steps.length} etapas
            </div>
          </div>
        </div>
      </header>

      <main className="container" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        {/* Hero */}
        <section style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div
            style={{
              display: "inline-block",
              background: "oklch(0.65 0.22 165 / 0.1)",
              border: "1px solid oklch(0.65 0.22 165 / 0.3)",
              borderRadius: "2rem",
              padding: "0.375rem 1.25rem",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "oklch(0.65 0.22 165)",
              marginBottom: "1.25rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Biologia Molecular
          </div>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "oklch(0.95 0.005 240)",
              margin: "0 0 1rem",
              lineHeight: 1.15,
            }}
          >
            Como extraímos o{" "}
            <span
              style={{
                background: "linear-gradient(135deg, oklch(0.65 0.22 165), oklch(0.55 0.18 200))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              DNA
            </span>{" "}
            de uma célula?
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "oklch(0.65 0.015 240)",
              maxWidth: "600px",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            Explore cada etapa do processo de extração de DNA clicando nas etapas abaixo.
            Descubra os princípios científicos por trás de cada fase.
          </p>

          {/* Progress bar */}
          <div
            style={{
              maxWidth: "400px",
              margin: "0 auto",
              background: "oklch(0.2 0.025 240)",
              borderRadius: "2rem",
              height: "8px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, oklch(0.65 0.22 165), oklch(0.55 0.18 200))",
                borderRadius: "2rem",
                transition: "width 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            />
          </div>
          {completedSteps.size > 0 && (
            <p style={{ fontSize: "0.8rem", color: "oklch(0.6 0.015 240)", marginTop: "0.5rem" }}>
              {Math.round(progress)}% explorado
            </p>
          )}
        </section>

        {/* Steps Grid */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            const isCompleted = completedSteps.has(step.id);

            return (
              <button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                style={{
                  background: isActive
                    ? `oklch(0.17 0.025 240)`
                    : "oklch(0.16 0.022 240)",
                  border: `1px solid ${isActive ? step.color : isCompleted ? `${step.color}60` : "oklch(0.28 0.03 240)"}`,
                  borderRadius: "1.25rem",
                  padding: "1.5rem",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
                  outline: "none",
                  boxShadow: isActive
                    ? `0 0 0 2px ${step.color}40, 0 8px 32px ${step.color}20`
                    : "none",
                  transform: isActive ? "translateY(-2px)" : "translateY(0)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    marginBottom: "0.875rem",
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "0.875rem",
                      background: `${step.color}18`,
                      border: `1px solid ${step.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.4rem",
                      flexShrink: 0,
                    }}
                  >
                    {isCompleted && !isActive ? "✅" : step.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: step.color,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Etapa {step.id}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "oklch(0.92 0.005 240)",
                        margin: 0,
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      color: "oklch(0.45 0.015 240)",
                      transition: "transform 0.2s",
                      transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "oklch(0.62 0.015 240)",
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  {step.description}
                </p>
              </button>
            );
          })}
        </section>

        {/* Detail Panel */}
        {activeStepData && (
          <section
            style={{
              background: "oklch(0.17 0.025 240)",
              border: `1px solid ${activeStepData.color}50`,
              borderRadius: "1.5rem",
              padding: "2rem",
              boxShadow: `0 0 0 1px ${activeStepData.color}20, 0 16px 48px ${activeStepData.color}15`,
              animation: "fadeSlideIn 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <style>{`
              @keyframes fadeSlideIn {
                from { opacity: 0; transform: translateY(12px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "1rem",
                  background: `${activeStepData.color}20`,
                  border: `1px solid ${activeStepData.color}50`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.75rem",
                }}
              >
                {activeStepData.icon}
              </div>
              <div>
                <p style={{ margin: 0, fontSize: "0.75rem", color: activeStepData.color, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Etapa {activeStepData.id} — Detalhes
                </p>
                <h2
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "oklch(0.95 0.005 240)",
                    margin: 0,
                  }}
                >
                  {activeStepData.title}
                </h2>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {/* Checklist */}
              <div>
                <h4
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "oklch(0.7 0.015 240)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    margin: "0 0 0.875rem",
                  }}
                >
                  Principais Ações
                </h4>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {activeStepData.details.map((detail, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                        fontSize: "0.9rem",
                        color: "oklch(0.78 0.008 240)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          borderRadius: "50%",
                          background: `${activeStepData.color}20`,
                          border: `1px solid ${activeStepData.color}50`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          color: activeStepData.color,
                          flexShrink: 0,
                          marginTop: "0.1rem",
                        }}
                      >
                        {i + 1}
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fun Fact */}
              <div
                style={{
                  background: `${activeStepData.color}10`,
                  border: `1px solid ${activeStepData.color}30`,
                  borderRadius: "1rem",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1.25rem" }}>💡</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: activeStepData.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Curiosidade Científica
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "oklch(0.85 0.008 240)",
                    margin: 0,
                    lineHeight: 1.65,
                    fontStyle: "italic",
                  }}
                >
                  "{activeStepData.fact}"
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Footer info */}
        {completedSteps.size === steps.length && (
          <div
            style={{
              marginTop: "2.5rem",
              textAlign: "center",
              background: "oklch(0.65 0.22 165 / 0.08)",
              border: "1px solid oklch(0.65 0.22 165 / 0.3)",
              borderRadius: "1.25rem",
              padding: "2rem",
              animation: "fadeSlideIn 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🎉</div>
            <h3
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "oklch(0.95 0.005 240)",
                margin: "0 0 0.5rem",
              }}
            >
              Parabéns! Você completou todas as etapas!
            </h3>
            <p style={{ color: "oklch(0.65 0.015 240)", fontSize: "0.95rem", margin: 0 }}>
              Agora você conhece todo o processo de extração de DNA. Continue explorando a biologia molecular!
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid oklch(0.22 0.025 240)",
          padding: "1.5rem 0",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "0.8rem", color: "oklch(0.45 0.01 240)", margin: 0 }}>
          🧬 Extração de DNA — Atividade Educacional Interativa
        </p>
      </footer>
    </div>
  );
}
