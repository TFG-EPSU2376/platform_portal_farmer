import React from "react";
import "./GanttChart.css";

const GanttChart = () => {
  const phases = [
    "Análisis",
    "Selección",
    "Diseño",
    "Desarrollo",
    "Validación",
  ];
  const tasks = [
    {
      module: "Infraestructura TI",
      activities: [
        { name: "MVP Terraform", start: 0, duration: 1 },
        { name: "AWS IoT ", start: 1, duration: 2 },
        { name: "Visualización", start: 2, duration: 3 },
        { name: "Analisis", start: 3, duration: 4 },
      ],
    },
    {
      module: "AWS IoT Core",
      activities: [
        { name: "Base", start: 0, duration: 1 },
        { name: "Dispositivo Edge", start: 1, duration: 2 },
        { name: "Sensores", start: 2, duration: 2 },
        { name: "Gateways", start: 3, duration: 2 },
      ],
    },
    {
      module: "Gateway",
      activities: [
        { name: "Envío LoRa", start: 1, duration: 1 },
        { name: "Thread Leader", start: 2, duration: 1 },
        { name: "Hibernación", start: 2, duration: 2 },
        { name: "Baterías/Panel Solar", start: 3, duration: 1 },
        { name: "Empaquetado", start: 4, duration: 1 },
      ],
    },
    {
      module: "Sensor de Humedad del Suelo",
      activities: [
        { name: "Comparativa", start: 0, duration: 1 },
        { name: "Protoboard", start: 1, duration: 1 },
        { name: "DevKit", start: 2, duration: 1 },
        { name: "PCB Custom", start: 3, duration: 1 },
        { name: "Empaquetado", start: 4, duration: 1 },
      ],
    },
    {
      module: "Estación Meteorológica",
      activities: [
        { name: "Solución OpenSource", start: 0, duration: 1 },
        { name: "BME280", start: 1, duration: 1 },
        { name: "Pluviómetro", start: 2, duration: 1 },
        { name: "IoT/Hibernación", start: 3, duration: 1 },
        { name: "Pruebas", start: 4, duration: 1 },
      ],
    },
    {
      module: "Visualización",
      activities: [
        { name: "Grafana", start: 1, duration: 1 },
        { name: "React One Page", start: 2, duration: 1 },
        { name: "React Completo", start: 3, duration: 1 },
        { name: "Integración Datos", start: 3, duration: 2 },
        { name: "Pruebas", start: 4, duration: 1 },
      ],
    },
    {
      module: "Análisis",
      activities: [
        { name: "BBDD Temporales", start: 1, duration: 1 },
        { name: "Sistema Alertas", start: 2, duration: 1 },
        { name: "Reglas Estrés", start: 3, duration: 1 },
        { name: "Reglas Plagas", start: 3, duration: 2 },
        { name: "Validación", start: 4, duration: 1 },
      ],
    },
  ];

  const colors = [
    "#4CAF50",
    "#2196F3",
    "#FFC107",
    "#E91E63",
    "#9C27B0",
    "#00BCD4",
    "#FF5722",
    "#795548",
  ];

  return (
    <div className="gantt-chart">
      <div className="phases">
        {phases.map((phase) => (
          <div key={phase} className="phase">
            {phase}
          </div>
        ))}
      </div>
      {tasks.map((task, index) => (
        <div key={task.module} className="task-row">
          <div className="module-name">{task.module}</div>
          <div className="activities">
            {task.activities.map((activity) => (
              <div
                key={activity.name}
                className="activity"
                style={{
                  left: `${activity.start * 20}%`,
                  width: `${activity.duration * 20}%`,
                  backgroundColor: colors[index % colors.length],
                }}
              >
                {activity.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GanttChart;
