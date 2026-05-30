import Section from "../../Layout/Section/Section";
import Card from "../../molicules/Card/Card";

export default function Architectures(){
    return(
        <Section title="Architectures" id="architectures" subtitle="Leveraging modern architectural patterns to ensure team autonomy, faster deployments, and system reliability.">
           <div className="flex flex-row-reverse">
             <Card title="Monorepo Architecture" className="flex-1">
                Centralized codebase with Nx monorepo, enabling shared libraries, consistent tooling, and faster CI/CD pipelines.

            </Card>
            
            <Card title=" Micro‑Frontend Architecture "  className="flex-1">
                 Modular React apps using Module Federation, providing independence, scalability, and team autonomy.

                
            </Card>
            <Card title=" Microservices Architecture"  className="flex-1">
               
                 Python FastAPI/Flask microservices with API versioning, ensuring loose coupling, independent deployment, and better fault isolation.

               
            </Card>
            <Card title=" API Version Controlling"  className="flex-1">
               
             Structured REST API versioning, delivering backward compatibility, smooth upgrades, and reliable client integrations.
            </Card>

            </div>        </Section>
    )
}