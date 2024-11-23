import React from 'react'
import Faq from './Faq'

const FaqList = () => {
  const data = [
    { id: 1, ques: "Can I join SRM IST without the entrance?", ans: "Yes, SRM University offers direct admission to certain programs for eligible candidates who meet the required eligibility criteria. The admission criteria for these programs may include past academic  performance, work experience, and other relevant factors. However, for  most of the programs offered by SRM University, admission is through the SRMJEEE (SRM Joint Engineering Entrance Examination) or other national level entrance exams.Therefore, it is recommended that you check the specific admission requirements  for the programme you are interested in on the university's website or  by contacting the admissions office. In case you do not qualify for  direct admission or wish to appear for the entrance exam, you can apply  for SRMJEEE and appear for the exam. The exam is conducted annually and  is the basis for admission to several programs offered by the  university." },

    { id: 2, ques: "Can I join SRM IST without the entrance?", ans: "Yes, SRM University offers direct admission to certain programs for eligible candidates who meet the required eligibility criteria. The admission criteria for these programs may include past academic  performance, work experience, and other relevant factors. However, for  most of the programs offered by SRM University, admission is through the SRMJEEE (SRM Joint Engineering Entrance Examination) or other national level entrance exams.Therefore, it is recommended that you check the specific admission requirements  for the programme you are interested in on the university's website or  by contacting the admissions office. In case you do not qualify for  direct admission or wish to appear for the entrance exam, you can apply  for SRMJEEE and appear for the exam. The exam is conducted annually and  is the basis for admission to several programs offered by the  university." },
    { id: 3, ques: "Can I join SRM IST without the entrance?", ans: "Yes, SRM University offers direct admission to certain programs for eligible candidates who meet the required eligibility criteria. The admission criteria for these programs may include past academic  performance, work experience, and other relevant factors. However, for  most of the programs offered by SRM University, admission is through the SRMJEEE (SRM Joint Engineering Entrance Examination) or other national level entrance exams.Therefore, it is recommended that you check the specific admission requirements  for the programme you are interested in on the university's website or  by contacting the admissions office. In case you do not qualify for  direct admission or wish to appear for the entrance exam, you can apply  for SRMJEEE and appear for the exam. The exam is conducted annually and  is the basis for admission to several programs offered by the  university." }
  ]
  return (
    <div>
      {
        data.map((item) =>(
          <Faq id={ item.id} que={item.ques} ans={item.ans}/>
        ))
      }
    </div>
  )
}

export default FaqList
