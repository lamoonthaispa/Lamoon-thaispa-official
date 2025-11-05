import messages from "@/content/messages.json"
import ServiceHighlight from "./ServiceHighlight"
import Divider from "./Divider";
export default function Services() {
  const services = messages.landing.services
  const buttonText = services.button

  const serviceEntries = Object.entries(services)
    .filter(([key]) => key !== 'button')
    .map(([key, serviceData]) => {
      const service = serviceData as {
        title: string;
        description: { type: string; value: string }[];
        image: string;
      };
      return { key, service };
    });

  return (
    <div>
      <Divider />
      {serviceEntries.map(({ key, service }, index) => (
        <ServiceHighlight
          key={key}
          title={service.title}
          description={service.description}
          image={service.image}
          reverse={index % 2 === 0}
          buttonText={buttonText}
        />
      ))}
    </div>
  )
}