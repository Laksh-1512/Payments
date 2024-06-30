import React from 'react'
const data=[
    {
        question:"How does the 30-day free trial work?",
        answer:"You can use GemStone absolutely free for 30 days. After 30 days, we will charge the credit card you used when you sign up. If you choose to cancel your account before your trial ends, your card will not be charged.",
},{
        question:"What is a Financial Account?",
        answer:"Financial Accounts are a grouping of income and expense items that can be used for tracking or reporting purposes They're designed to be flexible and can be used to differentiate between bank accounts, companies, individuals or between personal and business entries.",
},{
        question:"Will I be able to cancel my account if I don't use GemStone?",
        answer:"Yes - you can cancel your account at any time. To cancel your account, go to your billing page and click on Please cancel my account at the bottom of the page. The account owner is the only one who can cancel an account. An email request to delete an account is not considered cancellation.",
},{
        question:"How does the 30-day free trial work?",
        answer:"You can use GemStone absolutely free for 30 days. After 30 days, we will charge the credit card you used when you sign up. If you choose to cancel your account before your trial ends, your card will not be charged.",
},{
        question:"What is a Financial Account?",
        answer:"Financial Accounts are a grouping of income and expense items that can be used for tracking or reporting purposes They're designed to be flexible and can be used to differentiate between bank accounts, companies, individuals or between personal and business entries.",
},{
        question:"Will I be able to cancel my account if I don't use GemStone?",
        answer:"Yes - you can cancel your account at any time. To cancel your account, go to your billing page and click on Please cancel my account at the bottom of the page. The account owner is the only one who can cancel an account. An email request to delete an account is not considered cancellation.",
},
];
const FAQ = () => {
  return (
        <div className='m-10'>
        <h1 className='text-3xl font-bold mb-5'>FAQ</h1>
        <div className='h-[30rem] w-full grid grid-cols-2 gap-5 ' >
        {data.map((e)=><div className='m-2 shadow-lg p-2'><h1 className='font-semibold'>{e.question}</h1><h1>{e.answer}</h1></div>)}
        </div>
        </div>
   
  )
}

export default FAQ
