export default function Card() {
  return (
    <div className="card">
      <div className="card-border"></div>
      <div className="card-content">
        <h2 className="text-[40px] mb-4">Our Solutions</h2>
        <ul className="pl-4 list-disc text-[20px]">
          <li>
            <span className="font-bold">Intelligent Scheduling:</span> Our AI
            assistant helps users efficiently plan event schedules by analyzing
            various factors such as venue availability, attendee preferences,
            and optimal timing.
          </li>
          <li>
            <span className="font-bold">Personalized Recommendations:</span>{' '}
            Leveraging advanced algorithms, our platform offers tailored
            suggestions for vendors, speakers, and activities based on user
            preferences and event requirements.
          </li>
          <li>
            <span className="font-bold">Seamless Attendee Management:</span>{' '}
            Users can easily manage invitations, and attendee communications
            through intuitive interface, ensuring smooth coordination before and
            during the event.
          </li>
        </ul>
      </div>
    </div>
  );
}
