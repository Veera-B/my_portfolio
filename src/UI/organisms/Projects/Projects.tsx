import Section from "../../Layout/Section/Section";
import Card from "../../molicules/Card/Card";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Real-world applications engineered for seamless user experience, high scalability,clean and reusable code."
    >
      <div className="flex md:flex-row flex-col">
        <Card title="Chatbot | AI-Agent  Generative AI Service" className="flex-1">
          Built a production-ready AI chatbot microservice using FastAPI, LangChain, 
          LlamaIndex, and ChromaDB (vector DB). Implemented RAG (Retrieval-Augmented 
          Generation) pipeline with Groq LLM for fast, context-aware responses. 
          Fully containerized 
          with Docker for independent deployment.
        </Card>
         <Card title="Text‑to‑Voice Generative AI Service" className="flex-1">
          Built FastAPI microservice integrating Edge‑TTS. Designed REST APIs
          for text‑to‑speech real-time text-to-voice outputs conversion. Modular microservice design for
          scalability and deployment.
        </Card>
        <Card
          title="MCN (Managed Campus Network) Portal"
          //   sub_title="Senior Software Engineer"
          className="flex-1"
        >
          Built onboarding & monitoring system for network devices (ITSM +
          LogicMonitor). Integrated Grafana dashboards via iframes for analytics
          and reporting. Used ADX for monitoring data storage and CMDB for
          device inventory. Created reusable React components from Figma
          designs.
        </Card>
        <Card
          title="MCN | Spektra‑AQT (Advanced Quoting Tool)"
          className="flex-1"
        >
          Scratch‑built quoting tool portal with React, Redux, Flask
          microservices. Aggregated network cost lists from multiple providers,
          enabling lowest‑to‑highest price comparison. Designed secure
          authentication flows with JWT rotation and HTTP‑only cookies.
        </Card>
       
        <Card title="Verizon Wireless 5G Home NSA" className="flex-1">
          Developed scalable web applications using React, Redux‑Saga, Axios.
          Supported 5G home internet services with 4G fallback. Enabled online
          service for store pickup and doorstep delivery.
        </Card>
      </div>
    </Section>
  );
}
