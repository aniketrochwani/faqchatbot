import React from "react";
import ChatBot from "react-simple-chatbot";

const qna = [
    {
        "ques": "I signed up for Hacktoberfest mid-October. Will pull requests that I created earlier in October count?",
        "ans": "Yes, all pull requests created between Oct 1 and Oct 31 will count, regardless of when you register for Hacktoberfest."
    },
    {
        "ques": "How do I get stickers?",
        "ans": "Stickers are included with your T-shirt, once you completed the requirements to earn a prize.",
    },
    {
        "ques": "How do I track my progress?",
        "ans": "Log in with your GitHub or GitLab account at hacktoberfest.digitalocean.com to check your progress and stats.",
    },
    {
      "ques": "How is DigitalOcean helping the environment? ",
      "ans": "To limit our carbon impact, we are paying for carbon offsets. And to further help the environment, we're offering the option to plant a tree rather than receive a shirt.",
    },
    {
      "ques": "What is Hacktoberfest?",
      "ans": "Hacktoberfest is a month-long global celebration of open source software run by DigitalOcean in partnership with Intel, AppWrite, and DeepSource, with a strong focus on encouraging contributions to open source projects.",
    },
    {
      "ques": "What is a pull request? ",
      "ans": "Pull requests are proposed code changes you can submit to a branch in a repository on GitHub/GitLab. Once submitted, a project maintainer will review and discuss the changes before they become final. ",
    },
    {
      "ques": "What is open source?",
      "ans": "Open source refers to source code that is publicly accessible and allows anyone to inspect, modify or learn from it. Open source projects encourage collaboration and the freedom to use the software for any purpose you wish.",
    },
    {
      "ques": "Do I get a prize for participating?",
      "ans": "Aside from the knowledge you’ll gain, (and the fun you’ll have), you can earn a limited-edition Hacktoberfest t-shirt. ",
    },
    {
      "ques": "Do pull requests made on my own repositories count?",
      "ans": "Yes, but we strongly encourage you to make quality contributions to other repositories. ",
    },
]

const Check = (props) => {
    const {userQuery} = props.steps;
    var ans = "";

    for(var i=0; i<qna.length; i++){
        if(qna[i].ques.search(userQuery.message) !== -1){
            console.log(qna[i].ans);
            ans = qna[i].ans;
            break;
        }
    }

    if(ans === "") return <>{qna[0].ans}</>
    return <> {ans} </>
}

function CustomChatbot(props) {

  const steps = [
    {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        trigger: 'query',
      },
      {
        id: 'query',
        message: 'Please provide your query',
        trigger: 'userQuery',
      },
      {
        id: 'userQuery',
        user: true,
        trigger: '5',
      },
      {
        id: '5',
        component: <Check />,
        asMessage: true,
        trigger: '6',
      },
      {
        id: '6',
        message: 'Hope this answer helped you!',
        trigger: '7',
      },
      {
        id: '7',
        message: 'Do you have any other query?',
        trigger: '8'
      },
      {
        id: '8',
        options: [
            {value: 1, label: "Yes", trigger: "query"},
            {value: 2, label: "No", trigger: "9"},
        ],
      },
      {
        id: '9',
        message: "Thank you for using our service 😇",
        end: true,
      },
    ];

  return <ChatBot headerTitle = "HacktoberFest FAQs" steps={steps}/>;
}

export default CustomChatbot;