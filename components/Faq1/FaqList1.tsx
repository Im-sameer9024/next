import Faq1 from "./Faq1";

const FaqList1 = () => {
  const faqs = [
    {
      question: 'Can I join SRM IST without the entrance?',
      answer:
        "Yes, SRM University offers direct admission to certain programs for eligible candidates who meet the required eligibility criteria. The admission criteria for these programs may include past academic  performance, work experience, and other relevant factors. However, for  most of the programs offered by SRM University, admission is through the SRMJEEE (SRM Joint Engineering Entrance Examination) or other national level entrance exams.Therefore, it is recommended that you check the specific admission requirements  for the programme you are interested in on the university's website or  by contacting the admissions office. In case you do not qualify for  direct admission or wish to appear for the entrance exam, you can apply  for SRMJEEE and appear for the exam. The exam is conducted annually and  is the basis for admission to several programs offered by the  university."
    },
    {
      question: 'What are the eligibility criteria for SRM IST?',
      answer:
        'The eligibility criteria for SRM IST varies based on the program you are applying for. Typically, candidates must have completed higher secondary education with minimum marks in relevant subjects.',
    },
    {
      question: 'Is there a scholarship program at SRM IST?',
      answer:
        'Yes, SRM IST offers various scholarship programs based on merit, sports, and other criteria. Details can be found on the official SRM IST website.',
    },
  ];

  return (
    <div className="w-full  mt-8">
      {faqs.map((faq, index) => (
        <Faq1 key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqList1;
