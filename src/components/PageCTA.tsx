import { Button } from "./Button";

type CTAProps = {
  background?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  color?: string;
};

export default function PageCTA({
  title = "Let’s Build the Right Tech Together",
  description = "Whether you're building a new platform or optimizing an existing one, our experts are ready to support your growth with strategy, execution, and scale.",
  buttonText = "Schedule a Consultation",
}: CTAProps) {
  return (
    <section
      className={`min-h-[70vh] bg-[#28001E] w-[100vw] grid items-center`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className={`text-5xl font-bold mb-6 text-blue-gradient`}>
            {title}
          </h2>
          <p className={`text-xl text-white mb-8`}>{description}</p>
          <Button bgColor="#BBF2FF" text={buttonText} />
        </div>
      </div>
    </section>
  );
}
