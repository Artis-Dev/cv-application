function Contacts(props) {
  const contactsData = props;

  return (
    <div className="flex gap-x-8 text-sm">
      <div className="w-1/2">
        <p className="font-bold">
          Mail: <span className="font-normal">{contactsData.mail}</span>
        </p>
        <p className="font-bold">
          Phone: <span className="font-normal">123456789</span>
        </p>
      </div>
      <div className="w-1/2">
        <p className="font-bold">
          LinkedIn: <span className="font-normal">/in/username</span>
        </p>
        <p className="font-bold">
          GitHub: <span className="font-normal">/username</span>
        </p>
      </div>
    </div>
  );
}

export default Contacts;
