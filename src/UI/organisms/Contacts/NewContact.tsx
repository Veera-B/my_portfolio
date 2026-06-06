import Section from "../../Layout/Section/Section";
import Card from "../../molicules/Card/Card";
import { CiMail } from "react-icons/ci";
import { GiVibratingSmartphone } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";

export default function NewContact() {
  return (
    <Section
      id="contacts"
      title="Get In TOUCH"
      className="py-25 flex flex-col items-center justify-center mt-7"
    >
      <Card className="">
        <div className="flex flex-col items-center justify-center gap-4 p-4">
   
          <p className="flex items-center gap-3 text-slate-900 font-medium hover:text-fuchsia-800 transition-colors">
            <CiMail className="text-xl text-fuchsia-600 shrink-0" />
            <span>veerabashpangu@gmail.com</span>
          </p>

   
          <p className="flex items-center gap-3 text-slate-950 font-medium hover:text-fuchsia-800 transition-colors">
            <GiVibratingSmartphone className="text-xl text-fuchsia-600 shrink-0" />
            <span>9885969252</span>
          </p>

        
          <p className="flex items-center gap-3 text-slate-900 font-medium hover:text-fuchsia-800 transition-colors">
            <AiFillGithub className="text-xl text-fuchsia-900 shrink-0" />
            <span>https://github.com</span>{" "}
         
          </p>
        </div>
      </Card>
    </Section>
  );
}
