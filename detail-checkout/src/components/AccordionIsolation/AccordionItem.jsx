const AccordionItem = ({ faq, onToggle, open, index }) => {
  const { question, answer } = faq;

  console.log(open);
  return (
    <li>
      <button onClick={() => onToggle(index)}>
        {question}
        <span>+</span>
      </button>
      {open && (
        <div>
          <div>{answer}</div>
        </div>
      )}
    </li>
  );
};

export default AccordionItem;
