import { KameleoonClient, CustomData } from "@kameleoon/nodejs-sdk";
import { KameleoonEventSource } from "@kameleoon/nodejs-event-source";
import { KameleoonRequester } from "@kameleoon/nodejs-requester";
import { KameleoonVisitorCodeManager } from "@kameleoon/nodejs-visitor-code-manager";

export default function KameleoonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const client = new KameleoonClient({
    siteCode: "hpy9fwy751",
    credentials: {
      clientId: "24114-crobin-kameleoon-com",
      clientSecret: "tX1CcEdEA4vn8dy_P6BP6VTOh00X-TSWWLKXPx40RRM",
    },
    externals: {
      eventSource: new KameleoonEventSource(),
      visitorCodeManager: new KameleoonVisitorCodeManager(),
      requester: new KameleoonRequester(),
    },
  });

  async function init(): Promise<void> {
    await client.initialize();

    
    
    

    
    

    
    
    
    

    
  }

  

  return <>{children}</>;
}
