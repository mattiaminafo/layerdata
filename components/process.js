"use client";
import { useTranslations } from "../lib/useTranslations";

export default function Process() {
  const { t } = useTranslations();
const phases = [
  {
    name: "FASE 1",
    color: "bg-rose-500",
    steps: [
      {
        title: "DISCOVERY & STRATEGY",
        color: "bg-rose-500",
        activities: [
          "Kickoff & Stakeholder Alignment",
          "Definizione obiettivi/KPI",
          "Audit stack & data source inventory",
          "Assessment privacy/consenso (GDPR, TCF, Consent Mode)",
          "Measurement Plan & success criteria"
        ]
      }
    ]
  },
  {
    name: "FASE 2",
    color: "bg-amber-500",
    steps: [
      {
        title: "DATA DESIGN",
        color: "bg-amber-500",
        activities: [
          "Data model & identity graph (PII, keys, stitching)",
          "Event taxonomy & naming convention",
          "Tracking spec (Web/App/Server)",
          "Mappatura consensi e policy dati",
          "Selezione strumenti (CDP, ETL, Reverse ETL, BI)"
        ]
      }
    ]
  },
  {
    name: "FASE 3",
    color: "bg-blue-500",
    steps: [
      {
        title: "IMPLEMENTATION",
        color: "bg-blue-500",
        activities: [
          "Setup ETL/Ingestion (SDK, API, batch/stream)",
          "GTM/SDK & Server-Side Tagging",
          "Identity resolution & deduplica",
          "Backfill storico & normalizzazione",
          "QA tecnica & data validation (schema, qualità)"
        ]
      }
    ]
  },
  {
    name: "FASE 4",
    color: "bg-emerald-500",
    steps: [
      {
        title: "ACTIVATION & ANALYTICS",
        color: "bg-emerald-400",
        activities: [
          "Segmenti & audience strategy",
          "Reverse ETL verso canali (Ads, CRM, Email)",
          "Journey orchestration & personalization",
          "Dashboard/BI & insight"
        ]
      }
    ]
  },
  {
    name: "FASE 5",
    color: "bg-blue-500",
    steps: [
      {
        title: "RUN & GOVERNANCE",
        color: "bg-blue-500",
        activities: [
          "Monitoring & alerting (SLA, data contracts)",
          "Documentazione & runbook",
          "Formazione team & handover",
          "Ciclo di ottimizzazione continua"
        ]
      }
    ]
  }
];




  return (
    <section className="w-full py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-gotham">
            {t('process.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">


          {/* Mobile Layout - Vertical Stack */}
          <div className="md:hidden space-y-8">
            {phases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="space-y-4">
                
                 
                 {/* Phase Steps */}
                 {phase.steps.map((step, stepIndex) => (
                   <div key={stepIndex} className="bg-white rounded-2xl p-6 shadow-lg">
                     <h3 className="bg-black text-white px-4 py-2 rounded-lg text-center font-bold mb-4" style={{border: '3px solid #fff248'}}>
                       {step.title}
                     </h3>
                     <ul className="space-y-2">
                       {step.activities.map((activity, activityIndex) => (
                         <li key={activityIndex} className="flex items-center space-x-3">
                           <div className="w-2 h-2 bg-white rounded-full"></div>
                           <span className="text-gray-700">{activity}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 ))}
              </div>
            ))}
          </div>

                    {/* Tablet & iPad Layout - Optimized for medium screens */}
          <div className="hidden md:block xl:hidden">
            <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
              {phases.map((phase, phaseIndex) => (
                <div key={phaseIndex} className="space-y-4">
                  {phase.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="text-center">

                      
                      {/* Step Circle */}
                      <div className="bg-black w-40 h-40 rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto" style={{border: '3px solid #fff248'}}>
                        <h3 className="text-white font-bold text-xl text-center px-4">{step.title}</h3>
                      </div>
                      
                      {/* Activities */}
                      <ul className="space-y-2 text-sm">
                        {step.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="text-black font-medium">{activity}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Overlapping circles with phases */}
          <div className="hidden xl:block">
            <div className="relative h-[400px] flex items-center justify-center -mx-4">
              {/* Dotted horizontal line behind circles */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black opacity-30" style={{
                backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 20px, #000 20px, #000 24px)'
              }}></div>


              {/* Process Circles */}
              <div className="flex items-center justify-center space-x-12 mt-20">
                {/* DISCOVERY & STRATEGY - FASE 1 */}
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full font-bold text-sm text-center" style={{border: '2px solid #fff248'}}>
                    FASE 1
                  </div>
                  <div className="bg-black w-40 h-40 rounded-full flex items-center justify-center shadow-xl" style={{border: '4px solid #fff248'}}>
                    <h3 className="text-white font-bold text-lg text-center px-2">DISCOVERY & STRATEGY</h3>
                  </div>
                  <div className="absolute top-48 left-1/2 transform -translate-x-1/2 w-48">
                    <ul className="space-y-1 text-xs text-black text-center">
                      <li>Kickoff & Stakeholder Alignment</li>
                      <li>Definizione obiettivi/KPI</li>
                      <li>Audit stack & data source</li>
                      <li>Assessment privacy/consenso</li>
                      <li>Measurement Plan</li>
                    </ul>
                  </div>
                </div>

                {/* DATA DESIGN - FASE 2 */}
                <div className="relative -ml-6">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full font-bold text-sm text-center" style={{border: '2px solid #fff248'}}>
                    FASE 2
                  </div>
                  <div className="bg-black w-40 h-40 rounded-full flex items-center justify-center shadow-xl" style={{border: '4px solid #fff248'}}>
                    <h3 className="text-white font-bold text-lg text-center px-2">DATA DESIGN</h3>
                  </div>
                  <div className="absolute top-48 left-1/2 transform -translate-x-1/2 w-48">
                    <ul className="space-y-1 text-xs text-black text-center">
                      <li>Data model & identity graph</li>
                      <li>Event taxonomy & naming</li>
                      <li>Tracking spec</li>
                      <li>Mappatura consensi</li>
                      <li>Selezione strumenti</li>
                    </ul>
                  </div>
                </div>

                {/* IMPLEMENTATION - FASE 3 */}
                <div className="relative -ml-6">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full font-bold text-sm text-center" style={{border: '2px solid #fff248'}}>
                    FASE 3
                  </div>
                  <div className="bg-black w-40 h-40 rounded-full flex items-center justify-center shadow-xl" style={{border: '4px solid #fff248'}}>
                    <h3 className="text-white font-bold text-lg text-center px-2">IMPLEMENT</h3>
                  </div>
                  <div className="absolute top-48 left-1/2 transform -translate-x-1/2 w-48">
                    <ul className="space-y-1 text-xs text-black text-center">
                      <li>Setup ETL/Ingestion</li>
                      <li>GTM/SDK & Server-Side</li>
                      <li>Identity resolution</li>
                      <li>Backfill storico</li>
                      <li>QA tecnica</li>
                    </ul>
                  </div>
                </div>

                {/* ACTIVATION & ANALYTICS - FASE 4 */}
                <div className="relative -ml-6">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full font-bold text-sm text-center" style={{border: '2px solid #fff248'}}>
                    FASE 4
                  </div>
                  <div className="bg-black w-40 h-40 rounded-full flex items-center justify-center shadow-xl" style={{border: '4px solid #fff248'}}>
                    <h3 className="text-white font-bold text-lg text-center px-2">ACTIVATION & ANALYTICS</h3>
                  </div>
                  <div className="absolute top-48 left-1/2 transform -translate-x-1/2 w-48">
                    <ul className="space-y-1 text-xs text-black text-center">
                      <li>Segmenti & audience</li>
                      <li>Reverse ETL verso canali</li>
                      <li>Journey orchestration</li>
                      <li>Dashboard/BI & insight</li>
                    </ul>
                  </div>
                </div>

                {/* RUN & GOVERNANCE - FASE 5 */}
                <div className="relative -ml-6">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full font-bold text-sm text-center" style={{border: '2px solid #fff248'}}>
                    FASE 5
                  </div>
                  <div className="bg-black w-40 h-40 rounded-full flex items-center justify-center shadow-xl" style={{border: '4px solid #fff248'}}>
                    <h3 className="text-white font-bold text-lg text-center px-2">RUN & GOVERNANCE</h3>
                  </div>
                  <div className="absolute top-48 left-1/2 transform -translate-x-1/2 w-48">
                    <ul className="space-y-1 text-xs text-black text-center">
                      <li>Monitoring & alerting</li>
                      <li>Documentazione & runbook</li>
                      <li>Formazione team</li>
                      <li>Ottimizzazione continua</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
