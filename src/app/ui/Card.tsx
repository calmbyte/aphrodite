export default function Card() {
  return (
    <div className="card">
      <div className="card-border"></div>
      <div className="card-content">
        <h2 className="text-[40px] mb-4">Our Solutions</h2>
        <ul className="pl-4 list-disc text-[20px]">
          <li>
            <span className="font-bold">Personalized AI Assistant:</span> Your assistant can be
            created based on any text document, train your model in seconds and let Byte do the rest
          </li>
          <li>
            <span className="font-bold">Resources optimization:</span> CalmByte AI optimizes time
            management, helping companies reduce time waste and enhance efficiency. By automating
            routine tasks, CalmByte AI enables businesses to focus on strategic initiatives and
            achieve greater productivity.
          </li>
          <li>
            <span className="font-bold">User friendly strategy:</span> Users can easily communicate
            with Byte through intuitive interface, ensuring smooth coordination by AI.
          </li>
        </ul>
      </div>
    </div>
  );
}
